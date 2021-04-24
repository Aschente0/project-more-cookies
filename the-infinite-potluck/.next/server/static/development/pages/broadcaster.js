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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Nav = ({
  isLoggedIn
}) => __jsx("div", null, __jsx("nav", {
  className: "jsx-77100617"
}, __jsx("ul", {
  className: "jsx-77100617"
}, __jsx("li", {
  className: "jsx-77100617"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/"
}, __jsx("a", {
  className: "jsx-77100617"
}, "Home"))), isLoggedIn ? "" : __jsx("li", {
  className: "jsx-77100617"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/login"
}, __jsx("a", {
  className: "jsx-77100617"
}, "Login"))), isLoggedIn ? __jsx("li", {
  className: "jsx-77100617"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/logout"
}, __jsx("a", {
  className: "jsx-77100617"
}, "Logout"))) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "77100617"
}, "body{margin:0;font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;}nav.jsx-77100617{text-align:center;}ul.jsx-77100617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-77100617>ul.jsx-77100617{padding:4px 16px;}li.jsx-77100617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}a.jsx-77100617{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xcY29tcG9uZW50c1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUdrQixBQUtTLEFBR0wsQUFJSSxBQUdKLEFBSUMsU0FqQkssS0FrQkUsR0FQdkIsQ0FQQSw4Q0FlaUIsVUFaZSxBQU9kLEtBTWxCLFdBTEEsU0FkQSwwRkFPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNhcmxvX2Zxd3V5ZWxcXERlc2t0b3BcXFVvZlRcXENTQ0MwOVxccHJvamVjdFxccHJvamVjdC1wcm9qZWN0LW1vcmUtY29va2llc1xcdGhlLWluZmluaXRlLXBvdGx1Y2tcXGNvbXBvbmVudHNcXG5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBOYXYgPSAoeyBpc0xvZ2dlZEluIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPG5hdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgeyBpc0xvZ2dlZEluID8gKFwiXCIpIDogKCA8bGk+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ2luPC9hPjwvTGluaz48L2xpPiApIH1cclxuICAgICAgICB7IGlzTG9nZ2VkSW4gPyAoIDxsaT48TGluayBocmVmPVwiL2xvZ291dFwiPjxhPkxvZ291dDwvYT48L0xpbms+PC9saT4gKSA6ICggJycgKSB9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIEljb25zJywgJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsXHJcbiAgICAgICAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBuYXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgICAgbmF2ID4gdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbk5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\components\\\\nav.js */")));

Nav.propTypes = {
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/broadcaster.js":
/*!******************************!*\
  !*** ./pages/broadcaster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_secure_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/secure-template */ "./static/secure-template.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Broadcaster extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    let canvasComp = document.getElementById('canvas');
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('/stream');
    let recipe;
    let steps = document.getElementById('steps');

    if (localStorage.getItem('data')) {
      recipe = JSON.parse(localStorage.getItem('data'));
      document.getElementById('title').innerHTML = `${this.props.loggedInUser.nickname}'s ${recipe.title}`;
      let instructions = recipe.analyzedInstructions[0].steps;
      instructions.forEach(instruction => {
        steps.innerHTML = steps.innerHTML + `
                    <li style="padding-top:10px;padding-bottom:10px;padding-right:10px;">
                        ${instruction.step}
                    </li>
                    <hr class="solid">
                `;
      });
    }

    const peerConnections = {};
    let peerCount = 0;
    document.getElementById('stream_count').innerHTML = `${peerCount}`; // const video = document.getElementById('video');

    const canvas = document.getElementById('canvas').getContext('2d');
    const video = document.createElement('video');
    video.setAttribute('autoplay', true);
    let messages = [];
    let message = "";
    let pause = false;
    let speech = new SpeechSynthesisUtterance(); //video properties

    let width = window.innerWidth < 1500 ? window.innerWidth : 1500;
    let height;
    let videoWidth;
    let videoHeight;

    const drawToCanvas = () => {
      canvas.drawImage(video, 0, 0, videoWidth, videoHeight);
      let font = Math.floor(videoWidth / 30);
      canvas.font = `${font}px Comic Sans MS`;
      canvas.fillStyle = "blue"; // draw message for 5 seconds, pause for 2 seconds before drawing new message

      if (messages.length && message == "" && !pause) {
        //first grab message from queue of messages received
        message = messages.shift(); //emit signal with message for watches to synthesize text

        this.socket.emit('message_synth', message);
        console.log("BROADCASTER EMITS message_synth"); //ready the local text synthesis for broadcaster to hear

        speech.text = message;
        window.speechSynthesis.speak(speech); //logic to space out the message synthesis frequency for naturality

        speech.onend = e => {
          setTimeout(function () {
            pause = true;
            message = "";
          }, 2000);
          setTimeout(function () {
            pause = false;
          }, 5000);
        };
      }

      let max_chars = Math.floor(videoWidth / font);
      let line;

      for (line = 1; line <= Math.ceil(message.length / max_chars); line++) {
        canvas.fillText(message.substring((line - 1) * max_chars, Math.min(line * max_chars, message.length)), 10, (line - 1) * font + 30);
      }

      requestAnimationFrame(drawToCanvas);
    }; //signal for stream pop-up


    this.socket.on('stream_popup', message => {
      console.log("BROADCASTER RECEIVED stream_popup");
      messages.push(message);
      console.log(messages);
    }); // navigator.mediaDevices.getUserMedia({video: true, audio: true})

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then(stream => {
      //get video info
      let vtrack = stream.getVideoTracks()[0].getSettings();
      const vRatio = vtrack.width / vtrack.height;
      height = width / vRatio; //size up canvas and streamPlugin accordingly

      console.log(width, height);
      videoWidth = 0.7 * width;
      videoHeight = 0.7 * height;
      canvasComp.width = videoWidth;
      canvasComp.height = videoHeight;
      steps.style.maxWidth = `${0.3 * width}px`;
      steps.style.height = `${videoHeight}px`;
      console.log("HERE: " + steps.style.maxWidth, steps.style.maxHeight);
      video.srcObject = stream;
      drawToCanvas();
      console.log("1) BROADCASTER EMITS broadcaster");
      console.log(this.props);
      this.socket.emit('broadcaster', recipe, this.props.loggedInUser.nickname);
    }).catch(function (err) {
      console.log(err);
    });
    this.socket.on('answer', function (id, description) {
      console.log("13) BROADCASTER RECEIVES answer, SETS RD");
      peerConnections[id].setRemoteDescription(description);
    });
    this.socket.on('watcher', (id, config) => {
      console.log("8) BROADCASTER RECEIVES watcher");
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;
      peerCount++;
      document.getElementById('stream_count').innerHTML = `${peerCount}`; //Send over stream to connected watcher

      let stream = document.getElementById('canvas').captureStream();
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      }).then(aStream => {
        aStream.getAudioTracks().forEach(track => {
          console.log("combining audio track");
          stream.addTrack(track);
          stream.getTracks().forEach(track => {
            console.log("ADDING TRACK: " + track);
            peerConnection.addTrack(track, stream);
          });
          peerConnection.createOffer().then(sdp => peerConnection.setLocalDescription(sdp)).then(() => {
            console.log("9) BROADCASTER EMITS offer");
            this.socket.emit('offer', id, peerConnection.localDescription); // send over initial recipe of the stream

            this.socket.emit('recipe_data', id, recipe);
          });

          peerConnection.onicecandidate = iceEvent => {
            if (iceEvent.candidate) {
              console.log("CANDIDATE EMIT FROM BROADCASTER: " + iceEvent.candidate);
              this.socket.emit('candidate', id, iceEvent.candidate);
            }
          };
        });
      }); //Here, we can send over viewer data of the stream; updates every time a watcher connnects

      console.log("PEER CONNECTIONS: " + Object.keys(peerConnections));
      this.socket.emit('stream_data', Object.keys(peerConnections), peerCount);
    });
    this.socket.on('candidate', (id, candidate) => {
      console.log("CANDIDATE RECEIVED IN BROADCASTER: " + candidate);
      peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    });
    this.socket.on('dc', id => {
      console.log("BROADCASTER RECEIVED DISCONNECT");

      if (peerConnections[id]) {
        peerConnections[id].close();
        delete peerConnections[id];
        peerCount--;
        document.getElementById('stream_count').innerHTML = `${peerCount}`;
        this.socket.emit('stream_data', Object.keys(peerConnections), peerCount);
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.beforePopState(({
      url,
      as,
      options
    }) => {
      console.log("ATTEMPTING TO DISCONNECT AS BROADCASTER"); // clear recipe data

      if (localStorage.getItem('data')) {
        localStorage.removeItem('data');
      }

      if (as !== "/" || as !== "/other") {
        window.location.href = as;
        return false;
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-945038944"
    }, __jsx("div", {
      className: "jsx-945038944" + " " + "main"
    }, __jsx("div", {
      className: "jsx-945038944" + " " + "body"
    }, __jsx("div", {
      id: "title",
      className: "jsx-945038944" + " " + "title"
    }), __jsx("div", {
      className: "jsx-945038944" + " " + "content"
    }, __jsx("div", {
      className: "jsx-945038944" + " " + "content_items"
    }, __jsx("canvas", {
      id: "canvas",
      autoPlay: true,
      className: "jsx-945038944" + " " + "canvas"
    })), __jsx("div", {
      className: "jsx-945038944" + " " + "content_items"
    }, __jsx("ol", {
      id: "steps",
      className: "jsx-945038944" + " " + "steps"
    })))), __jsx("div", {
      className: "jsx-945038944" + " " + "bottom"
    }, __jsx("div", {
      id: "stream_stats",
      className: "jsx-945038944" + " " + "stream_stats"
    }, __jsx("img", {
      src: "/viewer.png",
      id: "icon",
      className: "jsx-945038944" + " " + "viewer_icon"
    }), __jsx("div", {
      id: "stream_count",
      className: "jsx-945038944" + " " + "stream_count"
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "945038944"
    }, ".main.jsx-945038944{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:1500px;margin:0 auto;}.body.jsx-945038944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-945038944{font-size:40px;padding-bottom:20px;color:#067df7;}.content.jsx-945038944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-shadow:5px 2px 2px grey;}.content_items.jsx-945038944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.canvas.jsx-945038944{border:1px solid gray;}.steps.jsx-945038944{display:list-item;float:left;clear:both;border:1px solid gray;margin-top:0px;margin-bottom:0px;padding-inline-start:25px;overflow:scroll;background:white;}.stream_stats.jsx-945038944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;padding:5px;background:#067df7;}.viewer_icon.jsx-945038944{height:25px;width:25px;padding-right:5px;}.stream_count.jsx-945038944{padding-top:5px;}.bottom.jsx-945038944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#067df7;box-shadow:5px 5px 2px grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXGJyb2FkY2FzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdONEIsQUFJNEMsQUFNTixBQUtFLEFBS0YsQUFNQSxBQUdTLEFBR0osQUFXTCxBQU9ELEFBS0ksQUFHSCxZQVBGLEdBbkNTLENBd0N4QixFQXZCZSxJQUhmLENBc0JzQixNQWxCUCxNQWpCRyxLQWtCUSxDQWtCMUIsUUFuQ0EsYUFrQm1CLFlBekJPLEFBVUgsQUFNdkIsQUFpQnVCLEFBZUEsR0F0QkQsYUFoQ0ssS0FpQ0csa0JBaENULFFBaUNELFNBaENGLE9BaUNHLE1BbEJNLEFBdUJMLEFBZVksQ0FwRGxDLFFBSXVCLEVBNkJ2QixPQUtnQixZQUNPLG1CQUN2QixrREF6QmdDLEdBVmhDLGFBZ0R1QixZQXJDdkIsT0FzQ2dDLDRCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNhcmxvX2Zxd3V5ZWxcXERlc2t0b3BcXFVvZlRcXENTQ0MwOVxccHJvamVjdFxccHJvamVjdC1wcm9qZWN0LW1vcmUtY29va2llc1xcdGhlLWluZmluaXRlLXBvdGx1Y2tcXHBhZ2VzXFxicm9hZGNhc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHNlY3VyZVRlbXBsYXRlIGZyb20gJy4uL3N0YXRpYy9zZWN1cmUtdGVtcGxhdGUnO1xyXG5cclxuY2xhc3MgQnJvYWRjYXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBsZXQgY2FudmFzQ29tcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLnNvY2tldD1pbygnL3N0cmVhbScpO1xyXG4gICAgICAgIGxldCByZWNpcGU7XHJcbiAgICAgICAgbGV0IHN0ZXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzJyk7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSkge1xyXG4gICAgICAgICAgICByZWNpcGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS5pbm5lckhUTUwgPSBgJHt0aGlzLnByb3BzLmxvZ2dlZEluVXNlci5uaWNrbmFtZX0ncyAke3JlY2lwZS50aXRsZX1gO1xyXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmFuYWx5emVkSW5zdHJ1Y3Rpb25zWzBdLnN0ZXBzO1xyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMuZm9yRWFjaChpbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwcy5pbm5lckhUTUwgPSBzdGVwcy5pbm5lckhUTUwgKyBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPVwicGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpbnN0cnVjdGlvbi5zdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGVlckNvbm5lY3Rpb25zID0ge307XHJcbiAgICAgICAgbGV0IHBlZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmVhbV9jb3VudCcpLmlubmVySFRNTCA9IGAke3BlZXJDb3VudH1gO1xyXG4gICAgICAgIC8vIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKTtcclxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNwZWVjaCA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy92aWRlbyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgMTUwMCkgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDE1MDA7XHJcbiAgICAgICAgbGV0IGhlaWdodDtcclxuICAgICAgICBsZXQgdmlkZW9XaWR0aDtcclxuICAgICAgICBsZXQgdmlkZW9IZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdUb0NhbnZhcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FudmFzLmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgZm9udCA9IE1hdGguZmxvb3IodmlkZW9XaWR0aC8zMCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5mb250ID0gYCR7Zm9udH1weCBDb21pYyBTYW5zIE1TYDtcclxuICAgICAgICAgICAgY2FudmFzLmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xyXG4gICAgICAgICAgICAvLyBkcmF3IG1lc3NhZ2UgZm9yIDUgc2Vjb25kcywgcGF1c2UgZm9yIDIgc2Vjb25kcyBiZWZvcmUgZHJhd2luZyBuZXcgbWVzc2FnZVxyXG4gICAgICAgICAgICBpZigobWVzc2FnZXMubGVuZ3RoKSAmJiAobWVzc2FnZSA9PSBcIlwiKSAmJiAhcGF1c2UpIHtcclxuICAgICAgICAgICAgICAgIC8vZmlyc3QgZ3JhYiBtZXNzYWdlIGZyb20gcXVldWUgb2YgbWVzc2FnZXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgLy9lbWl0IHNpZ25hbCB3aXRoIG1lc3NhZ2UgZm9yIHdhdGNoZXMgdG8gc3ludGhlc2l6ZSB0ZXh0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlX3N5bnRoJywgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJST0FEQ0FTVEVSIEVNSVRTIG1lc3NhZ2Vfc3ludGhcIik7XHJcbiAgICAgICAgICAgICAgICAvL3JlYWR5IHRoZSBsb2NhbCB0ZXh0IHN5bnRoZXNpcyBmb3IgYnJvYWRjYXN0ZXIgdG8gaGVhclxyXG4gICAgICAgICAgICAgICAgc3BlZWNoLnRleHQgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhzcGVlY2gpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpYyB0byBzcGFjZSBvdXQgdGhlIG1lc3NhZ2Ugc3ludGhlc2lzIGZyZXF1ZW5jeSBmb3IgbmF0dXJhbGl0eVxyXG4gICAgICAgICAgICAgICAgc3BlZWNoLm9uZW5kID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbWF4X2NoYXJzID0gTWF0aC5mbG9vcigodmlkZW9XaWR0aCkgLyBmb250KTtcclxuICAgICAgICAgICAgbGV0IGxpbmU7XHJcbiAgICAgICAgICAgIGZvciAobGluZSA9IDE7IGxpbmUgPD0gTWF0aC5jZWlsKG1lc3NhZ2UubGVuZ3RoIC8gbWF4X2NoYXJzKTsgbGluZSsrKXtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsVGV4dChtZXNzYWdlLnN1YnN0cmluZygobGluZS0xKSAqIG1heF9jaGFycywgTWF0aC5taW4obGluZSAqIG1heF9jaGFycywgbWVzc2FnZS5sZW5ndGgpKSwgMTAsIChsaW5lLTEpKmZvbnQgKyAzMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdUb0NhbnZhcyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9zaWduYWwgZm9yIHN0cmVhbSBwb3AtdXBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignc3RyZWFtX3BvcHVwJywgbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQlJPQURDQVNURVIgUkVDRUlWRUQgc3RyZWFtX3BvcHVwXCIpO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHt2aWRlbzogdHJ1ZSwgYXVkaW86IHRydWV9KVxyXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHt2aWRlbzogdHJ1ZSwgYXVkaW86IGZhbHNlfSlcclxuICAgICAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9nZXQgdmlkZW8gaW5mb1xyXG4gICAgICAgICAgICAgICAgbGV0IHZ0cmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2UmF0aW8gPSAodnRyYWNrLndpZHRoIC8gdnRyYWNrLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIHZSYXRpbztcclxuICAgICAgICAgICAgICAgIC8vc2l6ZSB1cCBjYW52YXMgYW5kIHN0cmVhbVBsdWdpbiBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB2aWRlb1dpZHRoID0gMC43ICogd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2aWRlb0hlaWdodCA9IDAuNyAqIGhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0NvbXAud2lkdGggPSB2aWRlb1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzQ29tcC5oZWlnaHQgPSB2aWRlb0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHN0ZXBzLnN0eWxlLm1heFdpZHRoID0gYCR7MC4zICogd2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgc3RlcHMuc3R5bGUuaGVpZ2h0ID0gYCR7dmlkZW9IZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFOiBcIiArIHN0ZXBzLnN0eWxlLm1heFdpZHRoLCBzdGVwcy5zdHlsZS5tYXhIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgICAgICAgICAgZHJhd1RvQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEpIEJST0FEQ0FTVEVSIEVNSVRTIGJyb2FkY2FzdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdicm9hZGNhc3RlcicsIHJlY2lwZSwgdGhpcy5wcm9wcy5sb2dnZWRJblVzZXIubmlja25hbWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhbnN3ZXInLCBmdW5jdGlvbiAoaWQsIGRlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMykgQlJPQURDQVNURVIgUkVDRUlWRVMgYW5zd2VyLCBTRVRTIFJEXCIpO1xyXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbnNbaWRdLnNldFJlbW90ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3dhdGNoZXInLCAoaWQsIGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjgpIEJST0FEQ0FTVEVSIFJFQ0VJVkVTIHdhdGNoZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBlZXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uc1tpZF0gPSBwZWVyQ29ubmVjdGlvbjtcclxuICAgICAgICAgICAgcGVlckNvdW50Kys7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJlYW1fY291bnQnKS5pbm5lckhUTUwgPSBgJHtwZWVyQ291bnR9YDtcclxuXHJcbiAgICAgICAgICAgIC8vU2VuZCBvdmVyIHN0cmVhbSB0byBjb25uZWN0ZWQgd2F0Y2hlclxyXG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmNhcHR1cmVTdHJlYW0oKTtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlLCB2aWRlbzogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYVN0cmVhbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goICh0cmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbWJpbmluZyBhdWRpbyB0cmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmFkZFRyYWNrKHRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQURESU5HIFRSQUNLOiBcIiArIHRyYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihzZHAgPT4gcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihzZHApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI5KSBCUk9BRENBU1RFUiBFTUlUUyBvZmZlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnb2ZmZXInLCBpZCwgcGVlckNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIG92ZXIgaW5pdGlhbCByZWNpcGUgb2YgdGhlIHN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncmVjaXBlX2RhdGEnLCBpZCwgcmVjaXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gaWNlRXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljZUV2ZW50LmNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0FORElEQVRFIEVNSVQgRlJPTSBCUk9BRENBU1RFUjogXCIgKyBpY2VFdmVudC5jYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NhbmRpZGF0ZScsIGlkLCBpY2VFdmVudC5jYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vSGVyZSwgd2UgY2FuIHNlbmQgb3ZlciB2aWV3ZXIgZGF0YSBvZiB0aGUgc3RyZWFtOyB1cGRhdGVzIGV2ZXJ5IHRpbWUgYSB3YXRjaGVyIGNvbm5uZWN0c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFRVIgQ09OTkVDVElPTlM6IFwiICsgT2JqZWN0LmtleXMocGVlckNvbm5lY3Rpb25zKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N0cmVhbV9kYXRhJywgT2JqZWN0LmtleXMocGVlckNvbm5lY3Rpb25zKSwgcGVlckNvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2NhbmRpZGF0ZScsIChpZCwgY2FuZGlkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0FORElEQVRFIFJFQ0VJVkVEIElOIEJST0FEQ0FTVEVSOiBcIiArIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uc1tpZF0uYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkYycsIGlkID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCUk9BRENBU1RFUiBSRUNFSVZFRCBESVNDT05ORUNUXCIpO1xyXG4gICAgICAgICAgICBpZihwZWVyQ29ubmVjdGlvbnNbaWRdKXtcclxuICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uc1tpZF0uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwZWVyQ29ubmVjdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgcGVlckNvdW50LS07XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyZWFtX2NvdW50JykuaW5uZXJIVE1MID0gYCR7cGVlckNvdW50fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdHJlYW1fZGF0YScsIE9iamVjdC5rZXlzKHBlZXJDb25uZWN0aW9ucyksIHBlZXJDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7dXJsLCBhcywgb3B0aW9uc30pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBVFRFTVBUSU5HIFRPIERJU0NPTk5FQ1QgQVMgQlJPQURDQVNURVJcIik7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHJlY2lwZSBkYXRhXHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXRhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYXMgIT09IFwiL1wiIHx8IGFzICE9PSBcIi9vdGhlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIGNsYXNzTmFtZT1cImNhbnZhc1wiIGF1dG9QbGF5ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NhbnZhcz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGlkPVwic3RlcHNcIiBjbGFzc05hbWU9XCJzdGVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RyZWFtX3N0YXRzXCIgY2xhc3NOYW1lPVwic3RyZWFtX3N0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi92aWV3ZXIucG5nXCIgaWQ9XCJpY29uXCIgY2xhc3NOYW1lPVwidmlld2VyX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0cmVhbV9jb3VudFwiIGNsYXNzTmFtZT1cInN0cmVhbV9jb3VudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBJY29ucycsICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMnB4IDJweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudF9pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0cmVhbV9zdGF0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmlld2VyX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHJlYW1fY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDJweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VjdXJlVGVtcGxhdGUoQnJvYWRjYXN0ZXIpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\pages\\\\broadcaster.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_static_secure_template__WEBPACK_IMPORTED_MODULE_4__["default"])(Broadcaster));

/***/ }),

/***/ "./settings.js":
/*!*********************!*\
  !*** ./settings.js ***!
  \*********************/
/*! exports provided: clientID, domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientID", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
// const domain = process.env.CLIENTID || 'dev-572t65wb.auth0.com';
// const clientID = process.env.DOMAIN || 'SAyrgfFmDNO9Xtwomr9GdG3inkgCTg3L';
const domain = process.env.CLIENTID || 'raspy-silence-2106.auth0.com';
const clientID = process.env.DOMAIN || 'i-GA-tjehtVT70XBybge0A5_wKV0vcPX';


/***/ }),

/***/ "./static/auth.js":
/*!************************!*\
  !*** ./static/auth.js ***!
  \************************/
/*! exports provided: saveToken, deleteToken, getTokenForBrowser, getTokenForServer, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteToken", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForBrowser", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForServer", function() { return getTokenForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings */ "./settings.js");





async function getJWK() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://${_settings__WEBPACK_IMPORTED_MODULE_3__["domain"]}/.well-known/jwks.json`);
  const jwk = await res.json();
  return jwk;
}

function saveToken(jwtToken, accessToken) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('user', jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.decode(jwtToken));
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('jwtToken', jwtToken);
}

;

function deleteToken() {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('user');
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('jwtToken');
}

;

async function verifyToken(token) {
  if (token) {
    const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.decode(token, {
      complete: true
    });
    const jwk = await getJWK();
    let cert = jwk.keys[0].x5c[0];
    cert = cert.match(/.{1,64}/g).join('\n');
    cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

    if (jwk.keys[0].kid === decodedToken.header.kid) {
      try {
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, cert);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
}

async function getTokenForBrowser() {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON('jwtToken');
  const validToken = await verifyToken(token);

  if (validToken) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON('user');
  }
}

async function getTokenForServer(req) {
  if (req.headers.cookie) {
    const jwtFromCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwtToken='));

    if (!jwtFromCookie) {
      return undefined;
    }

    const token = jwtFromCookie.split('=')[1];
    const validToken = await verifyToken(token);

    if (validToken) {
      return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.decode(token);
    } else {
      return undefined;
    }
  }
}



/***/ }),

/***/ "./static/secure-template.js":
/*!***********************************!*\
  !*** ./static/secure-template.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _static_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/auth */ "./static/auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (Page => class SecureTemplate extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps({
    req
  }) {
    const loggedInUser = false ? undefined : await Object(_static_auth__WEBPACK_IMPORTED_MODULE_2__["getTokenForServer"])(req);
    const pageProperties = (await Page.getInitialProps) && (await Page.getInitialProps(req));
    return _objectSpread({}, pageProperties, {
      loggedInUser,
      isLoggedIn: !!loggedInUser
    });
  }

  render() {
    if (!this.props.isLoggedIn) {
      return __jsx("div", null, __jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px"
        }
      }, __jsx("h3", null, "Please ", __jsx("a", {
        href: "/login"
      }, "sign in"), " before continuing")));
    }

    return __jsx("div", null, __jsx(Page, this.props));
  }

});

/***/ }),

/***/ 7:
/*!************************************!*\
  !*** multi ./pages/broadcaster.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo_fqwuyel\Desktop\UofT\CSCC09\project\project-project-more-cookies\the-infinite-potluck\pages\broadcaster.js */"./pages/broadcaster.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=broadcaster.js.map