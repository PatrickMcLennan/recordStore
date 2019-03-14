webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Store.js":
/*!*****************************!*\
  !*** ./components/Store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "/Users/patrickmclennan/Documents/record_store/client/components/Store.js";







var Store =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Store, _Component);

  function Store() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Store);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Store)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.props.user, {
      sort: 'artist'
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "changeSort", function () {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'artist';
      var records = _this.state.records;
      var sortedRecords = records.sort(function (a, b) {
        return a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1;
      });

      _this.setState({
        records: sortedRecords,
        sort: property
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "updateStore",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var deleteRecord, user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deleteRecord = _this.props.deleteRecord;
                _context.next = 3;
                return deleteRecord(id);

              case 3:
                user = _context.sent;

                _this.setState({
                  records: user.records
                });

              case 5:
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Store, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          page = _this$props.page,
          loaded = _this$props.loaded;
      if (page === 'store') return loaded();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var records = this.state.records;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__["StoreSection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        first: "My",
        last: "Store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Sort__WEBPACK_IMPORTED_MODULE_14__["default"], {
        changeSort: this.changeSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__["RecordGrid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, records.length >= 1 ? records.map(function (record) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Record__WEBPACK_IMPORTED_MODULE_13__["default"], {
          artist: record.artist,
          title: record.title,
          cover: record.cover,
          key: record.id,
          id: record.id,
          updateStore: _this2.updateStore,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      }) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Store_styles__WEBPACK_IMPORTED_MODULE_12__["AddHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Get Started by adding some records!")));
    }
  }]);

  return Store;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Store.propTypes = {
  page: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired,
  deleteRecord: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ })

})
//# sourceMappingURL=index.js.089a32d1caa11b867c18.hot-update.js.map