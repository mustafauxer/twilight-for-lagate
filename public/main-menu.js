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
/*!*********************************************!*\
  !*** ./src/assets/js/partials/main-menu.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var NavigationMenu = /*#__PURE__*/function (_HTMLElement) {
  function NavigationMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationMenu);
    return _callSuper(this, NavigationMenu, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavigationMenu, _HTMLElement);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;
      salla.onReady().then(function () {
        return salla.lang.onLoaded();
      }).then(function () {
        _this.menus = [];
        _this.displayAllText = salla.lang.get('blocks.home.display_all');
        return salla.api.component.getMenus().then(function (_ref) {
          var data = _ref.data;
          _this.menus = data;
          return _this.render();
        })["catch"](function (error) {
          return salla.logger.error('salla-menu::Error fetching menus', error);
        });
      });
    }

    /** 
    * Check if the menu has children
    * @param {Object} menu
    * @returns {Boolean}
    */
  }, {
    key: "hasChildren",
    value: function hasChildren(menu) {
      var _menu$children;
      return (menu === null || menu === void 0 || (_menu$children = menu.children) === null || _menu$children === void 0 ? void 0 : _menu$children.length) > 0;
    }

    /**
    * Check if the menu has products
    * @param {Object} menu
    * @returns {Boolean}
    */
  }, {
    key: "hasProducts",
    value: function hasProducts(menu) {
      var _menu$products;
      return (menu === null || menu === void 0 || (_menu$products = menu.products) === null || _menu$products === void 0 ? void 0 : _menu$products.length) > 0;
    }

    /**
    * Get the classes for desktop menu
    * @param {Object} menu
    * @param {Boolean} isRootMenu
    * @returns {String}
    */
  }, {
    key: "getDesktopClasses",
    value: function getDesktopClasses(menu, isRootMenu) {
      return "!hidden lg:!block ".concat(isRootMenu ? 'root-level lg:!inline-block' : 'relative', " ").concat(menu.products ? ' mega-menu' : '', "\n        ").concat(this.hasChildren(menu) ? ' has-children' : '');
    }

    /**
    * Get the mobile menu
    * @param {Object} menu
    * @param {String} displayAllText
    * @returns {String}
    */
  }, {
    key: "getMobileMenu",
    value: function getMobileMenu(menu, displayAllText) {
      var _this2 = this;
      var menuImage = menu.image ? "<img src=\"".concat(menu.image, "\" class=\"rounded-full\" width=\"48\" height=\"48\" alt=\"").concat(menu.title, "\" />") : '';
      return "\n        <li class=\"lg:hidden text-sm font-bold\" ".concat(menu.attrs, ">\n            ").concat(!this.hasChildren(menu) ? "\n                <a href=\"".concat(menu.url, "\" aria-label=\"").concat(menu.title || 'category', "\" class=\"text-gray-500 ").concat(menu.image ? '!py-3' : '', "\" ").concat(menu.link_attrs, ">\n                    ").concat(menuImage, "\n                    <span>").concat(menu.title || '', "</span>\n                </a>") : "\n                <span class=\"".concat(menu.image ? '!py-3' : '', "\">\n                    ").concat(menuImage, "\n                    ").concat(menu.title, "\n                </span>\n                <ul>\n                    <li class=\"text-sm font-bold\">\n                        <a href=\"").concat(menu.url, "\" class=\"text-gray-500\">").concat(displayAllText, "</a>\n                    </li>\n                    ").concat(menu.children.map(function (subMenu) {
        return _this2.getMobileMenu(subMenu, displayAllText);
      }).join(''), "\n                </ul>\n            "), "\n        </li>");
    }

    /**
    * Get the desktop menu
    * @param {Object} menu
    * @param {Boolean} isRootMenu
    * @returns {String}
    */
  }, {
    key: "getDesktopMenu",
    value: function getDesktopMenu(menu, isRootMenu) {
      var _this3 = this;
      return "\n        <li class=\"".concat(this.getDesktopClasses(menu, isRootMenu), "\" ").concat(menu.attrs, ">\n            <a href=\"").concat(menu.url, "\" aria-label=\"").concat(menu.title || 'category', "\" ").concat(menu.link_attrs, ">\n                <span>").concat(menu.title, "</span>\n            </a>\n            ").concat(this.hasChildren(menu) ? "\n                <div class=\"sub-menu ".concat(this.hasProducts(menu) ? 'w-full left-0 flex' : 'w-56', "\">\n                    <ul class=\"").concat(this.hasProducts(menu) ? 'w-56 shrink-0 m-8 rtl:ml-0 ltr:mr-0' : '', "\">\n                        ").concat(menu.children.map(function (subMenu) {
        return _this3.getDesktopMenu(subMenu, false);
      }).join('\n'), "\n                    </ul>\n                    ").concat(this.hasProducts(menu) ? "\n                    <salla-products-list\n                    source=\"selected\"\n                    shadow-on-hover\n                    source-value=\"[".concat(menu.products, "]\" />") : '', "\n                </div>") : '', "\n        </li>");
    }

    /**
    * Get the menus
    * @returns {String}
    */
  }, {
    key: "getMenus",
    value: function getMenus() {
      var _this4 = this;
      return this.menus.map(function (menu) {
        return "\n            ".concat(_this4.getMobileMenu(menu, _this4.displayAllText), "\n            ").concat(_this4.getDesktopMenu(menu, true), "\n        ");
      }).join('\n');
    }

    /**
    * Render the header menu
    */
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <nav id=\"mobile-menu\" class=\"mobile-menu\">\n            <ul class=\"main-menu\">".concat(this.getMenus(), "</ul>\n            <button class=\"btn--close close-mobile-menu sicon-cancel lg:hidden\"></button>\n        </nav>\n        <button class=\"btn--close-sm close-mobile-menu sicon-cancel hidden\"></button>");
    }
  }]);
}(/*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLElement));
customElements.define('custom-main-menu', NavigationMenu);
})();

/******/ })()
;
//# sourceMappingURL=main-menu.js.map