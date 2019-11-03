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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);



var openPopup = document.querySelector('.create-btn'),
    popup = document.querySelector('.popup'),
    taskForm = document.querySelector('.create-task'),
    saveBtn = taskForm.querySelector('[type="submit"]'),
    tasksArr = JSON.parse(window.localStorage.getItem('tasks')) || [],
    filterArr = [],
    tasksContainer = document.querySelector('#tasks'),
    filter = document.querySelector('.filter'),
    filterSearch = filter.querySelector('[type="search"]'),
    filterPriority = filter.querySelector('[name="priority"]'),
    filterStatus = filter.querySelector('[name="status"]');
var resetForm = function resetForm() {
    var fields = taskForm.querySelectorAll('input, select, textarea');
    fields.forEach(function (el) {
        if (el.getAttribute('name') == 'priority') {
            el.value = 1;
        } else {
            el.value = '';
        }
    });
};
var templateTask = function templateTask(data) {
    var html = '';
    var createTemplate = function createTemplate(object) {
        var template = '\n            <div class="tasks__block" data-id="' + object.id + '">\n                <h2 class="tasks__title">' + object.title + '</h2>\n                <p class="tasks__desc">' + object.description + '</p>\n                <footer class="tasks__footer">\n                    <p class="tasks__priority">' + object.priority.name + '</p>\n                    <select name="status" class="tasks__status">\n                        <option value="0" ' + (object.status.value != 2 ? 'selected' : '') + '>...</option>\n                        <option value="2" ' + (object.status.value == 2 ? 'selected' : '') + '>done</option>\n                        <option value="1" disabled>edit</option>\n                        <option value="3" disabled>delete</option>\n                    </select>\n                </footer>\n            </div>\n        ';
        return template;
    };
    data.forEach(function (el) {
        html += createTemplate(el);
    });
    tasksContainer.innerHTML = html;
    changeStatus();
};
var filterData = function filterData() {
    var filterField = filter.querySelectorAll('input, select'),
        filterObj = {};
    filterField.forEach(function (el) {
        filterObj[el.getAttribute('name')] = el.value;
    });
    filterArr = tasksArr.filter(function (el) {
        return el.title.indexOf(filterObj['search']) != -1;
    });
    filterArr = filterArr.filter(function (el) {
        if (parseInt(filterObj['priority']) != 0) {
            return el.priority.value == parseInt(filterObj['priority']);
        } else {
            return filterArr;
        }
    });
    filterArr = filterArr.filter(function (el) {
        if (parseInt(filterObj['status']) != 0) {
            if (parseInt(filterObj['status']) == 2) {
                return el.status.value == parseInt(filterObj['status']);
            } else {
                return el.status.value != 2;
            }
        } else {
            return filterArr;
        }
    });
    templateTask(filterArr);
};
var changeStatus = function changeStatus() {
    var tasksStatus = tasksContainer.querySelectorAll('.tasks__status');
    tasksStatus.forEach(function (field) {
        field.addEventListener('change', function (e) {
            var tasksId = parseInt(field.closest('.tasks__block').dataset.id),
                task = tasksArr.filter(function (el) {
                return el.id == tasksId;
            })[0];
            task.status.value = field.value;
            task.status.name = field.options[field.selectedIndex].text;
            window.localStorage.setItem('tasks', babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tasksArr));
        });
    });
};
if (tasksArr.length > 0) {
    templateTask(tasksArr);
}

openPopup.addEventListener('click', function () {
    popup.classList.add('active');
});
popup.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('popup') || target.getAttribute('type') == 'reset') {
        resetForm();
        popup.classList.remove('active');
    }
});
saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var fields = taskForm.querySelectorAll('input, select, textarea'),
        data = {};
    fields.forEach(function (el) {
        if (el.tagName == 'SELECT') {
            var obj = {},
                option = el.options[el.selectedIndex].text;
            obj['value'] = el.value;
            obj['name'] = option;
            data[el.getAttribute('name')] = obj;
        } else {
            data[el.getAttribute('name')] = el.value;
        }
    });
    data['status'] = { name: 'open', value: 0 };
    data['id'] = tasksArr.length + new Date().getUTCMilliseconds();
    tasksArr.push(data);
    templateTask(tasksArr);
    popup.classList.remove('active');
    resetForm();
    filterData();
    window.localStorage.setItem('tasks', babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tasksArr));
});
filterSearch.addEventListener('input', function (e) {
    filterData();
});
filterPriority.addEventListener('change', function (e) {
    filterData();
});
filterStatus.addEventListener('change', function (e) {
    filterData();
});

/***/ })

/******/ });
//# sourceMappingURL=base.bundle.js.map