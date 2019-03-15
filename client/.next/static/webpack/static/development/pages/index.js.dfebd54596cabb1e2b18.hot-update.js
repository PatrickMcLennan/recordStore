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
        delay: '0',
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
        delay: '.2s',
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
        delay: '.4s',
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
        delay: '.6s',
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

/***/ }),

/***/ "./components/styles/Nav.styles.js":
/*!*****************************************!*\
  !*** ./components/styles/Nav.styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ "./components/styles/queries.js");


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: inline-block;\n      cursor: pointer;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-top: 1rem;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        width: 60%;\n        margin: .5vh 0 0 auto;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      text-align: right;\n      .closed {\n        transform: rotateY(90deg) translateY(100%);\n        opacity: 0;\n      }\n      .opened {\n        transform: rotateY(0) translateY(0);\n        opacity: 1;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      flex-direction: column;\n      position: absolute;\n      top: 100%;\n      right: 0;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navstyles__NavBar",
  componentId: "qlkqud-0"
})(["position:relative;grid-row-start:1;grid-row-end:2;border:1px solid red;height:100%;display:flex;justify-content:space-between;align-items:center;padding:0 2.5vw 2.5vh 2.5vw;div{text-align:center;h1,h2{font-weight:100;letter-spacing:0.3rem;}h1{font-size:5rem;&::after{content:'';display:block;height:1px;background:white;width:80%;margin:0.5vh auto;}}}ul{display:flex;", "}li{cursor:pointer;font-size:2rem;letter-spacing:0.25rem;padding:1rem 2rem;text-transform:uppercase;text-align:center;z-index:10;transition:all 0.2s ease-out;transition-delay:", ";transform-style:preserve-3d;", " &::after{content:'';display:block;height:1px;background:white;width:80%;margin:0.5vh auto 0 auto;transition:all 0.3s ease-in-out;transform:scale(", ");", "}&:not(:first-child){margin-left:3.5rem;", "}&:hover{&::after{transform:scale(1);}}}img{display:none;", "}"], _queries__WEBPACK_IMPORTED_MODULE_2__["default"].ten(_templateObject()), function (props) {
  return props.delay;
}, _queries__WEBPACK_IMPORTED_MODULE_2__["default"].ten(_templateObject2()), function (props) {
  return props.current;
}, _queries__WEBPACK_IMPORTED_MODULE_2__["default"].ten(_templateObject3()), _queries__WEBPACK_IMPORTED_MODULE_2__["default"].ten(_templateObject4()), _queries__WEBPACK_IMPORTED_MODULE_2__["default"].ten(_templateObject5()));
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.dfebd54596cabb1e2b18.hot-update.js.map