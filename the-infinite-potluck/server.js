// const app = require('express')();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev });
// const nextHandler = nextApp.getRequestHandler();

// let port = 3000;

// io.on('connection', socket => {
//   socket.on('broadcaster', () =>{
//       socket.emit('now', {
//         message: 'you are a broadcaster'
//       });
//   });

//   socket.on('watcher', () =>{
//     socket.emit('now', {
//       message: 'you are a watcher'
//     });
//   });
  
// });

// nextApp.prepare().then(() => {
//   app.get('*', (req, res) => {
//     return nextHandler(req, res);
//   });

//   server.listen(port, (err) => {
//     if(err) throw err;
//     console.log("> Ready on port 3000");
//   });
// });

const express = require('express');
const app = express();
const next = require('next');
let broadcaster;
let server;
let port;

const http = require('http');
server = http.createServer(app);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

port = 3000;

const io = require('socket.io')(server);
// app.use(express.static(__dirname + '/public'));
io.sockets.on('error', e => console.log(e));
io.sockets.on('connection', function (socket) {
  socket.on('broadcaster', function () {
    broadcaster = socket.id;
    socket.broadcast.emit('broadcaster');
  });
  socket.on('watcher', function () {
    broadcaster && socket.to(broadcaster).emit('watcher', socket.id);
  });
  socket.on('offer', function (id /* of the watcher */, message) {
    socket.to(id).emit('offer', socket.id /* of the broadcaster */, message);
  });
  socket.on('answer', function (id /* of the broadcaster */, message) {
    socket.to(id).emit('answer', socket.id /* of the watcher */, message);
  });
  socket.on('candidate', function (id, message) {
    socket.to(id).emit('candidate', socket.id, message);
  });
  socket.on('disconnect', function() {
    broadcaster && socket.to(broadcaster).emit('bye', socket.id);
  });
});

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
      return nextHandler(req, res);
    });
    server.listen(port, () => console.log(`Server is running on port ${port}`));
  }
);
