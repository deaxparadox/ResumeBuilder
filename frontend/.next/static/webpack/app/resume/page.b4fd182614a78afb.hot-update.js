"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-client)/./app/resume/page.tsx":
/*!*****************************!*\
  !*** ./app/resume/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume.module.css */ \"(app-client)/./app/resume/resume.module.css\");\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resume_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/navbar/navbar */ \"(app-client)/./app/component/navbar/navbar.tsx\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/footer/footer */ \"(app-client)/./app/component/footer/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Number = {\n    one: 1,\n    two: 2,\n    three: 3,\n    four: 4,\n    five: 5,\n    six: 6,\n    seven: 7\n};\nfunction Show(param) {\n    let { number } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: number\n    }, void 0, false, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = Show;\nconst Resume = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_resume_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"show\",\n                children: Number\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c, _c1;\n$RefreshReg$(_c, \"Show\");\n$RefreshReg$(_c1, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUQ7QUFFWjtBQUNTO0FBQ0E7QUFJaEQsTUFBTUksU0FFRjtJQUNBQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsS0FBSztJQUNMQyxPQUFPO0FBQ1g7QUFFQSxTQUFTQyxLQUFLLEtBQTBCO1FBQTFCLEVBQUNDLE1BQU0sRUFBbUIsR0FBMUI7SUFDVixxQkFDSSw4REFBQ0M7a0JBQUdEOzs7Ozs7QUFFWjtLQUpTRDtBQU1ULE1BQU1HLFNBQVM7SUFDWCxxQkFDSSw4REFBQ0M7UUFDR0MsSUFBSWhCLHFFQUFlaUI7O1lBRWxCaEIsZ0VBQU1BOzBCQUVQLDhEQUFDYztnQkFBSUcsV0FBVTswQkFDVmY7Ozs7OztZQUdKRCxnRUFBTUE7Ozs7Ozs7QUFHbkI7TUFkTVk7QUFnQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeD9iOGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3Jlc3VtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvZm9vdGVyL2Zvb3RlclwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50L2VkaXRvclwiO1xuXG5cbmNvbnN0IE51bWJlcjoge1xuICAgIFtudW1iZXI6IHN0cmluZ106IG51bWJlclxufSA9IHtcbiAgICBvbmU6IDEsXG4gICAgdHdvOiAyLFxuICAgIHRocmVlOiAzLFxuICAgIGZvdXI6IDQsXG4gICAgZml2ZTogNSxcbiAgICBzaXg6IDYsXG4gICAgc2V2ZW46IDdcbn1cblxuZnVuY3Rpb24gU2hvdyh7bnVtYmVyfToge251bWJlcjogbnVtYmVyfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxwPntudW1iZXJ9PC9wPlxuICAgIClcbn1cblxuY29uc3QgUmVzdW1lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPXtzdHlsZS5jb250YWluZXJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtOYXZiYXJ9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiPlxuICAgICAgICAgICAgICAgIHtOdW1iZXJ9XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcblxuICAgICAgICAgICAge0Zvb3Rlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGUiLCJOYXZiYXIiLCJGb290ZXIiLCJOdW1iZXIiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJTaG93IiwibnVtYmVyIiwicCIsIlJlc3VtZSIsImRpdiIsImlkIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/resume/page.tsx\n"));

/***/ })

});