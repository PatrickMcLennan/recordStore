webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/SVG.styles.js":
/*!*****************************************!*\
  !*** ./components/styles/SVG.styles.js ***!
  \*****************************************/
/*! exports provided: Vinyl, VinylError, VinylSuccess, Garbage, GitHub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vinyl", function() { return Vinyl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylError", function() { return VinylError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylSuccess", function() { return VinylSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garbage", function() { return Garbage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHub", function() { return GitHub; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var showMsg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;right:-5vh;}10%{opacity:1;right:5vh;}90%{opacity:1;right:5vh;}100%{opacity:0;right:-5vh;}"]);
var Vinyl = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "SVGstyles__Vinyl",
  componentId: "l14jxn-0"
})(["stroke:", ";fill:rgba(255,255,255,0.25);height:10rem;margin-bottom:5vh;animation:", " 10s linear infinite;z-index:10;"], function (_ref) {
  var colors = _ref.theme.colors;
  return colors.whitePrimary;
}, rotate);
var VinylMsg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Vinyl).withConfig({
  displayName: "SVGstyles__VinylMsg",
  componentId: "l14jxn-1"
})(["position:fixed;bottom:0;right:5vh;animation:", " 2s ease-in-out 0,", " 10s linear infinite;"], showMsg, rotate);
var VinylError = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(VinylMsg).withConfig({
  displayName: "SVGstyles__VinylError",
  componentId: "l14jxn-2"
})(["stroke:red;fill:rgba(255,255,255,0.25);"]);
var VinylSuccess = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(VinylMsg).withConfig({
  displayName: "SVGstyles__VinylSuccess",
  componentId: "l14jxn-3"
})(["stroke:green;fill:rgba(255,255,255,0.25);"]);
var Garbage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "SVGstyles__Garbage",
  componentId: "l14jxn-4"
})(["stroke:", ";cursor:pointer;height:25px;width:25px;transform-origin:bottom-right;position:absolute;bottom:1rem;right:1rem;"], function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.whitePrimary;
});
var GitHub = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "SVGstyles__GitHub",
  componentId: "l14jxn-5"
})(["stroke:", ";fill:rgba(255,255,255,0.75);background:purple;"], function (_ref3) {
  var colors = _ref3.theme.colors;
  return colors.whitePrimary;
});

/***/ })

})
//# sourceMappingURL=index.js.5dd9ad9cbcc4d54247f2.hot-update.js.map