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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

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

/***/ "3fyl":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":374,\"w\":400,\"h\":550,\"nm\":\"Producto_Modulos\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Circle 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[190.203,365.203,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[232.203,88.203,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[245.406,245.406],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[232.203,88.203],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[228.121,218.359,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[514.121,-68.641,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":4,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.566,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.273,\"y\":1},\"o\":{\"x\":0.646,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-112.641],[-42.121,-112.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.108,\"y\":1},\"o\":{\"x\":0.493,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,191.359],[-42.121,191.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.566,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.273,\"y\":1},\"o\":{\"x\":0.646,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-112.641],[-42.121,-112.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.108,\"y\":1},\"o\":{\"x\":0.493,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,191.359],[-42.121,191.359],[-42.121,-159.359]],\"c\":true}]},{\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[514.121,-68.641],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[228.121,218.359,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[514.121,-68.641,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.566,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.273,\"y\":1},\"o\":{\"x\":0.646,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-112.641],[-42.121,-112.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.108,\"y\":1},\"o\":{\"x\":0.493,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,191.359],[-42.121,191.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.566,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.273,\"y\":1},\"o\":{\"x\":0.646,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-112.641],[-42.121,-112.641],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,159.359],[-42.121,159.359],[-42.121,-159.359]],\"c\":true}]},{\"i\":{\"x\":0.108,\"y\":1},\"o\":{\"x\":0.493,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,191.359],[-42.121,191.359],[-42.121,-159.359]],\"c\":true}]},{\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[46.121,-159.359],[46.121,-80.641],[-42.121,-80.641],[-42.121,-159.359]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[514.121,-68.641],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Circle\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[190.203,365.203,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[232.203,88.203,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[245.406,245.406],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[232.203,88.203],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("79W4");


/***/ }),

/***/ "79W4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Producto; });
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1nAM");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mNWG");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0KUr");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2kr9");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0QCG");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _animations_producto_producto_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("xsjl");
var _animations_producto_producto_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t("xsjl", 1);
/* harmony import */ var _animations_producto_barra_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("yV1/");
var _animations_producto_barra_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t("yV1/", 1);
/* harmony import */ var _animations_producto_modulos_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3fyl");
var _animations_producto_modulos_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t("3fyl", 1);
/* harmony import */ var _animations_producto_beneficios_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("9sto");
var _animations_producto_beneficios_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t("9sto", 1);
/* harmony import */ var _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("OJuq");
var _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t("OJuq", 1);














const _ = __webpack_require__("YLtl"); // LOTTIES







swiper__WEBPACK_IMPORTED_MODULE_5___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_5__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"]]);
const AnimTopRight = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img`
	transform: translate(0, -25%);
`;
function Producto({
  data,
  windowWidth,
  imageURL
}) {
  // const [width, setWidth] = useState(null);
  const {
    lang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_8__[/* LanguageContext */ "a"]);

  const functionalities = _.sortBy(data.functionalities, function (o) {
    return o.id;
  });

  const licenses = _.sortBy(data.licenses, function (o) {
    return o.id;
  }); // useEffect(() => {
  // 	setWidth(window.innerWidth);
  // 	const handleResize = () => setWidth(window.innerWidth);
  // 	window.addEventListener('resize', handleResize);
  // 	return () => window.removeEventListener('resize', handleResize);
  // }, []);


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
      className: "flex flex-wrap items-center justify-center px-35 lg:px-0 mt-90x2 lg:mt-20",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container mx-auto flex flex-wrap items-center justify-center px-0 md:px-35 lg:px-18",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          className: "header w-full lg:mt-0 flex items-start justify-center flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
            className: "w-full lg:w-8/12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
              className: "text-4xl lg:text-5xl text-main font-bold w-full",
              children: data['title_' + lang]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "text-black text-lg mt-4 w-full font-medium lg:font-bold pr-0 lg:pr-20",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
                plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_10___default.a],
                children: data['subtitle_' + lang]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full lg:w-4/12 relative hidden lg:flex items-center justify-content pointer-events-none",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "mt-0 lg:-mt-24 relative",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                addClass: "lg:transform lg:scale-110 xl:scale-100",
                animationData: _animations_producto_producto_json__WEBPACK_IMPORTED_MODULE_11__
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full flex items-center justify-center mt-2 mb-5",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "max-w-md",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                animationData: _animations_producto_02_m_json__WEBPACK_IMPORTED_MODULE_15__
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          className: "header w-full mb-6 lg:mb-10 mt-0 flex items-start justify-center flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
            className: "w-full lg:w-6/12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: "text-2xl lg:text-3xl font-bold text-main",
              children: data['modules_' + lang]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "markdown-container2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
                plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_10___default.a],
                children: data['modulesDescription_' + lang]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full lg:w-6/12 hidden lg:flex flex-col items-center justify-center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "max-w-sm",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                animationData: _animations_producto_modulos_json__WEBPACK_IMPORTED_MODULE_13__
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          className: "benefits w-full mb-4 mt-0 lg:mt-4 flex items-stretch justify-center flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
            className: "w-full lg:w-7/12 order-1 lg:order-2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: "text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20",
              children: data['benefits_' + lang]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "markdown-container",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
                plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_10___default.a],
                children: data['benefitsDescription_' + lang]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full lg:w-5/12 flex flex-col items-center justify-center order-2 lg:order-1 lg:mt-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "w-6/12 lg:w-full max-w-xs",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_7__[/* LottieHolder */ "a"], {
                animationData: _animations_producto_beneficios_json__WEBPACK_IMPORTED_MODULE_14__
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          className: "funcionalidad w-full mb-5 lg:mb-0 mt-5 lg:mt-16 flex items-start justify-center flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
            className: "w-full flex items-center justify-between flex-wrap",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: "w-auto text-3xl lg:text-4xl text-main font-bold",
              children: data['functionality_' + lang]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full flex items-stretch justify-center pt-10 lg:pt-20",
            children: windowWidth > 1023 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: functionalities.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start lg:px-5 xl:px-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "holder border-3 border-black px-8 py-12 shadow-transparenta",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/animations/producto-anim-func.svg",
                    alt: "Funcionalidad1",
                    width: "300"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  className: "font-bold px-6 xl:px-16 mt-10 text-center text-sm",
                  children: item['description_' + lang]
                })]
              }, item['title_' + lang]))
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["Swiper"], {
              className: "w-full the-product-holder overflow-hidden",
              spaceBetween: 0,
              slidesPerView: windowWidth > 600 && windowWidth < 10241 ? 2 : 1,
              centeredSlides: windowWidth > 600 && windowWidth < 10241 ? false : true,
              grabCursor: true,
              longSwipes: false,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
              pagination: {
                clickable: true
              },
              children: functionalities.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
                className: "flex flex-col items-center justify-start w-full sm:max-w-sm lg:w-auto px-20 sm:px-5 lg:px-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "holder border-3 border-black px-8 py-12 shadow-transparenta mx-10",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/animations/producto-anim-func.svg",
                    alt: "Funcionalidad1",
                    width: "300"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  className: "font-normal mt-10 px-14 text-center",
                  children: item['description_' + lang]
                })]
              }, item['title_' + lang]))
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          className: "licencias w-full mb-10 lg:mb-40 mt-0 lg:mt-16 flex items-start justify-center flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
            className: "w-full flex items-center justify-between",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: "w-auto text-3xl lg:text-4xl text-main font-bold",
              children: data['licenses_' + lang]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
            className: "w-full flex items-stretch justify-center pt-4 lg:pt-16",
            children: windowWidth > 1023 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "w-full flex items-stretch justify-center",
              children: licenses.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "holder border-3 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "w-full font-bold text-lg lg:text-xl text-center mb-2",
                    children: item['title_' + lang]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    className: "px-8",
                    src: imageURL + item.image.url,
                    alt: item['title_' + lang]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "w-full text-lg lg:text-xl text-center mt-2",
                    children: item['price_' + lang]
                  })]
                })
              }, item['title_' + lang]))
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["Swiper"], {
                className: "w-full the-license",
                spaceBetween: 0,
                slidesPerView: windowWidth > 600 && windowWidth < 10241 ? 2 : 1,
                centeredSlides: windowWidth > 600 && windowWidth < 10241 ? false : true,
                grabCursor: true,
                longSwipes: false,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false
                },
                pagination: {
                  clickable: true
                },
                children: licenses.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
                  className: "item w-full flex flex-col items-center justify-start px-4 self-stretch",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "holder border-3 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12 max-w-xxs sm:max-w-full",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "w-full font-bold text-lg text-center mb-8",
                      children: item['title_' + lang]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: imageURL + item.image.url,
                      alt: item['title_' + lang],
                      className: "w-full",
                      style: {
                        maxWidth: 181
                      }
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "w-full text-lg text-center mt-8",
                      children: item['price_' + lang]
                    })]
                  })
                }, item['title_' + lang]))
              })
            })
          })]
        })]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const data = await fetch(`${"http://52.6.136.253:1337"}/product`).then(res => res.json());

  if (!data) {
    return {
      props: {
        error: 404,
        status: 500
      }
    };
  }

  return {
    props: {
      data,
      imageURL: "http://52.6.136.253:1337"
    }
  };
}

/***/ }),

/***/ "9sto":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":381,\"w\":450,\"h\":600,\"nm\":\"Producto_Beneficios\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Circle 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[243.203,194.203,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[232.203,88.203,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[245.406,245.406],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[232.203,88.203],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec C\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":40,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":185,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":186,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":195,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":234,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":235,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":380,\"s\":[100]},{\"t\":381,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[171.94,386.906,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-545.06,10.906,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.618,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"i\":{\"x\":0.481,\"y\":1},\"o\":{\"x\":0.618,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":85,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,14.907],[82.94,138.906],[-82.94,138.906],[-82.94,14.907]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.567,\"y\":0},\"t\":117,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,14.907],[82.94,138.906],[-82.94,138.906],[-82.94,14.907]],\"c\":true}]},{\"i\":{\"x\":0.396,\"y\":1},\"o\":{\"x\":0.699,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-13.093],[82.94,138.906],[-82.94,138.906],[-82.94,-13.093]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":185,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.618,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"i\":{\"x\":0.481,\"y\":1},\"o\":{\"x\":0.618,\"y\":0},\"t\":235,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":280,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,14.907],[82.94,138.906],[-82.94,138.906],[-82.94,14.907]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.567,\"y\":0},\"t\":312,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,14.907],[82.94,138.906],[-82.94,138.906],[-82.94,14.907]],\"c\":true}]},{\"i\":{\"x\":0.396,\"y\":1},\"o\":{\"x\":0.699,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-13.093],[82.94,138.906],[-82.94,138.906],[-82.94,-13.093]],\"c\":true}]},{\"i\":{\"x\":0.396,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":380,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]},{\"t\":381,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,138.907],[82.94,138.906],[-82.94,138.906],[-82.94,138.907]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-545.06,10.906],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec G\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[171.94,386.906,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-545.06,10.906,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.449,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,61.094],[82.94,138.906],[-82.94,138.906],[-82.94,61.094]],\"c\":true}]},{\"i\":{\"x\":0.565,\"y\":1},\"o\":{\"x\":0.667,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,93.094],[82.94,138.906],[-82.94,138.906],[-82.94,93.094]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-150.906],[82.94,138.906],[-82.94,138.906],[-82.94,-150.906]],\"c\":true}]},{\"i\":{\"x\":0.515,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-150.906],[82.94,138.906],[-82.94,138.906],[-82.94,-150.906]],\"c\":true}]},{\"i\":{\"x\":0.243,\"y\":1},\"o\":{\"x\":0.395,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-182.906],[82.94,138.906],[-82.94,138.906],[-82.94,-182.906]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,61.094],[82.94,138.906],[-82.94,138.906],[-82.94,61.094]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.449,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,61.094],[82.94,138.906],[-82.94,138.906],[-82.94,61.094]],\"c\":true}]},{\"i\":{\"x\":0.565,\"y\":1},\"o\":{\"x\":0.667,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,93.094],[82.94,138.906],[-82.94,138.906],[-82.94,93.094]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-150.906],[82.94,138.906],[-82.94,138.906],[-82.94,-150.906]],\"c\":true}]},{\"i\":{\"x\":0.515,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-150.906],[82.94,138.906],[-82.94,138.906],[-82.94,-150.906]],\"c\":true}]},{\"i\":{\"x\":0.243,\"y\":1},\"o\":{\"x\":0.395,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,-182.906],[82.94,138.906],[-82.94,138.906],[-82.94,-182.906]],\"c\":true}]},{\"i\":{\"x\":0.243,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,61.094],[82.94,138.906],[-82.94,138.906],[-82.94,61.094]],\"c\":true}]},{\"t\":381,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[82.94,61.094],[82.94,138.906],[-82.94,138.906],[-82.94,61.094]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-545.06,10.906],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Circle 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[243.203,194.203,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[232.203,88.203,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[245.406,245.406],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[232.203,88.203],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

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

/***/ }),

/***/ "xsjl":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":388,\"w\":500,\"h\":750,\"nm\":\"Producto_Licencia\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec G 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[293.614,392.491,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[615.614,49.491,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[251.227,354.982],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[615.614,49.491],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec C 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[332.449,577.912,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[656.449,228.912,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.463,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.596,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,79.088],[42.449,112.912],[-42.449,112.912],[-42.449,79.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.515,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.486,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-180.912],[42.449,112.912],[-42.449,112.912],[-42.449,-180.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.463,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.596,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,79.088],[42.449,112.912],[-42.449,112.912],[-42.449,79.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.515,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.486,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-180.912],[42.449,112.912],[-42.449,112.912],[-42.449,-180.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"t\":388,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[656.449,228.912],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rec C 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[332.449,577.912,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[656.449,228.912,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.463,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.596,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,79.088],[42.449,112.912],[-42.449,112.912],[-42.449,79.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.515,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.486,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-180.912],[42.449,112.912],[-42.449,112.912],[-42.449,-180.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.463,\"y\":0},\"t\":194,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"i\":{\"x\":0.596,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":209,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,79.088],[42.449,112.912],[-42.449,112.912],[-42.449,79.088]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":254,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.515,\"y\":0},\"t\":306,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-148.912],[42.449,112.912],[-42.449,112.912],[-42.449,-148.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.486,\"y\":0},\"t\":321,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,-180.912],[42.449,112.912],[-42.449,112.912],[-42.449,-180.912]],\"c\":true}]},{\"i\":{\"x\":0.37,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":374,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]},{\"t\":388,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.449,51.088],[42.449,112.912],[-42.449,112.912],[-42.449,51.088]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[656.449,228.912],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Circle 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[199.579,188.579,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[489.579,-164.421,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.761,0.761],\"y\":[1,1]},\"o\":{\"x\":[0.29,0.29],\"y\":[0,0]},\"t\":15,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.063,0.063],\"y\":[1,1]},\"o\":{\"x\":[0.553,0.553],\"y\":[0,0]},\"t\":30,\"s\":[133.158,133.158]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":75,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.571,0.571],\"y\":[1,1]},\"o\":{\"x\":[0.604,0.604],\"y\":[0,0]},\"t\":127,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.418,0.418],\"y\":[1,1]},\"o\":{\"x\":[0.825,0.825],\"y\":[0,0]},\"t\":142,\"s\":[316.158,316.158]},{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0]},\"t\":194,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.761,0.761],\"y\":[1,1]},\"o\":{\"x\":[0.29,0.29],\"y\":[0,0]},\"t\":209,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.063,0.063],\"y\":[1,1]},\"o\":{\"x\":[0.553,0.553],\"y\":[0,0]},\"t\":224,\"s\":[133.158,133.158]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":269,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.571,0.571],\"y\":[1,1]},\"o\":{\"x\":[0.604,0.604],\"y\":[0,0]},\"t\":321,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.418,0.418],\"y\":[1,1]},\"o\":{\"x\":[0.825,0.825],\"y\":[0,0]},\"t\":336,\"s\":[316.158,316.158]},{\"t\":388,\"s\":[187.158,187.158]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[489.579,-164.421],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Circle 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[199.579,188.579,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[489.579,-164.421,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.761,0.761],\"y\":[1,1]},\"o\":{\"x\":[0.29,0.29],\"y\":[0,0]},\"t\":15,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.063,0.063],\"y\":[1,1]},\"o\":{\"x\":[0.553,0.553],\"y\":[0,0]},\"t\":30,\"s\":[133.158,133.158]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":75,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.571,0.571],\"y\":[1,1]},\"o\":{\"x\":[0.604,0.604],\"y\":[0,0]},\"t\":127,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.418,0.418],\"y\":[1,1]},\"o\":{\"x\":[0.825,0.825],\"y\":[0,0]},\"t\":142,\"s\":[316.158,316.158]},{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0]},\"t\":194,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.761,0.761],\"y\":[1,1]},\"o\":{\"x\":[0.29,0.29],\"y\":[0,0]},\"t\":209,\"s\":[187.158,187.158]},{\"i\":{\"x\":[0.063,0.063],\"y\":[1,1]},\"o\":{\"x\":[0.553,0.553],\"y\":[0,0]},\"t\":224,\"s\":[133.158,133.158]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":269,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.571,0.571],\"y\":[1,1]},\"o\":{\"x\":[0.604,0.604],\"y\":[0,0]},\"t\":321,\"s\":[255.158,255.158]},{\"i\":{\"x\":[0.418,0.418],\"y\":[1,1]},\"o\":{\"x\":[0.825,0.825],\"y\":[0,0]},\"t\":336,\"s\":[316.158,316.158]},{\"t\":388,\"s\":[187.158,187.158]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[489.579,-164.421],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Rec G 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[293.614,392.491,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[615.614,49.491,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[251.227,354.982],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[615.614,49.491],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "yV1/":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ })

/******/ });