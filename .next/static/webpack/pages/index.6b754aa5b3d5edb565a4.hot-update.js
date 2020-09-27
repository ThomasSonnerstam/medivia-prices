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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("arak"),
      city = _useState[0],
      setCity = _useState[1];

  var arak = [["Halberd", "400gp"], ["Brass armor", "150gp"], ["Morning star", "90gp"], ["Battle hammer", "120gp"], ["Plate armor", "400gp"], ["Steel shield", "80gp"], ["Battle shield", "95gp"]];
  var osaris = [["Double axe", "260gp"], ["Steel helmet", "293gp"]];
  var garrogat = [["Clerical mace", "170gp"], ["Crystal ball", "190gp"], ["Mind stone", "170gp"], ["Iron helmet", "150gp"], ["Viking shield", "85gp"]];
  var abukir = [["Bow", "130gp"], ["Crossbow", "160gp"]];
  var lucindel = [["Plate legs", "115gp"]];
  var bluedjinn = [["Dragon lance", "9000gp"], ["Fire axe", "8000gp"], ["Fire sword", "4000gp"], ["War hammer", "1200gp"], ["Spike sword", "1000gp"], ["Ice rapier", "1000gp"], ["Broad sword", "500gp"], ["Obsidian lance", "500gp"], ["Crown armor", "12 000gp"], ["Blue robe", "10 000gp"], ["Noble armor", "900gp"], ["Royal helmet", "30 000gp"], ["Crusader helmet", "6000gp"], ["Crown helmet", "2500gp"], ["Crown legs", "12 000gp"], ["Scorpid hood", "2300gp"], ["Boots of haste", "30 000gp"], ["Phoenix shield", "16 000gp"], ["Crown shield", "8000gp"], ["Dragon shield", "4000gp"], ["Guardian shield", "2000gp"], ["Watcher shield", "1200gp"]];
  var greendjinn = [["Scimitar", "150gp"], ["Giant sword", "17 000gp"], ["Serpent sword", "900gp"], ["Poison dagger", "50gp"], ["Knight axe", "2000gp"], ["Dragon hammer", "2000gp"], ["Skull staff", "6000gp"], ["Dark armor", "400gp"], ["Dark shield", "166gp"], ["Knight armor", "5000gp"], ["Dark helmet", "250gp"], ["Knight helmet", "2500gp"], ["Warrior helmet", "5000gp"], ["Strange helmet", "500gp"], ["Mystic turban", "150gp"], ["Spider silk armor", "2000gp"], ["Knight legs", "5000gp"], ["Tower shield", "8000gp"], ["Black shield", "800gp"], ["Ancient shield", "900gp"], ["Vampire shield", "15 000gp"]];
  return __jsx("section", {
    style: {
      display: "flex",
      width: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "100px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Medivia item prices"), __jsx("p", {
    style: {
      fontSize: "16px",
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, "Here you can find the best prices in each city/NPC"), __jsx("div", {
    style: {
      marginBottom: "100px",
      display: "flex",
      justifyContent: "space-evenly"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("arak");
    },
    city: "Arak",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("bluedjinn");
    },
    city: "Blue djinn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: function handleClick() {
      setCity("greendjinn");
    },
    city: "Green djinn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, city == "arak" && arak.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }));
  }), city == "garrogat" && garrogat.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }));
  }), city == "abukir" && abukir.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }));
  }), city == "bluedjinn" && bluedjinn.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }));
  }), city == "greendjinn" && greendjinn.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiYmx1ZWRqaW5uIiwiZ3JlZW5kamlubiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwibGlzdFN0eWxlIiwibWFwIiwiaXRlbSIsImkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsTUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUloQixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRFcsRUFFWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FGVyxFQUdYLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUhXLEVBSVgsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBSlcsRUFLWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FMVyxFQU1YLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQU5XLEVBT1gsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBUFcsQ0FBYjtBQVVBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FEYSxFQUViLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZhLENBQWY7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZixDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FE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QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixFQUtFO0FBQUssV0FBSyxFQUFFO0FBQUVYLGFBQUssRUFBRSxNQUFUO0FBQWlCYSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NDLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNELEdBVndCLENBekV6QixDQXJCRixDQURGO0FBNkdELENBbk1EOztHQUFNMUIsRzs7S0FBQUEsRztBQXFNU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI3NTRhYTViM2Q1ZWRiNTY1YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiYXJha1wiKTtcclxuXHJcbiAgY29uc3QgYXJhayA9IFtcclxuICAgIFtcIkhhbGJlcmRcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIkJyYXNzIGFybW9yXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJNb3JuaW5nIHN0YXJcIiwgXCI5MGdwXCJdLFxyXG4gICAgW1wiQmF0dGxlIGhhbW1lclwiLCBcIjEyMGdwXCJdLFxyXG4gICAgW1wiUGxhdGUgYXJtb3JcIiwgXCI0MDBncFwiXSxcclxuICAgIFtcIlN0ZWVsIHNoaWVsZFwiLCBcIjgwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgc2hpZWxkXCIsIFwiOTVncFwiXSBcclxuICBdO1xyXG5cclxuICBjb25zdCBvc2FyaXMgPSBbXHJcbiAgICBbXCJEb3VibGUgYXhlXCIsIFwiMjYwZ3BcIl0sXHJcbiAgICBbXCJTdGVlbCBoZWxtZXRcIiwgXCIyOTNncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdhcnJvZ2F0ID0gW1xyXG4gICAgW1wiQ2xlcmljYWwgbWFjZVwiLCBcIjE3MGdwXCJdLFxyXG4gICAgW1wiQ3J5c3RhbCBiYWxsXCIsIFwiMTkwZ3BcIl0sXHJcbiAgICBbXCJNaW5kIHN0b25lXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJJcm9uIGhlbG1ldFwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiVmlraW5nIHNoaWVsZFwiLCBcIjg1Z3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBhYnVraXIgPSBbXHJcbiAgICBbXCJCb3dcIiwgXCIxMzBncFwiXSxcclxuICAgIFtcIkNyb3NzYm93XCIsIFwiMTYwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBsdWNpbmRlbCA9IFtcclxuICAgIFtcIlBsYXRlIGxlZ3NcIiwgXCIxMTVncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGJsdWVkamlubiA9IFtcclxuICAgIFtcIkRyYWdvbiBsYW5jZVwiLCBcIjkwMDBncFwiXSxcclxuICAgIFtcIkZpcmUgYXhlXCIsIFwiODAwMGdwXCJdLFxyXG4gICAgW1wiRmlyZSBzd29yZFwiLCBcIjQwMDBncFwiXSxcclxuICAgIFtcIldhciBoYW1tZXJcIiwgXCIxMjAwZ3BcIl0sXHJcbiAgICBbXCJTcGlrZSBzd29yZFwiLCBcIjEwMDBncFwiXSxcclxuICAgIFtcIkljZSByYXBpZXJcIiwgXCIxMDAwZ3BcIl0sXHJcbiAgICBbXCJCcm9hZCBzd29yZFwiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiT2JzaWRpYW4gbGFuY2VcIiwgXCI1MDBncFwiXSxcclxuICAgIFtcIkNyb3duIGFybW9yXCIsIFwiMTIgMDAwZ3BcIl0sXHJcbiAgICBbXCJCbHVlIHJvYmVcIiwgXCIxMCAwMDBncFwiXSxcclxuICAgIFtcIk5vYmxlIGFybW9yXCIsIFwiOTAwZ3BcIl0sXHJcbiAgICBbXCJSb3lhbCBoZWxtZXRcIiwgXCIzMCAwMDBncFwiXSxcclxuICAgIFtcIkNydXNhZGVyIGhlbG1ldFwiLCBcIjYwMDBncFwiXSxcclxuICAgIFtcIkNyb3duIGhlbG1ldFwiLCBcIjI1MDBncFwiXSxcclxuICAgIFtcIkNyb3duIGxlZ3NcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIlNjb3JwaWQgaG9vZFwiLCBcIjIzMDBncFwiXSxcclxuICAgIFtcIkJvb3RzIG9mIGhhc3RlXCIsIFwiMzAgMDAwZ3BcIl0sXHJcbiAgICBbXCJQaG9lbml4IHNoaWVsZFwiLCBcIjE2IDAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gc2hpZWxkXCIsIFwiODAwMGdwXCJdLFxyXG4gICAgW1wiRHJhZ29uIHNoaWVsZFwiLCBcIjQwMDBncFwiXSxcclxuICAgIFtcIkd1YXJkaWFuIHNoaWVsZFwiLCBcIjIwMDBncFwiXSxcclxuICAgIFtcIldhdGNoZXIgc2hpZWxkXCIsIFwiMTIwMGdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ3JlZW5kamlubiA9IFtcclxuICAgIFtcIlNjaW1pdGFyXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJHaWFudCBzd29yZFwiLCBcIjE3IDAwMGdwXCJdLFxyXG4gICAgW1wiU2VycGVudCBzd29yZFwiLCBcIjkwMGdwXCJdLFxyXG4gICAgW1wiUG9pc29uIGRhZ2dlclwiLCBcIjUwZ3BcIl0sXHJcbiAgICBbXCJLbmlnaHQgYXhlXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiRHJhZ29uIGhhbW1lclwiLCBcIjIwMDBncFwiXSxcclxuICAgIFtcIlNrdWxsIHN0YWZmXCIsIFwiNjAwMGdwXCJdLFxyXG4gICAgW1wiRGFyayBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiRGFyayBzaGllbGRcIiwgXCIxNjZncFwiXSxcclxuICAgIFtcIktuaWdodCBhcm1vclwiLCBcIjUwMDBncFwiXSxcclxuICAgIFtcIkRhcmsgaGVsbWV0XCIsIFwiMjUwZ3BcIl0sXHJcbiAgICBbXCJLbmlnaHQgaGVsbWV0XCIsIFwiMjUwMGdwXCJdLFxyXG4gICAgW1wiV2FycmlvciBoZWxtZXRcIiwgXCI1MDAwZ3BcIl0sXHJcbiAgICBbXCJTdHJhbmdlIGhlbG1ldFwiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiTXlzdGljIHR1cmJhblwiLCBcIjE1MGdwXCJdLFxyXG4gICAgW1wiU3BpZGVyIHNpbGsgYXJtb3JcIiwgXCIyMDAwZ3BcIl0sXHJcbiAgICBbXCJLbmlnaHQgbGVnc1wiLCBcIjUwMDBncFwiXSxcclxuICAgIFtcIlRvd2VyIHNoaWVsZFwiLCBcIjgwMDBncFwiXSxcclxuICAgIFtcIkJsYWNrIHNoaWVsZFwiLCBcIjgwMGdwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBzaGllbGRcIiwgXCI5MDBncFwiXSxcclxuICAgIFtcIlZhbXBpcmUgc2hpZWxkXCIsIFwiMTUgMDAwZ3BcIl1cclxuICBdXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCJcclxuICAgIH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5NZWRpdmlhIGl0ZW0gcHJpY2VzPC9oMT5cclxuICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PkhlcmUgeW91IGNhbiBmaW5kIHRoZSBiZXN0IHByaWNlcyBpbiBlYWNoIGNpdHkvTlBDPC9wPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMDBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCJ9fT5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhcmFrXCIpIH19IGNpdHk9XCJBcmFrXCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJvc2FyaXNcIikgfX0gY2l0eT1cIk9zYXJpc1wiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiZ2Fycm9nYXRcIikgfX0gY2l0eT1cIkdhcnJvZ2F0XCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJhYnVraXJcIikgfX0gY2l0eT1cIkFidWtpclwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwibHVjaW5kZWxcIikgfX0gY2l0eT1cIkx1Y2luZGVsXCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJibHVlZGppbm5cIikgfX0gY2l0eT1cIkJsdWUgZGppbm5cIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdyZWVuZGppbm5cIikgfX0gY2l0eT1cIkdyZWVuIGRqaW5uXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJvc2FyaXNcIiAmJiBvc2FyaXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImdhcnJvZ2F0XCIgJiYgZ2Fycm9nYXQubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwibHVjaW5kZWxcIiAmJiBsdWNpbmRlbC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwiYmx1ZWRqaW5uXCIgJiYgYmx1ZWRqaW5uLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJncmVlbmRqaW5uXCIgJiYgZ3JlZW5kamlubi5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9