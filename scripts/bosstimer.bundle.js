(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@alt1/base"), require("@alt1/ocr"));
	else if(typeof define === 'function' && define.amd)
		define(["@alt1/base", "@alt1/ocr"], factory);
	else if(typeof exports === 'object')
		exports["@alt1/bosstimer"] = factory(require("@alt1/base"), require("@alt1/ocr"));
	else
		root["BossTimer"] = factory(root["A1lib"], root["OCR"]);
})((typeof self!='undefined'?self:this), function(__WEBPACK_EXTERNAL_MODULE__alt1_base__, __WEBPACK_EXTERNAL_MODULE__alt1_ocr__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/bossicon.data.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=__webpack_require__("@alt1/base").ImageDetect.imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAK4SURBVDhPnZRdSJNRGMf/7959z8nmx3R+zTkl0EIbCtEEL0qK8ouirCBvhS60CPq6iLoJoQwNS6qbikDrokCl8BNv3j4w24zsQsMt94qmm/pu82Padno3X6XRduPv5pzzPOf/5znPORyEYIefk/Bkl7BDW3qR/VU7Yae4cHC3zNg52F+3E9H6Mg1uelEI745ldhH+JRrigFcErUorhAH3DYZI9BoEOA+mP4+gsLuBElKwVT0ghpIS0BoNNmfdSLxTGs4lKhKw6aFAfb33jAR8frisTixMLuDb+hLklBJnjhxCuiEPPxgGlq7LFFPZTPItFrCOCXT2D2EdPhTKk6AzJUNbpAetliHs7HjUQ961vcGS1wuHkgORBeGcXEb9wUpYzMVwOOwwGLLBWEfx5EM30nPjQW3QyF1NgDZehfL6GpgaqihRyCz7QgWVqNfxZ5ZCTMnQ3FuNU1fz8JgX2sZtSNbpYB0fw1OmB6ev7UFLXw3ERAZxUAwtrwsZhXzCZiFqB5soc44Jv6c5dLZ9xLlLB7DXkor3X6yg/Wvo58eCUh3OXixBx8NPWHBy2G80oXagaaenO2YhVJnpqDAWYKCVxa1jg/DO+SGXizDvckGiEIXXN/n4QIsTlbn7oMhME5Rb7Lj+ywtzA2HnVxBUBpClkCFOqoRvYwW/1vygVyTISFWhbrT1P21EZduocwz4qXfDmxKEODMLdh3fnwwDvDqCSb0LamOWsDOSqJVtc9RcRqYW5+AXbULGN9uoSUavjYmpiVrZNg7OiZPVhxEnEeNEdTkcnlkhE52YZr4JJ1HGydFYcR45SRloPF4HlZrv3QQb81OghTGCrrLrJIl/b6vfZzH1dgRFGykY62ZgkGuRL03B/b6O28LWCGKe/2XxFSLVqjHzx4MAFQQdpJAmVcPv9vE3eTeKDvgLCXf33x7hyDMAAAAASUVORK5CYII=")

/***/ }),

/***/ "./assets/timerfont.fontmeta.json":
/***/ ((module) => {

module.exports = {"chars":[{"width":11,"bonus":405,"chr":"0","pixels":[0,4,217,243,0,5,255,255,0,6,255,255,0,7,255,255,0,8,217,243,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,1,11,217,204,2,1,255,255,2,2,255,255,2,3,255,153,2,4,255,102,2,5,255,68,2,6,255,68,2,7,255,68,2,8,255,102,2,9,255,153,2,10,255,255,2,11,255,255,3,0,217,255,3,1,255,255,3,2,255,119,3,3,255,0,3,10,217,144,3,11,255,255,3,12,255,221,4,0,255,255,4,1,255,255,4,2,255,0,4,11,255,255,4,12,255,255,4,13,217,0,5,0,255,241,5,1,255,255,5,2,255,68,5,11,255,255,5,12,255,238,5,13,255,0,6,1,255,255,6,2,255,238,6,10,255,241,6,11,255,255,6,12,255,153,6,13,255,3,7,1,220,252,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,221,7,12,255,17,8,2,217,156,8,3,255,221,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,221,8,10,255,119,8,11,255,17,8,12,217,0,9,4,217,19,9,5,255,68,9,6,255,68,9,7,255,68,9,8,255,17,9,9,255,0,9,10,217,0],"secondary":false},{"width":9,"bonus":305,"chr":"1","pixels":[1,2,255,255,1,3,255,255,1,4,217,144,1,11,255,255,1,12,255,255,2,1,255,255,2,2,255,255,2,3,255,136,2,4,255,0,2,11,255,255,2,12,255,255,2,13,255,0,3,0,255,241,3,1,255,255,3,2,255,255,3,3,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,3,8,255,255,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,255,3,13,255,0,4,0,255,255,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,255,4,11,255,255,4,12,255,255,4,13,255,0,5,1,255,68,5,2,255,68,5,3,255,68,5,4,255,68,5,5,255,68,5,6,255,68,5,7,255,68,5,8,255,68,5,9,255,68,5,10,255,68,5,11,255,255,5,12,255,255,5,13,255,0,6,11,255,255,6,12,255,255,6,13,255,0,7,11,255,255,7,12,255,255,7,13,255,0,8,12,255,0,8,13,255,0],"secondary":false},{"width":10,"bonus":380,"chr":"2","pixels":[0,11,255,255,0,12,255,241,1,1,255,241,1,2,255,255,1,3,220,138,1,9,255,255,1,10,255,255,1,11,255,255,1,12,255,255,1,13,255,3,2,1,255,255,2,2,255,205,2,3,255,17,2,8,255,255,2,9,255,255,2,10,255,204,2,11,255,255,2,12,255,255,2,13,255,0,3,0,255,241,3,1,255,255,3,2,255,85,3,3,217,3,3,7,255,255,3,8,255,255,3,9,255,136,3,10,255,0,3,11,255,255,3,12,255,255,3,13,255,0,4,0,255,255,4,1,255,255,4,2,255,68,4,6,217,243,4,7,255,255,4,8,255,170,4,9,255,0,4,11,255,255,4,12,255,255,4,13,255,0,5,0,217,243,5,1,255,255,5,2,255,204,5,5,217,243,5,6,255,255,5,7,255,239,5,8,255,17,5,11,255,255,5,12,255,255,5,13,255,0,6,1,255,255,6,2,255,255,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,239,6,7,255,51,6,8,255,3,6,11,255,255,6,12,255,255,6,13,255,0,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,221,7,6,255,51,7,7,255,3,7,11,255,255,7,12,255,255,7,13,255,0,8,3,255,68,8,4,255,51,8,5,255,0,8,6,217,0,8,12,255,119,8,13,255,0],"secondary":false},{"width":10,"bonus":365,"chr":"3","pixels":[0,10,217,243,0,11,255,241,1,0,255,255,1,1,255,255,1,10,217,255,1,11,255,255,1,12,255,121,2,0,255,255,2,1,255,255,2,2,255,0,2,5,217,255,2,11,255,255,2,12,255,204,3,0,255,255,3,1,255,255,3,2,255,0,3,4,255,241,3,5,255,255,3,6,255,255,3,11,255,255,3,12,255,255,3,13,217,3,4,0,255,255,4,1,255,255,4,2,255,102,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,34,4,11,255,255,4,12,255,255,4,13,255,0,5,0,255,255,5,1,255,255,5,2,255,255,5,3,255,240,5,4,255,102,5,5,255,187,5,6,255,255,5,7,255,153,5,10,217,243,5,11,255,255,5,12,255,170,5,13,255,0,6,0,255,255,6,1,255,255,6,2,255,238,6,3,255,51,6,4,255,3,6,6,255,255,6,7,255,255,6,8,255,255,6,9,255,255,6,10,255,255,6,11,255,255,6,12,255,51,7,0,255,255,7,1,255,204,7,2,255,17,7,3,255,3,7,7,255,238,7,8,255,255,7,9,255,255,7,10,255,221,7,11,255,68,7,12,255,0,8,1,255,0,8,2,217,3,8,8,255,70,8,9,255,51,8,10,255,0,8,11,217,0],"secondary":false},{"width":12,"bonus":395,"chr":"4","pixels":[1,8,255,255,1,9,255,255,2,6,217,255,2,7,255,255,2,8,255,255,2,9,255,255,2,10,255,0,3,5,255,255,3,6,255,255,3,7,217,156,3,8,255,255,3,9,255,255,3,10,255,0,4,3,217,255,4,4,255,255,4,5,255,224,4,6,255,68,4,7,255,0,4,8,255,255,4,9,255,255,4,10,255,0,5,2,255,255,5,3,255,255,5,4,217,156,5,5,255,17,5,6,217,0,5,8,255,255,5,9,255,255,5,10,255,0,6,0,255,241,6,1,255,255,6,2,255,239,6,3,255,119,6,4,255,68,6,8,255,255,6,9,255,255,6,10,255,68,7,0,255,255,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,255,8,0,255,255,8,1,255,255,8,2,255,255,8,3,255,255,8,4,255,255,8,5,255,255,8,6,255,255,8,7,255,255,8,8,255,255,8,9,255,255,8,10,255,255,8,11,255,255,8,12,255,255,8,13,255,0,9,1,255,0,9,2,255,0,9,3,255,0,9,4,255,0,9,5,255,0,9,6,255,0,9,7,255,0,9,8,255,255,9,9,255,255,9,10,255,0,9,11,255,0,9,12,255,0,9,13,255,0,10,9,255,187,10,10,255,0],"secondary":false},{"width":10,"bonus":360,"chr":"5","pixels":[1,4,217,243,1,5,255,255,1,6,255,255,1,10,255,241,1,11,255,255,2,0,255,255,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,102,2,11,255,255,2,12,255,153,3,0,255,255,3,1,255,255,3,2,255,119,3,3,255,119,3,4,255,68,3,5,255,221,3,6,255,255,3,7,255,17,3,11,255,255,3,12,255,238,4,0,255,255,4,1,255,255,4,2,255,0,4,5,255,255,4,6,255,255,4,7,255,0,4,11,255,255,4,12,255,255,4,13,255,3,5,0,255,255,5,1,255,255,5,2,255,0,5,5,255,241,5,6,255,255,5,7,255,68,5,11,255,255,5,12,255,238,5,13,255,0,6,0,255,255,6,1,255,255,6,2,255,0,6,6,255,255,6,7,255,204,6,10,255,241,6,11,255,255,6,12,255,153,6,13,255,3,7,0,255,255,7,1,255,255,7,2,255,0,7,6,255,239,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,238,7,12,255,17,8,1,255,68,8,2,255,0,8,7,255,171,8,8,255,255,8,9,255,238,8,10,255,153,8,11,255,17,8,12,255,3,9,9,255,0,9,10,255,3],"secondary":false},{"width":11,"bonus":400,"chr":"6","pixels":[0,6,255,255,0,7,255,255,0,8,255,241,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,2,2,255,255,2,3,255,255,2,4,255,221,2,5,255,170,2,6,255,255,2,7,255,153,2,8,255,68,2,9,255,153,2,10,255,255,2,11,255,255,2,12,217,125,3,1,255,255,3,2,255,255,3,3,255,119,3,4,255,0,3,5,255,155,3,6,255,255,3,7,255,34,3,10,217,144,3,11,255,255,3,12,255,204,4,1,255,255,4,2,255,119,4,3,255,0,4,5,255,241,4,6,255,255,4,7,255,0,4,11,255,255,4,12,255,255,4,13,217,3,5,0,255,255,5,1,255,255,5,2,255,17,5,5,255,255,5,6,255,255,5,7,255,34,5,11,255,255,5,12,255,255,5,13,255,0,6,0,255,255,6,1,255,255,6,2,255,0,6,6,255,255,6,7,255,170,6,11,255,255,6,12,255,170,6,13,255,0,7,0,217,243,7,1,255,255,7,2,255,85,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,68,8,1,217,99,8,2,255,0,8,7,255,221,8,8,255,255,8,9,255,255,8,10,255,238,8,11,255,102,8,12,255,0,9,8,217,58,9,9,255,68,9,10,255,0,9,11,255,3],"secondary":false},{"width":10,"bonus":290,"chr":"7","pixels":[1,0,255,255,1,1,255,255,2,0,255,255,2,1,255,255,2,2,255,0,2,11,255,255,2,12,255,255,3,0,255,255,3,1,255,255,3,2,255,0,3,9,255,255,3,10,255,255,3,11,255,255,3,12,255,153,3,13,255,0,4,0,255,255,4,1,255,255,4,2,255,0,4,6,217,255,4,7,255,255,4,8,255,255,4,9,255,255,4,10,255,153,4,11,255,34,4,12,255,0,5,0,255,255,5,1,255,255,5,2,255,0,5,4,217,255,5,5,255,255,5,6,255,255,5,7,255,255,5,8,255,153,5,9,255,34,5,10,255,0,6,0,255,255,6,1,255,255,6,2,255,204,6,3,255,255,6,4,255,255,6,5,255,255,6,6,255,153,6,7,255,34,6,8,255,0,7,0,255,255,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,153,7,5,255,34,7,6,255,0,8,0,255,255,8,1,255,238,8,2,255,119,8,3,255,17,8,4,255,0,9,1,255,0,9,2,255,3],"secondary":false},{"width":11,"bonus":435,"chr":"8","pixels":[0,8,255,241,0,9,255,255,1,2,255,255,1,3,255,255,1,4,255,240,1,7,255,255,1,8,255,255,1,9,255,255,1,10,255,255,1,11,255,239,2,1,255,255,2,2,255,255,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,220,232,2,8,255,85,2,9,255,85,2,10,255,238,2,11,255,255,2,12,255,154,3,0,217,243,3,1,255,255,3,2,255,119,3,3,255,0,3,4,255,136,3,5,255,255,3,6,255,238,3,7,255,17,3,8,217,3,3,11,255,255,3,12,255,221,4,0,255,255,4,1,255,255,4,2,255,0,4,5,255,224,4,6,255,255,4,7,255,70,4,11,255,255,4,12,255,255,4,13,217,0,5,0,255,255,5,1,255,255,5,2,255,17,5,6,255,255,5,7,255,153,5,11,255,255,5,12,255,238,5,13,255,0,6,1,255,255,6,2,255,170,6,5,217,255,6,6,255,255,6,7,255,255,6,11,255,255,6,12,255,170,6,13,255,3,7,1,255,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,222,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,255,7,11,255,255,7,12,255,68,8,2,255,221,8,3,255,255,8,4,255,204,8,5,255,102,8,6,255,0,8,7,255,155,8,8,255,255,8,9,255,255,8,10,255,238,8,11,255,102,8,12,255,0,9,3,217,0,9,4,255,0,9,5,217,3,9,9,255,68,9,10,255,0,9,11,255,3],"secondary":false},{"width":10,"bonus":420,"chr":"9","pixels":[0,3,255,241,0,4,255,255,0,5,217,255,1,1,255,241,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,239,1,11,255,241,2,1,255,255,2,2,255,221,2,3,255,102,2,4,255,68,2,5,255,119,2,6,255,238,2,7,255,255,2,8,255,154,2,11,255,255,2,12,255,255,3,0,255,241,3,1,255,255,3,2,255,34,3,3,217,0,3,7,255,255,3,8,255,238,3,11,255,255,3,12,255,255,3,13,255,0,4,0,255,255,4,1,255,255,4,2,255,17,4,7,255,255,4,8,255,238,4,9,255,3,4,11,255,255,4,12,255,221,4,13,255,0,5,0,217,243,5,1,255,255,5,2,255,153,5,7,255,255,5,8,255,170,5,9,255,20,5,10,217,243,5,11,255,255,5,12,255,119,5,13,217,0,6,1,255,255,6,2,255,255,6,3,217,218,6,6,217,243,6,7,255,255,6,8,255,187,6,9,255,239,6,10,255,255,6,11,255,222,6,12,255,17,7,1,217,168,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,7,9,255,255,7,10,255,205,7,11,255,51,7,12,217,0,8,3,255,153,8,4,255,204,8,5,255,255,8,6,255,255,8,7,255,238,8,8,255,170,8,9,255,102,8,10,255,0,8,11,217,3,9,5,217,3,9,6,255,0,9,7,255,0,9,8,255,3],"secondary":false},{"width":4,"bonus":70,"chr":":","pixels":[0,2,255,255,0,3,255,255,0,10,255,255,0,11,255,255,1,2,255,255,1,3,255,255,1,4,255,68,1,10,255,255,1,11,255,255,1,12,255,0,2,3,255,68,2,4,255,17,2,11,255,68,2,12,255,0],"secondary":true}],"width":12,"spacewidth":3,"shadow":true,"height":14,"basey":12}

/***/ }),

/***/ "@alt1/base":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__alt1_base__;

/***/ }),

/***/ "@alt1/ocr":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__alt1_ocr__;

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BossTimerReader)
/* harmony export */ });
/* harmony import */ var _alt1_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@alt1/base");
/* harmony import */ var _alt1_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alt1_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alt1_ocr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@alt1/ocr");
/* harmony import */ var _alt1_ocr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alt1_ocr__WEBPACK_IMPORTED_MODULE_1__);



let font = __webpack_require__("./assets/timerfont.fontmeta.json");
let imgs = _alt1_base__WEBPACK_IMPORTED_MODULE_0__.ImageDetect.webpackImages({
    bossicon: __webpack_require__("./assets/bossicon.data.png")
});
class BossTimerReader {
    constructor() {
        this.pos = null;
    }
    find(img) {
        if (!img) {
            img = _alt1_base__WEBPACK_IMPORTED_MODULE_0__.captureHoldFullRs();
        }
        let pos = img.findSubimage(imgs.bossicon);
        if (pos.length == 0) {
            return null;
        }
        if (pos.length > 1) {
            console.log("more than one possible boss timer found");
        }
        this.pos = { x: pos[0].x - 8, y: pos[0].y - 12, width: 120, height: 35 };
        return this.pos;
    }
    read(img) {
        if (!this.pos) {
            return null;
        }
        let buf;
        if (!img) {
            buf = _alt1_base__WEBPACK_IMPORTED_MODULE_0__.capture(this.pos);
        }
        else {
            buf = img.toData(this.pos.x, this.pos.y, this.pos.width, this.pos.height);
        }
        let timestr = _alt1_ocr__WEBPACK_IMPORTED_MODULE_1__.findReadLine(buf, font, [[255, 255, 255]], 56, 23, 30, 1);
        let m = timestr.text.match(/^(\d{2}):(\d{2})$/);
        if (!m) {
            return null;
        }
        return {
            minpart: +m[1],
            secpart: +m[2],
            time: (+m[1]) * 60 + (+m[2])
        };
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.bundle.js.map