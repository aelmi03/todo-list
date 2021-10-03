/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    box-sizing: border-box;\n    margin: 0;\n    padding:0;\n}\n\nheader{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    padding:1rem;\n    color:white;\n    background-color: blueviolet;\n}\n\n.main-content{\n    display:flex;\n    flex-flow: row nowrap;\n    min-height: 100vh;\n\n}\n.sidebar{\n    display:flex;\n    flex-flow: column nowrap;\n    padding:1rem 0.4rem;\n    gap:1rem;\n    background-color: rgb(240, 240, 240);\n}\n\n.project{\n    display:flex;\n    transition: all 0.4s ease-in-out;\n    padding:0.5rem;\n    border-radius: 8px;\n}\n.project-list  span{\n    transform: scale(0.5);\n    color:white;\n    border-radius: 8px;\n    background-color: red;\n}\n.project-list > .project{\n   width:100%;\n   border:1px dotted rgb(119, 117, 119);\n   justify-content: space-between;\n   align-items: center;\n   gap:0.15rem;\n}\n.project-list p {\n    font-size: 0.9rem;\n}\n.project:hover, .active-project{\n    background-color: rgb(255, 255, 255);\n}\n.project > .inbox{\n    color:rgb(17, 141, 17)\n}\n.project > .today{\n    color:rgb(6, 88, 240);\n}\n.project > .next-week{\n    color:lightcoral;\n}\nh3,h2{\n    text-align: center;\n    margin-top:1rem;\n}\n\n.tasks-content{\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    padding:0.5rem 0.3rem;\n    flex-grow:1;\n    background-color: rgb(255, 255, 255);\n}\n.sidebar > .project{\n    display:flex;\n    align-items: center;\n    gap:0.9rem;\n}\n\n.add-project{\n    border-radius: 5px;\n    order:1;\n    font-weight: bold;\n    padding:0.2rem 0.5rem;\n    color:black;\n    background-color: white;\n    transition: all 0.4s ease-in-out;\n}\n\n.add-project:hover, .add-task:hover{\n    background-color: black;\n    color:white;\n}\n\n.add-task{\n    transition: all 0.4s ease-in-out;\n    margin-top:2.5rem;\n    border-radius: 5px;\n    font-weight: bold;\n    padding:0.2rem 1.8rem;\n    color:black;\n    background-color: white;\n}\n.project-list{\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    gap:0.8rem;\n}\nli{\n    list-style: none;\n}\n.add-project-modal{\n    display:flex;\n    opacity: 0;\n    flex-flow: column nowrap;\n    padding:1rem 4rem;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    align-items: center;\n    position: absolute;\n    left:50%;\n    top:30%;\n    transition: opacity 0.4s ease-in-out;\n    color:black;\n    transform: translate(-50%,-30%);\n    gap:1rem;\n    border:2px solid rgb(0, 0, 0);\n}\n.add-project-buttons, .add-task-buttons{\n    display:flex;\n    gap:0.8rem;\n}\n.add-project-buttons > button, .add-task-buttons > button{\n    padding:0.5rem 0.6rem; \n    border-radius: 8px;\n    font-size:1rem;\n}\n.add-project-modal > input{\n    border-radius: 6px;\n    padding:0.2rem 0.4rem;\n    outline: none;\n}\n.add-project-modal > h3{\n    margin-top: 0;\n}\n.project-cancel, .task-cancel{\n    background-color: rgb(255, 0, 0);\n    color:white;\n}\n.project-add, .task-add{\n    background-color: rgb(255, 255, 255);\n    color:rgb(10, 4, 4);\n    transition: all 0.4s ease-in-out;\n}\n.project-add:hover, .task-add:hover{\n    color:White;\n    background-color:rgb(255, 174, 0);\n}\n.tasks-list{\n    margin-top:2rem;\n    display:flex;\n    width:100%;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap:1rem;\n}\n.task{\n    font-size:0.8rem;\n    display:flex;\n    justify-content: space-between;\n    gap:0.4rem;\n    padding:0.3rem 0.2rem;\n    width:95%;\n    max-width:40rem;\n    align-items: center;\n    border: 1px solid rgb(223, 223, 223);\n    border-radius: 6px;\n}\n.task-completed > p{\n    color:grey;\n    text-decoration: line-through;\n}\n.task > p{\n    flex-grow:1;\n}\n.task-icons{\n    display: flex;\n    gap:0.15rem;\n    transform: scale(0.8);\n    transition:all 0.4s ease-in-out\n}\n\n.task-icons > span{\n    padding:0.15rem;\n    border-radius: 5px;\n\n}\n\n.task > input {\n    transform:scale(0.7);\n}\n.edit-task-icon:hover, .delete-task-icon:hover{\n    background-color: rgb(233, 233, 233);\n}\n.priority-icon{\n    color:rgb(255, 166, 0);\n}\n.delete-task-icon{\n    color:red;\n}\n.add-task-modal{\n    background-color: rgb(255, 255, 255);\n    border:2px solid black;\n    padding:1.5rem 2.5rem;\n    border-radius: 5px;\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap:1rem;\n    opacity: 1;\n    transition: all 0.5s ease-in-out;\n    position: absolute;\n    left:50%;\n    top:30%;\n    color:black;\n    transform: translate(-50%,-30%);\n}\n.add-task-buttons{\n    border-style: none;\n}\n.add-task-buttons > button{\n    padding:0.7rem 0.9rem;\n}\n\n.add-task-modal > input{\n    border-radius: 6px;\n    padding:0.25rem 0.4rem;\n    outline: none;\n}\ntextarea[id = \"description\"]{\n  padding:0rem 2rem 3rem 2rem;\n  outline: none;\n  border-radius: 5px;\n}\nselect{\n    padding:0.4rem 1.9rem;\n    border-radius: 2px;\n    background-color: white;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,QAAQ;IACR,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB;AACA;GACG,UAAU;GACV,oCAAoC;GACpC,8BAA8B;GAC9B,mBAAmB;GACnB,WAAW;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,oCAAoC;AACxC;AACA;IACI;AACJ;AACA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,oCAAoC;AACxC;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,iBAAiB;IACjB,qBAAqB;IACrB,WAAW;IACX,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,iBAAiB;IACjB,oCAAoC;IACpC,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,oCAAoC;IACpC,WAAW;IACX,+BAA+B;IAC/B,QAAQ;IACR,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,gCAAgC;IAChC,WAAW;AACf;AACA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,gCAAgC;AACpC;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,UAAU;IACV,qBAAqB;IACrB,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,6BAA6B;AACjC;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,WAAW;IACX,qBAAqB;IACrB;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;;AAEtB;;AAEA;IACI,oBAAoB;AACxB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,oCAAoC;IACpC,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,QAAQ;IACR,UAAU;IACV,gCAAgC;IAChC,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,WAAW;IACX,+BAA+B;AACnC;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;AACjB;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;AAC3B","sourcesContent":["*, *::before, *::after{\n    box-sizing: border-box;\n    margin: 0;\n    padding:0;\n}\n\nheader{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    padding:1rem;\n    color:white;\n    background-color: blueviolet;\n}\n\n.main-content{\n    display:flex;\n    flex-flow: row nowrap;\n    min-height: 100vh;\n\n}\n.sidebar{\n    display:flex;\n    flex-flow: column nowrap;\n    padding:1rem 0.4rem;\n    gap:1rem;\n    background-color: rgb(240, 240, 240);\n}\n\n.project{\n    display:flex;\n    transition: all 0.4s ease-in-out;\n    padding:0.5rem;\n    border-radius: 8px;\n}\n.project-list  span{\n    transform: scale(0.5);\n    color:white;\n    border-radius: 8px;\n    background-color: red;\n}\n.project-list > .project{\n   width:100%;\n   border:1px dotted rgb(119, 117, 119);\n   justify-content: space-between;\n   align-items: center;\n   gap:0.15rem;\n}\n.project-list p {\n    font-size: 0.9rem;\n}\n.project:hover, .active-project{\n    background-color: rgb(255, 255, 255);\n}\n.project > .inbox{\n    color:rgb(17, 141, 17)\n}\n.project > .today{\n    color:rgb(6, 88, 240);\n}\n.project > .next-week{\n    color:lightcoral;\n}\nh3,h2{\n    text-align: center;\n    margin-top:1rem;\n}\n\n.tasks-content{\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    padding:0.5rem 0.3rem;\n    flex-grow:1;\n    background-color: rgb(255, 255, 255);\n}\n.sidebar > .project{\n    display:flex;\n    align-items: center;\n    gap:0.9rem;\n}\n\n.add-project{\n    border-radius: 5px;\n    order:1;\n    font-weight: bold;\n    padding:0.2rem 0.5rem;\n    color:black;\n    background-color: white;\n    transition: all 0.4s ease-in-out;\n}\n\n.add-project:hover, .add-task:hover{\n    background-color: black;\n    color:white;\n}\n\n.add-task{\n    transition: all 0.4s ease-in-out;\n    margin-top:2.5rem;\n    border-radius: 5px;\n    font-weight: bold;\n    padding:0.2rem 1.8rem;\n    color:black;\n    background-color: white;\n}\n.project-list{\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    gap:0.8rem;\n}\nli{\n    list-style: none;\n}\n.add-project-modal{\n    display:flex;\n    opacity: 0;\n    flex-flow: column nowrap;\n    padding:1rem 4rem;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    align-items: center;\n    position: absolute;\n    left:50%;\n    top:30%;\n    transition: opacity 0.4s ease-in-out;\n    color:black;\n    transform: translate(-50%,-30%);\n    gap:1rem;\n    border:2px solid rgb(0, 0, 0);\n}\n.add-project-buttons, .add-task-buttons{\n    display:flex;\n    gap:0.8rem;\n}\n.add-project-buttons > button, .add-task-buttons > button{\n    padding:0.5rem 0.6rem; \n    border-radius: 8px;\n    font-size:1rem;\n}\n.add-project-modal > input{\n    border-radius: 6px;\n    padding:0.2rem 0.4rem;\n    outline: none;\n}\n.add-project-modal > h3{\n    margin-top: 0;\n}\n.project-cancel, .task-cancel{\n    background-color: rgb(255, 0, 0);\n    color:white;\n}\n.project-add, .task-add{\n    background-color: rgb(255, 255, 255);\n    color:rgb(10, 4, 4);\n    transition: all 0.4s ease-in-out;\n}\n.project-add:hover, .task-add:hover{\n    color:White;\n    background-color:rgb(255, 174, 0);\n}\n.tasks-list{\n    margin-top:2rem;\n    display:flex;\n    width:100%;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap:1rem;\n}\n.task{\n    font-size:0.8rem;\n    display:flex;\n    justify-content: space-between;\n    gap:0.4rem;\n    padding:0.3rem 0.2rem;\n    width:95%;\n    max-width:40rem;\n    align-items: center;\n    border: 1px solid rgb(223, 223, 223);\n    border-radius: 6px;\n}\n.task-completed > p{\n    color:grey;\n    text-decoration: line-through;\n}\n.task > p{\n    flex-grow:1;\n}\n.task-icons{\n    display: flex;\n    gap:0.15rem;\n    transform: scale(0.8);\n    transition:all 0.4s ease-in-out\n}\n\n.task-icons > span{\n    padding:0.15rem;\n    border-radius: 5px;\n\n}\n\n.task > input {\n    transform:scale(0.7);\n}\n.edit-task-icon:hover, .delete-task-icon:hover{\n    background-color: rgb(233, 233, 233);\n}\n.priority-icon{\n    color:rgb(255, 166, 0);\n}\n.delete-task-icon{\n    color:red;\n}\n.add-task-modal{\n    background-color: rgb(255, 255, 255);\n    border:2px solid black;\n    padding:1.5rem 2.5rem;\n    border-radius: 5px;\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap:1rem;\n    opacity: 1;\n    transition: all 0.5s ease-in-out;\n    position: absolute;\n    left:50%;\n    top:30%;\n    color:black;\n    transform: translate(-50%,-30%);\n}\n.add-task-buttons{\n    border-style: none;\n}\n.add-task-buttons > button{\n    padding:0.7rem 0.9rem;\n}\n\n.add-task-modal > input{\n    border-radius: 6px;\n    padding:0.25rem 0.4rem;\n    outline: none;\n}\ntextarea[id = \"description\"]{\n  padding:0rem 2rem 3rem 2rem;\n  outline: none;\n  border-radius: 5px;\n}\nselect{\n    padding:0.4rem 1.9rem;\n    border-radius: 2px;\n    background-color: white;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/application-logic/Classes.js":
/*!******************************************!*\
  !*** ./src/application-logic/Classes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Task = (taskTitle, taskDescription, taskDueDate, taskPriority, isCompleted, taskID) => {
    let title = taskTitle;
    let description = taskDescription;
    let dueDate = taskDueDate;
    let priority = taskPriority;
    let status = isCompleted;
    let ID = taskID;
    let project = null;

    const getTitle = () => {
        return title;
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getDescription = () => {
        return description;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const getDueDate = ()=>{
        return dueDate;
    }
    const setDueDate = (newDate) => {
        dueDate = newDate;
    }
    const getPriority = () => {
        return priority;
    }
    
    const setPriority = (newPriority) => {
        priority = newPriority;
    }

    const getCompletionStatus = () => {
        return status;
    }

    const setCompletionStatus = (newStatus) => {
        status = newStatus;
    }

    const getID = () => {
        return ID;
    }

    const setID = (id) => {
        ID = id;
    }
    const getProject = () => {
        return project;
    }
    const setProject = (newProject) => {
        project = newProject;
    }
    const toString = () => {
        return `task : ${title}, description : ${description},
         date : ${dueDate}, priority : ${priority}, ID : ${ID}`;
    }

    

    return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, 
        getCompletionStatus, setCompletionStatus, getID, setID, getProject , setProject, toString };
}

const Project = (title) => {
    const tasks = [];
    const projectTitle = title;
    const getProjectName = () => {
        return projectTitle;
    }
    const setProjectName = (newProjectTitle) => {
        projectTitle = newProjectTitle;
    }
    const getAllTasks = () => {
        return tasks;
    }
    const findTaskByID = (id) => {
       return tasks.filter(task => task.getID() == id)[0];
    }
    
    const addTask = (task) => {
       tasks.push(task);
    }

    const updateTaskByID = (id, newTask) => {
       const updatedTask = findTaskByID(id);
       Object.assign(updatedTask, newTask);
    }

    const deleteTaskByID = (id) => {
        const task = findTaskByID(id);
        if(!task) return;
        const position = tasks.indexOf(task);
        const newArray = tasks.splice(position,1);
        tasks.slice(0).push(...newArray);
    }

    return { getAllTasks, getProjectName, setProjectName, findTaskByID, addTask,updateTaskByID,deleteTaskByID };

}


/***/ }),

/***/ "./src/application-logic/data.js":
/*!***************************************!*\
  !*** ./src/application-logic/data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/application-logic/pubsub.js");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes */ "./src/application-logic/Classes.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar */ "./src/components/sidebar.js");



const Data = (() => {
    const projectArray = [];
    const addProject = (projectName) => {
        const newProject = (0,_Classes__WEBPACK_IMPORTED_MODULE_1__.Project)(projectName);
        projectArray.push(newProject);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectUpdated", null);
    }
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectCreated", addProject);
    const getProjects = () => {
        return projectArray;
    }
    const deleteProject = (projectName) => {
        const projectToBeDeleted = getProject(projectName);
        const newProjectArray = projectArray.filter(project => project !== projectToBeDeleted);
        projectArray.splice(0,projectArray.length);
        projectArray.push(...newProjectArray);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectUpdated", null );
    }
    const getProject = (projectName) => {
        for(let i = 0; i < projectArray.length; i++){
            if(projectArray[i].getProjectName() === projectName){
               return projectArray[i];
            }
        }
    }
    const addNewTaskToData = (taskAndProjectInArray) => {
       const newTask = taskAndProjectInArray[0];
       newTask.setID(createUniqueID());
       const project = taskAndProjectInArray[1];
       newTask.setProject(project);
       project.addTask(newTask); 
       _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", getProject(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBarModule.currentSelectedProject()));
    }
    const deleteTaskFromData = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        project.deleteTaskByID(taskID);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", getProject(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBarModule.currentSelectedProject()));
    }
    const changeTaskCompletionStatus = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        const task = project.findTaskByID(taskID);
        const currentCompletionStatus = task.getCompletionStatus();
        task.setCompletionStatus((currentCompletionStatus === false) ? true : false);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", getProject(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBarModule.currentSelectedProject()));
        
    }

    const updateTask = (taskAndUpdatedData) => {
        const task = taskAndUpdatedData[0];
        const title = taskAndUpdatedData[1];
        const description = taskAndUpdatedData[2];
        const dueDate = taskAndUpdatedData[3];
        const priority = taskAndUpdatedData[4]; 
        task.setTitle(title);
        task.setDescription(description);
        task.setDueDate(dueDate);
        task.setPriority(priority);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", getProject(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBarModule.currentSelectedProject()));
    }
    const createUniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("taskUpdated", updateTask);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("taskCompletionStatusChanged", changeTaskCompletionStatus);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectDeleted", deleteProject);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("taskDeleted", deleteTaskFromData);
    return {getProjects};
})();


/***/ }),

/***/ "./src/application-logic/pubsub.js":
/*!*****************************************!*\
  !*** ./src/application-logic/pubsub.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pubsub": () => (/* binding */ Pubsub)
/* harmony export */ });
const Pubsub = {
    events : {},

    subscribe : function(eventName, eventHandler){
        console.log(`${eventName} is subscribing to ${eventHandler}`);
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(eventHandler);
    },

    publish : function(eventName, eventData) {
        console.log(`${eventName} is publishing to ${eventData}`);
        if(this.events[eventName]){
            this.events[eventName].forEach(eventHandler => eventHandler(eventData));  
        }
    },
    unsubscribe : function(eventName, eventHandler){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(eventName !== eventHandler);
        }
    }
};


/***/ }),

/***/ "./src/components/mainContent.js":
/*!***************************************!*\
  !*** ./src/components/mainContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContentModule": () => (/* binding */ mainContentModule)
/* harmony export */ });
/* harmony import */ var _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../application-logic/pubsub */ "./src/application-logic/pubsub.js");


const mainContentModule = (() => {
    const tasksContainerDiv = document.querySelector(".tasks-content");
    const render = (project) => {
        tasksContainerDiv.textContent = "";
        const headerTitle = document.createElement("h2");
        headerTitle.textContent = project.getProjectName();
        const addTaskButton = document.createElement("button");
        addTaskButton.textContent = "+ Add Task";
        addTaskButton.classList.add("add-task");
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("tasks-list");        
        project.getAllTasks().forEach(task => createTaskDiv(task, taskListContainer));
        tasksContainerDiv.appendChild(headerTitle);
        if(project.getProjectName() !== "Today" && project.getProjectName() !== "Next Week"){
            tasksContainerDiv.appendChild(addTaskButton);
            addTaskButton.addEventListener("click", (e) => _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("addTaskButtonClicked", project ));
        }
        tasksContainerDiv.appendChild(taskListContainer);
    }
    _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectClickedOrUpdated", render);
    const createTaskDiv = (task, container) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.setAttribute("task-id", task.getID());
        taskDiv.setAttribute("project", task.getProject().getProjectName());
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.addEventListener('click', makeTaskComplete);
        if(task.getCompletionStatus() === true){
            taskDiv.classList.add("task-completed");
            checkBox.checked = true;
        }
        const taskTitle = document.createElement("p");
        taskTitle.textContent = task.getTitle();
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("task-icons");
        addIcons(iconContainer, task);
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(iconContainer);
        container.appendChild(taskDiv);
    }
    const addIcons = (container, task) => {
        const prioritySpan = document.createElement("span");
        prioritySpan.classList.add("material-icons-outlined");
        prioritySpan.classList.add("priority-icon");
        prioritySpan.textContent = "trip_origin";
        addColorToSpan(prioritySpan, task.getPriority());
        const editSpan = document.createElement("span");
        editSpan.classList.add("material-icons-outlined");
        editSpan.classList.add("edit-task-icon");
        editSpan.textContent = "edit";
        editTask(editSpan, task);
        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add("material-icons-outlined");
        deleteSpan.classList.add("delete-task-icon");
        deleteSpan.textContent = "delete";
        deleteSpan.addEventListener("click", deleteTask);
        container.appendChild(prioritySpan);
        container.appendChild(editSpan);
        container.appendChild(deleteSpan);
    }
    const addColorToSpan = (span, priority) => {
        if(priority === "High"){
            span.style.color = "red";
        }
        else if(priority === "Medium"){
            span.style.color = "orange";
        }
        else if (priority === "Low"){
            span.style.color = "green";
        }
    }
    const editTask = (editSpan, task) => {
        editSpan.addEventListener("click", function(){
            _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("editTaskClicked", task);
        })
    } 
    const deleteTask = (e) => {
        const taskDiv = e.target.parentNode.parentNode;
        const taskID = taskDiv.getAttribute("task-id");
        const projectTaskBelongsTo = taskDiv.getAttribute("project");
        _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("taskDeleted", [taskID, projectTaskBelongsTo]);
    }

    const makeTaskComplete = (e) => {
        const taskDiv = e.target.parentNode;
        const taskID = taskDiv.getAttribute("task-id");
        const projectTaskBelongsTo = taskDiv.getAttribute("project");
        _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("taskCompletionStatusChanged", [taskID, projectTaskBelongsTo]);
    }
    return {render};
})();


/***/ }),

/***/ "./src/components/modals.js":
/*!**********************************!*\
  !*** ./src/components/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectModal": () => (/* binding */ addProjectModal),
/* harmony export */   "mainModal": () => (/* binding */ mainModal),
/* harmony export */   "addTaskModal": () => (/* binding */ addTaskModal),
/* harmony export */   "editTaskModal": () => (/* binding */ editTaskModal)
/* harmony export */ });
/* harmony import */ var _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-logic/pubsub */ "./src/application-logic/pubsub.js");
/* harmony import */ var _application_logic_Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application-logic/Classes */ "./src/application-logic/Classes.js");


const addProjectModal = (() => {
    console.log(_application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub);
    const modal = document.querySelector(".add-project-modal");
    const addProjectButton = document.querySelector(".add-project");
    const modalText = document.querySelector("#add-project-input");
    const showModal = () => {
        (modal.style.opacity == "1") ? modal.style.opacity = "0" : modal.style.opacity = "1";
    }
    const closeModalButton = document.querySelector(".project-cancel");
    const closeModal = (e) => {
        modal.style.opacity = "0";
        modalText.value = "";
    }
    const addNewProjectButton = document.querySelector(".project-add");
    console.log(addNewProjectButton);
    const addNewProject = (e) => {
        if(!(modalText.value)) return;
        _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectCreated", modalText.value);
        closeModal();
    }
    addNewProjectButton.addEventListener("click", addNewProject);
    closeModalButton.addEventListener("click", closeModal);
    addProjectButton.addEventListener("click", showModal);
    return {showModal};
})();

const mainModal = (() => {
    const createModal = (modalName, secondButtonName) => {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("add-task-modal");
        const headerOfModal = document.createElement("h2");
        headerOfModal.textContent = modalName;
        const titleLabel = createLabel("title", "Title:");
        const titleInput = createInput("text", "title", "title");
        titleInput.setAttribute("maxlength", "20");
        const descriptionLabel = createLabel("description", "Description:");
        const descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("id", "description");
        descriptionInput.setAttribute("name", "description");
        const dueDateLabel = createLabel("due-date", "Due Date:");
        const dueDateInput = createInput("date","due-date","due-date");
        const priorityLabel = createLabel("priority","Priority:");
        const prioritySelecter = document.createElement("select");
        prioritySelecter.setAttribute("name", "priority");
        prioritySelecter.setAttribute("id", "priority");
        const lowPriorityOption = createOptionElement("Low", "Low");
        const mediumPriorityOption = createOptionElement("Medium", "Medium");
        const highPriorityOption = createOptionElement("High", "High");
        appendAllChildren(prioritySelecter, [lowPriorityOption,mediumPriorityOption,highPriorityOption]);
        const buttonContainer = document.createElement("button");
        buttonContainer.classList.add("add-task-buttons");
        const closeButton = createButton("task-cancel", "Cancel");
        const addButton = createButton("task-add",secondButtonName);
        closeButton.addEventListener("click", deleteModal);
        appendAllChildren(buttonContainer, [closeButton, addButton]);
        appendAllChildren(mainDiv, [headerOfModal, titleLabel, titleInput, descriptionLabel, descriptionInput, 
                            dueDateLabel, dueDateInput, priorityLabel, prioritySelecter, buttonContainer]);
        document.body.appendChild(mainDiv);
    }
    const createInput = (type, id, nameAttribute) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", nameAttribute);
        return input;
    }
    const createLabel = (forAttribute, text) => {
        const label = document.createElement("label");
        label.setAttribute("for", forAttribute);
        label.textContent = text;
        return label;
    }
    const createOptionElement = (value,text) => {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.textContent = text;
        return option;
    }
    const createButton = (className, text) => {
        const button = document.createElement("button");
        button.classList.add(className);
        button.textContent = text;
        return button;
    }
    const appendAllChildren = (container, arrayOfChildren) => {
        for(let i =0; i < arrayOfChildren.length; i++){
            container.appendChild(arrayOfChildren[i]);
        }
    }

    const deleteModal = (e) => {
        const mainDiv = e.target.parentNode.parentNode;
        mainDiv.style.opacity = "0";
        setTimeout(function(){ 
            document.body.removeChild(e.target.parentNode.parentNode);
         }, 550);

       
    }
    return{createModal, deleteModal};

})();

const addTaskModal = (() => {
    const createAddModal = (project) => {
        mainModal.createModal("New Task", "Add Task");
        const addTaskButton = document.querySelector(".task-add");
        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#due-date");
        const priorityInput = document.querySelector("#priority");
        addTaskButton.addEventListener("click", function(e){
            const newTask = (0,_application_logic_Classes__WEBPACK_IMPORTED_MODULE_1__.Task)(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, 
            false);
            _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("newTaskAdded", [newTask, project]);
            mainModal.deleteModal(e);
        });
    
    }
    _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("addTaskButtonClicked", createAddModal);
    return {createAddModal};
})();

const editTaskModal = (() => {
    const createEditModal = (task) => {
        mainModal.createModal("Edit Task", "Update Task");
        populateEditModal(task);
        const addTaskButton = document.querySelector(".task-add");
        addTaskButton.addEventListener("click", function(e){
            _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("taskUpdated", [task, getTitleInputValue(), getDescriptionInputValue(),getDueDateInputValue(),  getPriorityInputValue()]);
            mainModal.deleteModal(e);
        });
    }
    const populateEditModal = (task) => {
        const titleInput = document.querySelector("#title");
        titleInput.value = task.getTitle();
        const descriptionInput = document.querySelector("#description");
        descriptionInput.value = task.getDescription();
        const dueDateInput = document.querySelector("#due-date");
        dueDateInput.value = task.getDueDate();
        const priorityInput = document.querySelector("#priority");
        priorityInput.value = task.getPriority();
    }
    const getTitleInputValue = () => {
        const titleInput = document.querySelector("#title");
        return titleInput.value;
    }
    const getDescriptionInputValue = () => {
        const descriptionInput = document.querySelector("#description");
        return descriptionInput.value;
    }
    const getDueDateInputValue = () => {
        const dueDateInput = document.querySelector("#due-date");
        return dueDateInput.value;
    }
    const getPriorityInputValue = () => {
        const priorityInput = document.querySelector("#priority");
        return priorityInput.value;
    }
    _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("editTaskClicked", createEditModal);
})();







/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideBarModule": () => (/* binding */ sideBarModule)
/* harmony export */ });
/* harmony import */ var _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../application-logic/pubsub */ "./src/application-logic/pubsub.js");
/* harmony import */ var _application_logic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../application-logic/data */ "./src/application-logic/data.js");




const sideBarModule = (() => {
    const render =  () => {
        console.log("HEYY");
        const projectListContainer = document.querySelector(".project-list");
        projectListContainer.textContent = "";
        const arrayOfProjects = _application_logic_data__WEBPACK_IMPORTED_MODULE_1__.Data.getProjects();
        console.log(arrayOfProjects);
        arrayOfProjects.forEach(project => createProjectDiv(project, projectListContainer));
    }

    const createProjectDiv = (project, projectListContainer) => {
       const mainDiv = document.createElement("div");
       mainDiv.addEventListener("click", (e) => _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", project)); 
       mainDiv.classList.add("project");
       mainDiv.addEventListener("click", makeActiveProject);
       mainDiv.setAttribute("project-name", project.getProjectName());
       const projectTitle = document.createElement("p");
       projectTitle.textContent = project.getProjectName();
       const deleteButton = document.createElement("span");
       deleteButton.classList.add("material-icons-outlined");
       deleteButton.textContent = "close";
       deleteButton.addEventListener("click", (e) => _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectDeleted", project.getProjectName()));
       mainDiv.appendChild(projectTitle);
       mainDiv.appendChild(deleteButton);
       projectListContainer.appendChild(mainDiv);
    }
    const makeActiveProject = (e) => {
        let mainDiv = e.target;
        if(mainDiv.nodeName.toLowerCase() == "p"){
            mainDiv = mainDiv.parentNode;
        }
        makeAllProjectNotActive();
        console.log("ADDING ACTIVE CLASS");
        mainDiv.classList.add("active-project");
    }
    const makeAllProjectNotActive = () => {
        const allProjectDivs = document.querySelectorAll(".project");
        allProjectDivs.forEach(project => {
            if(project.classList.contains(("active-project"))){
                project.classList.remove("active-project");
            }
        });
    }
    const currentSelectedProject = () => {
        const currentProject = document.querySelector(".active-project");
        return currentProject.getAttribute("project-name");
    }
    _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectUpdated", render);
    return {currentSelectedProject};
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _application_logic_Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-logic/Classes */ "./src/application-logic/Classes.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modals */ "./src/components/modals.js");
/* harmony import */ var _application_logic_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-logic/data */ "./src/application-logic/data.js");
/* harmony import */ var _components_mainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mainContent */ "./src/components/mainContent.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWdCO0FBQ3BCLFlBQVk7QUFDWixDQUFDOzs7Ozs7O1VDckREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNxQztBQUNRO0FBQ3BCO0FBQ2U7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24tbG9naWMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24tbG9naWMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24tbG9naWMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcGFkZGluZzoxcmVtIDAuNHJlbTtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIHBhZGRpbmc6MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWxpc3QgIHNwYW57XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ucHJvamVjdC1saXN0ID4gLnByb2plY3R7XFxuICAgd2lkdGg6MTAwJTtcXG4gICBib3JkZXI6MXB4IGRvdHRlZCByZ2IoMTE5LCAxMTcsIDExOSk7XFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZ2FwOjAuMTVyZW07XFxufVxcbi5wcm9qZWN0LWxpc3QgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4ucHJvamVjdDpob3ZlciwgLmFjdGl2ZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5wcm9qZWN0ID4gLmluYm94e1xcbiAgICBjb2xvcjpyZ2IoMTcsIDE0MSwgMTcpXFxufVxcbi5wcm9qZWN0ID4gLnRvZGF5e1xcbiAgICBjb2xvcjpyZ2IoNiwgODgsIDI0MCk7XFxufVxcbi5wcm9qZWN0ID4gLm5leHQtd2Vla3tcXG4gICAgY29sb3I6bGlnaHRjb3JhbDtcXG59XFxuaDMsaDJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbn1cXG5cXG4udGFza3MtY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MC41cmVtIDAuM3JlbTtcXG4gICAgZmxleC1ncm93OjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnNpZGViYXIgPiAucHJvamVjdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MC45cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3JkZXI6MTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDAuNXJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyLCAuYWRkLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLXRvcDoyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDEuOHJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvamVjdC1saXN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDowLjhyZW07XFxufVxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwYWRkaW5nOjFyZW0gNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0b3A6MzAlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0zMCUpO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcbi5hZGQtcHJvamVjdC1idXR0b25zLCAuYWRkLXRhc2stYnV0dG9uc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6MC44cmVtO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbiwgLmFkZC10YXNrLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHBhZGRpbmc6MC41cmVtIDAuNnJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOjFyZW07XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbCA+IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDAuNHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFsID4gaDN7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9qZWN0LWNhbmNlbCwgLnRhc2stY2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcbi5wcm9qZWN0LWFkZCwgLnRhc2stYWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGNvbG9yOnJnYigxMCwgNCwgNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdC1hZGQ6aG92ZXIsIC50YXNrLWFkZDpob3ZlcntcXG4gICAgY29sb3I6V2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTc0LCAwKTtcXG59XFxuLnRhc2tzLWxpc3R7XFxuICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxcmVtO1xcbn1cXG4udGFza3tcXG4gICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDowLjRyZW07XFxuICAgIHBhZGRpbmc6MC4zcmVtIDAuMnJlbTtcXG4gICAgd2lkdGg6OTUlO1xcbiAgICBtYXgtd2lkdGg6NDByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4udGFzay1jb21wbGV0ZWQgPiBwe1xcbiAgICBjb2xvcjpncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2sgPiBwe1xcbiAgICBmbGV4LWdyb3c6MTtcXG59XFxuLnRhc2staWNvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDowLjE1cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246YWxsIDAuNHMgZWFzZS1pbi1vdXRcXG59XFxuXFxuLnRhc2staWNvbnMgPiBzcGFue1xcbiAgICBwYWRkaW5nOjAuMTVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLnRhc2sgPiBpbnB1dCB7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjcpO1xcbn1cXG4uZWRpdC10YXNrLWljb246aG92ZXIsIC5kZWxldGUtdGFzay1pY29uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxufVxcbi5wcmlvcml0eS1pY29ue1xcbiAgICBjb2xvcjpyZ2IoMjU1LCAxNjYsIDApO1xcbn1cXG4uZGVsZXRlLXRhc2staWNvbntcXG4gICAgY29sb3I6cmVkO1xcbn1cXG4uYWRkLXRhc2stbW9kYWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzoxLjVyZW0gMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRvcDozMCU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0zMCUpO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uc3tcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjdyZW0gMC45cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOjAuMjVyZW0gMC40cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG50ZXh0YXJlYVtpZCA9IFxcXCJkZXNjcmlwdGlvblxcXCJde1xcbiAgcGFkZGluZzowcmVtIDJyZW0gM3JlbSAycmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuc2VsZWN0e1xcbiAgICBwYWRkaW5nOjAuNHJlbSAxLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtHQUNHLFVBQVU7R0FDVixvQ0FBb0M7R0FDcEMsOEJBQThCO0dB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O0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcGFkZGluZzoxcmVtIDAuNHJlbTtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIHBhZGRpbmc6MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWxpc3QgIHNwYW57XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ucHJvamVjdC1saXN0ID4gLnByb2plY3R7XFxuICAgd2lkdGg6MTAwJTtcXG4gICBib3JkZXI6MXB4IGRvdHRlZCByZ2IoMTE5LCAxMTcsIDExOSk7XFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZ2FwOjAuMTVyZW07XFxufVxcbi5wcm9qZWN0LWxpc3QgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4ucHJvamVjdDpob3ZlciwgLmFjdGl2ZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5wcm9qZWN0ID4gLmluYm94e1xcbiAgICBjb2xvcjpyZ2IoMTcsIDE0MSwgMTcpXFxufVxcbi5wcm9qZWN0ID4gLnRvZGF5e1xcbiAgICBjb2xvcjpyZ2IoNiwgODgsIDI0MCk7XFxufVxcbi5wcm9qZWN0ID4gLm5leHQtd2Vla3tcXG4gICAgY29sb3I6bGlnaHRjb3JhbDtcXG59XFxuaDMsaDJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbn1cXG5cXG4udGFza3MtY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MC41cmVtIDAuM3JlbTtcXG4gICAgZmxleC1ncm93OjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnNpZGViYXIgPiAucHJvamVjdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MC45cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3JkZXI6MTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDAuNXJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyLCAuYWRkLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLXRvcDoyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDEuOHJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvamVjdC1saXN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDowLjhyZW07XFxufVxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwYWRkaW5nOjFyZW0gNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0b3A6MzAlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0zMCUpO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcbi5hZGQtcHJvamVjdC1idXR0b25zLCAuYWRkLXRhc2stYnV0dG9uc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6MC44cmVtO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbiwgLmFkZC10YXNrLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHBhZGRpbmc6MC41cmVtIDAuNnJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOjFyZW07XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbCA+IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6MC4ycmVtIDAuNHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFsID4gaDN7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9qZWN0LWNhbmNlbCwgLnRhc2stY2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcbi5wcm9qZWN0LWFkZCwgLnRhc2stYWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGNvbG9yOnJnYigxMCwgNCwgNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdC1hZGQ6aG92ZXIsIC50YXNrLWFkZDpob3ZlcntcXG4gICAgY29sb3I6V2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTc0LCAwKTtcXG59XFxuLnRhc2tzLWxpc3R7XFxuICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxcmVtO1xcbn1cXG4udGFza3tcXG4gICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDowLjRyZW07XFxuICAgIHBhZGRpbmc6MC4zcmVtIDAuMnJlbTtcXG4gICAgd2lkdGg6OTUlO1xcbiAgICBtYXgtd2lkdGg6NDByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4udGFzay1jb21wbGV0ZWQgPiBwe1xcbiAgICBjb2xvcjpncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2sgPiBwe1xcbiAgICBmbGV4LWdyb3c6MTtcXG59XFxuLnRhc2staWNvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDowLjE1cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246YWxsIDAuNHMgZWFzZS1pbi1vdXRcXG59XFxuXFxuLnRhc2staWNvbnMgPiBzcGFue1xcbiAgICBwYWRkaW5nOjAuMTVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLnRhc2sgPiBpbnB1dCB7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjcpO1xcbn1cXG4uZWRpdC10YXNrLWljb246aG92ZXIsIC5kZWxldGUtdGFzay1pY29uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxufVxcbi5wcmlvcml0eS1pY29ue1xcbiAgICBjb2xvcjpyZ2IoMjU1LCAxNjYsIDApO1xcbn1cXG4uZGVsZXRlLXRhc2staWNvbntcXG4gICAgY29sb3I6cmVkO1xcbn1cXG4uYWRkLXRhc2stbW9kYWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzoxLjVyZW0gMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRvcDozMCU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0zMCUpO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uc3tcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjdyZW0gMC45cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOjAuMjVyZW0gMC40cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG50ZXh0YXJlYVtpZCA9IFxcXCJkZXNjcmlwdGlvblxcXCJde1xcbiAgcGFkZGluZzowcmVtIDJyZW0gM3JlbSAycmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuc2VsZWN0e1xcbiAgICBwYWRkaW5nOjAuNHJlbSAxLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgVGFzayA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgaXNDb21wbGV0ZWQsIHRhc2tJRCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IHRhc2tUaXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgbGV0IGR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgbGV0IHN0YXR1cyA9IGlzQ29tcGxldGVkO1xuICAgIGxldCBJRCA9IHRhc2tJRDtcbiAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcbiAgICB9XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29tcGxldGlvblN0YXR1cyA9IChuZXdTdGF0dXMpID0+IHtcbiAgICAgICAgc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gSUQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SUQgPSAoaWQpID0+IHtcbiAgICAgICAgSUQgPSBpZDtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIGNvbnN0IHNldFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB9XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgdGFzayA6ICR7dGl0bGV9LCBkZXNjcmlwdGlvbiA6ICR7ZGVzY3JpcHRpb259LFxuICAgICAgICAgZGF0ZSA6ICR7ZHVlRGF0ZX0sIHByaW9yaXR5IDogJHtwcmlvcml0eX0sIElEIDogJHtJRH1gO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIHNldER1ZURhdGUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgXG4gICAgICAgIGdldENvbXBsZXRpb25TdGF0dXMsIHNldENvbXBsZXRpb25TdGF0dXMsIGdldElELCBzZXRJRCwgZ2V0UHJvamVjdCAsIHNldFByb2plY3QsIHRvU3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RUaXRsZTtcbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdE5hbWUgPSAobmV3UHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RUaXRsZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG4gICAgY29uc3QgZmluZFRhc2tCeUlEID0gKGlkKSA9PiB7XG4gICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZ2V0SUQoKSA9PSBpZClbMF07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0J5SUQgPSAoaWQsIG5ld1Rhc2spID0+IHtcbiAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgT2JqZWN0LmFzc2lnbih1cGRhdGVkVGFzaywgbmV3VGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFza0J5SUQgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgIGlmKCF0YXNrKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSB0YXNrcy5zcGxpY2UocG9zaXRpb24sMSk7XG4gICAgICAgIHRhc2tzLnNsaWNlKDApLnB1c2goLi4ubmV3QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEFsbFRhc2tzLCBnZXRQcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWUsIGZpbmRUYXNrQnlJRCwgYWRkVGFzayx1cGRhdGVUYXNrQnlJRCxkZWxldGVUYXNrQnlJRCB9O1xuXG59XG4iLCJpbXBvcnQge1B1YnN1Yn0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHtQcm9qZWN0LCBUYXNrfSBmcm9tICcuL0NsYXNzZXMnO1xuaW1wb3J0IHsgc2lkZUJhck1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcic7XG5leHBvcnQgY29uc3QgRGF0YSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW107XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RVcGRhdGVkXCIsIG51bGwpO1xuICAgIH1cbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdENyZWF0ZWRcIiwgYWRkUHJvamVjdCk7XG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyYXk7XG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvQmVEZWxldGVkID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0ICE9PSBwcm9qZWN0VG9CZURlbGV0ZWQpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKDAscHJvamVjdEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKC4uLm5ld1Byb2plY3RBcnJheSk7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdFVwZGF0ZWRcIiwgbnVsbCApO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYocHJvamVjdEFycmF5W2ldLmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0QXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWRkTmV3VGFza1RvRGF0YSA9ICh0YXNrQW5kUHJvamVjdEluQXJyYXkpID0+IHtcbiAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0FuZFByb2plY3RJbkFycmF5WzBdO1xuICAgICAgIG5ld1Rhc2suc2V0SUQoY3JlYXRlVW5pcXVlSUQoKSk7XG4gICAgICAgY29uc3QgcHJvamVjdCA9IHRhc2tBbmRQcm9qZWN0SW5BcnJheVsxXTtcbiAgICAgICBuZXdUYXNrLnNldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spOyBcbiAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RDbGlja2VkT3JVcGRhdGVkXCIsIGdldFByb2plY3Qoc2lkZUJhck1vZHVsZS5jdXJyZW50U2VsZWN0ZWRQcm9qZWN0KCkpKTtcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlVGFza0Zyb21EYXRhID0gKHRhc2tJREFuZFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gdGFza0lEQW5kUHJvamVjdFswXTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFza0lEQW5kUHJvamVjdFsxXSk7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVGFza0J5SUQodGFza0lEKTtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCBnZXRQcm9qZWN0KHNpZGVCYXJNb2R1bGUuY3VycmVudFNlbGVjdGVkUHJvamVjdCgpKSk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVRhc2tDb21wbGV0aW9uU3RhdHVzID0gKHRhc2tJREFuZFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gdGFza0lEQW5kUHJvamVjdFswXTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFza0lEQW5kUHJvamVjdFsxXSk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmZpbmRUYXNrQnlJRCh0YXNrSUQpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29tcGxldGlvblN0YXR1cyA9IHRhc2suZ2V0Q29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICB0YXNrLnNldENvbXBsZXRpb25TdGF0dXMoKGN1cnJlbnRDb21wbGV0aW9uU3RhdHVzID09PSBmYWxzZSkgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RDbGlja2VkT3JVcGRhdGVkXCIsIGdldFByb2plY3Qoc2lkZUJhck1vZHVsZS5jdXJyZW50U2VsZWN0ZWRQcm9qZWN0KCkpKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrQW5kVXBkYXRlZERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tBbmRVcGRhdGVkRGF0YVswXTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrQW5kVXBkYXRlZERhdGFbMV07XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0FuZFVwZGF0ZWREYXRhWzJdO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gdGFza0FuZFVwZGF0ZWREYXRhWzNdO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tBbmRVcGRhdGVkRGF0YVs0XTsgXG4gICAgICAgIHRhc2suc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFzay5zZXREdWVEYXRlKGR1ZURhdGUpO1xuICAgICAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCBnZXRQcm9qZWN0KHNpZGVCYXJNb2R1bGUuY3VycmVudFNlbGVjdGVkUHJvamVjdCgpKSk7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVVuaXF1ZUlEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkpO1xuICAgIH1cbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwidGFza1VwZGF0ZWRcIiwgdXBkYXRlVGFzayk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcInRhc2tDb21wbGV0aW9uU3RhdHVzQ2hhbmdlZFwiLCBjaGFuZ2VUYXNrQ29tcGxldGlvblN0YXR1cyk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcIm5ld1Rhc2tBZGRlZFwiLCBhZGROZXdUYXNrVG9EYXRhKTtcbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdERlbGV0ZWRcIiwgZGVsZXRlUHJvamVjdCk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcInRhc2tEZWxldGVkXCIsIGRlbGV0ZVRhc2tGcm9tRGF0YSk7XG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0c307XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFB1YnN1YiA9IHtcbiAgICBldmVudHMgOiB7fSxcblxuICAgIHN1YnNjcmliZSA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBzdWJzY3JpYmluZyB0byAke2V2ZW50SGFuZGxlcn1gKTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBwdWJsaXNoIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBwdWJsaXNoaW5nIHRvICR7ZXZlbnREYXRhfWApO1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyKGV2ZW50RGF0YSkpOyAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudEhhbmRsZXIpe1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudE5hbWUgIT09IGV2ZW50SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHtQdWJzdWJ9IGZyb20gJy4vLi4vYXBwbGljYXRpb24tbG9naWMvcHVic3ViJztcblxuZXhwb3J0IGNvbnN0IG1haW5Db250ZW50TW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGVudFwiKTtcbiAgICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3RcIik7ICAgICAgICBcbiAgICAgICAgcHJvamVjdC5nZXRBbGxUYXNrcygpLmZvckVhY2godGFzayA9PiBjcmVhdGVUYXNrRGl2KHRhc2ssIHRhc2tMaXN0Q29udGFpbmVyKSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIk5leHQgV2Vla1wiKXtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IFB1YnN1Yi5wdWJsaXNoKFwiYWRkVGFza0J1dHRvbkNsaWNrZWRcIiwgcHJvamVjdCApKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdENvbnRhaW5lcik7XG4gICAgfVxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCByZW5kZXIpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaywgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcInRhc2staWRcIiwgdGFzay5nZXRJRCgpKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0XCIsIHRhc2suZ2V0UHJvamVjdCgpLmdldFByb2plY3ROYW1lKCkpO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VUYXNrQ29tcGxldGUpO1xuICAgICAgICBpZih0YXNrLmdldENvbXBsZXRpb25TdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25zXCIpO1xuICAgICAgICBhZGRJY29ucyhpY29uQ29udGFpbmVyLCB0YXNrKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cbiAgICBjb25zdCBhZGRJY29ucyA9IChjb250YWluZXIsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaWNvblwiKTtcbiAgICAgICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gXCJ0cmlwX29yaWdpblwiO1xuICAgICAgICBhZGRDb2xvclRvU3Bhbihwcmlvcml0eVNwYW4sIHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgICAgIGNvbnN0IGVkaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGVkaXRTcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZWRpdFNwYW4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1pY29uXCIpO1xuICAgICAgICBlZGl0U3Bhbi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgICBlZGl0VGFzayhlZGl0U3BhbiwgdGFzayk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGVsZXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrLWljb25cIik7XG4gICAgICAgIGRlbGV0ZVNwYW4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgICAgICBkZWxldGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVTcGFuKTtcbiAgICB9XG4gICAgY29uc3QgYWRkQ29sb3JUb1NwYW4gPSAoc3BhbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYocHJpb3JpdHkgPT09IFwiSGlnaFwiKXtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlZGl0VGFzayA9IChlZGl0U3BhbiwgdGFzaykgPT4ge1xuICAgICAgICBlZGl0U3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwiZWRpdFRhc2tDbGlja2VkXCIsIHRhc2spO1xuICAgICAgICB9KVxuICAgIH0gXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwidGFzay1pZFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tCZWxvbmdzVG8gPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcInByb2plY3RcIik7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwidGFza0RlbGV0ZWRcIiwgW3Rhc2tJRCwgcHJvamVjdFRhc2tCZWxvbmdzVG9dKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlVGFza0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwidGFzay1pZFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tCZWxvbmdzVG8gPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcInByb2plY3RcIik7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwidGFza0NvbXBsZXRpb25TdGF0dXNDaGFuZ2VkXCIsIFt0YXNrSUQsIHByb2plY3RUYXNrQmVsb25nc1RvXSk7XG4gICAgfVxuICAgIHJldHVybiB7cmVuZGVyfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQdWJzdWIgfSBmcm9tIFwiLi4vYXBwbGljYXRpb24tbG9naWMvcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL2FwcGxpY2F0aW9uLWxvZ2ljL0NsYXNzZXNcIjtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFB1YnN1Yik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtaW5wdXRcIik7XG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICAobW9kYWwuc3R5bGUub3BhY2l0eSA9PSBcIjFcIikgPyBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCIgOiBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfVxuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FuY2VsXCIpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIG1vZGFsVGV4dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkXCIpO1xuICAgIGNvbnNvbGUubG9nKGFkZE5ld1Byb2plY3RCdXR0b24pO1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBpZighKG1vZGFsVGV4dC52YWx1ZSkpIHJldHVybjtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q3JlYXRlZFwiLCBtb2RhbFRleHQudmFsdWUpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xuICAgIGNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNb2RhbCk7XG4gICAgcmV0dXJuIHtzaG93TW9kYWx9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG1haW5Nb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlTW9kYWwgPSAobW9kYWxOYW1lLCBzZWNvbmRCdXR0b25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1tb2RhbFwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyT2ZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyT2ZNb2RhbC50ZXh0Q29udGVudCA9IG1vZGFsTmFtZTtcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKFwidGl0bGVcIiwgXCJUaXRsZTpcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVJbnB1dChcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjIwXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlTGFiZWwoXCJkZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gY3JlYXRlTGFiZWwoXCJkdWUtZGF0ZVwiLCBcIkR1ZSBEYXRlOlwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlSW5wdXQoXCJkYXRlXCIsXCJkdWUtZGF0ZVwiLFwiZHVlLWRhdGVcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVMYWJlbChcInByaW9yaXR5XCIsXCJQcmlvcml0eTpcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdGVyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGNyZWF0ZU9wdGlvbkVsZW1lbnQoXCJMb3dcIiwgXCJMb3dcIik7XG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5T3B0aW9uID0gY3JlYXRlT3B0aW9uRWxlbWVudChcIk1lZGl1bVwiLCBcIk1lZGl1bVwiKTtcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gY3JlYXRlT3B0aW9uRWxlbWVudChcIkhpZ2hcIiwgXCJIaWdoXCIpO1xuICAgICAgICBhcHBlbmRBbGxDaGlsZHJlbihwcmlvcml0eVNlbGVjdGVyLCBbbG93UHJpb3JpdHlPcHRpb24sbWVkaXVtUHJpb3JpdHlPcHRpb24saGlnaFByaW9yaXR5T3B0aW9uXSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJ0YXNrLWNhbmNlbFwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gY3JlYXRlQnV0dG9uKFwidGFzay1hZGRcIixzZWNvbmRCdXR0b25OYW1lKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZU1vZGFsKTtcbiAgICAgICAgYXBwZW5kQWxsQ2hpbGRyZW4oYnV0dG9uQ29udGFpbmVyLCBbY2xvc2VCdXR0b24sIGFkZEJ1dHRvbl0pO1xuICAgICAgICBhcHBlbmRBbGxDaGlsZHJlbihtYWluRGl2LCBbaGVhZGVyT2ZNb2RhbCwgdGl0bGVMYWJlbCwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0ZXIsIGJ1dHRvbkNvbnRhaW5lcl0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZUF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWVBdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUxhYmVsID0gKGZvckF0dHJpYnV0ZSwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZvckF0dHJpYnV0ZSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHZhbHVlLHRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRBbGxDaGlsZHJlbiA9IChjb250YWluZXIsIGFycmF5T2ZDaGlsZHJlbikgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCBhcnJheU9mQ2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFycmF5T2ZDaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIG1haW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgfSwgNTUwKTtcblxuICAgICAgIFxuICAgIH1cbiAgICByZXR1cm57Y3JlYXRlTW9kYWwsIGRlbGV0ZU1vZGFsfTtcblxufSkoKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQWRkTW9kYWwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYWluTW9kYWwuY3JlYXRlTW9kYWwoXCJOZXcgVGFza1wiLCBcIkFkZCBUYXNrXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZFwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgZmFsc2UpO1xuICAgICAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJuZXdUYXNrQWRkZWRcIiwgW25ld1Rhc2ssIHByb2plY3RdKTtcbiAgICAgICAgICAgIG1haW5Nb2RhbC5kZWxldGVNb2RhbChlKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJhZGRUYXNrQnV0dG9uQ2xpY2tlZFwiLCBjcmVhdGVBZGRNb2RhbCk7XG4gICAgcmV0dXJuIHtjcmVhdGVBZGRNb2RhbH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWRpdE1vZGFsID0gKHRhc2spID0+IHtcbiAgICAgICAgbWFpbk1vZGFsLmNyZWF0ZU1vZGFsKFwiRWRpdCBUYXNrXCIsIFwiVXBkYXRlIFRhc2tcIik7XG4gICAgICAgIHBvcHVsYXRlRWRpdE1vZGFsKHRhc2spO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZFwiKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBQdWJzdWIucHVibGlzaChcInRhc2tVcGRhdGVkXCIsIFt0YXNrLCBnZXRUaXRsZUlucHV0VmFsdWUoKSwgZ2V0RGVzY3JpcHRpb25JbnB1dFZhbHVlKCksZ2V0RHVlRGF0ZUlucHV0VmFsdWUoKSwgIGdldFByaW9yaXR5SW5wdXRWYWx1ZSgpXSk7XG4gICAgICAgICAgICBtYWluTW9kYWwuZGVsZXRlTW9kYWwoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwb3B1bGF0ZUVkaXRNb2RhbCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay5nZXRUaXRsZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRUaXRsZUlucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICByZXR1cm4gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb25JbnB1dFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGdldER1ZURhdGVJbnB1dFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xuICAgICAgICByZXR1cm4gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcmlvcml0eUlucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcImVkaXRUYXNrQ2xpY2tlZFwiLCBjcmVhdGVFZGl0TW9kYWwpO1xufSkoKTtcblxuXG5cblxuXG4iLCJpbXBvcnQge1B1YnN1Yn0gZnJvbSAnLi8uLi9hcHBsaWNhdGlvbi1sb2dpYy9wdWJzdWInO1xuaW1wb3J0IHtEYXRhfSBmcm9tICcuLy4uL2FwcGxpY2F0aW9uLWxvZ2ljL2RhdGEnO1xuXG5cbmV4cG9ydCBjb25zdCBzaWRlQmFyTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXIgPSAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhFWVlcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29uc3QgYXJyYXlPZlByb2plY3RzID0gRGF0YS5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuICAgICAgICBhcnJheU9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IGNyZWF0ZVByb2plY3REaXYocHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGl2ID0gKHByb2plY3QsIHByb2plY3RMaXN0Q29udGFpbmVyKSA9PiB7XG4gICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgbWFpbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdENsaWNrZWRPclVwZGF0ZWRcIiwgcHJvamVjdCkpOyBcbiAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgIG1haW5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1ha2VBY3RpdmVQcm9qZWN0KTtcbiAgICAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcInByb2plY3QtbmFtZVwiLCBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkpO1xuICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY2xvc2VcIjtcbiAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBQdWJzdWIucHVibGlzaChcInByb2plY3REZWxldGVkXCIsIHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSkpO1xuICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VBY3RpdmVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IG1haW5EaXYgPSBlLnRhcmdldDtcbiAgICAgICAgaWYobWFpbkRpdi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwicFwiKXtcbiAgICAgICAgICAgIG1haW5EaXYgPSBtYWluRGl2LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbWFrZUFsbFByb2plY3ROb3RBY3RpdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJBRERJTkcgQUNUSVZFIENMQVNTXCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICB9XG4gICAgY29uc3QgbWFrZUFsbFByb2plY3ROb3RBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgICAgICBhbGxQcm9qZWN0RGl2cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoKFwiYWN0aXZlLXByb2plY3RcIikpKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmdldEF0dHJpYnV0ZShcInByb2plY3QtbmFtZVwiKTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcInByb2plY3RVcGRhdGVkXCIsIHJlbmRlcik7XG4gICAgcmV0dXJuIHtjdXJyZW50U2VsZWN0ZWRQcm9qZWN0fTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1Rhc2ssIFByb2plY3R9IGZyb20gJy4vYXBwbGljYXRpb24tbG9naWMvQ2xhc3Nlcyc7XG5pbXBvcnQge2FkZFByb2plY3RNb2RhbCwgYWRkVGFza01vZGFsfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsc1wiO1xuaW1wb3J0IHtEYXRhfSBmcm9tICcuL2FwcGxpY2F0aW9uLWxvZ2ljL2RhdGEnO1xuaW1wb3J0IHsgbWFpbkNvbnRlbnRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgc2lkZUJhck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==