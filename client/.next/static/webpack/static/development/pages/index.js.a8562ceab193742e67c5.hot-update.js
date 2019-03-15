webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Nav_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Nav.styles */ "./components/styles/Nav.styles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_UserBadge_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/UserBadge.styles */ "./components/styles/UserBadge.styles.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");







var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/components/Nav.js";






var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      open: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          page = _this$props.page,
          logout = _this$props.logout,
          changePage = _this$props.changePage;
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_Nav_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "recordStore"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "what are you listening to?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, user ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: open ? 'opened' : 'closed',
        delay: "0s",
        onClick: function onClick() {
          return logout();
        },
        current: page === 'splash' ? '1' : '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Sign Out"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: open ? 'opened' : 'closed',
        delay: "0.5s",
        onClick: function onClick() {
          return changePage('account');
        },
        current: page === 'account' ? '1' : '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: open ? 'opened' : 'closed',
        delay: "1s",
        onClick: function onClick() {
          return changePage('store');
        },
        current: page === 'store' ? '1' : '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "My Store"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: open ? 'opened' : 'closed',
        delay: "1.5s",
        onClick: function onClick() {
          return changePage('add');
        },
        current: page === 'add' ? '1' : '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "+")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick() {
          return changePage('splash');
        },
        current: page === 'splash' ? '1' : '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Sign In")), user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_UserBadge_styles__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: user.picture,
        alt: user.name.first,
        margin: "right",
        onClick: function onClick() {
          return _this2.setState({
            open: !open
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), open && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: function onClick() {
          return _this2.setState({
            open: !open
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Nav.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  logout: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.a8562ceab193742e67c5.hot-update.js.map