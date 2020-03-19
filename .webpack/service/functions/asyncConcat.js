(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./functions/asyncConcat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions/asyncConcat.js":
/*!**********************************!*\
  !*** ./functions/asyncConcat.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jsonResponse = __webpack_require__(/*! ../lib/jsonResponse */ "./lib/jsonResponse.js");
const asyncConcatService = __webpack_require__(/*! ../lib/asyncConcatService */ "./lib/asyncConcatService.js");

module.exports.handler = async (event, context) => {
  let { a, b} = event.queryStringParameters;

  //Must have 2 inputs
  if (!a || !b) {
    return jsonResponse.error({
      message: "Please specify 2 strings a and b to concatenate"
    });
  }

  //Inputs must be less than 10 characters
  if (a.length > 10 || b.length > 10) {
    return jsonResponse.error({
      message: "Both inputs must be 10 characters or less"
    });
  }

  /* 
    Spongebobify 
    Function to make spongebob case 
    Pass in both a and b to get spongebobA and spongebobB
    and then concat in function below
    
    () => {

    }
  */

  let result = await asyncConcatService.concat(a, b);
  //let result = await asyncConcatService.concat(spongebobA, spongebobB);

  //change 

  return jsonResponse.ok({ result });
};



/***/ }),

/***/ "./lib/asyncConcatService.js":
/*!***********************************!*\
  !*** ./lib/asyncConcatService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function concat(a, b) {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve(`${a} ${b}`));
  });
}

module.exports = {
  concat
};

/***/ }),

/***/ "./lib/jsonResponse.js":
/*!*****************************!*\
  !*** ./lib/jsonResponse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ok(data) {
  return json(200, data);
}

function error(data) {
  return json(400, data);
}

function serverError(data) {
  return json(500, data);
}

function json(statusCode, data, headers = {}) {
  return ({
    statusCode,
    headers: Object.assign({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }, headers),
    body: JSON.stringify(data),
  });
}

module.exports = {
  ok,
  error,
  serverError,
  json
};

/***/ })

/******/ })));
//# sourceMappingURL=asyncConcat.js.map