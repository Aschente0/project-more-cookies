/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

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
const client = require('twilio')(accountSid, authToken);
const config = {};
client.tokens.create().then(token => {
  config.iceServers = token.iceServers;
});

/* COMMUNICATION CHANNEL MULTIPLEXING */

/* STREAMING COMMUNICATION CHANNEL */
const streamio = io.of('/stream');
streamio.on('connection', socket => {
  socket.on('broadcaster', () =>{
      let broadcaster = socket.id;
      broadcasters[broadcaster] = broadcaster;
      console.log("2) SERVER RECEIVES broadcaster AND BROADCASTS broadcaster");
      console.log(config);
      socket.emit('broadcaster', config);
  });

  socket.on('watcher', () =>{
    console.log("4) SERVER RECEIVES watcher AND EMITS pickstream");
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

  socket.on('disconnect', () => {
    console.log("SERVER RECEIVED DISCONNECT");
    Object.keys(broadcasters).forEach((broadcaster) => {
      socket.to(broadcaster).emit('dc', socket.id);
    });
    
  });
});

/* RECIPE COLLABORATION COMMUNICATION CHANNEL */
const recipeio = io.of('/recipe');
recipeio.on('connection', socket => {
  console.log("CONNECTION RECEIVED");
  socket.on('message', (data) => {
    console.log("2) SERVER RECEIVES message AND RELAYS");
    socket.broadcast.emit('message', data);
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