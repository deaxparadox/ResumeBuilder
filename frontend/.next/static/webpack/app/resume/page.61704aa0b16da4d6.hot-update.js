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

/***/ "(app-client)/./app/component/editor.tsx":
/*!**********************************!*\
  !*** ./app/component/editor.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ \"(app-client)/./node_modules/@ckeditor/ckeditor5-react/dist/index.js\");\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ \"(app-client)/./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Editor(param) {\n    let { section: string = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"edtior\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Heading\"\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/editor.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__.CKEditor, {\n                editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default()),\n                data: \"<p>Enter...</p>\",\n                onReady: (editor)=>{\n                    // You can store the \"editor\" and use when it is needed.\n                    console.log(\"Editor is ready to use!\", editor);\n                },\n                onChange: (event, editor)=>{\n                    const data = editor.getData();\n                    console.log({\n                        event,\n                        editor,\n                        data\n                    });\n                },\n                onBlur: (event, editor)=>{\n                    console.log(\"Blur.\", editor);\n                },\n                onFocus: (event, editor)=>{\n                    console.log(\"Focus.\", editor);\n                }\n            }, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/editor.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/component/editor.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudC9lZGl0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDcUQ7QUFDUztBQUcvQyxTQUFTRSxPQUFPLEtBQXNCO1FBQXRCLEVBQUNDLFNBQVNDLFNBQVMsRUFBRSxFQUFDLEdBQXRCO0lBQzNCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1AsK0RBQVFBO2dCQUNMUSxRQUFRUCwwRUFBYUE7Z0JBQ3JCUSxNQUFLO2dCQUNMQyxTQUFTRixDQUFBQTtvQkFDTCx3REFBd0Q7b0JBQ3hERyxRQUFRQyxJQUFJLDJCQUEyQko7Z0JBQzNDO2dCQUNBSyxVQUFVLENBQUNDLE9BQU9OO29CQUNkLE1BQU1DLE9BQU9ELE9BQU9PO29CQUNwQkosUUFBUUMsSUFBSTt3QkFBRUU7d0JBQU9OO3dCQUFRQztvQkFBSztnQkFDdEM7Z0JBQ0FPLFFBQVEsQ0FBQ0YsT0FBT047b0JBQ1pHLFFBQVFDLElBQUksU0FBU0o7Z0JBQ3pCO2dCQUNBUyxTQUFTLENBQUNILE9BQU9OO29CQUNiRyxRQUFRQyxJQUFJLFVBQVVKO2dCQUMxQjs7Ozs7Ozs7Ozs7O0FBSWhCO0tBeEJ3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9lZGl0b3IudHN4PzE4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDS0VkaXRvciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QnO1xuaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3Ioe3NlY3Rpb246IHN0cmluZyA9ICcnfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR0aW9yXCI+XG4gICAgICAgICAgICA8aDI+SGVhZGluZzwvaDI+XG4gICAgICAgICAgICA8Q0tFZGl0b3JcbiAgICAgICAgICAgICAgICBlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XG4gICAgICAgICAgICAgICAgZGF0YT1cIjxwPkVudGVyLi4uPC9wPlwiXG4gICAgICAgICAgICAgICAgb25SZWFkeT17ZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJDS0VkaXRvciIsIkNsYXNzaWNFZGl0b3IiLCJFZGl0b3IiLCJzZWN0aW9uIiwic3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJlZGl0b3IiLCJkYXRhIiwib25SZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2ZW50IiwiZ2V0RGF0YSIsIm9uQmx1ciIsIm9uRm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/component/editor.tsx\n"));

/***/ }),

/***/ "(app-client)/./app/resume/page.tsx":
/*!*****************************!*\
  !*** ./app/resume/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume.module.css */ \"(app-client)/./app/resume/resume.module.css\");\n/* harmony import */ var _resume_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resume_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/navbar/navbar */ \"(app-client)/./app/component/navbar/navbar.tsx\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/footer/footer */ \"(app-client)/./app/component/footer/footer.tsx\");\n/* harmony import */ var _component_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/editor */ \"(app-client)/./app/component/editor.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst Resume = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_resume_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_editor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            _component_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    }, void 0, true, {\n        fileName: \"/home/creator/Documents/Paradox/Github/ResumeBuilder/frontend/app/resume/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c;\n$RefreshReg$(_c, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBRVo7QUFDUztBQUNBO0FBQ1A7QUFFekMsTUFBTUssU0FBUztJQUNYLHFCQUNJLDhEQUFDQztRQUNHQyxJQUFJTixxRUFBZU87O1lBRWxCTixnRUFBTUE7MEJBRVAsOERBQUNFLHlEQUFNQTs7Ozs7WUFFTkQsZ0VBQU1BOzs7Ozs7O0FBR25CO0tBWk1FO0FBY04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Jlc3VtZS9wYWdlLnRzeD9iOGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3Jlc3VtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvZm9vdGVyL2Zvb3RlclwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50L2VkaXRvclwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9e3N0eWxlLmNvbnRhaW5lcn1cbiAgICAgICAgPlxuICAgICAgICAgICAge05hdmJhcn1cblxuICAgICAgICAgICAgPEVkaXRvciAvPlxuXG4gICAgICAgICAgICB7Rm9vdGVyfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIk5hdmJhciIsIkZvb3RlciIsIkVkaXRvciIsIlJlc3VtZSIsImRpdiIsImlkIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/resume/page.tsx\n"));

/***/ })

});