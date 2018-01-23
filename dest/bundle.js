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
var v = new validation_1.validation();
var button = document.getElementById("regist");
button.onclick = v.check;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checker_1 = __webpack_require__(2);
var observer_1 = __webpack_require__(3);
var render_1 = __webpack_require__(4);
var validation = /** @class */ (function () {
    function validation(config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        this.config = {
            "query": "input"
        };
        this.check = function () {
            var inputAll = document.querySelectorAll(_this.config.query);
            Array.from(inputAll, function (input) {
                _this.chk.msg = [];
                console.log("required:", input.getAttribute("required"));
                //未入力
                if (input.getAttribute("required") !== null) {
                    _this.obsrv.on(_this.chk.require, {});
                }
                //メルアド
                if (input.getAttribute("mail") !== null) {
                    _this.obsrv.on(_this.chk.mail_address, {});
                }
                //郵便番号
                if (input.getAttribute("postalcode") !== null) {
                    _this.obsrv.on(_this.chk.postal_code, {});
                }
                //最小文字数
                var min;
                if (min = input.getAttribute("data-minlength")) {
                    _this.obsrv.on(_this.chk.min_length, { min: min });
                }
                console.log("min:", min);
                //最大文字数
                var max;
                if (max = input.getAttribute("data-maxlength")) {
                    _this.obsrv.on(_this.chk.max_length, { max: max });
                }
                console.log("max:", max);
                _this.obsrv.trigger(input.value);
                console.log(_this.chk.msg);
                _this.r.errorMsg(input, _this.chk.msg);
            });
        };
        if (config['query']) {
            this.config["query"] = config['query'];
        }
        this.chk = new checker_1.checker();
        this.obsrv = new observer_1.observer();
        this.r = new render_1.render();
    }
    return validation;
}());
exports.validation = validation;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checker = /** @class */ (function () {
    function checker() {
        var _this = this;
        this.errorMsg = {
            'require': "入力が空です",
            'min_length': "{$target}文字以上で入力して下さい",
            'max_length': "{$target}文字以下で入力して下さい",
            'mail_address': "メールアドレスを入力して下さい",
            'postal_code': "郵便番号を入力して下さい"
        };
        this.msg = [];
        this.require = function (input, param) {
            if (input === "") {
                var msg = _this.error_message("require");
                _this.msg.push(msg);
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
        this.mail_address = function (input, param) {
            console.log("mail_address 実行");
            if (/^(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+)(?:\.(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+))*)|(?:"(?:\\[^\r\n]|[^\\"])*")))\@(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+)(?:\.(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+))*)|(?:\[(?:\\\S|[\x21-\x5a\x5e-\x7e])*\])))$/.test(input) === false) {
                console.log("mail_address　エラー");
                var msg = _this.error_message("mail_address");
                _this.msg.push(msg);
            }
        };
        this.postal_code = function (input, param) {
            console.log("postal_code実行");
            if (/^\d{3}-\d{4}$/.test(input) === false) {
                console.log("postal_code　エラー");
                var msg = _this.error_message("postal_code");
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
            else if (func_name === "mail_address") {
                msg = _this.errorMsg.mail_address;
            }
            else if (func_name === "postal_code") {
                msg = _this.errorMsg.postal_code;
            }
            return msg;
        };
        this.msg_replace = function (msg, replace) {
            return msg.replace(/\{\$target\}/g, replace);
        };
        this.msg = [];
    }
    return checker;
}());
exports.checker = checker;


/***/ }),
/* 3 */
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var render = /** @class */ (function () {
    function render() {
        var _this = this;
        this.html = {
            'ul_open': "<ul class=\"errorMsg\">",
            'ul_close': "</ul>",
            'li_open': "<li>",
            'li_close': "</li>"
        };
        this.errorMsg = function (el, msg) {
            _this.initialize(el);
            var htmlText = _this.htmlCreate(msg);
            el.insertAdjacentHTML('afterend', htmlText);
        };
        this.initialize = function (el) {
            var nextElement = el.nextElementSibling;
            if (nextElement) {
                console.log("className:", nextElement.className);
                if (nextElement.className === "errorMsg") {
                    console.log("削除");
                    nextElement.parentNode.removeChild(nextElement);
                }
            }
        };
        this.htmlCreate = function (msg) {
            var htmlText = _this.html.ul_open;
            for (var i = 0; i < msg.length; i++) {
                htmlText += _this.html.li_open + msg[i] + _this.html.li_close;
            }
            htmlText += _this.html.ul_close;
            return htmlText;
        };
    }
    return render;
}());
exports.render = render;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map