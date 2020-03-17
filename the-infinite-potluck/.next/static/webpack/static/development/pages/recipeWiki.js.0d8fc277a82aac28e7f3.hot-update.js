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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




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
            var baseUri = data.baseUri; // populate recipe list with recipe overview cards

            data.results.forEach(function (result) {
              var imageUrl = result.image;
              console.log(baseUri + imageUrl);
              recipe.innerHTML = recipe.innerHTML + "\n                            <div id=\"".concat(result.id, "\" style=\"display:flex;flex-direction:row;margin-bottom:20px;border:2px solid #000;padding:3px;\">\n                                <img src=\"").concat(baseUri + imageUrl, "\" height=\"200\" style=\"padding-right:50px;\"/>\n                                <div style=\"display:flex;flex-direction:column;\">\n                                    <div style=\"padding-bottom:68px;font-size:30px;;\">").concat(result.title, "</div>\n                                    <div style=\"padding-bottom:10px\">Preparation time: ").concat(result.readyInMinutes, "</div>\n                                    <div>Number of servings: ").concat(result.servings, "</div>\n                                </div>\n                            </div>\n                        ");
            }); // add event listeners on click

            data.results.forEach(function (result) {
              var card = document.getElementById(result.id);
              card.addEventListener("click", function (event) {
                fetch('api/recipeFocus').then(function (response) {
                  response.json().then(function (data) {
                    console.log(data);
                    console.log(data.title); //hide list

                    document.getElementById('recipes').hidden = true; //populate focus view

                    var focus = document.getElementById('indepthRecipe'); //general info

                    focus.innerHTML = "\n                                            <div style=\"display:flex;flex-direction:column;\"> \n                                                <div>".concat(data.title, "</div>\n                                                <img src=\"").concat(data.image, "\"/>\n                                                <div>").concat(data.summary, "</div>\n                                                <div>Ingredients: </div>\n                                                <ul id=\"ingredients\"></ul>\n                                                <ol> id=\"steps\"></ol>\n                                            </div>\n                                        "); //ingredients

                    var ingredients = document.getElementById('ingredients');
                    data.extendedIngredients.forEach(function (ingredient) {
                      var item;
                      var amount = ingredient.amount.toString().substring(0, 4);

                      if (ingredient.unit) {
                        amount == "1" ? item = amount + " " + ingredient.unit + " of " + ingredient.name : item = amount + " " + ingredient.unit + "s of " + ingredient.name;
                      } else {
                        amount == "1" ? item = amount + " " + ingredient.name : item = amount + " " + ingredient.name + "s";
                      }

                      ingredients.innerHTML = ingredients.innerHTML + "\n                                                <li>".concat(item, "</li>\n                                            ");
                    }); //instructions

                    data.analyzedInstructions.forEach(function (step) {});
                  });
                });
              });
            });
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1172797072" + " " + "main"
      }, __jsx("div", {
        className: "jsx-1172797072" + " " + "body"
      }, __jsx("form", {
        id: "search",
        className: "jsx-1172797072" + " " + "search"
      }, __jsx("input", {
        type: "text",
        id: "data",
        name: "data",
        className: "jsx-1172797072"
      }), __jsx("button", {
        id: "search_btn",
        className: "jsx-1172797072"
      }, "Search")), __jsx("div", {
        id: "recipes",
        className: "jsx-1172797072" + " " + "recipes"
      }), __jsx("div", {
        id: "indepthRecipe",
        className: "jsx-1172797072"
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1172797072"
      }, ".main.jsx-1172797072{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:680px;margin:0 auto;}.body.jsx-1172797072{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.search.jsx-1172797072{padding-bottom:80px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXHJlY2lwZVdpa2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEc0QixBQUl3QyxBQU1OLEFBSU8sb0JBQ0Qsc0RBSkcsZ0JBTkMsdUJBQ1AsQUFVcEIsZ0JBVGtCLGNBQ2xCLFNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjYXJsb19mcXd1eWVsXFxEZXNrdG9wXFxVb2ZUXFxDU0NDMDlcXHByb2plY3RcXHByb2plY3QtcHJvamVjdC1tb3JlLWNvb2tpZXNcXHRoZS1pbmZpbml0ZS1wb3RsdWNrXFxwYWdlc1xccmVjaXBlV2lraS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGFwaUtleSA9ICc1NmM5NGNjODRiNTM0ZjM0OWI1OWYxMWViOWQ2YWU1MSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGVXaWtpIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEnKS52YWx1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goJ2FwaS9yZWNpcGUnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0aW5nIGFycmF5IG9mIGRhdGEgKHJlY2lwZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVVyaSA9IGRhdGEuYmFzZVVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9wdWxhdGUgcmVjaXBlIGxpc3Qgd2l0aCByZWNpcGUgb3ZlcnZpZXcgY2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZVVybCA9IHJlc3VsdC5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhc2VVcmkgKyBpbWFnZVVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpcGUuaW5uZXJIVE1MID0gcmVjaXBlLmlubmVySFRNTCArIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3Jlc3VsdC5pZH1cIiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7bWFyZ2luLWJvdHRvbToyMHB4O2JvcmRlcjoycHggc29saWQgIzAwMDtwYWRkaW5nOjNweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YmFzZVVyaSArIGltYWdlVXJsfVwiIGhlaWdodD1cIjIwMFwiIHN0eWxlPVwicGFkZGluZy1yaWdodDo1MHB4O1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOjY4cHg7Zm9udC1zaXplOjMwcHg7O1wiPiR7cmVzdWx0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206MTBweFwiPlByZXBhcmF0aW9uIHRpbWU6ICR7cmVzdWx0LnJlYWR5SW5NaW51dGVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk51bWJlciBvZiBzZXJ2aW5nczogJHtyZXN1bHQuc2VydmluZ3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgb24gY2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzdWx0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCgnYXBpL3JlY2lwZUZvY3VzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oaWRlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVzJykuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wb3B1bGF0ZSBmb2N1cyB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kZXB0aFJlY2lwZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nZW5lcmFsIGluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtkYXRhLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZX1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtkYXRhLnN1bW1hcnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SW5ncmVkaWVudHM6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbmdyZWRpZW50c1wiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD4gaWQ9XCJzdGVwc1wiPjwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbmdyZWRpZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5leHRlbmRlZEluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IGluZ3JlZGllbnQuYW1vdW50LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5ncmVkaWVudC51bml0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFtb3VudCA9PSBcIjFcIikgPyAoaXRlbSA9IGFtb3VudCArIFwiIFwiICsgaW5ncmVkaWVudC51bml0ICsgXCIgb2YgXCIgKyBpbmdyZWRpZW50Lm5hbWUpIDogKGl0ZW0gPSBhbW91bnQgKyBcIiBcIiArIGluZ3JlZGllbnQudW5pdCArIFwicyBvZiBcIiArIGluZ3JlZGllbnQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbW91bnQgPT0gXCIxXCIpID8gKGl0ZW0gPSBhbW91bnQgKyBcIiBcIiArIGluZ3JlZGllbnQubmFtZSkgOiAoaXRlbSA9IGFtb3VudCArIFwiIFwiICsgaW5ncmVkaWVudC5uYW1lICsgXCJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudHMuaW5uZXJIVE1MID0gaW5ncmVkaWVudHMuaW5uZXJIVE1MICsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHtpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnN0cnVjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW5hbHl6ZWRJbnN0cnVjdGlvbnMuZm9yRWFjaChzdGVwID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGFcIiBuYW1lPVwiZGF0YVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlYXJjaF9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWNpcGVzXCIgY2xhc3NOYW1lPVwicmVjaXBlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5kZXB0aFJlY2lwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIEljb25zJywgJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\pages\\\\recipeWiki.js */"));
    }
  }]);

  return RecipeWiki;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=recipeWiki.js.0d8fc277a82aac28e7f3.hot-update.js.map