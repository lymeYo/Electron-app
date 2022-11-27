/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportedForTests": () => (/* binding */ exportedForTests)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * Entry point of the Election app.
 */

// eslint-disable-next-line import/no-extraneous-dependencies


let mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            devTools: Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            preload: path__WEBPACK_IMPORTED_MODULE_0__.join(__dirname, './preload.bundle.js'),
            webSecurity: Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        },
    });
    // and load the index.html of the app.
    mainWindow.loadFile('index.html').finally(() => { });
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = undefined;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron__WEBPACK_IMPORTED_MODULE_1__.app.whenReady().then(() => {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) || Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
        createWindow();
    electron__WEBPACK_IMPORTED_MODULE_1__.app.on('activate', () => {
        if (electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.getAllWindows.length === 0)
            createWindow();
    });
}).finally(() => { });
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron__WEBPACK_IMPORTED_MODULE_1__.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron__WEBPACK_IMPORTED_MODULE_1__.app.quit();
});
electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.on('renderer-ready', () => {
    // eslint-disable-next-line no-console
    console.log('Renderer is ready.');
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
// eslint-disable-next-line import/prefer-default-export
const exportedForTests = Object(function webpackMissingModule() { var e = new Error("Cannot find module '_utils/node-env.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) ? { createWindow } : undefined;

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map