/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/fslightbox@3.7.3/node_modules/fslightbox/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/fslightbox@3.7.3/node_modules/fslightbox/index.js ***!
  \******************************************************************************/
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else // removed by dead control flow
{ var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",s="".concat(i,"styles"),r="".concat(i,"cursor-grabbing"),a="".concat(i,"full-dimension"),c="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),p="".concat(i,"slide-btn"),f="".concat(p,"-container"),h="".concat(i,"fade-in"),g="".concat(i,"fade-out"),m=h+"-strong",b=g+"-strong",v="".concat(i,"opacity-"),x="".concat(v,"1"),y="".concat(i,"source");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.i=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}"object"===("undefined"==typeof document?"undefined":w(document))&&((o=document.createElement("style")).className=s,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg{width:20px;height:20px}.fslightbox-svgp{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightboxsn{z-index:0;display:flex;align-items:center;margin:14px 0 0 11px;font-size:15px;color:#d7d7d7}.fslightboxsn span{display:inline;vertical-align:middle}.fslightboxsl{display:inline-block!important;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:white}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex}.fslightbox-toolbar-button{width:45px;height:100%}.fslightbox-fsx{width:24px;height:24px}.fslightboxb{border:0;background:rgba(35,35,35,.65);cursor:pointer}.fslightboxb:focus{outline:0}.fslightboxb:focus .fslightbox-svgp{fill:#fff}.fslightboxb:hover .fslightbox-svgp{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}.fslightbox-slide-btn-container-next{padding-right:6px!important;padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}.fslightbox-slide-btn-container-next{padding-left:30px}.fslightbox-slide-btn{padding:10px}}.fslightbox-slide-btn-container:hover .fslightbox-svgp{fill:#fff}.fslightbox-slide-btn{padding:9px}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}@media (min-width:1200px){.fslightboxsn{margin:15px 0 0 12px;font-size:16px;display:block}.fslightboxsl{margin:0 6px 1px 6px;height:14px}.fslightbox-slide-btn{padding:11px}.fslightbox-svg{width:22px;height:22px}.fslightbox-fsx{width:26px;height:26px}.fslightbox-fso{width:22px;height:22px}.fslightboxl div{width:60px;height:60px;border-width:6px;border-color:#999 transparent transparent transparent;border-radius:50%}}@media (min-width:1600px){.fslightbox-nav{height:50px}.fslightboxsn{display:flex;margin:19px 0 0 16px;font-size:20px}.fslightboxsl{margin:0 7px 1px 7px;height:16px;width:2px;background:#d7d7d7}.fslightbox-toolbar-button{width:50px}.fslightbox-slide-btn{padding:12px}.fslightbox-svg{width:24px;height:24px}.fslightbox-fsx{width:28px;height:28px}.fslightbox-fso{width:24px;height:24px}}")),document.head.appendChild(o));function L(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:s(e)},this.handleReceivedSourceTypeForUrl=function(e,n){if(!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o)){!function(e,t){for(var n in t)e[n]=t[n]}(t,i);try{localStorage.setItem("fslightbox-types",JSON.stringify(t))}catch(e){}}};var s=function(e){o++,i[e]=!1};if(n.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem("fslightbox-types"))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=s)}}function C(e,t,n,o){e.data;var i=e.elements.sources,s=n/o,r=0;this.adjustSize=function(){if((r=e.mw/s)<e.mh)return n<e.mw&&(r=o),a();r=o>e.mh?e.mh:o,a()};var a=function(){i[t].style.width=r*s+"px",i[t].style.height=r+"px"}}function A(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements,s=i.sourceAnimationWrappers,r=i.sources,a=e.isl,c=e.props.onSourceLoad,l=e.resolve;function u(e,n){o[t]=l(C,[t,e,n]),o[t].adjustSize()}this.b=function(e,o){r[t].classList.add(x),n.a(),u(e,o),n.b=u},this.a=function(){a[t]=!0,s[t].classList.add(m),s[t].removeChild(s[t].firstChild),c&&c(e,r[t],t)}}function E(e,t){var n,o=this,i=e.elements.sources,s=e.props,r=(0,e.resolve)(A,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;r.b(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,r.b(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(e,t){e||(e=1920,t=1080),s.maxYoutubeDimensions&&(e=s.maxYoutubeDimensions.width,t=s.maxYoutubeDimensions.height),r.b(e,t)},this.handleCustomLoad=function(){var e=i[t],n=e.offsetWidth,s=e.offsetHeight;n&&s?r.b(n,s):setTimeout(o.handleCustomLoad)}}function F(e,t,n){var o=e.elements.sources,i=e.props.customClasses,s=i[t]?i[t]:"";o[t].className=n+" "+s}function I(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function z(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,s=o.sourceAnimationWrappers,r=e.props.sources;i[t]=document.createElement("img"),F(e,t,y),i[t].src=r[t],i[t].onload=n[t].handleImageLoad,I(e,t),s[t].appendChild(i[t])}function T(e,t){var n=e.ap,o=e.collections.sourceLoadHandlers,i=e.elements,s=i.sources,r=i.sourceAnimationWrappers,a=e.props,c=a.sources,l=a.videosPosters,u=document.createElement("video"),d=document.createElement("source");s[t]=u,F(e,t,"".concat(y," fslightboxv")),u.src=c[t],u.onloadedmetadata=function(e){return o[t].handleVideoLoad(e)},u.controls=!0,u.autoplay=n.i(t),I(e,t),l[t]&&(s[t].poster=l[t]),d.src=c[t],u.appendChild(d),setTimeout(o[t].handleNotMetaDatedVideoLoad,3e3),r[t].appendChild(s[t])}function N(e,t){var n=e.ap,o=e.collections.sourceLoadHandlers,s=e.elements,r=s.sources,a=s.sourceAnimationWrappers,c=e.props.sources[t],l=c.split("?")[1],u=document.createElement("iframe");r[t]=u,F(e,t,"".concat(y," ").concat(i,"youtube-iframe")),u.src="https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],"?").concat(l||"").concat(n.i(t)?"&mute=1&autoplay=1":"","&enablejsapi=1"),u.allowFullscreen=!0,I(e,t),a[t].appendChild(u),o[t].handleYoutubeLoad(parseInt(u.width),parseInt(u.height))}function P(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,s=o.sourceAnimationWrappers,r=e.props.sources;i[t]=r[t],F(e,t,"".concat(i[t].className," ").concat(y)),s[t].appendChild(i[t]),n[t].handleCustomLoad()}function k(e,t){var n=e.elements,o=n.sources,s=n.sourceAnimationWrappers,r=e.props;r.onSourceLoad,r.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(c),o[t].innerHTML="Invalid source",s[t].appendChild(o[t]),new A(e,t).a()}function R(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,s=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,r){var a;switch("invalid"!==t&&(n[r]=s(E,[r])),t){case"image":a=z;break;case"video":a=T;break;case"youtube":a=N;break;case"custom":a=P;break;default:a=k}o[r]=function(){return a(e,r)},i.displaySourcesWhichShouldBeDisplayed()}}function M(e,t,n){var o=e.props,i=o.types,s=o.type,r=o.sources;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:s&&(t=s),t},this.retrieveTypeWithXhrForIndex=function(e){!function(e,t){var n=document.createElement("a");n.href=e;var o=n.hostname;if("www.youtube.com"===o||"youtu.be"===o)return t("youtube");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4!==i.readyState){if(2===i.readyState){var e,n=i.getResponseHeader("content-type");switch(n.slice(0,n.indexOf("/"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}i.onreadystatechange=null,i.abort(),t(e)}}else t("invalid")},i.open("GET",e),i.send()}(r[e],(function(o){t.handleReceivedSourceTypeForUrl(o,r[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.core.stageManager,o=e.elements,i=o.smw,s=o.sourceWrappersContainer,r=e.props,l=0,p=document.createElement("div");function f(e){p.style.transform="translateX(".concat(e+l,"px)"),l=0}function h(){return(1+r.slideDistance)*innerWidth}p.className="".concat(d," ").concat(a," ").concat(c),p.s=function(){p.style.display="flex"},p.h=function(){p.style.display="none"},p.a=function(){p.classList.add(u)},p.d=function(){p.classList.remove(u)},p.n=function(){p.style.removeProperty("transform")},p.v=function(e){return l=e,p},p.ne=function(){f(-h())},p.z=function(){f(0)},p.p=function(){f(h())},n.i(t)||p.h(),i[t]=p,s.appendChild(p),function(e,t){var n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,s=document.createElement("div"),r=document.createElement("div");r.className="fslightboxl";for(var a=0;a<3;a++){var c=document.createElement("div");r.appendChild(c)}s.appendChild(r),o[t].appendChild(s),i[t]=s}(e,t)}function H(e,t,n){var o=document.createElementNS("http://www.w3.org/2000/svg","svg"),s="".concat(i,"svg");o.setAttributeNS(null,"class","".concat(s)),o.setAttributeNS(null,"viewBox",t);var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttributeNS(null,"class","".concat(s,"p")),r.setAttributeNS(null,"d",n),o.appendChild(r),e.appendChild(o),o}function W(e,t){var n=document.createElement("button");return n.className="fslightboxb ".concat(i,"toolbar-button ").concat(c),n.title=t,e.appendChild(n),n}function O(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){if(!e.hfs){var n="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",o=W(t);o.title="Enter fullscreen";var s=H(o,"0 0 18 18",n);e.fso=function(){e.ifs=1,o.title="Exit fullscreen",s.classList.add("".concat(i,"fsx")),s.setAttributeNS(null,"viewBox","0 0 950 1024"),s.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},e.fsx=function(){e.ifs=0,o.title="Enter fullscreen",s.classList.remove("".concat(i,"fsx")),s.setAttributeNS(null,"viewBox","0 0 18 18"),s.firstChild.setAttributeNS(null,"d",n)},o.onclick=e.fs.t}}(e,n),function(e,t){var n=W(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,H(n,"0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function j(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),O(e,o),t.length>1&&function(e,t){var n=e.props.sources,o=(e.stageIndexes,document.createElement("div")),i=document.createElement("span"),s=document.createElement("span"),r=document.createElement("span");o.className="fslightboxsn",e.sn=function(e){return i.innerHTML=e},s.className="fslightboxsl",r.innerHTML=n.length,o.appendChild(i),o.appendChild(s),o.appendChild(r),t.appendChild(o)}(e,o)}function X(e,t,n,o){var i=e.elements.container,s=n.charAt(0).toUpperCase()+n.slice(1),r=document.createElement("div");r.className="".concat(f," ").concat(f,"-").concat(n),r.title="".concat(s," slide"),r.onclick=t,function(e,t){var n=document.createElement("button");n.className="fslightboxb ".concat(p," ").concat(c),H(n,"0 0 20 20",t),e.appendChild(n)}(r,o),i.appendChild(r)}function q(e){var t=e.core,n=t.lightboxCloser,o=t.slideChangeFacade,i=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),i.t()}}}function B(e){var t=e.elements,n=e.sourcePointerProps,o=e.stageIndexes;function i(e,o){t.smw[e].v(n.swipedX)[o]()}this.runActionsForEvent=function(e){var s,a,c;t.container.contains(t.slideSwipingHoverer)||t.container.appendChild(t.slideSwipingHoverer),s=t.container,a=r,(c=s.classList).contains(a)||c.add(a),n.swipedX=e.screenX-n.downScreenX;var l=o.previous,u=o.next;i(o.current,"z"),void 0!==l&&n.swipedX>0?i(l,"ne"):void 0!==u&&n.swipedX<0&&i(u,"p")}}function V(e){var t=e.dss,n=e.props.sources,o=e.resolve,i=e.sourcePointerProps,s=o(B);1===n.length||t?this.listener=function(){i.swipedX=1}:this.listener=function(e){i.isPointering&&s.runActionsForEvent(e)}}function U(e){var t=e.core.slideIndexChanger,n=e.elements.smw,o=e.stageIndexes,i=e.sws;function s(e){var t=n[o.current];t.a(),t[e]()}function r(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.runPositiveSwipedXActions=function(){var e=o.previous;if(void 0===e)s("z");else{s("p");var n=o.next;t.changeTo(e);var a=o.previous;i.d(a),i.b(n),s("z"),r(a,"ne")}},this.runNegativeSwipedXActions=function(){var e=o.next;if(void 0===e)s("z");else{s("ne");var n=o.previous;t.changeTo(e);var a=o.next;i.d(a),i.b(n),s("z"),r(a,"p")}}}function _(e,t){e.contains(t)&&e.removeChild(t)}function Y(e){var t=e.core.lightboxCloser,n=e.dss,o=e.elements,i=e.props,s=e.resolve,a=e.sourcePointerProps,c=s(U);this.runNoSwipeActions=function(){_(o.container,o.slideSwipingHoverer),a.isSourceDownEventTarget||i.disableBackgroundClose||t.closeLightbox(),a.isPointering=!1},this.runActions=function(){n||(a.swipedX>0?c.runPositiveSwipedXActions():c.runNegativeSwipedXActions()),_(o.container,o.slideSwipingHoverer),o.container.classList.remove(r),a.isPointering=!1}}function J(e){var t=e.resolve,n=e.sourcePointerProps,o=t(Y);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function G(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.globalEventsController,s=n.scrollbarRecompensor,r=(e.data,e.elements),a=e.fs,c=e.props,u=e.sourcePointerProps;this.runActions=function(){t.i=1,r.container.classList.add(b),i.removeListeners(),c.exitFullscreenOnClose&&e.ifs&&a.x(),setTimeout((function(){t.i=0,u.isPointering=!1,r.container.classList.remove(b),document.documentElement.classList.remove(l),s.removeRecompense(),document.body.removeChild(r.container),o.dispatch("onClose")}),270)}}function $(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function K(e){var t,n,o;!function(e){var t=e.ap,n=e.elements.sources,o=e.props,i=o.autoplay,s=o.autoplays;function r(e,o){if("play"!=o||t.i(e)){var i=n[e];if(i){var s=i.tagName;if("VIDEO"==s)i[o]();else if("IFRAME"==s){var r=i.contentWindow;r&&r.postMessage('{"event":"command","func":"'.concat(o,'Video","args":""}'),"*")}}}}t.i=function(e){return s[e]||i&&0!=s[e]},t.p=function(e){r(e,"play")},t.c=function(e,t){r(e,"pause"),r(t,"play")}}(e),n=(t=e).core.eventsDispatcher,o=t.props,n.dispatch=function(e){o[e]&&o[e]()},function(e){e.data;var t=e.fs,n=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],o=document.documentElement,i=o.requestFullscreen;function s(e){for(var t=0;t<n.length;t++)document[e](n[t],r)}function r(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?e.fso():e.fsx()}t.i=function(){if(i||(i=o.mozRequestFullScreen),i||(i=o.webkitRequestFullscreen),i||(i=o.msRequestFullscreen),!i)return e.hfs=1,t.o=function(){},t.x=function(){},t.t=function(){},t.l=function(){},void(t.q=function(){});t.o=function(){e.fso();var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},t.x=function(){e.fsx(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},t.t=function(){e.ifs?t.x():t.o()},t.l=function(){s("addEventListener")},t.q=function(){s("removeEventListener")}}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.fs,s=e.resolve,r=s(q),a=s(V),c=s(J);n.attachListeners=function(){document.addEventListener("pointermove",a.listener),document.addEventListener("pointerup",c.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",r.listener),i.l()},n.removeListeners=function(){document.removeEventListener("pointermove",a.listener),document.removeEventListener("pointerup",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",r.listener),i.q()}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(G);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;function o(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")}n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))},n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.ap,n=(e.componentsServices,e.core),o=n.slideIndexChanger,i=n.sourceDisplayFacade,s=n.stageManager,r=e.elements,a=r.smw,c=r.sourceAnimationWrappers,l=e.isl,u=e.stageIndexes,d=e.sws;o.changeTo=function(n){t.c(u.current,n),u.current=n,s.updateStageIndexes(),e.sn(n+1),i.displaySourcesWhichShouldBeDisplayed()},o.jumpTo=function(e){var t=u.previous,n=u.current,i=u.next,r=l[n],p=l[e];o.changeTo(e);for(var f=0;f<a.length;f++)a[f].d();d.d(n),d.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=u.previous,o=u.next;function f(){s.i(n)?n===u.previous?a[n].ne():n===u.next&&a[n].p():(a[n].h(),a[n].n())}r&&c[n].classList.add(g),p&&c[u.current].classList.add(h),d.a(),void 0!==e&&e!==n&&a[e].ne(),a[u.current].n(),void 0!==o&&o!==n&&a[o].p(),d.b(t),d.b(i),l[n]?setTimeout(f,260):f()}))}))}}(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=n.smw,i=n.sources,s=e.sourcePointerProps,r=e.stageIndexes;t.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),s.isPointering=!0,s.downScreenX=e.screenX,s.swipedX=0;var t=i[r.current];t&&t.contains(e.target)?s.isSourceDownEventTarget=!0:s.isSourceDownEventTarget=!1;for(var n=0;n<o.length;n++)o[n].d()}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.loc,i=e.stageIndexes;function s(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o)s(i.current);else for(var e in i)s(i[e])}}(e),function(e){var t=e.core.stageManager,n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,s=e.isl,r=e.stageIndexes,a=e.sws;a.a=function(){for(var e in r)o[r[e]].s()},a.b=function(e){void 0===e||t.i(e)||(o[e].h(),o[e].n())},a.c=function(){for(var e in r)a.d(r[e])},a.d=function(e){if(s[e]){var t=i[e];$(t,m),$(t,h),$(t,g)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=(e.data,e.elements.smw),i=e.props.sourceMargin,s=e.stageIndexes,r=1-2*i;n.runActions=function(){innerWidth>992?e.mw=r*innerWidth:e.mw=innerWidth,e.mh=r*innerHeight;for(var n=0;n<o.length;n++)o[n].d(),t[n]&&t[n].adjustSize();var i=s.previous,a=s.next;void 0!==i&&o[i].ne(),void 0!==a&&o[a].p()}}(e)}function Q(e){var t=e.ap,n=(e.componentsServices,e.core),o=n.eventsDispatcher,s=n.globalEventsController,r=n.scrollbarRecompensor,c=n.sourceDisplayFacade,u=n.stageManager,p=n.windowResizeActioner,f=e.data,h=e.elements,g=(e.props,e.stageIndexes),b=e.sws,v=0;function x(){var t,n,s=e.props,r=s.autoplay,c=s.autoplays;v=!0,function(e){var t=e.props,n=t.autoplays;e.c=t.sources.length;for(var o=0;o<e.c;o++)"false"===n[o]&&(n[o]=0),""===n[o]&&(n[o]=1);e.dss=t.disableSlideSwiping,e.loc=t.loadOnlyCurrentSource}(e),f.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,n=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",n.style.width="100%",document.body.appendChild(e);var o=e.offsetWidth;e.appendChild(n);var i=n.offsetWidth;return document.body.removeChild(e),o-i}(),(r||c.length>0)&&(e.loc=1),K(e),e.fs.i(),h.container=document.createElement("div"),h.container.className="".concat(i,"container ").concat(a," ").concat(m),h.container.setAttribute("tabindex","0"),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(a," ").concat(d)}(e),j(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=e.props.sources,i=document.createElement("div");i.className="".concat(d," ").concat(a),n.container.appendChild(i),i.addEventListener("pointerdown",t.listener),n.sourceWrappersContainer=i;for(var s=0;s<o.length;s++)D(e,s)}(e),e.props.sources.length>1&&(n=(t=e).core.slideChangeFacade,X(t,n.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),X(t,n.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")),function(e){for(var t=e.props.sources,n=e.resolve,o=n(L),i=n(R),s=n(M,[o,i]),r=0;r<t.length;r++)if("string"==typeof t[r]){var a=s.getTypeSetByClientForIndex(r);if(a)i.runActionsForSourceTypeAndIndex(a,r);else{var c=o.getSourceTypeFromLocalStorageByUrl(t[r]);c?i.runActionsForSourceTypeAndIndex(c,r):s.retrieveTypeWithXhrForIndex(r)}}else i.runActionsForSourceTypeAndIndex("custom",r)}(e),o.dispatch("onInit")}e.open=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=g.previous,a=g.current,d=g.next;g.current=n,v||S(e),u.updateStageIndexes(),v?(b.c(),b.a(),b.b(i),b.b(a),b.b(d),o.dispatch("onShow")):x(),c.displaySourcesWhichShouldBeDisplayed(),e.sn(n+1),document.body.appendChild(h.container),h.container.focus(),document.documentElement.classList.add(l),r.addRecompense(),s.attachListeners(),p.runActions(),h.smw[n].n(),t.p(n),o.dispatch("onOpen")}}function Z(e,t,n){return(Z=ee()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&te(i,n.prototype),i}).apply(null,arguments)}function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function te(e,t){return(te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function ie(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].hasAttribute("data-href")?e[t].getAttribute("data-href"):e[t].getAttribute("href");if(!n)return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'),"continue";var o=e[t].getAttribute("data-fslightbox");fsLightboxInstances[o]||(fsLightboxInstances[o]=new FsLightbox);var i=null;"#"===n.charAt(0)?(i=document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id"):i=n,fsLightboxInstances[o].props.sources.push(i),fsLightboxInstances[o].elements.a.push(e[t]);var s=fsLightboxInstances[o].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[o].open(s)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class"),d("autoplays","data-autoplay");for(var r=["href","data-fslightbox","data-href","data-type","data-video-poster","data-class","data-custom-class","data-autoplay"],a=e[t].attributes,c=fsLightboxInstances[o].props.customAttributes,l=0;l<a.length;l++)if(-1===r.indexOf(a[l].name)&&"data-"===a[l].name.substr(0,5)){c[s]||(c[s]={});var u=a[l].name.substr(5);c[s][u]=a[l].value}function d(n,i){e[t].hasAttribute(i)&&(fsLightboxInstances[o].props[n][s]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],autoplays:[],types:[],videosPosters:[],exitFullscreenOnClose:1,sourceMargin:.05,slideDistance:.3},this.data={isFullscreenOpen:!1,scrollbarWidth:0},this.isl=[],this.sourcePointerProps={downScreenX:null,isPointering:!1,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,smw:[],sourceWrappersContainer:null,sources:[],sourceAnimationWrappers:[]},this.sn=function(){},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),Z(t,ne(n))},this.collections={sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},this.ap={},this.fs={},this.sws={},Q(this),this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},ie(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}ie()}}])}));

/***/ }),

/***/ "./node_modules/.pnpm/lite-youtube-embed@0.2.0/node_modules/lite-youtube-embed/src/lite-yt-embed.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lite-youtube-embed@0.2.0/node_modules/lite-youtube-embed/src/lite-yt-embed.js ***!
  \**********************************************************************************************************/
/***/ (() => {

/**
 * A lightweight youtube embed. Still should feel the same to the user, just MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these:
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube (👍👍)
 *   https://github.com/Daugilas/lazyYT
 *   https://github.com/vb/lazyframe
 */
class LiteYTEmbed extends HTMLElement {
    connectedCallback() {
        this.videoId = this.getAttribute('videoid');

        let playBtnEl = this.querySelector('.lty-playbtn');
        // A label for the button takes priority over a [playlabel] attribute on the custom-element
        this.playLabel = (playBtnEl && playBtnEl.textContent.trim()) || this.getAttribute('playlabel') || 'Play';

        /**
         * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)
         *
         * See https://github.com/paulirish/lite-youtube-embed/blob/master/youtube-thumbnail-urls.md
         *
         * TODO: Do the sddefault->hqdefault fallback
         *       - When doing this, apply referrerpolicy (https://github.com/ampproject/amphtml/pull/3940)
         * TODO: Consider using webp if supported, falling back to jpg
         */
        if (!this.style.backgroundImage) {
          this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
          // Warm the connection for the poster image
          LiteYTEmbed.addPrefetch('preload', this.posterUrl, 'image');

          this.style.backgroundImage = `url("${this.posterUrl}")`;
        }

        // Set up play button, and its visually hidden label
        if (!playBtnEl) {
            playBtnEl = document.createElement('button');
            playBtnEl.type = 'button';
            playBtnEl.classList.add('lty-playbtn');
            this.append(playBtnEl);
        }
        if (!playBtnEl.textContent) {
            const playBtnLabelEl = document.createElement('span');
            playBtnLabelEl.className = 'lyt-visually-hidden';
            playBtnLabelEl.textContent = this.playLabel;
            playBtnEl.append(playBtnLabelEl);
        }

        // On hover (or tap), warm up the TCP connections we're (likely) about to use.
        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {once: true});

        // Once the user clicks, add the real iframe and drop our play button
        // TODO: In the future we could be like amp-youtube and silently swap in the iframe during idle time
        //   We'd want to only do this for in-viewport or near-viewport ones: https://github.com/ampproject/amphtml/pull/5003
        this.addEventListener('click', e => this.addIframe());
    }

    // // TODO: Support the the user changing the [videoid] attribute
    // attributeChangedCallback() {
    // }

    /**
     * Add a <link rel={preload | preconnect} ...> to the head
     */
    static addPrefetch(kind, url, as) {
        const linkEl = document.createElement('link');
        linkEl.rel = kind;
        linkEl.href = url;
        if (as) {
            linkEl.as = as;
        }
        document.head.append(linkEl);
    }

    /**
     * Begin pre-connecting to warm up the iframe load
     * Since the embed's network requests load within its iframe,
     *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
     * So, the best we can do is warm up a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
     * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
     */
    static warmConnections() {
        if (LiteYTEmbed.preconnected) return;

        // The iframe document and most of its subresources come right off youtube.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
        // The botguard script is fetched off from google.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');

        // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');

        LiteYTEmbed.preconnected = true;
    }

    addIframe() {
        const params = new URLSearchParams(this.getAttribute('params') || []);
        params.append('autoplay', '1');

        const iframeEl = document.createElement('iframe');
        iframeEl.width = 560;
        iframeEl.height = 315;
        // No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
        iframeEl.title = this.playLabel;
        iframeEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframeEl.allowFullscreen = true;
        // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
        // https://stackoverflow.com/q/64959723/89484
        iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`;
        this.append(iframeEl);

        this.classList.add('lyt-activated');

        // Set focus for a11y
        this.querySelector('iframe').focus();
    }
}
// Register custom element
customElements.define('lite-youtube', LiteYTEmbed);


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/core/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/core/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_match_media_toggler_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/match-media-toggler/index */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/match-media-toggler/index.js");
/* harmony import */ var _modules_sliding_panels_navigation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/sliding-panels-navigation/index */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/sliding-panels-navigation/index.js");
/* harmony import */ var _modules_offcanvas_drawer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/offcanvas-drawer/index */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/offcanvas-drawer/index.js");



/**
 * Class for a lightweight mobile menu.
 */
var MmenuLight = /** @class */ (function () {
    /**
     * Create a lightweight mobile menu.
     *
     * @param {HTMLElement} menu                HTML element for the menu.
     * @param {string}      [mediaQuery='all']  Media queury to match for the menu.
     */
    function MmenuLight(menu, mediaQuery) {
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        //  Store the menu node.
        this.menu = menu;
        //  Create the toggler instance.
        this.toggler = new _modules_match_media_toggler_index__WEBPACK_IMPORTED_MODULE_0__["default"](mediaQuery);
    }
    /**
     * Add navigation for the menu.
     *
     * @param {object} options Options for the navigation.
     */
    MmenuLight.prototype.navigation = function (options) {
        var _this = this;
        //  Only needs to be done ones.
        if (!this.navigator) {
            options = options || {};
            var _a = options.title, title = _a === void 0 ? 'Menu' : _a, _b = options.selectedClass, selectedClass = _b === void 0 ? 'Selected' : _b, _c = options.slidingSubmenus, slidingSubmenus = _c === void 0 ? true : _c, _d = options.theme, theme = _d === void 0 ? 'light' : _d;
            this.navigator = new _modules_sliding_panels_navigation_index__WEBPACK_IMPORTED_MODULE_1__["default"](this.menu, title, selectedClass, slidingSubmenus, theme);
            //  En-/disable
            this.toggler.add(function () { return _this.menu.classList.add(_this.navigator.prefix); }, function () { return _this.menu.classList.remove(_this.navigator.prefix); });
        }
        return this.navigator;
    };
    /**
     * Add off-canvas behavior to the menu.
     *
     * @param {object} options Options for the off-canvas drawer.
     */
    MmenuLight.prototype.offcanvas = function (options) {
        var _this = this;
        //  Only needs to be done ones.
        if (!this.drawer) {
            options = options || {};
            var _a = options.position, position = _a === void 0 ? 'left' : _a;
            this.drawer = new _modules_offcanvas_drawer_index__WEBPACK_IMPORTED_MODULE_2__["default"](null, position);
            /** Original location in the DOM for the menu. */
            var orgLocation_1 = document.createComment('original menu location');
            this.menu.after(orgLocation_1);
            //  En-/disable
            this.toggler.add(function () {
                // Move the menu to the drawer.
                _this.drawer.content.append(_this.menu);
            }, function () {
                // Close the drawer.
                _this.drawer.close();
                // Move the menu to the original position.
                orgLocation_1.after(_this.menu);
            });
        }
        return this.drawer;
    };
    return MmenuLight;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MmenuLight);


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/helpers.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/helpers.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   r: () => (/* binding */ r)
/* harmony export */ });
/**
 * Convert a list to an array.
 *
 * @param 	{NodeList|HTMLCollection} list 	The list or collection to convert into an array.
 * @return	{array}							The array.
 */
var r = function (list) {
    return Array.prototype.slice.call(list);
};
/**
 * Find elements in the given context.
 *
 * @param 	{string}		selector			The query selector to search for.
 * @param 	{HTMLElement}	[context=document]	The context to search in.
 * @return	{HTMLElement[]}						The found list of elements.
 */
var $ = function (selector, context) {
    return r((context || document).querySelectorAll(selector));
};


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/match-media-toggler/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/match-media-toggler/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Class for a match media toggler.
 */
var MmToggler = /** @class */ (function () {
    /**
     * Create the match media.
     *
     * @param {string} mediaquery Media query to use.
     */
    function MmToggler(mediaquery) {
        var _this = this;
        this.listener = function (evnt) {
            (evnt.matches ? _this.matchFns : _this.unmatchFns).forEach(function (listener) {
                listener();
            });
        };
        this.toggler = window.matchMedia(mediaquery);
        this.toggler.addListener(this.listener);
        this.matchFns = [];
        this.unmatchFns = [];
    }
    /**
     * Add a function to the list,
     * also fires the added function.
     *
     * @param {Function} match      Function to fire when the media query matches.
     * @param {Function} unmatch    Function to fire when the media query does not match.
     */
    MmToggler.prototype.add = function (match, unmatch) {
        this.matchFns.push(match);
        this.unmatchFns.push(unmatch);
        (this.toggler.matches ? match : unmatch)();
    };
    return MmToggler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MmToggler);


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/offcanvas-drawer/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/offcanvas-drawer/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var prefix = 'mm-ocd';
/**
 * Class for off-canvas behavior.
 */
var MmOffCanvasDrawer = /** @class */ (function () {
    /**
     * Class for off-canvas drawer.
     *
     * @param {HTMLElement} [node]          The element to put in the drawer.
     * @param {String}      [position=left] The position of the drawer, can be "left" or "right".
     */
    function MmOffCanvasDrawer(node, position) {
        var _this = this;
        if (node === void 0) { node = null; }
        //  Create the wrapper.
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add("" + prefix);
        this.wrapper.classList.add(prefix + "--" + position);
        //  Create the drawer.
        this.content = document.createElement('div');
        this.content.classList.add(prefix + "__content");
        this.wrapper.append(this.content);
        //  Create the backdrop.
        this.backdrop = document.createElement('div');
        this.backdrop.classList.add(prefix + "__backdrop");
        this.wrapper.append(this.backdrop);
        //  Add the nodes to the <body>.
        document.body.append(this.wrapper);
        if (node) {
            this.content.append(node);
        }
        //  Click the backdrop.
        var close = function (evnt) {
            _this.close();
            evnt.stopImmediatePropagation();
        };
        this.backdrop.addEventListener('touchstart', close, { passive: true });
        this.backdrop.addEventListener('mousedown', close, { passive: true });
    }
    Object.defineProperty(MmOffCanvasDrawer.prototype, "prefix", {
        /** Prefix for the class. */
        get: function () {
            return prefix;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Open the drawer.
     */
    MmOffCanvasDrawer.prototype.open = function () {
        this.wrapper.classList.add(prefix + "--open");
        document.body.classList.add(prefix + "-opened");
    };
    /**
     * Close the drawer.
     */
    MmOffCanvasDrawer.prototype.close = function () {
        this.wrapper.classList.remove(prefix + "--open");
        document.body.classList.remove(prefix + "-opened");
    };
    return MmOffCanvasDrawer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MmOffCanvasDrawer);


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/sliding-panels-navigation/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/sliding-panels-navigation/index.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/modules/helpers.js");

var prefix = 'mm-spn';
/**
 * Class for navigating in a mobile menu.
 */
var MmSlidingPanelsNavigation = /** @class */ (function () {
    /**
     * Class for navigating in a mobile menu.
     *
     * @param {HTMLElement} node            HTMLElement for the menu.
     * @param {string}      title           The title for the menu.
     * @param {string}      selectedClass   The class for selected listitems.
     * @param {boolean}     slidingSubmenus Whether or not to use sliding submenus.
     * @param {string}      theme           The color scheme for the menu.
     */
    function MmSlidingPanelsNavigation(node, title, selectedClass, slidingSubmenus, theme) {
        this.node = node;
        this.title = title;
        this.slidingSubmenus = slidingSubmenus;
        this.selectedClass = selectedClass;
        //  Add classname.
        this.node.classList.add(prefix);
        this.node.classList.add(prefix + "--" + theme);
        this.node.classList.add(prefix + "--" + (this.slidingSubmenus ? 'navbar' : 'vertical'));
        this._setSelectedl();
        this._initAnchors();
    }
    Object.defineProperty(MmSlidingPanelsNavigation.prototype, "prefix", {
        /** Prefix for the class. */
        get: function () {
            return prefix;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Open the given panel.
     *
     * @param {HTMLElement} panel Panel to open.
     */
    MmSlidingPanelsNavigation.prototype.openPanel = function (panel) {
        /** Parent LI for the panel.  */
        var listitem = panel.parentElement;
        //  Sliding submenus
        if (this.slidingSubmenus) {
            /** Title above the panel to open. */
            var title_1 = panel.dataset.mmSpnTitle;
            //  Opening the main level UL.
            if (listitem === this.node) {
                this.node.classList.add(prefix + "--main");
            }
            //  Opening a sub level UL.
            else {
                this.node.classList.remove(prefix + "--main");
                //  Find title from parent LI.
                if (!title_1) {
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.r)(listitem.children).forEach(function (child) {
                        if (child.matches('a, span')) {
                            title_1 = child.textContent;
                        }
                    });
                }
            }
            //  Use the default title.
            if (!title_1) {
                title_1 = this.title;
            }
            //  Set the title.
            this.node.dataset.mmSpnTitle = title_1;
            //  Unset all panels from being opened and parent.
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$)("." + prefix + "--open", this.node).forEach(function (open) {
                open.classList.remove(prefix + "--open");
                open.classList.remove(prefix + "--parent");
            });
            //  Set the current panel as being opened.
            panel.classList.add(prefix + "--open");
            panel.classList.remove(prefix + "--parent");
            //  Set all parent panels as being parent.
            var parent_1 = panel.parentElement.closest('ul');
            while (parent_1) {
                parent_1.classList.add(prefix + "--open");
                parent_1.classList.add(prefix + "--parent");
                parent_1 = parent_1.parentElement.closest('ul');
            }
        }
        //  Vertical submenus
        else {
            /** Whether or not the panel is currently opened. */
            var isOpened = panel.matches("." + prefix + "--open");
            //  Unset all panels from being opened and parent.
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$)("." + prefix + "--open", this.node).forEach(function (open) {
                open.classList.remove(prefix + "--open");
            });
            //  Toggle the current panel.
            panel.classList[isOpened ? 'remove' : 'add'](prefix + "--open");
            //  Set all parent panels as being opened.
            var parent_2 = panel.parentElement.closest('ul');
            while (parent_2) {
                parent_2.classList.add(prefix + "--open");
                parent_2 = parent_2.parentElement.closest('ul');
            }
        }
    };
    /**
     * Initiate the selected listitem / open the current panel.
     */
    MmSlidingPanelsNavigation.prototype._setSelectedl = function () {
        /** All selected LIs. */
        var listitems = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$)('.' + this.selectedClass, this.node);
        /** The last selected LI. */
        var listitem = listitems[listitems.length - 1];
        /** The opened UL. */
        var panel = null;
        if (listitem) {
            panel = listitem.closest('ul');
        }
        if (!panel) {
            panel = this.node.querySelector('ul');
        }
        this.openPanel(panel);
    };
    /**
     * Initialize the click event handlers.
     */
    MmSlidingPanelsNavigation.prototype._initAnchors = function () {
        var _this = this;
        /**
         * Clicking an A in the menu: prevent bubbling up to the LI.
         *
         * @param   {HTMLElement}    target The clicked element.
         * @return  {boolean}       handled Whether or not the event was handled.
         */
        var clickAnchor = function (target) {
            if (target.matches('a')) {
                return true;
            }
            return false;
        };
        /**
         * Click a LI or SPAN in the menu: open its submenu (if present).
         *
         * @param   {HTMLElement}    target The clicked element.
         * @return  {boolean}               Whether or not the event was handled.
         */
        var openSubmenu = function (target) {
            /** Parent listitem for the submenu.  */
            var listitem;
            //  Find the parent listitem.
            if (target.closest('span')) {
                listitem = target.parentElement;
            }
            else if (target.closest('li')) {
                listitem = target;
            }
            else {
                listitem = false;
            }
            if (listitem) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.r)(listitem.children).forEach(function (panel) {
                    if (panel.matches('ul')) {
                        _this.openPanel(panel);
                    }
                });
                return true;
            }
            return false;
        };
        /**
         * Click the menu (the navbar): close the last opened submenu.
         *
         * @param   {HTMLElement}    target The clicked element.
         * @return  {boolean}               Whether or not the event was handled.
         */
        var closeSubmenu = function (target) {
            /** The opened ULs. */
            var panels = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$)("." + prefix + "--open", target);
            /** The last opened UL. */
            var panel = panels[panels.length - 1];
            if (panel) {
                /** The second to last opened UL. */
                var parent_3 = panel.parentElement.closest('ul');
                if (parent_3) {
                    _this.openPanel(parent_3);
                    return true;
                }
            }
            return false;
        };
        this.node.addEventListener('click', function (evnt) {
            var target = evnt.target;
            var handled = false;
            handled = handled || clickAnchor(target);
            handled = handled || openSubmenu(target);
            handled = handled || closeSubmenu(target);
            if (handled) {
                evnt.stopImmediatePropagation();
            }
        });
    };
    return MmSlidingPanelsNavigation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MmSlidingPanelsNavigation);


/***/ }),

/***/ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/src/mmenu-light.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/src/mmenu-light.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _esm_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/core/index */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/esm/core/index.js");
/*!
 * Mmenu Light
 * mmenujs.com/mmenu-light
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */

//	The module


//  Export module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_esm_core_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

//	Global namespace
window.MmenuLight = _esm_core_index__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/assets/js/base-page.js":
/*!************************************!*\
  !*** ./src/assets/js/base-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/assets/js/partials/image-zoom.js":
/*!**********************************************!*\
  !*** ./src/assets/js/partials/image-zoom.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zoom: () => (/* binding */ zoom)
/* harmony export */ });
/**
 * Create a magnifier glass for images zooming.
 *
 * @param imgID the id of the image to be zoomed
 * @param zoom the zoom strength
 * @returns void
 */
function zoom(imgID, zoom) {
  /*do not create magnifier glass if no image id is passed:*/
  if (!imgID) return;
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement('DIV');
  glass.setAttribute('class', 'img-magnifier-glass');
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener('touchmove', moveMagnifier);
  img.addEventListener('touchmove', moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /*set the position of the magnifier glass:*/
    glass.style.left = x - w + 'px';
    glass.style.top = y - h + 'px';
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/assets/js/product.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lite-youtube-embed */ "./node_modules/.pnpm/lite-youtube-embed@0.2.0/node_modules/lite-youtube-embed/src/lite-yt-embed.js");
/* harmony import */ var lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-page */ "./src/assets/js/base-page.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fslightbox */ "./node_modules/.pnpm/fslightbox@3.7.3/node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _partials_image_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/image-zoom */ "./src/assets/js/partials/image-zoom.js");





function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



window.fslightbox = (fslightbox__WEBPACK_IMPORTED_MODULE_7___default());

var Product = /*#__PURE__*/function (_BasePage) {
  function Product() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Product);
    return _callSuper(this, Product, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Product, _BasePage);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Product, [{
    key: "onReady",
    value: function onReady() {
      var _this = this;
      app.watchElements({
        totalPrice: '.total-price',
        productWeight: '.product-weight',
        beforePrice: '.before-price',
        startingPriceTitle: '.starting-price-title'
      });
      this.initProductOptionValidations();
      if (imageZoom) {
        // call the function when the page is ready
        this.initImagesZooming();
        // listen to screen resizing
        window.addEventListener('resize', function () {
          return _this.initImagesZooming();
        });
      }
    }
  }, {
    key: "initProductOptionValidations",
    value: function initProductOptionValidations() {
      var _document$querySelect;
      (_document$querySelect = document.querySelector('.product-form')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('change', function () {
        this.reportValidity() && salla.product.getPrice(new FormData(this));
      });
    }
  }, {
    key: "initImagesZooming",
    value: function initImagesZooming() {
      // skip if the screen is not desktop or if glass magnifier
      // is already crated for the image before
      var imageZoom = document.querySelector('.image-slider .magnify-wrapper.swiper-slide-active .img-magnifier-glass');
      if (window.innerWidth < 1024 || imageZoom) return;
      setTimeout(function () {
        // set delay after the resizing is done, start creating the glass
        // to create the glass in the proper position
        var image = document.querySelector('.image-slider .swiper-slide-active img');
        (0,_partials_image_zoom__WEBPACK_IMPORTED_MODULE_8__.zoom)(image === null || image === void 0 ? void 0 : image.id, 2);
      }, 250);
      document.querySelector('salla-slider.details-slider').addEventListener('slideChange', function (e) {
        // set delay till the active class is ready
        setTimeout(function () {
          var imageZoom = document.querySelector('.image-slider .swiper-slide-active .img-magnifier-glass');

          // if the zoom glass is already created skip
          if (window.innerWidth < 1024 || imageZoom) return;
          var image = document.querySelector('.image-slider .magnify-wrapper.swiper-slide-active img');
          (0,_partials_image_zoom__WEBPACK_IMPORTED_MODULE_8__.zoom)(image === null || image === void 0 ? void 0 : image.id, 2);
        }, 250);
      });
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      salla.event.on('product::price.updated.failed', function () {
        app.element('.price-wrapper').classList.add('hidden');
        app.element('.out-of-stock').classList.remove('hidden');
        app.anime('.out-of-stock', {
          scale: [0.88, 1]
        });
      });
      salla.product.event.onPriceUpdated(function (res) {
        var _app$startingPriceTit;
        app.element('.out-of-stock').classList.add('hidden');
        app.element('.price-wrapper').classList.remove('hidden');
        var data = res.data,
          is_on_sale = data.has_sale_price && data.regular_price > data.price;
        (_app$startingPriceTit = app.startingPriceTitle) === null || _app$startingPriceTit === void 0 || _app$startingPriceTit.classList.add('hidden');
        app.productWeight.forEach(function (el) {
          el.innerHTML = data.weight || '';
        });
        app.totalPrice.forEach(function (el) {
          el.innerHTML = salla.money(data.price);
        });
        app.beforePrice.forEach(function (el) {
          el.innerHTML = salla.money(data.regular_price);
        });
        app.toggleClassIf('.price_is_on_sale', 'showed', 'hidden', function () {
          return is_on_sale;
        });
        app.toggleClassIf('.starting-or-normal-price', 'hidden', 'showed', function () {
          return is_on_sale;
        });
        app.anime('.total-price, .product-weight', {
          scale: [0.88, 1]
        });
      });
      app.onClick('#btn-show-more', function (e) {
        return app.all('#more-content', function (div) {
          e.target.classList.add('is-expanded');
          div.style = "max-height:".concat(div.scrollHeight, "px");
        }) || e.target.remove();
      });
    }
  }]);
}(_base_page__WEBPACK_IMPORTED_MODULE_6__["default"]);
Product.initiateWhenReady(['product.single']);

// Accordion: toggle panels on click (accessible)
document.addEventListener('DOMContentLoaded', function () {
  var accRoot = document.querySelector('[data-accordion]');
  if (!accRoot) return;
  accRoot.querySelectorAll('.acc-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panelId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);

      // فتح/غلق مستقل (مش single-open)
      btn.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;

      // لو حابة "واحد فقط مفتوح في نفس الوقت" شغّلي السطور التالية:
      // if (!expanded) {
      //   accRoot.querySelectorAll('.acc-header').forEach(other => {
      //     if (other !== btn) {
      //       other.setAttribute('aria-expanded', 'false');
      //       const pid = other.getAttribute('aria-controls');
      //       const p = document.getElementById(pid);
      //       if (p) p.hidden = true;
      //     }
      //   });
      // }
    });
  });
});
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/assets/js/products.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-page */ "./src/assets/js/base-page.js");
/* harmony import */ var mmenu_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mmenu-light */ "./node_modules/.pnpm/mmenu-light@3.2.2/node_modules/mmenu-light/src/mmenu-light.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var Products = /*#__PURE__*/function (_BasePage) {
  function Products() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Products);
    return _callSuper(this, Products, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Products, _BasePage);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Products, [{
    key: "onReady",
    value: function onReady() {
      var productsList = app.element('salla-products-list'),
        urlParams = new URLSearchParams(window.location.search);

      // Set Sort
      if (urlParams.has('sort')) {
        app.element('#product-filter').value = urlParams.get('sort');
      }

      // Sort Products
      app.on('change', '#product-filter', /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(event) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                window.history.replaceState(null, null, salla.helpers.addParamToUrl('sort', event.currentTarget.value));
                productsList.sortBy = event.currentTarget.value;
                _context.next = 4;
                return productsList.reload();
              case 4:
                productsList.setAttribute('filters', "{\"sort\": \"".concat(event.currentTarget.value, "\"}"));
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      salla.event.once('salla-products-list::products.fetched', function (res) {
        res.title && (app.element('#page-main-title').innerHTML = res.title);
      });
      this.initiateMobileMenu();
    }
  }, {
    key: "initiateMobileMenu",
    value: function initiateMobileMenu() {
      var filters = app.element("#filters-menu"),
        trigger = app.element("a[href='#filters-menu']"),
        close = app.element("button.close-filters");
      if (!filters) {
        return;
      }
      filters = new mmenu_light__WEBPACK_IMPORTED_MODULE_8__["default"](filters, "(max-width: 1024px)", "( slidingSubmenus: false)");
      var drawer = filters.offcanvas({
        position: salla.config.get('theme.is_rtl') ? "right" : 'left'
      });
      trigger.addEventListener('click', function (event) {
        document.body.classList.add('filters-opened');
        event.preventDefault() || drawer.close() || drawer.open();
      });
      close.addEventListener('click', function (event) {
        document.body.classList.remove('filters-opened');
        event.preventDefault() || drawer.close();
      });
      salla.event.on('salla-filters::changed', function (filters) {
        if (!Object.entries(filters).length) {
          return;
        }
        document.body.classList.remove('filters-opened');
        drawer.close();
      });
    }
  }]);
}(_base_page__WEBPACK_IMPORTED_MODULE_7__["default"]);
Products.initiateWhenReady(['product.index', 'product.index.latest', 'product.index.offers', 'product.index.search', 'product.index.tag']);
})();

/******/ })()
;
//# sourceMappingURL=product.js.map