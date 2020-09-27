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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiYmx1ZWRqaW5uIiwiZ3JlZW5kamlubiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImxpc3RTdHlsZSIsIm1hcCIsIml0ZW0iLCJpIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLE1BQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFJaEIsTUFBTUMsSUFBSSxHQUFHLENBQ1gsQ0FBQyxTQUFELEVBQVksT0FBWixDQURXLEVBRVgsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBRlcsRUFHWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FIVyxFQUlYLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUpXLEVBS1gsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBTFcsRUFNWCxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FOVyxFQU9YLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQVBXLENBQWI7QUFVQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUFDLFlBQUQsRUFBZSxPQUFmLENBRGEsRUFFYixDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGYSxDQUFmO0FBS0EsTUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBRGUsRUFFZixDQUFD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGLEVBS0U7QUFBSyxXQUFLLEVBQUU7QUFBRVYsYUFBSyxFQUFFLE1BQVQ7QUFBaUJZLGNBQU0sRUFBRSxLQUF6QjtBQUFnQ0MsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGO0FBU0QsR0FWd0IsQ0F6RXpCLENBckJGLENBREY7QUE2R0QsQ0FuTUQ7O0dBQU16QixHOztLQUFBQSxHO0FBcU1TQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMGY5YmE3NjdlNmY2M2VkODAzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJhcmFrXCIpO1xyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9zYXJpcyA9IFtcclxuICAgIFtcIkRvdWJsZSBheGVcIiwgXCIyNjBncFwiXSxcclxuICAgIFtcIlN0ZWVsIGhlbG1ldFwiLCBcIjI5M2dwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2Fycm9nYXQgPSBbXHJcbiAgICBbXCJDbGVyaWNhbCBtYWNlXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJDcnlzdGFsIGJhbGxcIiwgXCIxOTBncFwiXSxcclxuICAgIFtcIk1pbmQgc3RvbmVcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIklyb24gaGVsbWV0XCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJWaWtpbmcgc2hpZWxkXCIsIFwiODVncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFidWtpciA9IFtcclxuICAgIFtcIkJvd1wiLCBcIjEzMGdwXCJdLFxyXG4gICAgW1wiQ3Jvc3Nib3dcIiwgXCIxNjBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGx1Y2luZGVsID0gW1xyXG4gICAgW1wiUGxhdGUgbGVnc1wiLCBcIjExNWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYmx1ZWRqaW5uID0gW1xyXG4gICAgW1wiRHJhZ29uIGxhbmNlXCIsIFwiOTAwMGdwXCJdLFxyXG4gICAgW1wiRmlyZSBheGVcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJGaXJlIHN3b3JkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiV2FyIGhhbW1lclwiLCBcIjEyMDBncFwiXSxcclxuICAgIFtcIlNwaWtlIHN3b3JkXCIsIFwiMTAwMGdwXCJdLFxyXG4gICAgW1wiSWNlIHJhcGllclwiLCBcIjEwMDBncFwiXSxcclxuICAgIFtcIkJyb2FkIHN3b3JkXCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJPYnNpZGlhbiBsYW5jZVwiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gYXJtb3JcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIkJsdWUgcm9iZVwiLCBcIjEwIDAwMGdwXCJdLFxyXG4gICAgW1wiTm9ibGUgYXJtb3JcIiwgXCI5MDBncFwiXSxcclxuICAgIFtcIlJveWFsIGhlbG1ldFwiLCBcIjMwIDAwMGdwXCJdLFxyXG4gICAgW1wiQ3J1c2FkZXIgaGVsbWV0XCIsIFwiNjAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gaGVsbWV0XCIsIFwiMjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gbGVnc1wiLCBcIjEyIDAwMGdwXCJdLFxyXG4gICAgW1wiU2NvcnBpZCBob29kXCIsIFwiMjMwMGdwXCJdLFxyXG4gICAgW1wiQm9vdHMgb2YgaGFzdGVcIiwgXCIzMCAwMDBncFwiXSxcclxuICAgIFtcIlBob2VuaXggc2hpZWxkXCIsIFwiMTYgMDAwZ3BcIl0sXHJcbiAgICBbXCJDcm93biBzaGllbGRcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gc2hpZWxkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiR3VhcmRpYW4gc2hpZWxkXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiV2F0Y2hlciBzaGllbGRcIiwgXCIxMjAwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBncmVlbmRqaW5uID0gW1xyXG4gICAgW1wiU2NpbWl0YXJcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIkdpYW50IHN3b3JkXCIsIFwiMTcgMDAwZ3BcIl0sXHJcbiAgICBbXCJTZXJwZW50IHN3b3JkXCIsIFwiOTAwZ3BcIl0sXHJcbiAgICBbXCJQb2lzb24gZGFnZ2VyXCIsIFwiNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBheGVcIiwgXCIyMDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gaGFtbWVyXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiU2t1bGwgc3RhZmZcIiwgXCI2MDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIGFybW9yXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIHNoaWVsZFwiLCBcIjE2NmdwXCJdLFxyXG4gICAgW1wiS25pZ2h0IGFybW9yXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiRGFyayBoZWxtZXRcIiwgXCIyNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBoZWxtZXRcIiwgXCIyNTAwZ3BcIl0sXHJcbiAgICBbXCJXYXJyaW9yIGhlbG1ldFwiLCBcIjUwMDBncFwiXSxcclxuICAgIFtcIlN0cmFuZ2UgaGVsbWV0XCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJNeXN0aWMgdHVyYmFuXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJTcGlkZXIgc2lsayBhcm1vclwiLCBcIjIwMDBncFwiXSxcclxuICAgIFtcIktuaWdodCBsZWdzXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiVG93ZXIgc2hpZWxkXCIsIFwiODAwMGdwXCJdLFxyXG4gICAgW1wiQmxhY2sgc2hpZWxkXCIsIFwiODAwZ3BcIl0sXHJcbiAgICBbXCJBbmNpZW50IHNoaWVsZFwiLCBcIjkwMGdwXCJdLFxyXG4gICAgW1wiVmFtcGlyZSBzaGllbGRcIiwgXCIxNSAwMDBncFwiXVxyXG4gIF1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pk1lZGl2aWEgaXRlbSBwcmljZXM8L2gxPlxyXG4gICAgICA8cD5IZXJlIHlvdSBjYW4gZmluZCB0aGUgYmVzdCBwcmljZXMgaW4gZWFjaCBjaXR5L05QQzwvcD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwifX0+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKSB9fSBjaXR5PVwiQXJha1wiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpIH19IGNpdHk9XCJPc2FyaXNcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpIH19IGNpdHk9XCJHYXJyb2dhdFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYWJ1a2lyXCIpIH19IGNpdHk9XCJBYnVraXJcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImx1Y2luZGVsXCIpIH19IGNpdHk9XCJMdWNpbmRlbFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYmx1ZWRqaW5uXCIpIH19IGNpdHk9XCJCbHVlIGRqaW5uXCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJncmVlbmRqaW5uXCIpIH19IGNpdHk9XCJHcmVlbiBkamlublwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCJ9fT5cclxuICAgICAge2NpdHkgPT0gXCJhcmFrXCIgJiYgYXJhay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwib3NhcmlzXCIgJiYgb3NhcmlzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJhYnVraXJcIiAmJiBhYnVraXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImx1Y2luZGVsXCIgJiYgbHVjaW5kZWwubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImJsdWVkamlublwiICYmIGJsdWVkamlubi5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwiZ3JlZW5kamlublwiICYmIGdyZWVuZGppbm4ubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==