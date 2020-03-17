module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/recipe.js":
/*!*****************************!*\
  !*** ./pages/api/recipe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  "results": [{
    "id": 492561,
    "title": "Falafel Burgers with Feta Cucumber Sauce",
    "readyInMinutes": 50,
    "servings": 1,
    "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
    "imageUrls": ["falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"]
  }, {
    "id": 492562,
    "title": "Falafel Burgers with Feta Cucumber Sauce",
    "readyInMinutes": 50,
    "servings": 2,
    "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
    "imageUrls": ["falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"]
  }, {
    "id": 492563,
    "title": "Falafel Burgers with Feta Cucumber Sauce",
    "readyInMinutes": 50,
    "servings": 3,
    "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
    "imageUrls": ["falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"]
  }, {
    "id": 492564,
    "title": "Falafel Burgers with Feta Cucumber Sauce",
    "readyInMinutes": 50,
    "servings": 4,
    "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
    "imageUrls": ["falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"]
  }, {
    "id": 492565,
    "title": "Falafel Burgers with Feta Cucumber Sauce",
    "readyInMinutes": 50,
    "servings": 5,
    "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
    "imageUrls": ["falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"]
  }],
  "baseUri": "https://spoonacular.com/recipeImages/",
  "offset": 0,
  "number": 1,
  "totalResults": 104,
  "processingTimeMs": 189,
  "expires": 1584659024049
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.status(200).json(data); // res.status(200).json(req);
});

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./pages/api/recipe.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo_fqwuyel\Desktop\UofT\CSCC09\project\project-project-more-cookies\the-infinite-potluck\pages\api\recipe.js */"./pages/api/recipe.js");


/***/ })

/******/ });
//# sourceMappingURL=recipe.js.map