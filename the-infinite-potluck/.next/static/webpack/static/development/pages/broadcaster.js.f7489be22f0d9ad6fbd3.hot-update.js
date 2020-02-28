webpackHotUpdate("static\\development\\pages\\broadcaster.js",{

/***/ "./pages/broadcaster.js":
/*!******************************!*\
  !*** ./pages/broadcaster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Broadcaster = function Broadcaster() {
  // export default class Medium extends Component {
  // constructor(props){
  //     super(props);
  //     this.state={
  //         hello:''
  //     }
  // }
  // componentDidMount(){
  //     this.socket=io()
  //     this.socket.emit('broadcaster');
  //     this.socket.on('now', (data) => {
  //         this.setState({
  //             hello: data.message
  //         })
  //     })
  // }
  // render(){
  //     return(
  //         <div>
  //             <h1>{this.state.hello}</h1>
  //             <p>test</p>
  //         </div>
  //     )
  // }
  // componentDidmount(){
  var peerConnection = new RTCPeerConnection();
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  }).then(function (stream) {
    peerConnection.addStream(stream);
    peerConnection.createOffer().then(function (sdp) {
      return peerConnection.setLocalDescription(sdp);
    }).then(function () {
      socket.emit('offer', peerConnection.localDescription);
    });
  }); // }
  // render(){

  return __jsx("div", null, __jsx("h1", null, socket.id), __jsx("p", null, " hello world "), __jsx("video", {
    playsInline: true,
    autoPlay: true,
    muted: true
  })); // }
};

/* harmony default export */ __webpack_exports__["default"] = (Broadcaster);

/***/ })

})
//# sourceMappingURL=broadcaster.js.f7489be22f0d9ad6fbd3.hot-update.js.map