webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/Sort.styles.js":
/*!******************************************!*\
  !*** ./components/styles/Sort.styles.js ***!
  \******************************************/
/*! exports provided: SortList, AddHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortList", function() { return SortList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeader", function() { return AddHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SortList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "Sortstyles__SortList",
  componentId: "sc-1wer6fv-0"
})(["text-align:center;align-self:flex-end;position:relative;", " li{font-size:2rem;line-height:1.25;text-transform:uppercase;cursor:pointer;border:1px solid white;padding:1rem 2rem;margin-bottom:1rem;", " ", " &:first-of-type{", "}&:nth-of-type(2),&:nth-of-type(3){position:absolute;top:-100%;}&:nth-of-type(2){right:50%;}&:nth-of-type(3){left:50%;}&:hover,&:active{", "}}"], function (_ref) {
  var flexin = _ref.theme.flexin;
  return flexin('space-around');
}, function (_ref2) {
  var typo = _ref2.theme.typo;
  return typo.letterSpacingPrimary;
}, function (_ref3) {
  var transforms = _ref3.theme.transforms;
  return transforms.whiteFill.rest;
}, function (props) {
  return props.show ? function (_ref4) {
    var transforms = _ref4.theme.transforms;
    return transforms.whiteFill.active;
  } : function (_ref5) {
    var transforms = _ref5.theme.transforms;
    return transforms.whiteFill.rest;
  };
}, function (_ref6) {
  var transforms = _ref6.theme.transforms;
  return transforms.whiteFill.active;
});
var AddHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h6.withConfig({
  displayName: "Sortstyles__AddHeader",
  componentId: "sc-1wer6fv-1"
})(["", ""], function (_ref7) {
  var typo = _ref7.theme.typo;
  return typo.letterSpacingPrimary;
});

/***/ })

})
//# sourceMappingURL=index.js.eb3cbdb53ee44a70c78e.hot-update.js.map