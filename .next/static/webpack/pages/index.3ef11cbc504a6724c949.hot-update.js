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
      marginBottom: "100px",
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
      lineNumber: 52,
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
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsImxpc3RTdHlsZSIsIm1hcCIsIml0ZW0iLCJpIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFJaEIsTUFBTUMsSUFBSSxHQUFHLENBQ1gsQ0FBQyxTQUFELEVBQVksT0FBWixDQURXLEVBRVgsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBRlcsRUFHWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FIVyxFQUlYLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUpXLEVBS1gsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBTFcsRUFNWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FOVyxFQU9YLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQVBXLENBQWI7QUFVQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLFlBQUQsRUFBZSxPQUFmLENBRGEsRUFFYixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGYSxDQUFmO0FBS0EsTUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBRGUsRUFFZixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGZSxFQUdmLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FIZSxFQUlmLENB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O0FBQUE7QUFBQSxPQUFnREcsSUFBSSxDQUFDLENBQUQsQ0FBcEQsQ0FERixFQUVFO0FBQUksV0FBSyxFQUFFO0FBQUVILGNBQU0sRUFBRTtBQUFWLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ0csSUFBSSxDQUFDLENBQUQsQ0FBckMsQ0FGRixDQURGLEVBTUU7QUFBSyxXQUFLLEVBQUU7QUFBRVQsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRSxLQUF6QjtBQUFnQ1UsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGO0FBVUQsR0FYc0IsQ0FyRHZCLENBakJGLENBREY7QUFzRkQsQ0ExSEQ7O0dBQU1yQixHOztLQUFBQSxHO0FBNEhTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZWYxMWNiYzUwNGE2NzI0Yzk0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYXJhayA9IFtcclxuICAgIFtcIkhhbGJlcmRcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIkJyYXNzIGFybW9yXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJNb3JuaW5nIHN0YXJcIiwgXCI5MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIGhhbW1lclwiLCBcIjEyMGdwXCJdLFxyXG4gICAgW1wiUGxhdGUgYXJtb3JcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIlN0ZWVsIHNoaWVsZFwiLCBcIjgwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgc2hpZWxkXCIsIFwiOTVncFwiXSBcclxuICBdO1xyXG5cclxuICBjb25zdCBvc2FyaXMgPSBbXHJcbiAgICBbXCJEb3VibGUgYXhlXCIsIFwiMjYwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBoZWxtZXRcIiwgXCIyOTNncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdhcnJvZ2F0ID0gW1xyXG4gICAgW1wiQ2xlcmljYWwgbWFjZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiQ3J5c3RhbCBiYWxsXCIsIFwiMTkwZ3BcIl0sXHJcbiAgICBbXCJNaW5kIHN0b25lXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJJcm9uIGhlbG1ldFwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiVmlraW5nIHNoaWVsZFwiLCBcIjg1Z3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBhYnVraXIgPSBbXHJcbiAgICBbXCJCb3dcIiwgXCIxMzBncFwiXSxcclxuICAgIFtcIkNyb3NzYm93XCIsIFwiMTYwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBsdWNpbmRlbCA9IFtcclxuICAgIFtcIlBsYXRlIGxlZ3NcIiwgXCIxMTVncFwiXVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIn19PlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLCB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKX19PkFyYWs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpfX0+T3NhcmlzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpfX0+R2Fycm9nYXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwibHVjaW5kZWxcIil9fT5MdWNpbmRlbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhYnVraXJcIil9fT5BYnVraXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcIm9zYXJpc1wiICYmIG9zYXJpcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJsdWNpbmRlbFwiICYmIGx1Y2luZGVsLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==