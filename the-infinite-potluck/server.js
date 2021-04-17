const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;

//list of broadcasters
let broadcasters = {};

//twilio id/token for STUN/TURN servers
const accountSid = 'AC5bf0645d5c285488bb95eaa4734b81ec';
const authToken = 'c26b3c993712a8f255dbca415543cea1';
const twilioClient = require('twilio')(accountSid, authToken);
//STUN/TURN server configs
const config = {};
twilioClient.tokens.create().then(token => {
  config.iceServers = token.iceServers;
});

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
//middleware function to check jwt
const client = jwksClient({
  cache: true,
  cacheMaxEntries: 10,
  rateLimit: true,
  // for local development on port 3000
  // jwksUri: `https://dev-572t65wb.auth0.com/.well-known/jwks.json`
  jwksUri: `https://raspy-silence-2106.auth0.com/.well-known/jwks.json`
});

/* STREAMING COMMUNICATION CHANNEL; can have multiple 'channels' in the future for 
   several 'independent' socket communication spaces
*/
const streamio = io.of('/stream');


/* middleware to verify that the connecting user has a valid JWT
   THIS IS RUN WHENEVER THERE IS A REQUESTING CONNECTION
*/
streamio.use((socket, next) => {
  let handshakeData = socket.request;
  //check if cookie exists
  if (handshakeData && handshakeData.headers.cookie) {
    let cookie = handshakeData.headers.cookie;
    let hasToken = cookie.lastIndexOf('jwtToken=');
    //if no token, prevent connection
    if(hasToken == -1) {
      next(new Error('not authorized'));
    }
    // index starts inclusive of string 'jwtToken='; +9 chars for start of token
    let index_beg = hasToken + 9;
    // ending index of token
    let index_end = cookie.indexOf(';', index_beg);
    //extract the token
    let jwtToken = cookie.substring(index_beg, index_end);
    //decode the token and get the key id
    let decodedToken = jwt.decode(jwtToken, { complete: true });
    let kid = decodedToken.header.kid;
    let signingKey;
    //get the public key from the specified key id and verify the JWT
    client.getSigningKey(kid, (err, key) => {
      signingKey = key.getPublicKey();
      console.log("SIGNING KEY: " + signingKey);
      try {
        jwt.verify(jwtToken, signingKey);
        console.log("VERIFIED");
        next();
      } catch (error) {
        console.log("NOT VERIFIED");
        next(new Error('not authorized'));
      }
    });
  }
});

//Socket signalling logic; when a client connects
streamio.on('connection', socket => {
  //broadcaster connected
  socket.on('broadcaster', (recipe, name) =>{
      let broadcaster = socket.id;
      //keep track of broadcaster
      broadcasters[broadcaster] = [recipe, name];
      //relay to watcher
      socket.emit('broadcaster', config);
  });

  //watcher connected
  socket.on('watcher', () =>{
    //respond back with list of broadcasters
    socket.emit('stream_choice', broadcasters);
  });

  //watcher chooses broadcaster
  socket.on('stream_chosen', (broadcaster) => {
    //notify the chosen broadcaster with the watcher's socket id, and add server configuration.
    if(broadcaster in broadcasters){
      socket.to(broadcaster).emit('watcher', socket.id, config);
    }
  });

  //broadcaster extends an offer
  socket.on('offer', (id, message) => {
    //relay the offer to the specified watcher with the broadcaster's socket id, connection description info, and server config.
    socket.to(id).emit('offer', socket.id, message, config);
  });

  //watcher answers
  socket.on('answer', (id, message) => {
    //relay the answer to the specified broadcaster, with the watcher's socket id and connection description
    socket.to(id).emit('answer', socket.id, message);
  });

  //relay ICE candidate to specified peer
  socket.on('candidate', (id, message) => {
    socket.to(id).emit('candidate', socket.id, message);
  });

  //watcher sends signal for stream pop-up message
  socket.on('stream_popup', (id, message) => {
    //relay signal to specified broadcaster with message
    socket.to(id).emit('stream_popup', message);
  });

  //broadcaster sends recipe info for the stream
  socket.on('recipe_data', (id, data) => {
    //relay to specified watcher with data
    socket.to(id).emit('recipe_data', data);
  });

  //broadcaster sends message synthesize signal
  socket.on('message_synth', (message) => {
    //relay to specified watcher with message
    socket.broadcast.emit('message_synth', socket.id, message);
  });

  //broadcaster sends updated stream data
  socket.on('stream_data', (watchers, viewCount) => {
     //relay to each watcher specified
     watchers.forEach( (watcher) => {
      socket.to(watcher).emit('stream_data', viewCount);
    });
  });

  //socket close
  socket.on('disconnect', () => {
    //if it is a broadcaster, delete from list of broadcasters
    if (socket.id in broadcasters){
      delete broadcasters[socket.id];
    }
    //relay information of disconnection
    socket.broadcast.emit('dc', socket.id);
    
  });
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(PORT, (err) => {
    if(err) throw err;
    console.log("> Ready on port 3000");
  });
});
