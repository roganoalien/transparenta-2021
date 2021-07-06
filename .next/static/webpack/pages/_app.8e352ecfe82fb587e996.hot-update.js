webpackHotUpdate_N_E("pages/_app",{

/***/ "./Layout/ResNav.js":
/*!**************************!*\
  !*** ./Layout/ResNav.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState */ "./globalState/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");




var _jsxFileName = "/home/dark6425/transparenta-2021/Layout/ResNav.js",
    _s = $RefreshSig$();








var noScroll = __webpack_require__(/*! no-scroll */ "./node_modules/no-scroll/index.js");

var iconVariants = {
  one: {
    rotate: -90,
    opacity: 0
  },
  two: {
    rotate: 0,
    opacity: 1 // transition: {
    // 	ease: 'linear'
    // }

  },
  zero: {
    rotate: 90,
    opacity: 0 // transition: {
    // 	ease: 'linear'
    // }

  }
};
var menuVariants = {
  init: {
    opacity: 0,
    y: '-100%'
  },
  anim: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut'
    }
  },
  end: {
    opacity: 0,
    y: '-120%',
    transition: {
      ease: 'easeInOut'
    }
  }
};

function ResNav() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_5__["TransparentaContext"]),
      transOpen = _useContext.transOpen,
      setTransOpen = _useContext.setTransOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_5__["LanguageContext"]),
      lang = _useContext2.lang; // const [contact, setContact] = useState(false);


  var handleMenu = function handleMenu(isInside) {
    setTimeout(function () {
      noScroll.toggle();
      setOpen(!open);
    }, isInside ? 0 : 0);
  };

  var handleContact = function handleContact() {
    if (transOpen) {
      noScroll.off();
    } else {
      noScroll.on();
    } // setContact(!contact);


    setTransOpen(!transOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      className: "w-full flex items-center justify-between px-35 py-20px z-50 fixed left-0 top-0 bg-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "mainLogo flex items-center justify-center w-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/transparenta-logo.svg",
          alt: "Transparenta Logo",
          layout: "intrinsic",
          width: "200",
          height: "17px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: "bg-gray-100 outline-none focus:outline-none",
        onClick: function onClick() {
          return open ? handleMenu(false) : transOpen ? handleContact() : handleMenu();
        },
        style: {
          outline: 'none !important'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
          exitBeforeEnter: true,
          children: open || transOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
            variants: iconVariants,
            initial: "one",
            animate: "two",
            exit: "zero",
            className: "theHolder",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              className: "outline-none bg-transparent",
              src: "/close.svg",
              alt: "Men\xFA",
              layout: "intrinsic",
              width: "25",
              height: "20"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 9
            }, this)
          }, "isOpen-menu", false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 8
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
            variants: iconVariants,
            initial: "one",
            animate: "two",
            exit: "zero",
            className: "theHolder",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              className: "outline-none bg-transparent",
              src: "/burger.svg",
              alt: "Men\xFA",
              layout: "intrinsic",
              width: "25",
              height: "20"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 9
            }, this)
          }, "isClosed-menu", false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
      exitBeforeEnter: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
          initial: "init",
          animate: "anim",
          exit: "end",
          variants: menuVariants,
          className: "mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white pointer-events-none flex items-center justify-center flex-col border-bottom-2 border-main",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "pointer-events-auto flex flex-col items-center justify-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "font-bold uppercase hover:text-main text-center mb-6 text-xl",
              onClick: function onClick() {
                return handleMenu(true);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                activeClassName: "text-main",
                href: "/",
                children: lang === 'es' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Inicio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 12
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "font-bold uppercase hover:text-main text-center mb-6 text-xl",
              onClick: function onClick() {
                return handleMenu(true);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                activeClassName: "text-main",
                href: "/proactiva",
                children: lang === 'es' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Transparencia proactiva"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 12
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Proactive transparency"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "font-bold uppercase hover:text-main text-center mb-6 text-xl",
              onClick: function onClick() {
                return handleMenu(true);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                activeClassName: "text-main",
                href: "/producto",
                children: lang === 'es' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Producto"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 12
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "font-bold uppercase hover:text-main text-center mb-6 text-xl",
              onClick: function onClick() {
                return handleMenu(true);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                activeClassName: "text-main",
                href: "/servicios",
                children: lang === 'es' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Servicios"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 12
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Services"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              // style={{ maxWidth: 250 }}
              className: "font-bold uppercase py-4 px-5 bg-black text-white hover:bg-main hover:text-black cursor-pointer transparenta-btn-toblack shadow-none hover:shadow-transparentaSmall transition duration-200 ease-in-out text-center",
              onClick: function onClick() {
                handleMenu(false);
                handleContact();
              },
              children: lang === 'es' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                children: "Obt\xE9n Visibia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 11
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                children: "Get Visibia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "social absolute left-1/2 bottom-5 transform -translate-x-1/2 flex items-center justify-center w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "mr-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#",
                className: "border-3 border-black flex items-center p-2 hover:opacity-50",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/instagram-black.svg",
                  alt: "Instagram",
                  layout: "intrinsic",
                  height: "18px",
                  width: "18px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "mr-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#",
                className: "border-3 border-black flex items-center p-2 hover:opacity-50",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/twitter-black.svg",
                  alt: "Twitter",
                  layout: "intrinsic",
                  height: "18px",
                  width: "18px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#",
                className: "border-3 border-black flex items-center p-2 hover:opacity-50",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/facebook-black.svg",
                  alt: "Facebook",
                  layout: "intrinsic",
                  height: "18px",
                  width: "18px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 8
          }, this)]
        }, "menu-opened", true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 7
        }, this), transOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
          initial: "init",
          animate: "anim",
          exit: "end",
          variants: menuVariants,
          className: "mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white flex items-center justify-start flex-col border-bottom-2 border-main overflow-y-auto px-10 pt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            className: "text-3xl text-main font-bold w-full text-left",
            children: "Contacto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
            initialValues: {
              name: '',
              orgName: '',
              sector: '',
              services: '',
              email: '',
              text: ''
            },
            validate: function validate(values) {
              var errors = {};

              if (!values.name) {
                errors.name = 'Campo obligatorio';
              }

              if (!values.orgName) {
                errors.orgName = 'Campo obligatorio';
              }

              if (!values.sector) {
                errors.sector = 'Campo obligatorio';
              }

              if (!values.services) {
                errors.services = 'Campo obligatorio';
              }

              if (!values.text) {
                errors.text = 'Campo obligatorio';
              }

              if (!values.email) {
                errors.email = 'Campo obligatorio';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Correo inválido';
              }

              return errors;
            },
            onSubmit: function onSubmit(values, _ref) {
              var setSubmitting = _ref.setSubmitting,
                  validate = _ref.validate;
              validate(values); // alert('enviando');

              setTimeout(function () {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            },
            children: function children(_ref2) {
              var _jsxDEV2;

              var values = _ref2.values,
                  errors = _ref2.errors,
                  handleChange = _ref2.handleChange,
                  handleBlur = _ref2.handleBlur,
                  handleSubmit = _ref2.handleSubmit;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full flex flex-col items-center justify-start pointer-events-auto pt-4 pb-10",
                children: [errors.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                  type: "text",
                  name: "name",
                  onChange: handleChange // onBlur={handleBlur}
                  ,
                  value: values.name,
                  placeholder: "Nombre *",
                  className: "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 11
                }, _this), errors.orgName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.orgName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                  type: "text",
                  name: "orgName",
                  onChange: handleChange // onBlur={handleBlur}
                  ,
                  value: values.orgName,
                  placeholder: "Nombre de la organizaci\xF3n *",
                  className: "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 11
                }, _this), errors.sector && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.sector
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
                  name: "sector",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.sector,
                  style: {
                    background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02eiIvPjwvc3ZnPg==)',
                    backgroundPosition: '98% 70%',
                    backgroundRepeat: 'no-repeat',
                    WebkitAppearance: 'none'
                  },
                  className: "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 outline-none focus:border-main placeholder-black ring-0 ".concat(values.sector !== 'Sector *' ? 'text-black' : 'text-gray-400'),
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                    children: "Sector *"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 402,
                    columnNumber: 12
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                    value: "P\xFAblico",
                    children: "P\xFAblico"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 403,
                    columnNumber: 12
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                    value: "Privado",
                    children: "Privado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 406,
                    columnNumber: 12
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                    value: "Social",
                    children: "Social"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 12
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 11
                }, _this), errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 423,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                  type: "email",
                  name: "email",
                  onChange: handleChange // onBlur={handleBlur}
                  ,
                  value: values.sector,
                  placeholder: "Correo *",
                  className: "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 11
                }, _this), errors.services && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.services
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 437,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
                  name: "services",
                  cols: "30",
                  rows: "10",
                  placeholder: "Servicios de inter\xE9s",
                  onChange: handleChange // onBlur={handleBlur}
                  ,
                  className: "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black max-h-20 outline-none ring-0 focus:border-main",
                  children: values.services
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 11
                }, _this), errors.text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "text-red-500 text-xs uppercase text-left w-full",
                  children: errors.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 462,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", (_jsxDEV2 = {
                  name: "text",
                  cols: "30",
                  rows: "10",
                  placeholder: "Cu\xE9ntanos m\xE1s",
                  className: "w-full",
                  onChange: handleChange // onBlur={handleBlur}

                }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall placeholder-black outline-none ring-0 focus:border-main"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", values.text), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 466,
                  columnNumber: 11
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "btn-holder flex items-center justify-center w-full mt-10",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                    type: "submit",
                    className: "bg-black py-3 w-11/12 text-center text-white font-bold after-shadow-outline",
                    children: "Enviar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 479,
                    columnNumber: 12
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 10
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 8
          }, this)]
        }, "contact-opened", true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 7
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(ResNav, "GEux/z5eGKG9hMOKoTN/JBRk87U=");

_c = ResNav;
/* harmony default export */ __webpack_exports__["default"] = (ResNav);

var _c;

$RefreshReg$(_c, "ResNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0L1Jlc05hdi5qcyJdLCJuYW1lcyI6WyJub1Njcm9sbCIsInJlcXVpcmUiLCJpY29uVmFyaWFudHMiLCJvbmUiLCJyb3RhdGUiLCJvcGFjaXR5IiwidHdvIiwiemVybyIsIm1lbnVWYXJpYW50cyIsImluaXQiLCJ5IiwiYW5pbSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZW5kIiwiUmVzTmF2IiwidXNlQ29udGV4dCIsIlRyYW5zcGFyZW50YUNvbnRleHQiLCJ0cmFuc09wZW4iLCJzZXRUcmFuc09wZW4iLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsImhhbmRsZU1lbnUiLCJpc0luc2lkZSIsInNldFRpbWVvdXQiLCJ0b2dnbGUiLCJoYW5kbGVDb250YWN0Iiwib2ZmIiwib24iLCJvdXRsaW5lIiwibmFtZSIsIm9yZ05hbWUiLCJzZWN0b3IiLCJzZXJ2aWNlcyIsImVtYWlsIiwidGV4dCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwidmFsaWRhdGUiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJXZWJraXRBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSkMsVUFBTSxFQUFFLENBQUMsRUFETDtBQUVKQyxXQUFPLEVBQUU7QUFGTCxHQURlO0FBS3BCQyxLQUFHLEVBQUU7QUFDSkYsVUFBTSxFQUFFLENB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QSxrQkFYRDtBQUFBLFdBQ0ssZ0JBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFySUY7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRUQ7QUFBQSxrQkFERDtBQWlhQTs7R0EzYlF2QixNOztLQUFBQSxNO0FBNmJNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhlMzUyZWNmZTgyZmI1ODdlOTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQWN0aXZlTGluayc7XG5pbXBvcnQgeyBUcmFuc3BhcmVudGFDb250ZXh0LCBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9nbG9iYWxTdGF0ZSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcblxuY29uc3Qgbm9TY3JvbGwgPSByZXF1aXJlKCduby1zY3JvbGwnKTtcblxuY29uc3QgaWNvblZhcmlhbnRzID0ge1xuXHRvbmU6IHtcblx0XHRyb3RhdGU6IC05MCxcblx0XHRvcGFjaXR5OiAwXG5cdH0sXG5cdHR3bzoge1xuXHRcdHJvdGF0ZTogMCxcblx0XHRvcGFjaXR5OiAxXG5cdFx0Ly8gdHJhbnNpdGlvbjoge1xuXHRcdC8vIFx0ZWFzZTogJ2xpbmVhcidcblx0XHQvLyB9XG5cdH0sXG5cdHplcm86IHtcblx0XHRyb3RhdGU6IDkwLFxuXHRcdG9wYWNpdHk6IDBcblx0XHQvLyB0cmFuc2l0aW9uOiB7XG5cdFx0Ly8gXHRlYXNlOiAnbGluZWFyJ1xuXHRcdC8vIH1cblx0fVxufTtcblxuY29uc3QgbWVudVZhcmlhbnRzID0ge1xuXHRpbml0OiB7XG5cdFx0b3BhY2l0eTogMCxcblx0XHR5OiAnLTEwMCUnXG5cdH0sXG5cdGFuaW06IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZWFzZTogJ2Vhc2VJbk91dCdcblx0XHR9XG5cdH0sXG5cdGVuZDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdFx0eTogJy0xMjAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRlYXNlOiAnZWFzZUluT3V0J1xuXHRcdH1cblx0fVxufTtcblxuZnVuY3Rpb24gUmVzTmF2KCkge1xuXHRjb25zdCB7IHRyYW5zT3Blbiwgc2V0VHJhbnNPcGVuIH0gPSB1c2VDb250ZXh0KFRyYW5zcGFyZW50YUNvbnRleHQpO1xuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHsgbGFuZyB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXHQvLyBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaGFuZGxlTWVudSA9IChpc0luc2lkZSkgPT4ge1xuXHRcdHNldFRpbWVvdXQoXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdG5vU2Nyb2xsLnRvZ2dsZSgpO1xuXHRcdFx0XHRzZXRPcGVuKCFvcGVuKTtcblx0XHRcdH0sXG5cdFx0XHRpc0luc2lkZSA/IDAgOiAwXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDb250YWN0ID0gKCkgPT4ge1xuXHRcdGlmICh0cmFuc09wZW4pIHtcblx0XHRcdG5vU2Nyb2xsLm9mZigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub1Njcm9sbC5vbigpO1xuXHRcdH1cblx0XHQvLyBzZXRDb250YWN0KCFjb250YWN0KTtcblx0XHRzZXRUcmFuc09wZW4oIXRyYW5zT3Blbik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTM1IHB5LTIwcHggei01MCBmaXhlZCBsZWZ0LTAgdG9wLTAgYmctd2hpdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluTG9nbyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWF1dG9cIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi90cmFuc3BhcmVudGEtbG9nby5zdmdcIlxuXHRcdFx0XHRcdFx0YWx0PVwiVHJhbnNwYXJlbnRhIExvZ29cIlxuXHRcdFx0XHRcdFx0bGF5b3V0PVwiaW50cmluc2ljXCJcblx0XHRcdFx0XHRcdHdpZHRoPVwiMjAwXCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjE3cHhcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdG9wZW5cblx0XHRcdFx0XHRcdFx0PyBoYW5kbGVNZW51KGZhbHNlKVxuXHRcdFx0XHRcdFx0XHQ6IHRyYW5zT3BlblxuXHRcdFx0XHRcdFx0XHQ/IGhhbmRsZUNvbnRhY3QoKVxuXHRcdFx0XHRcdFx0XHQ6IGhhbmRsZU1lbnUoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0b3V0bGluZTogJ25vbmUgIWltcG9ydGFudCdcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdFx0XHR7b3BlbiB8fCB0cmFuc09wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0a2V5PVwiaXNPcGVuLW1lbnVcIlxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXtpY29uVmFyaWFudHN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD1cIm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT1cInR3b1wiXG5cdFx0XHRcdFx0XHRcdFx0ZXhpdD1cInplcm9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRoZUhvbGRlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvY2xvc2Uuc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIk1lbsO6XCJcblx0XHRcdFx0XHRcdFx0XHRcdGxheW91dD1cImludHJpbnNpY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT1cImlzQ2xvc2VkLW1lbnVcIlxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXtpY29uVmFyaWFudHN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD1cIm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT1cInR3b1wiXG5cdFx0XHRcdFx0XHRcdFx0ZXhpdD1cInplcm9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRoZUhvbGRlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvYnVyZ2VyLnN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJNZW7DulwiXG5cdFx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L25hdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtvcGVuICYmIChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdGtleT1cIm1lbnUtb3BlbmVkXCJcblx0XHRcdFx0XHRcdFx0aW5pdGlhbD1cImluaXRcIlxuXHRcdFx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbVwiXG5cdFx0XHRcdFx0XHRcdGV4aXQ9XCJlbmRcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtb2JpbGUtbWVudSB6LTQwIGgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGxlZnQtMCB0b3AtMCBiZy13aGl0ZSBwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGJvcmRlci1ib3R0b20tMiBib3JkZXItbWFpblwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlIGhvdmVyOnRleHQtbWFpbiB0ZXh0LWNlbnRlciBtYi02IHRleHQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWVudSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QWN0aXZlTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzc05hbWU9XCJ0ZXh0LW1haW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtsYW5nID09PSAnZXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkluaWNpbzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Ib21lPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9BY3RpdmVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlIGhvdmVyOnRleHQtbWFpbiB0ZXh0LWNlbnRlciBtYi02IHRleHQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWVudSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QWN0aXZlTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzc05hbWU9XCJ0ZXh0LW1haW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL3Byb2FjdGl2YVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtsYW5nID09PSAnZXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlRyYW5zcGFyZW5jaWEgcHJvYWN0aXZhPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlByb2FjdGl2ZSB0cmFuc3BhcmVuY3k8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjdGl2ZUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgaG92ZXI6dGV4dC1tYWluIHRleHQtY2VudGVyIG1iLTYgdGV4dC14bFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51KHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxBY3RpdmVMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzTmFtZT1cInRleHQtbWFpblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIvcHJvZHVjdG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bGFuZyA9PT0gJ2VzJyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qcm9kdWN0bzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qcm9kdWN0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9BY3RpdmVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlIGhvdmVyOnRleHQtbWFpbiB0ZXh0LWNlbnRlciBtYi02IHRleHQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWVudSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QWN0aXZlTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzc05hbWU9XCJ0ZXh0LW1haW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL3NlcnZpY2lvc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtsYW5nID09PSAnZXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlNlcnZpY2lvczwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5TZXJ2aWNlczwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQWN0aXZlTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3R5bGU9e3sgbWF4V2lkdGg6IDI1MCB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZSBweS00IHB4LTUgYmctYmxhY2sgdGV4dC13aGl0ZSBob3ZlcjpiZy1tYWluIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgdHJhbnNwYXJlbnRhLWJ0bi10b2JsYWNrIHNoYWRvdy1ub25lIGhvdmVyOnNoYWRvdy10cmFuc3BhcmVudGFTbWFsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0ZXh0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZU1lbnUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVDb250YWN0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5nID09PSAnZXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5PYnTDqW4gVmlzaWJpYTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkdldCBWaXNpYmlhPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwic29jaWFsIGFic29sdXRlIGxlZnQtMS8yIGJvdHRvbS01IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlci0zIGJvcmRlci1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6b3BhY2l0eS01MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9pbnN0YWdyYW0tYmxhY2suc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJJbnN0YWdyYW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxheW91dD1cImludHJpbnNpY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMThweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxOHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlci0zIGJvcmRlci1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6b3BhY2l0eS01MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi90d2l0dGVyLWJsYWNrLnN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiVHdpdHRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PVwiaW50cmluc2ljXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxOHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE4cHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXItMyBib3JkZXItYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIgcC0yIGhvdmVyOm9wYWNpdHktNTBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvZmFjZWJvb2stYmxhY2suc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJGYWNlYm9va1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PVwiaW50cmluc2ljXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxOHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE4cHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7dHJhbnNPcGVuICYmIChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdGtleT1cImNvbnRhY3Qtb3BlbmVkXCJcblx0XHRcdFx0XHRcdFx0aW5pdGlhbD1cImluaXRcIlxuXHRcdFx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbVwiXG5cdFx0XHRcdFx0XHRcdGV4aXQ9XCJlbmRcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtb2JpbGUtbWVudSB6LTQwIGgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGxlZnQtMCB0b3AtMCBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IGZsZXgtY29sIGJvcmRlci1ib3R0b20tMiBib3JkZXItbWFpbiBvdmVyZmxvdy15LWF1dG8gcHgtMTAgcHQtMjBcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1tYWluIGZvbnQtYm9sZCB3LWZ1bGwgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0Q29udGFjdG9cblx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0PEZvcm1pa1xuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JnTmFtZTogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN0b3I6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2VydmljZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogJydcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlPXsodmFsdWVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICghdmFsdWVzLm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLm5hbWUgPSAnQ2FtcG8gb2JsaWdhdG9yaW8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCF2YWx1ZXMub3JnTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnMub3JnTmFtZSA9ICdDYW1wbyBvYmxpZ2F0b3Jpbyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhbHVlcy5zZWN0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLnNlY3RvciA9ICdDYW1wbyBvYmxpZ2F0b3Jpbyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhbHVlcy5zZXJ2aWNlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnMuc2VydmljZXMgPSAnQ2FtcG8gb2JsaWdhdG9yaW8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCF2YWx1ZXMudGV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnMudGV4dCA9ICdDYW1wbyBvYmxpZ2F0b3Jpbyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhbHVlcy5lbWFpbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnMuZW1haWwgPSAnQ2FtcG8gb2JsaWdhdG9yaW8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0IS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXMuZW1haWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ycy5lbWFpbCA9ICdDb3JyZW8gaW52w6FsaWRvJztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcnM7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17KFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBzZXRTdWJtaXR0aW5nLCB2YWxpZGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZSh2YWx1ZXMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gYWxlcnQoJ2VudmlhbmRvJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwgNDAwKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB0b3VjaGVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQmx1cixcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVN1Ym1pdFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaXNTdWJtaXR0aW5nXG5cdFx0XHRcdFx0XHRcdFx0fSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcG9pbnRlci1ldmVudHMtYXV0byBwdC00IHBiLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5uYW1lICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB1cHBlcmNhc2UgdGV4dC1sZWZ0IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQmx1cj17aGFuZGxlQmx1cn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOb21icmUgKlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTEgcHgtMiBzaGFkb3ctdHJhbnNwYXJlbnRhU21hbGwgbWItNiBwbGFjZWhvbGRlci1ibGFjayBvdXRsaW5lLW5vbmUgcmluZy0wIGZvY3VzOmJvcmRlci1tYWluXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5vcmdOYW1lICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB1cHBlcmNhc2UgdGV4dC1sZWZ0IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5vcmdOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJvcmdOYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQmx1cj17aGFuZGxlQmx1cn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLm9yZ05hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOb21icmUgZGUgbGEgb3JnYW5pemFjacOzbiAqXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBib3JkZXItMyBib3JkZXItYmxhY2sgcHktMSBweC0yIHNoYWRvdy10cmFuc3BhcmVudGFTbWFsbCBtYi02IHBsYWNlaG9sZGVyLWJsYWNrIG91dGxpbmUtbm9uZSByaW5nLTAgZm9jdXM6Ym9yZGVyLW1haW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnNlY3RvciAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgdXBwZXJjYXNlIHRleHQtbGVmdCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuc2VjdG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJzZWN0b3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25CbHVyPXtoYW5kbGVCbHVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuc2VjdG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk55NDBNU0EzTGpnMFRERXlJREV5TGpReWJEUXVOVGt0TkM0MU9Fd3hPQ0E1TGpJMWJDMDJJRFl0TmkwMmVpSXZQand2YzNablBnPT0pJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJzk4JSA3MCUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRXZWJraXRBcHBlYXJhbmNlOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHctZnVsbCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsYWNrIGJvcmRlci0zIGJvcmRlci1ibGFjayBweS0xIHB4LTIgc2hhZG93LXRyYW5zcGFyZW50YVNtYWxsIG1iLTYgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1tYWluIHBsYWNlaG9sZGVyLWJsYWNrIHJpbmctMCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzLnNlY3RvciAhPT0gJ1NlY3RvciAqJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICd0ZXh0LWJsYWNrJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICd0ZXh0LWdyYXktNDAwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5TZWN0b3IgKjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJQw7pibGljb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UMO6YmxpY29cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUHJpdmFkb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHJpdmFkb1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTb2NpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNvY2lhbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic2VjdG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17aGFuZGxlQmx1cn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLnNlY3Rvcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlY3RvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTEgcHgtMiBzaGFkb3ctdHJhbnNwYXJlbnRhU21hbGwgbWItNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB1cHBlcmNhc2UgdGV4dC1sZWZ0IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQmx1cj17aGFuZGxlQmx1cn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLnNlY3Rvcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvcnJlbyAqXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBib3JkZXItMyBib3JkZXItYmxhY2sgcHktMSBweC0yIHNoYWRvdy10cmFuc3BhcmVudGFTbWFsbCBtYi02IHBsYWNlaG9sZGVyLWJsYWNrIG91dGxpbmUtbm9uZSByaW5nLTAgZm9jdXM6Ym9yZGVyLW1haW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnNlcnZpY2VzICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB1cHBlcmNhc2UgdGV4dC1sZWZ0IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5zZXJ2aWNlc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e2hhbmRsZUJsdXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlcnZpY2lvcyBkZSBpbnRlcsOpc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTEgcHgtMiBzaGFkb3ctdHJhbnNwYXJlbnRhU21hbGwgbWItNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic2VydmljZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbHM9XCIzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm93cz1cIjEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlcnZpY2lvcyBkZSBpbnRlcsOpc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkJsdXI9e2hhbmRsZUJsdXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTEgcHgtMiBzaGFkb3ctdHJhbnNwYXJlbnRhU21hbGwgbWItNiBwbGFjZWhvbGRlci1ibGFjayBtYXgtaC0yMCBvdXRsaW5lLW5vbmUgcmluZy0wIGZvY3VzOmJvcmRlci1tYWluXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt2YWx1ZXMuc2VydmljZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMudGV4dCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgdXBwZXJjYXNlIHRleHQtbGVmdCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMudGV4dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiMzBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDdcOpbnRhbm9zIG3DoXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkJsdXI9e2hhbmRsZUJsdXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTEgcHgtMiBzaGFkb3ctdHJhbnNwYXJlbnRhU21hbGwgcGxhY2Vob2xkZXItYmxhY2sgb3V0bGluZS1ub25lIHJpbmctMCBmb2N1czpib3JkZXItbWFpblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dmFsdWVzLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnRuLWhvbGRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWJsYWNrIHB5LTMgdy0xMS8xMiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBhZnRlci1zaGFkb3ctb3V0bGluZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0RW52aWFyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvPlxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc05hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=