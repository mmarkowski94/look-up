/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");

var destinationHTML = document.getElementById('desctination');
var departureHTML = document.getElementById('departure');
fetch('https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json').then(function (response) {
  return response.json();
}).then(function (data) {
  data.destination.forEach(function (destinationElem) {
    var elem = document.createElement('option');
    elem.textContent = destinationElem.desc;
    elem.setAttribute('value', destinationElem.value);
    destinationHTML.appendChild(elem);
  }), data.departure.forEach(function (departureElem) {
    var elem = document.createElement('option');
    elem.textContent = departureElem.desc;
    elem.setAttribute('value', departureElem.value);
    departureHTML.appendChild(elem);
  });
})["catch"](function (error) {
  console.error(error);
});

function hidden() {
  var departureChecked = document.getElementById('departure').innerText;
  console.log('------');
  console.log(departureChecked);
  console.log(document.getElementById('desctination').children);
  Array.from(document.getElementById('desctination').children).forEach(function (children) {
    if (children.innerText === departureChecked) {
      children.classList.add('hidden');
    }
  });
}

departureHTML.addEventListener("change", hidden);
})();

/******/ })()
;
//# sourceMappingURL=index.7137966e03f6b084f55b.bundle.js.map