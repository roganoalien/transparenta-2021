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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0KUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LottieHolder; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_in_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v4n3");
/* harmony import */ var react_in_viewport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_in_viewport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iYUx");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_3__);


 // import Lottie from 'lottie-react';



function TheLottie({
  animationData,
  inViewport,
  forwardedRef,
  addClass
}) {
  // const [paused, setPaused] = useState(true);
  // const elem = useRef();
  // const changePausedStatus = () => {
  // 	const scroll = window.scrollY || window.pageYOffset;
  // 	const boundsTop = elem.current.getBoundingClientRect().top + scroll;
  // 	const viewport = {
  // 		bottom: scroll + window.innerHeight,
  // 		top: scroll
  // 	};
  // 	const bounds = {
  // 		bottom: boundsTop + elem.current.clientHeight,
  // 		top: boundsTop
  // 	};
  // 	if (bounds.bottom > viewport.top || bounds.top < viewport) {
  // 		console.log('Reproduce animación');
  // 		setPaused(false);
  // 	} else {
  // 		console.log('Detiene animación');
  // 		setPaused(true);
  // 	}
  // };
  // useEffect(() => {
  // 	changePausedStatus();
  // 	document.addEventListener('scroll', changePausedStatus);
  // 	window.addEventListener('resize', changePausedStatus);
  // 	window.addEventListener('orientationchange', changePausedStatus);
  // 	return () => {
  // 		document.removeEventListener('scroll', changePausedStatus);
  // 		window.removeEventListener('resize', changePausedStatus);
  // 		window.removeEventListener('orientationchange', changePausedStatus);
  // 	};
  // }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `holder-lottie-item pointer-events-none ${addClass}` // ref={elem}
    ,
    ref: forwardedRef,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lottie__WEBPACK_IMPORTED_MODULE_3___default.a, {
      options: {
        loop: true,
        autoplay: true,
        animationData
      },
      isPaused: inViewport ? false : true
    })
  });
}

const LottieHolder = react_in_viewport__WEBPACK_IMPORTED_MODULE_2___default()(TheLottie);

/***/ }),

/***/ "0QCG":
/***/ (function(module, exports) {

module.exports = require("remark-gfm");

/***/ }),

/***/ "0g9a":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "27Yp":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":415,\"w\":500,\"h\":1000,\"nm\":\"Servicios_Beneficios_N2\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rombo 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[324.042,642.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec C\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":20,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":49,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":50,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":185,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":186,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":235,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":264,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":265,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":400,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":401,\"s\":[0]},{\"t\":415,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[402.317,811.283,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-285.683,271.283,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.484,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":50,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.496,\"y\":1},\"o\":{\"x\":0.589,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.864,\"y\":0},\"t\":142,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,5.283],[34.317,154.717],[-34.317,154.717],[-34.317,5.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":185,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":235,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.484,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":265,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":310,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.496,\"y\":1},\"o\":{\"x\":0.589,\"y\":0},\"t\":342,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.864,\"y\":0},\"t\":357,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,5.283],[34.317,154.717],[-34.317,154.717],[-34.317,5.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":400,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"t\":415,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-285.683,271.283],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec G\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[402.317,811.283,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-285.683,271.283,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.573,\"y\":1},\"o\":{\"x\":0.72,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,85.283],[34.317,154.717],[-34.317,154.717],[-34.317,85.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.467,\"y\":0},\"t\":132,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.401,\"y\":1},\"o\":{\"x\":0.774,\"y\":0},\"t\":147,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-178.717],[34.317,154.717],[-34.317,154.717],[-34.317,-178.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":200,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":215,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":235,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.573,\"y\":1},\"o\":{\"x\":0.72,\"y\":0},\"t\":250,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,85.283],[34.317,154.717],[-34.317,154.717],[-34.317,85.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":295,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.467,\"y\":0},\"t\":347,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.401,\"y\":1},\"o\":{\"x\":0.774,\"y\":0},\"t\":362,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-178.717],[34.317,154.717],[-34.317,154.717],[-34.317,-178.717]],\"c\":true}]},{\"t\":415,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-285.683,271.283],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rombo 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[324.042,642.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rombo 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[192.042,287.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Circle 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[191.282,150.282,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-168.718,-337.718,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":0,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":15,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":60,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":112,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":127,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":180,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":194,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":209,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":254,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":306,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":321,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":374,\"s\":[133.565,133.565]},{\"t\":415,\"s\":[133.565,133.565]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-168.718,-337.718],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Circle 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[191.282,150.282,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-168.718,-337.718,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":0,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":15,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":60,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":112,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":127,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":180,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":194,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":209,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":254,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":306,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":321,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":374,\"s\":[133.565,133.565]},{\"t\":415,\"s\":[133.565,133.565]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-168.718,-337.718],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Rombo 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[192.042,287.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "2kr9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _states_language_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VaE3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _states_language_state__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _states_transparenta_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3hX0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _states_transparenta_state__WEBPACK_IMPORTED_MODULE_1__["a"]; });

// Exports everything from all states



/***/ }),

/***/ "3hX0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransparentaContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransparentaProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TransparentaContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function TransparentaProvider({
  children
}) {
  const {
    0: transOpen,
    1: setTransOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(TransparentaContext.Provider, {
    value: {
      transOpen,
      setTransOpen
    },
    children: children
  });
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BXVH");


/***/ }),

/***/ "BXVH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Servicios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0QCG");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0KUr");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2kr9");
/* harmony import */ var _animations_servicios_consultoria_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("WD0v");
var _animations_servicios_consultoria_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("WD0v", 1);
/* harmony import */ var _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("OJuq");
var _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("OJuq", 1);
/* harmony import */ var _animations_servicios_beneficios_1_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("heeV");
var _animations_servicios_beneficios_1_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t("heeV", 1);
/* harmony import */ var _animations_servicios_resultados_1_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("e9gy");
var _animations_servicios_resultados_1_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t("e9gy", 1);
/* harmony import */ var _animations_servicios_especiales_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("mE4d");
var _animations_servicios_especiales_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t("mE4d", 1);
/* harmony import */ var _animations_servicios_beneficios_2_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("0g9a");
var _animations_servicios_beneficios_2_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t("0g9a", 1);
/* harmony import */ var _animations_servicios_resultados_2_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("gMs8");
var _animations_servicios_resultados_2_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t("gMs8", 1);
/* harmony import */ var _animations_remake_servicios_benefits_01_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ExCI");
var _animations_remake_servicios_benefits_01_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t("ExCI", 1);
/* harmony import */ var _animations_remake_servicios_benefits_02_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("27Yp");
var _animations_remake_servicios_benefits_02_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t("27Yp", 1);










 //LOTTIES

 // import one_bottom from '../animations/servicios/01_b.json';








 // const AnimTopRight = styled.img`
// 	transform: translate(0, -25%);
// `;
// const AnimTopRight2 = styled.img`
// 	transform: translate(80px, -25%);
// `;

function Servicios({
  data,
  error,
  message
}) {
  const {
    lang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_8__[/* LanguageContext */ "a"]);
  console.log(data);

  if (!error) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
          children: data['title_' + lang]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].main, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        className: "flex flex-wrap items-center justify-center mt-90 lg:mt-5 px-35 lg:px-0",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "container mx-auto flex flex-wrap items-center justify-center px-0 md:px-35 lg:px-18",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
            className: "header w-full mt-4 flex items-stretch justify-center flex-wrap h-auto",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-8/12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                className: "text-4xl lg:text-5xl text-main font-bold w-full",
                children: data['title_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "markdown-container-servicios",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['subtitle_' + lang]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-4/12 relative flex lg:mt-0 items-center justify-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_servicios_consultoria_json__WEBPACK_IMPORTED_MODULE_9__
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "max-w-md block lg:hidden my-10",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_10__
                })
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
            className: "benefits w-full mt-1 flex items-stretch justify-center flex-wrap lg:mt-20",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-8/12 order-1 lg:order-2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20",
                children: data['benefitsOne_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "simple-container text-black pl-0 lg:pl-20 mt-10 font-medium",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['benefitsOneDescription_' + lang]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "w-full flex items-center justify-center",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: "/animations/servicios-benefits-fake.svg",
                  alt: "Anim",
                  className: "block lg:hidden mt-10"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-10 lg:mt-20",
                children: data['resultsOne_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "simple-container text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['resultsOneDescription_' + lang]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-4/12 flex flex-col items-center justify-center order-2 lg:order-1",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "hidden lg:block",
                style: {
                  maxWidth: 250
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_remake_servicios_benefits_01_json__WEBPACK_IMPORTED_MODULE_16__
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/animations/servicios-resultados-fake.svg",
                alt: "Anim",
                className: "block lg:hidden mt-10" // width="250"

              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
            className: "price w-full mt-1 flex items-stretch justify-start flex-wrap mb-10",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full flex items-center justify-center flex-wrap",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-2xl lg:text-3xl text-main font-bold mt-16 mb-10 w-full",
                children: data['price_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "w-full lg:w-6/12 border-2 border-black py-8 flex flex-col items-center justify-center shadow-transparenta",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  className: "font-bold text-black text-lg lg:text-xl xl:text-2xl w-full text-center",
                  children: data['priceContentTitle_' + lang]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: "/servicios_precio_estatico.svg",
                  alt: "Servicios Precios",
                  className: "w-8/12 lg:w-10/12 xl:w-full mt-6 mb-14 max-w-md"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  className: "text-black -mt-9 w-full text-center text-lg lg:text-xl xl:text-2xl",
                  children: data['priceContentPrice_' + lang]
                })]
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
            className: "header w-full mt-0 lg:mt-16 flex items-stretch justify-center flex-wrap",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-8/12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-4xl lg:text-5xl text-main font-bold w-full",
                children: data['special_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "simple-container text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-20 font-medium",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['specialDescription_' + lang]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-4/12 relative flex items-center justify-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_servicios_especiales_json__WEBPACK_IMPORTED_MODULE_13__
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "max-w-md block lg:hidden my-10",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_10__
                })
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
            className: "benefits w-full mt-0 lg:mt-20 flex items-stretch justify-center flex-wrap",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-8/12 order-2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20",
                children: data['benefitsOne_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "simple-container text-black pl-0 lg:pl-20 mt-10 font-medium",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['benefitsOneDescription_' + lang]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "w-full flex items-center justify-center",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: "/animations/servicios-benefits-fake.svg",
                  alt: "Anim",
                  className: "block lg:hidden mt-10"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                className: "text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-10 lg:mt-18",
                children: data['resultsOne_' + lang]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "simple-container text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],
                  children: data['resultsOneDescription_' + lang]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
              className: "w-full lg:w-4/12 flex flex-col items-center justify-center order-2 lg:order-1 mb-10 lg:mb-20",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "hidden lg:block",
                style: {
                  maxWidth: 250
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                  animationData: _animations_remake_servicios_benefits_02_json__WEBPACK_IMPORTED_MODULE_17__
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/animations/servicios-resultados-fake.svg",
                alt: "Anim",
                className: "block lg:hidden mt-10" // width="250"

              })]
            })]
          })]
        })
      }, "page-servicios")]
    });
  } else {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].main, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      className: "flex flex-wrap items-center justify-center mt-90 lg:mt-5 px-35 lg:px-0",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container mx-auto flex flex-wrap items-center justify-center",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
          className: "header w-full mt-4 flex items-stretch justify-center flex-wrap h-auto",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
            className: "w-full lg:w-8/12 h-screen",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
              className: "text-4xl lg:text-5xl text-main font-bold w-full",
              children: error
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "markdown-container-servicios",
              children: message
            })]
          })
        })
      })
    }, "page-servicios-error");
  }
}
async function getServerSideProps(context) {
  const data = await fetch(`${"http://52.6.136.253:1337"}/services`).then(res => res.json()); // const data = await fetch(`http://localhost:1337/services`).then((res) =>
  // 	res.json()
  // );

  if (data.statusCode === 500) {
    return {
      props: {
        error: 500,
        status: 500,
        message: 'Parece que hay un error en el servidor. Por favor intente de nuevo más tarde.'
      }
    };
  }

  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "ExCI":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":413,\"w\":500,\"h\":1000,\"nm\":\"Servicios_ Beneficios_N1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rombo 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[186.042,715.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Circle 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[186.032,850.782,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-168.718,-337.718,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":2,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":0,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":15,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":60,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":112,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":127,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":180,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":195,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":210,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":255,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":307,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":322,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":375,\"s\":[133.565,133.565]},{\"t\":413,\"s\":[133.565,133.565]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-168.718,-337.718],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Circle 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[186.032,850.782,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-168.718,-337.718,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":0,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":15,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":60,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":112,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":127,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":180,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.529,0.529],\"y\":[1,1]},\"o\":{\"x\":[0.597,0.597],\"y\":[0,0]},\"t\":195,\"s\":[133.565,133.565]},{\"i\":{\"x\":[0.467,0.467],\"y\":[1,1]},\"o\":{\"x\":[0.862,0.862],\"y\":[0,0]},\"t\":210,\"s\":[109.565,109.565]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":255,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.5,0.5],\"y\":[1,1]},\"o\":{\"x\":[0.521,0.521],\"y\":[0,0]},\"t\":307,\"s\":[201.565,201.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.96,0.96],\"y\":[0,0]},\"t\":322,\"s\":[226.565,226.565]},{\"i\":{\"x\":[0.434,0.434],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":375,\"s\":[133.565,133.565]},{\"t\":413,\"s\":[133.565,133.565]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-168.718,-337.718],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rombo 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[186.042,715.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rombo 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[316.042,358.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Rec C\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":35,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":49,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":50,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":185,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":186,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":248,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":262,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":263,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":398,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":399,\"s\":[0]},{\"t\":413,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[392.317,197.283,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-285.683,271.283,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.484,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":50,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.496,\"y\":1},\"o\":{\"x\":0.589,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.864,\"y\":0},\"t\":142,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,5.283],[34.317,154.717],[-34.317,154.717],[-34.317,5.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":185,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":248,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.484,\"y\":1},\"o\":{\"x\":0.752,\"y\":0},\"t\":263,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":308,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.496,\"y\":1},\"o\":{\"x\":0.589,\"y\":0},\"t\":340,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,29.283],[34.317,154.717],[-34.317,154.717],[-34.317,29.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.864,\"y\":0},\"t\":355,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,5.283],[34.317,154.717],[-34.317,154.717],[-34.317,5.283]],\"c\":true}]},{\"i\":{\"x\":0.51,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":398,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]},{\"t\":413,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,154.783],[34.317,154.717],[-34.317,154.717],[-34.317,154.783]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-285.683,271.283],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Rec G\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[392.317,197.283,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-285.683,271.283,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.573,\"y\":1},\"o\":{\"x\":0.72,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,85.283],[34.317,154.717],[-34.317,154.717],[-34.317,85.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.467,\"y\":0},\"t\":132,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.401,\"y\":1},\"o\":{\"x\":0.774,\"y\":0},\"t\":147,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-178.717],[34.317,154.717],[-34.317,154.717],[-34.317,-178.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":200,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":213,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.516,\"y\":0},\"t\":233,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]},{\"i\":{\"x\":0.573,\"y\":1},\"o\":{\"x\":0.72,\"y\":0},\"t\":248,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,85.283],[34.317,154.717],[-34.317,154.717],[-34.317,85.283]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":293,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.467,\"y\":0},\"t\":345,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-158.717],[34.317,154.717],[-34.317,154.717],[-34.317,-158.717]],\"c\":true}]},{\"i\":{\"x\":0.401,\"y\":1},\"o\":{\"x\":0.774,\"y\":0},\"t\":360,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,-178.717],[34.317,154.717],[-34.317,154.717],[-34.317,-178.717]],\"c\":true}]},{\"t\":413,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.317,61.283],[34.317,154.717],[-34.317,154.717],[-34.317,61.283]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-285.683,271.283],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Rombo 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[316.042,358.042,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-291.958,-133.958,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[193.084,193.084],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-291.958,-133.958],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "OJuq":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":420,\"w\":800,\"h\":200,\"nm\":\"Producto barra\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[520,164,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.549,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[212.008,39.846],[212.008,-39.846]],\"c\":true}]},{\"i\":{\"x\":0.539,\"y\":1},\"o\":{\"x\":0.679,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[236.008,39.846],[236.008,-39.846]],\"c\":true}]},{\"i\":{\"x\":0.539,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[-43.992,39.846],[-43.992,-39.846]],\"c\":true}]},{\"i\":{\"x\":0.539,\"y\":1},\"o\":{\"x\":0.688,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[-43.992,39.846],[-43.992,-39.846]],\"c\":true}]},{\"i\":{\"x\":0.555,\"y\":1},\"o\":{\"x\":0.555,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[-71.992,39.846],[-71.992,-39.846]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.549,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[212.008,39.846],[212.008,-39.846]],\"c\":true}]},{\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[212.008,39.846],[212.008,-39.846]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-124.008,-66.154],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[520,164,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.992,-39.846],[343.992,39.846],[-343.992,39.846],[-343.992,-39.846]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-124.008,-66.154],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "VaE3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LanguageProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function LanguageProvider({
  children
}) {
  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('es');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    }
  }, []);

  const setSpanish = () => {
    localStorage.setItem('lang', 'es');
    setLang('es');
  };

  const setEnglish = () => {
    localStorage.setItem('lang', 'en');
    setLang('en');
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LanguageContext.Provider, {
    value: {
      lang,
      setSpanish,
      setEnglish
    },
    children: children
  });
}

/***/ }),

/***/ "WD0v":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":375,\"w\":500,\"h\":550,\"nm\":\"Servicios_Consultoria\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec G2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[287.468,277.374,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[727.468,-89.626,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[255.937,402.336],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[727.468,-89.626],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec C3\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":24,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":170,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":171,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":195,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":219,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":220,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":365,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":366,\"s\":[0]},{\"t\":375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-360,247,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.714,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":25,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":110,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[182.348,-37.859],[182.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":170,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.714,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":220,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":305,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":320,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[182.348,-37.859],[182.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":365,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[460.348,-86.141],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec C2\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":24,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":170,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":171,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":195,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":219,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":220,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":365,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":366,\"s\":[0]},{\"t\":375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-360,247,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.714,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":25,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":110,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[182.348,-37.859],[182.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":170,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.714,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":220,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":305,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.348,-37.859],[150.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":320,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[182.348,-37.859],[182.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.451,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":365,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.402,-37.859],[-30.402,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254961799,0.64313695571,0.662744978362,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[460.348,-86.141],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rec C1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-360,247,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[30.348,-37.859],[30.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.647,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.348,-37.859],[10.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[250.348,-37.859],[250.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[250.348,-37.859],[250.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.285,\"y\":1},\"o\":{\"x\":0.399,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[270.348,-37.859],[270.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[30.348,-37.859],[30.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[30.348,-37.859],[30.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.647,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.348,-37.859],[10.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[250.348,-37.859],[250.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[250.348,-37.859],[250.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"i\":{\"x\":0.285,\"y\":1},\"o\":{\"x\":0.399,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[270.348,-37.859],[270.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]},{\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[30.348,-37.859],[30.348,37.859],[-30.348,37.859],[-30.348,-37.859]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[460.348,-86.141],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rec G1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[287.468,277.374,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[727.468,-89.626,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[255.937,402.336],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[727.468,-89.626],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e9gy":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "gMs8":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "heeV":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "mE4d":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":395,\"w\":500,\"h\":550,\"nm\":\"Servicios_DesarrollosEspeciales\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec G 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[254.173,362.485,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[608.173,-20.515,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[356.346,262.97],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[608.173,-20.515],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec C b2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[177.327,341.661,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[685.327,6.661,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":132,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":147,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":200,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":215,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":230,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":275,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":327,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":342,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"t\":395,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[685.327,6.661],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec C b1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[177.327,341.661,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[685.327,6.661,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":132,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":147,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":200,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":215,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":230,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":275,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":327,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":342,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"t\":395,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[685.327,6.661],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rec C 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[331.327,387.661,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[685.327,6.661,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"t\":395,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[685.327,6.661],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rec C 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[331.327,387.661,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[685.327,6.661,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.544,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.83,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-26.661],[29.327,54.661],[-29.327,54.661],[-29.327,-26.661]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-254.661],[29.327,54.661],[-29.327,54.661],[-29.327,-254.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.537,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-282.661],[29.327,54.661],[-29.327,54.661],[-29.327,-282.661]],\"c\":true}]},{\"i\":{\"x\":0.142,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]},{\"t\":395,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.327,-54.661],[29.327,54.661],[-29.327,54.661],[-29.327,-54.661]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[685.327,6.661],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Rec G\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[254.173,362.485,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[608.173,-20.515,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[356.346,262.97],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[608.173,-20.515],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "v4n3":
/***/ (function(module, exports) {

module.exports = require("react-in-viewport");

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });