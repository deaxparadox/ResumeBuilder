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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume.module.css */ \"(app-client)/./app/resume/resume.module.css\");\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resume_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/navbar/navbar */ \"(app-client)/./app/component/navbar/navbar.tsx\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/footer/footer */ \"(app-client)/./app/component/footer/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Numbers = {\n    1: \"one\",\n    2: \"two\",\n    3: \"three\",\n    4: \"four\",\n    5: \"five\",\n    6: \"six\",\n    7: \"seven\"\n};\nfunction Show(number) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: number\n    }, void 0, false, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = Show;\nconst Resume = ()=>{\n    _s();\n    let template_default = 0;\n    let total_templates = 0;\n    let templates = Object.keys(Numbers).map((e)=>{\n        let key = Number(e);\n        total_templates += 1;\n        return Show(Numbers[key]);\n    });\n    console.log(total_templates);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(templates);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_resume_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"show\",\n                children: templates[template_default]\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Resume, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c, _c1;\n$RefreshReg$(_c, \"Show\");\n$RefreshReg$(_c1, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRThEO0FBRXZCO0FBQ1M7QUFDQTtBQUloRCxNQUFNSyxVQUVEO0lBQ0QsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztBQUNQO0FBSUEsU0FBU0MsS0FBS0MsTUFBYztJQUN4QixxQkFDSSw4REFBQ0M7a0JBQUlEOzs7Ozs7QUFFYjtLQUpTRDtBQU1ULE1BQU1HLFNBQVM7O0lBQ1gsSUFBSUMsbUJBQTJCO0lBQy9CLElBQUlDLGtCQUEwQjtJQUM5QixJQUFJQyxZQUFZQyxPQUFPQyxLQUFLVCxTQUFTVSxJQUFJLENBQUNDO1FBQ3RDLElBQUlDLE1BQU1DLE9BQU9GO1FBQ2pCTCxtQkFBbUI7UUFDbkIsT0FBT0wsS0FBS0QsT0FBTyxDQUFDWSxJQUFJO0lBQzVCO0lBQ0FFLFFBQVFDLElBQUlUO0lBRVpWLGdEQUFTQSxDQUFDO1FBQ05rQixRQUFRQyxJQUFJUjtJQUNoQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFDR0MsSUFBSXBCLHFFQUFlcUI7O1lBRWxCcEIsZ0VBQU1BOzBCQUVQLDhEQUFDa0I7Z0JBQUlHLFdBQVU7MEJBQ1ZaLFNBQVMsQ0FBQ0YsaUJBQWlCOzs7Ozs7MEJBR2hDLDhEQUFDTixnRUFBTUE7Ozs7Ozs7Ozs7O0FBR25CO0dBM0JNSztNQUFBQTtBQTZCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVzdW1lL3BhZ2UudHN4P2I4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9yZXN1bWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnQvbmF2YmFyL25hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4uL2NvbXBvbmVudC9lZGl0b3JcIjtcblxuXG5jb25zdCBOdW1iZXJzOiB7XG4gICAgW2tleTogbnVtYmVyXTogc3RyaW5nXG59ID0gIHtcbiAgICAxOiBcIm9uZVwiLFxuICAgIDI6IFwidHdvXCIsXG4gICAgMzogXCJ0aHJlZVwiLFxuICAgIDQ6IFwiZm91clwiLFxuICAgIDU6IFwiZml2ZVwiLFxuICAgIDY6IFwic2l4XCIsXG4gICAgNzogXCJzZXZlblwiLFxufVxuXG5cbnR5cGUgU2hvd0V4Y2VwdCA9IHtbbnVtYmVyOiBzdHJpbmddOiBzdHJpbmd9XG5mdW5jdGlvbiBTaG93KG51bWJlcjogc3RyaW5nKTogUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+e251bWJlcn08L2gxPlxuICAgIClcbn1cblxuY29uc3QgUmVzdW1lID0gKCkgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZV9kZWZhdWx0OiBudW1iZXIgPSAwXG4gICAgbGV0IHRvdGFsX3RlbXBsYXRlczogbnVtYmVyID0gMDtcbiAgICBsZXQgdGVtcGxhdGVzID0gT2JqZWN0LmtleXMoTnVtYmVycykubWFwKChlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IE51bWJlcihlKTtcbiAgICAgICAgdG90YWxfdGVtcGxhdGVzICs9IDE7XG4gICAgICAgIHJldHVybiBTaG93KE51bWJlcnNba2V5XSk7XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0b3RhbF90ZW1wbGF0ZXMpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD17c3R5bGUuY29udGFpbmVyfVxuICAgICAgICA+XG4gICAgICAgICAgICB7TmF2YmFyfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIj5cbiAgICAgICAgICAgICAgICB7dGVtcGxhdGVzW3RlbXBsYXRlX2RlZmF1bHRdfVxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGUiLCJOYXZiYXIiLCJGb290ZXIiLCJOdW1iZXJzIiwiU2hvdyIsIm51bWJlciIsImgxIiwiUmVzdW1lIiwidGVtcGxhdGVfZGVmYXVsdCIsInRvdGFsX3RlbXBsYXRlcyIsInRlbXBsYXRlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJlIiwia2V5IiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/resume/page.tsx\n"));

/***/ })

});