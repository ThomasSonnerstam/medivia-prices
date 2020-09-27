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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("arak"),
      city = _useState[0],
      setCity = _useState[1];

  var arak = [["Halberd", "400gp"], ["Brass armor", "150gp"], ["Morning star", "90gp"], ["Battle hammer", "120gp"], ["Plate armor", "400gp"], ["Steel shield", "80gp"], ["Battle shield", "95gp"]];
  return __jsx("section", {
    style: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Arak"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Osaris"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Garrogat"), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, city.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, __jsx("li", {
      style: {
        width: "200px",
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
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
        lineNumber: 41,
        columnNumber: 11
      }
    }));
  })));
};

_s(App, "xBaRQQoDCXAiffeuMPp2gt4c6tY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGUiLCJtYXAiLCJpdGVtIiwiaSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxNQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBSWhCLE1BQU1DLElBQUksR0FBRyxDQUNYLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FEVyxFQUVYLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUZXLEVBR1gsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBSFcsRUFJWCxDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FKVyxFQUtYLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUxXLEVBTVgsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBTlcsRUFPWCxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsQ0FQVyxDQUFiO0FBVUEsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxXQUFLLEVBQUUsT0FGQTtBQUdQQyxZQUFNLEVBQUUsT0FIRDtBQUlQQyxvQkFBYyxFQUFFLFFBSlQ7QUFLUEMsZ0JBQVUsRUFBRTtBQUxMLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFZRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDckIsV0FDRSxNQUFDLDhDQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFLLFdBQUssRUFBRTtBQUFFUixlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsT0FBVDtBQUFrQlEsY0FBTSxFQUFFO0FBQTFCLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnREYsSUFBSSxDQUFDLENBQUQsQ0FBcEQsQ0FERixFQUVFO0FBQUksV0FBSyxFQUFFO0FBQUVFLGNBQU0sRUFBRTtBQUFWLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ0YsSUFBSSxDQUFDLENBQUQsQ0FBckMsQ0FGRixDQURBLEVBTUE7QUFBSyxXQUFLLEVBQUU7QUFBRU4sYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRSxLQUF6QjtBQUFnQ1EsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOQSxDQURGO0FBVUQsR0FYQSxDQURELENBWkYsQ0FERjtBQTZCRCxDQTNDRDs7R0FBTWYsRzs7S0FBQUEsRztBQTZDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ2MDY3OWRlZjdhNjVmODQ3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiYXJha1wiKTtcclxuXHJcbiAgY29uc3QgYXJhayA9IFtcclxuICAgIFtcIkhhbGJlcmRcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIkJyYXNzIGFybW9yXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJNb3JuaW5nIHN0YXJcIiwgXCI5MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIGhhbW1lclwiLCBcIjEyMGdwXCJdLFxyXG4gICAgW1wiUGxhdGUgYXJtb3JcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIlN0ZWVsIHNoaWVsZFwiLCBcIjgwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgc2hpZWxkXCIsIFwiOTVncFwiXSBcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxidXR0b24+QXJhazwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPk9zYXJpczwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPkdhcnJvZ2F0PC9idXR0b24+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggMFwiIH19PntpdGVtWzFdfTwvbGk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=