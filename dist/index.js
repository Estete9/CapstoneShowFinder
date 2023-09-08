/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n\n.hide {\n  display: none;\n}\n\n#show-header-section {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n\n#show-poster {\n  max-height: 200px;\n  width: auto;\n  top: 50%;\n  left: 50%;\n}\n\n#close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 15px;\n  cursor: pointer;\n}\n\n#show-description-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.section-title {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n#show-details {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px 50px;\n}\n\n#show-details .show-detail-item {\n  text-align: center;\n  max-width: 145px;\n}\n\n#show-comments-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#post-comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: start;\n}\n\n#comment-msg {\n  resize: none;\n}\n\n#cardboards {\n  list-style-type: none;\n  padding: 0;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 50px;\n}\n\n.cardboard {\n  width: 70%;\n  display: grid;\n  row-gap: 10px;\n  justify-items: center;\n}\n\n.cardboard-image {\n  width: 50%;\n  align-self: center;\n}\n\n.cardboard-superior {\n  width: 50%;\n  display: flex;\n}\n\n.cardboard-title {\n  width: 100%;\n  margin: 0;\n}\n\n.cardboard-inferior {\n  width: 50%;\n  display: grid;\n  justify-items: center;\n}\n\n.cardboard-heart-button {\n  width: 2.5vw;\n  height: 2.5vw;\n  font-size: 2rem;\n}\n\n.cardboard-likes {\n  margin: 1vw 0 0 0;\n}\n\n.comments-button {\n  width: 15vw;\n  height: 3vw;\n}\n\n.reservations-button {\n  width: 17vw;\n  height: 3vw;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  padding-bottom: 30px;\n}\n\n#menu {\n  display: flex;\n  list-style: none;\n  margin-left: auto;\n}\n\n#header-logo {\n  height: 70px;\n  width: auto;\n}\n\n.menu-item {\n  font-size: 1.1rem;\n}\n\n#comments-popup-wrapper {\n  display: block;\n  margin: 30px 30px;\n  background-color: rgba(214, 214, 214, 0.8588235294);\n}\n\n#comments-popup-wrapper.hide {\n  display: none;\n}\n\n#cardboards.hide {\n  display: none;\n}\n\n#comments-popup-wrapper > section {\n  gap: 20px;\n  padding: 15px 20px;\n}\n\n#comments-popup-wrapper > #show-header-section {\n  padding: 35px 20px;\n}\n\n#post-comment-form > * {\n  border: 1px solid black;\n  padding: 6px 8px;\n}\n\n#post-comment-form > :nth-child(1) {\n  border: none;\n  align-self: center;\n}\n\n.menu-item.selected {\n  text-decoration: underline;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n/* -----------------------------------------------------Start  of desktop styling ------------------------------------------------------------------------------------ */\n@media screen and (width >= 768px) {\n  header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 40px 15%;\n    padding-bottom: 30px;\n  }\n  #post-comment-form {\n    padding: 0 30%;\n  }\n  #show-poster {\n    max-height: 300px;\n  }\n  #comments-popup-wrapper {\n    margin: 30px 25%;\n    padding: 10px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/close-btn.png":
/*!******************************!*\
  !*** ./assets/close-btn.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/close-btn.png\");\n\n//# sourceURL=webpack://webpack-template/./assets/close-btn.png?");

/***/ }),

/***/ "./assets/poster-placeholder.png":
/*!***************************************!*\
  !*** ./assets/poster-placeholder.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/poster-placeholder.png\");\n\n//# sourceURL=webpack://webpack-template/./assets/poster-placeholder.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/InvolvementApi.js":
/*!*******************************!*\
  !*** ./src/InvolvementApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\r\nclass InvolvementApi {\r\n  constructor() {\r\n    this.appId = 'G291qOZJqU5Pic49OeDp';\r\n    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n    this.endPoints = {\r\n      makeApp: '/apps',\r\n      likes: `/apps/${this.appId}/likes`,\r\n      comments: `/apps/${this.appId}/comments`,\r\n      reservations: `/apps/${this.appId}/reservations`,\r\n    };\r\n  }\r\n\r\n  makeApp = () => {};\r\n\r\n  getLikes = async () => {\r\n    try {\r\n      const response = await fetch(`${this.baseUrl + this.endPoints.likes}`);\r\n      const responseBody = await response.json();\r\n      if (responseBody.error && responseBody.error.message) {\r\n        return [];\r\n      }\r\n\r\n      if (!response.ok) {\r\n        throw new Error('failed to retrieve comments from API');\r\n      }\r\n\r\n      const cardboardLikes = document.getElementsByClassName('cardboard-likes');\r\n      for (let i = 0; i < cardboardLikes.length; i += 1) {\r\n        for (let j = 0; j < responseBody.length; j += 1) {\r\n          const elem = cardboardLikes[i].parentElement.parentElement.parentElement.id;\r\n          if (responseBody[j].item_id === elem) {\r\n            cardboardLikes[i].innerHTML = `${responseBody[j].likes} likes`;\r\n          }\r\n        }\r\n      }\r\n\r\n      return responseBody;\r\n    } catch (error) {\r\n      return error.message;\r\n    }\r\n  };\r\n\r\n  postLike = async (id) => {\r\n    console.log('posting like...');\r\n    console.log(`${this.baseUrl + this.endPoints.likes}`);\r\n    try {\r\n      const response = await fetch(`${this.baseUrl + this.endPoints.likes}`, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: id,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n      if (!response.ok) {\r\n        throw new Error('Failed to create a post.');\r\n      }\r\n      console.log('like posted...');\r\n      this.getLikes();\r\n    } catch (error) {\r\n      console.error('Error creating a post:', error.message);\r\n    }\r\n  };\r\n\r\n  getComments = async (showId) => {\r\n    try {\r\n      const response = await fetch(`${this.baseUrl + this.endPoints.comments}?item_id=${showId}`);\r\n      const responseBody = await response.json();\r\n      if (responseBody.error && responseBody.error.message) {\r\n        return [];\r\n      }\r\n\r\n      if (!response.ok) {\r\n        throw new Error('failed to retrieve comments from API');\r\n      }\r\n      return responseBody;\r\n    } catch (error) {\r\n      return error.message;\r\n    }\r\n  };\r\n\r\n  postComment = async (id, name, msg) => {\r\n    try {\r\n      const response = await fetch(`${this.baseUrl + this.endPoints.comments}`, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: id,\r\n          username: name,\r\n          comment: msg,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n      if (!response.ok) {\r\n        throw new Error('Failed to create a post.');\r\n      }\r\n      console.log('comment posted...');\r\n    } catch (error) {\r\n      console.error('Error creating a post:', error.message);\r\n    }\r\n  };\r\n\r\n  getReservations = () => {};\r\n\r\n  postReservation = () => {};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvolvementApi);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/InvolvementApi.js?");

/***/ }),

/***/ "./src/addNewLike.js":
/*!***************************!*\
  !*** ./src/addNewLike.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementApi.js */ \"./src/InvolvementApi.js\");\n\r\n\r\nconst addNewLike = () => {\r\n  const heartButtons = document.getElementsByClassName('cardboard-heart-button');\r\n  for (let i = 0; i < heartButtons.length; i += 1) {\r\n    heartButtons[i].addEventListener('click', (event) => {\r\n      const involvementApi = new _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      involvementApi.postLike(event.target.parentElement.parentElement.parentElement.id);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewLike);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/addNewLike.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createCards = (commentPopup, popupWrapper, cardboards) => {\r\n  for (let i = 0; i < 9; i += 1) {\r\n    const li = document.createElement('li');\r\n    li.setAttribute('class', 'cardboard');\r\n\r\n    const img1 = document.createElement('img');\r\n    img1.setAttribute('class', 'cardboard-image');\r\n    img1.setAttribute('alt', 'img');\r\n    img1.setAttribute('src', '');\r\n\r\n    const div1 = document.createElement('div');\r\n    div1.setAttribute('class', 'cardboard-superior');\r\n\r\n    const h3 = document.createElement('h3');\r\n    h3.setAttribute('class', 'cardboard-title');\r\n\r\n    const div2 = document.createElement('div');\r\n    div2.setAttribute('class', 'cardboard-inferior');\r\n\r\n    const buttonHeart = document.createElement('button');\r\n    buttonHeart.setAttribute('class', 'cardboard-heart-button');\r\n    buttonHeart.innerHTML = '&#9825';\r\n\r\n    const p = document.createElement('p');\r\n    p.setAttribute('class', 'cardboard-likes');\r\n    p.innerHTML = '0 likes';\r\n\r\n    const buttonComments = document.createElement('button');\r\n    buttonComments.setAttribute('class', 'comments-button');\r\n    buttonComments.innerHTML = 'Comments';\r\n    buttonComments.addEventListener('click', (e) => {\r\n      commentPopup.openPopup(e, popupWrapper, cardboards);\r\n    });\r\n\r\n    const button2 = document.createElement('button');\r\n    button2.setAttribute('class', 'reservations-button');\r\n    button2.setAttribute('id', 'showPopup');\r\n    button2.innerHTML = 'Reservations';\r\n\r\n    div2.appendChild(buttonHeart);\r\n    div2.appendChild(p);\r\n    div1.appendChild(h3);\r\n    div1.appendChild(div2);\r\n    li.appendChild(img1);\r\n    li.appendChild(div1);\r\n    li.appendChild(buttonComments);\r\n    li.appendChild(button2);\r\n    cardboards.appendChild(li);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/cards.js?");

/***/ }),

/***/ "./src/commentPopup.js":
/*!*****************************!*\
  !*** ./src/commentPopup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getSingleShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSingleShow.js */ \"./src/getSingleShow.js\");\n/* harmony import */ var _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvolvementApi.js */ \"./src/InvolvementApi.js\");\n/* harmony import */ var _assets_poster_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/poster-placeholder.png */ \"./assets/poster-placeholder.png\");\n\r\n\r\n\r\n\r\nclass CommentsPopup {\r\n  constructor() {\r\n    this.involvementApi = new _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  }\r\n\r\n  openPopup = async (e, popupWrapper, cardboards) => {\r\n    popupWrapper.querySelector('#show-poster').src = _assets_poster_placeholder_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    const card = e.target.parentNode;\r\n    popupWrapper.classList.remove('hide');\r\n    cardboards.classList.add('hide');\r\n    await this.populateCard(card.id, popupWrapper);\r\n  };\r\n\r\n  populateCard = async (showID, popupWrapper) => {\r\n    const show = await (0,_getSingleShow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showID);\r\n    const showDetails = popupWrapper.querySelector('#show-details');\r\n    const postCommentBtn = popupWrapper.querySelector('#comment-btn');\r\n    const commentsCounter = popupWrapper.querySelector('#comments-counter');\r\n\r\n    await this.updateCounter(showID, commentsCounter);\r\n\r\n    const postComment = async (e) => {\r\n      e.preventDefault();\r\n      const name = popupWrapper.querySelector('#comment-name');\r\n      const msg = popupWrapper.querySelector('#comment-msg');\r\n      await this.involvementApi.postComment(showID, name.value, msg.value);\r\n      await this.populateComments(showID, popupWrapper);\r\n      name.value = '';\r\n      msg.value = '';\r\n      await this.updateCounter(showID, commentsCounter);\r\n    };\r\n\r\n    postCommentBtn.onclick = postComment;\r\n    popupWrapper.querySelector('#show-poster').src = show.image.medium;\r\n    popupWrapper.querySelector('#show-title').textContent = show.name;\r\n    showDetails.querySelector(':nth-child(1)').innerHTML = `Premiered:<br>${show.premiered}`;\r\n    showDetails.querySelector(':nth-child(2)').innerHTML = `Status:<br>${show.status}`;\r\n    showDetails.querySelector(':nth-child(3)').innerHTML = `Language:<br>${show.language}`;\r\n    showDetails.querySelector(':nth-child(4)').innerHTML = `Rating:<br>${show.rating.average}`;\r\n    this.populateComments(showID, popupWrapper);\r\n  };\r\n\r\n  populateComments = async (showID, popupWrapper) => {\r\n    const showCommentsList = popupWrapper.querySelector('#comments-list');\r\n    const comments = await this.involvementApi.getComments(showID);\r\n\r\n    showCommentsList.innerHTML = '';\r\n    if (!comments.length) {\r\n      const comment = document.createElement('li');\r\n      comment.classList.add('comment-list-item');\r\n      comment.innerHTML = 'There are no comments yet...';\r\n      showCommentsList.appendChild(comment);\r\n      return;\r\n    }\r\n\r\n    comments.forEach((comment) => {\r\n      showCommentsList.appendChild(\r\n        this.createListItem(comment.creation_date, comment.username, comment.comment),\r\n      );\r\n    });\r\n  };\r\n\r\n  closePopup = (popupWrapper, cardboards) => {\r\n    popupWrapper.classList.add('hide');\r\n    cardboards.classList.remove('hide');\r\n  };\r\n\r\n  updateCounter = async (showID, commentsCounter) => {\r\n    const comments = await this.involvementApi.getComments(showID);\r\n    commentsCounter.textContent = comments.length;\r\n  };\r\n\r\n  createListItem = (date, name, msg) => {\r\n    const comment = document.createElement('li');\r\n    comment.classList.add('comment-list-item');\r\n    comment.innerHTML = `\r\n    <li>${date} ${name}: ${msg}</li>\r\n    `;\r\n    return comment;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsPopup);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/commentPopup.js?");

/***/ }),

/***/ "./src/getSingleShow.js":
/*!******************************!*\
  !*** ./src/getSingleShow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl = 'https://api.tvmaze.com';\r\n\r\nconst getSingleShow = async (showID) => {\r\n  const endpoint = `/shows/${showID}`;\r\n  try {\r\n    const response = await fetch(baseUrl + endpoint);\r\n    if (!response.ok) {\r\n      throw new Error('failed to retrieve show information from API');\r\n    }\r\n    const show = await response.json();\r\n    return show;\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSingleShow);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/getSingleShow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_poster_placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/poster-placeholder.png */ \"./assets/poster-placeholder.png\");\n/* harmony import */ var _assets_close_btn_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/close-btn.png */ \"./assets/close-btn.png\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _modules_reservations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reservations.js */ \"./src/modules/reservations.js\");\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentPopup.js */ \"./src/commentPopup.js\");\n/* harmony import */ var _addNewLike_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addNewLike.js */ \"./src/addNewLike.js\");\n/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./likeCounter.js */ \"./src/likeCounter.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_js__WEBPACK_IMPORTED_MODULE_4__, _modules_reservations_js__WEBPACK_IMPORTED_MODULE_5__]);\n([_utils_js__WEBPACK_IMPORTED_MODULE_4__, _modules_reservations_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst showPosterImg = document.getElementById('show-poster');\r\nconst popupCloseBtn = document.getElementById('close-btn');\r\nconst commentsPopup = new _commentPopup_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\nconst popupWrapper = document.getElementById('comments-popup-wrapper');\r\nconst cardboards = document.getElementById('cardboards');\r\n\r\nshowPosterImg.src = _assets_poster_placeholder_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\npopupCloseBtn.src = _assets_close_btn_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\npopupCloseBtn.onclick = () => commentsPopup.closePopup(popupWrapper, cardboards);\r\n(0,_cards_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(commentsPopup, popupWrapper, cardboards);\r\n\r\nconst imgCards = document.getElementsByClassName('cardboard-image');\r\nconst titleCards = document.getElementsByClassName('cardboard-title');\r\nconst liCards = document.getElementsByClassName('cardboard');\r\nconst reservationsBtn = document.getElementsByClassName('reservations-button');\r\n(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(titleCards, imgCards, liCards, reservationsBtn);\r\n\r\n(0,_modules_reservations_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n(0,_addNewLike_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\n(0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/items_counter.js":
/*!******************************!*\
  !*** ./src/items_counter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounters = (items) => {\r\n  const shows = document.getElementsByClassName('menu-item selected');\r\n  shows[0].innerHTML = `shows <span>(${items})</span>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounters);\n\n//# sourceURL=webpack://webpack-template/./src/items_counter.js?");

/***/ }),

/***/ "./src/likeCounter.js":
/*!****************************!*\
  !*** ./src/likeCounter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementApi.js */ \"./src/InvolvementApi.js\");\n\r\n\r\nconst likesCounters = async () => {\r\n  const involvementApi = new _InvolvementApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  const result = await involvementApi.getLikes();\r\n  return result;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesCounters);\r\n\n\n//# sourceURL=webpack://webpack-template/./src/likeCounter.js?");

/***/ }),

/***/ "./src/modules/reservations.js":
/*!*************************************!*\
  !*** ./src/modules/reservations.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/utils.js\");\n/* harmony import */ var _reservationsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservationsCounter.js */ \"./src/modules/reservationsCounter.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_js__WEBPACK_IMPORTED_MODULE_0__]);\n_utils_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nconst reservations = () => {\r\n  const closePopupButton = document.getElementById('closePopup');\r\n  const moviePopup = document.getElementById('moviePopup');\r\n\r\n  const titleCards = document.getElementsByClassName('cardboard-title');\r\n  const reservationsBtn = document.getElementsByClassName('reservations-button');\r\n\r\n  const movieTitleElement = document.getElementById('res-movie-title');\r\n  const movieSummaryElement = document.getElementById('res-movie-summary');\r\n  const movieGenresElement = document.getElementById('res-movie-genres');\r\n  const movieScheduleElement = document.getElementById('res-movie-schedule');\r\n  const movieLanguageElement = document.getElementById('res-movie-language');\r\n  const movieTvElement = document.getElementById('res-movie-tv');\r\n  const img = document.getElementById('res-movie-image');\r\n\r\n  const reservationsContainer = document.getElementById('reservations-container');\r\n\r\n  const updateReservationsCounter = (reservations) => {\r\n    const counter = document.getElementById('reservations-counter');\r\n\r\n    counter.textContent = `Revervations (${(0,_reservationsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reservations)})`;\r\n  };\r\n\r\n  const getReservations = async (id) => {\r\n    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NgaD7H5IJk0fYcqyyaMX/reservations?item_id=${id}`);\r\n    const data = await res.json();\r\n\r\n    let html = '';\r\n\r\n    if (data && data.length) {\r\n      data.forEach((reservations) => {\r\n        html += `<p> ${reservations.date_start} - ${reservations.date_end} by ${reservations.username}</p>`;\r\n      });\r\n\r\n      updateReservationsCounter(data);\r\n\r\n      reservationsContainer.innerHTML = html;\r\n    } else {\r\n      reservationsContainer.innerHTML = html;\r\n    }\r\n  };\r\n\r\n  const createReservations = async (id) => {\r\n    const form = document.getElementById('res-form');\r\n\r\n    const resNameInput = document.getElementById('res-name');\r\n    const startDateInput = document.getElementById('start-date');\r\n    const endDateInput = document.getElementById('end-date');\r\n\r\n    form.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      const username = resNameInput.value;\r\n      const start = startDateInput.value;\r\n      const end = endDateInput.value;\r\n\r\n      try {\r\n        const postData = {\r\n          item_id: id,\r\n          username,\r\n          date_start: start,\r\n          date_end: end,\r\n        };\r\n\r\n        const requestOptions = {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify(postData),\r\n        };\r\n        const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NgaD7H5IJk0fYcqyyaMX/reservations', requestOptions);\r\n\r\n        if (!response.ok) {\r\n          throw new Error('Network response was not ok');\r\n        }\r\n\r\n        getReservations(id);\r\n      } catch (error) {\r\n        throw new Error('Error found');\r\n      }\r\n    });\r\n  };\r\n\r\n  function showMoviePopup(e) {\r\n    const id = e.target.getAttribute('show_id');\r\n\r\n    const currentShow = _utils_js__WEBPACK_IMPORTED_MODULE_0__.shows.filter((show) => show.id === parseInt(id, 10))[0];\r\n\r\n    getReservations(id);\r\n\r\n    createReservations(id);\r\n\r\n    movieTitleElement.innerHTML = currentShow.name;\r\n    movieSummaryElement.innerHTML = `<strong>Summary:</strong> ${currentShow.summary.slice(0, 80)}...`;\r\n    movieGenresElement.innerHTML = `<strong>Genres:</strong> ${currentShow.genres.join(' ')}`;\r\n    movieScheduleElement.innerHTML = `<strong>Schedule:</strong> ${currentShow.schedule.days[0]} ${currentShow.schedule.time}`;\r\n    movieLanguageElement.innerHTML = `<strong>Langauge:</strong> ${currentShow.language}`;\r\n    movieTvElement.innerHTML = `<strong>TV:</strong> ${currentShow.network.name}`;\r\n    img.src = currentShow.image.original;\r\n    moviePopup.classList.remove('hidden');\r\n  }\r\n\r\n  function closeMoviePopup() {\r\n    moviePopup.classList.add('hidden');\r\n  }\r\n\r\n  for (let i = 0; i < titleCards.length; i += 1) {\r\n    reservationsBtn[i].addEventListener('click', showMoviePopup);\r\n  }\r\n\r\n  closePopupButton.addEventListener('click', closeMoviePopup);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservations);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-template/./src/modules/reservations.js?");

/***/ }),

/***/ "./src/modules/reservationsCounter.js":
/*!********************************************!*\
  !*** ./src/modules/reservationsCounter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reservationsCounter = (reservations) => reservations.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationsCounter);\n\n//# sourceURL=webpack://webpack-template/./src/modules/reservationsCounter.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   shows: () => (/* binding */ shows)\n/* harmony export */ });\n/* harmony import */ var _items_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items_counter.js */ \"./src/items_counter.js\");\n\r\n\r\nconst fullPath = 'https://api.tvmaze.com/shows';\r\n\r\nconst getAllShows = async () => {\r\n  try {\r\n    const response = await fetch(fullPath);\r\n    if (!response.ok) {\r\n      throw new Error('Failed to create a post.');\r\n    }\r\n    const showsResponse = await response.json();\r\n    return showsResponse;\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n};\r\n\r\nconst result = await getAllShows();\r\nconst qtyShows = result.length;\r\n\r\n(0,_items_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result.length);\r\n\r\nconst getRandomInt = (max) => Math.floor(Math.random() * max);\r\n\r\nconst selectedIndex = [];\r\nfor (let i = 0; i < 9; i += 1) {\r\n  selectedIndex.push(getRandomInt(qtyShows));\r\n}\r\n\r\nconst selectedShows = [];\r\nselectedIndex.forEach((element) => selectedShows.push(result[element]));\r\n\r\nconst populateCards = (titleCards, imgCards, liCards, reservationsBtn) => {\r\n  for (let i = 0; i < titleCards.length; i += 1) {\r\n    titleCards[i].innerHTML = selectedShows[i].name;\r\n    imgCards[i].src = selectedShows[i].image.medium;\r\n    liCards[i].id = selectedShows[i].id;\r\n    reservationsBtn[i].setAttribute('show_id', selectedShows[i].id);\r\n  }\r\n};\r\nconst shows = selectedShows;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateCards);\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://webpack-template/./src/utils.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;