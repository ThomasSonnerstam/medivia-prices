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
      alignItems: "center",
      flexDirection: "column",
      marginTop: "100px"
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
        fontSize: "24px",
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
        fontSize: "24px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImxpc3RTdHlsZSIsIm1hcCIsIml0ZW0iLCJpIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUloQixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRFcsRUFFWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FGVyxFQUdYLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUhXLEVBSVgsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBSlcsRUFLWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FMVyxFQU1YLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQU5XLEVBT1gsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBUFcsQ0FBYjtBQVVBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FEYSxFQUViLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZhLENBQWY7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZixDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FEZSxFQUVmLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZlLEVBR2YsQ0FBQyxZQUFE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QUVDLGFBQUssRUFBRSxPQUFUO0FBQWtCTyxjQUFNLEVBQUU7QUFBMUIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdERyxJQUFJLENBQUMsQ0FBRCxDQUFwRCxDQURGLEVBRUU7QUFBSSxXQUFLLEVBQUU7QUFBRUgsY0FBTSxFQUFFO0FBQVYsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDRyxJQUFJLENBQUMsQ0FBRCxDQUFyQyxDQUZGLENBREYsRUFNRTtBQUFLLFdBQUssRUFBRTtBQUFFVixhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFLEtBQXpCO0FBQWdDWSx1QkFBZSxFQUFFO0FBQWpELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBREY7QUFVRCxHQVhzQixDQXJEdkIsQ0FqQkYsQ0FERjtBQXNGRCxDQTFIRDs7R0FBTXZCLEc7O0tBQUFBLEc7QUE0SFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzYjFhNTc4NmI5MGI2MDEzOGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9zYXJpcyA9IFtcclxuICAgIFtcIkRvdWJsZSBheGVcIiwgXCIyNjBncFwiXSxcclxuICAgIFtcIlN0ZWVsIGhlbG1ldFwiLCBcIjI5M2dwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2Fycm9nYXQgPSBbXHJcbiAgICBbXCJDbGVyaWNhbCBtYWNlXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJDcnlzdGFsIGJhbGxcIiwgXCIxOTBncFwiXSxcclxuICAgIFtcIk1pbmQgc3RvbmVcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIklyb24gaGVsbWV0XCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJWaWtpbmcgc2hpZWxkXCIsIFwiODVncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFidWtpciA9IFtcclxuICAgIFtcIkJvd1wiLCBcIjEzMGdwXCJdLFxyXG4gICAgW1wiQ3Jvc3Nib3dcIiwgXCIxNjBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGx1Y2luZGVsID0gW1xyXG4gICAgW1wiUGxhdGUgbGVnc1wiLCBcIjExNWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiXHJcbiAgICB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwifX0+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhcmFrXCIpfX0+QXJhazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJvc2FyaXNcIil9fT5Pc2FyaXM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIix3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMzVweFwifX0gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiZ2Fycm9nYXRcIil9fT5HYXJyb2dhdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiLHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIzNXB4XCJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJsdWNpbmRlbFwiKX19Pkx1Y2luZGVsPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIsd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIn19IG9uQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImFidWtpclwiKX19PkFidWtpcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwifX0+XHJcbiAgICAgIHtjaXR5ID09IFwiYXJha1wiICYmIGFyYWsubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiLCB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiwgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcIm9zYXJpc1wiICYmIG9zYXJpcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiNXB4IDBcIn19PntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJsdWNpbmRlbFwiICYmIGx1Y2luZGVsLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==