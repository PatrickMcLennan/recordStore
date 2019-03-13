webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/SVG.styles.js":
/*!*****************************************!*\
  !*** ./components/styles/SVG.styles.js ***!
  \*****************************************/
/*! exports provided: Vinyl, VinylError, VinylSuccess, Garbage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vinyl", function() { return Vinyl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylError", function() { return VinylError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylSuccess", function() { return VinylSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garbage", function() { return Garbage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var showMsg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{right:-5vh;}10%{right:5vh;}90%{right:5vh;}100%{right:-5vh}"]);
var Vinyl = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "SVGstyles__Vinyl",
  componentId: "l14jxn-0"
})(["", " stroke:", ";fill:rgba(255,255,255,0.25);height:10rem;margin-bottom:5vh;animation:", " 10s linear infinite;z-index:10;"], function (_ref) {
  var flexin = _ref.theme.flexin;
  return flexin();
}, function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.whitePrimary;
}, rotate);
var VinylError = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Vinyl).withConfig({
  displayName: "SVGstyles__VinylError",
  componentId: "l14jxn-1"
})(["stroke:red;fill:red;position:fixed;bottom:0;right:5vh;animation:", " 2s ease-in-out,", " 10s linear infinite;"], showMsg, rotate);
var VinylSuccess = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Vinyl).withConfig({
  displayName: "SVGstyles__VinylSuccess",
  componentId: "l14jxn-2"
})(["stroke:green;fill:green;position:fixed;bottom:0;right:5vh;animation:", " 2s ease-in-out,", " 10s linear infinite;"], showMsg, rotate);
var Garbage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "SVGstyles__Garbage",
  componentId: "l14jxn-3"
})(["stroke:", ";height:25px;width:25px;transform-origin:bottom-right;position:absolute;bottom:1rem;right:1rem;"], function (_ref3) {
  var colors = _ref3.theme.colors;
  return colors.whitePrimary;
});

/***/ })

})
//# sourceMappingURL=index.js.98c08a0593d312c7051a.hot-update.js.map