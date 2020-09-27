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
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        fontSize: "24px",
        width: "200px",
        margin: "5px 0"
      },
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImxpc3RTdHlsZSIsIm1hcCIsIml0ZW0iLCJpIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUloQixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRFcsRUFFWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FGVyxFQUdYLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUhXLEVBSVgsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBSlcsRUFLWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FMVyxFQU1YLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQU5XLEVBT1gsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBUFcsQ0FBYjtBQVVBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FEYSxFQUViLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZhLENBQWY7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZixDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FEZSxFQUVmLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZlLEVBR2YsQ0FB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O0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE9BQVQ7QUFBa0JPLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RHLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFSCxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNHLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVWLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsS0FBekI7QUFBZ0NZLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWHNCLENBckR2QixDQWpCRixDQURGO0FBc0ZELENBMUhEOztHQUFNdkIsRzs7S0FBQUEsRztBQTRIU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTA2YWRmZTE0M2VhYzQ0NDNmMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYXJhayA9IFtcclxuICAgIFtcIkhhbGJlcmRcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIkJyYXNzIGFybW9yXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJNb3JuaW5nIHN0YXJcIiwgXCI5MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIGhhbW1lclwiLCBcIjEyMGdwXCJdLFxyXG4gICAgW1wiUGxhdGUgYXJtb3JcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIlN0ZWVsIHNoaWVsZFwiLCBcIjgwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgc2hpZWxkXCIsIFwiOTVncFwiXSBcclxuICBdO1xyXG5cclxuICBjb25zdCBvc2FyaXMgPSBbXHJcbiAgICBbXCJEb3VibGUgYXhlXCIsIFwiMjYwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBoZWxtZXRcIiwgXCIyOTNncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdhcnJvZ2F0ID0gW1xyXG4gICAgW1wiQ2xlcmljYWwgbWFjZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiQ3J5c3RhbCBiYWxsXCIsIFwiMTkwZ3BcIl0sXHJcbiAgICBbXCJNaW5kIHN0b25lXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJJcm9uIGhlbG1ldFwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiVmlraW5nIHNoaWVsZFwiLCBcIjg1Z3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBhYnVraXIgPSBbXHJcbiAgICBbXCJCb3dcIiwgXCIxMzBncFwiXSxcclxuICAgIFtcIkNyb3NzYm93XCIsIFwiMTYwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBsdWNpbmRlbCA9IFtcclxuICAgIFtcIlBsYXRlIGxlZ3NcIiwgXCIxMTVncFwiXVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIn19PlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLCB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKX19PkFyYWs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpfX0+T3NhcmlzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpfX0+R2Fycm9nYXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwibHVjaW5kZWxcIil9fT5MdWNpbmRlbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhYnVraXJcIil9fT5BYnVraXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiLCB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19IGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIsIG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvSXRlbT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcIm9zYXJpc1wiICYmIG9zYXJpcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJsdWNpbmRlbFwiICYmIGx1Y2luZGVsLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==