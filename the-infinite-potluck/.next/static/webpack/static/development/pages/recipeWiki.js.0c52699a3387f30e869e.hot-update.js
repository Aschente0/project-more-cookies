webpackHotUpdate("static\\development\\pages\\recipeWiki.js",{

/***/ "./lib/Auth.js":
/*!*********************!*\
  !*** ./lib/Auth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth0-variables */ "./lib/auth0-variables.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);








/** help from https://medium.com/techintoo/setting-up-auth0-with-react-nextjs-4346c303bb5b  **/

var getQueryParams = function getQueryParams() {
  var params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
    params[$1] = $3;
  });
  return params;
};

var Auth = /*#__PURE__*/function () {
  function Auth() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Auth);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "accessToken", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "idToken", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "expiresAt", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "auth0", new auth0_js__WEBPACK_IMPORTED_MODULE_5__["default"].WebAuth({
      domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].domain,
      clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].clientId,
      redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].callbackUrl,
      responseType: 'token id_token',
      scope: 'openid profile email'
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "extractInfoFromHash", function () {
      if (process.server) return;

      var _getQueryParams = getQueryParams(),
          id_token = _getQueryParams.id_token;

      return {
        token: id_token,
        user_details: jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(id_token)
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getQueryParams", function () {
      var params = {};
      window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
        _this.auth0.parseHash(function (err, authResult) {
          var user_details = _this.extractInfoFromHash();

          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult, user_details);

            resolve(true);
          } else if (err) {
            console.log(err);
            alert("Error: ".concat(err.error, ". Check the console for further details."));
            resolve(false);
            window.location.replace('/');
          }
        });
      });
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this.accessToken;
    }
  }, {
    key: "getIdToken",
    value: function getIdToken() {
      return this.idToken;
    }
  }, {
    key: "setSession",
    value: function setSession(authResult, user_details) {
      // Set isLoggedIn flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user_details', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user_details.user_details)); // Set the time that the access token will expire at

      var expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;
      this.expiresAt = expiresAt; // navigate to the home route
      //history.replace('/home');
    }
  }, {
    key: "renewSession",
    value: function renewSession() {
      var _this2 = this;

      this.auth0.checkSession({}, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this2.setSession(authResult);
        } else if (err) {
          _this2.logout();

          console.log(err);
          alert("Could not get a new token (".concat(err.error, ": ").concat(err.error_description, ")."));
        }
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      // Remove tokens and expiry time
      this.accessToken = null;
      this.idToken = null;
      this.expiresAt = 0; // Remove isLoggedIn flag from localStorage

      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user_details'); // navigate to the home route

      window.location.replace('/');
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = this.expiresAt;
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=recipeWiki.js.0c52699a3387f30e869e.hot-update.js.map