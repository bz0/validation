/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validation_1 = __webpack_require__(1);
var observer_1 = __webpack_require__(2);
var valid = new validation_1.validation();
var input = "";
var obsrv = new observer_1.observer();
obsrv.on(valid.require, {});
obsrv.on(valid.min_length, { min: 2 });
obsrv.on(valid.max_length, { max: 10 });
obsrv.trigger(input);
console.log(valid.msg);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validation = /** @class */ (function () {
    function validation() {
        var _this = this;
        this.errorMsg = {
            'require': "入力が空です",
            'min_length': "{$target}文字以上で入力して下さい",
            'max_length': "{$target}文字以下で入力して下さい"
        };
        this.msg = [];
        this.require = function (input, param) {
            if (input === "") {
                _this.msg.push(_this.error_message("require"));
            }
        };
        this.min_length = function (input, param) {
            if (input.length < param.min) {
                var msg = _this.error_message("min_length");
                msg = _this.msg_replace(msg, param.min);
                _this.msg.push(msg);
            }
        };
        this.max_length = function (input, param) {
            if (input.length > param.max) {
                var msg = _this.error_message("max_length");
                msg = _this.msg_replace(msg, param.max);
                _this.msg.push(msg);
            }
        };
        this.error_message = function (func_name) {
            var msg = "";
            if (func_name === "require") {
                msg = _this.errorMsg.require;
            }
            else if (func_name === "min_length") {
                msg = _this.errorMsg.min_length;
            }
            else if (func_name === "max_length") {
                msg = _this.errorMsg.max_length;
            }
            return msg;
        };
        this.msg_replace = function (msg, replace) {
            return msg.replace(/\{\$target\}/g, replace);
        };
        this.msg = [];
    }
    return validation;
}());
exports.validation = validation;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observer = /** @class */ (function () {
    function observer() {
        var _this = this;
        this.listeners = [];
        this.errorMsg = [];
        this.on = function (func, param) {
            _this.listeners.push({ 'func': func, 'param': param });
        };
        this.trigger = function (input) {
            for (var i = 0; i < _this.listeners.length; i++) {
                _this.listeners[i]['func'](input, _this.listeners[i]['param']);
            }
            _this.listeners = [];
            return _this.errorMsg;
        };
        this.listeners = [];
        this.errorMsg = [];
    }
    return observer;
}());
exports.observer = observer;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map