webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _components_styles_index_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/styles/index.styles */ "./components/styles/index.styles.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Splash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Splash */ "./components/Splash.js");
/* harmony import */ var _components_Store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Store */ "./components/Store.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");
/* harmony import */ var _components_AddRecord__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AddRecord */ "./components/AddRecord.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_VinylSVG__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../components/VinylSVG */ "./components/VinylSVG.js");









var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/pages/index.js";













var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      user: {},
      page: 'splash',
      loading: false,
      error: false,
      success: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "loaded", function () {
      _this.setState({
        loading: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "logout", function () {
      Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbLogout"])();

      _this.setState({
        user: {},
        page: 'splash',
        loading: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "showMessage", function (response) {
      response === 'error' ? _this.setState({
        error: true
      }) : _this.setState({
        success: true
      });
      setTimeout(function () {
        return _this.setState({
          loading: false,
          error: false,
          success: false
        });
      }, 1500);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changePage", function (nextPage) {
      var page = _this.state.page;
      page === nextPage ? page : _this.setState({
        page: nextPage
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getUser",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var email, password, register, attempt, call;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password, register = _ref.register;

                _this.setState({
                  loading: true
                });

                attempt = {
                  email: email,
                  password: password
                };
                _context.next = 5;
                return register ? Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbRegister"])(attempt) : Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbLogin"])(attempt);

              case 5:
                call = _context.sent;
                call.email ? _this.showMessage('success') : _this.showMessage('error');

                _this.setState({
                  user: call
                });

                _this.changePage('store');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "editUser",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {
        var editedUser;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbAccountEditor"])(user);

              case 2:
                editedUser = _context2.sent;

                _this.setState({
                  user: editedUser
                });

                _this.showMessage('success');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createRecord",
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(record) {
        var records, newRecord;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                records = _this.state.user.records;
                _context3.next = 3;
                return Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbCreateRecord"])(record);

              case 3:
                newRecord = _context3.sent;
                records.push(newRecord);

                _this.editUser(_this.state.user);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteRecord",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var email, user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                email = _this.state.user.email;
                _context4.next = 3;
                return Object(_firebase__WEBPACK_IMPORTED_MODULE_11__["dbDeleteRecord"])(id, email);

              case 3:
                user = _context4.sent;

                _this.editUser(user);

                return _context4.abrupt("return", user);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderPage", function (page) {
      var user = _this.state.user;

      if (page === 'splash') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Splash__WEBPACK_IMPORTED_MODULE_15__["default"], {
          getUser: _this.getUser,
          loaded: _this.loaded,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        });
      } else if (page === 'store') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Store__WEBPACK_IMPORTED_MODULE_16__["default"], {
          page: page,
          loaded: _this.loaded,
          user: user,
          changePage: _this.changePage,
          deleteRecord: _this.deleteRecord,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        });
      } else if (page === 'account') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Account__WEBPACK_IMPORTED_MODULE_17__["default"], {
          page: page,
          user: user,
          changePage: _this.changePage,
          editUser: _this.editUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        });
      } else if (page === 'add') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AddRecord__WEBPACK_IMPORTED_MODULE_18__["default"], {
          page: page,
          user: user,
          changePage: _this.changePage,
          createRecord: _this.createRecord,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          page = _this$state.page,
          user = _this$state.user,
          loading = _this$state.loading,
          error = _this$state.error,
          success = _this$state.success;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_styles_index_styles__WEBPACK_IMPORTED_MODULE_12__["GlobalStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_14__["default"], {
        user: user.email ? user : null,
        changePage: this.changePage,
        logout: this.logout,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: _components_styles_index_styles__WEBPACK_IMPORTED_MODULE_12__["theme"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_styles_index_styles__WEBPACK_IMPORTED_MODULE_12__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, this.renderPage(page), error && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_VinylSVG__WEBPACK_IMPORTED_MODULE_20__["VinylErrorSVG"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), success && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_VinylSVG__WEBPACK_IMPORTED_MODULE_20__["VinylSuccessSVG"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4fb53947c4d83ddb2198.hot-update.js.map