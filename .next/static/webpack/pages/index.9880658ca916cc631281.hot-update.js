webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      city = _useState[0],
      setCity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("lucindel"),
      initialCity = _useState2[0],
      setInitialCity = _useState2[1];

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
      lineNumber: 45,
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
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setInitialCity("arak");
    },
    city: "Arak",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("osaris");
    },
    city: "Osaris",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("garrogat");
    },
    city: "Garrogat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("lucindel");
    },
    city: "Lucindel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("abukir");
    },
    city: "Abukir",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, city == {
    initialCity: initialCity
  } && initialCity.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    })), __jsx("div", {
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
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }));
  }), city == "abukir" && abukir.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }));
  })));
};

_s(App, "Tm5VFBazbFS9sglpEOIaPOKWQE8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImluaXRpYWxDaXR5Iiwic2V0SW5pdGlhbENpdHkiLCJhcmFrIiwib3NhcmlzIiwiZ2Fycm9nYXQiLCJhYnVraXIiLCJsdWNpbmRlbCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJsaXN0U3R5bGUiLCJtYXAiLCJpdGVtIiwiaSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBQUEsbUJBR3NCRixzREFBUSxDQUFDLFVBQUQsQ0FIOUI7QUFBQSxNQUdURyxXQUhTO0FBQUEsTUFHSUMsY0FISjs7QUFLaEIsTUFBTUMsSUFBSSxHQUFHLENBQ1gsQ0FBQyxTQUFELEVBQVksT0FBWixDQURXLEVBRVgsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBRlcsRUFHWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FIVyxFQUlYLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUpXLEVBS1gsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBTFcsRUFNWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FOVyxFQU9YLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQVBXLENBQWI7QUFVQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLFlBQUQsRUFBZSxPQUFmLENBRGEsRUFFYixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGYSxDQUFmO0FBS0EsTUFB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QTtBQUFBLE1BRkYsQ0FERixFQUtFO0FBQUssV0FBSyxFQUFFO0FBQUVULGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsS0FBekI7QUFBZ0NVLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNELEdBVm9CLENBckNyQixFQWlEQ3JCLElBQUksSUFBSSxVQUFSLElBQXNCUSxRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMvQyxXQUNFLE1BQUMsOENBQUQ7QUFBVSxTQUFHLEVBQUVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVYLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBTSxVQUFJLEVBQUVVLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBTSxXQUFLLEVBQUVBLElBQUksQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGLEVBS0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRSxLQUF6QjtBQUFnQ1UsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGO0FBU0QsR0FWc0IsQ0FqRHZCLENBakJGLENBREY7QUFpRkQsQ0F0SEQ7O0dBQU12QixHOztLQUFBQSxHO0FBd0hTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODgwNjU4Y2E5MTZjYzYzMTI4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSXRlbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbml0aWFsQ2l0eSwgc2V0SW5pdGlhbENpdHldID0gdXNlU3RhdGUoXCJsdWNpbmRlbFwiKTtcclxuXHJcbiAgY29uc3QgYXJhayA9IFtcclxuICAgIFtcIkhhbGJlcmRcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIkJyYXNzIGFybW9yXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJNb3JuaW5nIHN0YXJcIiwgXCI5MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIGhhbW1lclwiLCBcIjEyMGdwXCJdLFxyXG4gICAgW1wiUGxhdGUgYXJtb3JcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIlN0ZWVsIHNoaWVsZFwiLCBcIjgwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgc2hpZWxkXCIsIFwiOTVncFwiXSBcclxuICBdO1xyXG5cclxuICBjb25zdCBvc2FyaXMgPSBbXHJcbiAgICBbXCJEb3VibGUgYXhlXCIsIFwiMjYwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBoZWxtZXRcIiwgXCIyOTNncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdhcnJvZ2F0ID0gW1xyXG4gICAgW1wiQ2xlcmljYWwgbWFjZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiQ3J5c3RhbCBiYWxsXCIsIFwiMTkwZ3BcIl0sXHJcbiAgICBbXCJNaW5kIHN0b25lXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJJcm9uIGhlbG1ldFwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiVmlraW5nIHNoaWVsZFwiLCBcIjg1Z3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBhYnVraXIgPSBbXHJcbiAgICBbXCJCb3dcIiwgXCIxMzBncFwiXSxcclxuICAgIFtcIkNyb3NzYm93XCIsIFwiMTYwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBsdWNpbmRlbCA9IFtcclxuICAgIFtcIlBsYXRlIGxlZ3NcIiwgXCIxMTVncFwiXVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIn19PlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0SW5pdGlhbENpdHkoXCJhcmFrXCIpfX0gY2l0eT1cIkFyYWtcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcIm9zYXJpc1wiKX19IGNpdHk9XCJPc2FyaXNcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpfX0gY2l0eT1cIkdhcnJvZ2F0XCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJsdWNpbmRlbFwiKX19IGNpdHk9XCJMdWNpbmRlbFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYWJ1a2lyXCIpfX0gY2l0eT1cIkFidWtpclwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCJ9fT5cclxuICAgICAge2NpdHkgPT0ge2luaXRpYWxDaXR5fSAmJiBpbml0aWFsQ2l0eS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwib3NhcmlzXCIgJiYgb3NhcmlzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJhYnVraXJcIiAmJiBhYnVraXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImx1Y2luZGVsXCIgJiYgbHVjaW5kZWwubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==