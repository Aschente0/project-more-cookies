webpackHotUpdate("static\\development\\pages\\recipeWiki.js",{

/***/ "./pages/recipeWiki.js":
/*!*****************************!*\
  !*** ./pages/recipeWiki.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeWiki; });
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




var apiKey = '56c94cc84b534f349b59f11eb9d6ae51';

var RecipeWiki = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RecipeWiki, _Component);

  function RecipeWiki() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecipeWiki);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecipeWiki).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecipeWiki, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var search = document.getElementById('search');
      search.addEventListener('submit', function (event) {
        event.preventDefault();
        var data = document.querySelector('#data').value;
        document.getElementById('search').reset();
        console.log(data);
        var res = fetch('api/recipe').then(function (response) {
          response.json().then(function (data) {
            console.log(data); // resulting array of data (recipes)

            var recipe = document.getElementById('recipes');
            var baseUri = data.baseUri;
            data.results.forEach(function (result) {
              var imageUrl = result.image;
              console.log(baseUri + imageUrl);
              recipe.innerHTML = recipe.innerHTML + "\n                            <div className=\"recipe\" style=\"display:flex;flex-direction:row;margin-bottom:20px;border:2px solid #000;\">\n                                <img src=\"".concat(baseUri + imageUrl, "\" className=\"recipeImage\" height=\"200\" style=\"padding-right:50px;\"/>\n                                <div className=\"recipeInfo\" style=\"display:flex;flex-direction:column;\">\n                                    <div style=\"padding-bottom:68px;font-size:30px;;\">").concat(result.title, "</div>\n                                    <div style=\"padding-bottom:10px\">Preparation time: ").concat(result.readyInMinutes, "</div>\n                                    <div>Number of servings: ").concat(result.servings, "</div>\n                                </div>\n                            </div>\n\n                        ");
            }); // let test = document.getElementsByClassName('test');
            // test.innerHtml = test.innerHtml + `
            // <style>
            //     {color: blue};
            // </style>`
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "main"
      }, __jsx("div", {
        className: "body"
      }, __jsx("form", {
        id: "search",
        className: "search"
      }, __jsx("input", {
        type: "text",
        id: "data",
        name: "data"
      }), __jsx("button", {
        id: "search_btn"
      }, "Search")), __jsx("div", {
        id: "recipes",
        className: "recipes"
      })), __jsx("style", null, "\n                .main{\n                    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n                    'Arial', sans-serif;\n                    padding: 20px 20px 60px;\n                    max-width: 680px;\n                    margin: 0 auto;\n                }\n                .body {\n                    display: flex;\n                    flex-direction: column;\n                }\n                .search {\n                    padding-bottom: 80px;\n                    align-items: center;\n                }\n                "));
    }
  }]);

  return RecipeWiki;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=recipeWiki.js.0865dd406e2c7d5f634a.hot-update.js.map