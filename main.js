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
       task.setProject(undefined);
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
       project.addTask(newTask); 
       _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.publish("projectClickedOrUpdated", project);
    }
    const createUniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.Pubsub.subscribe("projectDeleted", deleteProject);
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
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
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
        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add("material-icons-outlined");
        deleteSpan.classList.add("delete-task-icon");
        deleteSpan.textContent = "delete";
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
/* harmony export */   "addTaskModal": () => (/* binding */ addTaskModal)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtB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QUFnQjtBQUNwQixZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSG9EO0FBQ0o7O0FBRTFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUVBQWdCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELHFFQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxxRUFBYztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZ0I7QUFDcEIsQ0FBQzs7Ozs7OztVQzdCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDcUM7QUFDUTtBQUNwQjtBQUNlO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxpY2F0aW9uLWxvZ2ljL0NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxpY2F0aW9uLWxvZ2ljL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxpY2F0aW9uLWxvZ2ljL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHBhZGRpbmc6MXJlbSAwLjRyZW07XFxuICAgIGdhcDoxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nOjAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucHJvamVjdC1saXN0ICBzcGFue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnByb2plY3QtbGlzdCA+IC5wcm9qZWN0e1xcbiAgIHdpZHRoOjEwMCU7XFxuICAgYm9yZGVyOjFweCBkb3R0ZWQgcmdiKDExOSwgMTE3LCAxMTkpO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGdhcDowLjE1cmVtO1xcbn1cXG4ucHJvamVjdC1saXN0IHAge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnByb2plY3Q6aG92ZXIsIC5hY3RpdmUtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ucHJvamVjdCA+IC5pbmJveHtcXG4gICAgY29sb3I6cmdiKDE3LCAxNDEsIDE3KVxcbn1cXG4ucHJvamVjdCA+IC50b2RheXtcXG4gICAgY29sb3I6cmdiKDYsIDg4LCAyNDApO1xcbn1cXG4ucHJvamVjdCA+IC5uZXh0LXdlZWt7XFxuICAgIGNvbG9yOmxpZ2h0Y29yYWw7XFxufVxcbmgzLGgye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG59XFxuXFxuLnRhc2tzLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjNyZW07XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5zaWRlYmFyID4gLnByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjAuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9yZGVyOjE7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOjAuMnJlbSAwLjVyZW07XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciwgLmFkZC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIG1hcmdpbi10b3A6Mi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOjAuMnJlbSAxLjhyZW07XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnByb2plY3QtbGlzdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MC44cmVtO1xcbn1cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcGFkZGluZzoxcmVtIDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdG9wOjMwJTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMzAlKTtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9ucywgLmFkZC10YXNrLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjAuOHJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24sIC5hZGQtdGFzay1idXR0b25zID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjZyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWwgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOjAuMnJlbSAwLjRyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbCA+IGgze1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ucHJvamVjdC1jYW5jZWwsIC50YXNrLWNhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG4ucHJvamVjdC1hZGQsIC50YXNrLWFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBjb2xvcjpyZ2IoMTAsIDQsIDQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3QtYWRkOmhvdmVyLCAudGFzay1hZGQ6aG92ZXJ7XFxuICAgIGNvbG9yOldoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDE3NCwgMCk7XFxufVxcbi50YXNrcy1saXN0e1xcbiAgICBtYXJnaW4tdG9wOjJyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MXJlbTtcXG59XFxuLnRhc2t7XFxuICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6MC40cmVtO1xcbiAgICBwYWRkaW5nOjAuM3JlbSAwLjJyZW07XFxuICAgIHdpZHRoOjk1JTtcXG4gICAgbWF4LXdpZHRoOjQwcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnRhc2stY29tcGxldGVkID4gcHtcXG4gICAgY29sb3I6Z3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrID4gcHtcXG4gICAgZmxleC1ncm93OjE7XFxufVxcbi50YXNrLWljb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MC4xNXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjRzIGVhc2UtaW4tb3V0XFxufVxcblxcbi50YXNrLWljb25zID4gc3BhbntcXG4gICAgcGFkZGluZzowLjE1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi50YXNrID4gaW5wdXQge1xcbiAgICB0cmFuc2Zvcm06c2NhbGUoMC43KTtcXG59XFxuLmVkaXQtdGFzay1pY29uOmhvdmVyLCAuZGVsZXRlLXRhc2staWNvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbn1cXG4ucHJpb3JpdHktaWNvbntcXG4gICAgY29sb3I6cmdiKDI1NSwgMTY2LCAwKTtcXG59XFxuLmRlbGV0ZS10YXNrLWljb257XFxuICAgIGNvbG9yOnJlZDtcXG59XFxuLmFkZC10YXNrLW1vZGFse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6MS41cmVtIDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMzAlKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbnN7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHBhZGRpbmc6MC43cmVtIDAuOXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzowLjI1cmVtIDAuNHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxudGV4dGFyZWFbaWQgPSBcXFwiZGVzY3JpcHRpb25cXFwiXXtcXG4gIHBhZGRpbmc6MHJlbSAycmVtIDNyZW0gMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbnNlbGVjdHtcXG4gICAgcGFkZGluZzowLjRyZW0gMS45cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsY0FBYztJ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QTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHBhZGRpbmc6MXJlbSAwLjRyZW07XFxuICAgIGdhcDoxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nOjAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucHJvamVjdC1saXN0ICBzcGFue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnByb2plY3QtbGlzdCA+IC5wcm9qZWN0e1xcbiAgIHdpZHRoOjEwMCU7XFxuICAgYm9yZGVyOjFweCBkb3R0ZWQgcmdiKDExOSwgMTE3LCAxMTkpO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGdhcDowLjE1cmVtO1xcbn1cXG4ucHJvamVjdC1saXN0IHAge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnByb2plY3Q6aG92ZXIsIC5hY3RpdmUtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ucHJvamVjdCA+IC5pbmJveHtcXG4gICAgY29sb3I6cmdiKDE3LCAxNDEsIDE3KVxcbn1cXG4ucHJvamVjdCA+IC50b2RheXtcXG4gICAgY29sb3I6cmdiKDYsIDg4LCAyNDApO1xcbn1cXG4ucHJvamVjdCA+IC5uZXh0LXdlZWt7XFxuICAgIGNvbG9yOmxpZ2h0Y29yYWw7XFxufVxcbmgzLGgye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG59XFxuXFxuLnRhc2tzLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjNyZW07XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5zaWRlYmFyID4gLnByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjAuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9yZGVyOjE7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOjAuMnJlbSAwLjVyZW07XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciwgLmFkZC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIG1hcmdpbi10b3A6Mi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOjAuMnJlbSAxLjhyZW07XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnByb2plY3QtbGlzdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MC44cmVtO1xcbn1cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmFkZC1wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcGFkZGluZzoxcmVtIDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdG9wOjMwJTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMzAlKTtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9ucywgLmFkZC10YXNrLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjAuOHJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24sIC5hZGQtdGFzay1idXR0b25zID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjZyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG4uYWRkLXByb2plY3QtbW9kYWwgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOjAuMnJlbSAwLjRyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hZGQtcHJvamVjdC1tb2RhbCA+IGgze1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ucHJvamVjdC1jYW5jZWwsIC50YXNrLWNhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG4ucHJvamVjdC1hZGQsIC50YXNrLWFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBjb2xvcjpyZ2IoMTAsIDQsIDQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3QtYWRkOmhvdmVyLCAudGFzay1hZGQ6aG92ZXJ7XFxuICAgIGNvbG9yOldoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDE3NCwgMCk7XFxufVxcbi50YXNrcy1saXN0e1xcbiAgICBtYXJnaW4tdG9wOjJyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MXJlbTtcXG59XFxuLnRhc2t7XFxuICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6MC40cmVtO1xcbiAgICBwYWRkaW5nOjAuM3JlbSAwLjJyZW07XFxuICAgIHdpZHRoOjk1JTtcXG4gICAgbWF4LXdpZHRoOjQwcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnRhc2stY29tcGxldGVkID4gcHtcXG4gICAgY29sb3I6Z3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrID4gcHtcXG4gICAgZmxleC1ncm93OjE7XFxufVxcbi50YXNrLWljb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MC4xNXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjRzIGVhc2UtaW4tb3V0XFxufVxcblxcbi50YXNrLWljb25zID4gc3BhbntcXG4gICAgcGFkZGluZzowLjE1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi50YXNrID4gaW5wdXQge1xcbiAgICB0cmFuc2Zvcm06c2NhbGUoMC43KTtcXG59XFxuLmVkaXQtdGFzay1pY29uOmhvdmVyLCAuZGVsZXRlLXRhc2staWNvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbn1cXG4ucHJpb3JpdHktaWNvbntcXG4gICAgY29sb3I6cmdiKDI1NSwgMTY2LCAwKTtcXG59XFxuLmRlbGV0ZS10YXNrLWljb257XFxuICAgIGNvbG9yOnJlZDtcXG59XFxuLmFkZC10YXNrLW1vZGFse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6MS41cmVtIDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMzAlKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbnN7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHBhZGRpbmc6MC43cmVtIDAuOXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzowLjI1cmVtIDAuNHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxudGV4dGFyZWFbaWQgPSBcXFwiZGVzY3JpcHRpb25cXFwiXXtcXG4gIHBhZGRpbmc6MHJlbSAycmVtIDNyZW0gMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbnNlbGVjdHtcXG4gICAgcGFkZGluZzowLjRyZW0gMS45cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IFRhc2sgPSAodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIGlzQ29tcGxldGVkLCB0YXNrSUQpID0+IHtcbiAgICBsZXQgdGl0bGUgPSB0YXNrVGl0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlID0gdGFza0R1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgIGxldCBzdGF0dXMgPSBpc0NvbXBsZXRlZDtcbiAgICBsZXQgSUQgPSB0YXNrSUQ7XG4gICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCk9PntcbiAgICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgfVxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldENvbXBsZXRpb25TdGF0dXMgPSAobmV3U3RhdHVzKSA9PiB7XG4gICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIElEO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElEID0gKGlkKSA9PiB7XG4gICAgICAgIElEID0gaWQ7XG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYHRhc2sgOiAke3RpdGxlfSwgZGVzY3JpcHRpb24gOiAke2Rlc2NyaXB0aW9ufSxcbiAgICAgICAgIGRhdGUgOiAke2R1ZURhdGV9LCBwcmlvcml0eSA6ICR7cHJpb3JpdHl9LCBJRCA6ICR7SUR9YDtcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxuICAgICAgICBnZXRDb21wbGV0aW9uU3RhdHVzLCBzZXRDb21wbGV0aW9uU3RhdHVzLCBnZXRJRCwgc2V0SUQsIGdldFByb2plY3QgLCBzZXRQcm9qZWN0LCB0b1N0cmluZyB9O1xufVxuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0VGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IHNldFByb2plY3ROYW1lID0gKG5ld1Byb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0VGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuICAgIGNvbnN0IGZpbmRUYXNrQnlJRCA9IChpZCkgPT4ge1xuICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmdldElEKCkgPT0gaWQpWzBdO1xuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgdGFzay5zZXRQcm9qZWN0KHRoaXMpO1xuICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0J5SUQgPSAoaWQsIG5ld1Rhc2spID0+IHtcbiAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgT2JqZWN0LmFzc2lnbih1cGRhdGVkVGFzaywgbmV3VGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFza0J5SUQgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGZpbmRUYXNrQnlJRChpZCk7XG4gICAgICAgIGlmKCF0YXNrKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSB0YXNrcy5zcGxpY2UocG9zaXRpb24sMSk7XG4gICAgICAgIHRhc2tzLnNsaWNlKDApLnB1c2goLi4ubmV3QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEFsbFRhc2tzLCBnZXRQcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWUsIGZpbmRUYXNrQnlJRCwgYWRkVGFzayx1cGRhdGVUYXNrQnlJRCxkZWxldGVUYXNrQnlJRCB9O1xuXG59XG4iLCJpbXBvcnQge1B1YnN1Yn0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL0NsYXNzZXMnO1xuZXhwb3J0IGNvbnN0IERhdGEgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgUHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0VXBkYXRlZFwiLCBudWxsKTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcInByb2plY3RDcmVhdGVkXCIsIGFkZFByb2plY3QpO1xuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5O1xuICAgIH1cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0JlRGVsZXRlZCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvQmVEZWxldGVkKTtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZSgwLHByb2plY3RBcnJheS5sZW5ndGgpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCguLi5uZXdQcm9qZWN0QXJyYXkpO1xuICAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RVcGRhdGVkXCIsIG51bGwgKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RBcnJheVtpXS5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFkZE5ld1Rhc2tUb0RhdGEgPSAodGFza0FuZFByb2plY3RJbkFycmF5KSA9PiB7XG4gICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tBbmRQcm9qZWN0SW5BcnJheVswXTtcbiAgICAgICBuZXdUYXNrLnNldElEKGNyZWF0ZVVuaXF1ZUlEKCkpO1xuICAgICAgIGNvbnN0IHByb2plY3QgPSB0YXNrQW5kUHJvamVjdEluQXJyYXlbMV07XG4gICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spOyBcbiAgICAgICBQdWJzdWIucHVibGlzaChcInByb2plY3RDbGlja2VkT3JVcGRhdGVkXCIsIHByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVVbmlxdWVJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpKTtcbiAgICB9XG4gICAgUHVic3ViLnN1YnNjcmliZShcIm5ld1Rhc2tBZGRlZFwiLCBhZGROZXdUYXNrVG9EYXRhKTtcbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdERlbGV0ZWRcIiwgZGVsZXRlUHJvamVjdCk7XG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0c307XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFB1YnN1YiA9IHtcbiAgICBldmVudHMgOiB7fSxcblxuICAgIHN1YnNjcmliZSA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBzdWJzY3JpYmluZyB0byAke2V2ZW50SGFuZGxlcn1gKTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBwdWJsaXNoIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBpcyBwdWJsaXNoaW5nIHRvICR7ZXZlbnREYXRhfWApO1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyKGV2ZW50RGF0YSkpOyAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudEhhbmRsZXIpe1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudE5hbWUgIT09IGV2ZW50SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHtQdWJzdWJ9IGZyb20gJy4vLi4vYXBwbGljYXRpb24tbG9naWMvcHVic3ViJztcblxuZXhwb3J0IGNvbnN0IG1haW5Db250ZW50TW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGVudFwiKTtcbiAgICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3RcIik7ICAgICAgICBcbiAgICAgICAgcHJvamVjdC5nZXRBbGxUYXNrcygpLmZvckVhY2godGFzayA9PiBjcmVhdGVUYXNrRGl2KHRhc2ssIHRhc2tMaXN0Q29udGFpbmVyKSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpICE9PSBcIk5leHQgV2Vla1wiKXtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IFB1YnN1Yi5wdWJsaXNoKFwiYWRkVGFza0J1dHRvbkNsaWNrZWRcIiwgcHJvamVjdCApKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdENvbnRhaW5lcik7XG4gICAgfVxuICAgIFB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0Q2xpY2tlZE9yVXBkYXRlZFwiLCByZW5kZXIpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaywgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZih0YXNrLmdldENvbXBsZXRpb25TdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25zXCIpO1xuICAgICAgICBhZGRJY29ucyhpY29uQ29udGFpbmVyLCB0YXNrKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cbiAgICBjb25zdCBhZGRJY29ucyA9IChjb250YWluZXIsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaWNvblwiKTtcbiAgICAgICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gXCJ0cmlwX29yaWdpblwiO1xuICAgICAgICBhZGRDb2xvclRvU3Bhbihwcmlvcml0eVNwYW4sIHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgICAgIGNvbnN0IGVkaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGVkaXRTcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZWRpdFNwYW4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1pY29uXCIpO1xuICAgICAgICBlZGl0U3Bhbi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgICBjb25zdCBkZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBkZWxldGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1pY29uXCIpO1xuICAgICAgICBkZWxldGVTcGFuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0U3Bhbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVTcGFuKTtcbiAgICB9XG4gICAgY29uc3QgYWRkQ29sb3JUb1NwYW4gPSAoc3BhbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYocHJpb3JpdHkgPT09IFwiSGlnaFwiKXtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpe1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3JlbmRlcn07XG59KSgpO1xuIiwiaW1wb3J0IHsgUHVic3ViIH0gZnJvbSBcIi4uL2FwcGxpY2F0aW9uLWxvZ2ljL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9hcHBsaWNhdGlvbi1sb2dpYy9DbGFzc2VzXCI7XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhQdWJzdWIpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1tb2RhbFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWlucHV0XCIpO1xuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgKG1vZGFsLnN0eWxlLm9wYWNpdHkgPT0gXCIxXCIpID8gbW9kYWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiIDogbW9kYWwuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhbmNlbFwiKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKGUpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBtb2RhbFRleHQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZFwiKTtcbiAgICBjb25zb2xlLmxvZyhhZGROZXdQcm9qZWN0QnV0dG9uKTtcbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgaWYoIShtb2RhbFRleHQudmFsdWUpKSByZXR1cm47XG4gICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdENyZWF0ZWRcIiwgbW9kYWxUZXh0LnZhbHVlKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KTtcbiAgICBjbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TW9kYWwpO1xuICAgIHJldHVybiB7c2hvd01vZGFsfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBtYWluTW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZU1vZGFsID0gKG1vZGFsTmFtZSwgc2Vjb25kQnV0dG9uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stbW9kYWxcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlck9mTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRlck9mTW9kYWwudGV4dENvbnRlbnQgPSBtb2RhbE5hbWU7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChcInRpdGxlXCIsIFwiVGl0bGU6XCIpO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyMFwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUxhYmVsKFwiZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvbjpcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKFwiZHVlLWRhdGVcIiwgXCJEdWUgRGF0ZTpcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGNyZWF0ZUlucHV0KFwiZGF0ZVwiLFwiZHVlLWRhdGVcIixcImR1ZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlTGFiZWwoXCJwcmlvcml0eVwiLFwiUHJpb3JpdHk6XCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Rlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHlPcHRpb24gPSBjcmVhdGVPcHRpb25FbGVtZW50KFwiTG93XCIsIFwiTG93XCIpO1xuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IGNyZWF0ZU9wdGlvbkVsZW1lbnQoXCJNZWRpdW1cIiwgXCJNZWRpdW1cIik7XG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGNyZWF0ZU9wdGlvbkVsZW1lbnQoXCJIaWdoXCIsIFwiSGlnaFwiKTtcbiAgICAgICAgYXBwZW5kQWxsQ2hpbGRyZW4ocHJpb3JpdHlTZWxlY3RlciwgW2xvd1ByaW9yaXR5T3B0aW9uLG1lZGl1bVByaW9yaXR5T3B0aW9uLGhpZ2hQcmlvcml0eU9wdGlvbl0pO1xuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ1dHRvbnNcIik7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKFwidGFzay1jYW5jZWxcIiwgXCJDYW5jZWxcIik7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInRhc2stYWRkXCIsc2Vjb25kQnV0dG9uTmFtZSk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVNb2RhbCk7XG4gICAgICAgIGFwcGVuZEFsbENoaWxkcmVuKGJ1dHRvbkNvbnRhaW5lciwgW2Nsb3NlQnV0dG9uLCBhZGRCdXR0b25dKTtcbiAgICAgICAgYXBwZW5kQWxsQ2hpbGRyZW4obWFpbkRpdiwgW2hlYWRlck9mTW9kYWwsIHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdGVyLCBidXR0b25Db250YWluZXJdKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgaWQsIG5hbWVBdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lQXR0cmlidXRlKTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVMYWJlbCA9IChmb3JBdHRyaWJ1dGUsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmb3JBdHRyaWJ1dGUpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlT3B0aW9uRWxlbWVudCA9ICh2YWx1ZSx0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kQWxsQ2hpbGRyZW4gPSAoY29udGFpbmVyLCBhcnJheU9mQ2hpbGRyZW4pID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgYXJyYXlPZkNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJheU9mQ2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlTW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBtYWluRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgIH0sIDU1MCk7XG5cbiAgICAgICBcbiAgICB9XG4gICAgcmV0dXJue2NyZWF0ZU1vZGFsLCBkZWxldGVNb2RhbH07XG5cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrTW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUFkZE1vZGFsID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbWFpbk1vZGFsLmNyZWF0ZU1vZGFsKFwiTmV3IFRhc2tcIiwgXCJBZGQgVGFza1wiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlLCBcbiAgICAgICAgICAgIGZhbHNlKTtcbiAgICAgICAgICAgIFB1YnN1Yi5wdWJsaXNoKFwibmV3VGFza0FkZGVkXCIsIFtuZXdUYXNrLCBwcm9qZWN0XSk7XG4gICAgICAgICAgICBtYWluTW9kYWwuZGVsZXRlTW9kYWwoZSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIH1cbiAgICBQdWJzdWIuc3Vic2NyaWJlKFwiYWRkVGFza0J1dHRvbkNsaWNrZWRcIiwgY3JlYXRlQWRkTW9kYWwpO1xuICAgIHJldHVybiB7Y3JlYXRlQWRkTW9kYWx9O1xufSkoKTtcblxuXG5cbiIsImltcG9ydCB7UHVic3VifSBmcm9tICcuLy4uL2FwcGxpY2F0aW9uLWxvZ2ljL3B1YnN1Yic7XG5pbXBvcnQge0RhdGF9IGZyb20gJy4vLi4vYXBwbGljYXRpb24tbG9naWMvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBzaWRlQmFyTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXIgPSAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhFWVlcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29uc3QgYXJyYXlPZlByb2plY3RzID0gRGF0YS5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuICAgICAgICBhcnJheU9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IGNyZWF0ZVByb2plY3REaXYocHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGl2ID0gKHByb2plY3QsIHByb2plY3RMaXN0Q29udGFpbmVyKSA9PiB7XG4gICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgbWFpbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IFB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdENsaWNrZWRPclVwZGF0ZWRcIiwgcHJvamVjdCkpOyBcbiAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY2xvc2VcIjtcbiAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBQdWJzdWIucHVibGlzaChcInByb2plY3REZWxldGVkXCIsIHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSkpO1xuICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfVxuICAgXG4gICAgUHVic3ViLnN1YnNjcmliZShcInByb2plY3RVcGRhdGVkXCIsIHJlbmRlcik7XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtUYXNrLCBQcm9qZWN0fSBmcm9tICcuL2FwcGxpY2F0aW9uLWxvZ2ljL0NsYXNzZXMnO1xuaW1wb3J0IHthZGRQcm9qZWN0TW9kYWwsIGFkZFRhc2tNb2RhbH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHNcIjtcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9hcHBsaWNhdGlvbi1sb2dpYy9kYXRhJztcbmltcG9ydCB7IG1haW5Db250ZW50TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL21haW5Db250ZW50JztcbmltcG9ydCB7IHNpZGVCYXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=