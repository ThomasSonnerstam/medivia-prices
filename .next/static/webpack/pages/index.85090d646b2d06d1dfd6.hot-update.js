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
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("button", {
    style: {
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("arak");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Arak"), __jsx("button", {
    style: {
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("osaris");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Osaris"), __jsx("button", {
    style: {
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("garrogat");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Garrogat"), __jsx("button", {
    style: {
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("lucindel");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Lucindel"), __jsx("button", {
    style: {
      width: "100px",
      height: "35px"
    },
    onClick: function onClick() {
      setCity("abukir");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Abukir")), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, city == "arak" && arak.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 64,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 68,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
        lineNumber: 77,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        lineNumber: 81,
        columnNumber: 13
      }
    }));
  }), city == "garrogat" && garrogat.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
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
        lineNumber: 90,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
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
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
        lineNumber: 107,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
        lineNumber: 116,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
        lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImxpc3RTdHlsZSIsIm1hcCIsIml0ZW0iLCJpIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFJaEIsTUFBTUMsSUFBSSxHQUFHLENBQ1gsQ0FBQyxTQUFELEVBQVksT0FBWixDQURXLEVBRVgsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBRlcsRUFHWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FIVyxFQUlYLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUpXLEVBS1gsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBTFcsRUFNWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FOVyxFQU9YLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQVBXLENBQWI7QUFVQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLFlBQUQsRUFBZSxPQUFmLENBRGEsRUFFYixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGYSxDQUFmO0FBS0EsTUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBRGUsRUFFZixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGZSxFQUdmLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FIZSxFQUlmLENBQUMsYUFBRCxFQUFnQixP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RkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVQLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsS0FBekI7QUFBZ0NTLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWHNCLENBckR2QixDQWpCRixDQURGO0FBc0ZELENBMUhEOztHQUFNcEIsRzs7S0FBQUEsRztBQTRIU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODUwOTBkNjQ2YjJkMDZkMWRmZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFyYWsgPSBbXHJcbiAgICBbXCJIYWxiZXJkXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJCcmFzcyBhcm1vclwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiTW9ybmluZyBzdGFyXCIsIFwiOTBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBoYW1tZXJcIiwgXCIxMjBncFwiXSxcclxuICAgIFtcIlBsYXRlIGFybW9yXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBzaGllbGRcIiwgXCI4MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIHNoaWVsZFwiLCBcIjk1Z3BcIl0gXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgb3NhcmlzID0gW1xyXG4gICAgW1wiRG91YmxlIGF4ZVwiLCBcIjI2MGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgaGVsbWV0XCIsIFwiMjkzZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBnYXJyb2dhdCA9IFtcclxuICAgIFtcIkNsZXJpY2FsIG1hY2VcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIkNyeXN0YWwgYmFsbFwiLCBcIjE5MGdwXCJdLFxyXG4gICAgW1wiTWluZCBzdG9uZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiSXJvbiBoZWxtZXRcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIlZpa2luZyBzaGllbGRcIiwgXCI4NWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYWJ1a2lyID0gW1xyXG4gICAgW1wiQm93XCIsIFwiMTMwZ3BcIl0sXHJcbiAgICBbXCJDcm9zc2Jvd1wiLCBcIjE2MGdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbHVjaW5kZWwgPSBbXHJcbiAgICBbXCJQbGF0ZSBsZWdzXCIsIFwiMTE1Z3BcIl1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxuICAgIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIn19PlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImFyYWtcIil9fT5BcmFrPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpfX0+T3NhcmlzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiZ2Fycm9nYXRcIil9fT5HYXJyb2dhdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImx1Y2luZGVsXCIpfX0+THVjaW5kZWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhYnVraXJcIil9fT5BYnVraXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcIm9zYXJpc1wiICYmIG9zYXJpcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJsdWNpbmRlbFwiICYmIGx1Y2luZGVsLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==