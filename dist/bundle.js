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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_helpers/randomId.js":
/*!**********************************!*\
  !*** ./src/_helpers/randomId.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.randomId = randomId;\nfunction randomId() {\n\treturn Math.random().toString(36).substring(2) + new Date().getTime().toString(36);\n}\n\n//# sourceURL=webpack:///./src/_helpers/randomId.js?");

/***/ }),

/***/ "./src/_reducers/todos.js":
/*!********************************!*\
  !*** ./src/_reducers/todos.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.todos = todos;\nfunction todos() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\tvar action = arguments[1];\n\n\t//the reducer is responsible for\n\tswitch (action.type) {\n\t\tcase 'ADD_TODO':\n\t\t\treturn state.concat([action.todo]);\n\t\tcase 'REMOVE_TODO':\n\t\t\treturn state.filter(function (todo) {\n\t\t\t\treturn todo.id !== action.id;\n\t\t\t});\n\t\tcase 'TOGGLE_TODO':\n\t\t\treturn state.map(function (todo) {\n\t\t\t\treturn todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete });\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\n\t}\n}\n\n//# sourceURL=webpack:///./src/_reducers/todos.js?");

/***/ }),

/***/ "./src/_store/createStore.js":
/*!***********************************!*\
  !*** ./src/_store/createStore.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.createStore = createStore;\nfunction createStore(reducer) {\n\t// The store should have 4 parts\n\t/*\n 1. The state\n 2. Get the state\n 3. Listen to changes on the state\n 4. Update the state\n */\n\n\tvar state = void 0;\n\tvar listeners = [];\n\n\t//global methods\n\n\t/**\n  * getState:\n  * params: none\n  * return: state object\n  * */\n\tvar getState = function getState() {\n\t\treturn state;\n\t};\n\n\t/**\n  * subscribe:\n  * params: Function\n  * return: Array\n  */\n\tvar subscribe = function subscribe(listener) {\n\t\tlisteners.push(listener);\n\t\tlisteners.forEach(function (listener) {\n\t\t\treturn listener();\n\t\t});\n\t};\n\n\t/**\n  * dispatch:\n  * params:\n  * return:\n  */\n\tvar dispatch = function dispatch(action) {\n\t\tstate = reducer(state, action);\n\t\t//console.log(state);\n\t\t//update the event listeners\n\t\tlisteners.forEach(function (listener) {\n\t\t\treturn listener();\n\t\t});\n\t};\n\n\treturn {\n\t\tgetState: getState,\n\t\tsubscribe: subscribe,\n\t\tdispatch: dispatch\n\t};\n}\n\n//# sourceURL=webpack:///./src/_store/createStore.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createStore = __webpack_require__(/*! ./_store/createStore */ \"./src/_store/createStore.js\");\n\nvar _todos = __webpack_require__(/*! ./_reducers/todos */ \"./src/_reducers/todos.js\");\n\nvar _randomId = __webpack_require__(/*! ./_helpers/randomId */ \"./src/_helpers/randomId.js\");\n\nvar store = (0, _createStore.createStore)(_todos.todos);\n//helpers\n\n\nfunction addTodo() {\n\tvar input = document.getElementById('todo');\n\tvar name = input.value;\n\tinput.value = '';\n\n\tstore.dispatch({\n\t\ttype: 'ADD_TODO',\n\t\ttodo: {\n\t\t\tid: _randomId.randomId,\n\t\t\tname: name,\n\t\t\tcomplete: false,\n\t\t\tgetLogger: console.log(name, (0, _randomId.randomId)(), store.getState())\n\t\t}\n\t});\n}\n\n// addTodoDOM\nfunction addTodoDOM(todo) {\n\tvar node = document.createElement('li');\n\tvar textNode = document.createTextNode(todo.name);\n\tnode.appendChild(textNode);\n\n\tdocument.getElementById(_todos.todos).appendChild(node);\n}\n\nstore.subscribe(function () {\n\tvar _store$getState = store.getState(),\n\t    todos = _store$getState.todos;\n\n\ttodos.forEach(addTodoDOM);\n});\n\n// event listeners\ndocument.getElementById('todoBtn').addEventListener('click', addTodo);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });