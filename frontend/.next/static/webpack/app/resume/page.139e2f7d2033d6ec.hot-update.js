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

/***/ "(app-client)/./app/component/footer/footer.tsx":
/*!*****************************************!*\
  !*** ./app/component/footer/footer.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"(app-client)/./node_modules/next/dist/compiled/react-dom/server.browser.js\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.css */ \"(app-client)/./app/component/footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Footer = (param)=>{\n    let { current_template, total_templates, templates } = param;\n    console.log(current_template, total_templates, templates[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousTemplate),\n                className: \"previousTemplate\",\n                onClick: (e)=>{\n                    if (current_template >= 0) {\n                        let show = document.querySelector(\".show\");\n                        console.log(show.innerHTML);\n                        if (current_template !== 0) {\n                            current_template -= 1;\n                        }\n                        console.log(current_template);\n                        let t = react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString(templates[current_template]);\n                        console.log(t);\n                        show.innerHTML = t;\n                    }\n                },\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().nextTemplate),\n                className: \"nextTemplate\",\n                onClick: (e)=>{\n                    if (current_template < total_templates) {\n                        let show = document.querySelector(\".show\");\n                        console.log(show.innerHTML);\n                        if (current_template < total_templates) current_template += 1;\n                        console.log(current_template);\n                        let t = react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString(templates[current_template]);\n                        console.log(t);\n                        show.innerHTML = t;\n                    }\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNUO0FBRU47QUFTeEMsTUFBTUcsU0FBUztRQUFDLEVBQUVDLGdCQUFnQixFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFBZ0I7SUFFMUVDLFFBQVFDLElBQ0pKLGtCQUNBQyxpQkFDQUMsU0FBUyxDQUFDLEVBQUU7SUFHaEIscUJBQ0ksOERBQUNHO1FBQ0dDLElBQUlSLGtFQUFZTzs7MEJBRWhCLDhEQUFDRTtnQkFDR0QsSUFBSVIsNEVBQXNCVTtnQkFDMUJDLFdBQVU7Z0JBQ1ZDLFNBQVMsQ0FBQ0M7b0JBQ04sSUFBSVgsb0JBQW9CLEdBQUc7d0JBQ3ZCLElBQUlZLE9BQU9DLFNBQVNDLGNBQWM7d0JBQ2xDWCxRQUFRQyxJQUFJUSxLQUFLRzt3QkFFakIsSUFBSWYscUJBQXFCLEdBQUc7NEJBQ3hCQSxvQkFBb0I7d0JBQ3hCO3dCQUVBRyxRQUFRQyxJQUFJSjt3QkFDWixJQUFJZ0IsSUFBSW5CLDREQUE2Qm9CLENBQUNmLFNBQVMsQ0FBQ0YsaUJBQWlCO3dCQUNqRUcsUUFBUUMsSUFBSVk7d0JBQ1pKLEtBQUtHLFlBQVlDO29CQUNyQjtnQkFDSjswQkFDSDs7Ozs7OzBCQUVELDhEQUFDVDtnQkFDR0QsSUFBSVIsd0VBQWtCb0I7Z0JBQ3RCVCxXQUFVO2dCQUNWQyxTQUFTLENBQUNDO29CQUVOLElBQUlYLG1CQUFtQkMsaUJBQWlCO3dCQUNwQyxJQUFJVyxPQUFPQyxTQUFTQyxjQUFjO3dCQUNsQ1gsUUFBUUMsSUFBSVEsS0FBS0c7d0JBRWpCLElBQUlmLG1CQUFtQkMsaUJBQWdCRCxvQkFBb0I7d0JBRTNERyxRQUFRQyxJQUFJSjt3QkFDWixJQUFJZ0IsSUFBSW5CLDREQUE2Qm9CLENBQUNmLFNBQVMsQ0FBQ0YsaUJBQWlCO3dCQUNqRUcsUUFBUUMsSUFBSVk7d0JBQ1pKLEtBQUtHLFlBQVlDO29CQUNyQjtnQkFFSjswQkFDSDs7Ozs7Ozs7Ozs7O0FBR2I7S0FyRE1qQjtBQXVETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIudHN4P2M5ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3REb21TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XG5cblxudHlwZSBGb290ZXJFeGNlcHQgPSB7XG4gICAgY3VycmVudF90ZW1wbGF0ZTogbnVtYmVyLFxuICAgIHRvdGFsX3RlbXBsYXRlczogbnVtYmVyLFxuICAgIHRlbXBsYXRlczogeyBba2V5OiBudW1iZXJdOiBSZWFjdEVsZW1lbnQgfSxcbn1cblxuY29uc3QgRm9vdGVyID0gKHsgY3VycmVudF90ZW1wbGF0ZSwgdG90YWxfdGVtcGxhdGVzLCB0ZW1wbGF0ZXMgfTogRm9vdGVyRXhjZXB0KSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgY3VycmVudF90ZW1wbGF0ZSxcbiAgICAgICAgdG90YWxfdGVtcGxhdGVzLFxuICAgICAgICB0ZW1wbGF0ZXNbMF1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyXG4gICAgICAgICAgICBpZD17c3R5bGUuZm9vdGVyfVxuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e3N0eWxlLnByZXZpb3VzVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXNUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfdGVtcGxhdGUgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaG93LmlubmVySFRNTClcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfdGVtcGxhdGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RlbXBsYXRlIC09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudF90ZW1wbGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ID0gUmVhY3REb21TZXJ2ZXIucmVuZGVyVG9TdHJpbmcodGVtcGxhdGVzW2N1cnJlbnRfdGVtcGxhdGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdy5pbm5lckhUTUwgPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZS5uZXh0VGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV4dFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X3RlbXBsYXRlIDwgdG90YWxfdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3cuaW5uZXJIVE1MKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudF90ZW1wbGF0ZSA8IHRvdGFsX3RlbXBsYXRlcyljdXJyZW50X3RlbXBsYXRlICs9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudF90ZW1wbGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ID0gUmVhY3REb21TZXJ2ZXIucmVuZGVyVG9TdHJpbmcodGVtcGxhdGVzW2N1cnJlbnRfdGVtcGxhdGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdy5pbm5lckhUTUwgPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3REb21TZXJ2ZXIiLCJzdHlsZSIsIkZvb3RlciIsImN1cnJlbnRfdGVtcGxhdGUiLCJ0b3RhbF90ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZXMiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwiaWQiLCJidXR0b24iLCJwcmV2aW91c1RlbXBsYXRlIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJzaG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidCIsInJlbmRlclRvU3RyaW5nIiwibmV4dFRlbXBsYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/component/footer/footer.tsx\n"));

/***/ })

});