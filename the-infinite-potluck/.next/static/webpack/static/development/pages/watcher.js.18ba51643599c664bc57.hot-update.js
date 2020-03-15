webpackHotUpdate("static\\development\\pages\\watcher.js",{

/***/ "./components/Portal.js":
false,

/***/ "./components/Video.js":
false,

/***/ "./pages/watcher.js":
/*!**************************!*\
  !*** ./pages/watcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Medium; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

var Medium = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Medium, _Component);

  function Medium(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Medium);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Medium).call(this, props));
    _this.state = {
      broadcasters: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Medium, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()();
      var peerConnection;
      var video = document.getElementById('video');
      this.socket.on('offer', function (id, message) {
        console.log("11) WATCHER RECEIVES offer");
        var peerConnection = new RTCPeerConnection();
        peerConnection.setRemoteDescription(message).then(function () {
          return peerConnection.createAnswer();
        }).then(function (sdp) {
          return peerConnection.setLocalDescription(sdp);
        }).then(function () {
          console.log("WATCHER EMITS answer");

          _this2.socket.emit('answer', id, peerConnection.localDescription);
        });

        peerConnection.ontrack = function (event) {
          console.log("MOUNT VIDEO, STREAMS: " + event.streams[0] + " ACTIVE: " + event.streams[0].active);
          document.getElementById('video').srcObject = event.streams[0];
        };
      });
      this.socket.on('connect', function () {
        _this2.socket.emit('watcher');
      });
      this.socket.on('broadcaster', function () {
        console.log("3) WATCHER RECEIVES broadcaster AND EMITS watcher");

        _this2.socket.emit('watcher');
      });
      this.socket.on('stream_choice', function (broadcasters) {
        console.log("5) WATCHER CHOOSING STREAM");
        console.log(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(broadcasters));
        var pickstream = document.getElementById('pickstream');

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(broadcasters).forEach(function (broadcast) {
          console.log("BROADCASTER: " + broadcast);
          pickstream.innerHTML = pickstream.innerHTML + "<button id=\"".concat(broadcast, "\">").concat(broadcast, "</button>");
        });

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(broadcasters).forEach(function (broadcast) {
          document.getElementById(broadcast).addEventListener("click", function () {
            console.log("6) WATCHER HAS CHOSEN A STREAM");

            _this2.socket.emit('stream_chosen', broadcast);
          });
        });
      });
      this.socket.on('dc', function () {
        console.log("WATCHER RECEIVED DISCONNECT");
        peerConnection.close();
      });
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.beforePopState(function (_ref) {
        var url = _ref.url,
            as = _ref.as,
            options = _ref.options;
        console.log("ATTEMPTING TO DISCONNECT AS WATCHER");

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
        width: "640",
        height: "480",
        autoPlay: true
      }), __jsx("div", {
        id: "pickstream"
      }));
    }
  }]);

  return Medium;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=watcher.js.18ba51643599c664bc57.hot-update.js.map