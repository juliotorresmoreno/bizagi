(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(14);
var isBuffer = __webpack_require__(36);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 *
 * @author JarveinR
 *
 */

var propertiesMgr = __webpack_require__(8);
var loadModule = __webpack_require__(4);
var path = __webpack_require__(1);
var validator = __webpack_require__(10);
var autotesting = __webpack_require__(5);
var config = __webpack_require__(28);

exports.getResponse = __webpack_require__(29).getResponse;
exports.error = __webpack_require__(30);
exports.loadModule = loadModule.loadModule;
exports.cleanAllModulesCache = loadModule.cleanAllModulesCache;
exports.cleanModuleCache = loadModule.cleanModuleCache;
exports.validator = validator;
exports.config = config.config;
exports.LOG = __webpack_require__(31).log;
exports.autotesting = __webpack_require__(5);
exports.REQUIRED = function (moduleName) {
    if (!autotesting.isAutotestingEnable()) return loadModule.loadModule(path.join(__dirname, '../../node_modules/', moduleName));else return loadModule.loadModule(path.join(__dirname, '../../autotesting/', moduleName));
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var MODULES = {};

function loadModule(modulePath) {
    if (modulePath in MODULES) {
        return MODULES[modulePath];
    } else {
        var module = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        MODULES[modulePath] = module;
        return module;
    }
}

function cleanAllModulesCache() {
    MODULES = {};
}

function cleanModuleCache(modulePath) {
    delete MODULES[modulePath];
}

exports.loadModule = loadModule;
exports.cleanAllModulesCache = cleanAllModulesCache;
exports.cleanModuleCache = cleanModuleCache;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var fs = __webpack_require__(3);
var path = __webpack_require__(1);

function isAutotestingEnable() {
    return fs.existsSync(path.join(__dirname, '../../../../autotesting/inputData.json')) && fs.existsSync(path.join(__dirname, '../../../../autotesting/outputData.json')) && fs.existsSync(path.join(__dirname, '../../../../autotesting/errorData.json'));
}

function getInputData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/inputData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

function getOutputData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/outputData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

function getErrorData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/errorData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

exports.isAutotestingEnable = isAutotestingEnable;
exports.getInputData = getInputData;
exports.getOutputData = getOutputData;
exports.getErrorData = getErrorData;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(38);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(39);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(44);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(16);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(3);

function Iterator(text) {
	var pos = 0,
	    length = text.length;

	this.peek = function (num) {
		num = num || 0;
		if (pos + num >= length) {
			return null;
		}

		return text.charAt(pos + num);
	};
	this.next = function (inc) {
		inc = inc || 1;

		if (pos >= length) {
			return null;
		}

		return text.charAt((pos += inc) - inc);
	};
	this.pos = function () {
		return pos;
	};
}

var rWhitespace = /\s/;
function isWhitespace(chr) {
	return rWhitespace.test(chr);
}
function consumeWhiteSpace(iter) {
	var start = iter.pos();

	while (isWhitespace(iter.peek())) {
		iter.next();
	}

	return { type: "whitespace", start: start, end: iter.pos() };
}

function startsComment(chr) {
	return chr === "!" || chr === "#";
}
function isEOL(chr) {
	return chr == null || chr === "\n" || chr === "\r";
}
function consumeComment(iter) {
	var start = iter.pos();

	while (!isEOL(iter.peek())) {
		iter.next();
	}

	return { type: "comment", start: start, end: iter.pos() };
}

function startsKeyVal(chr) {
	return !isWhitespace(chr) && !startsComment(chr);
}
function startsSeparator(chr) {
	return chr === "=" || chr === ":" || isWhitespace(chr);
}
function startsEscapedVal(chr) {
	return chr === "\\";
}
function consumeEscapedVal(iter) {
	var start = iter.pos();

	iter.next(); // move past "\"
	var curChar = iter.next();
	if (curChar === "u") {
		// encoded unicode char
		iter.next(4); // Read in the 4 hex values
	}

	return { type: "escaped-value", start: start, end: iter.pos() };
}
function consumeKey(iter) {
	var start = iter.pos(),
	    children = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (startsSeparator(curChar)) {
			break;
		}
		if (startsEscapedVal(curChar)) {
			children.push(consumeEscapedVal(iter));continue;
		}

		iter.next();
	}

	return { type: "key", start: start, end: iter.pos(), children: children };
}
function consumeKeyValSeparator(iter) {
	var start = iter.pos();

	var seenHardSep = false,
	    curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isEOL(curChar)) {
			break;
		}

		if (isWhitespace(curChar)) {
			iter.next();continue;
		}

		if (seenHardSep) {
			break;
		}

		seenHardSep = curChar === ":" || curChar === "=";
		if (seenHardSep) {
			iter.next();continue;
		}

		break; // curChar is a non-separtor char
	}

	return { type: "key-value-separator", start: start, end: iter.pos() };
}
function startsLineBreak(iter) {
	return iter.peek() === "\\" && isEOL(iter.peek(1));
}
function consumeLineBreak(iter) {
	var start = iter.pos();

	iter.next(); // consume \
	if (iter.peek() === "\r") {
		iter.next();
	}
	iter.next(); // consume \n

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isEOL(curChar)) {
			break;
		}
		if (!isWhitespace(curChar)) {
			break;
		}

		iter.next();
	}

	return { type: "line-break", start: start, end: iter.pos() };
}
function consumeVal(iter) {
	var start = iter.pos(),
	    children = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (startsLineBreak(iter)) {
			children.push(consumeLineBreak(iter));continue;
		}
		if (startsEscapedVal(curChar)) {
			children.push(consumeEscapedVal(iter));continue;
		}
		if (isEOL(curChar)) {
			break;
		}

		iter.next();
	}

	return { type: "value", start: start, end: iter.pos(), children: children };
}
function consumeKeyVal(iter) {
	return {
		type: "key-value",
		start: iter.pos(),
		children: [consumeKey(iter), consumeKeyValSeparator(iter), consumeVal(iter)],
		end: iter.pos()
	};
}

var renderChild = {
	"escaped-value": function escapedValue(child, text) {
		var type = text.charAt(child.start + 1);

		if (type === "t") {
			return "\t";
		}
		if (type === "r") {
			return "\r";
		}
		if (type === "n") {
			return "\n";
		}
		if (type === "f") {
			return "\f";
		}
		if (type !== "u") {
			return type;
		}

		return String.fromCharCode(parseInt(text.substr(child.start + 2, 4), 16));
	},
	"line-break": function lineBreak(child, text) {
		return "";
	}
};
function rangeToBuffer(range, text) {
	var start = range.start,
	    buffer = [];

	for (var i = 0; i < range.children.length; i++) {
		var child = range.children[i];

		buffer.push(text.substring(start, child.start));
		buffer.push(renderChild[child.type](child, text));
		start = child.end;
	}
	buffer.push(text.substring(start, range.end));

	return buffer;
}
function rangesToObject(ranges, text) {
	var obj = Object.create(null); // Creates to a true hash map

	for (var i = 0; i < ranges.length; i++) {
		var range = ranges[i];

		if (range.type !== "key-value") {
			continue;
		}

		var key = rangeToBuffer(range.children[0], text).join("");
		var val = rangeToBuffer(range.children[2], text).join("");
		obj[key] = val;
	}

	return obj;
}

function stringToRanges(text) {
	var iter = new Iterator(text),
	    ranges = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isWhitespace(curChar)) {
			ranges.push(consumeWhiteSpace(iter));continue;
		}
		if (startsComment(curChar)) {
			ranges.push(consumeComment(iter));continue;
		}
		if (startsKeyVal(curChar)) {
			ranges.push(consumeKeyVal(iter));continue;
		}

		throw Error("Something crazy happened. text: '" + text + "'; curChar: '" + curChar + "'");
	}

	return ranges;
}

function isNewLineRange(range) {
	if (!range) {
		return false;
	}

	if (range.type === "whitespace") {
		return true;
	}

	if (range.type === "literal") {
		return isWhitespace(range.text) && range.text.indexOf("\n") > -1;
	}

	return false;
}

function Editor(text, path) {
	text = text || "";

	var ranges = stringToRanges(text);
	var obj = rangesToObject(ranges, text);
	var keyRange = Object.create(null); // Creates to a true hash map

	for (var i = 0; i < ranges.length; i++) {
		var range = ranges[i];

		if (range.type !== "key-value") {
			continue;
		}

		var key = rangeToBuffer(range.children[0], text).join("");
		keyRange[key] = range;
	}

	this.addHeadComment = function (comment) {
		if (comment == null) {
			return;
		}

		ranges.unshift({ type: "literal", text: "# " + comment.replace(/\n/g, "\n# ") + "\n" });
	};

	this.get = function (key) {
		return obj[key];
	};
	this.set = function (key, val, comment) {
		if (val == null) {
			this.unset(key);return;
		}

		obj[key] = val;

		var range = keyRange[key];
		if (!range) {
			keyRange[key] = range = { type: "literal", text: key + "=" + val };

			var prevRange = ranges[ranges.length - 1];
			if (prevRange != null && !isNewLineRange(prevRange)) {
				ranges.push({ type: "literal", text: "\n" });
			}
			ranges.push(range);
		}

		// comment === null deletes comment. if comment === undefined, it's left alone
		if (comment !== undefined) {
			range.comment = comment && "# " + comment.replace(/\n/g, "\n# ") + "\n";
		}

		if (range.type === "literal") {
			range.text = key + "=" + val;
			if (range.comment != null) {
				range.text = range.comment + range.text;
			}
		} else if (range.type === "key-value") {
			range.children[2] = { type: "literal", text: val };
		} else {
			throw "Unknown node type: " + range.type;
		}
	};
	this.unset = function (key) {
		if (!(key in obj)) {
			return;
		}

		var range = keyRange[key];
		var idx = ranges.indexOf(range);

		ranges.splice(idx, isNewLineRange(ranges[idx + 1]) ? 2 : 1);

		delete keyRange[key];
		delete obj[key];
	};
	this.valueOf = this.toString = function () {
		var buffer = [],
		    stack = [].concat(ranges);

		var node;
		while ((node = stack.shift()) != null) {
			switch (node.type) {
				case "literal":
					buffer.push(node.text);
					break;
				case "key":
				case "value":
				case "comment":
				case "whitespace":
				case "key-value-separator":
				case "escaped-value":
				case "line-break":
					buffer.push(text.substring(node.start, node.end));
					break;
				case "key-value":
					Array.prototype.unshift.apply(stack, node.children);
					if (node.comment) {
						stack.unshift({ type: "literal", text: node.comment });
					}
					break;
			}
		}

		return buffer.join("");
	};
	this.save = function (newPath, callback) {
		if (typeof newPath === 'function') {
			callback = newPath;
			newPath = path;
		}
		newPath = newPath || path;

		if (!newPath) {
			callback("Unknown path");
		}

		fs.writeFile(newPath, this.toString(), callback || function () {});
	};
}
function createEditor(path, callback) {
	if (!path) {
		return new Editor();
	}

	if (!callback) {
		return new Editor(fs.readFileSync(path).toString(), path);
	}

	return fs.readFile(path, function (err, text) {
		if (err) {
			return callback(err, null);
		}

		text = text.toString();
		return callback(null, new Editor(text, path));
	});
}

function parse(text) {
	text = text.toString();
	var ranges = stringToRanges(text);
	return rangesToObject(ranges, text);
}

function read(path, callback) {
	if (!callback) {
		return parse(fs.readFileSync(path));
	}

	return fs.readFile(path, function (err, data) {
		if (err) {
			return callback(err, null);
		}

		return callback(null, parse(data));
	});
}

module.exports = { parse: parse, read: read, createEditor: createEditor };

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var iz = __webpack_require__(26);
var bizagiUtil = __webpack_require__(2);

function requiredParameters(parameters) {
    var parameterName;

    for (parameterName in parameters) {
        var parameter = parameters[parameterName];
        if (!iz(parameter).required().valid) {
            var error = bizagiUtil.getResponse(null, null, -400, bizagiUtil.error('VAL.REQUIRED_PARAM', [parameterName]));
            return error;
        }
    }
};

function isValidGlobalsJson(globals) {
    try {
        var error = requiredParameters({ 'globals': globals });
        if (error) {
            return error;
        }
        globals = escapeString(globals);
        globals = JSON.parse(globals);

        if (typeof globals.authdata === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.authdata', 'globals']));
            return error;
        }

        if (typeof globals.systemproperties === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.systemproperties', 'globals']));
            return error;
        }

        if (typeof globals.projectname === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.projectname', 'globals']));
            return error;
        }

        for (key in globals.authdata) {
            globals.authdata[key] = escapeString(globals.authdata[key]);
        }

        for (key in globals.systemproperties) {
            globals.systemproperties[key] = escapeString(globals.systemproperties[key]);
        }

        var success = bizagiUtil.getResponse(globals, null, 200);
        return success;
    } catch (exception) {
        var error = bizagiUtil.getResponse(null, exception, -200, bizagiUtil.error('VAL.PARAM_TYPE', ['globals', 'JSON']));
        return error;
    }
};

function isValidDataJson(json) {
    try {
        var name = Object.keys(json)[0];
        var jsonStr = escapeString(json[name]);
        var data = JSON.parse(jsonStr);
        var success = bizagiUtil.getResponse(data, null, 200);
        return success;
    } catch (exception) {
        var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.PARAM_TYPE', [name, 'JSON']));
        return error;
    }
};

function escapeString(str) {
    str = deleteInvalidCharacteres(str);
    var strEscape = '';

    if (str.match(/^%7B/)) {
        str = str.replace(/\+/g, ' ');
        var pattern = /%/g;
        var match;
        var startIndex = 0;
        var pivotIndex = 0;

        while ((match = pattern.exec(str)) !== null) {
            var encodeNum = str.substr(match.index + 1, 2);
            var character = getUnescapeCharacter(encodeNum);
            strEscape += str.substring(pivotIndex, match.index) + character;
            pivotIndex = match.index + 3;
        }
    } else {
        strEscape = str;
    }

    return unescape(strEscape);
};

function deleteInvalidCharacteres(str) {
    // the pattern looks for invalid characteres
    var pattern = /[\b\f\n\r\t\v]/g;

    var array = str.split("");
    var match;
    while ((match = pattern.exec(str)) !== null) {
        array.splice(match.index, 1, '');
    }

    return array.join('');
};

function getUnescapeCharacter(encodeNum) {

    var unescapeCh = numCharacters[encodeNum];

    if (unescapeCh === undefined) {
        unescapeCh = '%' + encodeNum;
    }

    return unescapeCh;
};

var characters = {
    '2C': ',',
    '3A': ':',
    '20': ' ',
    '22': '"',
    '7B': '{',
    '7D': '}'
};

exports.requiredParameters = requiredParameters;
exports.isValidGlobalsJson = isValidGlobalsJson;
exports.isValidDataJson = isValidDataJson;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global module, exports, require */
var validators = __webpack_require__(12);

(function () {
    'use strict';

    var iz;

    /**
     * @param value
     * @param error_messages
     * @constructor
     */
    function Iz(value, error_messages) {
        var self = this;

        if ((typeof error_messages === 'undefined' ? 'undefined' : _typeof(error_messages)) === 'object') {
            this.error_messages = error_messages;
        } else {
            this.error_messages = {};
        }

        this._not = false;
        this._calledValidations = {};

        function not() {
            self._not = true;
            return self;
        }

        function revalidate() {
            self.errors = [];
            self.valid = true;

            for (var key in self._calledValidations) {
                var rule = self._calledValidations[key];

                if (self._calledValidations.hasOwnProperty(key)) {
                    if (rule.not) {
                        self.not();
                    }

                    validator_partial(rule.validation).apply(self, rule.args);
                }
            }
            return self;
        }

        function setValue(value) {
            self.value = value;
            self.revalidate();
            return self;
        }

        /**
         * Formats a string using the args index as the key
         * @param {String} string
         * @param {Array|Object} args
         */
        function format(string, args) {
            for (var i in args) {
                string = string.replace(new RegExp('\{\{\\s*' + i + '\\s*\}\}', 'gim'), args[i]);
            }
            return string;
        }

        this.not = not;
        this.value = value;
        this.setValue = setValue;
        this.revalidate = revalidate;
        this.errors = [];
        this.valid = true;

        /**
         * Partial application with currying into a validation function. Pushes to error array if an error exists.
         * If an error_message is specified for some specific check then that message is used. Otherwise just the function name.
         * Also sets valid to false if an error is found. It can't ever set valid to true.
         * @param fn
         */
        function validator_partial(fn) {
            var fnName = Array.prototype.slice.call(arguments)[0],
                args = Array.prototype.slice.call(arguments, 1);
            args.unshift(value); //add value to the front
            return function () {
                var argArray = Array.prototype.slice.call(arguments),
                    allArguments = [self.value].concat(argArray),
                    result = validators[fn].apply(null, allArguments),
                    key = (self._not ? 'not_' : '') + fnName;

                //save rules that have been called
                self._calledValidations[key] = {
                    not: self._not,
                    validation: fn,
                    args: argArray
                };

                //2 failed validation cases
                if (!this._not && !result || this._not && result) {
                    //change error message based on not and if an error message is specified
                    if (!this._not && typeof this.error_messages[fn] !== 'undefined') {
                        this.errors.push(format(this.error_messages[fn], allArguments));
                    } else if (this._not && typeof this.error_messages['not_' + fn] !== 'undefined') {
                        this.errors.push(format(this.error_messages['not_' + fn], allArguments));
                    } else if (this._not) {
                        this.errors.push('Not ' + fn);
                    } else {
                        this.errors.push(fn);
                    }
                    //all of these cases result in non-validity
                    this.valid = false;
                }
                //set not back for the next test
                this._not = false;
                //chain
                return this;
            };
        }

        for (var fn in validators) {
            if (validators.hasOwnProperty(fn)) {
                this[fn] = validator_partial(fn);
            }
        }
    }

    /**
     * Factory for creating chained checking objects
     * @param value{*}
     * @param error_messages{Object}
     * @return {Object} of type Iz
     */
    iz = function iz(value, error_messages) {
        return new Iz(value, error_messages);
    };

    for (var fn in validators) {
        if (validators.hasOwnProperty(fn)) {
            iz[fn] = validators[fn];
        }
    }

    iz.addValidator = function (name, func, force) {
        validators.addValidator(name, func, force);
        iz[name] = func;
    };

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = iz;
        }
        exports.iz = iz;
    }
})();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global module, exports */
(function () {
    'use strict';

    function addValidator(name, validator, force) {
        if (typeof validators[name] !== 'undefined' && force !== true) {
            throw new Error('Not adding validator because ' + name + ' already exists');
        }

        if (name === 'addValidator') {
            throw new Error('Cannot override addValidator');
        }

        validators[name] = validator;
    }

    var validators = {};

    function izAlphaNumeric(value) {
        return (/^[a-z0-9]+$/i.test(value)
        );
    }

    function izString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    function izNumber(val) {
        if ((typeof val === 'string' || typeof val === 'number') && !isNaN(val % 1)) {
            return true;
        }
        return false;
    }

    function izBetween(val, start, end) {
        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function' || (typeof start === 'undefined' ? 'undefined' : _typeof(start)) === 'object' || typeof start === 'function' || (typeof end === 'undefined' ? 'undefined' : _typeof(end)) === 'object' || typeof end === 'function') {
            return false;
        }

        if (val >= start && val <= end) {
            return true;
        }
        return false;
    }

    function izBoolean(value) {
        if (typeof value === 'boolean' || typeof value === 'number' && (value === 0 || value === 1)) {
            return true;
        }
        return false;
    }

    function izInt(value, allowDecimal) {
        if (typeof allowDecimal !== 'boolean') {
            allowDecimal = false;
        }

        if (!allowDecimal) {
            return (/^\s*(\+|-)?\d+\s*$/.test(value)
            );
        } else if (izNumber(value) && value % 1 === 0) {
            return true;
        }
        return false;
    }

    /**
     * @author Phil Green (ShirtlessKirk) https://gist.github.com/2134376
     */
    function luhnChk(luhn) {
        var len = luhn.length,
            mul = 0,
            prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
            sum = 0;

        while (len--) {
            sum += prodArr[mul][parseInt(luhn.charAt(len), 10)];
            mul ^= 1;
        }

        return sum % 10 === 0 && sum > 0;
    }

    /**
     * Returns the name of the class that the object is
     * @author http://blog.magnetiq.com/post/514962277/finding-out-class-names-of-javascript-objects
     * @param obj{Object}
     * @return String name of the class
     */
    function izGetObjectClass(obj) {
        if (obj && obj.constructor && obj.constructor.toString) {
            var arr = obj.constructor.toString().match(/function\s*(\w+)/);

            if (arr && arr.length === 2) {
                return arr[1];
            }
        }

        return undefined;
    }

    function izCc(value) {
        if (typeof value !== 'string' && typeof value !== 'number') {
            return false;
        }

        value = value.replace(/[ \-]/g, ''); // normalizing
        if (izInt(value)) {
            return luhnChk(value);
        }
        return false;
    }

    /**
     * TODO: maybe provide format and use: http://www.mattkruse.com/javascript/date/source.html
     * but that seems in elegant. Then again dates in general are in elegant... *shrug*
     * @param value
     * @return {Boolean}
     */
    function izDate(value) {
        return izGetObjectClass(value) === 'Date' || new Date(value).toString() !== 'Invalid Date' || !isNaN(new Date(value));
    }

    function izDecimal(value) {
        return izNumber(value) && !izInt(value, false);
    }

    /**
     * Basically just expects the @ symbol. There was a full discussion about it here:
     * http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
     *
     * Might make this more complicated in the future... or not *shrug*
     * @param value
     * @return {Boolean}
     */
    function izEmail(value) {
        return !(typeof value !== 'string') && /\S+@\S+/.test(value);
    }

    /**
     * True if the parameter is empty. length > 0 for objects (if exists) or arrays, Functions/Objects have no properties,
     * or the type is primitive.
     * @param value of any type
     * @return {Boolean}
     */
    function izEmpty(value) {
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value),
            key;
        //arrays and objects with length properties
        if (value.hasOwnProperty('length') && type !== 'function' && value.length > 0) {
            return false;
        } else if (type === 'function' || type === 'object') {
            for (key in value) {
                if (value.hasOwnProperty(key)) {
                    return false; //on first valid key, return false;
                }
            }
        }

        //primitives are empty as are objects without properties and empty arrays
        return true;
    }

    function izBlank(value) {
        if (typeof value === 'string') {
            return izEmpty(value);
        }

        return false;
    }

    /**
     * Strictly Equal
     * @param value
     * @param value2
     * @return {Boolean}
     */
    function izEqual(value, value2) {
        var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value),
            value2Type = typeof value2 === 'undefined' ? 'undefined' : _typeof(value2),
            key;

        if ((valueType === 'object' || valueType === 'function') && typeof value.equals === 'function') {
            if (value2Type === 'object' || value2Type === 'function') {
                //value2 does not need the equals method, if an exception is thrown here that is the implementor
                //catching it returning false might result in a bug that is hard to track
                return value.equals(value2);
            }
        } else if (valueType === 'object' || valueType === 'function') {
            for (key in value) {
                if (value.hasOwnProperty(key) && !value2.hasOwnProperty(key) && key !== 'equals') {
                    //if property is an object then recursively check
                    if (_typeof(value[key]) === 'object' || typeof value[key] === 'function' && !izEqual(value[key], value2[key])) {
                        return false;
                    } else if (value[key] !== value2[key]) {
                        //if not object or function
                        return false;
                    }
                }
            }
            return true;
        }

        return value === value2;
    }

    /**
     * Is obj1 and extension of obj2? True if this is the case.
     * @param obj1
     * @param obj2
     * @return {Boolean}
     */
    function izExtension(obj1, obj2) {
        var key;
        if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' || (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') {
            return false;
        }

        for (key in obj2) {
            if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'undefined') {
                return false;
            }
        }

        return true;
    }

    /**
     * Accepts anything.anything.anything.ext.ext and matches the last ext
     * @param value a file extension of a file name
     */
    function izFileExtension(value, validExtensions) {
        var ext;

        if ((typeof validExtensions === 'undefined' ? 'undefined' : _typeof(validExtensions)) !== 'object' || typeof validExtensions.indexOf === 'undefined' || typeof value !== 'string') {
            return false;
        }

        ext = value.split('.').pop().toLowerCase(); //split by '.' and get me the last thing, then lowercase it
        if (validExtensions.indexOf(ext) !== -1) {
            return true;
        }
        return false;
    }

    function izFileExtensionAudio(value) {
        var validExtensions = ['mp3', 'ogg', 'aac', 'wav'];
        return izFileExtension(value, validExtensions);
    }

    function izFileExtensionImage(value) {
        var validExtensions = ['gif', 'png', 'jpeg', 'jpg', 'svg', 'bmp'];
        return izFileExtension(value, validExtensions);
    }

    function izFileExtensionVideo(value) {
        var validExtensions = ['mp4', 'ogv', 'm4v', 'mov', 'avi'];
        return izFileExtension(value, validExtensions);
    }

    function izInArray(value, arr) {
        if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object' || typeof arr.indexOf === 'undefined') {
            return false;
        }

        if (arr.indexOf(value) !== -1) {
            return true;
        }
        return false;
    }

    function izAnArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }

    /**
     * Matches IPv4, IPv6 or hostname
     * @author Mikulas Dite http://stackoverflow.com/questions/9208814/validate-ipv4-ipv6-and-hostname
     * @param str
     * @return boolean
     */
    function izIp(str) {
        var re = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/;
        return re.test(str);
    }

    function izMinLength(val, len) {
        if ((typeof val === 'string' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') && typeof val.length !== 'undefined' && izInt(len) && val.length >= len) {
            return true;
        }

        return false;
    }

    function izMaxLength(val, len) {
        if ((typeof val === 'string' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') && typeof val.length !== 'undefined' && izInt(len) && val.length <= len) {
            return true;
        }

        return false;
    }

    function izMultiple(num, multiple) {
        if (typeof num !== 'number' || typeof multiple !== 'number') {
            return false;
        }
        if (num % multiple === 0) {
            return true;
        }

        return false;
    }

    function izOfType(obj, type) {
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.length === 'undefined' && typeof type === 'string') {
            //is truly an object
            if (izGetObjectClass(obj) === type) {
                return true;
            }
        }
        return false;
    }

    function izPhone(str) {
        var cleanedStr = '',
            numbers = [];
        if (typeof str === 'string') {
            cleanedStr = str.replace(/[^x0-9]/g, '');
            numbers = cleanedStr.split('x');
            //first and last array elements are numbers, this allows for multiple x's between the phone number and extension (if exists)
            if (numbers.length > 0 && izInt(numbers[0]) && ( // has at least 1 value in the array and it is an integer
            numbers[0].length === 10 || numbers[0].length === 11) && // it has an extension with or without country code
            izInt(numbers.pop())) {
                //if it is has an extension it is a valid number
                return true;
            }
        }
        return false;
    }

    function izPostal(str) {
        var cleanedStr = '';
        if (typeof str === 'string') {
            //removing everything but numbers
            cleanedStr = str.replace(/[^0-9]/g, '');
            //is either a 5 or 9 digit zip code...
            if (izInt(cleanedStr) && (cleanedStr.length === 5 || cleanedStr.length === 9)) {
                return true;
            }
        }
        return false;
    }

    function izSsn(str) {
        var cleanedStr = '';
        if (typeof str === 'string') {
            cleanedStr = str.replace(/[^0-9]/g, '');
            //There are varying rules depending on date of issuance. I will say that having 9 digits is all that is needed for now.
            if (izInt(cleanedStr) && cleanedStr.length === 9) {
                return true;
            }
        }
        return false;
    }

    function izRequired(obj) {
        return obj !== undefined && obj !== null && obj !== '';
    }

    function izRequiredOr(validator) {
        return function (val) {
            return !izRequired(val) || validator.apply(this, Array.prototype.slice.call(arguments));
        };
    }

    //Expose some methods, this is done to preserve function names in all browsers
    validators.alphaNumeric = izRequiredOr(izAlphaNumeric);
    validators.string = izRequiredOr(izString);
    validators.between = izRequiredOr(izBetween);
    validators.blank = izRequiredOr(izBlank);
    validators.boolean = izRequiredOr(izBoolean);
    validators.cc = izRequiredOr(izCc);
    validators.date = izRequiredOr(izDate);
    validators.decimal = izRequiredOr(izDecimal);
    validators.email = izRequiredOr(izEmail);
    validators.empty = izRequiredOr(izEmpty);
    validators.equal = izRequiredOr(izEqual);
    validators.extension = izExtension;
    validators.fileExtension = izRequiredOr(izFileExtension);
    validators.fileExtensionAudio = izRequiredOr(izFileExtensionAudio);
    validators.fileExtensionImage = izRequiredOr(izFileExtensionImage);
    validators.fileExtensionVideo = izRequiredOr(izFileExtensionVideo);
    validators.inArray = izInArray;
    validators.anArray = izRequiredOr(izAnArray);
    validators.int = izRequiredOr(izInt);
    validators.ip = izRequiredOr(izIp);
    validators.minLength = izRequiredOr(izMinLength);
    validators.maxLength = izRequiredOr(izMaxLength);
    validators.multiple = izRequiredOr(izMultiple);
    validators.number = izRequiredOr(izNumber);
    validators.ofType = izRequiredOr(izOfType);
    validators.phone = izRequiredOr(izPhone);
    validators.postal = izRequiredOr(izPostal);
    validators.required = izRequired;
    validators.ssn = izRequiredOr(izSsn);

    validators.addValidator = addValidator;

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = validators;
        }
        exports.validators = validators;
    }
})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(21);
var assert = __webpack_require__(45);
var http = __webpack_require__(18);
var https = __webpack_require__(19);
var Writable = __webpack_require__(46).Writable;
var debug = __webpack_require__(47)('follow-redirects');

var nativeProtocols = { 'http:': http, 'https:': https };
var schemes = {};
var _exports = module.exports = {
	maxRedirects: 21
};
// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var safeMethods = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
['abort', 'aborted', 'error', 'socket'].forEach(function (event) {
	eventHandlers[event] = function (arg) {
		this._redirectable.emit(event, arg);
	};
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
	// Initialize the request
	Writable.call(this);
	this._options = options;
	this._redirectCount = 0;
	this._bufferedWrites = [];

	// Attach a callback if passed
	if (responseCallback) {
		this.on('response', responseCallback);
	}

	// React to responses of native requests
	var self = this;
	this._onNativeResponse = function (response) {
		self._processResponse(response);
	};

	// Complete the URL object when necessary
	if (!options.pathname && options.path) {
		var searchPos = options.path.indexOf('?');
		if (searchPos < 0) {
			options.pathname = options.path;
		} else {
			options.pathname = options.path.substring(0, searchPos);
			options.search = options.path.substring(searchPos);
		}
	}

	// Perform the first request
	this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
	// If specified, use the agent corresponding to the protocol
	// (HTTP and HTTPS use different types of agents)
	var protocol = this._options.protocol;
	if (this._options.agents) {
		this._options.agent = this._options.agents[schemes[protocol]];
	}

	// Create the native request
	var nativeProtocol = nativeProtocols[protocol];
	var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
	this._currentUrl = url.format(this._options);

	// Set up event handlers
	request._redirectable = this;
	for (var event in eventHandlers) {
		/* istanbul ignore else */
		if (event) {
			request.on(event, eventHandlers[event]);
		}
	}

	// End a redirected request
	// (The first request must be ended explicitly with RedirectableRequest#end)
	if (this._isRedirect) {
		// If the request doesn't have en entity, end directly.
		var bufferedWrites = this._bufferedWrites;
		if (bufferedWrites.length === 0) {
			request.end();
			// Otherwise, write the request entity and end afterwards.
		} else {
			var i = 0;
			(function writeNext() {
				if (i < bufferedWrites.length) {
					var bufferedWrite = bufferedWrites[i++];
					request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
				} else {
					request.end();
				}
			})();
		}
	}
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
	// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	// that further action needs to be taken by the user agent in order to
	// fulfill the request. If a Location header field is provided,
	// the user agent MAY automatically redirect its request to the URI
	// referenced by the Location field value,
	// even if the specific status code is not understood.
	var location = response.headers.location;
	if (location && this._options.followRedirects !== false && response.statusCode >= 300 && response.statusCode < 400) {
		// RFC7231§6.4: A client SHOULD detect and intervene
		// in cyclical redirections (i.e., "infinite" redirection loops).
		if (++this._redirectCount > this._options.maxRedirects) {
			return this.emit('error', new Error('Max redirects exceeded.'));
		}

		// RFC7231§6.4: Automatic redirection needs to done with
		// care for methods not known to be safe […],
		// since the user might not wish to redirect an unsafe request.
		// RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
		// that the target resource resides temporarily under a different URI
		// and the user agent MUST NOT change the request method
		// if it performs an automatic redirection to that URI.
		var header;
		var headers = this._options.headers;
		if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
			this._options.method = 'GET';
			// Drop a possible entity and headers related to it
			this._bufferedWrites = [];
			for (header in headers) {
				if (/^content-/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Drop the Host header, as the redirect might lead to a different host
		if (!this._isRedirect) {
			for (header in headers) {
				if (/^host$/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Perform the redirected request
		var redirectUrl = url.resolve(this._currentUrl, location);
		debug('redirecting to', redirectUrl);
		Object.assign(this._options, url.parse(redirectUrl));
		this._isRedirect = true;
		this._performRequest();
	} else {
		// The response is not a redirect; return it as-is
		response.responseUrl = this._currentUrl;
		this.emit('response', response);

		// Clean up
		delete this._options;
		delete this._bufferedWrites;
	}
};

// Aborts the current native request
RedirectableRequest.prototype.abort = function () {
	this._currentRequest.abort();
};

// Flushes the headers of the current native request
RedirectableRequest.prototype.flushHeaders = function () {
	this._currentRequest.flushHeaders();
};

// Sets the noDelay option of the current native request
RedirectableRequest.prototype.setNoDelay = function (noDelay) {
	this._currentRequest.setNoDelay(noDelay);
};

// Sets the socketKeepAlive option of the current native request
RedirectableRequest.prototype.setSocketKeepAlive = function (enable, initialDelay) {
	this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

// Sets the timeout option of the current native request
RedirectableRequest.prototype.setTimeout = function (timeout, callback) {
	this._currentRequest.setTimeout(timeout, callback);
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
	this._currentRequest.write(data, encoding, callback);
	this._bufferedWrites.push({ data: data, encoding: encoding });
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
	this._currentRequest.end(data, encoding, callback);
	if (data) {
		this._bufferedWrites.push({ data: data, encoding: encoding });
	}
};

// Export a redirecting wrapper for each native protocol
Object.keys(nativeProtocols).forEach(function (protocol) {
	var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
	var nativeProtocol = nativeProtocols[protocol];
	var wrappedProtocol = _exports[scheme] = Object.create(nativeProtocol);

	// Executes an HTTP request, following redirects
	wrappedProtocol.request = function (options, callback) {
		if (typeof options === 'string') {
			options = url.parse(options);
			options.maxRedirects = _exports.maxRedirects;
		} else {
			options = Object.assign({
				maxRedirects: _exports.maxRedirects,
				protocol: protocol
			}, options);
		}
		assert.equal(options.protocol, protocol, 'protocol mismatch');
		debug('options', options);

		return new RedirectableRequest(options, callback);
	};

	// Executes a GET request, following redirects
	wrappedProtocol.get = function (options, callback) {
		var request = wrappedProtocol.request(options, callback);
		request.end();
		return request;
	};
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(49);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bzUtil = __webpack_require__(2);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _axios = __webpack_require__(34);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author julio torres
 */

function invoke(globals, actionName, data, authenticationType, LOG, callback) {
    _axios2.default.get("https://google.com").then(function (response) {
        console.log(response.data);
        console.log(_bzUtil.REQUIRED, _bzUtil.error, _bzUtil.getResponse);
    });
    console.log("Hola mundo desde invoke");
}

exports.invoke = invoke;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global require, module */

(function () {
    'use strict';

    // serves as our bootstrap into other node apps

    var iz = __webpack_require__(11),
        are = __webpack_require__(27),
        validators = __webpack_require__(12);

    iz.are = are;
    iz.validators = validators;

    module.exports = iz;
})();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global module, exports */

var iz = __webpack_require__(11);

(function () {
    'use strict';

    var are;

    function Are(rules) {
        var self = this,
            currentRule,
            rule,
            errors,
            key;

        self.fields = {};

        for (key in rules) {
            if (!rules.hasOwnProperty(key)) {
                continue;
            }

            // if is an iz object just add rule directly, if not assemble an iz object
            if (typeof rules[key].revalidate !== 'undefined') {
                self.fields[key] = rules[key];
            } else {
                errors = {};

                // make errors dictionary
                for (rule in rules[key]) {
                    if (!rules[key].hasOwnProperty(rule)) {
                        continue;
                    }

                    if (rules[key][rule].error) {
                        errors[rules[key][rule].rule] = rules[key][rule].error;
                    }
                }

                currentRule = iz(0, errors);

                // call rule
                for (rule in rules[key]) {
                    if (!rules[key].hasOwnProperty(rule)) {
                        continue;
                    }

                    // handle 'not_'
                    if (rules[key][rule].rule.indexOf('not_') > -1) {
                        currentRule.not();
                    }

                    currentRule[rules[key][rule].rule.replace('not_', '')].apply(currentRule, rules[key][rule].args || []);
                }

                self.fields[key] = currentRule;
            }
        }

        this.valid = function () {
            for (var key in self.fields) {
                if (!self.fields[key].hasOwnProperty(key)) {
                    continue;
                }

                self.fields[key].revalidate();
                if (!self.fields[key].valid) {
                    return false;
                }
            }

            return true;
        };

        this.validFor = function (values) {
            var field,
                i = 0,
                fieldKeys,
                currentValue,
                areAllRulesValid = true;

            for (field in self.fields) {
                if (!self.fields.hasOwnProperty(field)) {
                    continue;
                }

                fieldKeys = field.split('.');
                currentValue = values[fieldKeys[0]];

                // account for chained field names
                for (i = 1; i < fieldKeys.length; i++) {
                    // we'll get an out of bounds error if the field doesn't exist
                    // let's treat this as an undefined
                    try {
                        currentValue = currentValue[fieldKeys[i]];
                    } catch (e) {
                        currentValue = undefined;
                    }
                }

                self.fields[field].setValue(currentValue);

                if (!self.fields[field].valid) {
                    areAllRulesValid = false;
                }
            }

            if (!areAllRulesValid) {
                return false;
            }

            return true;
        };

        this.getInvalidFields = function () {
            var errorFields = {},
                key;

            for (key in self.fields) {
                if (self.fields[key].errors && self.fields[key].errors.length) {
                    errorFields[key] = self.fields[key].errors;
                }
            }

            return errorFields;
        };
    }

    are = function are(rules) {
        return new Are(rules);
    };

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = are;
        }
        exports.are = are;
    }
})();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 *
 * @author JarveinR
 *
 */

var propertiesMgr = __webpack_require__(8);
var loadModule = __webpack_require__(4);
var path = __webpack_require__(1);
var fs = __webpack_require__(3);

var config = eval(fs.readFileSync('../../etc/config.js', "utf8"));
config.logsPath = path.join(__dirname, config.backingDownLogDirectory || 'tmp/', 'Temporary/Connectors/');
config.schema = "http";
config.server = "localhost";
config.port = 16541;
config.maxRequestLengthSize = "10mb";
config.clusterWorkerNumber = "auto";
config.nodeJSExecutablePath = "C:\\BizagiJEE\\nodejs\\0.12.5\\node.exe";
config.forceEnableLogger = false;
config.logsPath = config.logsPath;

var configPropertiesPath = path.join(__dirname, config.backingDownConfigFile || 'tmp/', 'config.properties');
if (fs.existsSync(configPropertiesPath)) {
    var properties = propertiesMgr.read(configPropertiesPath);

    if (properties.schema) config.schema = properties.schema;

    if (properties.server) config.server = properties.server;

    if (properties.port) config.port = properties.port;

    if (properties.maxRequestLengthSize) config.maxRequestLengthSize = properties.maxRequestLengthSize;

    if (properties.clusterWorkerNumber) config.clusterWorkerNumber = properties.clusterWorkerNumber;

    if (properties.nodeJSExecutablePath) config.nodeJSExecutablePath = properties.nodeJSExecutablePath;

    if (properties.forceEnableLogger) config.forceEnableLogger = properties.forceEnableLogger;

    if (properties.logsDirectoryPath) config.logsPath = properties.logsDirectoryPath;
}

Object.defineProperty(exports, "config", { value: config });
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * @author JarveinR
 *
 */

var autotesting = __webpack_require__(5);

function getResponse(response, error, connectorStatusCode, errorMessage) {
    var success = true;

    if (response) {
        if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) !== 'object') {
            try {
                response = JSON.parse(response);
                success = true;
            } catch (e) {
                response = {};
                errorMessage = "The response must be a valid JSON: " + response;
                success = false;
            }
        }
    } else {
        response = {};
    }

    if (error) {
        if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) !== 'object') {
            try {
                error = JSON.parse(error);
            } catch (e) {
                error = {};
                errorMessage = "The error must be a valid JSON: " + error;
                success = false;
            }
        }
        if (!isEmpty(error)) {
            success = false;
        }
    } else {
        error = {};
    }

    if (errorMessage) {
        if ((typeof errorMessage === 'undefined' ? 'undefined' : _typeof(errorMessage)) === 'object') {
            errorMessage = JSON.stringify(errorMessage);
        } else {
            errorMessage = errorMessage.toString();
        }
    } else {
        if (!isEmpty(error)) {
            errorMessage = JSON.stringify(error);
        } else {
            errorMessage = "";
        }
    }

    if (errorMessage != "") {
        success = false;
    }

    if (!connectorStatusCode && success) {
        connectorStatusCode = 200;
    }

    if (!connectorStatusCode && !success) {
        connectorStatusCode = -200;
    }

    var outputs = {
        response: {
            outputs: {
                output: response,
                error: error
            }
        },
        success: success,
        connectorstatuscode: connectorStatusCode,
        errormessage: errorMessage
    };

    outputs.autotestingenabled = false;
    if (autotesting.isAutotestingEnable()) {
        outputs.autotestingenabled = true;
    }

    return outputs;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

exports.getResponse = getResponse;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var util = __webpack_require__(13);
var path = __webpack_require__(1);
var errors;

module.exports = function (error, parameters) {
    if (!errors) {
        try {
            errors = defaultErrors();
            var userErrors = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            if (userErrors) {
                for (var key in userErrors) {
                    if (!errors[key]) {
                        errors[key] = userErrors[key];
                    }
                }
            }
        } catch (exception) {
            errors = defaultErrors();
        }
    }

    if (error in errors) {
        if (typeof parameters !== 'undefined' && parameters.constructor === Array) {
            if (parameters.length > 0) {
                var param = '';
                for (var i = 0; i < parameters.length; i++) {
                    var value = parameters[i];
                    if (value instanceof Object) {
                        value = JSON.stringify(value);
                    } else if (value instanceof Error) {
                        value = value.message;
                    } else {
                        value = String(value);
                    }

                    if (value) {
                        value = value.replace(/\"/g, "");
                        value = value.replace(/\'/g, "");
                        value = value.replace(/\\/g, "/");
                    }
                    param += "'" + value + "'";
                    if (i != parameters.length - 1) {
                        param += ",";
                    }
                }

                var call = "util.format('" + errors[error] + "', " + param + ");";
                var msg = eval(call);

                return msg;
            }
        }
        return errors[error];
    }
    return "";
};

function defaultErrors() {
    errors = {
        "GLB.EXCEPTION": "Exception Error, %s, %s, location: %s",
        "GLB.IS_NOT_A": "%s is not a %s",
        "GLB.IS_NOT_AN": "%s is not an %s",
        "GLB.UNKNOW_ACTION": "Unknown action: %s",
        "GLB.RESOURCE_REDIRECT": "Server is requesting the client to perform a redirect, the HttpCode is: %s",
        "GLB.RESOURCE_NOT_FOUND": "Resource not found: %s",
        "GLB.RESPONSE_ERROR": "An error was obtained by processing the request, the HttpCode is : %s, the server response was: %s",
        "VAL.REQUIRED_PARAM": "The Parameter -%s- is required",
        "VAL.REQUIRED_ELEMENT": "The element -%s- is required in -%s-",
        "VAL.REQUIRED_PARAMS": "The Parameters are required: %s",
        "VAL.PARAM_TYPE": "The -%s- parameter must be a valid %s"
    };

    return errors;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 *
 * @author JarveinR
 *
 */

var loggers = __webpack_require__(32);
var loadModule = __webpack_require__(4).loadModule;
var validator = __webpack_require__(10);
var path = __webpack_require__(1);
var bizagiUtil = __webpack_require__(2);
var config = bizagiUtil.config;

function log(logname, enabled) {
    enabled = String(enabled) === "true";
    if (config.forceEnableLogger) {
        var forceEnableLogger = String(config.forceEnableLogger) === "true";
        if (forceEnableLogger === true) {
            enabled = true;
        }
    }

    if (enabled === true) {
        var error = validator.requiredParameters({ 'globals.projectname': logname });
        if (error) {
            throw error;
        }
        var log = loggers(logname + '.log');
        return log;
    } else {
        return loadModule(path.join(__dirname, 'emptyLogger'));;
    }
}

exports.log = log;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var LOGGERS = {};

module.exports = function (loggername) {
    try {
        if (loggername in LOGGERS) {
            return LOGGERS[loggername];
        } else {
            var BizagiLogger = __webpack_require__(33).BizagiLogger;
            LOGGERS[loggername] = new BizagiLogger(loggername);
            return LOGGERS[loggername];
        }
    } catch (e) {
        throw e;
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Invalid number (23:44)\n\n\u001b[0m \u001b[90m 21 | \u001b[39m        \u001b[36mvar\u001b[39m loggerDirectory \u001b[33m=\u001b[39m path\u001b[33m.\u001b[39mjoin(config\u001b[33m.\u001b[39mlogsPath)\u001b[33m;\u001b[39m\n \u001b[90m 22 | \u001b[39m        \u001b[36mif\u001b[39m (\u001b[33m!\u001b[39mfs\u001b[33m.\u001b[39mexistsSync(loggerDirectory)){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m            fsmk\u001b[33m.\u001b[39mmkdirSync(loggerDirectory\u001b[33m,\u001b[39m \u001b[35m0666\u001b[39m\u001b[33m,\u001b[39m \u001b[36mtrue\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 24 | \u001b[39m        }\n \u001b[90m 25 | \u001b[39m\n \u001b[90m 26 | \u001b[39m        \u001b[36mvar\u001b[39m configuration \u001b[33m=\u001b[39m {\u001b[0m\n");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(35);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(14);
var Axios = __webpack_require__(37);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(24);
axios.CancelToken = __webpack_require__(62);
axios.isCancel = __webpack_require__(23);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(63);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(57);
var dispatchRequest = __webpack_require__(58);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(15);
var buildURL = __webpack_require__(17);
var parseHeaders = __webpack_require__(40);
var isURLSameOrigin = __webpack_require__(41);
var createError = __webpack_require__(7);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(42);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(43);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(15);
var buildURL = __webpack_require__(17);
var http = __webpack_require__(18);
var https = __webpack_require__(19);
var httpFollow = __webpack_require__(20).http;
var httpsFollow = __webpack_require__(20).https;
var url = __webpack_require__(21);
var zlib = __webpack_require__(55);
var pkg = __webpack_require__(56);
var createError = __webpack_require__(7);
var enhanceError = __webpack_require__(16);

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
          // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(48);
} else {
  module.exports = __webpack_require__(50);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(22);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var tty = __webpack_require__(51);
var util = __webpack_require__(13);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(22);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
  var supportsColor = __webpack_require__(52);
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  }
} catch (err) {}
// swallow - we only care if `supports-color` is available; it doesn't have to be.


/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\x1B[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var os = __webpack_require__(53);
var hasFlag = __webpack_require__(54);

var env = process.env;

var support = function support(level) {
	if (level === 0) {
		return false;
	}

	return {
		level: level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
};

var supportLevel = function () {
	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
		return 0;
	}

	if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
		return 1;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return 0;
	}

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors.
		var osRelease = os.release().split('.');
		if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
			return 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
			return sign in env;
		}) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return 0;
	}

	if ('TEAMCITY_VERSION' in env) {
		return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
		);
	}

	if ('TERM_PROGRAM' in env) {
		var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Hyper':
				return 3;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return 0;
	}

	return 0;
}();

if ('FORCE_COLOR' in env) {
	supportLevel = parseInt(env.FORCE_COLOR, 10) === 0 ? 0 : supportLevel || 1;
}

module.exports = process && support(supportLevel);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (flag, argv) {
	argv = argv || process.argv;

	var terminatorPos = argv.indexOf('--');
	var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	var pos = argv.indexOf(prefix + flag);

	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"name":"axios","version":"0.17.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.5.7","coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","phantomjs-prebuilt":"^2.1.7","sinon":"^1.17.4","webpack":"^1.13.1","webpack-dev-server":"^1.14.1","url-search-params":"^0.6.1","typescript":"^2.0.3"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.2.5","is-buffer":"^1.1.5"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(59);
var isCancel = __webpack_require__(23);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(60);
var combineURLs = __webpack_require__(61);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(24);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ })
/******/ ]);
});