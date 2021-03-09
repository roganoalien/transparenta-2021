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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "1TWh":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":378,\"w\":350,\"h\":700,\"nm\":\"Home_Necesidad_Izquierda\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec G 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[121.102,372.808,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-619.898,18.808,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.606,\"y\":1},\"o\":{\"x\":0.512,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.798,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,199.192],[62.102,272.808],[-62.102,272.808],[-62.102,199.192]],\"c\":true}]},{\"i\":{\"x\":0.643,\"y\":1},\"o\":{\"x\":0.551,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.547,\"y\":1},\"o\":{\"x\":0.541,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.756,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-328.808],[62.102,272.808],[-62.102,272.808],[-62.102,-328.808]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.606,\"y\":1},\"o\":{\"x\":0.512,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.798,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,199.192],[62.102,272.808],[-62.102,272.808],[-62.102,199.192]],\"c\":true}]},{\"i\":{\"x\":0.643,\"y\":1},\"o\":{\"x\":0.551,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.547,\"y\":1},\"o\":{\"x\":0.541,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.756,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-328.808],[62.102,272.808],[-62.102,272.808],[-62.102,-328.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"t\":378,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-619.898,18.808],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Cuarto circ 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.01],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":15,\"s\":[12]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":30,\"s\":[-7]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":75,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.579],\"y\":[0]},\"t\":80,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":113,\"s\":[-29]},{\"i\":{\"x\":[0.549],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":143,\"s\":[49]},{\"i\":{\"x\":[0.488],\"y\":[1]},\"o\":{\"x\":[0.367],\"y\":[0]},\"t\":166,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":189,\"s\":[12]},{\"i\":{\"x\":[0.01],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":204,\"s\":[12]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":219,\"s\":[-7]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":264,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.579],\"y\":[0]},\"t\":269,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":302,\"s\":[-29]},{\"i\":{\"x\":[0.549],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":332,\"s\":[49]},{\"i\":{\"x\":[0.488],\"y\":[1]},\"o\":{\"x\":[0.367],\"y\":[0]},\"t\":355,\"s\":[0]},{\"t\":378,\"s\":[12]}],\"ix\":10,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('cycle', 0);\"},\"p\":{\"a\":0,\"k\":[182.75,167.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.25,10.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-34.647,70.883],[0,0]],\"o\":[[69.248,32.752],[0,0],[0,0]],\"v\":[[-93.899,19.678],[78.551,-42.226],[-44.109,-96.844]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Trazo 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[122.054,106.844],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Grupo 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-31.24,63.769],[0,0]],\"o\":[[77.519,35.595],[0,0],[0,0]],\"v\":[[-93.899,19.678],[78.49,-42.213],[-44.109,-96.844]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Combinar trazados 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[122.054,106.844],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Grupo 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Cuarto circ\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.01],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":15,\"s\":[12]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":30,\"s\":[-7]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":75,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.579],\"y\":[0]},\"t\":80,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":113,\"s\":[-29]},{\"i\":{\"x\":[0.549],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":143,\"s\":[49]},{\"i\":{\"x\":[0.488],\"y\":[1]},\"o\":{\"x\":[0.367],\"y\":[0]},\"t\":166,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":189,\"s\":[12]},{\"i\":{\"x\":[0.01],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":204,\"s\":[12]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":219,\"s\":[-7]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":264,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.579],\"y\":[0]},\"t\":269,\"s\":[137]},{\"i\":{\"x\":[0.321],\"y\":[1]},\"o\":{\"x\":[0.577],\"y\":[0]},\"t\":302,\"s\":[-29]},{\"i\":{\"x\":[0.549],\"y\":[1]},\"o\":{\"x\":[0.488],\"y\":[0]},\"t\":332,\"s\":[49]},{\"i\":{\"x\":[0.488],\"y\":[1]},\"o\":{\"x\":[0.367],\"y\":[0]},\"t\":355,\"s\":[0]},{\"t\":378,\"s\":[12]}],\"ix\":10,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('cycle', 0);\"},\"p\":{\"a\":0,\"k\":[182.75,167.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.25,10.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-34.647,70.883],[0,0]],\"o\":[[69.248,32.752],[0,0],[0,0]],\"v\":[[-93.899,19.678],[78.551,-42.226],[-44.109,-96.844]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282000014361,0.301999978458,0.317999985639,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Trazo 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[122.054,106.844],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Grupo 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-31.24,63.769],[0,0]],\"o\":[[77.519,35.595],[0,0],[0,0]],\"v\":[[-93.899,19.678],[78.49,-42.213],[-44.109,-96.844]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Combinar trazados 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.536999990426,0.642999985639,0.663000009574,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[122.054,106.844],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Grupo 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rec C 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":31,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":170,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":171,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":180,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":210,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":211,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":350,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":351,\"s\":[0]},{\"t\":378,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[121.102,372.808,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-619.898,18.808,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"i\":{\"x\":0.546,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":31,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"i\":{\"x\":0.602,\"y\":1},\"o\":{\"x\":0.447,\"y\":0},\"t\":65,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,19.192],[62.102,272.808],[-62.102,272.808],[-62.102,19.192]],\"c\":true}]},{\"i\":{\"x\":0.347,\"y\":1},\"o\":{\"x\":0.438,\"y\":0},\"t\":102,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,19.192],[62.102,272.808],[-62.102,272.808],[-62.102,19.192]],\"c\":true}]},{\"i\":{\"x\":0.475,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":117,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-48.808],[62.102,272.808],[-62.102,272.808],[-62.102,-48.808]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":170,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"i\":{\"x\":0.546,\"y\":1},\"o\":{\"x\":0.663,\"y\":0},\"t\":211,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"i\":{\"x\":0.602,\"y\":1},\"o\":{\"x\":0.447,\"y\":0},\"t\":245,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,19.192],[62.102,272.808],[-62.102,272.808],[-62.102,19.192]],\"c\":true}]},{\"i\":{\"x\":0.347,\"y\":1},\"o\":{\"x\":0.438,\"y\":0},\"t\":282,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,19.192],[62.102,272.808],[-62.102,272.808],[-62.102,19.192]],\"c\":true}]},{\"i\":{\"x\":0.475,\"y\":1},\"o\":{\"x\":0.742,\"y\":0},\"t\":297,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-48.808],[62.102,272.808],[-62.102,272.808],[-62.102,-48.808]],\"c\":true}]},{\"i\":{\"x\":0.475,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":350,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]},{\"t\":378,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,272.802],[62.102,272.808],[-62.102,272.808],[-62.102,272.802]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-619.898,18.808],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rec G 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[121.102,372.808,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-619.898,18.808,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.606,\"y\":1},\"o\":{\"x\":0.512,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.798,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,199.192],[62.102,272.808],[-62.102,272.808],[-62.102,199.192]],\"c\":true}]},{\"i\":{\"x\":0.643,\"y\":1},\"o\":{\"x\":0.551,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.547,\"y\":1},\"o\":{\"x\":0.541,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.756,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-328.808],[62.102,272.808],[-62.102,272.808],[-62.102,-328.808]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.606,\"y\":1},\"o\":{\"x\":0.512,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.798,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,199.192],[62.102,272.808],[-62.102,272.808],[-62.102,199.192]],\"c\":true}]},{\"i\":{\"x\":0.643,\"y\":1},\"o\":{\"x\":0.551,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.547,\"y\":1},\"o\":{\"x\":0.541,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-268.808],[62.102,272.808],[-62.102,272.808],[-62.102,-268.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.756,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,-328.808],[62.102,272.808],[-62.102,272.808],[-62.102,-328.808]],\"c\":true}]},{\"i\":{\"x\":0.42,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]},{\"t\":378,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[62.102,171.192],[62.102,272.808],[-62.102,272.808],[-62.102,171.192]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949020026712,0.949020026712,0.949020026712,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-619.898,18.808],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1nAM");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LottieHolder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0KUr");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2kr9");
/* harmony import */ var _animations_home_01_l_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1TWh");
var _animations_home_01_l_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("1TWh", 1);
/* harmony import */ var _animations_home_02_r_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("iZ7G");
var _animations_home_02_r_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t("iZ7G", 1);
/* harmony import */ var _animations_home_03_m_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("gTCU");
var _animations_home_03_m_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("gTCU", 1);
/* harmony import */ var _animations_home_04_l_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eFl2");
var _animations_home_04_l_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("eFl2", 1);








 // LOTTIES

 // una necesidad izquierda

 // necesidad rombo

 // lo que hacemos

 // barra

swiper__WEBPACK_IMPORTED_MODULE_4___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"]]);
const tempImages = ['aleatica.png', 'posadas.png', 'fideicomisos.png', 'desarrollador.png'];
function Home({
  data,
  windowWidth
}) {
  const {
    0: position,
    1: setPosition
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: transitioning,
    1: setTransitioning
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const clients = data.clients;
  const {
    lang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_6__[/* LanguageContext */ "a"]); // useEffect(() => {
  // setWidth(window.innerWidth);
  // const handleResize = () => setWidth(window.innerWidth);
  // window.addEventListener('resize', handleResize);
  // return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const changeClient = up => {
    setTransitioning(true);
    setTimeout(function () {
      if (up) {
        // if (position + 1 < clientData.length) {
        if (position + 1 < clients.length) {
          setPosition(position + 1);
        } else {
          setPosition(0);
        }
      } else {
        if (position !== 0) {
          setPosition(position - 1);
        } else {
          // setPosition(clientData.length - 1);
          setPosition(clients.length - 1);
        }
      }

      setTimeout(function () {
        setTransitioning(false);
      }, 100);
    }, 500);
  };

  const changeClientResponsive = index => {
    setTransitioning(true);
    setTimeout(function () {
      setPosition(index);
      setTimeout(function () {
        setTransitioning(false);
      }, 100);
    }, 500);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: data['title_' + lang]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].section, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      className: "necesidad-section w-screen relative px-35 mt-90 lg:px-0 z-30 mb-0 lg:mb-20",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container mx-auto flex items-stretch justify-start flex-wrap mt-90x2 lg:mt-0",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "left-animation-container w-full lg:w-2/12 xl:w-3/12 hidden lg:flex items-start justify-start pointer-events-none",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_5__[/* LottieHolder */ "a"], {
            animationData: _animations_home_01_l_json__WEBPACK_IMPORTED_MODULE_7__
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "center-content w-full lg:w-9/12 xl:w-7/12 h-auto flex flex-col items-start justify-start lg:justify-center relative z-50",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            className: "text-4xl lg:text-5xl text-main font-bold w-full",
            children: data['title_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "text-black text-2xl lg:text-3xl mt-4 lg:pt-4 lg:pl-10 font-semibold lg:font-bold w-full lg:w-9/12",
            children: data['subtitle_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "flex items-center justify-between lg:hidden w-full px-10 mt-10 mb-2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/home_res_left.svg",
              alt: "Left Bar"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/home_res_right.svg",
              alt: "Right Icon"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "right-content-animation w-full lg:w-1/12 xl:w-2/12 h-auto hidden lg:flex items-start justify-start relative pointer-events-none",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "absolute bottom-0 lg:-bottom-32 xl:-bottom-10 -right-10",
            style: {
              width: windowWidth < 1024 ? 180 : 340
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_5__[/* LottieHolder */ "a"], {
              animationData: _animations_home_02_r_json__WEBPACK_IMPORTED_MODULE_8__
            })
          })
        })]
      })
    }, "page-index"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].section, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      className: "about-section w-screen h-auto flex items-start justify-center pt-8 lg:pt-16 px-35 lg:px-20",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
        className: "section-container container mx-auto flex flex-wrap items-stretch justify-center",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "left-side w-full lg:w-6/12",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            className: "text-2xl lg:text-3xl font-bold text-main",
            children: data['what_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium",
            children: data['whatDescription_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            className: "block lg:hidden my-10",
            src: "/images/about-one.svg",
            alt: "About 1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            className: "text-2xl lg:text-3xl font-bold text-main mt-20",
            children: data['why_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium",
            children: data['whyDescription_' + lang]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/images/about-three.svg",
            alt: "About 3",
            className: "block lg:hidden my-10"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "right-side w-full md:w-6/12 px-10 pt-16 hidden lg:flex items-center justify-end",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "-mt-20",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_5__[/* LottieHolder */ "a"], {
              animationData: _animations_home_03_m_json__WEBPACK_IMPORTED_MODULE_9__
            })
          })
        })]
      })
    }, "page-index-about"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: "just-animations relative h-auto hidden lg:flex lg:mt-12 items-center justify-center",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          width: 400
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LottieHolder__WEBPACK_IMPORTED_MODULE_5__[/* LottieHolder */ "a"], {
          animationData: _animations_home_04_l_json__WEBPACK_IMPORTED_MODULE_10__
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
      className: "people w-screen container mx-auto flex items-center justify-center flex-wrap pb-40 px-35 lg:px-5 mt-14",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        className: "text-2xl lg:text-3xl font-bold text-main w-full",
        children: lang === 'es' ? 'Clientes' : 'Clients'
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
        className: "w-full flex flex-wrap items-stretch justify-center mt-10",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "w-full lg:w-6/12 flex flex-col items-start justify-start relative order-2 lg:order-1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h3, {
              animate: {
                opacity: transitioning ? 0 : 1,
                y: transitioning ? '10%' : 0
              },
              className: "text-black font-bold text-2xl lg:text-2xl text-center lg:text-left w-full",
              children: clients[position].name
            }, "people-index-h3"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, {
              animate: {
                opacity: transitioning ? 0 : 1,
                y: transitioning ? '10%' : 0
              },
              transition: {
                delay: 0.15
              },
              className: "text-black mt-4 italic text-lg lg:text-base pr-0 text-center lg:text-left",
              children: ["\"", clients[position][`testimony_${lang}`], "\""]
            }, "people-index-p")]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "switchClients flex items-center justify-center flex-wrap absolute -bottom-20 lg:bottom-0 right-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              onClick: () => changeClient(false) // className="bg-white border-3 border-black py-3 lg:py-1 px-4 lg:px-2 mr-4 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer"
              ,
              className: "bg-white border-3 border-black mr-4 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer hidden lg:flex items-center justify-center",
              style: {
                width: 32,
                height: 32
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/arrow-l.svg",
                alt: "Arrow Left",
                width: "10"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              onClick: () => changeClient(true) // className="bg-white border-3 border-black py-3 lg:py-1 px-4 lg:px-2 mr-4 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer"
              ,
              className: "bg-white border-3 border-black mr-6 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer hidden lg:flex items-center justify-center",
              style: {
                width: 32,
                height: 32
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/arrow-r.svg",
                alt: "Arrow Right",
                width: "10"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "w-full flex lg:hidden items-center justify-center mt-0 ",
              children: clients.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                onClick: () => changeClientResponsive(index),
                className: `border-4 border-black h-4 w-4 ${index === clients.length - 1 ? 'mr-0' : 'mr-4'} ${index === position ? 'bg-black' : 'bg-transparent'}`
              }, `activePeople-${index}`))
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "w-full lg:w-6/12 pl-0 lg:pl-10 pt-32 lg:pt-14 order-1 lg:order-2 flex justify-center items-center mb-10 lg:mb-0 mt-0 lg:-mt-12",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            style: {
              height: 250,
              width: 190
            },
            className: "relative",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              className: "absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 z-20",
              src: "/animations/client-circle.svg",
              alt: "Client Circle",
              width: "190",
              height: "auto"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              className: "relative z-10",
              src: "/animations/client-holder.svg",
              alt: "Client Holder",
              width: "190",
              height: "250"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "overflow-hidden absolute left-0 top-0 bg-white flex items-center justify-center",
              style: {
                height: 184,
                width: 190
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].img, {
                  className: "object-contain w-10/12 h-full",
                  animate: {
                    opacity: transitioning ? 0 : 1
                  } // src={
                  // 	process.env.API_URL +
                  // 	clients[position].image.formats
                  // 		.thumbnail.url
                  // }
                  ,
                  src: `/tempClients/${tempImages[position]}`,
                  alt: clients[position].name
                }, "people-index-img")
              })
            })]
          })
        })]
      })]
    })]
  });
}
async function getServerSideProps() {
  const data = await fetch(`${"http://52.6.136.253:1337"}/home`).then(res => res.json()); // const footer = await fetch(`${process.env.API_URL}/footer`).then((res) =>
  // 	res.json()
  // );

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
      data // footer

    }
  };
}

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eFl2":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":375,\"w\":600,\"h\":150,\"nm\":\"Homa_Barra\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[297.2,73.38,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-63.8,-117.62,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.504,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[127.8,20.38],[127.8,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.569,\"y\":1},\"o\":{\"x\":0.736,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[155.8,20.38],[155.8,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-80.2,20.38],[-80.2,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-80.2,20.38],[-80.2,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.381,\"y\":1},\"o\":{\"x\":0.634,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-112.2,20.38],[-112.2,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[127.8,20.38],[127.8,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.504,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[127.8,20.38],[127.8,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.569,\"y\":1},\"o\":{\"x\":0.736,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[155.8,20.38],[155.8,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-80.2,20.38],[-80.2,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.562,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-80.2,20.38],[-80.2,-20.38]],\"c\":true}]},{\"i\":{\"x\":0.381,\"y\":1},\"o\":{\"x\":0.634,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[-112.2,20.38],[-112.2,-20.38]],\"c\":true}]},{\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[232.2,-20.38],[232.2,20.38],[127.8,20.38],[127.8,-20.38]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-63.8,-117.62],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rec 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[297.2,73.38,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-63.8,-117.62,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[464.399,40.759],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-63.8,-117.62],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "gTCU":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":417,\"w\":650,\"h\":700,\"nm\":\"Home_LoQueHacemos\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Rec G 2b\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[354.108,462.294,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[487.108,-143.706,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[450.215,192.587],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[487.108,-143.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Círculo 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[223.663,558.663,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[649.163,-146.837,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":46,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":61,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":107,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":156,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":171,\"s\":[157.326,157.326]},{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0]},\"t\":224,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":239,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":254,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":300,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":349,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":364,\"s\":[157.326,157.326]},{\"t\":417,\"s\":[89.326,89.326]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[649.163,-146.837],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Círculo 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[223.663,558.663,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[649.163,-146.837,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":46,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":61,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":107,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":156,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":171,\"s\":[157.326,157.326]},{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0]},\"t\":224,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":239,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":254,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":300,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":349,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":364,\"s\":[157.326,157.326]},{\"t\":417,\"s\":[89.326,89.326]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[649.163,-146.837],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Rec C 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[417.753,464.784,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[337.753,-149.216,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":39,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.247,-48.784],[-28.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":54,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-56.247,-48.784],[-56.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":99,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[39.753,-48.784],[39.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":151,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[39.753,-48.784],[39.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":166,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[67.753,-48.784],[67.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":219,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.247,-48.784],[-28.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":234,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.247,-48.784],[-28.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":249,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-56.247,-48.784],[-56.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":294,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[39.753,-48.784],[39.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":346,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[39.753,-48.784],[39.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":361,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[67.753,-48.784],[67.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"t\":414,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.247,-48.784],[-28.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[337.753,-149.216],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Rec G 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[354.108,462.294,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[487.108,-143.706,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[450.215,192.587],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[487.108,-143.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Rec G 1b\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[354.108,176.294,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[487.108,-143.706,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[450.215,192.587],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[487.108,-143.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Círculo 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[484.663,173.663,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[625.163,-146.837,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":7,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":22,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":68,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":117,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":132,\"s\":[157.326,157.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":185,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.429,0.429],\"y\":[1,1]},\"o\":{\"x\":[0.449,0.449],\"y\":[0,0]},\"t\":200,\"s\":[89.326,89.326]},{\"i\":{\"x\":[0.453,0.453],\"y\":[1,1]},\"o\":{\"x\":[0.896,0.896],\"y\":[0,0]},\"t\":215,\"s\":[67.326,67.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":261,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.662,0.662],\"y\":[0,0]},\"t\":310,\"s\":[130.326,130.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.994,0.994],\"y\":[0,0]},\"t\":325,\"s\":[157.326,157.326]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":378,\"s\":[89.326,89.326]},{\"t\":417,\"s\":[89.326,89.326]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[625.163,-146.837],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Rec C 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.753,174.784,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[337.753,-149.216,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":28,\"nm\":\"Set Matte\",\"np\":8,\"mn\":\"ADBE Set Matte3\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"Take Matte From Layer\",\"mn\":\"ADBE Set Matte3-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":10,\"ix\":1}},{\"ty\":7,\"nm\":\"Use For Matte\",\"mn\":\"ADBE Set Matte3-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":4,\"ix\":2}},{\"ty\":7,\"nm\":\"Invert Matte\",\"mn\":\"ADBE Set Matte3-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"ty\":7,\"nm\":\"If Layer Sizes Differ\",\"mn\":\"ADBE Set Matte3-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":1,\"ix\":4}},{\"ty\":7,\"nm\":\"Composite Matte with Original\",\"mn\":\"ADBE Set Matte3-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":1,\"ix\":5}},{\"ty\":7,\"nm\":\"Premultiply Matte Layer\",\"mn\":\"ADBE Set Matte3-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.684,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.9,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.247,-48.784],[-96.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.554,\"y\":1},\"o\":{\"x\":0.775,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.827,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[151.753,-48.784],[151.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.684,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.9,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.247,-48.784],[-96.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.554,\"y\":1},\"o\":{\"x\":0.775,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.827,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[151.753,-48.784],[151.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"t\":417,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949019607843,0.949019607843,0.949019607843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[337.753,-149.216],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Rec C 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.753,174.784,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[337.753,-149.216,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.684,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.9,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.247,-48.784],[-96.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.554,\"y\":1},\"o\":{\"x\":0.775,\"y\":0},\"t\":112,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.827,\"y\":0},\"t\":127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[151.753,-48.784],[151.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":180,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.684,\"y\":1},\"o\":{\"x\":0.628,\"y\":0},\"t\":195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.428,\"y\":1},\"o\":{\"x\":0.9,\"y\":0},\"t\":210,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.247,-48.784],[-96.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.159,\"y\":0},\"t\":255,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.554,\"y\":1},\"o\":{\"x\":0.775,\"y\":0},\"t\":307,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.753,-48.784],[119.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.827,\"y\":0},\"t\":322,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[151.753,-48.784],[151.753,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"i\":{\"x\":0.474,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]},{\"t\":417,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-80.247,-48.784],[-80.247,48.784],[-119.753,48.784],[-119.753,-48.784]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[337.753,-149.216],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Rec G 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[354.108,176.294,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[487.108,-143.706,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[450.215,192.587],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.282352941176,0.301960784314,0.317647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[487.108,-143.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "iZ7G":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":30,\"ip\":0,\"op\":244,\"w\":450,\"h\":450,\"nm\":\"Home_Necesidad_Rombo\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Linea\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-473,7,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[529,216],[866.5,215.5]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Rombo 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":1,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":121,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":122,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":123,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":243,\"s\":[100]},{\"t\":244,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[183.614,207.614,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[656.614,200.614,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.639,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-119.565,119.565],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.418,\"y\":1},\"o\":{\"x\":0.639,\"y\":0},\"t\":1,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-119.565,119.565],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.393,\"y\":1},\"o\":{\"x\":0.602,\"y\":0},\"t\":61,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.614,-119.614],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":121,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.614,-119.614],[119.614,119.614],[119.742,-119.742],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.639,\"y\":0},\"t\":122,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-119.565,119.565],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.418,\"y\":1},\"o\":{\"x\":0.639,\"y\":0},\"t\":123,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-119.565,119.565],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.393,\"y\":1},\"o\":{\"x\":0.602,\"y\":0},\"t\":183,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.614,-119.614],[119.614,119.614],[-119.614,119.614],[-119.614,-119.614]],\"c\":true}]},{\"i\":{\"x\":0.393,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":243,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.614,-119.614],[119.614,119.614],[119.742,-119.742],[-119.614,-119.614]],\"c\":true}]},{\"t\":244,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[119.614,-119.614],[119.614,119.614],[119.742,-119.742],[-119.614,-119.614]],\"c\":true}]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = valueAtTime($bm_mod(time, key(numKeys).time));\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.537254901961,0.643137254902,0.662745098039,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[696.183,182.478],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Rombo\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[183.614,207.614,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[656.614,200.614,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[239.227,239.227],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.282353001015,0.301960993748,0.317646998985,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.949020026712,0.949020026712,0.949020026712,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[696.183,182.478],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

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