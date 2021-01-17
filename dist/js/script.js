/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! namespace exports */
/*! export burger [provided] [no usage info] [missing usage info prevents renaming] */
/*! export items [provided] [no usage info] [missing usage info prevents renaming] */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => /* binding */ burger,\n/* harmony export */   \"menu\": () => /* binding */ menu,\n/* harmony export */   \"items\": () => /* binding */ items,\n/* harmony export */   \"toggler\": () => /* binding */ toggler\n/* harmony export */ });\n\r\n\r\n//burger menu\r\n\r\nconst burger = document.querySelector('.burger'),\r\n    menu = document.querySelector('.menu'),\r\n    items = document.querySelectorAll('.menu__item');\r\n\r\nconst toggler = () => {\r\n    burger.classList.toggle('is-active');\r\n    menu.classList.toggle('is-active');\r\n    document.querySelector('body').classList.toggle('is-active');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://fls-gulp/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n//modules\r\n\r\n;\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n\r\n    if (window.innerWidth < 768) {\r\n        _burger_js__WEBPACK_IMPORTED_MODULE_0__.burger.addEventListener('click', () => (0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.toggler)(_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger));\r\n        _burger_js__WEBPACK_IMPORTED_MODULE_0__.items.forEach((item, i) => { item.addEventListener('click', () => (0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.toggler)(item)) });\r\n    };\r\n\r\n    const anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n\r\n    for (let anchor of anchors) {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault()\r\n\r\n            const blockID = anchor.getAttribute('href').substr(1)\r\n\r\n            document.getElementById(blockID).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            })\r\n        })\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack://fls-gulp/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;