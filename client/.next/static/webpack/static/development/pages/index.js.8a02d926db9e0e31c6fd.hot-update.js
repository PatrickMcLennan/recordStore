webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nav_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Nav.styles */ "./components/styles/Nav.styles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/components/Nav.js";




var Nav = function Nav(_ref) {
  var user = _ref.user,
      changePage = _ref.changePage,
      page = _ref.page,
      logout = _ref.logout;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Nav_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "recordStore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "what are you listening to?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return logout();
    },
    current: page === 'splash' ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Sign Out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return changePage('account');
    },
    current: page === 'account' ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return changePage('store');
    },
    current: page === 'store' ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "My Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return changePage('add');
    },
    current: page === 'add' ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "+")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return changePage('splash');
    },
    current: page === 'splash' ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Sign In")));
};

Nav.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  logout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.8a02d926db9e0e31c6fd.hot-update.js.map