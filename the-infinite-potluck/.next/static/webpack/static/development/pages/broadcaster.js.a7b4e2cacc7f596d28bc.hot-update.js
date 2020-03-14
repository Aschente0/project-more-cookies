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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

var Medium = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Medium, _Component);

  function Medium() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Medium);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Medium).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Medium, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(); // const config = {
      //     'iceServers': [{
      //       'urls': ['stun:stun.l.google.com:19302']
      //     }]
      //   };

      var peerConnections = {};
      var video = document.getElementById('video');
      var peerConnection = new RTCPeerConnection();
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(function (stream) {
        video.srcObject = stream;
        console.log("1) BROADCASTER EMITS broadcaster");

        _this.socket.emit('broadcaster');
      })["catch"](function (err) {
        console.log(err);
      });
      this.socket.on('answer', function (id, description) {
        console.log("9) BROADCASTER RECEIVES answer, SETS RD");
        peerConnections[id].setRemoteDescription(description);
      });
      this.socket.on('watcher', function (id) {
        console.log("5) BROADCASTER RECEIVES watcher");
        var peerConnection = new RTCPeerConnection();
        peerConnections[id] = peerConnection;
        var stream = video.srcObject;
        stream.getTracks().forEach(function (track) {
          return peerConnection.addTrack(track, stream);
        });
        peerConnection.createOffer().then(function (sdp) {
          return peerConnection.setLocalDescription(sdp);
        }).then(function () {
          console.log("6) BROADCASTER EMITS offer");

          _this.socket.emit('offer', id, peerConnection.localDescription);
        });
      });
      this.socket.on('dc', function (id) {
        console.log("BROADCASTER RECEIVED DISCONNECT");

        if (peerConnections[id]) {
          peerConnections[id].close();
          delete peerConnections[id];
        }
      });
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.beforePopState(function (_ref) {
        var url = _ref.url,
            as = _ref.as,
            options = _ref.options;
        console.log("ATTEMPTING TO DISCONNECT AS BROADCASTER");

        if (as !== "/" || as !== "/other") {
          window.location.href = as;
          return false;
        }

        ;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx("video", {
        id: "video",
        autoPlay: true
      }));
    }
  }]);

  return Medium;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=broadcaster.js.a7b4e2cacc7f596d28bc.hot-update.js.map