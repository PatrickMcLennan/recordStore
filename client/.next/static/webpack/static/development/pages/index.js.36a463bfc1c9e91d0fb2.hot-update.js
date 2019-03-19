webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SectionHeader */ "./components/SectionHeader.js");
/* harmony import */ var _styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/Store.styles */ "./components/styles/Store.styles.js");
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Record */ "./components/Record.js");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sort */ "./components/Sort.js");
/* harmony import */ var _styles_form_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/form.styles */ "./components/styles/form.styles.js");
/* harmony import */ var _styles_userProfile_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/userProfile.styles */ "./components/styles/userProfile.styles.js");
/* harmony import */ var _styles_UserBadge_styles_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/UserBadge.styles.js */ "./components/styles/UserBadge.styles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);










var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/components/Search.js";










var Search =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      search: '',
      sort: 'artist',
      searchedUser: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "changeSort", function () {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'artist';
      var records = _this.state.searchedUser.records;
      var sortedRecords = records.sort(function (a, b) {
        return a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1;
      });

      _this.setState({
        records: sortedRecords,
        sort: property
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (e) {
      var value = e.target.value;

      _this.setState({
        search: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var searchRecords, searchedUser;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searchRecords = _this.props.searchRecords;
                e.preventDefault();

                if (!(_this.state.search === '')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", null);

              case 4:
                _context.next = 6;
                return searchRecords(_this.state.search);

              case 6:
                searchedUser = _context.sent;
                Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(searchedUser) === Object ? _this.setState({
                  searchedUser: searchedUser
                }) : null;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Search, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          search = _this$state.search,
          searchedUser = _this$state.searchedUser;
      var records = searchedUser.records,
          name = searchedUser.name,
          email = searchedUser.email,
          picture = searchedUser.picture,
          bio = searchedUser.bio;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        first: records ? "".concat(name.first, "'s") || false : 'Find',
        last: "Store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Sort__WEBPACK_IMPORTED_MODULE_14__["default"], {
        changeSort: this.changeSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_form_styles__WEBPACK_IMPORTED_MODULE_15__["default"], {
        "data-testid": "search_form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        "data-testid": "search_input",
        type: "text",
        value: search,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "submit",
        value: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__["RecordGrid"], {
        "data-testid": "search_recordGrid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, email && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_userProfile_styles__WEBPACK_IMPORTED_MODULE_16__["default"], {
        "data-testid": "search_userProfile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_UserBadge_styles_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        src: picture ? picture : '../static/img/placeholder.png',
        alt: name.first ? name.first : 'User Picture',
        margin: "left",
        "data-testid": "search_badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("figcaption", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Name:", ' ', react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        "data-testid": "search_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, name.first, " ", name.last)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "About: ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        "data-testid": "search_bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, bio)))), records ? records.map(function (record) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Record__WEBPACK_IMPORTED_MODULE_13__["default"], {
          artist: record.artist,
          title: record.title,
          cover: record.cover,
          key: record.id,
          id: record.id,
          showGarbage: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        });
      }) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__["AddHeader"], {
        "data-testid": "search_addHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Search for stores by email")));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Search.propTypes = {
  searchRecords: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.36a463bfc1c9e91d0fb2.hot-update.js.map