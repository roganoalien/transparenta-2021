webpackHotUpdate_N_E("pages/_app",{

/***/ "./Layout/Footer.js":
/*!**************************!*\
  !*** ./Layout/Footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState */ "./globalState/index.js");





var _jsxFileName = "/home/dark6425/transparenta-2021/Layout/Footer.js",
    _s = $RefreshSig$();

 // import { useContext, useEffect, useState } from 'react';



var tempFooter = {
  id: 1,
  email: 'hola@transparenta.mx',
  phone: null,
  address: 'Moliere 310, Polanco II, 11550, CDMX',
  instagram: '#',
  twitter: '#',
  facebook: '#',
  contactSend_one: 'contacto@visibia.mx',
  contactSend_two: 'jessica.lopez@transparenta.mx',
  created_at: '2021-01-31T21:10:08.000Z',
  updated_at: '2021-02-06T10:37:03.000Z',
  tel: '55 4466 5577',
  has_file: true,
  file: {
    url: '/uploads/aviso_de_privacidad.pdf'
  },
  filteBtnText_es: 'Aviso de Privacidad',
  filteBtnText_en: 'Privacy Notice'
};
function Footer() {
  _s();

  var _footer$file;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_5__["TransparentaContext"]),
      transOpen = _useContext.transOpen,
      setTransOpen = _useContext.setTransOpen;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_globalState__WEBPACK_IMPORTED_MODULE_5__["LanguageContext"]),
      lang = _useContext2.lang,
      setEnglish = _useContext2.setEnglish,
      setSpanish = _useContext2.setSpanish; // const [footer, setFooter] = useState(null);


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      footer = _useState[0],
      setFooter = _useState[1];

  var handleTransparenta = function handleTransparenta() {
    setTransOpen(!transOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat("http://52.6.136.253:1337", "/footer")).then(function (res) {
              return res.json();
            })["catch"](function (err) {
              return console.log(err);
            });

          case 2:
            data = _context.sent;
            console.log(data); // setFooter(data);

            if (data === undefined || data === null) {
              setFooter(tempFooter);
            } else {
              setFooter(data);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var changeLanguage = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(which) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(which === 'es')) {
                _context2.next = 5;
                break;
              }

              _context2.next = 3;
              return setSpanish();

            case 3:
              _context2.next = 7;
              break;

            case 5:
              _context2.next = 7;
              return setEnglish();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeLanguage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var refresh = function refresh() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // window.location.reload();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
      className: "container mx-auto transparenta-btn flex items-center justify-center mb-20 lg:mb-36",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: handleTransparenta,
        className: "text-black text-2xl lg:text-4xl font-bold border-3 border-black py-2 lg:py-3 px-6 transition duration-200 transform scale-100 hover:scale-95 shadow-transparenta hover:shadow-none",
        children: lang === 'es' ? 'Obtén Visibia' : 'Get Visibia'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      className: "w-full flex items-start justify-center flex-wrap bg-main py-12 px-10 lg:px-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "w-full lg:w-1/3 flex flex-col items-center justify-start",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "w-full lg:w-auto mb-10 lg:mb-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg text-left",
            children: lang === 'es' ? 'Contacto' : 'Contact'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, this), !(footer === null || footer === void 0 ? void 0 : footer.has_file) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "text-white mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "mailto:".concat(footer === null || footer === void 0 ? void 0 : footer.email),
                  className: "font-light hover:underline",
                  children: footer === null || footer === void 0 ? void 0 : footer.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "tel:+52".concat(footer === null || footer === void 0 ? void 0 : footer.tel.replace(' ', '')),
                  className: "font-light hover:underline",
                  children: (footer === null || footer === void 0 ? void 0 : footer.tel) ? footer.tel : 'null'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "font-light",
                children: footer === null || footer === void 0 ? void 0 : footer.address
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, this)
          }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            target: "_blank",
            href: "http://52.6.136.253:1337" + (footer === null || footer === void 0 ? void 0 : (_footer$file = footer.file) === null || _footer$file === void 0 ? void 0 : _footer$file.url),
            className: "bg-white hover:bg-transparent text-main hover:text-white border-3 border-white py-1 px-2 mr-4 font-medium mt-3 block transition duration-150 text-center max-w-xxxs",
            children: lang === 'es' ? footer === null || footer === void 0 ? void 0 : footer.filteBtnText_es : footer === null || footer === void 0 ? void 0 : footer.filteBtnText_en
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
        className: "w-full lg:w-1/3 flex items-center justify-start lg:justify-center self-stretch mb-10 lg:mb-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "mr-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://instagram.com/".concat(footer === null || footer === void 0 ? void 0 : footer.instagram),
            className: "border-3 border-white flex items-center p-2 hover:opacity-50",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: "/instagram.svg",
              alt: "Instagram",
              layout: "intrinsic",
              height: "18px",
              width: "18px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "mr-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://twitter.com/".concat(footer === null || footer === void 0 ? void 0 : footer.instagram),
            className: "border-3 border-white flex items-center p-2 hover:opacity-50",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: "/twitter.svg",
              alt: "Twitter",
              layout: "intrinsic",
              height: "18px",
              width: "18px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://facebook.com/".concat(footer === null || footer === void 0 ? void 0 : footer.instagram),
            className: "border-3 border-white flex items-center p-2 hover:opacity-50",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: "/facebook.svg",
              alt: "Facebook",
              layout: "intrinsic",
              height: "18px",
              width: "18px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "w-full lg:w-1/3 flex items-center justify-start lg:justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "w-auto h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-4",
            children: lang === 'es' ? 'Idioma' : 'Language'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "btns-holder flex items-center justify-start",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return changeLanguage('es');

                      case 2:
                        refresh();

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })),
              className: "".concat(lang === 'es' ? 'bg-white text-main' : 'bg-transparent hover:bg-white text-white hover:text-main transform scale-100 hover:scale-95', " border-3 border-white py-1 px-2 mr-4"),
              children: lang === 'es' ? 'Español' : 'Spanish'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
                setTimeout(function () {
                  changeLanguage('en');
                }, 250);
              },
              className: "".concat(lang === 'en' ? 'bg-white text-main' : 'bg-transparent hover:bg-white text-white hover:text-main transform scale-100 hover:scale-95', " border-3 border-white py-1 px-2 mr-4"),
              children: lang === 'es' ? 'Inglés' : 'English'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Footer, "fhQQYFmzR2Ie0pgY+df46xC3JJY=");

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0L0Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJ0ZW1wRm9vdGVyIiwiaWQiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzcyIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJmYWNlYm9vayIsImNvbnRhY3RTZW5kX29uZSIsImNvbnRhY3RTZW5kX3R3byIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0IiwidGVsIiwiaGFzX2ZpbGUiLCJmaWxlIiwidXJsIiwiZmlsdGVCdG5UZXh0X2VzIiwiZmlsdGVCdG5UZXh0X2VuIiwiRm9vdGVyIiwidXNlQ29udGV4dCIsIlRyYW5zcGFyZW50YUNvbnRleHQiLCJ0cmFuc09wZW4iLCJzZXRUcmFuc09wZW4iLCJMYW5ndWFnZUNvbnRleHQiLCJsYW5nIiwic2V0RW5nbGlzaCIsInNldFNwYW5pc2giLCJ1c2VTdGF0ZSIsImZvb3RlciIsInNldEZvb3RlciIsImhhbmRsZVRyYW5zcGFyZW50YSIsInVzZUVmZmVjdCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJjaGFuZ2VMYW5ndWFnZSIsIndoaWNoIiwicmVmcmVzaCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInJlcGxhY2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2xCQyxJQUFFLEVBQUUsQ0FEYztBQUVsQkMsT0FBSyxFQUFFLHNCQUZXO0FBR2xCQyxPQUFLLEVBQUUsSUFIVztBQUlsQkMsU0FBTyxFQUFFLHNDQUpTO0FBS2xCQyxXQUFTLEVBQUUsR0FMTztBQU1sQkMsU0FBTyxFQUFFLEdBTlM7QUFPbEJDLFVBQVEsRUFBRSxHQVBRO0FBUWxCQyxpQkFBZSxFQUFFLHFCQVJD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LElBQUksS0FBSyxJQUFULEdBQWdCLFNBQWhCLEdBQTRCO0FBWDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFjQztBQUNDLHFCQUFPLEVBQUUsbUJBQU07QUFDZHFCLHNCQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNiQyxxQkFBRyxFQUFFLENBRFE7QUFFYkMsc0JBQUksRUFBRSxDQUZPO0FBR2JDLDBCQUFRLEVBQUU7QUFIRyxpQkFBZDtBQUtBRSwwQkFBVSxDQUFDLFlBQVk7QUFDdEJULGdDQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0EsaUJBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxlQVZGO0FBV0MsdUJBQVMsWUFDUmxCLElBQUksS0FBSyxJQUFULEdBQ0csb0JBREgsR0FFRyw2RkFISywwQ0FYVjtBQUFBLHdCQWlCRUEsSUFBSSxLQUFLLElBQVQsR0FBZ0IsUUFBaEIsR0FBMkI7QUFqQjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQSxrQkFERDtBQWdKQTs7R0FuTHVCTixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNThiNDcyOWMyMGQyNjEwMmIyYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgVHJhbnNwYXJlbnRhQ29udGV4dCwgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vZ2xvYmFsU3RhdGUnO1xuXG5jb25zdCB0ZW1wRm9vdGVyID0ge1xuXHRpZDogMSxcblx0ZW1haWw6ICdob2xhQHRyYW5zcGFyZW50YS5teCcsXG5cdHBob25lOiBudWxsLFxuXHRhZGRyZXNzOiAnTW9saWVyZSAzMTAsIFBvbGFuY28gSUksIDExNTUwLCBDRE1YJyxcblx0aW5zdGFncmFtOiAnIycsXG5cdHR3aXR0ZXI6ICcjJyxcblx0ZmFjZWJvb2s6ICcjJyxcblx0Y29udGFjdFNlbmRfb25lOiAnY29udGFjdG9AdmlzaWJpYS5teCcsXG5cdGNvbnRhY3RTZW5kX3R3bzogJ2plc3NpY2EubG9wZXpAdHJhbnNwYXJlbnRhLm14Jyxcblx0Y3JlYXRlZF9hdDogJzIwMjEtMDEtMzFUMjE6MTA6MDguMDAwWicsXG5cdHVwZGF0ZWRfYXQ6ICcyMDIxLTAyLTA2VDEwOjM3OjAzLjAwMFonLFxuXHR0ZWw6ICc1NSA0NDY2IDU1NzcnLFxuXHRoYXNfZmlsZTogdHJ1ZSxcblx0ZmlsZToge1xuXHRcdHVybDogJy91cGxvYWRzL2F2aXNvX2RlX3ByaXZhY2lkYWQucGRmJ1xuXHR9LFxuXHRmaWx0ZUJ0blRleHRfZXM6ICdBdmlzbyBkZSBQcml2YWNpZGFkJyxcblx0ZmlsdGVCdG5UZXh0X2VuOiAnUHJpdmFjeSBOb3RpY2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cdGNvbnN0IHsgdHJhbnNPcGVuLCBzZXRUcmFuc09wZW4gfSA9IHVzZUNvbnRleHQoVHJhbnNwYXJlbnRhQ29udGV4dCk7XG5cdGNvbnN0IHsgbGFuZywgc2V0RW5nbGlzaCwgc2V0U3BhbmlzaCB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXHQvLyBjb25zdCBbZm9vdGVyLCBzZXRGb290ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtmb290ZXIsIHNldEZvb3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuXHRjb25zdCBoYW5kbGVUcmFuc3BhcmVudGEgPSAoKSA9PiB7XG5cdFx0c2V0VHJhbnNPcGVuKCF0cmFuc09wZW4pO1xuXHR9O1xuXG5cdHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2Zvb3RlcmApXG5cdFx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHRcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdC8vIHNldEZvb3RlcihkYXRhKTtcblx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcblx0XHRcdHNldEZvb3Rlcih0ZW1wRm9vdGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0Rm9vdGVyKGRhdGEpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gYXN5bmMgKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoID09PSAnZXMnKSB7XG5cdFx0XHRhd2FpdCBzZXRTcGFuaXNoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3YWl0IHNldEVuZ2xpc2goKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVmcmVzaCA9ICgpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cdFx0Ly8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0cmFuc3BhcmVudGEtYnRuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTIwIGxnOm1iLTM2XCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVUcmFuc3BhcmVudGF9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LTJ4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgYm9yZGVyLTMgYm9yZGVyLWJsYWNrIHB5LTIgbGc6cHktMyBweC02IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBzY2FsZS0xMDAgaG92ZXI6c2NhbGUtOTUgc2hhZG93LXRyYW5zcGFyZW50YSBob3ZlcjpzaGFkb3ctbm9uZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bGFuZyA9PT0gJ2VzJyA/ICdPYnTDqW4gVmlzaWJpYScgOiAnR2V0IFZpc2liaWEnfVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGJnLW1haW4gcHktMTIgcHgtMTAgbGc6cHgtMjBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctYXV0byBtYi0xMCBsZzptYi0wXCI+XG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1sZyB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0e2xhbmcgPT09ICdlcycgPyAnQ29udGFjdG8nIDogJ0NvbnRhY3QnfVxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdHshZm9vdGVyPy5oYXNfZmlsZSA/IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YG1haWx0bzoke2Zvb3Rlcj8uZW1haWx9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LWxpZ2h0IGhvdmVyOnVuZGVybGluZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyPy5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgdGVsOis1MiR7Zm9vdGVyPy50ZWwucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgaG92ZXI6dW5kZXJsaW5lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtmb290ZXI/LnRlbCA/IGZvb3Rlci50ZWwgOiAnbnVsbCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyPy5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtwcm9jZXNzLmVudi5BUElfVVJMICsgZm9vdGVyPy5maWxlPy51cmx9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctd2hpdGUgaG92ZXI6YmctdHJhbnNwYXJlbnQgdGV4dC1tYWluIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLTMgYm9yZGVyLXdoaXRlIHB5LTEgcHgtMiBtci00IGZvbnQtbWVkaXVtIG10LTMgYmxvY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgdGV4dC1jZW50ZXIgbWF4LXcteHh4c1wiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGFuZyA9PT0gJ2VzJ1xuXHRcdFx0XHRcdFx0XHRcdFx0PyBmb290ZXI/LmZpbHRlQnRuVGV4dF9lc1xuXHRcdFx0XHRcdFx0XHRcdFx0OiBmb290ZXI/LmZpbHRlQnRuVGV4dF9lbn1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBsZzpqdXN0aWZ5LWNlbnRlciBzZWxmLXN0cmV0Y2ggbWItMTAgbGc6bWItMFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly9pbnN0YWdyYW0uY29tLyR7Zm9vdGVyPy5pbnN0YWdyYW19YH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyLTMgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHAtMiBob3ZlcjpvcGFjaXR5LTUwXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL2luc3RhZ3JhbS5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIkluc3RhZ3JhbVwiXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0PVwiaW50cmluc2ljXCJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxOHB4XCJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE4cHhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1yLTRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7Zm9vdGVyPy5pbnN0YWdyYW19YH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyLTMgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHAtMiBob3ZlcjpvcGFjaXR5LTUwXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3R3aXR0ZXIuc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJUd2l0dGVyXCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjE4cHhcIlxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMThweFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly9mYWNlYm9vay5jb20vJHtmb290ZXI/Lmluc3RhZ3JhbX1gfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXItMyBib3JkZXItd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgcC0yIGhvdmVyOm9wYWNpdHktNTBcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvZmFjZWJvb2suc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJGYWNlYm9va1wiXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0PVwiaW50cmluc2ljXCJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxOHB4XCJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE4cHhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbGc6anVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLWZ1bGxcIj5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWxnIG1iLTRcIj5cblx0XHRcdFx0XHRcdFx0e2xhbmcgPT09ICdlcycgPyAnSWRpb21hJyA6ICdMYW5ndWFnZSd9XG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidG5zLWhvbGRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXthc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhd2FpdCBjaGFuZ2VMYW5ndWFnZSgnZXMnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJlZnJlc2goKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYW5nID09PSAnZXMnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ2JnLXdoaXRlIHRleHQtbWFpbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYmctdHJhbnNwYXJlbnQgaG92ZXI6Ymctd2hpdGUgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LW1haW4gdHJhbnNmb3JtIHNjYWxlLTEwMCBob3ZlcjpzY2FsZS05NSdcblx0XHRcdFx0XHRcdFx0XHR9IGJvcmRlci0zIGJvcmRlci13aGl0ZSBweS0xIHB4LTIgbXItNGB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGFuZyA9PT0gJ2VzJyA/ICdFc3Bhw7FvbCcgOiAnU3BhbmlzaCd9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VMYW5ndWFnZSgnZW4nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFuZyA9PT0gJ2VuJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdiZy13aGl0ZSB0ZXh0LW1haW4nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2JnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXdoaXRlIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1tYWluIHRyYW5zZm9ybSBzY2FsZS0xMDAgaG92ZXI6c2NhbGUtOTUnXG5cdFx0XHRcdFx0XHRcdFx0fSBib3JkZXItMyBib3JkZXItd2hpdGUgcHktMSBweC0yIG1yLTRgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xhbmcgPT09ICdlcycgPyAnSW5nbMOpcycgOiAnRW5nbGlzaCd9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9