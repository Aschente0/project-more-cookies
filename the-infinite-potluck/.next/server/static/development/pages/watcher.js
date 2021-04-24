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

/***/ "./pages/watcher.js":
/*!**************************!*\
  !*** ./pages/watcher.js ***!
  \**************************/
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





class Watcher extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  toggle() {
    let video = document.getElementById('video');
    let steps = document.getElementById('steps');
    let msg = document.getElementById('msg');
    let send_btn = document.getElementById('send_btn');
    let icon = document.getElementById('icon');
    let streams = document.getElementById('pickstream');
    video.hidden = !video.hidden;
    steps.hidden = !steps.hidden;

    if (steps.hidden) {
      steps.style.display = 'none';
    } else {
      steps.style.display = 'list-item';
    }

    msg.hidden = !msg.hidden;
    send_btn.hidden = !send_btn.hidden;
    icon.hidden = !icon.hidden;
    streams.hidden = !streams.hidden;
  }

  componentDidMount() {
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('/stream');
    let peerConnection;
    const video = document.getElementById('video');
    const steps = document.getElementById('steps'); //Toggle elements off before choosing stream

    this.toggle(); //broadcast the watcher is connected to

    let currBroadcast; //video properties

    let width = window.innerWidth < 1500 ? window.innerWidth : 1500;
    let height;
    let videoWidth;
    let videoHeight; // Stream pop-up messaging variables

    const messageBox = document.getElementById('send_btn');
    const data = document.getElementById('data');
    let speech = new SpeechSynthesisUtterance(); // on message submission, emit steam_popup signal

    messageBox.addEventListener("click", event => {
      let message = data.value;
      console.log(message); //params: signal, broadcast id to emit to, message

      this.socket.emit('stream_popup', currBroadcast, message);
      console.log("WATCHER EMITS stream_popup");
    }); //signal to synthesis message

    this.socket.on('message_synth', (id, message) => {
      console.log("WATCHER RECEIVES message_synth");
      console.log("ID: " + id + " currBroadcast: " + currBroadcast);

      if (id == currBroadcast) {
        speech.text = message;
        window.speechSynthesis.speak(speech);
      }
    });
    this.socket.on('offer', (id, message, config) => {
      console.log("11) WATCHER RECEIVES offer");
      peerConnection = new RTCPeerConnection(config);
      peerConnection.setRemoteDescription(message).then(() => peerConnection.createAnswer()).then(sdp => peerConnection.setLocalDescription(sdp)).then(() => {
        console.log("WATCHER EMITS answer");
        this.socket.emit('answer', id, peerConnection.localDescription);
      });

      peerConnection.ontrack = function (event) {
        // console.log("MOUNT VIDEO, STREAMS: " + event.streams[0] + " ACTIVE: " + event.streams[0].active);
        video.srcObject = event.streams[0];
        console.log(video.videoHeight, video.videoWidth);
      };

      peerConnection.onicecandidate = iceEvent => {
        if (iceEvent.candidate) {
          this.socket.emit('candidate', id, iceEvent.candidate);
        }
      };
    }); //after mounting the video, need to check size

    video.onresize = () => {
      if (!videoWidth || !videoHeight) {
        let vRatio = video.videoWidth / video.videoHeight;
        height = width / vRatio;
        videoHeight = 0.7 * height;
        videoWidth = 0.7 * width;
        video.width = videoWidth;
        video.height = videoHeight;
        steps.style.maxWidth = `${0.3 * width}px`;
        steps.style.height = `${videoHeight}px`;
        console.log(video.width, video.height);
      }
    };

    this.socket.on('connect', () => {
      console.log("watcher connected");
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
        let recipe = broadcasters[broadcast][0];
        let streamer = broadcasters[broadcast][1];
        pickstream.innerHTML = pickstream.innerHTML + `
                    <div id="${broadcast}" onMouseOver="this.style.background='#87CEFA';" onMouseOut="this.style.background='#F0F8FF';" style="display:flex;flex-direction:column;align-items:center;margin:20px;border:2px solid #067df7;padding:3px;box-shadow:5px 5px 2px grey;background: #F0F8FF;">
                        <div>
                            <div style="font-size: 30px;">${streamer}'s Stream</div>
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:center;">
                            <div style="font-size: 20px;color:DarkBlue;">${recipe.title}</div>
                            <img src="${recipe.image}" height="100" style="border:1px solid #067df7;margin:5px;"/>
                        </div>
                    </div>
                `;
      });
      Object.keys(broadcasters).forEach(broadcast => {
        document.getElementById(broadcast).addEventListener("click", () => {
          //toggle UI elements
          this.toggle();
          console.log("6) WATCHER HAS CHOSEN A STREAM");
          currBroadcast = broadcast;
          this.socket.emit('stream_chosen', broadcast); //set the name of the stream to chosen broadcaster's stream

          let recipe = broadcasters[broadcast][0];
          let streamer = broadcasters[broadcast][1];
          document.getElementById('title').innerHTML = `${streamer}'s ${recipe.title}`;
        });
      });
    });
    this.socket.on('candidate', (id, candidate) => {
      console.log("CANDIDATE RECEIVED IN WATCHER: " + candidate);
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch(err => console.error(err));
    });
    this.socket.on('recipe_data', data => {
      console.log("WATCHER RECEIVES recipe_data");
      console.log("DATA: " + data.title);
      let instructions = data.analyzedInstructions[0].steps;
      instructions.forEach(instruction => {
        steps.innerHTML = steps.innerHTML + `
                    <li style="padding-top:10px;padding-bottom:10px;padding-right:10px;">
                        ${instruction.step}
                    </li>
                    <hr class="solid">
                `;
      });
    });
    this.socket.on('stream_data', viewCount => {
      console.log("WATCHER RECEIVES stream_data");
      console.log(viewCount);
      document.getElementById('stream_count').innerHTML = `${viewCount}`;
    });
    this.socket.on('dc', broadcast => {
      console.log("WATCHER RECEIVED DISCONNECT");
      let doc = document.getElementById(broadcast);

      if (doc) {
        doc.parentNode.removeChild(doc);
      }

      if (broadcast == currBroadcast) {
        peerConnection.close();
      }
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
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-1365325211"
    }, __jsx("div", {
      className: "jsx-1365325211" + " " + "main"
    }, __jsx("div", {
      className: "jsx-1365325211" + " " + "body"
    }, __jsx("div", {
      id: "title",
      className: "jsx-1365325211" + " " + "title"
    }), __jsx("div", {
      className: "jsx-1365325211" + " " + "content"
    }, __jsx("div", {
      className: "jsx-1365325211" + " " + "content_items"
    }, __jsx("video", {
      id: "video",
      autoPlay: true,
      controls: true,
      className: "jsx-1365325211" + " " + "video"
    })), __jsx("div", {
      className: "jsx-1365325211" + " " + "content_items"
    }, __jsx("ol", {
      id: "steps",
      className: "jsx-1365325211" + " " + "steps"
    })))), __jsx("div", {
      className: "jsx-1365325211" + " " + "bottom"
    }, __jsx("div", {
      id: "stream_stats",
      className: "jsx-1365325211" + " " + "stream_stats"
    }, __jsx("img", {
      src: "/viewer.png",
      id: "icon",
      className: "jsx-1365325211" + " " + "viewer_icon"
    }), __jsx("div", {
      id: "stream_count",
      className: "jsx-1365325211" + " " + "stream_count"
    }))), __jsx("div", {
      id: "message_box",
      className: "jsx-1365325211" + " " + "message_box"
    }, __jsx("form", {
      id: "msg",
      className: "jsx-1365325211" + " " + "form"
    }, __jsx("textarea", {
      type: "text",
      id: "data",
      name: "data",
      className: "jsx-1365325211" + " " + "textarea"
    })), __jsx("button", {
      type: "button",
      id: "send_btn",
      className: "jsx-1365325211"
    }, "Send")), __jsx("div", {
      id: "pickstream",
      hidden: true,
      className: "jsx-1365325211"
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1365325211"
    }, ".main.jsx-1365325211{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:1500px;margin:0 auto;}.body.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-1365325211{font-size:40px;padding-bottom:20px;color:#067df7;}.content.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-shadow:5px 2px 2px grey;}.content_items.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.video.jsx-1365325211{margin:0px;background:#067df7;}.steps.jsx-1365325211{display:list-item;float:left;clear:both;border:1px solid gray;margin-top:0px;margin-bottom:0px;padding-inline-start:25px;overflow:scroll;background:white;}.stream_stats.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;padding:5px;background:#067df7;}.viewer_icon.jsx-1365325211{height:25px;width:25px;padding-right:5px;}.stream_count.jsx-1365325211{padding-top:5px;}.bottom.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#067df7;box-shadow:5px 5px 2px grey;}.message_box.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-top:10px;}.form.jsx-1365325211{width:99%;}.textarea.jsx-1365325211{width:99%;}.pickstream.jsx-1365325211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXHdhdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcVA0QixBQUk0QyxBQU1OLEFBS0UsQUFLRixBQU1BLEFBR0YsQUFJTyxBQVdMLEFBT0QsQUFLSSxBQUdILEFBT0EsQUFLSCxBQUdBLEFBR0csVUFMakIsQUFHQSxDQTVDRCxDQXFCZ0IsR0FwQ1MsQ0F5Q3hCLEVBdkJlLEtBbUJPLE1BbEJQLENBSmYsS0Fka0IsS0FtQlEsQ0FrQjFCLFFBcENBLGFBbUJtQixZQTFCTyxBQVVILEFBTXZCLEFBa0J1QixBQWVBLEFBT0EsQUFXRyxHQXhDSixhQWpDSyxLQWtDRyxrQkFqQ1QsUUFrQ0QsU0FqQ0YsT0FrQ0csTUFuQk0sQUF3QkwsQUFlWSxBQU9kLENBNURwQixRQUl1QixBQW1FdkIsRUFyQ0EsS0EyQkEsRUF0QmdCLFlBQ08sbUJBQ3ZCLGtEQTFCZ0MsR0FWaEMsYUFpRHVCLFlBdEN2QixPQXVDZ0MsNEJBQ2hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FybG9fZnF3dXllbFxcRGVza3RvcFxcVW9mVFxcQ1NDQzA5XFxwcm9qZWN0XFxwcm9qZWN0LXByb2plY3QtbW9yZS1jb29raWVzXFx0aGUtaW5maW5pdGUtcG90bHVja1xccGFnZXNcXHdhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzZWN1cmVUZW1wbGF0ZSBmcm9tICcuLi9zdGF0aWMvc2VjdXJlLXRlbXBsYXRlJztcclxuXHJcbmNsYXNzIFdhdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcclxuICAgICAgICBsZXQgc3RlcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcHMnKTtcclxuICAgICAgICBsZXQgbXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZycpO1xyXG4gICAgICAgIGxldCBzZW5kX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kX2J0bicpO1xyXG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcclxuICAgICAgICBsZXQgc3RyZWFtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrc3RyZWFtJyk7XHJcbiAgICAgICAgdmlkZW8uaGlkZGVuID0gIXZpZGVvLmhpZGRlbjtcclxuICAgICAgICBzdGVwcy5oaWRkZW4gPSAhc3RlcHMuaGlkZGVuO1xyXG4gICAgICAgIGlmIChzdGVwcy5oaWRkZW4pIHtcclxuICAgICAgICAgICAgc3RlcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ZXBzLnN0eWxlLmRpc3BsYXkgPSAnbGlzdC1pdGVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgbXNnLmhpZGRlbiA9ICFtc2cuaGlkZGVuO1xyXG4gICAgICAgIHNlbmRfYnRuLmhpZGRlbiA9ICFzZW5kX2J0bi5oaWRkZW47XHJcbiAgICAgICAgaWNvbi5oaWRkZW4gPSAhaWNvbi5oaWRkZW47XHJcbiAgICAgICAgc3RyZWFtcy5oaWRkZW4gPSAhc3RyZWFtcy5oaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNvY2tldD1pbygnL3N0cmVhbScpO1xyXG5cclxuICAgICAgICBsZXQgcGVlckNvbm5lY3Rpb247XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcclxuICAgICAgICBjb25zdCBzdGVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwcycpO1xyXG5cclxuICAgICAgICAvL1RvZ2dsZSBlbGVtZW50cyBvZmYgYmVmb3JlIGNob29zaW5nIHN0cmVhbVxyXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgIC8vYnJvYWRjYXN0IHRoZSB3YXRjaGVyIGlzIGNvbm5lY3RlZCB0b1xyXG4gICAgICAgIGxldCBjdXJyQnJvYWRjYXN0O1xyXG5cclxuICAgICAgICAvL3ZpZGVvIHByb3BlcnRpZXNcclxuICAgICAgICBsZXQgd2lkdGggPSAod2luZG93LmlubmVyV2lkdGggPCAxNTAwKSA/IHdpbmRvdy5pbm5lcldpZHRoIDogMTUwMDtcclxuICAgICAgICBsZXQgaGVpZ2h0O1xyXG4gICAgICAgIGxldCB2aWRlb1dpZHRoO1xyXG4gICAgICAgIGxldCB2aWRlb0hlaWdodDtcclxuXHJcbiAgICAgICAgLy8gU3RyZWFtIHBvcC11cCBtZXNzYWdpbmcgdmFyaWFibGVzXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kX2J0bicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YScpO1xyXG4gICAgICAgIGxldCBzcGVlY2ggPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vIG9uIG1lc3NhZ2Ugc3VibWlzc2lvbiwgZW1pdCBzdGVhbV9wb3B1cCBzaWduYWxcclxuICAgICAgICBtZXNzYWdlQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vcGFyYW1zOiBzaWduYWwsIGJyb2FkY2FzdCBpZCB0byBlbWl0IHRvLCBtZXNzYWdlXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N0cmVhbV9wb3B1cCcsIGN1cnJCcm9hZGNhc3QsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldBVENIRVIgRU1JVFMgc3RyZWFtX3BvcHVwXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3NpZ25hbCB0byBzeW50aGVzaXMgbWVzc2FnZVxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdtZXNzYWdlX3N5bnRoJywgKGlkLCBtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FUQ0hFUiBSRUNFSVZFUyBtZXNzYWdlX3N5bnRoXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklEOiBcIiArIGlkICsgXCIgY3VyckJyb2FkY2FzdDogXCIgKyBjdXJyQnJvYWRjYXN0KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IGN1cnJCcm9hZGNhc3QpIHtcclxuICAgICAgICAgICAgICAgIHNwZWVjaC50ZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsoc3BlZWNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignb2ZmZXInLCAoaWQsIG1lc3NhZ2UsIGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjExKSBXQVRDSEVSIFJFQ0VJVkVTIG9mZmVyXCIpO1xyXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWcpO1xyXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihtZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcGVlckNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihzZHAgPT4gcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihzZHApKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FUQ0hFUiBFTUlUUyBhbnN3ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnYW5zd2VyJywgaWQsIHBlZXJDb25uZWN0aW9uLmxvY2FsRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLm9udHJhY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJNT1VOVCBWSURFTywgU1RSRUFNUzogXCIgKyBldmVudC5zdHJlYW1zWzBdICsgXCIgQUNUSVZFOiBcIiArIGV2ZW50LnN0cmVhbXNbMF0uYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IGV2ZW50LnN0cmVhbXNbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2aWRlby52aWRlb0hlaWdodCwgdmlkZW8udmlkZW9XaWR0aCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gaWNlRXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGljZUV2ZW50LmNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NhbmRpZGF0ZScsIGlkLCBpY2VFdmVudC5jYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2FmdGVyIG1vdW50aW5nIHRoZSB2aWRlbywgbmVlZCB0byBjaGVjayBzaXplXHJcbiAgICAgICAgdmlkZW8ub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdmlkZW9XaWR0aCB8fCAhdmlkZW9IZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZSYXRpbyA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gdlJhdGlvO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9IZWlnaHQgPSAwLjcgKiBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB2aWRlb1dpZHRoID0gMC43ICogd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2aWRlby53aWR0aCA9IHZpZGVvV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5oZWlnaHQgPSB2aWRlb0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHN0ZXBzLnN0eWxlLm1heFdpZHRoID0gYCR7MC4zICogd2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgc3RlcHMuc3R5bGUuaGVpZ2h0ID0gYCR7dmlkZW9IZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmlkZW8ud2lkdGgsIHZpZGVvLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndhdGNoZXIgY29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCd3YXRjaGVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Jyb2FkY2FzdGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjMpIFdBVENIRVIgUkVDRUlWRVMgYnJvYWRjYXN0ZXIgQU5EIEVNSVRTIHdhdGNoZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3dhdGNoZXInKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3N0cmVhbV9jaG9pY2UnLCAoYnJvYWRjYXN0ZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNSkgV0FUQ0hFUiBDSE9PU0lORyBTVFJFQU1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGJyb2FkY2FzdGVycykpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBpY2tzdHJlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlja3N0cmVhbScpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhicm9hZGNhc3RlcnMpLmZvckVhY2goIChicm9hZGNhc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQlJPQURDQVNURVI6IFwiICsgYnJvYWRjYXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCByZWNpcGUgPSBicm9hZGNhc3RlcnNbYnJvYWRjYXN0XVswXTtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJlYW1lciA9IGJyb2FkY2FzdGVyc1ticm9hZGNhc3RdWzFdO1xyXG4gICAgICAgICAgICAgICAgcGlja3N0cmVhbS5pbm5lckhUTUwgPSBwaWNrc3RyZWFtLmlubmVySFRNTCArIGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHticm9hZGNhc3R9XCIgb25Nb3VzZU92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmQ9JyM4N0NFRkEnO1wiIG9uTW91c2VPdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmQ9JyNGMEY4RkYnO1wiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjIwcHg7Ym9yZGVyOjJweCBzb2xpZCAjMDY3ZGY3O3BhZGRpbmc6M3B4O2JveC1zaGFkb3c6NXB4IDVweCAycHggZ3JleTtiYWNrZ3JvdW5kOiAjRjBGOEZGO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDtcIj4ke3N0cmVhbWVyfSdzIFN0cmVhbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDtjb2xvcjpEYXJrQmx1ZTtcIj4ke3JlY2lwZS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCIgaGVpZ2h0PVwiMTAwXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMwNjdkZjc7bWFyZ2luOjVweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnJvYWRjYXN0ZXJzKS5mb3JFYWNoKChicm9hZGNhc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJyb2FkY2FzdCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RvZ2dsZSBVSSBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI2KSBXQVRDSEVSIEhBUyBDSE9TRU4gQSBTVFJFQU1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyckJyb2FkY2FzdCA9IGJyb2FkY2FzdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdHJlYW1fY2hvc2VuJywgYnJvYWRjYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgbmFtZSBvZiB0aGUgc3RyZWFtIHRvIGNob3NlbiBicm9hZGNhc3RlcidzIHN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNpcGUgPSBicm9hZGNhc3RlcnNbYnJvYWRjYXN0XVswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyZWFtZXIgPSBicm9hZGNhc3RlcnNbYnJvYWRjYXN0XVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS5pbm5lckhUTUwgPSBgJHtzdHJlYW1lcn0ncyAke3JlY2lwZS50aXRsZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignY2FuZGlkYXRlJywgKGlkLCBjYW5kaWRhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEUgUkVDRUlWRUQgSU4gV0FUQ0hFUjogXCIgKyBjYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNpcGVfZGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FUQ0hFUiBSRUNFSVZFUyByZWNpcGVfZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gZGF0YS5hbmFseXplZEluc3RydWN0aW9uc1swXS5zdGVwcztcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zLmZvckVhY2goaW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcHMuaW5uZXJIVE1MID0gc3RlcHMuaW5uZXJIVE1MICsgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT1cInBhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aW5zdHJ1Y3Rpb24uc3RlcH1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdzdHJlYW1fZGF0YScsICh2aWV3Q291bnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXQVRDSEVSIFJFQ0VJVkVTIHN0cmVhbV9kYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3Q291bnQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyZWFtX2NvdW50JykuaW5uZXJIVE1MID0gYCR7dmlld0NvdW50fWA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkYycsIChicm9hZGNhc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXQVRDSEVSIFJFQ0VJVkVEIERJU0NPTk5FQ1RcIik7XHJcbiAgICAgICAgICAgIGxldCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChicm9hZGNhc3QpO1xyXG4gICAgICAgICAgICBpZiAoZG9jKXtcclxuICAgICAgICAgICAgICAgIGRvYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYnJvYWRjYXN0ID09IGN1cnJCcm9hZGNhc3Qpe1xyXG4gICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7dXJsLCBhcywgb3B0aW9uc30pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBVFRFTVBUSU5HIFRPIERJU0NPTk5FQ1QgQVMgV0FUQ0hFUlwiKTtcclxuICAgICAgICAgICAgaWYoYXMgIT09IFwiL1wiIHx8IGFzICE9PSBcIi9vdGhlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2l0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiBjbGFzc05hbWU9XCJ2aWRlb1wiIGF1dG9QbGF5IGNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBpZD1cInN0ZXBzXCIgY2xhc3NOYW1lPVwic3RlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RyZWFtX3N0YXRzXCIgY2xhc3NOYW1lPVwic3RyZWFtX3N0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi92aWV3ZXIucG5nXCIgaWQ9XCJpY29uXCIgY2xhc3NOYW1lPVwidmlld2VyX2ljb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RyZWFtX2NvdW50XCIgY2xhc3NOYW1lPVwic3RyZWFtX2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VfYm94XCIgY2xhc3NOYW1lPVwibWVzc2FnZV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJtc2dcIiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cImRhdGFcIiBjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJkYXRhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic2VuZF9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY2tzdHJlYW1cIiBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubWFpbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gSWNvbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA2N2RmNztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDJweCAycHggZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRfaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA2N2RmN1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0cmVhbV9zdGF0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmlld2VyX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHJlYW1fY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDJweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZV9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5waWNrc3RyZWFtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzZWN1cmVUZW1wbGF0ZShXYXRjaGVyKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\carlo_fqwuyel\\\\Desktop\\\\UofT\\\\CSCC09\\\\project\\\\project-project-more-cookies\\\\the-infinite-potluck\\\\pages\\\\watcher.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_static_secure_template__WEBPACK_IMPORTED_MODULE_4__["default"])(Watcher));

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

/***/ 8:
/*!********************************!*\
  !*** multi ./pages/watcher.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo_fqwuyel\Desktop\UofT\CSCC09\project\project-project-more-cookies\the-infinite-potluck\pages\watcher.js */"./pages/watcher.js");


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
//# sourceMappingURL=watcher.js.map