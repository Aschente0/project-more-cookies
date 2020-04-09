const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;

let broadcasters = {};

const accountSid = 'AC5bf0645d5c285488bb95eaa4734b81ec';
const authToken = '6f07cbd3b85f1f5ece686e1597c4852c';
const twilioClient = require('twilio')(accountSid, authToken);
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
  jwksUri: `https://dev-572t65wb.auth0.com/.well-known/jwks.json`
 
  // audience: `https://dev-572t65wb.auth0.com/api/v2/`,
  // issuer: `https://dev-572t65wb.auth0.com`,
  // algorithms: ['RS256']
});

/* STREAMING COMMUNICATION CHANNEL */
const streamio = io.of('/stream');


// middleware to verify that the connecting user has a valid JWT
streamio.use((socket, next) => {
  let handshakeData = socket.request;
  if (handshakeData && handshakeData.headers.cookie) {
    let cookie = handshakeData.headers.cookie;
    console.log(cookie);

    let hasToken = cookie.lastIndexOf('jwtToken=');
    
    //if no token, prevent connection
    if(hasToken == -1) {
      next(new Error('not authorized'));
    }

    // index starts inclusive of string 'jwtToken='; +9 chars for start of token
    let index_beg = hasToken + 9;

    // ending index of token
    let index_end = cookie.indexOf(';', index_beg);

    let jwtToken = cookie.substring(index_beg, index_end);
    console.log("JWT TOKEN: " + jwtToken);

    let decodedToken = jwt.decode(jwtToken, { complete: true });
    let kid = decodedToken.header.kid;
    let signingKey;
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

//restrict domain to my app only
io.origins(['https://aqueous-coast-40978.herokuapp.com/']);

streamio.on('connection', socket => {
  socket.on('broadcaster', (recipe, name) =>{
      let broadcaster = socket.id;
      broadcasters[broadcaster] = [recipe, name];
      console.log("2) SERVER RECEIVES broadcaster AND BROADCASTS broadcaster");
      console.log("BROADCASTER SOCKET: " + socket.id);
      console.log(config);
      console.log("BROADCASTERS: " + Object.keys(broadcasters));
      socket.emit('broadcaster', config);
  });

  socket.on('watcher', () =>{
    console.log("4) SERVER RECEIVES watcher AND EMITS stream_choice");
    console.log("WATCHER SOCKET: " + socket.id);
    socket.emit('stream_choice', broadcasters);
  });

  socket.on('stream_chosen', (broadcaster) => {
    console.log("7) SERVER RECEIVES REQUEST FOR CHOSEN STREAM, EMITS watcher");
    if(broadcaster in broadcasters){
      socket.to(broadcaster).emit('watcher', socket.id, config);
    }
  });

  socket.on('offer', (id, message) => {
    console.log("10) SERVER RECEIVES offer AND EMITS offer");
    socket.to(id).emit('offer', socket.id, message, config);
  });

  socket.on('answer', (id, message) => {
    console.log("12) SERVER RECEIVES answer AND EMITS answer");
    socket.to(id).emit('answer', socket.id, message);
  });

  socket.on('candidate', (id, message) => {
    socket.to(id).emit('candidate', socket.id, message);
  });

  socket.on('stream_popup', (id, message) => {
    console.log("SERVER EMITS stream_popup");
    socket.to(id).emit('stream_popup', message);
  });

  socket.on('recipe_data', (id, data) => {
    console.log("SERVER EMITS recipe_data");
    socket.to(id).emit('recipe_data', data);
  });

  socket.on('message_synth', (message) => {
    console.log("SERVER RECEIVES message_synth");
    socket.broadcast.emit('message_synth', socket.id, message);
  });

  socket.on('stream_data', (watchers, viewCount) => {
    console.log("SERVER RECEIVES stream_data");
     watchers.forEach( (watcher) => {
      console.log(watcher);
      socket.to(watcher).emit('stream_data', viewCount);
    });
  });

  socket.on('disconnect', () => {
    console.log("SERVER RECEIVED DISCONNECT: " + socket.id);
    console.log("BROADCASTERS BEFORE DISCONNECT: " + Object.keys(broadcasters));
    console.log("BROADCASTER TO DELETE: " + socket.id);
    if (socket.id in broadcasters){
      console.log("BROADCASTER DELETED");
      delete broadcasters[socket.id];
    }
    console.log("BROADCASTERS AFTER DISCONNECT: " + Object.keys(broadcasters));
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