"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/upload/page",{

/***/ "(app-pages-browser)/./app/upload/page.tsx":
/*!*****************************!*\
  !*** ./app/upload/page.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SAMPLE_IMAGES = [\n    \"/placeholder.svg?height=150&width=150\",\n    \"/placeholder.svg?height=150&width=150\",\n    \"/placeholder.svg?height=150&width=150\",\n    \"/placeholder.svg?height=150&width=150\"\n];\nfunction UploadPage() {\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleFileUpload = (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            setSelectedFile(file);\n            const imageUrl = URL.createObjectURL(file);\n            setSelectedImage(imageUrl);\n        }\n    };\n    const handleSampleImageSelect = (imageUrl)=>{\n        setSelectedImage(imageUrl);\n        setSelectedFile(null);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!selectedImage) return;\n        const formData = new FormData();\n        if (selectedFile) {\n            formData.append(\"image\", selectedFile);\n        } else if (selectedImage) {\n            // For sample images, we'll just send the URL\n            formData.append(\"imageUrl\", selectedImage);\n        }\n        try {\n            const response = await fetch(\"/api/process-image\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                router.push(\"/result\");\n            } else {\n                console.error(\"Failed to process image\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col bg-gradient-to-b from-[#ff7f50] to-[#ffa07a] p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-2xl font-mono tracking-wider mb-8\",\n                children: \"Upload or Select an Image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-lg p-6 mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col items-center justify-center pt-5 pb-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            className: \"w-10 h-10 mb-3 text-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-2 text-sm text-gray-500\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-semibold\",\n                                                    children: \"Click to upload\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 17\n                                                }, this),\n                                                \" or drag and drop\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-500\",\n                                            children: \"PNG, JPG or GIF (MAX. 800x400px)\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    className: \"hidden\",\n                                    onChange: handleFileUpload,\n                                    accept: \"image/*\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-xl font-mono tracking-wider mb-4\",\n                                children: \"Or select a sample image:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 md:grid-cols-4 gap-4\",\n                                children: SAMPLE_IMAGES.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"bg-white p-2 rounded-lg hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white\",\n                                        onClick: ()=>handleSampleImageSelect(image),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: image,\n                                            alt: \"Sample image \".concat(index + 1),\n                                            width: 150,\n                                            height: 150,\n                                            className: \"w-full h-auto\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-xl font-mono tracking-wider mb-4\",\n                                children: \"Selected Image:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-2 rounded-lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: selectedImage,\n                                    alt: \"Selected image\",\n                                    width: 300,\n                                    height: 300,\n                                    className: \"w-full h-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"mt-8 w-full bg-white text-[#ff7f50] font-bold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white\",\n                        disabled: !selectedImage,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\chiha\\\\Develop\\\\shika-app\\\\frontend\\\\app\\\\upload\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadPage, \"7v5qo94kqdkv6/gefcMcL6rrijM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UploadPage;\nvar _c;\n$RefreshReg$(_c, \"UploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNJO2dDQUFJSixXQUFVOzBDQUNiLDRFQUFDaEMsa0RBQUtBO29DQUNKa0QsS0FBSzlDO29DQUNMK0MsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUnJCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1sQiw4REFBQ2dCO3dCQUNDUCxNQUFLO3dCQUNMVCxXQUFVO3dCQUNWc0IsVUFBVSxDQUFDbEQ7a0NBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBOUh3QkQ7O1FBR1BGLHNEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoaWhhXFxEZXZlbG9wXFxzaGlrYS1hcHBcXGZyb250ZW5kXFxhcHBcXHVwbG9hZFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVcGxvYWQsIEltYWdlSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFNBTVBMRV9JTUFHRVMgPSBbXHJcbiAgXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0xNTAmd2lkdGg9MTUwXCIsXHJcbiAgXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0xNTAmd2lkdGg9MTUwXCIsXHJcbiAgXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0xNTAmd2lkdGg9MTUwXCIsXHJcbiAgXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0xNTAmd2lkdGg9MTUwXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XHJcbiAgICAgIGNvbnN0IGltYWdlVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgc2V0U2VsZWN0ZWRJbWFnZShpbWFnZVVybCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2FtcGxlSW1hZ2VTZWxlY3QgPSAoaW1hZ2VVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbWFnZShpbWFnZVVybCk7XHJcbiAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghc2VsZWN0ZWRJbWFnZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgLy8gRm9yIHNhbXBsZSBpbWFnZXMsIHdlJ2xsIGp1c3Qgc2VuZCB0aGUgVVJMXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsXCIsIHNlbGVjdGVkSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2Nlc3MtaW1hZ2VcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcmVzdWx0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcHJvY2VzcyBpbWFnZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bI2ZmN2Y1MF0gdG8tWyNmZmEwN2FdIHAtNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LW1vbm8gdHJhY2tpbmctd2lkZXIgbWItOFwiPlxyXG4gICAgICAgIFVwbG9hZCBvciBTZWxlY3QgYW4gSW1hZ2VcclxuICAgICAgPC9oMT5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBwLTYgbWItOFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTY0IGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTUgcGItNlwiPlxyXG4gICAgICAgICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG1iLTMgdGV4dC1ncmF5LTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DbGljayB0byB1cGxvYWQ8L3NwYW4+IG9yIGRyYWdcclxuICAgICAgICAgICAgICAgIGFuZCBkcm9wXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgUE5HLCBKUEcgb3IgR0lGIChNQVguIDgwMHg0MDBweClcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVVwbG9hZH1cclxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LW1vbm8gdHJhY2tpbmctd2lkZXIgbWItNFwiPlxyXG4gICAgICAgICAgICBPciBzZWxlY3QgYSBzYW1wbGUgaW1hZ2U6XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00XCI+XHJcbiAgICAgICAgICAgIHtTQU1QTEVfSU1BR0VTLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIHJvdW5kZWQtbGcgaG92ZXI6cmluZy0yIGhvdmVyOnJpbmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhbXBsZUltYWdlU2VsZWN0KGltYWdlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgU2FtcGxlIGltYWdlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzZWxlY3RlZEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtbW9ubyB0cmFja2luZy13aWRlciBtYi00XCI+XHJcbiAgICAgICAgICAgICAgU2VsZWN0ZWQgSW1hZ2U6XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlNlbGVjdGVkIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBiZy13aGl0ZSB0ZXh0LVsjZmY3ZjUwXSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRJbWFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXBsb2FkIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJTQU1QTEVfSU1BR0VTIiwiVXBsb2FkUGFnZSIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwicm91dGVyIiwiaGFuZGxlRmlsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTYW1wbGVJbWFnZVNlbGVjdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJwIiwic3BhbiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwiaDIiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzYWJsZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/upload/page.tsx\n"));

/***/ })

});