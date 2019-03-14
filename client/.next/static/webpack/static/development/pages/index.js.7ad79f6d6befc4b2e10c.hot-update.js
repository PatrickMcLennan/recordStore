webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/index.styles.js":
/*!*******************************************!*\
  !*** ./components/styles/index.styles.js ***!
  \*******************************************/
/*! exports provided: GlobalStyle, theme, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ "./components/styles/queries.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  font-family: 'Lato';\n  max-width: 100vw;\n}\n::selection {\n  background-color: white;\n  color: white;\n}\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  ", "\n}\nbody {\n  display: grid;\n  grid-template-rows: 15vh 75vh;\n  background-image: linear-gradient(to right bottom, rgba(0,0,0,.75), rgba(0,0,0,.75)), url('./static/img/background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n  background-attachment: fixed;\n  color: white;\n}\na,\na:visited {\n  text-decoration: none;\n  color: currentColor\n}\nul {\n  list-style-type: none;\n}\nbutton {\n  background: none;\n  font-family: inherit;\n  color: currentColor;\n  border: none;\n  cursor: pointer;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _queries__WEBPACK_IMPORTED_MODULE_2__["default"].seven(_templateObject2()));
var theme = {
  colors: {
    whitePrimary: 'rgba(255,255,255,1)',
    whiteOpaque: 'rgba(255,255,255,.75)',
    blackPrimary: "rgba(0,0,0,1)"
  },
  flexin: function flexin() {
    var jc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center';
    var ai = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';
    var fd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'row';
    return "display: flex; justify-content: ".concat(jc, "; align-items: ").concat(ai, "; flex-direction: ").concat(fd, ";");
  },
  transitions: {
    main: "transition: all 0.4s ease-in-out;"
  },
  transforms: {
    whiteFill: {
      rest: "\n      background-image: linear-gradient(\n        to right,\n        rgba(0, 0, 0, 0) 50%,\n        rgba(255, 255, 255, 1) 51%\n      );\n      background-size: 225%;\n      background-position: left;\n      transition: all 0.3s ease-in-out;",
      active: "background-position: right; color: black;"
    }
  },
  typo: {
    letterSpacingPrimary: "letter-spacing: .35rem;",
    letterSpacingSecondary: "letter-spacing: .175rem;"
  }
};
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "indexstyles__Content",
  componentId: "sc-1bo0aki-0"
})(["grid-row-start:2;grid-row-end:-1;align-self:center;padding:0 2vw;"]);

/***/ })

})
//# sourceMappingURL=index.js.7ad79f6d6befc4b2e10c.hot-update.js.map