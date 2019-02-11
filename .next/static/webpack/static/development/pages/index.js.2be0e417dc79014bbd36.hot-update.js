webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Prices.js":
/*!************************************!*\
  !*** ./pages/components/Prices.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\BARMAN\\Documents\\Codes\\bits-price\\pages\\components\\Prices.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prices =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prices, _React$Component);

  function Prices() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prices)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currency: 'USD'
    });

    return _this;
  }

  _createClass(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = '';

      if (this.state.currency === 'USD') {
        list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, "Bitcoin Rate for ", this.props.bpi.USD.description, ": ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, this.props.bpi.USD.code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "Bitcoin Rate for ", this.props.bpi.GBP.description, ": ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, this.props.bpi.GBP.code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "Bitcoin Rate for ", this.props.bpi.EUR.description, ": ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.bpi.EUR.code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, this.props.bpi.EUR.rate));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, list), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        valune: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        valune: "GPB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "GPB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        valune: "EUr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "EUr")));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\Prices")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2be0e417dc79014bbd36.hot-update.js.map