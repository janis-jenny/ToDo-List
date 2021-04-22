/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateSelect\": () => (/* binding */ populateSelect),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\nconst storage = [];\r\n\r\nconst selectElement = document.querySelector('select');\r\n// const btn = document.querySelector('.btn');\r\n\r\nconst populateSelect = () => {\r\n  storage.map((project) => {\r\n    const optionElement = `<option value=${project.id}>${project.name}</option>\r\n    `;\r\n    selectElement.insertAdjacentHTML('afterbegin', optionElement);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/common.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\r\n\r\nclass Project {\r\n  constructor(name = 'Default') {\r\n    this.name = name; \r\n    this.container = document.querySelector('.render-projects');\r\n    this.tasks = [];\r\n  }\r\n\r\n  addProject() {\r\n    _common__WEBPACK_IMPORTED_MODULE_0__.storage.push({\r\n      name: this.name,\r\n      tasks: this.tasks,\r\n    })\r\n  }\r\n\r\n  renderProject() {\r\n    this.container.textContent = '';\r\n    this.addProject();\r\n    const contPj = _common__WEBPACK_IMPORTED_MODULE_0__.storage.map(item => `<h2 data-id=${_common__WEBPACK_IMPORTED_MODULE_0__.storage.indexOf(item)}>${item.name}</h2>\r\n                                       `);\r\n    this.container.insertAdjacentHTML('afterbegin', contPj);\r\n    console.log(_common__WEBPACK_IMPORTED_MODULE_0__.storage);\r\n  }\r\n}\r\n// <button class=\"todo-btn\">Create Task</button> \n\n//# sourceURL=webpack://ToDo-List/./src/components/project.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createProject() {\r\n  const newProject = document.querySelector('#new-project');\r\n  newProject.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const nameInput = document.querySelector('.project_name').value;\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(nameInput);\r\n    newProject.renderProject();\r\n    (0,_common__WEBPACK_IMPORTED_MODULE_2__.populateSelect)();\r\n    createTodo();\r\n  });\r\n}\r\n\r\nfunction createTodo() {\r\n  const btnTodo = document.querySelectorAll('.create-button');\r\n  btnTodo.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      const addDataId = _common__WEBPACK_IMPORTED_MODULE_2__.storage.indexOf(item)\r\n      const projectIndex = e.target.dataset.id;\r\n      const project = _common__WEBPACK_IMPORTED_MODULE_2__.storage[projectIndex]\r\n      const newTitle = document.querySelector('#title').value;\r\n      const newDescp = document.querySelector('#description').value;\r\n      const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__.default(newTitle, newDescp);\r\n      console.log('hereee');\r\n      console.log(newTodo);\r\n      newTodo.addTodo(project, {title: newTitle, description: newDescp });\r\n      newTodo.renderTodo(project);\r\n    })\r\n  })\r\n}\r\n\r\n/* function toggle(id) {\r\n  var e = document.getElementById(id);\r\n  if (e.style.display == 'block' || e.style.display == '') {\r\n    e.style.display = 'none';\r\n  } else {\r\n    e.style.display = 'block';\r\n  }\r\n}\r\n */\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/render.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n\r\nclass Todos {\r\n  constructor(title, description, date) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.todoList = document.getElementById('todo-list-container');\r\n  }\r\n\r\n  addTodo(project, task) {\r\n    project.tasks.push(task),\r\n    console.log(project)\r\n  }\r\n\r\n  renderTodo(project) {\r\n    this.todoList.textContent = '';\r\n    const contTodo = project.tasks.map(item => `<ul class=\"todoCard\">\r\n                                                <li>${item.title}</li>\r\n                                                <li>${item.description}</li>\r\n                                                <li><button class=\"todo-delete\">Delete</button></li>\r\n                                                <li><button class=\"todo-edit\">Edit</button></li>\r\n                                                </ul>`);\r\n    this.todoList.insertAdjacentHTML('afterbegin', contTodo);\r\n  \r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://ToDo-List/./src/components/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n\r\n\r\n(0,_components_render__WEBPACK_IMPORTED_MODULE_0__.createProject)();\r\n(0,_components_render__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;