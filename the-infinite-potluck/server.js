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
    // if (socket.id in Object.keys(broadcasters)){
    //   Object.keys(broadcasters).forEach((broadcaster) => {
    //     socket.to(broadcaster).emit('dc', socket.id);
    //   });
    // }
    // else {
    //   delete broadcasters[socket.id];
    //   socket.broadcast.emit('dc', socket.id);
    // }
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