webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Record.js":
/*!******************************!*\
  !*** ./components/Record.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Record_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Record.styles */ "./components/styles/Record.styles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SVGs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGs */ "./components/SVGs.js");
var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/components/Record.js";





var Record = function Record(_ref) {
  var cover = _ref.cover,
      title = _ref.title,
      artist = _ref.artist,
      updateStore = _ref.updateStore,
      id = _ref.id,
      showGarbage = _ref.showGarbage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Record_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-testid": "record",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-testid": "record_img",
    src: cover,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-testid": "record_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-testid": "record_artist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, artist), showGarbage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SVGs__WEBPACK_IMPORTED_MODULE_3__["GarbageSVG"], {
    "data-testid": "record_garbage",
    updateStore: updateStore,
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

Record.propTypes = {
  cover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  artist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  updateStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Record);

/***/ })

})
//# sourceMappingURL=index.js.03c756379684f8262e9e.hot-update.js.map