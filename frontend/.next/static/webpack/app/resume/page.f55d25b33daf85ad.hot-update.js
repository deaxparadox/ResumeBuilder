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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume.module.css */ \"(app-client)/./app/resume/resume.module.css\");\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resume_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/navbar/navbar */ \"(app-client)/./app/component/navbar/navbar.tsx\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/footer/footer */ \"(app-client)/./app/component/footer/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// const Number =  {\n//     one: 1,\n//     two: 2,\n//     three: 3,\n//     four: 4,\n//     five: 5,\n//     six: 6,\n//     seven: 7\n// }\nconst Number = [\n    1,\n    2,\n    3,\n    4,\n    5,\n    6,\n    7,\n    8,\n    9\n];\nfunction Show(number) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: number\n    }, void 0, false, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = Show;\nconst Resume = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let templates = Number.map((e)=>{\n            console.log(e.toString());\n            Show(e.toString());\n        });\n        console.log(templates);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_resume_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"show\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Resume, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c, _c1;\n$RefreshReg$(_c, \"Show\");\n$RefreshReg$(_c1, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRThEO0FBRXZCO0FBQ1M7QUFDQTtBQUloRCxvQkFBb0I7QUFDcEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLGVBQWU7QUFDZixjQUFjO0FBQ2QsZUFBZTtBQUNmLElBQUk7QUFFSixNQUFNSyxTQUFTO0lBQ1g7SUFBRTtJQUFFO0lBQUU7SUFBRTtJQUFFO0lBQUU7SUFBRTtJQUFFO0NBQ25CO0FBR0QsU0FBU0MsS0FBS0MsTUFBYztJQUN4QixxQkFDSSw4REFBQ0M7a0JBQUlEOzs7Ozs7QUFFYjtLQUpTRDtBQU1ULE1BQU1HLFNBQVM7O0lBRVhSLGdEQUFTQSxDQUFDO1FBRU4sSUFBSVMsWUFBWUwsT0FBT00sSUFBSSxDQUFDQztZQUN4QkMsUUFBUUMsSUFBSUYsRUFBRUc7WUFDZFQsS0FBS00sRUFBRUc7UUFDWDtRQUNBRixRQUFRQyxJQUFJSjtJQUVoQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ007UUFDR0MsSUFBSWYscUVBQWVnQjs7WUFFbEJmLGdFQUFNQTswQkFFUCw4REFBQ2E7Z0JBQUlHLFdBQVU7Ozs7OztZQUlkZixnRUFBTUE7Ozs7Ozs7QUFHbkI7R0F6Qk1LO01BQUFBO0FBMkJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXN1bWUvcGFnZS50c3g/YjhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3Jlc3VtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvZm9vdGVyL2Zvb3RlclwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50L2VkaXRvclwiO1xuXG5cbi8vIGNvbnN0IE51bWJlciA9ICB7XG4vLyAgICAgb25lOiAxLFxuLy8gICAgIHR3bzogMixcbi8vICAgICB0aHJlZTogMyxcbi8vICAgICBmb3VyOiA0LFxuLy8gICAgIGZpdmU6IDUsXG4vLyAgICAgc2l4OiA2LFxuLy8gICAgIHNldmVuOiA3XG4vLyB9XG5cbmNvbnN0IE51bWJlciA9IFtcbiAgICAxLDIsMyw0LDUsNiw3LDgsOVxuXVxuXG50eXBlIFNob3dFeGNlcHQgPSB7W251bWJlcjogc3RyaW5nXTogc3RyaW5nfVxuZnVuY3Rpb24gU2hvdyhudW1iZXI6IHN0cmluZyk6IFJlYWN0Tm9kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGgxPntudW1iZXJ9PC9oMT5cbiAgICApXG59XG5cbmNvbnN0IFJlc3VtZSA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgbGV0IHRlbXBsYXRlcyA9IE51bWJlci5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBTaG93KGUudG9TdHJpbmcoKSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGVzKVxuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD17c3R5bGUuY29udGFpbmVyfVxuICAgICAgICA+XG4gICAgICAgICAgICB7TmF2YmFyfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIj5cbiAgICAgICAgICAgICAgICB7Lyoge3RlbXBsYXRlc30gKi99XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcblxuICAgICAgICAgICAge0Zvb3Rlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGUiLCJOYXZiYXIiLCJGb290ZXIiLCJOdW1iZXIiLCJTaG93IiwibnVtYmVyIiwiaDEiLCJSZXN1bWUiLCJ0ZW1wbGF0ZXMiLCJtYXAiLCJlIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiZGl2IiwiaWQiLCJjb250YWluZXIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/resume/page.tsx\n"));

/***/ })

});