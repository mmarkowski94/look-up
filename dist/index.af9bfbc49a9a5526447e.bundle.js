/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((module) => {

function sum(a, b) {
  return a + b;
}

module.exports = {
  sum: sum
};

/***/ }),

/***/ "./src/sum2.js":
/*!*********************!*\
  !*** ./src/sum2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum2": () => (/* binding */ sum2)
/* harmony export */ });
function sum2(a, b) {
  return a + b;
}

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/img/proba.png":
/*!**********************************!*\
  !*** ./src/assets/img/proba.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2e222e5fb750b3ed1bb.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum2 */ "./src/sum2.js");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _assets_img_proba_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/proba.png */ "./src/assets/img/proba.png");
var sum = (__webpack_require__(/*! ./sum */ "./src/sum.js").sum);




console.log('Hello World');
console.log(sum(2, 3));
console.log((0,_sum2__WEBPACK_IMPORTED_MODULE_0__.sum2)(2, 3));
var heading = document.querySelector('#demo'),
    sumValue = sum(10, 5);
heading.innerText = "10+10= ".concat(sumValue);
var myIcon = new Image();
myIcon.src = _assets_img_proba_png__WEBPACK_IMPORTED_MODULE_2__;
document.querySelector('div').append(myIcon);
document.querySelector('div').classList.add('change');
fetch('https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json').then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
})["catch"](function (error) {
  console.error(error);
});
var destinationHTML = document.getElementById("desctination");
var departureHTML = document.getElementById("departure");
fetch('https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json').then(function (response) {
  return response.json();
}).then(function (data) {
  data.destination.forEach(function (destinationElem) {
    var elem = document.createElement('option');
    elem.textContent = destinationElem.desc;
    elem.setAttribute('value', destinationElem.value);
    destinationHTML.appendChild(elem);
  });
})["catch"](function (error) {
  console.error(error);
});
fetch('https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json').then(function (response) {
  return response.json();
}).then(function (data) {
  data.departure.forEach(function (departureElem) {
    var elem = document.createElement('option');
    elem.textContent = departureElem.desc;
    elem.setAttribute('value', departureElem.value);
    departureHTML.appendChild(elem);
  });
})["catch"](function (error) {
  console.error(error);
}); // <option value="volvo">Volvo</option>
})();

/******/ })()
;
//# sourceMappingURL=index.af9bfbc49a9a5526447e.bundle.js.map