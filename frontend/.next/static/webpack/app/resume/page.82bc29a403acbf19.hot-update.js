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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"(app-client)/./node_modules/next/dist/compiled/react-dom/server.browser.js\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.css */ \"(app-client)/./app/component/footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Footer = (param)=>{\n    let { current_template, total_templates, templates } = param;\n    console.log(current_template, total_templates, templates[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousTemplate),\n                className: \"previousTemplate\",\n                onClick: (e)=>{\n                    if (current_template >= 0) {\n                        let show = document.querySelector(\".show\");\n                        console.log(show.innerHTML);\n                        if (current_template !== 0) {\n                            current_template -= 1;\n                        }\n                        console.log(current_template);\n                        let t = react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString(templates[current_template]);\n                        console.log(t);\n                        show.innerHTML = t;\n                    }\n                },\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().nextTemplate),\n                className: \"nextTemplate\",\n                onClick: (e)=>{\n                    if (current_template < total_templates - 1) {\n                        let show = document.querySelector(\".show\");\n                        console.log(show.innerHTML);\n                        // if (current_template !== total_templates)\n                        current_template += 1;\n                        console.log(current_template);\n                        let t = react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString(templates[current_template]);\n                        console.log(t);\n                        show.innerHTML = t;\n                    }\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/footer/footer.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNUO0FBRU47QUFTeEMsTUFBTUcsU0FBUztRQUFDLEVBQUVDLGdCQUFnQixFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFBZ0I7SUFFMUVDLFFBQVFDLElBQ0pKLGtCQUNBQyxpQkFDQUMsU0FBUyxDQUFDLEVBQUU7SUFHaEIscUJBQ0ksOERBQUNHO1FBQ0dDLElBQUlSLGtFQUFZTzs7MEJBRWhCLDhEQUFDRTtnQkFDR0QsSUFBSVIsNEVBQXNCVTtnQkFDMUJDLFdBQVU7Z0JBQ1ZDLFNBQVMsQ0FBQ0M7b0JBQ04sSUFBSVgsb0JBQW9CLEdBQUc7d0JBQ3ZCLElBQUlZLE9BQU9DLFNBQVNDLGNBQWM7d0JBQ2xDWCxRQUFRQyxJQUFJUSxLQUFLRzt3QkFFakIsSUFBSWYscUJBQXFCLEdBQUc7NEJBQ3hCQSxvQkFBb0I7d0JBQ3hCO3dCQUVBRyxRQUFRQyxJQUFJSjt3QkFDWixJQUFJZ0IsSUFBSW5CLDREQUE2Qm9CLENBQUNmLFNBQVMsQ0FBQ0YsaUJBQWlCO3dCQUNqRUcsUUFBUUMsSUFBSVk7d0JBQ1pKLEtBQUtHLFlBQVlDO29CQUNyQjtnQkFDSjswQkFDSDs7Ozs7OzBCQUVELDhEQUFDVDtnQkFDR0QsSUFBSVIsd0VBQWtCb0I7Z0JBQ3RCVCxXQUFVO2dCQUNWQyxTQUFTLENBQUNDO29CQUVOLElBQUlYLG1CQUFtQkMsa0JBQWdCLEdBQUc7d0JBQ3RDLElBQUlXLE9BQU9DLFNBQVNDLGNBQWM7d0JBQ2xDWCxRQUFRQyxJQUFJUSxLQUFLRzt3QkFFakIsNENBQTRDO3dCQUM1Q2Ysb0JBQW9CO3dCQUVwQkcsUUFBUUMsSUFBSUo7d0JBQ1osSUFBSWdCLElBQUluQiw0REFBNkJvQixDQUFDZixTQUFTLENBQUNGLGlCQUFpQjt3QkFDakVHLFFBQVFDLElBQUlZO3dCQUNaSixLQUFLRyxZQUFZQztvQkFDckI7Z0JBRUo7MEJBQ0g7Ozs7Ozs7Ozs7OztBQUdiO0tBdERNakI7QUF3RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLnRzeD9jOWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RG9tU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiO1xuXG5cbnR5cGUgRm9vdGVyRXhjZXB0ID0ge1xuICAgIGN1cnJlbnRfdGVtcGxhdGU6IG51bWJlcixcbiAgICB0b3RhbF90ZW1wbGF0ZXM6IG51bWJlcixcbiAgICB0ZW1wbGF0ZXM6IHsgW2tleTogbnVtYmVyXTogUmVhY3RFbGVtZW50IH0sXG59XG5cbmNvbnN0IEZvb3RlciA9ICh7IGN1cnJlbnRfdGVtcGxhdGUsIHRvdGFsX3RlbXBsYXRlcywgdGVtcGxhdGVzIH06IEZvb3RlckV4Y2VwdCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIGN1cnJlbnRfdGVtcGxhdGUsXG4gICAgICAgIHRvdGFsX3RlbXBsYXRlcyxcbiAgICAgICAgdGVtcGxhdGVzWzBdXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlclxuICAgICAgICAgICAgaWQ9e3N0eWxlLmZvb3Rlcn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZS5wcmV2aW91c1RlbXBsYXRlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X3RlbXBsYXRlID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hvdy5pbm5lckhUTUwpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X3RlbXBsYXRlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90ZW1wbGF0ZSAtPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRfdGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IFJlYWN0RG9tU2VydmVyLnJlbmRlclRvU3RyaW5nKHRlbXBsYXRlc1tjdXJyZW50X3RlbXBsYXRlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3cuaW5uZXJIVE1MID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+UHJldjwvYnV0dG9uPlxuICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBpZD17c3R5bGUubmV4dFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudF90ZW1wbGF0ZSA8IHRvdGFsX3RlbXBsYXRlcy0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3cuaW5uZXJIVE1MKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY3VycmVudF90ZW1wbGF0ZSAhPT0gdG90YWxfdGVtcGxhdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90ZW1wbGF0ZSArPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRfdGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IFJlYWN0RG9tU2VydmVyLnJlbmRlclRvU3RyaW5nKHRlbXBsYXRlc1tjdXJyZW50X3RlbXBsYXRlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3cuaW5uZXJIVE1MID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RG9tU2VydmVyIiwic3R5bGUiLCJGb290ZXIiLCJjdXJyZW50X3RlbXBsYXRlIiwidG90YWxfdGVtcGxhdGVzIiwidGVtcGxhdGVzIiwiY29uc29sZSIsImxvZyIsImZvb3RlciIsImlkIiwiYnV0dG9uIiwicHJldmlvdXNUZW1wbGF0ZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJlIiwic2hvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInQiLCJyZW5kZXJUb1N0cmluZyIsIm5leHRUZW1wbGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/component/footer/footer.tsx\n"));

/***/ })

});