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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      setCity("arak");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Arak"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Osaris"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Garrogat")), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, city == "arak" && arak.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
        lineNumber: 53,
        columnNumber: 15
      }
    }, item[0]), __jsx("li", {
      style: {
        margin: "5px 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJsaXN0U3R5bGUiLCJtYXAiLCJpdGVtIiwiaSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBSWhCLE1BQU1DLElBQUksR0FBRyxDQUNYLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FEVyxFQUVYLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUZXLEVBR1gsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBSFcsRUFJWCxDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FKVyxFQUtYLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUxXLEVBTVgsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBTlcsRUFPWCxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsQ0FQVyxDQUFiO0FBVUEsTUFBTUMsTUFBTSxHQUFHLENBQ2IsQ0FBQyxZQUFELEVBQWUsT0FBZixDQURhLEVBRWIsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLENBRmEsQ0FBZjtBQUtBLE1BQU1DLFFBQVEsR0FBRyxDQUNmLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQURlLEVBRWYsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLENBRmUsRUFHZixDQUFDLFlBQUQsRUFBZSxPQUFmLENBSGUsRUFJZixDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FKZSxFQUtmLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQUxlLENBQWpCO0FBUUEsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxXQUFLLEVBQUUsT0FGQTtBQUdQQyxZQUFNLEVBQUUsT0FIRDtBQUlQQyxvQkFBYyxFQUFFLFFBSlQ7QUFLUEMsZ0JBQVUsRUFBRSxRQUxMO0FBTVBDLG1CQUFhLEVBQUU7QUFOUixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUUsbUJBQU07QUFBRVQsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUFnQixLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLENBVEYsRUFlRTtBQUFJLFNBQUssRUFBRTtBQUFFVSxlQUFTLEVBQUU7QUFBYixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ1gsSUFBSSxJQUFJLE1BQVIsSUFBa0JFLElBQUksQ0FBQ1UsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3ZDLFdBQ0UsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE9BQVQ7QUFBa0JTLGNBQU0sRUFBRTtBQUExQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RGLElBQUksQ0FBQyxDQUFELENBQXBELENBREYsRUFFRTtBQUFJLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLElBQUksQ0FBQyxDQUFELENBQXJDLENBRkYsQ0FERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVQLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsS0FBekI7QUFBZ0NTLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWGtCLENBRG5CLENBZkYsQ0FERjtBQWdDRCxDQTNERDs7R0FBTWxCLEc7O0tBQUFBLEc7QUE2RFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM2YmI0N2M3NTAxZDBlNmFiMmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9zYXJpcyA9IFtcclxuICAgIFtcIkRvdWJsZSBheGVcIiwgXCIyNjBncFwiXSxcclxuICAgIFtcIlN0ZWVsIGhlbG1ldFwiLCBcIjI5M2dwXCJdXHJcbiAgXVxyXG5cclxuICBjb25zdCBnYXJyb2dhdCA9IFtcclxuICAgIFtcIkNsZXJpY2FsIG1hY2VcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIkNyeXN0YWwgYmFsbFwiLCBcIjE5MGdwXCJdLFxyXG4gICAgW1wiTWluZCBzdG9uZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiSXJvbiBoZWxtZXRcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIlZpa2luZyBzaGllbGRcIiwgXCI4NWdwXCJdXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxuICAgIH19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKX19PkFyYWs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPk9zYXJpczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+R2Fycm9nYXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIG1hcmdpbjogXCI1cHggMFwifX0+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjVweCAwXCIgfX0+e2l0ZW1bMV19PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==