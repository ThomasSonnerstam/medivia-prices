module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\components\\Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Button = ({
  city,
  handleClick
}) => {
  return __jsx("button", {
    onClick: handleClick,
    style: {
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      margin: "0 10px",
      width: "100px",
      height: "40px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, city);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\components\\Item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Item = ({
  item,
  item2
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    style: {
      color: "white",
      width: "250px",
      margin: "5px 0",
      fontSize: "24px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, item), __jsx("li", {
    style: {
      color: "white",
      margin: "5px 0",
      fontSize: "24px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, item2));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Thomas\\Desktop\\Medivia\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const App = () => {
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("arak");
  const arak = [["Halberd", "400gp"], ["Brass armor", "150gp"], ["Morning star", "90gp"], ["Battle hammer", "120gp"], ["Plate armor", "400gp"], ["Steel shield", "80gp"], ["Battle shield", "95gp"]];
  const osaris = [["Double axe", "260gp"], ["Steel helmet", "293gp"]];
  const garrogat = [["Clerical mace", "170gp"], ["Crystal ball", "190gp"], ["Mind stone", "170gp"], ["Iron helmet", "150gp"], ["Viking shield", "85gp"]];
  const abukir = [["Bow", "130gp"], ["Crossbow", "160gp"]];
  const lucindel = [["Plate legs", "115gp"]];
  const bluedjinn = [["Dragon lance", "9000gp"], ["Fire axe", "8000gp"], ["Fire sword", "4000gp"], ["War hammer", "1200gp"], ["Spike sword", "1000gp"], ["Ice rapier", "1000gp"], ["Broad sword", "500gp"], ["Obsidian lance", "500gp"], ["Crown armor", "12 000gp"], ["Blue robe", "10 000gp"], ["Noble armor", "900gp"], ["Royal helmet", "30 000gp"], ["Crusader helmet", "6000gp"], ["Crown helmet", "2500gp"], ["Crown legs", "12 000gp"], ["Scorpid hood", "2300gp"], ["Boots of haste", "30 000gp"], ["Phoenix shield", "16 000gp"], ["Crown shield", "8000gp"], ["Dragon shield", "4000gp"], ["Guardian shield", "2000gp"], ["Watcher shield", "1200gp"]];
  const greendjinn = [["Scimitar", "150gp"], ["Giant sword", "17 000gp"], ["Serpent sword", "900gp"], ["Poison dagger", "50gp"], ["Knight axe", "2000gp"], ["Dragon hammer", "2000gp"], ["Skull staff", "6000gp"], ["Dark armor", "400gp"], ["Dark shield", "166gp"], ["Knight armor", "5000gp"], ["Dark helmet", "250gp"], ["Knight helmet", "2500gp"], ["Warrior helmet", "5000gp"], ["Strange helmet", "500gp"], ["Mystic turban", "150gp"], ["Spider silk armor", "2000gp"], ["Knight legs", "5000gp"], ["Tower shield", "8000gp"], ["Black shield", "800gp"], ["Ancient shield", "900gp"], ["Vampire shield", "15 000gp"]];
  const wulkan = [["Chaos shield", "500 000gp"], ["Magic plate armor", "200 000gp"], ["Red scale armor", "190 000gp"], ["Demon armor", "150 000gp"], ["Magic sword", "150 000gp"], ["Stonecutter axe", "150 000gp"], ["Void staff", "150 000gp"], ["Vanquisher", "100 000gp"], ["Ancient armor", "75 000gp"], ["Demonbone legs", "60 000gp"], ["Golden legs", "50 000gp"], ["Mastermind shield", "50 000gp"], ["Ancient legs", "45 000gp"], ["Demon helmet", "45 000gp"], ["Ancient helmet", "42 000"], ["Ancient sword", "40 000gp"], ["Demonbone armor", "40 000gp"], ["Helmet of the Ancients", "40 000gp"], ["Hellforged shield", "36 000gp"], ["Shakirian blade", "35 000gp"], ["Royal plate armor", "35 000gp"], ["Silver mace", "16 500gp"], ["Unholy plate armor", "15 000gp"], ["Crown boots", "12 000gp"], ["Demonbone boots", "14 000gp"], ["Light armor", "13 000gp"], ["Swinging demolisher", "11 000gp"], ["Torn quicksand boots", "10 000gp"], ["Demonbone helmet", "9000gp"], ["Fiery armor", "7500gp"], ["Fiery helmet", "7500gp"], ["Assassin blade", "6300gp"], ["Bone basher", "5500gp"], ["Unholy halberd", "5500gp"], ["Ancient boots", "5000gp"], ["Shakirian shield", "3000gp"], ["Wooden maul", "2000gp"], ["Drake scale helmet", "850gp"], ["Soul dagger", "200gp"]];
  const aremis = [["Flaming bow", "18 000gp"], ["Poisoned bow", "16 000gp"], ["Bow", "130gp"], ["Elven bow", "500gp"], ["Hunting bow", "1000gp"], ["Shakirian bow", "32 000gp"], ["Crossbow", "160gp"], ["Blazing crossbow", "70 000gp"], ["Enhanced crossbow", "24 000gp"], ["Elven crossbow", "7500gp"], ["Ignited bow", "5000gp"], ["Fiery bow", "46 000gp"], ["Crystallized crossbow", "55 000 gp"], ["Envenomed crossbow", "65 000gp"]];
  return __jsx("section", {
    style: {
      display: "flex",
      width: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      flexDirection: "column"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "Medivia item prices"), __jsx("p", {
    style: {
      fontSize: "20px",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, "Here you can find the best prices in each city/NPC"), __jsx("div", {
    style: {
      marginBottom: "100px",
      display: "flex",
      justifyContent: "space-evenly"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("arak");
    },
    city: "Arak",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("osaris");
    },
    city: "Osaris",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("garrogat");
    },
    city: "Garrogat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("abukir");
    },
    city: "Abukir",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("lucindel");
    },
    city: "Lucindel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("bluedjinn");
    },
    city: "Blue djinn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("greendjinn");
    },
    city: "Green djinn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("wulkan");
    },
    city: "Wulkan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: () => {
      setCity("aremis");
    },
    city: "Aremis",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  })), __jsx("ul", {
    style: {
      listStyle: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, city == "arak" && arak.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }));
  }), city == "osaris" && osaris.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }));
  }), city == "garrogat" && garrogat.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }));
  }), city == "abukir" && abukir.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }));
  }), city == "lucindel" && lucindel.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 13
      }
    }));
  }), city == "bluedjinn" && bluedjinn.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }));
  }), city == "greendjinn" && greendjinn.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }));
  }), city == "wulkan" && wulkan.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 13
      }
    }));
  }), city == "aremis" && aremis.map((item, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }
    }, __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 15
      }
    }), __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item2: item[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        width: "100%",
        height: "1px",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2l0eSIsImhhbmRsZUNsaWNrIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJJdGVtIiwiaXRlbSIsIml0ZW0yIiwiY29sb3IiLCJmb250U2l6ZSIsIkFwcCIsInNldENpdHkiLCJ1c2VTdGF0ZSIsImFyYWsiLCJvc2FyaXMiLCJnYXJyb2dhdCIsImFidWtpciIsImx1Y2luZGVsIiwiYmx1ZWRqaW5uIiwiZ3JlZW5kamlubiIsInd1bGthbiIsImFyZW1pcyIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwibGlzdFN0eWxlIiwibWFwIiwiaSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUN2QixJQUFELEVBQU93QixDQUFQLEtBQWE7QUFDM0MsV0FDRSxNQUFDLDhDQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFUixlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQU0sVUFBSSxFQUFFaEIsSUFBSSxDQUFDLENBQUQsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLFdBQUssRUFBRUEsSUFBSSxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREYsRUFLRTtBQUFLLFdBQUssRUFBRTtBQUFFSCxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFLEtBQXpCO0FBQWdDMkIsdUJBQWUsRUFBRTtBQUFqRCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGO0FBU0QsR0FWb0IsQ0FqR3JCLENBdEJGLENBREY7QUFzSUQsQ0F2UkQ7O0FBeVJlckIsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUM3UkEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQnV0dG9uID0gKHtjaXR5LCBoYW5kbGVDbGlja30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjAgMTBweFwiLCB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiNDBweFwifX0+e2NpdHl9PC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiY29uc3QgSXRlbSA9ICh7aXRlbSwgaXRlbTJ9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxsaSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDogXCIyNTBweFwiLCBtYXJnaW46IFwiNXB4IDBcIiwgZm9udFNpemU6IFwiMjRweFwifX0+e2l0ZW19PC9saT5cclxuICAgICAgPGxpIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpbjogXCI1cHggMFwiLCBmb250U2l6ZTogXCIyNHB4XCIgfX0+e2l0ZW0yfTwvbGk+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07IiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJhcmFrXCIpO1xyXG5cclxuICBjb25zdCBhcmFrID0gW1xyXG4gICAgW1wiSGFsYmVyZFwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiQnJhc3MgYXJtb3JcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIk1vcm5pbmcgc3RhclwiLCBcIjkwZ3BcIl0sXHJcbiAgICBbXCJCYXR0bGUgaGFtbWVyXCIsIFwiMTIwZ3BcIl0sXHJcbiAgICBbXCJQbGF0ZSBhcm1vclwiLCBcIjQwMGdwXCJdLFxyXG4gICAgW1wiU3RlZWwgc2hpZWxkXCIsIFwiODBncFwiXSxcclxuICAgIFtcIkJhdHRsZSBzaGllbGRcIiwgXCI5NWdwXCJdIFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9zYXJpcyA9IFtcclxuICAgIFtcIkRvdWJsZSBheGVcIiwgXCIyNjBncFwiXSxcclxuICAgIFtcIlN0ZWVsIGhlbG1ldFwiLCBcIjI5M2dwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2Fycm9nYXQgPSBbXHJcbiAgICBbXCJDbGVyaWNhbCBtYWNlXCIsIFwiMTcwZ3BcIl0sXHJcbiAgICBbXCJDcnlzdGFsIGJhbGxcIiwgXCIxOTBncFwiXSxcclxuICAgIFtcIk1pbmQgc3RvbmVcIiwgXCIxNzBncFwiXSxcclxuICAgIFtcIklyb24gaGVsbWV0XCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJWaWtpbmcgc2hpZWxkXCIsIFwiODVncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFidWtpciA9IFtcclxuICAgIFtcIkJvd1wiLCBcIjEzMGdwXCJdLFxyXG4gICAgW1wiQ3Jvc3Nib3dcIiwgXCIxNjBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGx1Y2luZGVsID0gW1xyXG4gICAgW1wiUGxhdGUgbGVnc1wiLCBcIjExNWdwXCJdXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYmx1ZWRqaW5uID0gW1xyXG4gICAgW1wiRHJhZ29uIGxhbmNlXCIsIFwiOTAwMGdwXCJdLFxyXG4gICAgW1wiRmlyZSBheGVcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJGaXJlIHN3b3JkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiV2FyIGhhbW1lclwiLCBcIjEyMDBncFwiXSxcclxuICAgIFtcIlNwaWtlIHN3b3JkXCIsIFwiMTAwMGdwXCJdLFxyXG4gICAgW1wiSWNlIHJhcGllclwiLCBcIjEwMDBncFwiXSxcclxuICAgIFtcIkJyb2FkIHN3b3JkXCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJPYnNpZGlhbiBsYW5jZVwiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gYXJtb3JcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIkJsdWUgcm9iZVwiLCBcIjEwIDAwMGdwXCJdLFxyXG4gICAgW1wiTm9ibGUgYXJtb3JcIiwgXCI5MDBncFwiXSxcclxuICAgIFtcIlJveWFsIGhlbG1ldFwiLCBcIjMwIDAwMGdwXCJdLFxyXG4gICAgW1wiQ3J1c2FkZXIgaGVsbWV0XCIsIFwiNjAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gaGVsbWV0XCIsIFwiMjUwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gbGVnc1wiLCBcIjEyIDAwMGdwXCJdLFxyXG4gICAgW1wiU2NvcnBpZCBob29kXCIsIFwiMjMwMGdwXCJdLFxyXG4gICAgW1wiQm9vdHMgb2YgaGFzdGVcIiwgXCIzMCAwMDBncFwiXSxcclxuICAgIFtcIlBob2VuaXggc2hpZWxkXCIsIFwiMTYgMDAwZ3BcIl0sXHJcbiAgICBbXCJDcm93biBzaGllbGRcIiwgXCI4MDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gc2hpZWxkXCIsIFwiNDAwMGdwXCJdLFxyXG4gICAgW1wiR3VhcmRpYW4gc2hpZWxkXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiV2F0Y2hlciBzaGllbGRcIiwgXCIxMjAwZ3BcIl1cclxuICBdO1xyXG5cclxuICBjb25zdCBncmVlbmRqaW5uID0gW1xyXG4gICAgW1wiU2NpbWl0YXJcIiwgXCIxNTBncFwiXSxcclxuICAgIFtcIkdpYW50IHN3b3JkXCIsIFwiMTcgMDAwZ3BcIl0sXHJcbiAgICBbXCJTZXJwZW50IHN3b3JkXCIsIFwiOTAwZ3BcIl0sXHJcbiAgICBbXCJQb2lzb24gZGFnZ2VyXCIsIFwiNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBheGVcIiwgXCIyMDAwZ3BcIl0sXHJcbiAgICBbXCJEcmFnb24gaGFtbWVyXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiU2t1bGwgc3RhZmZcIiwgXCI2MDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIGFybW9yXCIsIFwiNDAwZ3BcIl0sXHJcbiAgICBbXCJEYXJrIHNoaWVsZFwiLCBcIjE2NmdwXCJdLFxyXG4gICAgW1wiS25pZ2h0IGFybW9yXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiRGFyayBoZWxtZXRcIiwgXCIyNTBncFwiXSxcclxuICAgIFtcIktuaWdodCBoZWxtZXRcIiwgXCIyNTAwZ3BcIl0sXHJcbiAgICBbXCJXYXJyaW9yIGhlbG1ldFwiLCBcIjUwMDBncFwiXSxcclxuICAgIFtcIlN0cmFuZ2UgaGVsbWV0XCIsIFwiNTAwZ3BcIl0sXHJcbiAgICBbXCJNeXN0aWMgdHVyYmFuXCIsIFwiMTUwZ3BcIl0sXHJcbiAgICBbXCJTcGlkZXIgc2lsayBhcm1vclwiLCBcIjIwMDBncFwiXSxcclxuICAgIFtcIktuaWdodCBsZWdzXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiVG93ZXIgc2hpZWxkXCIsIFwiODAwMGdwXCJdLFxyXG4gICAgW1wiQmxhY2sgc2hpZWxkXCIsIFwiODAwZ3BcIl0sXHJcbiAgICBbXCJBbmNpZW50IHNoaWVsZFwiLCBcIjkwMGdwXCJdLFxyXG4gICAgW1wiVmFtcGlyZSBzaGllbGRcIiwgXCIxNSAwMDBncFwiXVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHd1bGthbiA9IFtcclxuICAgIFtcIkNoYW9zIHNoaWVsZFwiLCBcIjUwMCAwMDBncFwiXSxcclxuICAgIFtcIk1hZ2ljIHBsYXRlIGFybW9yXCIsIFwiMjAwIDAwMGdwXCJdLFxyXG4gICAgW1wiUmVkIHNjYWxlIGFybW9yXCIsIFwiMTkwIDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb24gYXJtb3JcIiwgXCIxNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJNYWdpYyBzd29yZFwiLCBcIjE1MCAwMDBncFwiXSxcclxuICAgIFtcIlN0b25lY3V0dGVyIGF4ZVwiLCBcIjE1MCAwMDBncFwiXSxcclxuICAgIFtcIlZvaWQgc3RhZmZcIiwgXCIxNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJWYW5xdWlzaGVyXCIsIFwiMTAwIDAwMGdwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBhcm1vclwiLCBcIjc1IDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb25ib25lIGxlZ3NcIiwgXCI2MCAwMDBncFwiXSxcclxuICAgIFtcIkdvbGRlbiBsZWdzXCIsIFwiNTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJNYXN0ZXJtaW5kIHNoaWVsZFwiLCBcIjUwIDAwMGdwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBsZWdzXCIsIFwiNDUgMDAwZ3BcIl0sXHJcbiAgICBbXCJEZW1vbiBoZWxtZXRcIiwgXCI0NSAwMDBncFwiXSxcclxuICAgIFtcIkFuY2llbnQgaGVsbWV0XCIsIFwiNDIgMDAwXCJdLFxyXG4gICAgW1wiQW5jaWVudCBzd29yZFwiLCBcIjQwIDAwMGdwXCJdLFxyXG4gICAgW1wiRGVtb25ib25lIGFybW9yXCIsIFwiNDAgMDAwZ3BcIl0sXHJcbiAgICBbXCJIZWxtZXQgb2YgdGhlIEFuY2llbnRzXCIsIFwiNDAgMDAwZ3BcIl0sXHJcbiAgICBbXCJIZWxsZm9yZ2VkIHNoaWVsZFwiLCBcIjM2IDAwMGdwXCJdLFxyXG4gICAgW1wiU2hha2lyaWFuIGJsYWRlXCIsIFwiMzUgMDAwZ3BcIl0sXHJcbiAgICBbXCJSb3lhbCBwbGF0ZSBhcm1vclwiLCBcIjM1IDAwMGdwXCJdLFxyXG4gICAgW1wiU2lsdmVyIG1hY2VcIiwgXCIxNiA1MDBncFwiXSxcclxuICAgIFtcIlVuaG9seSBwbGF0ZSBhcm1vclwiLCBcIjE1IDAwMGdwXCJdLFxyXG4gICAgW1wiQ3Jvd24gYm9vdHNcIiwgXCIxMiAwMDBncFwiXSxcclxuICAgIFtcIkRlbW9uYm9uZSBib290c1wiLCBcIjE0IDAwMGdwXCJdLFxyXG4gICAgW1wiTGlnaHQgYXJtb3JcIiwgXCIxMyAwMDBncFwiXSxcclxuICAgIFtcIlN3aW5naW5nIGRlbW9saXNoZXJcIiwgXCIxMSAwMDBncFwiXSxcclxuICAgIFtcIlRvcm4gcXVpY2tzYW5kIGJvb3RzXCIsIFwiMTAgMDAwZ3BcIl0sXHJcbiAgICBbXCJEZW1vbmJvbmUgaGVsbWV0XCIsIFwiOTAwMGdwXCJdLFxyXG4gICAgW1wiRmllcnkgYXJtb3JcIiwgXCI3NTAwZ3BcIl0sXHJcbiAgICBbXCJGaWVyeSBoZWxtZXRcIiwgXCI3NTAwZ3BcIl0sXHJcbiAgICBbXCJBc3Nhc3NpbiBibGFkZVwiLCBcIjYzMDBncFwiXSxcclxuICAgIFtcIkJvbmUgYmFzaGVyXCIsIFwiNTUwMGdwXCJdLFxyXG4gICAgW1wiVW5ob2x5IGhhbGJlcmRcIiwgXCI1NTAwZ3BcIl0sXHJcbiAgICBbXCJBbmNpZW50IGJvb3RzXCIsIFwiNTAwMGdwXCJdLFxyXG4gICAgW1wiU2hha2lyaWFuIHNoaWVsZFwiLCBcIjMwMDBncFwiXSxcclxuICAgIFtcIldvb2RlbiBtYXVsXCIsIFwiMjAwMGdwXCJdLFxyXG4gICAgW1wiRHJha2Ugc2NhbGUgaGVsbWV0XCIsIFwiODUwZ3BcIl0sXHJcbiAgICBbXCJTb3VsIGRhZ2dlclwiLCBcIjIwMGdwXCJdXHJcbiAgXVxyXG5cclxuICBjb25zdCBhcmVtaXMgPSBbXHJcbiAgICBbXCJGbGFtaW5nIGJvd1wiLCBcIjE4IDAwMGdwXCJdLFxyXG4gICAgW1wiUG9pc29uZWQgYm93XCIsIFwiMTYgMDAwZ3BcIl0sXHJcbiAgICBbXCJCb3dcIiwgXCIxMzBncFwiXSxcclxuICAgIFtcIkVsdmVuIGJvd1wiLCBcIjUwMGdwXCJdLFxyXG4gICAgW1wiSHVudGluZyBib3dcIiwgXCIxMDAwZ3BcIl0sXHJcbiAgICBbXCJTaGFraXJpYW4gYm93XCIsIFwiMzIgMDAwZ3BcIl0sXHJcbiAgICBbXCJDcm9zc2Jvd1wiLCBcIjE2MGdwXCJdLFxyXG4gICAgW1wiQmxhemluZyBjcm9zc2Jvd1wiLCBcIjcwIDAwMGdwXCJdLFxyXG4gICAgW1wiRW5oYW5jZWQgY3Jvc3Nib3dcIiwgXCIyNCAwMDBncFwiXSxcclxuICAgIFtcIkVsdmVuIGNyb3NzYm93XCIsIFwiNzUwMGdwXCJdLFxyXG4gICAgW1wiSWduaXRlZCBib3dcIiwgXCI1MDAwZ3BcIl0sXHJcbiAgICBbXCJGaWVyeSBib3dcIiwgXCI0NiAwMDBncFwiXSxcclxuICAgIFtcIkNyeXN0YWxsaXplZCBjcm9zc2Jvd1wiLCBcIjU1IDAwMCBncFwiXSxcclxuICAgIFtcIkVudmVub21lZCBjcm9zc2Jvd1wiLCBcIjY1IDAwMGdwXCJdXHJcbiAgXVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9fT5cclxuICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+TWVkaXZpYSBpdGVtIHByaWNlczwvaDE+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5IZXJlIHlvdSBjYW4gZmluZCB0aGUgYmVzdCBwcmljZXMgaW4gZWFjaCBjaXR5L05QQzwvcD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwifX0+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYXJha1wiKSB9fSBjaXR5PVwiQXJha1wiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwib3NhcmlzXCIpIH19IGNpdHk9XCJPc2FyaXNcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImdhcnJvZ2F0XCIpIH19IGNpdHk9XCJHYXJyb2dhdFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYWJ1a2lyXCIpIH19IGNpdHk9XCJBYnVraXJcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImx1Y2luZGVsXCIpIH19IGNpdHk9XCJMdWNpbmRlbFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwiYmx1ZWRqaW5uXCIpIH19IGNpdHk9XCJCbHVlIGRqaW5uXCIgLz5cclxuICAgICAgICA8QnV0dG9uIGhhbmRsZUNsaWNrPXsoKSA9PiB7IHNldENpdHkoXCJncmVlbmRqaW5uXCIpIH19IGNpdHk9XCJHcmVlbiBkamlublwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4geyBzZXRDaXR5KFwid3Vsa2FuXCIpIH19IGNpdHk9XCJXdWxrYW5cIiAvPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eygpID0+IHsgc2V0Q2l0eShcImFyZW1pc1wiKSB9fSBjaXR5PVwiQXJlbWlzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIn19PlxyXG4gICAgICB7Y2l0eSA9PSBcImFyYWtcIiAmJiBhcmFrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJvc2FyaXNcIiAmJiBvc2FyaXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImdhcnJvZ2F0XCIgJiYgZ2Fycm9nYXQubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7Y2l0eSA9PSBcImFidWtpclwiICYmIGFidWtpci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwibHVjaW5kZWxcIiAmJiBsdWNpbmRlbC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwiYmx1ZWRqaW5uXCIgJiYgYmx1ZWRqaW5uLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJncmVlbmRqaW5uXCIgJiYgZ3JlZW5kamlubi5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0gPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW1bMF19PjwvSXRlbT5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtMj17aXRlbVsxXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtjaXR5ID09IFwid3Vsa2FuXCIgJiYgd3Vsa2FuLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbVswXX0+PC9JdGVtPlxyXG4gICAgICAgICAgICAgIDxJdGVtIGl0ZW0yPXtpdGVtWzFdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjFweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2NpdHkgPT0gXCJhcmVtaXNcIiAmJiBhcmVtaXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19ID5cclxuICAgICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtWzBdfT48L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPEl0ZW0gaXRlbTI9e2l0ZW1bMV19PjwvSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==