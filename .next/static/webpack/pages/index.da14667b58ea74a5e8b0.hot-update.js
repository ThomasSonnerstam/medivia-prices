webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\components\\Item.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Item = function Item(_ref) {
  var item = _ref.item;
  return __jsx("li", {
    style: {
      width: "200px",
      margin: "5px 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, item);
};

_c = Item;
/* harmony default export */ __webpack_exports__["default"] = (Item);

var _c;

$RefreshReg$(_c, "Item");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      city = _useState[0],
      setCity = _useState[1];

  var arak = [["Halberd", "400gp"], ["Brass armor", "150gp"], ["Morning star", "90gp"], ["Battle hammer", "120gp"], ["Plate armor", "400gp"], ["Steel shield", "80gp"], ["Battle shield", "95gp"]];
  var osaris = [["Double axe", "260gp"], ["Steel helmet", "293gp"]];
  var garrogat = [["Clerical mace", "170gp"], ["Crystal ball", "190gp"], ["Mind stone", "170gp"], ["Iron helmet", "150gp"], ["Viking shield", "85gp"]];
  var abukir = [["Bow", "130gp"], ["Crossbow", "160gp"]];
  var lucindel = [["Plate legs", "115gp"]];
  return __jsx("section", {
    style: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "100px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      marginBottom: "100px",
      display: "flex",
      justifyContent: "space-evenly"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("button", {
    style: {
      margin: "0 10px",
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("arak");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Arak"), __jsx("button", {
    style: {
      margin: "0 10px",
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("osaris");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Osaris"), __jsx("button", {
    style: {
      margin: "0 10px",
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("garrogat");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Garrogat"), __jsx("button", {
    style: {
      margin: "0 10px",
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("lucindel");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Lucindel"), __jsx("button", {
    style: {
      margin: "0 10px",
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("abukir");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Abukir")), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, city == "arak" && arak.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        fontSize: "24px",
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        fontSize: "24px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, item[1])), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, item[1])), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }));
  }), city == "garrogat" && garrogat.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, item[1])), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }));
  }), city == "abukir" && abukir.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, item[1])), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, item[1])), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }));
  })));
};

_s(App, "NjhooW53FpaNk4X2HDZYlDFe0P4=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiaXRlbSIsIndpZHRoIiwibWFyZ2luIiwiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJsaXN0U3R5bGUiLCJtYXAiLCJpIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3ZCLFNBQ0E7QUFBSSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFlBQU0sRUFBRTtBQUExQixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0RGLElBQWhELENBREE7QUFHRCxDQUpEOztLQUFNRCxJO0FBTVNBLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBSUEsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFJaEIsTUFBTUMsSUFBSSxHQUFHLENBQ1gsQ0FBQyxTQUFELEVBQVksT0FBWixDQURXLEVBRVgsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBRlcsRUFHWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FIVyxFQUlYLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUpXLEVBS1gsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBTFcsRUFNWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FOVyxFQU9YLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQVBXLENBQWI7QUFVQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLFlBQUQsRUFBZSxPQUFmLENBRGEsRUFFYixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGYSxDQUFmO0FBS0EsTUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBRGUsRUFFZixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGZSxFQUdmLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FIZSxFQUlmLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUplLEVBS2YsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBTGUsQ0FBakI7QUFRQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLEtBQUQsRUFBUSxPQUFSLENBRGEsRUFFYixDQUFDLFVBQUQsRUFBYSxPQUFiLENBRmEsQ0FBZjtBQUtBLE1BQU1DLFFBQVEsR0FBRyxDQUNmLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FEZSxDQUFqQjtBQUlBLFNBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUFgsV0FBSyxFQUFFLE9BRkE7QUFHUFksWUFBTSxFQUFFLE9BSEQ7QUFJUEMsZ0JBQVUsRUFBRSxRQUpMO0FBS1BDLG1CQUFhLEVBQUUsUUFMUjtBQU1QQyxlQUFTLEVBQUU7QUFOSixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFLE9BQWhCO0FBQXlCTCxhQUFPLEVBQUUsTUFBbEM7QUFBMENNLG9CQUFjLEVBQUU7QUFBMUQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxTQUFLLEVBQUU7QUFBRWhCLFlBQU0sRUFBRSxRQUFWO0FBQW9CRCxXQUFLLEVBQUUsT0FBM0I7QUFBb0NZLFlBQU0sRUFBRTtBQUE1QyxLQUFmO0FBQW9FLFdBQU8sRUFBRSxtQkFBTTtBQUFFUCxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQWdCLEtBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQVEsU0FBSyxFQUFFO0FBQUVKLFlBQU0sRUFBRSxRQUFWO0FBQW1CRCxXQUFLLEVBQUUsT0FBMUI7QUFBbUNZLFlBQU0sRUFBRTtBQUEzQyxLQUFmO0FBQW1FLFdBQU8sRUFBRSxtQkFBTTtBQUFFUCxhQUFPLENBQUMsUUFBRCxDQUFQO0FBQWtCLEtBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsU0FBSyxFQUFFO0FBQUVKLFlBQU0sRUFBRSxRQUFWO0FBQW1CRCxXQUFLLEVBQUUsT0FBMUI7QUFBbUNZLFlBQU0sRUFBRTtBQUEzQyxLQUFmO0FBQW1FLFdBQU8sRUFBRSxtQkFBTTtBQUFFUCxhQUFPLENBQUMsVUFBRCxDQUFQO0FBQW9CLEtBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsRUFJRTtBQUFRLFNBQUssRUFBRTtBQUFFSixZQUFNLEVBQUUsUUFBVjtBQUFtQkQsV0FBSyxFQUFFLE9BQTFCO0FBQW1DWSxZQUFNLEVBQUU7QUFBM0MsS0FBZjtBQUFtRSxXQUFPLEVBQUUsbUJBQU07QUFBRVAsYUFBTyxDQUFDLFVBQUQsQ0FBUDtBQUFvQixLQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBS0U7QUFBUSxTQUFLLEVBQUU7QUFBRUosWUFBTSxFQUFFLFFBQVY7QUFBbUJELFdBQUssRUFBRSxPQUExQjtBQUFtQ1ksWUFBTSxFQUFFO0FBQTNDLEtBQWY7QUFBbUUsV0FBTyxFQUFFLG1CQUFNO0FBQUVQLGFBQU8sQ0FBQyxRQUFELENBQVA7QUFBa0IsS0FBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLENBVEYsRUFpQkU7QUFBSSxTQUFLLEVBQUU7QUFBRWEsZUFBUyxFQUFFO0FBQWIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NkLElBQUksSUFBSSxNQUFSLElBQWtCRSxJQUFJLENBQUNhLEdBQUwsQ0FBUyxVQUFDcEIsSUFBRCxFQUFPcUIsQ0FBUCxFQUFhO0FBQ3ZDLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRVUsZ0JBQVEsRUFBRSxNQUFaO0FBQW9CckIsYUFBSyxFQUFFLE9BQTNCO0FBQW9DQyxjQUFNLEVBQUU7QUFBNUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtFRixJQUFJLENBQUMsQ0FBRCxDQUF0RSxDQURGLEVBRUU7QUFBSSxXQUFLLEVBQUU7QUFBRXNCLGdCQUFRLEVBQUUsTUFBWjtBQUFvQnBCLGNBQU0sRUFBRTtBQUE1QixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbURGLElBQUksQ0FBQyxDQUFELENBQXZELENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCWSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NVLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWGtCLENBRG5CLEVBY0NsQixJQUFJLElBQUksUUFBUixJQUFvQkcsTUFBTSxDQUFDWSxHQUFQLENBQVcsVUFBQ3BCLElBQUQsRUFBT3FCLENBQVAsRUFBYTtBQUMzQyxXQUNFLE1BQUMsOENBQUQ7QUFBVSxTQUFHLEVBQUVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVULGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVYLGFBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFNLEVBQUU7QUFBMUIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdERixJQUFJLENBQUMsQ0FBRCxDQUFwRCxDQURGLEVBRUU7QUFBSSxXQUFLLEVBQUU7QUFBRUUsY0FBTSxFQUFFO0FBQVYsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDRixJQUFJLENBQUMsQ0FBRCxDQUFyQyxDQUZGLENBREYsRUFNRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsTUFBVDtBQUFpQlksY0FBTSxFQUFFLEtBQXpCO0FBQWdDVSx1QkFBZSxFQUFFO0FBQWpELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBREY7QUFVRCxHQVhvQixDQWRyQixFQTJCQ2xCLElBQUksSUFBSSxVQUFSLElBQXNCSSxRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFDcEIsSUFBRCxFQUFPcUIsQ0FBUCxFQUFhO0FBQy9DLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRVgsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RGLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCWSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NVLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWHNCLENBM0J2QixFQXdDQ2xCLElBQUksSUFBSSxRQUFSLElBQW9CSyxNQUFNLENBQUNVLEdBQVAsQ0FBVyxVQUFDcEIsSUFBRCxFQUFPcUIsQ0FBUCxFQUFhO0FBQzNDLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRVgsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RGLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCWSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NVLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWG9CLENBeENyQixFQXFEQ2xCLElBQUksSUFBSSxVQUFSLElBQXNCTSxRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDcEIsSUFBRCxFQUFPcUIsQ0FBUCxFQUFhO0FBQy9DLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRVgsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RGLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCWSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NVLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWHNCLENBckR2QixDQWpCRixDQURGO0FBc0ZELENBMUhEOztHQUFNcEIsRzs7S0FBQUEsRztBQTRIU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGExNDY2N2I1OGVhNzRhNWU4YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEl0ZW0gPSAoe2l0ZW19KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICA8bGkgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luOiBcIjVweCAwXCJ9fT57aXRlbX08L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTsiLCJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFyYWsgPSBbXHJcbiAgICBbXCJIYWxiZXJkXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJCcmFzcyBhcm1vclwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiTW9ybmluZyBzdGFyXCIsIFwiOTBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBoYW1tZXJcIiwgXCIxMjBncFwiXSxcclxuICAgIFtcIlBsYXRlIGFybW9yXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBzaGllbGRcIiwgXCI4MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIHNoaWVsZFwiLCBcIjk1Z3BcIl0gXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgb3NhcmlzID0gW1xyXG4gICAgW1wiRG91YmxlIGF4ZVwiLCBcIjI2MGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgaGVsbWV0XCIsIFwiMjkzZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBnYXJyb2dhdCA9IFtcclxuICAgIFtcIkNsZXJpY2FsIG1hY2VcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIkNyeXN0YWwgYmFsbFwiLCBcIjE5MGdwXCJdLFxyXG4gICAgW1wiTWluZCBzdG9uZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiSXJvbiBoZWxtZXRcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIlZpa2luZyBzaGllbGRcIiwgXCI4NWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYWJ1a2lyID0gW1xyXG4gICAgW1wiQm93XCIsIFwiMTMwZ3BcIl0sXHJcbiAgICBbXCJDcm9zc2Jvd1wiLCBcIjE2MGdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbHVjaW5kZWwgPSBbXHJcbiAgICBbXCJQbGF0ZSBsZWdzXCIsIFwiMTE1Z3BcIl1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCJcclxuICAgIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMDBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCJ9fT5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiwgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImFyYWtcIil9fT5BcmFrPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcIm9zYXJpc1wiKX19Pk9zYXJpczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJnYXJyb2dhdFwiKX19PkdhcnJvZ2F0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImx1Y2luZGVsXCIpfX0+THVjaW5kZWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYWJ1a2lyXCIpfX0+QWJ1a2lyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCJ9fT5cclxuICAgICAge2NpdHkgPT0gXCJhcmFrXCIgJiYgYXJhay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiLCBtYXJnaW46IFwiNXB4IDBcIiB9fT57aXRlbVsxXX08L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwib3NhcmlzXCIgJiYgb3NhcmlzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImdhcnJvZ2F0XCIgJiYgZ2Fycm9nYXQubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luOiBcIjVweCAwXCJ9fT57aXRlbVswXX08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW46IFwiNXB4IDBcIiB9fT57aXRlbVsxXX08L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwiYWJ1a2lyXCIgJiYgYWJ1a2lyLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImx1Y2luZGVsXCIgJiYgbHVjaW5kZWwubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luOiBcIjVweCAwXCJ9fT57aXRlbVswXX08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW46IFwiNXB4IDBcIiB9fT57aXRlbVsxXX08L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9