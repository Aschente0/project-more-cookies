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
        event.preventDefault(); // toggle elements

        document.getElementById('recipes').hidden = false;
        document.getElementById('indepthRecipe').hidden = true;
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
                    console.log(data.title); //toggle elements

                    document.getElementById('recipes').hidden = true;
                    document.getElementById('indepthRecipe').hidden = false; //populate focus view

                    var focus = document.getElementById('indepthRecipe'); //general info

                    focus.innerHTML = "\n                                            <div style=\"display:flex;flex-direction:column;\"> \n                                                <div style=\"font-size:50px;align-self:center;\">".concat(data.title, "</div>\n                                                <div style=\"display:flex;flex-direction:column;border:3px solid #000;align-self:center;padding:5px;\">\n                                                    <img src=\"").concat(data.image, "\"/>\n                                                    <div>").concat(data.summary, "</div>\n                                                </div>\n                                                <div>Ingredients: </div>\n                                                <ul id=\"ingredients\"></ul>\n                                                <div>Directions: </div>\n                                                <ol id=\"steps\"></ol>\n                                                <button id=\"backBtn\">Back</button>\n                                            </div>\n                                        "); //back button toggles

                    document.getElementById('backBtn').addEventListener("click", function () {
                      document.getElementById('recipes').hidden = false;
                      document.getElementById('indepthRecipe').hidden = true;
                    }); //ingredients

                    var ingredients = document.getElementById('ingredients');
                    data.extendedIngredients.forEach(function (ingredient) {
                      var item;
                      var amount = ingredient.amount.toString().substring(0, 4); // grammar logic for ingredient list items

                      if (ingredient.unit) {
                        amount == "1" ? item = amount + " " + ingredient.unit + " of " + ingredient.name : item = amount + " " + ingredient.unit + "s of " + ingredient.name;
                      } else {
                        amount == "1" ? item = amount + " " + ingredient.name : item = amount + " " + ingredient.name + "s";
                      }

                      ingredients.innerHTML = ingredients.innerHTML + "\n                                                <li>".concat(item, "</li>\n                                            ");
                    }); //instructions

                    var steps = document.getElementById('steps');
                    data.analyzedInstructions[0].steps.forEach(function (step) {
                      steps.innerHTML = steps.innerHTML + "\n                                                <li>".concat(step.step, "</li>\n                                            ");
                    });
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
      }, ".main.jsx-1172797072{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:680px;margin:0 auto;}.body.jsx-1172797072{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.search.jsx-1172797072{padding-bottom:80px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXHJlY2lwZVdpa2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUk0QixBQUl3QyxBQU1OLEFBSU8sb0JBQ0Qsc0RBSkcsZ0JBTkMsdUJBQ1AsQUFVcEIsZ0JBVGtCLGNBQ2xCLFNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjYXJsb19mcXd1eWVsXFxEZXNrdG9wXFxVb2ZUXFxDU0NDMDlcXHByb2plY3RcXHByb2plY3QtcHJvamVjdC1tb3JlLWNvb2tpZXNcXHRoZS1pbmZpbml0ZS1wb3RsdWNrXFxwYWdlc1xccmVjaXBlV2lraS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGFwaUtleSA9ICc1NmM5NGNjODRiNTM0ZjM0OWI1OWYxMWViOWQ2YWU1MSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGVXaWtpIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0b2dnbGUgZWxlbWVudHNcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXMnKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGVwdGhSZWNpcGUnKS5oaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0YScpLnZhbHVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykucmVzZXQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaCgnYXBpL3JlY2lwZScpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRpbmcgYXJyYXkgb2YgZGF0YSAocmVjaXBlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYXNlVXJpID0gZGF0YS5iYXNlVXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSByZWNpcGUgbGlzdCB3aXRoIHJlY2lwZSBvdmVydmlldyBjYXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlVXJsID0gcmVzdWx0LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFzZVVyaSArIGltYWdlVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbm5lckhUTUwgPSByZWNpcGUuaW5uZXJIVE1MICsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7cmVzdWx0LmlkfVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXJnaW4tYm90dG9tOjIwcHg7Ym9yZGVyOjJweCBzb2xpZCAjMDAwO3BhZGRpbmc6M3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtiYXNlVXJpICsgaW1hZ2VVcmx9XCIgaGVpZ2h0PVwiMjAwXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjUwcHg7XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206NjhweDtmb250LXNpemU6MzBweDs7XCI+JHtyZXN1bHQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbToxMHB4XCI+UHJlcGFyYXRpb24gdGltZTogJHtyZXN1bHQucmVhZHlJbk1pbnV0ZXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TnVtYmVyIG9mIHNlcnZpbmdzOiAke3Jlc3VsdC5zZXJ2aW5nc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXN1bHQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKCdhcGkvcmVjaXBlRm9jdXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RvZ2dsZSBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXMnKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGVwdGhSZWNpcGUnKS5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BvcHVsYXRlIGZvY3VzIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2N1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRlcHRoUmVjaXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dlbmVyYWwgaW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTo1MHB4O2FsaWduLXNlbGY6Y2VudGVyO1wiPiR7ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Ym9yZGVyOjNweCBzb2xpZCAjMDAwO2FsaWduLXNlbGY6Y2VudGVyO3BhZGRpbmc6NXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2V9XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2RhdGEuc3VtbWFyeX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SW5ncmVkaWVudHM6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbmdyZWRpZW50c1wiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGlyZWN0aW9uczogPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBpZD1cInN0ZXBzXCI+PC9vbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJhY2tCdG5cIj5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iYWNrIGJ1dHRvbiB0b2dnbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXMnKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kZXB0aFJlY2lwZScpLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5ncmVkaWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCAgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZXh0ZW5kZWRJbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBpbmdyZWRpZW50LmFtb3VudC50b1N0cmluZygpLnN1YnN0cmluZygwLDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyYW1tYXIgbG9naWMgZm9yIGluZ3JlZGllbnQgbGlzdCBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZ3JlZGllbnQudW5pdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbW91bnQgPT0gXCIxXCIpID8gKGl0ZW0gPSBhbW91bnQgKyBcIiBcIiArIGluZ3JlZGllbnQudW5pdCArIFwiIG9mIFwiICsgaW5ncmVkaWVudC5uYW1lKSA6IChpdGVtID0gYW1vdW50ICsgXCIgXCIgKyBpbmdyZWRpZW50LnVuaXQgKyBcInMgb2YgXCIgKyBpbmdyZWRpZW50Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYW1vdW50ID09IFwiMVwiKSA/IChpdGVtID0gYW1vdW50ICsgXCIgXCIgKyBpbmdyZWRpZW50Lm5hbWUpIDogKGl0ZW0gPSBhbW91bnQgKyBcIiBcIiArIGluZ3JlZGllbnQubmFtZSArIFwic1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzLmlubmVySFRNTCA9IGluZ3JlZGllbnRzLmlubmVySFRNTCArIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiR7aXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zdHJ1Y3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW5hbHl6ZWRJbnN0cnVjdGlvbnNbMF0uc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcy5pbm5lckhUTUwgPSBzdGVwcy5pbm5lckhUTUwgKyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3N0ZXAuc3RlcH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGFcIiBuYW1lPVwiZGF0YVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlYXJjaF9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlY2lwZXNcIiBjbGFzc05hbWU9XCJyZWNpcGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbmRlcHRoUmVjaXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gSWNvbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\pages\\\\recipeWiki.js */"));
    }
  }]);

  return RecipeWiki;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=recipeWiki.js.9c8302043241c6d2518f.hot-update.js.map