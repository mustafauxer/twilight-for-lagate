/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/construct.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ }),

/***/ "./src/assets/js/base-page.js":
/*!************************************!*\
  !*** ./src/assets/js/base-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js");


var BasePage = /*#__PURE__*/function () {
  function BasePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasePage);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BasePage, [{
    key: "onReady",
    value: function onReady() {
      //
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      //
    }

    /**
     * To avoid loading unwanted classes, unless it's wanted page
     * @param {null|string[]} allowedPages
     * @return {*}
     */
  }, {
    key: "initiate",
    value: function initiate(allowedPages) {
      if (allowedPages && !allowedPages.includes(salla.config.get('page.slug'))) {
        return app.log("The Class For (".concat(allowedPages.join(','), ") Skipped."));
      }
      this.onReady();
      this.registerEvents();
      app.log("The Class For (".concat((allowedPages === null || allowedPages === void 0 ? void 0 : allowedPages.join(',')) || '*', ") Loaded\uD83C\uDF89"));
    }
  }]);
}();
/**
 * Because we merged multi classes into one file, there is no need to initiate all of them
 */
BasePage.initiateWhenReady = function () {
  var _window$app,
    _this = this;
  var allowedPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (((_window$app = window.app) === null || _window$app === void 0 ? void 0 : _window$app.status) === 'ready') {
    new this().initiate(allowedPages);
  } else {
    document.addEventListener('theme::ready', function () {
      return new _this().initiate(allowedPages);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasePage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/assets/js/partials/product-card.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-page */ "./src/assets/js/base-page.js");






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var ProductCard = /*#__PURE__*/function (_HTMLElement) {
  function ProductCard() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductCard);
    return _callSuper(this, ProductCard);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductCard, _HTMLElement);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _window$app,
        _this = this;
      // Parse product data
      this.product = this.product || JSON.parse(this.getAttribute('product'));
      if (((_window$app = window.app) === null || _window$app === void 0 ? void 0 : _window$app.status) === 'ready') {
        this.onReady();
      } else {
        document.addEventListener('theme::ready', function () {
          return _this.onReady();
        });
      }
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this2 = this;
      this.fitImageHeight = salla.config.get('store.settings.product.fit_type');
      this.placeholder = salla.url.asset(salla.config.get('theme.settings.placeholder'));
      this.getProps();
      this.source = salla.config.get("page.slug");
      // If the card is in the landing page, hide the add button and show the quantity
      if (this.source == "landing-page") {
        this.hideAddBtn = true;
        this.showQuantity = window.showQuantity;
      }
      salla.lang.onLoaded(function () {
        // Language
        _this2.remained = salla.lang.get('pages.products.remained');
        _this2.donationAmount = salla.lang.get('pages.products.donation_amount');
        _this2.startingPrice = salla.lang.get('pages.products.starting_price');
        _this2.addToCart = salla.lang.get('pages.cart.add_to_cart');
        _this2.outOfStock = salla.lang.get('pages.products.out_of_stock');

        // re-render to update translations
        _this2.render();
      });
      this.render();
    }
  }, {
    key: "initCircleBar",
    value: function initCircleBar() {
      var qty = this.product.quantity,
        total = this.product.quantity > 100 ? this.product.quantity * 2 : 100,
        roundPercent = qty / total * 100,
        bar = this.querySelector('.s-product-card-content-pie-svg-bar'),
        strokeDashOffsetValue = 100 - roundPercent;
      bar.style.strokeDashoffset = strokeDashOffsetValue;
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      var d = new Date(date);
      return "".concat(d.getFullYear(), "-").concat(d.getMonth() + 1, "-").concat(d.getDate());
    }
  }, {
    key: "getProductBadge",
    value: function getProductBadge() {
      var _this$product, _this$product2, _this$product4;
      if ((_this$product = this.product) !== null && _this$product !== void 0 && (_this$product = _this$product.preorder) !== null && _this$product !== void 0 && _this$product.label) {
        return "<div class=\"s-product-card-promotion-title\">".concat(this.product.preorder.label, "</div>");
      }
      if (this.product.promotion_title) {
        return "<div class=\"s-product-card-promotion-title\">".concat(this.product.promotion_title, "</div>");
      }
      if (this.showQuantity && (_this$product2 = this.product) !== null && _this$product2 !== void 0 && _this$product2.quantity) {
        var _this$product3;
        return "<div\n        class=\"s-product-card-quantity\">".concat(this.remained, " ").concat(salla.helpers.number((_this$product3 = this.product) === null || _this$product3 === void 0 ? void 0 : _this$product3.quantity), "</div>");
      }
      if (this.showQuantity && (_this$product4 = this.product) !== null && _this$product4 !== void 0 && _this$product4.is_out_of_stock) {
        return "<div class=\"s-product-card-out-badge\">".concat(this.outOfStock, "</div>");
      }
      return '';
    }
  }, {
    key: "getPriceFormat",
    value: function getPriceFormat(price) {
      if (!price || price == 0) {
        return salla.config.get('store.settings.product.show_price_as_dash') ? '-' : '';
      }
      return salla.money(price);
    }
  }, {
    key: "getProductPrice",
    value: function getProductPrice() {
      var price = '';
      if (this.product.is_on_sale) {
        var _this$product5;
        price = "<div class=\"s-product-card-sale-price\">\n                <h4>".concat(this.getPriceFormat(this.product.sale_price), "</h4>\n                <span>").concat(this.getPriceFormat((_this$product5 = this.product) === null || _this$product5 === void 0 ? void 0 : _this$product5.regular_price), "</span>\n              </div>");
      } else if (this.product.starting_price) {
        var _this$product6;
        price = "<div class=\"s-product-card-starting-price\">\n                  <p>".concat(this.startingPrice, "</p>\n                  <h4> ").concat(this.getPriceFormat((_this$product6 = this.product) === null || _this$product6 === void 0 ? void 0 : _this$product6.starting_price), " </h4>\n              </div>");
      } else {
        var _this$product7;
        price = "<h4 class=\"s-product-card-price\">".concat(this.getPriceFormat((_this$product7 = this.product) === null || _this$product7 === void 0 ? void 0 : _this$product7.price), "</h4>");
      }
      return price;
    }
  }, {
    key: "getAddButtonLabel",
    value: function getAddButtonLabel() {
      if (this.product.has_preorder_campaign) {
        return salla.lang.get('pages.products.pre_order_now');
      }
      if (this.product.status === 'sale' && this.product.type === 'booking') {
        return salla.lang.get('pages.cart.book_now');
      }
      if (this.product.status === 'sale') {
        return salla.lang.get('pages.cart.add_to_cart');
      }
      if (this.product.type !== 'donating') {
        return salla.lang.get('pages.products.out_of_stock');
      }

      // donating
      return salla.lang.get('pages.products.donation_exceed');
    }
  }, {
    key: "getProps",
    value: function getProps() {
      /**
       *  Horizontal card.
       */
      this.horizontal = this.hasAttribute('horizontal');

      /**
       *  Support shadow on hover.
       */
      this.shadowOnHover = this.hasAttribute('shadowOnHover');

      /**
       *  Hide add to cart button.
       */
      this.hideAddBtn = this.hasAttribute('hideAddBtn');

      /**
       *  Full image card.
       */
      this.fullImage = this.hasAttribute('fullImage');

      /**
       *  Minimal card.
       */
      this.minimal = this.hasAttribute('minimal');

      /**
       *  Special card.
       */
      this.isSpecial = this.hasAttribute('isSpecial');

      /**
       *  Show quantity.
       */
      this.showQuantity = this.hasAttribute('showQuantity');
    }
  }, {
    key: "escapeHTML",
    value: function escapeHTML() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$product8,
        _this$product9,
        _this$product0,
        _this$product1,
        _this$product10,
        _this$product11,
        _this$product12,
        _this$product13,
        _this$product14,
        _this$product15,
        _this$product16,
        _this$product17,
        _this$product18,
        _this$product19,
        _this$product20,
        _this$product21,
        _this$product22,
        _this$product23,
        _this3 = this,
        _this$product24,
        _this$product25,
        _document$lazyLoadIns,
        _this$product26;
      this.classList.add('s-product-card-entry');
      this.setAttribute('id', this.product.id);
      !this.horizontal && !this.fullImage && !this.minimal ? this.classList.add('s-product-card-vertical') : '';
      this.horizontal && !this.fullImage && !this.minimal ? this.classList.add('s-product-card-horizontal') : '';
      this.fitImageHeight && !this.isSpecial && !this.fullImage && !this.minimal ? this.classList.add('s-product-card-fit-height') : '';
      this.isSpecial ? this.classList.add('s-product-card-special') : '';
      this.fullImage ? this.classList.add('s-product-card-full-image') : '';
      this.minimal ? this.classList.add('s-product-card-minimal') : '';
      (_this$product8 = this.product) !== null && _this$product8 !== void 0 && _this$product8.donation ? this.classList.add('s-product-card-donation') : '';
      this.shadowOnHover ? this.classList.add('s-product-card-shadow') : '';
      (_this$product9 = this.product) !== null && _this$product9 !== void 0 && _this$product9.is_out_of_stock ? this.classList.add('s-product-card-out-of-stock') : '';
      this.isInWishlist = !salla.config.isGuest() && salla.storage.get('salla::wishlist', []).includes(Number(this.product.id));
      this.innerHTML = "\n        <div class=\"".concat(!this.fullImage ? 's-product-card-image' : 's-product-card-image-full', "\">\n          <a href=\"").concat((_this$product0 = this.product) === null || _this$product0 === void 0 ? void 0 : _this$product0.url, "\" aria-label=\"").concat(this.escapeHTML(((_this$product1 = this.product) === null || _this$product1 === void 0 || (_this$product1 = _this$product1.image) === null || _this$product1 === void 0 ? void 0 : _this$product1.alt) || this.product.name), "\">\n           <img \n              class=\"s-product-card-image-").concat(salla.url.is_placeholder((_this$product10 = this.product) === null || _this$product10 === void 0 || (_this$product10 = _this$product10.image) === null || _this$product10 === void 0 ? void 0 : _this$product10.url) ? 'contain' : this.fitImageHeight ? this.fitImageHeight : 'cover', " lazy\"\n              src=\"").concat(this.placeholder, "\"\n              alt=\"").concat(this.escapeHTML(((_this$product11 = this.product) === null || _this$product11 === void 0 || (_this$product11 = _this$product11.image) === null || _this$product11 === void 0 ? void 0 : _this$product11.alt) || this.product.name), "\"\n              data-src=\"").concat(((_this$product12 = this.product) === null || _this$product12 === void 0 || (_this$product12 = _this$product12.image) === null || _this$product12 === void 0 ? void 0 : _this$product12.url) || ((_this$product13 = this.product) === null || _this$product13 === void 0 ? void 0 : _this$product13.thumbnail) || '', "\"\n            />\n            ").concat(!this.fullImage && !this.minimal ? this.getProductBadge() : '', "\n          </a>\n          ").concat(this.fullImage ? "<a href=\"".concat((_this$product14 = this.product) === null || _this$product14 === void 0 ? void 0 : _this$product14.url, "\" aria-label=").concat(this.product.name, " class=\"s-product-card-overlay\"></a>") : '', "\n          ").concat(!this.horizontal && !this.fullImage ? "<salla-button\n              shape=\"icon\"\n              fill=\"outline\"\n              color=\"light\"\n              name=\"product-name-".concat(this.product.id, "\"\n              aria-label=\"Add or remove to wishlist\"\n              class=\"s-product-card-wishlist-btn animated ").concat(this.isInWishlist ? 's-product-card-wishlist-added pulse-anime' : 'not-added un-favorited', "\"\n              onclick=\"salla.wishlist.toggle(").concat(this.product.id, ")\"\n              data-id=\"").concat(this.product.id, "\">\n              <i class=\"sicon-heart\"></i>\n            </salla-button>") : "", "\n        </div>\n        <div class=\"s-product-card-content\">\n          ").concat(this.isSpecial && (_this$product15 = this.product) !== null && _this$product15 !== void 0 && _this$product15.quantity ? "<div class=\"s-product-card-content-pie\">\n              <span>\n                <b>".concat(salla.helpers.number((_this$product16 = this.product) === null || _this$product16 === void 0 ? void 0 : _this$product16.quantity), "</b>\n                ").concat(this.remained, "\n              </span>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-2 -1 36 34\" class=\"s-product-card-content-pie-svg\">\n                <circle cx=\"16\" cy=\"16\" r=\"15.9155\" class=\"s-product-card-content-pie-svg-base\" />\n                <circle cx=\"16\" cy=\"16\" r=\"15.9155\" class=\"s-product-card-content-pie-svg-bar\" />\n              </svg>\n            </div>") : "", "\n\n          <div class=\"s-product-card-content-main ").concat(this.isSpecial ? 's-product-card-content-extra-padding' : '', "\">\n            <h3 class=\"s-product-card-content-title\">\n              <a href=\"").concat((_this$product17 = this.product) === null || _this$product17 === void 0 ? void 0 : _this$product17.url, "\">").concat((_this$product18 = this.product) === null || _this$product18 === void 0 ? void 0 : _this$product18.name, "</a>\n            </h3>\n\n            ").concat((_this$product19 = this.product) !== null && _this$product19 !== void 0 && _this$product19.subtitle && !this.minimal ? "<p class=\"s-product-card-content-subtitle opacity-80\">".concat((_this$product20 = this.product) === null || _this$product20 === void 0 ? void 0 : _this$product20.subtitle, "</p>") : "", "\n          </div>\n          ").concat((_this$product21 = this.product) !== null && _this$product21 !== void 0 && _this$product21.donation && !this.minimal && !this.fullImage ? "<salla-progress-bar donation=".concat(JSON.stringify((_this$product22 = this.product) === null || _this$product22 === void 0 ? void 0 : _this$product22.donation), "></salla-progress-bar>\n          <div class=\"s-product-card-donation-input\">\n            ").concat((_this$product23 = this.product) !== null && _this$product23 !== void 0 && (_this$product23 = _this$product23.donation) !== null && _this$product23 !== void 0 && _this$product23.can_donate ? "<label for=\"donation-amount-".concat(this.product.id, "\">").concat(this.donationAmount, " <span>*</span></label>\n              <input\n                type=\"text\"\n                onInput=\"").concat(function (e) {
        salla.helpers.inputDigitsOnly(e.target);
        _this3.addBtn.donatingAmount = e.target.value;
      }, "\"\n                id=\"donation-amount-").concat(this.product.id, "\"\n                name=\"donating_amount\"\n                class=\"s-form-control\"\n                placeholder=\"").concat(this.donationAmount, "\" />") : "", "\n          </div>") : '', "\n          <div class=\"s-product-card-content-sub ").concat(this.isSpecial ? 's-product-card-content-extra-padding' : '', "\">\n            ").concat((_this$product24 = this.product) !== null && _this$product24 !== void 0 && (_this$product24 = _this$product24.donation) !== null && _this$product24 !== void 0 && _this$product24.can_donate ? '' : this.getProductPrice(), "\n            ").concat((_this$product25 = this.product) !== null && _this$product25 !== void 0 && (_this$product25 = _this$product25.rating) !== null && _this$product25 !== void 0 && _this$product25.stars ? "<div class=\"s-product-card-rating\">\n                <i class=\"sicon-star2 before:text-orange-300\"></i>\n                <span>".concat(this.product.rating.stars, "</span>\n              </div>") : "", "\n          </div>\n\n          ").concat(this.isSpecial && this.product.discount_ends ? "<salla-count-down date=\"".concat(this.formatDate(this.product.discount_ends), "\" end-of-day=", true, " boxed=", true, "\n              labeled=", true, " />") : "", "\n\n\n          ").concat(!this.hideAddBtn ? "<div class=\"s-product-card-content-footer gap-2\">\n              <salla-add-product-button fill=\"outline\" width=\"wide\"\n                product-id=\"".concat(this.product.id, "\"\n                product-status=\"").concat(this.product.status, "\"\n                product-type=\"").concat(this.product.type, "\">\n                ").concat(this.product.status == 'sale' ? "<i class=\"text-base sicon-".concat(this.product.type == 'booking' ? 'calendar-time' : 'shopping-bag', "\"></i>") : "", "\n                <span>").concat(this.product.add_to_cart_label ? this.product.add_to_cart_label : this.getAddButtonLabel(), "</span>\n              </salla-add-product-button>\n\n              ").concat(this.horizontal || this.fullImage ? "<salla-button \n                  shape=\"icon\" \n                  fill=\"outline\" \n                  color=\"light\" \n                  id=\"card-wishlist-btn-".concat(this.product.id, "-horizontal\"\n                  aria-label=\"Add or remove to wishlist\"\n                  class=\"s-product-card-wishlist-btn animated ").concat(this.isInWishlist ? 's-product-card-wishlist-added pulse-anime' : 'not-added un-favorited', "\"\n                  onclick=\"salla.wishlist.toggle(").concat(this.product.id, ")\"\n                  data-id=\"").concat(this.product.id, "\">\n                  <i class=\"sicon-heart\"></i> \n                </salla-button>") : "", "\n            </div>") : "", "\n        </div>\n      ");
      this.querySelectorAll('[name="donating_amount"]').forEach(function (element) {
        element.addEventListener('input', function (e) {
          e.target.closest(".s-product-card-content").querySelector("salla-add-product-button").setAttribute("donating-amount", e.target.value);
        });
      });
      (_document$lazyLoadIns = document.lazyLoadInstance) === null || _document$lazyLoadIns === void 0 || _document$lazyLoadIns.update(this.querySelectorAll('.lazy'));
      if ((_this$product26 = this.product) !== null && _this$product26 !== void 0 && _this$product26.quantity && this.isSpecial) {
        this.initCircleBar();
      }
    }
  }]);
}(/*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLElement));
customElements.define('custom-salla-product-card', ProductCard);
})();

/******/ })()
;
//# sourceMappingURL=product-card.js.map