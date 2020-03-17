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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/recipeWiki.js":
/*!*****************************!*\
  !*** ./pages/recipeWiki.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeWiki; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const apiKey = '56c94cc84b534f349b59f11eb9d6ae51';
class RecipeWiki extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    const search = document.getElementById('search');
    search.addEventListener('submit', function (event) {
      event.preventDefault(); // toggle elements

      document.getElementById('recipes').hidden = false;
      document.getElementById('indepthRecipe').hidden = true;
      let data = document.querySelector('#data').value;
      document.getElementById('search').reset();
      console.log(data);
      const res = fetch('api/recipe').then(function (response) {
        response.json().then(function (data) {
          console.log(data); // resulting array of data (recipes)

          let recipe = document.getElementById('recipes');
          let baseUri = data.baseUri; // populate recipe list with recipe overview cards

          data.results.forEach(result => {
            let imageUrl = result.image;
            console.log(baseUri + imageUrl);
            recipe.innerHTML = recipe.innerHTML + `
                            <div id="${result.id}" style="display:flex;flex-direction:row;margin-bottom:20px;border:2px solid #000;padding:3px;">
                                <img src="${baseUri + imageUrl}" height="200" style="padding-right:50px;"/>
                                <div style="display:flex;flex-direction:column;">
                                    <div style="padding-bottom:68px;font-size:30px;;">${result.title}</div>
                                    <div style="padding-bottom:10px">Preparation time: ${result.readyInMinutes}</div>
                                    <div>Number of servings: ${result.servings}</div>
                                </div>
                            </div>
                        `;
          }); // add event listeners on click

          data.results.forEach(result => {
            let card = document.getElementById(result.id);
            card.addEventListener("click", function (event) {
              fetch('api/recipeFocus').then(function (response) {
                response.json().then(function (data) {
                  console.log(data);
                  console.log(data.title); //toggle elements

                  document.getElementById('recipes').hidden = true;
                  document.getElementById('indepthRecipe').hidden = false; //populate focus view

                  let focus = document.getElementById('indepthRecipe'); //general info

                  focus.innerHTML = `
                                            <div style="display:flex;flex-direction:column;"> 
                                                <div style="font-size:50px;align-self:center;">${data.title}</div>
                                                <div style="display:flex;flex-direction:column;border:3px solid #000;align-self:center;padding:5px;margin-bottom:10px;">
                                                    <img src="${data.image}"/>
                                                    <div>${data.summary}</div>
                                                </div>
                                                <div>Ingredients: </div>
                                                <ul id="ingredients"></ul>
                                                <div>Directions: </div>
                                                <ol id="steps"></ol>
                                                <button id="backBtn">Back</button>
                                            </div>
                                        `; //back button toggles

                  document.getElementById('backBtn').addEventListener("click", () => {
                    document.getElementById('recipes').hidden = false;
                    document.getElementById('indepthRecipe').hidden = true;
                  }); //ingredients

                  let ingredients = document.getElementById('ingredients');
                  data.extendedIngredients.forEach(ingredient => {
                    let item;
                    let amount = ingredient.amount.toString().substring(0, 4); // grammar logic for ingredient list items

                    if (ingredient.unit) {
                      amount == "1" ? item = amount + " " + ingredient.unit + " of " + ingredient.name : item = amount + " " + ingredient.unit + "s of " + ingredient.name;
                    } else {
                      amount == "1" ? item = amount + " " + ingredient.name : item = amount + " " + ingredient.name + "s";
                    }

                    ingredients.innerHTML = ingredients.innerHTML + `
                                                <li>${item}</li>
                                            `;
                  }); //instructions

                  let steps = document.getElementById('steps');
                  data.analyzedInstructions[0].steps.forEach(step => {
                    steps.innerHTML = steps.innerHTML + `
                                                <li>${step.step}</li>
                                            `;
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  render() {
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
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1172797072"
    }, ".main.jsx-1172797072{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:680px;margin:0 auto;}.body.jsx-1172797072{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.search.jsx-1172797072{padding-bottom:80px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXHJlY2lwZVdpa2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUk0QixBQUl3QyxBQU1OLEFBSU8sb0JBQ0Qsc0RBSkcsZ0JBTkMsdUJBQ1AsQUFVcEIsZ0JBVGtCLGNBQ2xCLFNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjYXJsb19mcXd1eWVsXFxEZXNrdG9wXFxVb2ZUXFxDU0NDMDlcXHByb2plY3RcXHByb2plY3QtcHJvamVjdC1tb3JlLWNvb2tpZXNcXHRoZS1pbmZpbml0ZS1wb3RsdWNrXFxwYWdlc1xccmVjaXBlV2lraS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGFwaUtleSA9ICc1NmM5NGNjODRiNTM0ZjM0OWI1OWYxMWViOWQ2YWU1MSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGVXaWtpIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0b2dnbGUgZWxlbWVudHNcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXMnKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGVwdGhSZWNpcGUnKS5oaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0YScpLnZhbHVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykucmVzZXQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaCgnYXBpL3JlY2lwZScpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRpbmcgYXJyYXkgb2YgZGF0YSAocmVjaXBlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYXNlVXJpID0gZGF0YS5iYXNlVXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSByZWNpcGUgbGlzdCB3aXRoIHJlY2lwZSBvdmVydmlldyBjYXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlVXJsID0gcmVzdWx0LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFzZVVyaSArIGltYWdlVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbm5lckhUTUwgPSByZWNpcGUuaW5uZXJIVE1MICsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7cmVzdWx0LmlkfVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXJnaW4tYm90dG9tOjIwcHg7Ym9yZGVyOjJweCBzb2xpZCAjMDAwO3BhZGRpbmc6M3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtiYXNlVXJpICsgaW1hZ2VVcmx9XCIgaGVpZ2h0PVwiMjAwXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjUwcHg7XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206NjhweDtmb250LXNpemU6MzBweDs7XCI+JHtyZXN1bHQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbToxMHB4XCI+UHJlcGFyYXRpb24gdGltZTogJHtyZXN1bHQucmVhZHlJbk1pbnV0ZXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TnVtYmVyIG9mIHNlcnZpbmdzOiAke3Jlc3VsdC5zZXJ2aW5nc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXN1bHQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKCdhcGkvcmVjaXBlRm9jdXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RvZ2dsZSBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXMnKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGVwdGhSZWNpcGUnKS5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BvcHVsYXRlIGZvY3VzIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2N1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRlcHRoUmVjaXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dlbmVyYWwgaW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTo1MHB4O2FsaWduLXNlbGY6Y2VudGVyO1wiPiR7ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Ym9yZGVyOjNweCBzb2xpZCAjMDAwO2FsaWduLXNlbGY6Y2VudGVyO3BhZGRpbmc6NXB4O21hcmdpbi1ib3R0b206MTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtkYXRhLnN1bW1hcnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkluZ3JlZGllbnRzOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiaW5ncmVkaWVudHNcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRpcmVjdGlvbnM6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2wgaWQ9XCJzdGVwc1wiPjwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJiYWNrQnRuXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFjayBidXR0b24gdG9nZ2xlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tCdG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVzJykuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGVwdGhSZWNpcGUnKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luZ3JlZGllbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgIGluZ3JlZGllbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZ3JlZGllbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmV4dGVuZGVkSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gaW5ncmVkaWVudC5hbW91bnQudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCw0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBncmFtbWFyIGxvZ2ljIGZvciBpbmdyZWRpZW50IGxpc3QgaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmdyZWRpZW50LnVuaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYW1vdW50ID09IFwiMVwiKSA/IChpdGVtID0gYW1vdW50ICsgXCIgXCIgKyBpbmdyZWRpZW50LnVuaXQgKyBcIiBvZiBcIiArIGluZ3JlZGllbnQubmFtZSkgOiAoaXRlbSA9IGFtb3VudCArIFwiIFwiICsgaW5ncmVkaWVudC51bml0ICsgXCJzIG9mIFwiICsgaW5ncmVkaWVudC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFtb3VudCA9PSBcIjFcIikgPyAoaXRlbSA9IGFtb3VudCArIFwiIFwiICsgaW5ncmVkaWVudC5uYW1lKSA6IChpdGVtID0gYW1vdW50ICsgXCIgXCIgKyBpbmdyZWRpZW50Lm5hbWUgKyBcInNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50cy5pbm5lckhUTUwgPSBpbmdyZWRpZW50cy5pbm5lckhUTUwgKyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke2l0ZW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc3RydWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFuYWx5emVkSW5zdHJ1Y3Rpb25zWzBdLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHMuaW5uZXJIVE1MID0gc3RlcHMuaW5uZXJIVE1MICsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHtzdGVwLnN0ZXB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkYXRhXCIgbmFtZT1cImRhdGFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2hfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWNpcGVzXCIgY2xhc3NOYW1lPVwicmVjaXBlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5kZXB0aFJlY2lwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIEljb25zJywgJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\pages\\\\recipeWiki.js */"));
  }

}

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/recipeWiki.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo_fqwuyel\Desktop\UofT\CSCC09\project\project-project-more-cookies\the-infinite-potluck\pages\recipeWiki.js */"./pages/recipeWiki.js");


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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=recipeWiki.js.map