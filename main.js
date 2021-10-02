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
       _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", project);
    }
    const deleteTaskFromData = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        project.deleteTaskByID(taskID);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", project);
    }
    const changeTaskCompletionStatus = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        const task = project.findTaskByID(taskID);
        const currentCompletionStatus = task.getCompletionStatus();
        task.setCompletionStatus((currentCompletionStatus === false) ? true : false);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", project);
        
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
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", task.getProject());

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
   
    _application_logic_pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectUpdated", render);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3FDO0FBQ1E7QUFDcEI7QUFDZTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsaWNhdGlvbi1sb2dpYy9DbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsaWNhdGlvbi1sb2dpYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsaWNhdGlvbi1sb2dpYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwYWRkaW5nOjFyZW0gMC40cmVtO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZzowLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByb2plY3QtbGlzdCAgc3BhbntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5wcm9qZWN0LWxpc3QgPiAucHJvamVjdHtcXG4gICB3aWR0aDoxMDAlO1xcbiAgIGJvcmRlcjoxcHggZG90dGVkIHJnYigxMTksIDExNywgMTE5KTtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBnYXA6MC4xNXJlbTtcXG59XFxuLnByb2plY3QtbGlzdCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5wcm9qZWN0OmhvdmVyLCAuYWN0aXZlLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnByb2plY3QgPiAuaW5ib3h7XFxuICAgIGNvbG9yOnJnYigxNywgMTQxLCAxNylcXG59XFxuLnByb2plY3QgPiAudG9kYXl7XFxuICAgIGNvbG9yOnJnYig2LCA4OCwgMjQwKTtcXG59XFxuLnByb2plY3QgPiAubmV4dC13ZWVre1xcbiAgICBjb2xvcjpsaWdodGNvcmFsO1xcbn1cXG5oMyxoMntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxufVxcblxcbi50YXNrcy1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzowLjVyZW0gMC4zcmVtO1xcbiAgICBmbGV4LWdyb3c6MTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uc2lkZWJhciA+IC5wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDowLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcmRlcjoxO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzowLjJyZW0gMC41cmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIsIC5hZGQtdGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tdG9wOjIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzowLjJyZW0gMS44cmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qZWN0LWxpc3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjAuOHJlbTtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHBhZGRpbmc6MXJlbSA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRvcDozMCU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTMwJSk7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbnMsIC5hZGQtdGFzay1idXR0b25ze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDowLjhyZW07XFxufVxcbi5hZGQtcHJvamVjdC1idXR0b25zID4gYnV0dG9uLCAuYWRkLXRhc2stYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjVyZW0gMC42cmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFsID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzowLjJyZW0gMC40cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWwgPiBoM3tcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnByb2plY3QtY2FuY2VsLCAudGFzay1jYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuLnByb2plY3QtYWRkLCAudGFzay1hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgY29sb3I6cmdiKDEwLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0LWFkZDpob3ZlciwgLnRhc2stYWRkOmhvdmVye1xcbiAgICBjb2xvcjpXaGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxNzQsIDApO1xcbn1cXG4udGFza3MtbGlzdHtcXG4gICAgbWFyZ2luLXRvcDoycmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjFyZW07XFxufVxcbi50YXNre1xcbiAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOjAuNHJlbTtcXG4gICAgcGFkZGluZzowLjNyZW0gMC4ycmVtO1xcbiAgICB3aWR0aDo5NSU7XFxuICAgIG1heC13aWR0aDo0MHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi50YXNrLWNvbXBsZXRlZCA+IHB7XFxuICAgIGNvbG9yOmdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udGFzayA+IHB7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbn1cXG4udGFzay1pY29uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjAuMTVyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgdHJhbnNpdGlvbjphbGwgMC40cyBlYXNlLWluLW91dFxcbn1cXG5cXG4udGFzay1pY29ucyA+IHNwYW57XFxuICAgIHBhZGRpbmc6MC4xNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4udGFzayA+IGlucHV0IHtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuNyk7XFxufVxcbi5lZGl0LXRhc2staWNvbjpob3ZlciwgLmRlbGV0ZS10YXNrLWljb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuLnByaW9yaXR5LWljb257XFxuICAgIGNvbG9yOnJnYigyNTUsIDE2NiwgMCk7XFxufVxcbi5kZWxldGUtdGFzay1pY29ue1xcbiAgICBjb2xvcjpyZWQ7XFxufVxcbi5hZGQtdGFzay1tb2RhbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOjEuNXJlbSAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdG9wOjMwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTMwJSk7XFxufVxcbi5hZGQtdGFzay1idXR0b25ze1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1idXR0b25zID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuN3JlbSAwLjlyZW07XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbCA+IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6MC4yNXJlbSAwLjRyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbnRleHRhcmVhW2lkID0gXFxcImRlc2NyaXB0aW9uXFxcIl17XFxuICBwYWRkaW5nOjByZW0gMnJlbSAzcmVtIDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5zZWxlY3R7XFxuICAgIHBhZGRpbmc6MC40cmVtIDEuOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0dBQ0csVUFBVTtHQUNWLG9DQUFvQztHQUNwQyw4QkFBOEI7R0FDOUIsbUJBQW1CO0dBQ25CLFdBQVc7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFFBQVE7SUFDUiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwYWRkaW5nOjFyZW0gMC40cmVtO1xcbiAgICBnYXA6MXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZzowLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByb2plY3QtbGlzdCAgc3BhbntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5wcm9qZWN0LWxpc3QgPiAucHJvamVjdHtcXG4gICB3aWR0aDoxMDAlO1xcbiAgIGJvcmRlcjoxcHggZG90dGVkIHJnYigxMTksIDExNywgMTE5KTtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBnYXA6MC4xNXJlbTtcXG59XFxuLnByb2plY3QtbGlzdCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5wcm9qZWN0OmhvdmVyLCAuYWN0aXZlLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnByb2plY3QgPiAuaW5ib3h7XFxuICAgIGNvbG9yOnJnYigxNywgMTQxLCAxNylcXG59XFxuLnByb2plY3QgPiAudG9kYXl7XFxuICAgIGNvbG9yOnJnYig2LCA4OCwgMjQwKTtcXG59XFxuLnByb2plY3QgPiAubmV4dC13ZWVre1xcbiAgICBjb2xvcjpsaWdodGNvcmFsO1xcbn1cXG5oMyxoMntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxufVxcblxcbi50YXNrcy1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzowLjVyZW0gMC4zcmVtO1xcbiAgICBmbGV4LWdyb3c6MTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uc2lkZWJhciA+IC5wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDowLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcmRlcjoxO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzowLjJyZW0gMC41cmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIsIC5hZGQtdGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tdG9wOjIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzowLjJyZW0gMS44cmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qZWN0LWxpc3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjAuOHJlbTtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHBhZGRpbmc6MXJlbSA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRvcDozMCU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTMwJSk7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbnMsIC5hZGQtdGFzay1idXR0b25ze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDowLjhyZW07XFxufVxcbi5hZGQtcHJvamVjdC1idXR0b25zID4gYnV0dG9uLCAuYWRkLXRhc2stYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjVyZW0gMC42cmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFsID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzowLjJyZW0gMC40cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWwgPiBoM3tcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnByb2plY3QtY2FuY2VsLCAudGFzay1jYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuLnByb2plY3QtYWRkLCAudGFzay1hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgY29sb3I6cmdiKDEwLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0LWFkZDpob3ZlciwgLnRhc2stYWRkOmhvdmVye1xcbiAgICBjb2xvcjpXaGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxNzQsIDApO1xcbn1cXG4udGFza3MtbGlzdHtcXG4gICAgbWFyZ2luLXRvcDoycmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjFyZW07XFxufVxcbi50YXNre1xcbiAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOjAuNHJlbTtcXG4gICAgcGFkZGluZzowLjNyZW0gMC4ycmVtO1xcbiAgICB3aWR0aDo5NSU7XFxuICAgIG1heC13aWR0aDo0MHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi50YXNrLWNvbXBsZXRlZCA+IHB7XFxuICAgIGNvbG9yOmdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udGFzayA+IHB7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbn1cXG4udGFzay1pY29uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjAuMTVyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgdHJhbnNpdGlvbjphbGwgMC40cyBlYXNlLWluLW91dFxcbn1cXG5cXG4udGFzay1pY29ucyA+IHNwYW57XFxuICAgIHBhZGRpbmc6MC4xNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG4udGFzayA+IGlucHV0IHtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuNyk7XFxufVxcbi5lZGl0LXRhc2staWNvbjpob3ZlciwgLmRlbGV0ZS10YXNrLWljb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuLnByaW9yaXR5LWljb257XFxuICAgIGNvbG9yOnJnYigyNTUsIDE2NiwgMCk7XFxufVxcbi5kZWxldGUtdGFzay1pY29ue1xcbiAgICBjb2xvcjpyZWQ7XFxufVxcbi5hZGQtdGFzay1tb2RhbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOjEuNXJlbSAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdG9wOjMwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTMwJSk7XFxufVxcbi5hZGQtdGFzay1idXR0b25ze1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1idXR0b25zID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuN3JlbSAwLjlyZW07XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbCA+IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6MC4yNXJlbSAwLjRyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbnRleHRhcmVhW2lkID0gXFxcImRlc2NyaXB0aW9uXFxcIl17XFxuICBwYWRkaW5nOjByZW0gMnJlbSAzcmVtIDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5zZWxlY3R7XFxuICAgIHBhZGRpbmc6MC40cmVtIDEuOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBUYXNrID0gKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCBpc0NvbXBsZXRlZCwgdGFza0lEKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gdGFza1RpdGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICBsZXQgZHVlRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICBsZXQgc3RhdHVzID0gaXNDb21wbGV0ZWQ7XG4gICAgbGV0IElEID0gdGFza0lEO1xuICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpPT57XG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xuICAgIH1cbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDb21wbGV0aW9uU3RhdHVzID0gKG5ld1N0YXR1cykgPT4ge1xuICAgICAgICBzdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBJRDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJRCA9IChpZCkgPT4ge1xuICAgICAgICBJRCA9IGlkO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGB0YXNrIDogJHt0aXRsZX0sIGRlc2NyaXB0aW9uIDogJHtkZXNjcmlwdGlvbn0sXG4gICAgICAgICBkYXRlIDogJHtkdWVEYXRlfSwgcHJpb3JpdHkgOiAke3ByaW9yaXR5fSwgSUQgOiAke0lEfWA7XG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4geyBnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcbiAgICAgICAgZ2V0Q29tcGxldGlvblN0YXR1cywgc2V0Q29tcGxldGlvblN0YXR1cywgZ2V0SUQsIHNldElELCBnZXRQcm9qZWN0ICwgc2V0UHJvamVjdCwgdG9TdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IGdldFByb2plY3ROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdFRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBzZXRQcm9qZWN0TmFtZSA9IChuZXdQcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cbiAgICBjb25zdCBmaW5kVGFza0J5SUQgPSAoaWQpID0+IHtcbiAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5nZXRJRCgpID09IGlkKVswXTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0J5SUQgPSAoaWQsIG5ld1Rhc2spID0+IHtcbiAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgT2JqZWN0LmFzc2lnbih1cGRhdGVkVGFzaywgbmV3VGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFza0J5SUQgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgIGlmKCF0YXNrKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSB0YXNrcy5zcGxpY2UocG9zaXRpb24sMSk7XG4gICAgICAgIHRhc2tzLnNsaWNlKDApLnB1c2goLi4ubmV3QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEFsbFRhc2tzLCBnZXRQcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWUsIGZpbmRUYXNrQnlJRCwgYWRkVGFzayx1cGRhdGVUYXNrQnlJRCxkZWxldGVUYXNrQnlJRCB9O1xuXG59XG4iLCJpbXBvcnQge1B1YnN1Yn0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHtQcm9qZWN0LCBUYXNrfSBmcm9tICcuL0NsYXNzZXMnO1xuZXhwb3J0IGNvbnN0IERhdGEgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0VXBkYXRlZFwiLCBudWxsKTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcInByb2plY3RDcmVhdGVkXCIsIGFkZFByb2plY3QpO1xuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5O1xuICAgIH1cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0JlRGVsZXRlZCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvQmVEZWxldGVkKTtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZSgwLHByb2plY3RBcnJheS5sZW5ndGgpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCguLi5uZXdQcm9qZWN0QXJyYXkpO1xuICAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RVcGRhdGVkXCIsIG51bGwgKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RBcnJheVtpXS5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFkZE5ld1Rhc2tUb0RhdGEgPSAodGFza0FuZFByb2plY3RJbkFycmF5KSA9PiB7XG4gICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tBbmRQcm9qZWN0SW5BcnJheVswXTtcbiAgICAgICBuZXdUYXNrLnNldElEKGNyZWF0ZVVuaXF1ZUlEKCkpO1xuICAgICAgIGNvbnN0IHByb2plY3QgPSB0YXNrQW5kUHJvamVjdEluQXJyYXlbMV07XG4gICAgICAgbmV3VGFzay5zZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTsgXG4gICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCBwcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlVGFza0Zyb21EYXRhID0gKHRhc2tJREFuZFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gdGFza0lEQW5kUHJvamVjdFswXTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFza0lEQW5kUHJvamVjdFsxXSk7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVGFza0J5SUQodGFza0lEKTtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCBwcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlVGFza0NvbXBsZXRpb25TdGF0dXMgPSAodGFza0lEQW5kUHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSUQgPSB0YXNrSURBbmRQcm9qZWN0WzBdO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdCh0YXNrSURBbmRQcm9qZWN0WzFdKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QuZmluZFRhc2tCeUlEKHRhc2tJRCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wbGV0aW9uU3RhdHVzID0gdGFzay5nZXRDb21wbGV0aW9uU3RhdHVzKCk7XG4gICAgICAgIHRhc2suc2V0Q29tcGxldGlvblN0YXR1cygoY3VycmVudENvbXBsZXRpb25TdGF0dXMgPT09IGZhbHNlKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdENsaWNrZWRPclVwZGF0ZWRcIiwgcHJvamVjdCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSAodGFza0FuZFVwZGF0ZWREYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrQW5kVXBkYXRlZERhdGFbMF07XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGFza0FuZFVwZGF0ZWREYXRhWzFdO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tBbmRVcGRhdGVkRGF0YVsyXTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tBbmRVcGRhdGVkRGF0YVszXTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0YXNrQW5kVXBkYXRlZERhdGFbNF07IFxuICAgICAgICB0YXNrLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgdGFzay5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgICAgIHRhc2suc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgdGFzay5zZXRQcmlvcml0eShwcmlvcml0eSk7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdENsaWNrZWRPclVwZGF0ZWRcIiwgdGFzay5nZXRQcm9qZWN0KCkpO1xuXG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVVuaXF1ZUlEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkpO1xuICAgIH1cbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwidGFza1VwZGF0ZWRcIiwgdXBkYXRlVGFzayk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcInRhc2tDb21wbGV0aW9uU3RhdHVzQ2hhbmdlZFwiLCBjaGFuZ2VUYXNrQ29tcGxldGlvblN0YXR1cyk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcIm5ld1Rhc2tBZGRlZFwiLCBhZGROZXdUYXNrVG9EYXRhKTtcbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdERlbGV0ZWRcIiwgZGVsZXRlUHJvamVjdCk7XG4gICAgUHVic3ViLnN1YnNjcmliZShcInRhc2tEZWxldGVkXCIsIGRlbGV0ZVRhc2tGcm9tRGF0YSk7XG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0c307XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFB1YnN1YiA9IHtcbiAgICBldmVudHMgOiB7fSxcblxuICAgIHN1YnNjcmliZSA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBzdWJzY3JpYmluZyB0byAke2V2ZW50SGFuZGxlcn1gKTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBwdWJsaXNoIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBwdWJsaXNoaW5nIHRvICR7ZXZlbnREYXRhfWApO1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyKGV2ZW50RGF0YSkpOyAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudEhhbmRsZXIpe1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudE5hbWUgIT09IGV2ZW50SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHtQdWJzdWJ9IGZyb20gJy4vLi4vYXBwbGljYXRpb24tbG9naWMvcHVic3ViJztcblxuZXhwb3J0IGNvbnN0IG1haW5Db250ZW50TW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGVudFwiKTtcbiAgICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3RcIik7ICAgICAgICBcbiAgICAgICAgcHJvamVjdC5nZXRBbGxUYXNrcygpLmZvckVhY2godGFzayA9PiBjcmVhdGVUYXNrRGl2KHRhc2ssIHRhc2tMaXN0Q29udGFpbmVyKSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIk5leHQgV2Vla1wiKXtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IFB1YnN1Yi5wdWJsaXNoKFwiYWRkVGFza0J1dHRvbkNsaWNrZWRcIiwgcHJvamVjdCApKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdENvbnRhaW5lcik7XG4gICAgfVxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCByZW5kZXIpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaywgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcInRhc2staWRcIiwgdGFzay5nZXRJRCgpKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0XCIsIHRhc2suZ2V0UHJvamVjdCgpLmdldFByb2plY3ROYW1lKCkpO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VUYXNrQ29tcGxldGUpO1xuICAgICAgICBpZih0YXNrLmdldENvbXBsZXRpb25TdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25zXCIpO1xuICAgICAgICBhZGRJY29ucyhpY29uQ29udGFpbmVyLCB0YXNrKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cbiAgICBjb25zdCBhZGRJY29ucyA9IChjb250YWluZXIsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaWNvblwiKTtcbiAgICAgICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gXCJ0cmlwX29yaWdpblwiO1xuICAgICAgICBhZGRDb2xvclRvU3Bhbihwcmlvcml0eVNwYW4sIHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgICAgIGNvbnN0IGVkaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGVkaXRTcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZWRpdFNwYW4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1pY29uXCIpO1xuICAgICAgICBlZGl0U3Bhbi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgICBlZGl0VGFzayhlZGl0U3BhbiwgdGFzayk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGVsZXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrLWljb25cIik7XG4gICAgICAgIGRlbGV0ZVNwYW4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgICAgICBkZWxldGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVTcGFuKTtcbiAgICB9XG4gICAgY29uc3QgYWRkQ29sb3JUb1NwYW4gPSAoc3BhbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYocHJpb3JpdHkgPT09IFwiSGlnaFwiKXtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlZGl0VGFzayA9IChlZGl0U3BhbiwgdGFzaykgPT4ge1xuICAgICAgICBlZGl0U3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwiZWRpdFRhc2tDbGlja2VkXCIsIHRhc2spO1xuICAgICAgICB9KVxuICAgIH0gXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwidGFzay1pZFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tCZWxvbmdzVG8gPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcInByb2plY3RcIik7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwidGFza0RlbGV0ZWRcIiwgW3Rhc2tJRCwgcHJvamVjdFRhc2tCZWxvbmdzVG9dKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlVGFza0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwidGFzay1pZFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tCZWxvbmdzVG8gPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcInByb2plY3RcIik7XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwidGFza0NvbXBsZXRpb25TdGF0dXNDaGFuZ2VkXCIsIFt0YXNrSUQsIHByb2plY3RUYXNrQmVsb25nc1RvXSk7XG4gICAgfVxuICAgIHJldHVybiB7cmVuZGVyfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQdWJzdWIgfSBmcm9tIFwiLi4vYXBwbGljYXRpb24tbG9naWMvcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL2FwcGxpY2F0aW9uLWxvZ2ljL0NsYXNzZXNcIjtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFB1YnN1Yik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtaW5wdXRcIik7XG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICAobW9kYWwuc3R5bGUub3BhY2l0eSA9PSBcIjFcIikgPyBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCIgOiBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfVxuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FuY2VsXCIpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIG1vZGFsVGV4dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkXCIpO1xuICAgIGNvbnNvbGUubG9nKGFkZE5ld1Byb2plY3RCdXR0b24pO1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBpZighKG1vZGFsVGV4dC52YWx1ZSkpIHJldHVybjtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0Q3JlYXRlZFwiLCBtb2RhbFRleHQudmFsdWUpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xuICAgIGNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNb2RhbCk7XG4gICAgcmV0dXJuIHtzaG93TW9kYWx9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG1haW5Nb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlTW9kYWwgPSAobW9kYWxOYW1lLCBzZWNvbmRCdXR0b25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1tb2RhbFwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyT2ZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyT2ZNb2RhbC50ZXh0Q29udGVudCA9IG1vZGFsTmFtZTtcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKFwidGl0bGVcIiwgXCJUaXRsZTpcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVJbnB1dChcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjIwXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlTGFiZWwoXCJkZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gY3JlYXRlTGFiZWwoXCJkdWUtZGF0ZVwiLCBcIkR1ZSBEYXRlOlwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlSW5wdXQoXCJkYXRlXCIsXCJkdWUtZGF0ZVwiLFwiZHVlLWRhdGVcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVMYWJlbChcInByaW9yaXR5XCIsXCJQcmlvcml0eTpcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdGVyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGNyZWF0ZU9wdGlvbkVsZW1lbnQoXCJMb3dcIiwgXCJMb3dcIik7XG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5T3B0aW9uID0gY3JlYXRlT3B0aW9uRWxlbWVudChcIk1lZGl1bVwiLCBcIk1lZGl1bVwiKTtcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gY3JlYXRlT3B0aW9uRWxlbWVudChcIkhpZ2hcIiwgXCJIaWdoXCIpO1xuICAgICAgICBhcHBlbmRBbGxDaGlsZHJlbihwcmlvcml0eVNlbGVjdGVyLCBbbG93UHJpb3JpdHlPcHRpb24sbWVkaXVtUHJpb3JpdHlPcHRpb24saGlnaFByaW9yaXR5T3B0aW9uXSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJ0YXNrLWNhbmNlbFwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gY3JlYXRlQnV0dG9uKFwidGFzay1hZGRcIixzZWNvbmRCdXR0b25OYW1lKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZU1vZGFsKTtcbiAgICAgICAgYXBwZW5kQWxsQ2hpbGRyZW4oYnV0dG9uQ29udGFpbmVyLCBbY2xvc2VCdXR0b24sIGFkZEJ1dHRvbl0pO1xuICAgICAgICBhcHBlbmRBbGxDaGlsZHJlbihtYWluRGl2LCBbaGVhZGVyT2ZNb2RhbCwgdGl0bGVMYWJlbCwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0ZXIsIGJ1dHRvbkNvbnRhaW5lcl0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZUF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWVBdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUxhYmVsID0gKGZvckF0dHJpYnV0ZSwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZvckF0dHJpYnV0ZSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHZhbHVlLHRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRBbGxDaGlsZHJlbiA9IChjb250YWluZXIsIGFycmF5T2ZDaGlsZHJlbikgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCBhcnJheU9mQ2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFycmF5T2ZDaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIG1haW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgfSwgNTUwKTtcblxuICAgICAgIFxuICAgIH1cbiAgICByZXR1cm57Y3JlYXRlTW9kYWwsIGRlbGV0ZU1vZGFsfTtcblxufSkoKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQWRkTW9kYWwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYWluTW9kYWwuY3JlYXRlTW9kYWwoXCJOZXcgVGFza1wiLCBcIkFkZCBUYXNrXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZFwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgZmFsc2UpO1xuICAgICAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJuZXdUYXNrQWRkZWRcIiwgW25ld1Rhc2ssIHByb2plY3RdKTtcbiAgICAgICAgICAgIG1haW5Nb2RhbC5kZWxldGVNb2RhbChlKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJhZGRUYXNrQnV0dG9uQ2xpY2tlZFwiLCBjcmVhdGVBZGRNb2RhbCk7XG4gICAgcmV0dXJuIHtjcmVhdGVBZGRNb2RhbH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWRpdE1vZGFsID0gKHRhc2spID0+IHtcbiAgICAgICAgbWFpbk1vZGFsLmNyZWF0ZU1vZGFsKFwiRWRpdCBUYXNrXCIsIFwiVXBkYXRlIFRhc2tcIik7XG4gICAgICAgIHBvcHVsYXRlRWRpdE1vZGFsKHRhc2spO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZFwiKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBQdWJzdWIucHVibGlzaChcInRhc2tVcGRhdGVkXCIsIFt0YXNrLCBnZXRUaXRsZUlucHV0VmFsdWUoKSwgZ2V0RGVzY3JpcHRpb25JbnB1dFZhbHVlKCksZ2V0RHVlRGF0ZUlucHV0VmFsdWUoKSwgIGdldFByaW9yaXR5SW5wdXRWYWx1ZSgpXSk7XG4gICAgICAgICAgICBtYWluTW9kYWwuZGVsZXRlTW9kYWwoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwb3B1bGF0ZUVkaXRNb2RhbCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay5nZXRUaXRsZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRUaXRsZUlucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICByZXR1cm4gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb25JbnB1dFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGdldER1ZURhdGVJbnB1dFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xuICAgICAgICByZXR1cm4gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcmlvcml0eUlucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcImVkaXRUYXNrQ2xpY2tlZFwiLCBjcmVhdGVFZGl0TW9kYWwpO1xufSkoKTtcblxuXG5cblxuXG4iLCJpbXBvcnQge1B1YnN1Yn0gZnJvbSAnLi8uLi9hcHBsaWNhdGlvbi1sb2dpYy9wdWJzdWInO1xuaW1wb3J0IHtEYXRhfSBmcm9tICcuLy4uL2FwcGxpY2F0aW9uLWxvZ2ljL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgc2lkZUJhck1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIRVlZXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFycmF5T2ZQcm9qZWN0cyA9IERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlByb2plY3RzKTtcbiAgICAgICAgYXJyYXlPZlByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QsIHByb2plY3RMaXN0Q29udGFpbmVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdERpdiA9IChwcm9qZWN0LCBwcm9qZWN0TGlzdENvbnRhaW5lcikgPT4ge1xuICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgIG1haW5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBQdWJzdWIucHVibGlzaChcInByb2plY3RDbGlja2VkT3JVcGRhdGVkXCIsIHByb2plY3QpKTsgXG4gICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0RGVsZXRlZFwiLCBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkpKTtcbiAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH1cbiAgIFxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0VXBkYXRlZFwiLCByZW5kZXIpO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7VGFzaywgUHJvamVjdH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1sb2dpYy9DbGFzc2VzJztcbmltcG9ydCB7YWRkUHJvamVjdE1vZGFsLCBhZGRUYXNrTW9kYWx9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzXCI7XG5pbXBvcnQge0RhdGF9IGZyb20gJy4vYXBwbGljYXRpb24tbG9naWMvZGF0YSc7XG5pbXBvcnQgeyBtYWluQ29udGVudE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluQ29udGVudCc7XG5pbXBvcnQgeyBzaWRlQmFyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9