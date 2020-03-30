module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Auth.js":
/*!*********************!*\
  !*** ./lib/Auth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "auth0-js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-variables */ "./lib/auth0-variables.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** help from https://medium.com/techintoo/setting-up-auth0-with-react-nextjs-4346c303bb5b  **/

const getQueryParams = () => {
  const params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3;
  });
  return params;
};

class Auth {
  constructor() {
    _defineProperty(this, "accessToken", void 0);

    _defineProperty(this, "idToken", void 0);

    _defineProperty(this, "expiresAt", void 0);

    _defineProperty(this, "auth0", new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({
      domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain,
      clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].clientId,
      redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].callbackUrl,
      responseType: 'token id_token',
      scope: 'openid profile email'
    }));

    _defineProperty(this, "extractInfoFromHash", () => {
      if (process.server) return;
      const {
        id_token
      } = getQueryParams();
      return {
        token: id_token,
        user_details: jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(id_token)
      };
    });

    _defineProperty(this, "getQueryParams", () => {
      const params = {};
      window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
        params[$1] = $3;
      });
      return params;
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise(resolve => {
      this.auth0.parseHash((err, authResult) => {
        var user_details = this.extractInfoFromHash();

        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult, user_details);
          resolve(true);
        } else if (err) {
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
          resolve(false);
          window.location.replace('/');
        }
      });
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult, user_details) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user_details', JSON.stringify(user_details.user_details)); // Set the time that the access token will expire at

    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt; // navigate to the home route
    //history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0; // Remove isLoggedIn flag from localStorage

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user_details'); // navigate to the home route

    window.location.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

}

/***/ }),

/***/ "./lib/auth0-variables.js":
/*!********************************!*\
  !*** ./lib/auth0-variables.js ***!
  \********************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
const AUTH_CONFIG = {
  domain: 'dev-572t65wb.auth0.com',
  clientId: 'ejzAT9J3L8jaSUG4Lo3jfe7iqX8idLIT',
  callbackUrl: 'http://localhost:3000/auth/callback'
};

/***/ }),

/***/ "./pages/watcher.js":
/*!**************************!*\
  !*** ./pages/watcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Auth */ "./lib/Auth.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

const auth = new _lib_Auth__WEBPACK_IMPORTED_MODULE_4__["default"]();
class Watcher extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      broadcasters: []
    };
  }

  componentDidMount() {
    var user_data = localStorage.getItem('user_details');
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn || !user_data) {
      window.location.replace('/');
    }

    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('/stream');
    let peerConnection;
    let video = document.getElementById('video');
    this.socket.on('offer', (id, message) => {
      console.log("11) WATCHER RECEIVES offer");
      const peerConnection = new RTCPeerConnection();
      peerConnection.setRemoteDescription(message).then(() => peerConnection.createAnswer()).then(sdp => peerConnection.setLocalDescription(sdp)).then(() => {
        console.log("WATCHER EMITS answer");
        this.socket.emit('answer', id, peerConnection.localDescription);
      });

      peerConnection.ontrack = function (event) {
        console.log("MOUNT VIDEO, STREAMS: " + event.streams[0] + " ACTIVE: " + event.streams[0].active);
        document.getElementById('video').srcObject = event.streams[0];
      };
    });
    this.socket.on('connect', () => {
      this.socket.emit('watcher');
    });
    this.socket.on('broadcaster', () => {
      console.log("3) WATCHER RECEIVES broadcaster AND EMITS watcher");
      this.socket.emit('watcher');
    });
    this.socket.on('stream_choice', broadcasters => {
      console.log("5) WATCHER CHOOSING STREAM");
      console.log(Object.keys(broadcasters));
      let pickstream = document.getElementById('pickstream');
      Object.keys(broadcasters).forEach(broadcast => {
        console.log("BROADCASTER: " + broadcast);
        pickstream.innerHTML = pickstream.innerHTML + `<button id="${broadcast}">${broadcast}</button>`;
      });
      Object.keys(broadcasters).forEach(broadcast => {
        document.getElementById(broadcast).addEventListener("click", () => {
          console.log("6) WATCHER HAS CHOSEN A STREAM");
          this.socket.emit('stream_chosen', broadcast);
        });
      });
    });
    this.socket.on('dc', () => {
      console.log("WATCHER RECEIVED DISCONNECT");
      peerConnection.close();
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.beforePopState(({
      url,
      as,
      options
    }) => {
      console.log("ATTEMPTING TO DISCONNECT AS WATCHER");

      if (as !== "/" || as !== "/other") {
        window.location.href = as;
        return false;
      }

      ;
    });
  }

  render() {
    return __jsx("div", null, __jsx("video", {
      id: "video",
      width: "640",
      height: "480",
      autoPlay: true
    }), __jsx("div", {
      id: "pickstream"
    }));
  }

}

/***/ }),

/***/ 8:
/*!********************************!*\
  !*** multi ./pages/watcher.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo_fqwuyel\Desktop\UofT\CSCC09\project\project-project-more-cookies\the-infinite-potluck\pages\watcher.js */"./pages/watcher.js");


/***/ }),

/***/ "auth0-js":
/*!***************************!*\
  !*** external "auth0-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=watcher.js.map