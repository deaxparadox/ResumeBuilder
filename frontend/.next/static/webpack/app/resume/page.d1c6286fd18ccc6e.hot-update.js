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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume.module.css */ \"(app-client)/./app/resume/resume.module.css\");\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resume_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/navbar/navbar */ \"(app-client)/./app/component/navbar/navbar.tsx\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/footer/footer */ \"(app-client)/./app/component/footer/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Numbers = {\n    1: \"one\",\n    2: \"two\",\n    3: \"three\",\n    4: \"four\",\n    5: \"five\",\n    6: \"six\",\n    7: \"seven\"\n};\nfunction Show(number) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: number\n    }, void 0, false, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = Show;\nconst Resume = ()=>{\n    _s();\n    let template_default = 0;\n    let current_template = 0;\n    let total_templates = 0;\n    let templates = Object.keys(Numbers).map((e)=>{\n        let key = Number(e);\n        total_templates += 1;\n        return Show(Numbers[key]);\n    });\n    console.log(total_templates);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(templates);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_resume_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"show\",\n                children: templates[template_default]\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                current_template: current_template\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Resume, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c, _c1;\n$RefreshReg$(_c, \"Show\");\n$RefreshReg$(_c1, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRThEO0FBRXZCO0FBQ1M7QUFDQTtBQUloRCxNQUFNSyxVQUVEO0lBQ0QsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztBQUNQO0FBSUEsU0FBU0MsS0FBS0MsTUFBYztJQUN4QixxQkFDSSw4REFBQ0M7a0JBQUlEOzs7Ozs7QUFFYjtLQUpTRDtBQU1ULE1BQU1HLFNBQVM7O0lBQ1gsSUFBSUMsbUJBQTJCO0lBQy9CLElBQUlDLG1CQUEyQjtJQUMvQixJQUFJQyxrQkFBMEI7SUFDOUIsSUFBSUMsWUFBWUMsT0FBT0MsS0FBS1YsU0FBU1csSUFBSSxDQUFDQztRQUN0QyxJQUFJQyxNQUFNQyxPQUFPRjtRQUNqQkwsbUJBQW1CO1FBQ25CLE9BQU9OLEtBQUtELE9BQU8sQ0FBQ2EsSUFBSTtJQUM1QjtJQUNBRSxRQUFRQyxJQUFJVDtJQUVaWCxnREFBU0EsQ0FBQztRQUNObUIsUUFBUUMsSUFBSVI7SUFDaEIsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNTO1FBQ0dDLElBQUlyQixxRUFBZXNCOztZQUVsQnJCLGdFQUFNQTswQkFFUCw4REFBQ21CO2dCQUFJRyxXQUFVOzBCQUNWWixTQUFTLENBQUNILGlCQUFpQjs7Ozs7OzBCQUdoQyw4REFBQ04sZ0VBQU1BO2dCQUFDTyxrQkFBa0JBOzs7Ozs7Ozs7Ozs7QUFHdEM7R0E1Qk1GO01BQUFBO0FBOEJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXN1bWUvcGFnZS50c3g/YjhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3Jlc3VtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvZm9vdGVyL2Zvb3RlclwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50L2VkaXRvclwiO1xuXG5cbmNvbnN0IE51bWJlcnM6IHtcbiAgICBba2V5OiBudW1iZXJdOiBzdHJpbmdcbn0gPSAge1xuICAgIDE6IFwib25lXCIsXG4gICAgMjogXCJ0d29cIixcbiAgICAzOiBcInRocmVlXCIsXG4gICAgNDogXCJmb3VyXCIsXG4gICAgNTogXCJmaXZlXCIsXG4gICAgNjogXCJzaXhcIixcbiAgICA3OiBcInNldmVuXCIsXG59XG5cblxudHlwZSBTaG93RXhjZXB0ID0ge1tudW1iZXI6IHN0cmluZ106IHN0cmluZ31cbmZ1bmN0aW9uIFNob3cobnVtYmVyOiBzdHJpbmcpOiBSZWFjdE5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoMT57bnVtYmVyfTwvaDE+XG4gICAgKVxufVxuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlX2RlZmF1bHQ6IG51bWJlciA9IDBcbiAgICBsZXQgY3VycmVudF90ZW1wbGF0ZTogbnVtYmVyID0gMFxuICAgIGxldCB0b3RhbF90ZW1wbGF0ZXM6IG51bWJlciA9IDA7XG4gICAgbGV0IHRlbXBsYXRlcyA9IE9iamVjdC5rZXlzKE51bWJlcnMpLm1hcCgoZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSBOdW1iZXIoZSk7XG4gICAgICAgIHRvdGFsX3RlbXBsYXRlcyArPSAxO1xuICAgICAgICByZXR1cm4gU2hvdyhOdW1iZXJzW2tleV0pO1xuICAgIH0pXG4gICAgY29uc29sZS5sb2codG90YWxfdGVtcGxhdGVzKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGVzKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9e3N0eWxlLmNvbnRhaW5lcn1cbiAgICAgICAgPlxuICAgICAgICAgICAge05hdmJhcn1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93XCI+XG4gICAgICAgICAgICAgICAge3RlbXBsYXRlc1t0ZW1wbGF0ZV9kZWZhdWx0XX1cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8Rm9vdGVyIGN1cnJlbnRfdGVtcGxhdGU9e2N1cnJlbnRfdGVtcGxhdGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGUiLCJOYXZiYXIiLCJGb290ZXIiLCJOdW1iZXJzIiwiU2hvdyIsIm51bWJlciIsImgxIiwiUmVzdW1lIiwidGVtcGxhdGVfZGVmYXVsdCIsImN1cnJlbnRfdGVtcGxhdGUiLCJ0b3RhbF90ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZSIsImtleSIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImNvbnRhaW5lciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/resume/page.tsx\n"));

/***/ })

});