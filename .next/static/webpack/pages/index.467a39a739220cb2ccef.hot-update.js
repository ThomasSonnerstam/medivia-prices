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
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var App = function App() {
  _s2();

  var _s = $RefreshSig$();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(_s(function () {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("arak"),
        city = _useState[0],
        setCity = _useState[1];
  }, "xBaRQQoDCXAiffeuMPp2gt4c6tY="), [city]);
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
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Arak"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Osaris"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Garrogat"), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, city.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
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
        lineNumber: 39,
        columnNumber: 13
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
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
        lineNumber: 43,
        columnNumber: 11
      }
    }));
  })));
};

_s2(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGUiLCJtYXAiLCJpdGVtIiwiaSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQTs7QUFFaEJDLHlEQUFTLElBQUMsWUFBTTtBQUFBOztBQUFBLG9CQUNVQyxzREFBUSxDQUFDLE1BQUQsQ0FEbEI7QUFBQSxRQUNQQyxJQURPO0FBQUEsUUFDREMsT0FEQztBQUVmLEdBRlEsbUNBRU4sQ0FBQ0QsSUFBRCxDQUZNLENBQVQ7QUFJQSxNQUFNRSxJQUFJLEdBQUcsQ0FDWCxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRFcsRUFFWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FGVyxFQUdYLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUhXLEVBSVgsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBSlcsRUFLWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FMVyxFQU1YLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQU5XLEVBT1gsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBUFcsQ0FBYjtBQVVBLFNBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsV0FBSyxFQUFFLE9BRkE7QUFHUEMsWUFBTSxFQUFFLE9BSEQ7QUFJUEMsb0JBQWMsRUFBRSxRQUpUO0FBS1BDLGdCQUFVLEVBQUU7QUFMTCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLEVBWUU7QUFBSSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3JCLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxXQUFLLEVBQUU7QUFBRVIsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE9BQVQ7QUFBa0JRLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RGLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FEQSxFQU1BO0FBQUssV0FBSyxFQUFFO0FBQUVOLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsS0FBekI7QUFBZ0NRLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkEsQ0FERjtBQVVELEdBWEEsQ0FERCxDQVpGLENBREY7QUE2QkQsQ0E3Q0Q7O0lBQU1oQixHOztLQUFBQSxHO0FBK0NTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjdhMzlhNzM5MjIwY2IyY2NlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJhcmFrXCIpXHJcbiAgfSwgW2NpdHldKVxyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgICB9fT5cclxuICAgICAgPGJ1dHRvbj5BcmFrPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24+T3NhcmlzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24+R2Fycm9nYXQ8L2J1dHRvbj5cclxuXHJcbiAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwifX0+XHJcbiAgICAgIHtjaXR5Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luOiBcIjVweCAwXCJ9fT57aXRlbVswXX08L2xpPlxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==