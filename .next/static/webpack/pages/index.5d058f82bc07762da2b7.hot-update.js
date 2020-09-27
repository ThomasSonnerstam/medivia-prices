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
  var wulkan = [["Chaos shield", "500 000gp"], ["Magic plate armor", "200 000gp"], ["Red scale armor", "190 000gp"], ["Demon armor", "150 000gp"], ["Magic sword", "150 000gp"], ["Stonecutter axe", "150 000gp"], ["Void staff", "150 000gp"], ["Vanquisher", "100 000gp"], ["Ancient armor", "75 000gp"], ["Demonbone legs", "60 000gp"], ["Golden legs", "50 000gp"], ["Mastermind shield", "50 000gp"], ["Ancient legs", "45 000gp"], ["Demon helmet", "45 000gp"], ["Ancient helmet", "42 000"], ["Ancient sword", "40 000gp"], ["Demonbone armor", "40 000gp"], ["Helmet of the Ancients", "40 000gp"], ["Hellforged shield", "36 000gp"], ["Shakirian blade", "35 000gp"], ["Royal plate armor", "35 000gp"], ["Silver mace", "16 500gp"], ["Unholy plate armor", "15 000gp"], ["Crown boots", "12 000gp"], ["Demonbone boots", "14 000gp"], ["Light armor", "13 000gp"], ["Swinging demolisher", "11 000gp"], ["Torn quicksand boots", "10 000gp"], ["Demonbone helmet", "9000gp"], ["Fiery armor", "7500gp"], ["Fiery helmet", "7500gp"], ["Assassin blade", "6300gp"], ["Bone basher", "5500gp"], ["Unholy halberd", "5500gp"], ["Ancient boots", "5000gp"], ["Shakirian shield", "3000gp"], ["Wooden maul", "2000gp"], ["Drake scale helmet", "850gp"], ["Soul dagger", "200gp"]];
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
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, "Medivia item prices"), __jsx("p", {
    style: {
      fontSize: "20px",
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 145,
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
      lineNumber: 146,
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
      lineNumber: 147,
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
      lineNumber: 148,
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
      lineNumber: 149,
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
      lineNumber: 150,
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
      lineNumber: 151,
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
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, city == "arak" && arak.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
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
        lineNumber: 163,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
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
        lineNumber: 175,
        columnNumber: 13
      }
    }));
  }), city == "garrogat" && garrogat.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
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
        lineNumber: 187,
        columnNumber: 13
      }
    }));
  }), city == "abukir" && abukir.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
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
        lineNumber: 199,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
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
        lineNumber: 211,
        columnNumber: 13
      }
    }));
  }), city == "bluedjinn" && bluedjinn.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
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
        lineNumber: 223,
        columnNumber: 13
      }
    }));
  }), city == "greendjinn" && greendjinn.map(function (item, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
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
        lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJjaXR5Iiwic2V0Q2l0eSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiYmx1ZWRqaW5uIiwiZ3JlZW5kamlubiIsInd1bGthbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwibGlzdFN0eWxlIiwibWFwIiwiaXRlbSIsImkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsTUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUloQixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRFcsRUFFWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FGVyxFQUdYLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUhXLEVBSVgsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLENBSlcsRUFLWCxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FMVyxFQU1YLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQU5XLEVBT1gsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBUFcsQ0FBYjtBQVVBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FEYSxFQUViLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUZhLENBQWY7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZixDQUFDLGVBQUQsRUFBa0Is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QUVYLGFBQUssRUFBRSxNQUFUO0FBQWlCYSxjQUFNLEVBQUUsS0FBekI7QUFBZ0NDLHVCQUFlLEVBQUU7QUFBakQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNELEdBVnVCLENBN0R4QixFQXlFQ3pCLElBQUksSUFBSSxZQUFSLElBQXdCUSxVQUFVLENBQUNhLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNuRCxXQUNFLE1BQUMsOENBQUQ7QUFBVSxTQUFHLEVBQUVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUViLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBTSxVQUFJLEVBQUVZLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBTSxXQUFLLEVBQUVBLElBQUksQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGLEVBS0U7QUFBSyxXQUFLLEVBQUU7QUFBRVgsYUFBSyxFQUFFLE1BQVQ7QUFBaUJhLGNBQU0sRUFBRSxLQUF6QjtBQUFnQ0MsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGO0FBU0QsR0FWd0IsQ0F6RXpCLENBckJGLENBREY7QUE2R0QsQ0E3T0Q7O0dBQU0zQixHOztLQUFBQSxHO0FBK09TQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDA1OGY4MmJjMDc3NjJkYTJiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJhcmFrXCIpO1xyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9zYXJpcyA9IFtcclxuICAgIFtcIkRvdWJsZSBheGVcIiwgXCIyNjBncFwiXSxcclxuICAgIFtcIlN0ZWVsIGhlbG1ldFwiLCBcIjI5M2dwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2Fycm9nYXQgPSBbXHJcbiAgICBbXCJDbGVyaWNhbCBtYWNlXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJDcnlzdGFsIGJhbGxcIiwgXCIxOTBncFwiXSxcclxuICAgIFtcIk1pbmQgc3RvbmVcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIklyb24gaGVsbWV0XCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJWaWtpbmcgc2hpZWxkXCIsIFwiODVncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFidWtpciA9IFtcclxuICAgIFtcIkJvd1wiLCBcIjEzMGdwXCJdLFxyXG4gICAgW1wiQ3Jvc3Nib3dcIiwgXCIxNjBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGx1Y2luZGVsID0gW1xyXG4gICAgW1wiUGxhdGUgbGVnc1wiLCBcIjExNWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYmx1ZWRqaW5uID0gW1xyXG4gICAgW1wiRHJhZ29uIGxhbmNlXCIsIFwiOTAwMGdwXCJdLFxyXG4gICAgW1wiRmlyZSBheGVcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJGaXJlIHN3b3JkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiV2FyIGhhbW1lclwiLCBcIjEyMDBncFwiXSxcclxuICAgIFtcIlNwaWtlIHN3b3JkXCIsIFwiMTAwMGdwXCJdLFxyXG4gICAgW1wiSWNlIHJhcGllclwiLCBcIjEwMDBncFwiXSxcclxuICAgIFtcIkJyb2FkIHN3b3JkXCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJPYnNpZGlhbiBsYW5jZVwiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gYXJtb3JcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIkJsdWUgcm9iZVwiLCBcIjEwIDAwMGdwXCJdLFxyXG4gICAgW1wiTm9ibGUgYXJtb3JcIiwgXCI5MDBncFwiXSxcclxuICAgIFtcIlJveWFsIGhlbG1ldFwiLCBcIjMwIDAwMGdwXCJdLFxyXG4gICAgW1wiQ3J1c2FkZXIgaGVsbWV0XCIsIFwiNjAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gaGVsbWV0XCIsIFwiMjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gbGVnc1wiLCBcIjEyIDAwMGdwXCJdLFxyXG4gICAgW1wiU2NvcnBpZCBob29kXCIsIFwiMjMwMGdwXCJdLFxyXG4gICAgW1wiQm9vdHMgb2YgaGFzdGVcIiwgXCIzMCAwMDBncFwiXSxcclxuICAgIFtcIlBob2VuaXggc2hpZWxkXCIsIFwiMTYgMDAwZ3BcIl0sXHJcbiAgICBbXCJDcm93biBzaGllbGRcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gc2hpZWxkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiR3VhcmRpYW4gc2hpZWxkXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiV2F0Y2hlciBzaGllbGRcIiwgXCIxMjAwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBncmVlbmRqaW5uID0gW1xyXG4gICAgW1wiU2NpbWl0YXJcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIkdpYW50IHN3b3JkXCIsIFwiMTcgMDAwZ3BcIl0sXHJcbiAgICBbXCJTZXJwZW50IHN3b3JkXCIsIFwiOTAwZ3BcIl0sXHJcbiAgICBbXCJQb2lzb24gZGFnZ2VyXCIsIFwiNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBheGVcIiwgXCIyMDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gaGFtbWVyXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiU2t1bGwgc3RhZmZcIiwgXCI2MDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIGFybW9yXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIHNoaWVsZFwiLCBcIjE2NmdwXCJdLFxyXG4gICAgW1wiS25pZ2h0IGFybW9yXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiRGFyayBoZWxtZXRcIiwgXCIyNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBoZWxtZXRcIiwgXCIyNTAwZ3BcIl0sXHJcbiAgICBbXCJXYXJyaW9yIGhlbG1ldFwiLCBcIjUwMDBncFwiXSxcclxuICAgIFtcIlN0cmFuZ2UgaGVsbWV0XCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJNeXN0aWMgdHVyYmFuXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJTcGlkZXIgc2lsayBhcm1vclwiLCBcIjIwMDBncFwiXSxcclxuICAgIFtcIktuaWdodCBsZWdzXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiVG93ZXIgc2hpZWxkXCIsIFwiODAwMGdwXCJdLFxyXG4gICAgW1wiQmxhY2sgc2hpZWxkXCIsIFwiODAwZ3BcIl0sXHJcbiAgICBbXCJBbmNpZW50IHNoaWVsZFwiLCBcIjkwMGdwXCJdLFxyXG4gICAgW1wiVmFtcGlyZSBzaGllbGRcIiwgXCIxNSAwMDBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHd1bGthbiA9IFtcclxuICAgIFtcIkNoYW9zIHNoaWVsZFwiLCBcIjUwMCAwMDBncFwiXSxcclxuICAgIFtcIk1hZ2ljIHBsYXRlIGFybW9yXCIsIFwiMjAwIDAwMGdwXCJdLFxyXG4gICAgW1wiUmVkIHNjYWxlIGFybW9yXCIsIFwiMTkwIDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb24gYXJtb3JcIiwgXCIxNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJNYWdpYyBzd29yZFwiLCBcIjE1MCAwMDBncFwiXSxcclxuICAgIFtcIlN0b25lY3V0dGVyIGF4ZVwiLCBcIjE1MCAwMDBncFwiXSxcclxuICAgIFtcIlZvaWQgc3RhZmZcIiwgXCIxNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJWYW5xdWlzaGVyXCIsIFwiMTAwIDAwMGdwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBhcm1vclwiLCBcIjc1IDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb25ib25lIGxlZ3NcIiwgXCI2MCAwMDBncFwiXSxcclxuICAgIFtcIkdvbGRlbiBsZWdzXCIsIFwiNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJNYXN0ZXJtaW5kIHNoaWVsZFwiLCBcIjUwIDAwMGdwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBsZWdzXCIsIFwiNDUgMDAwZ3BcIl0sXHJcbiAgICBbXCJEZW1vbiBoZWxtZXRcIiwgXCI0NSAwMDBncFwiXSxcclxuICAgIFtcIkFuY2llbnQgaGVsbWV0XCIsIFwiNDIgMDAwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBzd29yZFwiLCBcIjQwIDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb25ib25lIGFybW9yXCIsIFwiNDAgMDAwZ3BcIl0sXHJcbiAgICBbXCJIZWxtZXQgb2YgdGhlIEFuY2llbnRzXCIsIFwiNDAgMDAwZ3BcIl0sXHJcbiAgICBbXCJIZWxsZm9yZ2VkIHNoaWVsZFwiLCBcIjM2IDAwMGdwXCJdLFxyXG4gICAgW1wiU2hha2lyaWFuIGJsYWRlXCIsIFwiMzUgMDAwZ3BcIl0sXHJcbiAgICBbXCJSb3lhbCBwbGF0ZSBhcm1vclwiLCBcIjM1IDAwMGdwXCJdLFxyXG4gICAgW1wiU2lsdmVyIG1hY2VcIiwgXCIxNiA1MDBncFwiXSxcclxuICAgIFtcIlVuaG9seSBwbGF0ZSBhcm1vclwiLCBcIjE1IDAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gYm9vdHNcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIkRlbW9uYm9uZSBib290c1wiLCBcIjE0IDAwMGdwXCJdLFxyXG4gICAgW1wiTGlnaHQgYXJtb3JcIiwgXCIxMyAwMDBncFwiXSxcclxuICAgIFtcIlN3aW5naW5nIGRlbW9saXNoZXJcIiwgXCIxMSAwMDBncFwiXSxcclxuICAgIFtcIlRvcm4gcXVpY2tzYW5kIGJvb3RzXCIsIFwiMTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJEZW1vbmJvbmUgaGVsbWV0XCIsIFwiOTAwMGdwXCJdLFxyXG4gICAgW1wiRmllcnkgYXJtb3JcIiwgXCI3NTAwZ3BcIl0sXHJcbiAgICBbXCJGaWVyeSBoZWxtZXRcIiwgXCI3NTAwZ3BcIl0sXHJcbiAgICBbXCJBc3Nhc3NpbiBibGFkZVwiLCBcIjYzMDBncFwiXSxcclxuICAgIFtcIkJvbmUgYmFzaGVyXCIsIFwiNTUwMGdwXCJdLFxyXG4gICAgW1wiVW5ob2x5IGhhbGJlcmRcIiwgXCI1NTAwZ3BcIl0sXHJcbiAgICBbXCJBbmNpZW50IGJvb3RzXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiU2hha2lyaWFuIHNoaWVsZFwiLCBcIjMwMDBncFwiXSxcclxuICAgIFtcIldvb2RlbiBtYXVsXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiRHJha2Ugc2NhbGUgaGVsbWV0XCIsIFwiODUwZ3BcIl0sXHJcbiAgICBbXCJTb3VsIGRhZ2dlclwiLCBcIjIwMGdwXCJdXHJcbiAgXVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiXHJcbiAgICB9fT5cclxuICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+TWVkaXZpYSBpdGVtIHByaWNlczwvaDE+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5IZXJlIHlvdSBjYW4gZmluZCB0aGUgYmVzdCBwcmljZXMgaW4gZWFjaCBjaXR5L05QQzwvcD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwifX0+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKSB9fSBjaXR5PVwiQXJha1wiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpIH19IGNpdHk9XCJPc2FyaXNcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpIH19IGNpdHk9XCJHYXJyb2dhdFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYWJ1a2lyXCIpIH19IGNpdHk9XCJBYnVraXJcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImx1Y2luZGVsXCIpIH19IGNpdHk9XCJMdWNpbmRlbFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYmx1ZWRqaW5uXCIpIH19IGNpdHk9XCJCbHVlIGRqaW5uXCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJncmVlbmRqaW5uXCIpIH19IGNpdHk9XCJHcmVlbiBkamlublwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCJ9fT5cclxuICAgICAge2NpdHkgPT0gXCJhcmFrXCIgJiYgYXJhay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwib3NhcmlzXCIgJiYgb3NhcmlzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJnYXJyb2dhdFwiICYmIGdhcnJvZ2F0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJhYnVraXJcIiAmJiBhYnVraXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImx1Y2luZGVsXCIgJiYgbHVjaW5kZWwubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImJsdWVkamlublwiICYmIGJsdWVkamlubi5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwiZ3JlZW5kamlublwiICYmIGdyZWVuZGppbm4ubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==