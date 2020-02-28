webpackHotUpdate("static\\development\\pages\\broadcaster.js",{

/***/ "./pages/broadcaster.js":
/*!******************************!*\
  !*** ./pages/broadcaster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Medium; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


 // export default Broadcaster = () => {

var Medium = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Medium, _Component);

  function Medium() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Medium);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Medium).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Medium, [{
    key: "componentDidmount",
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
    value: function componentDidmount() {
      var peerConnection = new RTCPeerConnection();
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()();
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      }).then(function (stream) {
        peerConnection.addStream(stream);
        peerConnection.createOffer().then(function (sdp) {
          return peerConnection.setLocalDescription(sdp);
        }).then(function () {
          this.socket.emit('offer', peerConnection.localDescription);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx("h1", null, this.socket.id), __jsx("video", {
        playsInline: true,
        autoPlay: true,
        muted: true
      }));
    }
  }]);

  return Medium;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=broadcaster.js.48101b6d100747a8ba6d.hot-update.js.map