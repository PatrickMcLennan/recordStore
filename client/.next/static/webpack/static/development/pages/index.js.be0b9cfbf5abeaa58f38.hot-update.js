webpackHotUpdate("static/development/pages/index.js",{

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: dbLogin, dbRegister, dbLogout, dbAccountEditor, dbCreateRecord, dbDeleteRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbLogin", function() { return dbLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbRegister", function() { return dbRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbLogout", function() { return dbLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbAccountEditor", function() { return dbAccountEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbCreateRecord", function() { return dbCreateRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbDeleteRecord", function() { return dbDeleteRecord; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);



// https://recordstore-ea36f.firebaseapp.com/__/auth/handler




var config = {
  apiKey: 'AIzaSyC9YAyaVt0s2hijgBLgr7wjm_m71khO9_A',
  authDomain: 'recordstore-ea36f.firebaseapp.com',
  databaseURL: 'https://recordstore-ea36f.firebaseio.com',
  projectId: 'recordstore-ea36f',
  storageBucket: 'recordstore-ea36f.appspot.com',
  messagingSenderId: '894584361248'
};
var app = !firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(config) : firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.app();
var db = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore();
var users = db.collection('users');
var records = db.collection('records');

var dbQuery =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(collection, query) {
    var item;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return collection.doc(query).get().then(function (jackpot) {
              return jackpot.data();
            });

          case 2:
            item = _context.sent;
            return _context.abrupt("return", item);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dbQuery(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var dbLogin =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var email, password;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref2.email, password = _ref2.password;
            _context2.next = 3;
            return app.auth().signInWithEmailAndPassword(email, password);

          case 3:
            _context2.next = 5;
            return dbQuery(users, email);

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dbLogin(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var dbRegister =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref4) {
    var email, password;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = _ref4.email, password = _ref4.password;
            _context3.next = 3;
            return app.auth().createUserWithEmailAndPassword(email, password).then(function (cred) {
              users.doc(email).set({
                id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
                name: {
                  first: '',
                  last: ''
                },
                email: email,
                picture: '',
                bio: '',
                records: []
              });
            });

          case 3:
            _context3.next = 5;
            return dbQuery(users, email);

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dbRegister(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var dbLogout =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            app.auth().signOut();

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function dbLogout() {
    return _ref6.apply(this, arguments);
  };
}();
var dbAccountEditor =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(user) {
    var email;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            email = user.email;
            _context5.next = 3;
            return users.doc(email).set(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user));

          case 3:
            _context5.next = 5;
            return dbQuery(users, email);

          case 5:
            return _context5.abrupt("return", _context5.sent);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function dbAccountEditor(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var dbCreateRecord =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(record) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return records.doc(record.title).set(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, record, {
              id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4()
            }));

          case 2:
            _context6.next = 4;
            return dbQuery(records, record.title);

          case 4:
            return _context6.abrupt("return", _context6.sent);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function dbCreateRecord(_x6) {
    return _ref8.apply(this, arguments);
  };
}();
var dbDeleteRecord =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(id, email) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return users.doc(email).set({
              records: records.filter(function (record) {
                return record.id !== id;
              })
            });

          case 2:
            _context7.next = 4;
            return dbQuery(users, email);

          case 4:
            return _context7.abrupt("return", _context7.sent);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function dbDeleteRecord(_x7, _x8) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.be0b9cfbf5abeaa58f38.hot-update.js.map