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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.module.css */ \"(app-client)/./app/component/footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Footer = (param)=>{\n    let { current_template, total_templates, templates } = param;\n    let show = document.querySelector(\".show\");\n    console.log(current_template, total_templates, templates[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().previousTemplate),\n                className: \"previousTemplate\",\n                onClick: (e)=>{\n                    show.innerHTML = templates[current_template -= 1].toString();\n                },\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().nextTemplate),\n                className: \"nextTemplate\",\n                onClick: (e)=>{\n                    current_template += 1;\n                    console.log(current_template);\n                    let t = templates[current_template];\n                    console.log(t);\n                // show.innerHTML = t;\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRUY7QUFTeEMsTUFBTUUsU0FBUztRQUFDLEVBQUNDLGdCQUFnQixFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFBZTtJQUV4RSxJQUFJQyxPQUFPQyxTQUFTQyxjQUFjO0lBQ2xDQyxRQUFRQyxJQUNKUCxrQkFDQUMsaUJBQ0FDLFNBQVMsQ0FBQyxFQUFFO0lBR2hCLHFCQUNJLDhEQUFDTTtRQUNHQyxJQUFJWCxrRUFBWVU7OzBCQUVoQiw4REFBQ0U7Z0JBQ0dELElBQUlYLDRFQUFzQmE7Z0JBQzFCQyxXQUFVO2dCQUNWQyxTQUFTLENBQUNDO29CQUNOWCxLQUFLWSxZQUFZYixTQUFTLENBQUNGLG9CQUFrQixFQUFFLENBQUVnQjtnQkFDckQ7MEJBQ0g7Ozs7OzswQkFFRCw4REFBQ047Z0JBQ0dELElBQUlYLHdFQUFrQm1CO2dCQUN0QkwsV0FBVTtnQkFDVkMsU0FBUyxDQUFDQztvQkFDTmQsb0JBQWtCO29CQUNsQk0sUUFBUUMsSUFBSVA7b0JBQ1osSUFBSWtCLElBQUloQixTQUFTLENBQUNGLGlCQUFpQjtvQkFDbkNNLFFBQVFDLElBQUlXO2dCQUNaLHNCQUFzQjtnQkFDMUI7MEJBQ0g7Ozs7Ozs7Ozs7OztBQUdiO0tBbENNbkI7QUFvQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLnRzeD9jOWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSAgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiO1xuXG5cbnR5cGUgRm9vdGVyRXhjZXB0ID0ge1xuICAgIGN1cnJlbnRfdGVtcGxhdGU6IG51bWJlcixcbiAgICB0b3RhbF90ZW1wbGF0ZXM6IG51bWJlcixcbiAgICB0ZW1wbGF0ZXM6IHtba2V5OiBudW1iZXJdOiBSZWFjdE5vZGV9LFxufVxuXG5jb25zdCBGb290ZXIgPSAoe2N1cnJlbnRfdGVtcGxhdGUsIHRvdGFsX3RlbXBsYXRlcywgdGVtcGxhdGVzfTogRm9vdGVyRXhjZXB0KSA9PiB7XG5cbiAgICBsZXQgc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd1wiKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBjdXJyZW50X3RlbXBsYXRlLFxuICAgICAgICB0b3RhbF90ZW1wbGF0ZXMsXG4gICAgICAgIHRlbXBsYXRlc1swXVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXIgXG4gICAgICAgICAgICBpZD17c3R5bGUuZm9vdGVyfVxuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e3N0eWxlLnByZXZpb3VzVGVtcGxhdGV9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3cuaW5uZXJIVE1MID0gdGVtcGxhdGVzW2N1cnJlbnRfdGVtcGxhdGUtPTFdIS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBpZD17c3R5bGUubmV4dFRlbXBsYXRlfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXh0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdGVtcGxhdGUrPTFcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudF90ZW1wbGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSB0ZW1wbGF0ZXNbY3VycmVudF90ZW1wbGF0ZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG93LmlubmVySFRNTCA9IHQ7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwiRm9vdGVyIiwiY3VycmVudF90ZW1wbGF0ZSIsInRvdGFsX3RlbXBsYXRlcyIsInRlbXBsYXRlcyIsInNob3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwiaWQiLCJidXR0b24iLCJwcmV2aW91c1RlbXBsYXRlIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsIm5leHRUZW1wbGF0ZSIsInQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/component/footer/footer.tsx\n"));

/***/ })

});