/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

let port = 3000;

let broadcaster;

io.sockets.on('connection', socket => {
  socket.on('broadcaster', () =>{
      broadcaster = socket.id;
      console.log("2) SERVER RECEIVES broadcaster AND BROADCASTS broadcaster");
      socket.emit('broadcaster');
  });

  socket.on('watcher', () =>{
    console.log("4) SERVER RECEIVES watcher AND EMITS watcher");
    if(broadcaster){
      socket.to(broadcaster).emit('watcher', socket.id);
    }
  });

  socket.on('offer', (id, message) => {
    console.log("7) SERVER RECEIVES offer AND EMITS offer");
    socket.to(id).emit('offer', socket.id, message);
  });

  socket.on('answer', (id, message) => {
    console.log("SERVER RECEIVES answer AND EMITS answer");
    socket.to(id).emit('answer', socket.id, message);
  });

  socket.on('disconnect', () => {
    console.log("SERVER RECEIVED DISCONNECT");
    if(broadcaster){
      socket.to(broadcaster).emit('dc', socket.id);
    }
  });
});
nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err) => {
    if(err) throw err;
    console.log("> Ready on port 3000");
  });
});
