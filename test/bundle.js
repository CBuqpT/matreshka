/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// This gets replaced by karma webpack with the updated files on rebuild
	var __karmaWebpackManifest__ = [];
	
	// require all modules ending in "_test" from the
	// current directory and all subdirectories
	var testsContext = __webpack_require__(1);
	
	function inManifest(path) {
		return __karmaWebpackManifest__.indexOf(path) >= 0;
	}
	
	var runnable = testsContext.keys().filter(inManifest);
	
	// Run all tests if we didn't find any changes
	if (!runnable.length) {
		runnable = testsContext.keys();
	}
	
	runnable.forEach(testsContext);
	
	var componentsContext = __webpack_require__(44);
	componentsContext.keys().forEach(componentsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./bquery/add_spec.js": 2,
		"./bquery/create_spec.js": 17,
		"./bquery/events_spec.js": 18,
		"./bquery/find_spec.js": 20,
		"./bquery/init_spec.js": 21,
		"./bquery/is_spec.js": 22,
		"./bquery/not_spec.js": 23,
		"./bquery/one_spec.js": 24,
		"./bquery/parsehtml_spec.js": 25,
		"./class_spec.js": 26,
		"./events/delegated_collection_spec.js": 28,
		"./events/delegated_spec.js": 29,
		"./events/events_change_spec.js": 40,
		"./events/events_core_spec.js": 41,
		"./events/events_dom_spec.js": 42,
		"./events/events_summary_spec.js": 43
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.fn.add', function () {
		it('adds once', function () {
			var el1 = document.createElement('div'),
			    el2 = document.createElement('div'),
			    el3 = document.createElement('div'),
			    el4 = document.createElement('div'),
			    el5 = document.createElement('div');
	
			expect([...$([el1, el2, el3]).add([el2, el3, el4, el5])]).toEqual([el1, el2, el3, el4, el5]);
		});
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(4);
	
	var extend = __webpack_require__(6);
	
	var parseHTML = __webpack_require__(7);
	
	var one = __webpack_require__(8);
	
	var create = __webpack_require__(9);
	
	var on = __webpack_require__(10);
	
	var off = __webpack_require__(12);
	
	var is = __webpack_require__(13);
	
	var add = __webpack_require__(14);
	
	var not = __webpack_require__(15);
	
	var find = __webpack_require__(16);
	
	// tiny jQuery replacement for Matreshka
	// bQuery is rewritten version of balalaika.js
	module.exports = bQuery;
	function bQuery(selector, context) {
		return new Init(selector, context);
	}
	
	var _result = bQuery;
	
	for (var _source3 = {
		fn: Init.prototype,
		extend: extend,
		parseHTML: parseHTML,
		one: one,
		create: create
	}, _keys3 = Object.keys(_source3), _l3 = _keys3.length, _i3 = 0, _key3; _i3 < _l3; _i3++) {
		_key3 = _keys3[_i3];
		_result[_key3] = _source3[_key3];
	}
	
	var _result2 = bQuery.fn;
	
	for (var _source4 = {
		on: on,
		off: off,
		is: is,
		add: add,
		not: not,
		find: find
	}, _keys4 = Object.keys(_source4), _l4 = _keys4.length, _i4 = 0, _key4; _i4 < _l4; _i4++) {
		_key4 = _keys4[_i4];
		_result2[_key4] = _source4[_key4];
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var html2nodeList = __webpack_require__(5);
	
	// function-constructor of bQuery library
	// accepts many kinds of arguments (selector, html, function)
	function BQueryInit(selector, context) {
		var result = void 0;
	
		if (selector) {
			if (selector.nodeType || typeof window === 'object' && selector === window) {
				result = [selector];
			} else if (typeof selector === 'string') {
				if (/</.test(selector)) {
					result = html2nodeList(selector);
				} else {
					if (context) {
						var newContext = new BQueryInit(context)[0];
	
						if (newContext) {
							result = newContext.querySelectorAll(selector);
						}
					} else {
						result = document.querySelectorAll(selector);
					}
				}
			} else if (selector instanceof Function) {
				// typeof nodeList returns "function" in old WebKit
				if (document.readyState === 'loading') {
					document.addEventListener('DOMContentLoaded', selector);
				} else {
					selector();
				}
			} else {
				result = selector;
			}
		}
	
		var length = result && result.length;
	
		if (length) {
			for (var i = 0; i < length; i++) {
				this.push(result[i]);
			}
		}
	}
	
	BQueryInit.prototype = [];
	
	module.exports = BQueryInit;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	// converts HTML string to NodeList instance
	module.exports = html2nodeList;
	function html2nodeList(html) {
		// wrapMap is taken from jQuery
		var wrapMap = {
			option: [1, '<select multiple="multiple">', '</select>'],
			legend: [1, '<fieldset>', '</fieldset>'],
			thead: [1, '<table>', '</table>'],
			tr: [2, '<table><tbody>', '</tbody></table>'],
			td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
			col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
			area: [1, '<map>', '</map>'],
			_: [0, '', '']
		};
	
		var node = document.createElement('div'),
		    i = void 0;
	
		html = html.replace(/^\s+|\s+$/g, '');
	
		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		var ex = /<([\w:]+)/.exec(html),
		    wrapper = ex && wrapMap[ex[1]] || wrapMap._;
	
		node.innerHTML = wrapper[1] + html + wrapper[2];
	
		i = wrapper[0];
	
		while (i--) {
			node = node.children[0];
		}
	
		return node.childNodes;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// Object.assign polyfyll is taken there:
	// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
	// and will be removed in future
	
	var assign = Object.assign || function assign(target) {
		/* istanbul ignore next */
		if (target === undefined || target === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}
	
		var output = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source !== undefined && source !== null) {
				for (var nextKey in source) {
					if (source.hasOwnProperty(nextKey)) {
						output[nextKey] = source[nextKey];
					}
				}
			}
		}
	
		return output;
	};
	
	module.exports = assign;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var html2nodeList = __webpack_require__(5);
	
	var Init = __webpack_require__(4);
	
	// parses given HTML and returns bQuery (BQueryInit) instance
	module.exports = parseHTML;
	function parseHTML(html) {
		return new Init(html2nodeList(html));
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(4);
	
	// returns the first element of matched set
	module.exports = one;
	function one(s, context) {
		return new Init(s, context)[0];
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// creates HTML element
	module.exports = create;
	function create(tagName, props) {
		if (typeof tagName === 'object') {
			props = tagName;
			tagName = props.tagName;
		}
	
		var el = document.createElement(tagName);
	
		if (props) {
			for (var _target3 = props, _keys4 = Object.keys(_target3), _i4 = 0, key, value, _l5 = _keys4.length; (key = _keys4[_i4], value = _target3[key]), _i4 < _l5; _i4++) {
				if (key === 'attributes' && typeof value === 'object') {
					for (var _target = value, _keys = Object.keys(_target), _i = 0, attrName, attrValue, _l = _keys.length; (attrName = _keys[_i], attrValue = _target[attrName]), _i < _l; _i++) {
						el.setAttribute(attrName, attrValue);
					}
				} else if (key === 'children' && value) {
					for (var _target2 = value, _index = 0, child, _l2 = _target2.length; child = _target2[_index], _index < _l2; _index++) {
						el.appendChild(create(child));
					}
				} else if (el[key] && typeof el[key] === 'object' && typeof value === 'object') {
					var _result = el[key];
	
					for (var _source2 = value, _keys3 = Object.keys(_source2), _l4 = _keys3.length, _i3 = 0, _key2; _i3 < _l4; _i3++) {
						_key2 = _keys3[_i3];
						_result[_key2] = _source2[_key2];
					}
				} else if (key !== 'tagName') {
					el[key] = value;
				}
			}
		}
	
		return el;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var data = __webpack_require__(11);
	
	var is = __webpack_require__(13);
	
	// the function is used when a selector is given
	function delegateHandler(evt, selector, handler) {
		var randomID = Math.random().toString().replace('0.', 'x'),
		    scopeSelector = '[' + randomID + '="' + randomID + '"] ',
		    splittedSelector = selector.split(',');
	
		var matching = '';
	
		for (var i = 0; i < splittedSelector.length; i++) {
			var sel = splittedSelector[i];
			matching += '' + (i === 0 ? '' : ',') + scopeSelector + sel + ',' + scopeSelector + sel + ' *';
		}
	
		this.setAttribute(randomID, randomID);
	
		if (is.call([evt.target], matching)) {
			handler.call(this, evt);
		}
	
		this.removeAttribute(randomID);
	}
	
	// adds event listener to a set of elemnts
	module.exports = on;
	function on(names, selector, handler) {
		var delegate = void 0;
	
		if (typeof selector === 'function') {
			handler = selector;
			selector = null;
		}
	
		if (selector) {
			delegate = function uniqueDelegateHandler(evt) {
				delegateHandler.call(this, evt, selector, handler);
			};
		}
	
		names = names.split(/\s/);
	
		for (var i = 0; i < names.length; i++) {
			var name = names[i].split(/\.(.+)/);
			var namespace = name[1];
			name = name[0];
	
			for (var j = 0; j < this.length; j++) {
				var node = this[j],
				    nodeID = node.b$ = node.b$ || ++data.nodeIndex,
				    events = data.allEvents[name + nodeID] = data.allEvents[name + nodeID] || [];
	
				var exist = false;
	
				for (var k = 0; k < events.length; k++) {
					var event = events[k];
	
					if (handler === event.handler && (!selector || selector === event.selector)) {
						exist = true;
						break;
					}
				}
	
				if (!exist) {
					events.push({
						delegate: delegate,
						handler: handler,
						namespace: namespace,
						selector: selector
					});
	
					node.addEventListener(name, delegate || handler, false);
				}
			}
		}
	
		return this;
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	// share data between as an object modules because we use
	// simplified es modules there and cannot import and share a number
	module.exports = {
		nodeIndex: 0,
		allEvents: {}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var data = __webpack_require__(11);
	
	// removes event handler from a set of elements
	module.exports = off;
	function off(names, selector, handler) {
		if (typeof selector === 'function') {
			handler = selector;
			selector = null;
		}
	
		names = names.split(/\s/);
	
		for (var i = 0; i < names.length; i++) {
			var name = names[i].split(/\.(.+)/);
			var namespace = name[1];
			name = name[0];
	
			for (var j = 0; j < this.length; j++) {
				var node = this[j],
				    events = data.allEvents[name + node.b$];
	
				if (events) {
					for (var k = 0; k < events.length; k++) {
						var event = events[k];
						if ((!handler || handler === event.handler || handler === event.delegate) && (!namespace || namespace === event.namespace) && (!selector || selector === event.selector)) {
							node.removeEventListener(name, event.delegate || event.handler);
							events.splice(k--, 1);
						}
					}
				} else {
					if (!namespace && !selector) {
						node.removeEventListener(name, handler);
					}
				}
			}
		}
	
		return this;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	// check the first element from given set against a selector
	module.exports = is;
	function is(s) {
		var node = this[0];
		return node ? (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, s) : false;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(4);
	
	var data = __webpack_require__(11);
	
	// adds unique nodes to bQuery collection
	module.exports = add;
	function add(selector) {
		var idMap = {};
	
		var result = void 0,
		    nodeID = void 0,
		    node = void 0,
		    i = void 0;
	
		selector = new Init(selector);
	
		if (this.length) {
			result = new Init(this);
			for (i = 0; i < result.length; i++) {
				node = result[i];
				nodeID = node.b$ = node.b$ || ++data.nodeIndex;
				idMap[nodeID] = 1;
			}
	
			for (i = 0; i < selector.length; i++) {
				node = selector[i];
				nodeID = node.b$ = node.b$ || ++data.nodeIndex;
				if (!idMap[nodeID]) {
					idMap[nodeID] = 1;
					result.push(node);
				}
			}
		} else {
			result = selector;
		}
	
		return result;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(4);
	
	// excludes elements from current set by given selector
	module.exports = not;
	function not(selector) {
		var result = new Init();
	
		for (var i = 0; i < this.length; i++) {
			if (!new Init(this[i]).is(selector)) {
				result.push(this[i]);
			}
		}
	
		return result;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(4);
	
	// get the descendants of each element in the current set of matched elements,
	// filtered by a selector
	module.exports = find;
	function find(selector) {
		var result = new Init();
	
		for (var _target = this, _index = 0, el, _l = _target.length; el = _target[_index], _index < _l; _index++) {
			result = result.add(el.querySelectorAll(selector));
		}
	
		return result;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.create', function () {
		it('creates element', function () {
			expect($.create('div').tagName).toEqual('DIV');
		});
	
		it('adds a property', function () {
			expect($.create('div', {
				className: 'foobar'
			}).className).toEqual('foobar');
		});
	
		it('creates childen', function () {
			expect($.create('div', {
				children: [{
					tagName: 'span'
				}]
			}).children[0].tagName).toEqual('SPAN');
		});
	
		it('adds attribute', function () {
			expect($.create('div', {
				attributes: {
					foo: 'bar'
				}
			}).getAttribute('foo')).toEqual('bar');
		});
	
		it('allows to pass object with tagName property', function () {
			expect($.create({
				tagName: 'div'
			}).tagName).toEqual('DIV');
		});
	
		xit('extends dataset object', function () {
			// TODO
		});
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _this = this;
	
	var $ = __webpack_require__(3);
	
	var simulateClick = __webpack_require__(19);
	
	describe('bQuery events', function () {
		var testSandbox = void 0,
		    child1 = void 0,
		    child2 = void 0,
		    grandchild1 = void 0,
		    handler = void 0;
	
		beforeEach(function () {
			testSandbox = document.createElement('div');
	
			testSandbox.innerHTML = '\n\t\t\t<div class="child1">\n\t\t\t\t<div class="grandchild1"></div>\n\t\t\t</div>\n\t\t\t<div class="child2"></div>\n\t\t';
	
			child1 = testSandbox.querySelector('.child1');
			child2 = testSandbox.querySelector('.child2');
			grandchild1 = testSandbox.querySelector('.grandchild1');
	
			_this.handler = function () {};
			spyOn(_this, 'handler');
			handler = _this.handler;
		});
	
		afterEach(function () {
			$([testSandbox, child1, child2, grandchild1]).off('click');
		});
	
		it('Adds event listener', function () {
			$(testSandbox).on('click', handler);
			simulateClick(testSandbox);
			expect(handler).toHaveBeenCalled();
		});
	
		it('Removes event listener (listener is specified)', function () {
			$(testSandbox).on('click', handler).off('click', handler);
			simulateClick(testSandbox);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes event listener (listener is not specified)', function () {
			$(testSandbox).on('click', handler).off('click');
			simulateClick(testSandbox);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Adds namespaced listener', function () {
			$(testSandbox).on('click.yo', handler);
			simulateClick(testSandbox);
			expect(handler).toHaveBeenCalled();
		});
	
		it('Removes namespaced listener (listener is specified)', function () {
			$(testSandbox).on('click.yo', handler).off('click.yo', handler);
			simulateClick(testSandbox);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes namespaced listener (listener is not specified)', function () {
			$(testSandbox).on('click.yo', handler).off('click.yo');
			simulateClick(testSandbox);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Adds bubbling event listener', function () {
			$(testSandbox).on('click', handler);
			simulateClick(grandchild1);
			expect(handler).toHaveBeenCalled();
		});
	
		it('Adds delegated event listener', function () {
			$(testSandbox).on('click', '.child1', handler);
			simulateClick(child1);
			expect(handler).toHaveBeenCalled();
		});
	
		it('Adds delegated event listener (click on grandchildren)', function () {
			$(testSandbox).on('click', '.child1', handler);
			simulateClick(grandchild1);
			expect(handler).toHaveBeenCalled();
		});
	
		it('Doesn\t trigger when clicked on wrong child', function () {
			$(testSandbox).on('click', '.child2', handler);
			simulateClick(grandchild1);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes delegated event listener (selector and handler are specified)', function () {
			$(testSandbox).on('click', '.child1', handler).off('click', '.child1', handler);
			simulateClick(child1);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes delegated event listener (selector is specified, handler is not specified)', function () {
			$(testSandbox).on('click', '.child1', handler).off('click', '.child1');
			simulateClick(child1);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes delegated event listener (selector is not specified, handler is specified)', function () {
			$(testSandbox).on('click', '.child1', handler).off('click', handler);
			simulateClick(child1);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Removes delegated event listener (selector and handler are not specified)', function () {
			$(testSandbox).on('click', '.child1', handler).off('click');
			simulateClick(child1);
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('Stops propagation', function () {
			$(testSandbox).on('click', handler);
			$(child1).on('click', function (evt) {
				return evt.stopPropagation();
			});
			simulateClick(child1);
			expect(handler).not.toHaveBeenCalled();
		});
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	// simulates click on a node
	module.exports = simulateClick;
	function simulateClick(node) {
		var evt = document.createEvent('MouseEvent');
		evt.initMouseEvent('click', true);
		node.dispatchEvent(evt);
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.fn.find', function () {
		var testSandbox = void 0,
		    grandChild = void 0;
	
		beforeEach(function () {
			testSandbox = document.createElement('div');
	
			testSandbox.innerHTML = '\n\t\t\t<div class="child">\n\t\t\t\t<div class="grandchild"></div>\n\t\t\t</div>\n\t\t';
	
			grandChild = testSandbox.querySelector('.grandchild');
		});
	
		it('finds', function () {
			expect([...$(testSandbox).find('.grandchild')]).toEqual([grandChild]);
		});
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	// засунуть все создания новых элементов в beforeEach
	// рефакторить
	// написать комментарии (в том числе и к уже реализованным функциям)
	// после всего нужно включить линтер и проверить коверадж
	
	describe('bQuery initialization', function () {
		var testSandbox = void 0;
	
		beforeEach(function () {
			testSandbox = document.createElement('div');
	
			testSandbox.innerHTML = '\n\t\t\t<div class="test">\n\t\t\t\t<div class="test-1"></div>\n\t\t\t\t<div class="test-2"></div>\n\t\t\t\t<div class="test-3"></div>\n\t\t\t</div>\n\t\t';
		});
	
		it('accepts window', function () {
			var result = $(window);
			expect(result.length).toEqual(1);
			expect(result[0]).toEqual(window);
		});
	
		it('accepts document', function () {
			var result = $(document);
			expect(result.length).toEqual(1);
			expect(result[0]).toEqual(document);
		});
	
		it('parses HTML', function () {
			var result = $('<div></div><span></span>');
	
			expect(result.length).toEqual(2);
			expect(result[0].tagName).toEqual('DIV');
			expect(result[1].tagName).toEqual('SPAN');
		});
	
		it('converts array-like', function () {
			var children = testSandbox.querySelectorAll('*'),
			    result = $(children);
	
			expect(children.length).toEqual(result.length);
	
			for (var i = 0; i < children.length; i++) {
				expect(children[i]).toEqual(result[i]);
			}
		});
	
		it('Converts one element', function () {
			var element = document.querySelector('*'),
			    result = $(element);
	
			expect(result.length).toEqual(1);
			expect(element).toEqual(result[0]);
		});
	
		it('Uses context', function () {
			expect($('.test-1', testSandbox).length).toEqual(1);
		});
	
		it('Uses context', function () {
			expect($('.test-1', '.wrong-context').length).toEqual(0);
		});
	
		it('Allows to use null', function () {
			expect($(null).length).toEqual(0);
		});
	
		it('Allows to use undefined', function () {
			expect($().length).toEqual(0);
		});
	
		it('Allows to create plugins', function () {
			$.fn.bQueryPlugin = function bQueryPlugin() {
				expect(this.length).toEqual(testSandbox.querySelectorAll('*').length);
			};
	
			spyOn($.fn, 'bQueryPlugin');
	
			$('*', testSandbox).bQueryPlugin();
	
			expect($.fn.bQueryPlugin).toHaveBeenCalled();
		});
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.fn.not', function () {
		it('checks className', function () {
			var el = document.createElement('div');
			el.className = 'el';
	
			expect($(el).is('.el')).toEqual(true);
	
			expect($(el).is('.el2')).toEqual(false);
		});
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.fn.not', function () {
		it('excludes by selector', function () {
			var el1 = document.createElement('div'),
			    el2 = document.createElement('div'),
			    el3 = document.createElement('div');
	
			el2.className = 'el2';
	
			expect([...$([el1, el2, el3]).not('.el2')]).toEqual([el1, el3]);
		});
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.one', function () {
		it('finds', function () {
			var testSandbox = document.createElement('div');
	
			testSandbox.innerHTML = '\n\t\t<div class="child">\n\t\t\t<div class="grandchild"></div>\n\t\t</div>\n\t\t<div class="child2">\n\t\t\t<div class="grandchild2"></div>\n\t\t</div>\n\t\t';
	
			var child = testSandbox.querySelector('.child');
	
			expect($.one('*', testSandbox)).toEqual(child);
		});
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(3);
	
	describe('bQuery.parseHTML', function () {
		it('parses HTML', function () {
			var result = $.parseHTML('<div></div><span></span>');
	
			expect(result.length).toEqual(2);
			expect(result[0].tagName).toEqual('DIV');
			expect(result[1].tagName).toEqual('SPAN');
		});
	
		it('parses contextual elements', function () {
			var result = $.parseHTML('<td></td><td></td>');
	
			expect(result.length).toEqual(2);
			expect(result[0].tagName).toEqual('TD');
			expect(result[1].tagName).toEqual('TD');
		});
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Class = __webpack_require__(27);
	
	describe('Class function', function () {
		it('allows to inherit', function () {
			var A = Class({ a: true }),
			    B = Class({ b: true, extends: A }),
			    C = Class({ c: true, extends: B }),
			    inst = new C();
	
			expect(inst instanceof A).toBeTruthy();
			expect(inst instanceof B).toBeTruthy();
			expect(inst instanceof C).toBeTruthy();
	
			expect(inst.a).toBeTruthy();
			expect(inst.b).toBeTruthy();
			expect(inst.c).toBeTruthy();
		});
	
		it('allows to pass static props', function () {
			var A = Class({}, { staticProp: true });
			expect(A.staticProp).toBeTruthy();
		});
	
		it('if new Class({}) is called return its instance', function () {
			var inst = new Class({ a: true });
			expect(inst.a).toBeTruthy();
			expect(inst instanceof Class).toBeFalsy();
		});
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var extend = __webpack_require__(6);
	
	module.exports = Class;
	function Class(prototype, staticProps) {
		var Constructor = prototype.constructor !== Object ? prototype.constructor : function EmptyConstructor() {},
	
		//extends is kept for backward compatibility
		Parent = prototype.extends || prototype.extend,
	
		//inherit proto from class parent or empty object
		proto = Object.create(Parent ? Parent.prototype : {});
	
		extend(proto, prototype);
	
		if (typeof staticProps === 'object') {
			extend(Constructor, staticProps);
		}
	
		// for backward compatibility
		proto.instanceOf = function instanceOf() {
			return this instanceof Constructor;
		};
	
		Constructor.prototype = proto;
	
		// if new Class({}) is called return its instance
		if (this instanceof Class) {
			return new Constructor();
		} else {
			return Constructor;
		}
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	/*eslint-disable */
	xdescribe('Delegated events: delegateListener, undelegateListener (Matreshka.Object and Matreshka.Array)', function () {
		it('works with "*" events (MK.Array)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic._delegateListener(obj, '*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.push({});
	
			magic.trigger(obj[0], 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Object)', function () {
			var obj = new MK.Object(),
			    bool = false;
	
			magic._delegateListener(obj, '*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.jset('x', {});
	
			magic.trigger(obj.x, 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('removes "*" events (MK.Array)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic._delegateListener(obj, '*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.push({});
	
			magic._undelegateListener(obj, '*', 'someevent');
	
			magic.trigger(obj[0], 'someevent');
	
			expect(bool).toBe(false);
		});
	
		it('removes "*" events (MK.Object)', function () {
			var obj = new MK.Object(),
			    bool = false;
	
			magic._delegateListener(obj, '*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.jset('x', {});
	
			magic._undelegateListener(obj, '*', 'someevent');
	
			magic.trigger(obj.x, 'someevent');
	
			expect(bool).toBe(false);
		});
	
		it('removes "*" events using callback (MK.Array)', function () {
			var obj = new MK.Array(),
			    bool = false,
			    callback = function (evt) {
				return bool = true;
			};
	
			magic._delegateListener(obj, '*', 'someevent', callback);
	
			obj.push({});
	
			magic._undelegateListener(obj, '*', 'someevent', callback);
	
			magic.trigger(obj[0], 'someevent');
	
			expect(bool).toBe(false);
		});
	
		it('removes "*" events using callback (MK.Object)', function () {
			var obj = new MK.Object(),
			    bool = false,
			    callback = function (evt) {
				return bool = true;
			};
	
			magic._delegateListener(obj, '*', 'someevent', callback);
	
			obj.jset('x', {});
	
			magic._undelegateListener(obj, '*', 'someevent', callback);
	
			magic.trigger(obj.x, 'someevent');
	
			expect(bool).toBe(false);
		});
	
		it('works with "*" events (MK.Array), go deeper (*.a)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic._delegateListener(obj, '*.a', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.push({
				a: {}
			});
	
			magic.trigger(obj[0].a, 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Object), go deeper (*.a)', function () {
			var obj = new MK.Object(),
			    bool = false;
	
			magic._delegateListener(obj, '*.a', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.jset('x', {
				a: {}
			});
	
			magic.trigger(obj.x.a, 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Array), go deeper (*.*)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic._delegateListener(obj, '*.*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.push(new MK.Array({}));
	
			magic.trigger(obj[0][0], 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Object), go deeper (*.*)', function () {
			var obj = new MK.Object(),
			    bool = false;
	
			magic._delegateListener(obj, '*.*', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.jset('x', new MK.Object({
				a: {}
			}));
	
			magic.trigger(obj.x.a, 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Array), go deeper (*.*.a)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic._delegateListener(obj, '*.*.a', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.push(new MK.Array({
				a: {}
			}));
	
			magic.trigger(obj[0][0].a, 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Object), go deeper (*.*.a)', function () {
			var obj = new MK.Object(),
			    bool = false;
	
			magic._delegateListener(obj, '*.*.a', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.jset('x', new MK.Object({
				y: new MK.Object({
					a: {}
				})
			}));
	
			magic.trigger(obj.x.y.a, 'someevent');
	
			expect(bool).toBe(true);
		});
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var delegateListener = __webpack_require__(30);
	
	var undelegateListener = __webpack_require__(37);
	
	var triggerOne = __webpack_require__(34);
	
	var makeObject = __webpack_require__(39);
	
	describe('Delegated events: delegateListener, undelegateListener (basic)', function test() {
		var _this = this;
	
		var ctx = void 0,
		    handler = void 0;
	
		beforeEach(function () {
			ctx = {};
			_this.handler = function () {};
			spyOn(_this, 'handler');
			handler = _this.handler;
		});
	
		it('fires (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			triggerOne(obj.a.b, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires when reassigned (a.b, reassign a)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			obj.a = makeObject('b');
			triggerOne(obj.a.b, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires when reassigned (a.b, reassign b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			obj.a.b = {};
			triggerOne(obj.a.b, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires when reassigned (a.b.c, reassign a)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a = makeObject('b.c');
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires when reassigned (a.b.c, reassign b)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a.b = makeObject('c');
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires when reassigned (a.b.c, reassign c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a.b.c = {};
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('remove event from old target when reassigned (a.b, reassign a)', function () {
			var obj = makeObject('a.b'),
			    a = obj.a;
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			obj.a = makeObject('b');
			triggerOne(a.b, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('remove event from old target when reassigned (a.b, reassign b)', function () {
			var obj = makeObject('a.b'),
			    b = obj.a.b;
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			obj.a.b = {};
			triggerOne(b, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('remove event from old target when reassigned (a.b.c, reassign a)', function () {
			var obj = makeObject('a.b.c'),
			    a = obj.a;
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a = makeObject('b.c');
			triggerOne(a.b.c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('remove event from old target when reassigned (a.b.c, reassign b)', function () {
			var obj = makeObject('a.b.c'),
			    b = obj.a.b;
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a.b = makeObject('c');
			triggerOne(b.c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('remove event from old target when reassigned (a.b.c, reassign c)', function () {
			var obj = makeObject('a.b.c'),
			    c = obj.a.c;
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			obj.a.b.c = {};
			triggerOne(c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			undelegateListener(obj, 'a.b', 'someevent');
			triggerOne(obj.a.b, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			undelegateListener(obj, 'a.b.c', 'someevent');
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('doesn\'t remove change event when undelegate (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', function () {});
			delegateListener(obj, 'a.b', 'change:c', handler);
			undelegateListener(obj, 'a.b.c', 'someevent');
			obj.a.b.c = 55;
			expect(handler).toHaveBeenCalled();
		});
	
		it('undelegate by callback (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			undelegateListener(obj, 'a.b', 'someevent', handler);
			triggerOne(obj.a.b, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate by callback (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			undelegateListener(obj, 'a.b.c', 'someevent', handler);
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate by callback and context (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler, ctx);
			undelegateListener(obj, 'a.b', 'someevent', handler, ctx);
			triggerOne(obj.a.b, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate by callback and context (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler, ctx);
			undelegateListener(obj, 'a.b.c', 'someevent', handler, ctx);
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('undelegate by callback but keeps when callbacks are not same (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler);
			undelegateListener(obj, 'a.b', 'someevent', function () {});
			triggerOne(obj.a.b, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('undelegate by callback but keeps when callbacks are not same (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler);
			undelegateListener(obj, 'a.b.c', 'someevent', function () {});
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('undelegate by callback but keeps when contexts are not same (a.b)', function () {
			var obj = makeObject('a.b');
	
			delegateListener(obj, 'a.b', 'someevent', handler, {});
			undelegateListener(obj, 'a.b', 'someevent', handler, {});
			triggerOne(obj.a.b, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('undelegate by callback but keeps when contexts are not same (a.b.c)', function () {
			var obj = makeObject('a.b.c');
	
			delegateListener(obj, 'a.b.c', 'someevent', handler, {});
			undelegateListener(obj, 'a.b.c', 'someevent', handler, {});
			triggerOne(obj.a.b.c, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('uses correct context for delegated events', function () {
			var obj = makeObject('a.b.c');
			var bool = false;
	
			delegateListener(obj, 'a.b.c', 'someevent', function handle() {
				bool = this === ctx;
			}, ctx);
	
			triggerOne(obj.a.b.c, 'someevent');
			expect(bool).toBe(true);
		});
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addListener = __webpack_require__(31);
	
	var undelegateListener = __webpack_require__(37);
	
	var triggerOne = __webpack_require__(34);
	
	function changeHandler(_ref) {
		var previousValue = _ref.previousValue;
		var value = _ref.value;
	
		var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? triggerOne.latestEvent.info.delegatedData : arguments[1];
	
		var path = _ref2.path;
		var name = _ref2.name;
		var callback = _ref2.callback;
		var context = _ref2.context;
	
		if (value && typeof value === 'object') {
			delegateListener(value, path, name, callback, context);
		}
	
		if (previousValue && typeof previousValue === 'object') {
			undelegateListener(previousValue, path, name, callback, context);
		}
	} /*eslint no-use-before-define: ["error", { "functions": false }]*/
	
	
	module.exports = delegateListener;
	function delegateListener(object, path, name, callback, context) {
		// if typeof path is string and path is not empty string then split it
		path = typeof path === 'string' && path !== '' ? path.split('.') : path;
	
		if (!path || !path.length) {
			// if no path then add simple listener
			addListener(object, name, callback, context);
		} else {
			// else do all magic
			var key = path[0];
			var pathStr = void 0;
	
			if (path.length > 1) {
				var _source = path,
				    _l = _source.length,
				    _i = 1 || 0,
				    _end = null || _l,
				    _j = 0,
				    _result = Array(_end - _i);
	
				while (_i < _end) {
					_result[_j++] = _source[_i++];
				}
	
				path = _result;
				pathStr = path.join('.');
			} else {
				path = [];
				pathStr = path[0] || '';
			}
	
			var delegatedData = {
				path: path,
				name: name,
				callback: callback,
				context: context
			};
	
			addListener(object, '_change:delegated:' + key, changeHandler, null, {
				delegatedData: delegatedData,
				pathStr: pathStr
			});
	
			changeHandler({
				value: object[key]
			}, delegatedData);
		}
	}
	
	/*
	define([
		'matreshka_dir/core/var/core',
		'matreshka_dir/core/initmk',
		'matreshka_dir/core/var/map',
		'matreshka_dir/core/var/specialevtreg'
	], function(core, initMK, map, specialEvtReg) {
		"use strict";
		var _delegateListener = core._delegateListener = function(object,
		 path, name, callback, context, evtData) {
			if (!object || typeof object != 'object') return object;

			initMK(object);

			var objectData = map.get(object),
				executed = /([^\.]+)\.(.*)/.exec(path),
				f,
				firstKey = executed ? executed[1] : path,
				changeKey,
				obj;

			path = executed ? executed[2] : '';

			evtData = evtData || {};

			if (firstKey) {
				if (firstKey == '*') {
					if (object.isMKArray) {
						f = function(evt) {
							(evt && evt.added ? evt.added : object).forEach(function(item) {
								item && _delegateListener(item, path, name,
								callback, context, evtData);
							});
						};

						f._callback = callback;
						core._addListener(object, 'add', f, context, evtData);
						f();
					} else if (object.isMKObject) {
						f = function(evt) {
							var target = object[evt.key];

							if (target && evt && (evt.key in objectData.keys)) {
								_delegateListener(target, path, name, callback, context, evtData);
							}
						};

						object.each(function(item) {
							_delegateListener(item, path, name, callback, context, evtData);
						});

						f._callback = callback;

						core._addListener(object, 'change', f, context, evtData);
					}
				} else {
					f = function(evt) {
						if (evt && evt._silent) return;

						var target = object[firstKey],
							changeKey,
							triggerChange = true,
							i,
							changeEvents;

						evtData.path = path;

						evtData.previousValue = evt && evt.previousValue ||
						evtData.previousValue && evtData.previousValue[firstKey];

						if (evt && evt.previousValue && map.has(evt.previousValue)) {
							core._undelegateListener(evt.previousValue, path, name, callback, context, evtData);
						}

						if (typeof target == 'object' && target) {
							_delegateListener(target, path, name, callback, context, evtData);
						}

						if (specialEvtReg.test(name)) {
							changeKey = name.replace(specialEvtReg, '');

							if (!path && evtData.previousValue && evtData.previousValue[changeKey]
							!== target[changeKey]) {
								changeEvents = map.get(evtData.previousValue).events[name];
								if (changeEvents) {
									for (i = 0; i < changeEvents.length; i++) {
										if (changeEvents[i].path === path) {
											triggerChange = false;
										}
									}
								}

								if (triggerChange) {
									core.set(target, changeKey, target[changeKey], {
										force: true,
										previousValue: evtData.previousValue[changeKey],
										previousObject: evtData.previousValue,
										_silent: true
									});
								}
							}
						}
					};

					f._callback = callback;

					core._addListener(object, 'change:' + firstKey, f, context, evtData);

					f();
				}
			} else {
				core._addListener(object, name, callback, context, evtData);
			}
		};
	});
	*/

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(32);
	
	var triggerOne = __webpack_require__(34);
	
	var defineProp = __webpack_require__(35);
	
	// property modifier event regexp
	var propModEventReg = /^_change:deps:|^_change:bindings:|^_change:delegated:|^change:|^beforechange:/;
	
	// adds simple event listener
	// used as core of event engine
	/*eslint no-shadow: ["error", { "allow": ["evt"] }]*/
	
	module.exports = addListener;
	function addListener(object, name, callback, context) {
		var info = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
	
		var _initMK = initMK(object);
	
		var allEvents = _initMK.events;
		var ctx = context || object;
		var events = allEvents[name];
		var evt = { callback: callback, context: context, ctx: ctx, name: name, info: info };
	
		// if there are events with the same name
		if (events) {
			// if there are events with the same data, return false
			for (var i = 0; i < events.length; i++) {
				var _evt = events[i];
				if ((_evt.callback === callback || _evt.callback === callback._callback) && _evt.context === context) {
					return false;
				}
			}
	
			// if the event isn't found add it to the event list
			events.push(evt);
		} else {
			// if there are no events with the same name, create array with only ebent
			allEvents[name] = [evt];
		}
	
		if (propModEventReg.test(name)) {
			// define needed accessors for KEY
			defineProp(object, name.replace(propModEventReg, ''));
		}
	
		if (name[0] !== '_') {
			triggerOne(object, 'addevent:' + name, evt);
			triggerOne(object, 'addevent', evt);
		}
	
		// if event is added return true
		return true;
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	// this is common function which associates an object with its Matreshka definition
	function commonInit(object) {
		var def = defs.get(object);
		if (!def) {
			def = {
				// a property name of "events" object is an event name
				// and a value is an array of event handlers
				events: {
					/*example: {
	    	callback: function,
	    	ctx: object,
	    	context: object2,
	    	name: "example"
	    }
	    */
				},
				// "props" contains special information about properties (getters, setters etc)
				props: {
					/*example: {
	    	//?nodes: core.$(),
	    	value: object[key],
	    	getter: null,
	    	setter: null,
	    	mediator: null,
	    	//?destroyers: Map,
	    	bindings: [{
	    		node,
	    		binder,
	    		nodeHandler,
	    		objectHandler
	    	}]
	    }*/
				},
				id: 'mk' + Math.random()
			};
	
			defs.set(object, def);
		}
	
		return def;
	}
	
	module.exports = initMK;
	function initMK(object) {
		var type = typeof object;
		if (!object || type !== 'object') {
			throw new TypeError(type + ' cannot be used in this method');
		}
	
		// if object has _initMK method, run it
		// else run commonInit
		// every _initMK implementation have to run commonInit or parent's _initMK
		return object._initMK ? object._initMK() : commonInit(object);
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	function PseudoMap() {}
	
	// PseudoMap simulates WeakMap behavior with O(1) search complexity
	// it's needed for @IE9 and @IE10
	var _result = PseudoMap.prototype;
	
	for (var _source2 = {
		get: function (obj) {
			return obj.matreshkaData;
		},
		set: function (obj, data) {
			Object.defineProperty(obj, 'matreshkaData', {
				value: data,
				enumerable: false,
				writable: false,
				configurable: false
			});
		},
		has: function (obj) {
			return ('matreshkaData' in obj);
		}
	}, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
		_key2 = _keys2[_i2];
		_result[_key2] = _source2[_key2];
	}
	
	module.exports = typeof WeakMap === 'undefined' ? new PseudoMap() : new WeakMap();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	module.exports = triggerOne;
	function triggerOne(object, name) {
		var def = defs.get(object);
	
		if (!def) return;
	
		var events = def.events[name];
	
		if (events) {
			var _source = arguments,
			    _l = _source.length,
			    _i = 2 || 0,
			    _end = null || _l,
			    _j = 0,
			    _result = Array(_end - _i);
	
			while (_i < _end) {
				_result[_j++] = _source[_i++];
			}
	
			var args = _result;
			var l = events.length;
			var a1 = args[0];
			var a2 = args[1];
			var a3 = args[2];
	
	
			var i = 0,
			    ev = void 0;
	
			switch (args.length) {
				case 0:
					while (i < l) {
						(triggerOne.latestEvent = ev = events[i++]).callback.call(ev.ctx);
					}
					return;
				case 1:
					while (i < l) {
						(triggerOne.latestEvent = ev = events[i++]).callback.call(ev.ctx, a1);
					}
					return;
				case 2:
					while (i < l) {
						(triggerOne.latestEvent = ev = events[i++]).callback.call(ev.ctx, a1, a2);
					}
					return;
				case 3:
					while (i < l) {
						(triggerOne.latestEvent = ev = events[i++]).callback.call(ev.ctx, a1, a2, a3);
					}
					return;
				default:
					while (i < l) {
						(triggerOne.latestEvent = ev = events[i++]).callback.apply(ev.ctx, args);
					}
					return;
			}
		}
	}
	
	triggerOne.latestEvent = {
		info: {},
		name: null
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	var set = __webpack_require__(36);
	
	module.exports = defineProp;
	function defineProp(object, key) {
		var def = defs.get(object);
	
		// if no object definition do nothing
		if (!def) return;
	
		if (!def.props[key]) {
			(function () {
				var propDef = def.props[key] = {
					value: object[key],
					getter: null,
					setter: null,
					mediator: null,
					bindings: null
				};
	
				Object.defineProperty(object, key, {
					configurable: false,
					enumerable: true,
					get: function () {
						return propDef.getter ? propDef.getter.call(object) : propDef.value;
					},
					set: function (v) {
						return propDef.setter ? propDef.setter.call(object, v) : set(object, key, v, {
							fromSetter: true
						});
					}
				});
			})();
		}
	}
	
	/*define([
		'matreshka_dir/core/var/core',
		'matreshka_dir/core/var/map'
	], function(core, map) {
		"use strict";
		core._defineSpecial = function(object, key, noAccessors) {
			if (!object || typeof object != 'object' || !map.has(object)) return object;

			var objectData = map.get(object),
				specialProps = objectData.special[key];

			if (!specialProps) {
				specialProps = objectData.special[key] = {
					$nodes: core.$(),
					value: object[key],
					getter: null,
					setter: null,
					mediator: null
				};

				if (!noAccessors && key != 'sandbox') {
					Object.defineProperty(object, key, {
						configurable: true,
						enumerable: true,
						get: function() {
							return specialProps.getter ? specialProps.getter.call(object) : specialProps.value;
						},
						set: function(v) {
							specialProps.setter ? specialProps.setter.call(object, v) : core.set(object, key, v, {
								fromSetter: true
							});
						}
					});
				}
			}

			return specialProps;
		};
	});
	*/

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	var triggerOne = __webpack_require__(34);
	
	module.exports = set;
	function set(object, key, value) {
		var evt = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
		var def = defs.get(object);
		if (!def) return;
	
		var props = def.props;
		var events = def.events;
		var propDef = props[key];
	
		if (!propDef) {
			object[key] = value;
			return;
		}
	
		var previousValue = propDef.value;
	
		// TODO NOT REQUIRED
		var _result = evt;
	
		for (var _source2 = {
			value: value,
			key: key,
			previousValue: previousValue
		}, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
			_key2 = _keys2[_i2];
			_result[_key2] = _source2[_key2];
		}
	
		evt = _result;
	
		propDef.value = value;
	
		if (previousValue !== value) {
			if (events['change:' + key]) {
				triggerOne(object, 'change:' + key, evt);
			}
	
			if (events['_change:delegated:' + key]) {
				triggerOne(object, '_change:delegated:' + key, evt);
			}
	
			if (events.change) {
				triggerOne(object, 'change', evt);
			}
		}
	}
	
	/*define([
		'matreshka_dir/core/var/core',
		'matreshka_dir/core/var/map'
	], function(core, map) {
		"use strict";
		var set;

		core.get = function(object, key) {
			return object && object[key];
		};

		// set method is the most often used method
		// we need to optimize it as good as possible
		set = core.set = function(object, key, v, evt) {
			if (!object || typeof object != 'object') return object;

			var type = typeof key,
				_isNaN = Number.isNaN || function(value) {
					return typeof value == 'number' && isNaN(value);
				},
				objectData,
				special,
				events,
				prevVal,
				newV,
				i,
				_evt,
				isChanged,
				triggerChange;

			if (type == 'undefined') return object;

			if (type == 'object') {
				for (i in key) {
					if (key.hasOwnProperty(i)) {
						set(object, i, key[i], v);
					}
				}

				return object;
			}

			objectData = map.get(object);

			if (!objectData || !objectData.special[key]) {
				object[key] = v;
				return object;
			}

			special = objectData.special[key];
			events = objectData.events;

			prevVal = special.value;

			if (special.mediator && v !== prevVal && (!evt || !evt.skipMediator && !evt.fromMediator)) {
				newV = special.mediator(v, prevVal, key, object);
			} else {
				newV = v;
			}

			isChanged = newV !== prevVal;

			_evt = {
				originalEvent: evt,
				value: newV,
				previousValue: prevVal,
				key: key,
				node: special.$nodes[0] || null,
				$nodes: special.$nodes,
				self: object,
				isChanged: isChanged
			};

			if (evt && typeof evt == 'object') {
				for (i in evt) {
					_evt[i] = _evt[i] || evt[i];
				}
			}

			triggerChange = (isChanged || _evt.force) && !_evt.silent;

			if (triggerChange) {
				events['beforechange:' + key] && core._fastTrigger(object, 'beforechange:' + key, _evt);

				events.beforechange && core._fastTrigger(object, 'beforechange', _evt);
			}

			special.value = newV;

			if (isChanged || _evt.force || _evt.forceHTML || newV !== v && !_isNaN(newV)) {
				if (!_evt.silentHTML) {
					events['_runbindings:' + key] && core._fastTrigger(object, '_runbindings:' + key, _evt);
				}
			}

			if (triggerChange) {
				events['change:' + key] && core._fastTrigger(object, 'change:' + key, _evt);

				events.change && core._fastTrigger(object, 'change', _evt);
			}

			if ((isChanged || _evt.force) && !_evt.skipLinks) {
				events['_rundependencies:' + key] &&
					core._fastTrigger(object, '_rundependencies:' + key, _evt);
			}

			return object;
		};
	});
	*/

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	var removeListener = __webpack_require__(38);
	
	// REFACTOR, DONT TRIGGER ADDEVENT, REMOVEEVENT
	module.exports = undelegateListener;
	function undelegateListener(object, path, name, callback, context) {
		var info = arguments.length <= 5 || arguments[5] === undefined ? {} : arguments[5];
	
		var def = defs.get(object);
	
		// if no definition do nothing
		if (!def) return;
	
		var allEvents = def.events;
	
	
		path = typeof path === 'string' && path !== '' ? path.split('.') : path;
	
		if (!path || !path.length) {
			// if no path then remove listener
			removeListener(object, name, callback, context, info);
		} else {
			(function () {
				// else do all magic
				var key = path[0],
				    events = allEvents['_change:delegated:' + key];
				var pathStr = void 0;
	
				if (path.length > 1) {
					var _source = path,
					    _l = _source.length,
					    _i = 1 || 0,
					    _end = null || _l,
					    _j = 0,
					    _result = Array(_end - _i);
	
					while (_i < _end) {
						_result[_j++] = _source[_i++];
					}
	
					path = _result;
					pathStr = path.join('.');
				} else {
					path = [];
					pathStr = path[0] || '';
				}
	
				if (events) {
					(function () {
						var retain = [];
	
						for (var _target = events, _index = 0, event, _l2 = _target.length; event = _target[_index], _index < _l2; _index++) {
							if (event.info.pathStr !== pathStr) {
								retain.push(event);
							}
						}
	
						if (retain.length) {
							allEvents['_change:delegated:' + key] = retain;
						} else {
							delete allEvents['_change:delegated:' + key];
						}
					})();
				}
	
				if (typeof object[key] === 'object') {
					undelegateListener(object[key], path, name, callback, context, info);
				}
			})();
		}
	}
	
	/*
	define([
		'matreshka_dir/core/var/core',
		'matreshka_dir/core/var/map'
	], function(core, map) {
		"use strict";
		var _undelegateListener = core._undelegateListener =
		 function(object, path, name, callback, context, evtData) {
			if (!object || typeof object != 'object') return object;

			var executed = /([^\.]+)\.(.*)/.exec(path),
				firstKey = executed ? executed[1] : path,
				p = path,
				objectData = map.get(object),
				events,
				i;

			path = executed ? executed[2] : '';

			if (firstKey) {
				if (firstKey == '*') {
					if (object.isMKArray) {
						if (callback) {
							_undelegateListener(object, path, 'add', callback, context, evtData);
						} else {
							events = objectData.events.add || [];
							for (i = 0; i < events.length; i++) {
								if (events[i].path == p) {

									_undelegateListener(object, path, 'add', events[i].callback);
								}
							}
						}

						object.forEach(function(item) {
							item && _undelegateListener(item, path, name, callback, context);
						});
					} else if (object.isMKObject) {
						if (callback) {
							_undelegateListener(object, path, 'change', callback, context);
						} else {
							events = objectData.events.change || [];
							for (i = 0; i < events.length; i++) {
								if (events[i].path == p) {
									_undelegateListener(object, path, 'change', events[i].callback);
								}
							}
						}

						object.each(function(item) {
							item && _undelegateListener(item, path, name, callback, context);
						});
					}
				} else {
					if (callback) {
						core._removeListener(object, 'change:' + firstKey, callback, context, evtData);
					} else {
						events = objectData.events['change:' + firstKey] || [];
						for (i = 0; i < events.length; i++) {
							if (events[i].path == p) {
								core._removeListener(object, 'change:' + firstKey, events[i].callback);
							}
						}
					}
					if (typeof object[firstKey] == 'object') {
						_undelegateListener(object[firstKey], path, name, callback, context, evtData);
					}
				}
			} else {
				core._removeListener(object, name, callback, context, evtData);
			}
		};
	});

	*/

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(33);
	
	var triggerOne = __webpack_require__(34);
	
	// removes simple event listener to an object
	/*eslint no-shadow: ["error", { "allow": ["name", "events"] }]*/
	module.exports = removeListener;
	function removeListener(object, name, callback, context, info) {
		var def = defs.get(object);
	
		// if no definition do nothing
		if (!def) return;
	
		var allEvents = def.events;
		var events = allEvents[name];
		var retain = [];
	
		// if all events need to be removed
		if (typeof name === 'undefined') {
			if (!info || !info.noTrigger) {
				for (var _target2 = allEvents, _keys = Object.keys(_target2), _i = 0, name, events, _l2 = _keys.length; (name = _keys[_i], events = _target2[name]), _i < _l2; _i++) {
					for (var _target = events, _index = 0, evt, _l = _target.length; evt = _target[_index], _index < _l; _index++) {
						var removeEvtData = {
							name: name,
							callback: evt.callback,
							context: evt.context
						};
	
						triggerOne(object, 'removeevent:' + name, removeEvtData);
						triggerOne(object, 'removeevent', removeEvtData);
					}
				}
			}
	
			// restore default value of "events"
			def.events = {};
		} else if (events) {
			for (var _target3 = events, _index2 = 0, evt, _l3 = _target3.length; evt = _target3[_index2], _index2 < _l3; _index2++) {
				if (callback && callback !== evt.callback && callback._callback !== evt.callback || context && context !== evt.context) {
					// keep event
					retain.push(evt);
				} else {
					var _removeEvtData = {
						name: name,
						callback: evt.callback,
						context: evt.context
					};
	
					if (!info || !info.noTrigger) {
						triggerOne(object, 'removeevent:' + name, _removeEvtData);
						triggerOne(object, 'removeevent', _removeEvtData);
					}
				}
			} // if events with given name is found
	
	
			if (retain.length) {
				allEvents[name] = retain;
			} else {
				delete def.events[name];
			}
		}
	
		return;
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	// creates nested object based on path and lastValue
	// example: makeObject('a.b.c', 42) -> {a: {b: {c; 42}}}
	module.exports = makeObject;
	function makeObject() {
		var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		var lastValue = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		path = path ? path.split('.') : [];
		var result = {};
		var obj = result,
		    key = void 0;
	
		while (path.length > 1) {
			key = path.shift();
			obj = obj[key] = {};
		}
	
		obj[path.shift()] = lastValue;
	
		return result;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addListener = __webpack_require__(31);
	
	var delegateListener = __webpack_require__(30);
	
	var undelegateListener = __webpack_require__(37);
	
	var removeListener = __webpack_require__(38);
	
	var makeObject = __webpack_require__(39);
	
	describe('Change event (simple and delegated)', function test() {
		var _this = this;
	
		var handler = void 0;
	
		beforeEach(function () {
			_this.handler = function () {};
			spyOn(_this, 'handler');
			handler = _this.handler;
		});
	
		it('fires simple', function () {
			var obj = { x: 1 };
	
			addListener(obj, 'change:x', handler);
			obj.x = 2;
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires (delegated, a.x)', function () {
			var obj = makeObject('a.x', 1);
	
			delegateListener(obj, 'a', 'change:x', handler);
			obj.a.x = 2;
			expect(handler).toHaveBeenCalled();
		});
	
		it('fires (delegated, a.b.x)', function () {
			var obj = makeObject('a.b.x', 1);
	
			delegateListener(obj, 'a.b', 'change:x', handler);
			obj.a.b.x = 2;
			expect(handler).toHaveBeenCalled();
		});
	
		it('removes simple', function () {
			var obj = { x: 1 };
	
			addListener(obj, 'change:x', handler);
			removeListener(obj, 'change:x', handler);
			obj.x = 2;
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes (delegated, a.x)', function () {
			var obj = makeObject('a.x', 1);
	
			delegateListener(obj, 'a', 'change:x', handler);
			undelegateListener(obj, 'a', 'change:x', handler);
			obj.a.x = 2;
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes (delegated, a.b.x)', function () {
			var obj = makeObject('a.b.x', 1);
	
			delegateListener(obj, 'a.b', 'change:x', handler);
			undelegateListener(obj, 'a.b', 'change:x', handler);
			obj.a.b.x = 2;
			expect(handler).not.toHaveBeenCalled();
		});
	
		/*eslint-disable */
		xit('fires (delegated, a.b.x)', function () {
			var obj = makeObject('a.b.x', 1);
	
			delegateListener(obj, 'a.b', 'change:x', handler);
			obj.a.b.x = 2;
			expect(handler).toHaveBeenCalled();
		});
	
		xit('fires when delegated target is reassigned (a.b.c.x, reassign a)', function () {
			var obj = makeObject('a.b.c.x', 1);
	
			delegateListener(obj, 'a.b.c', 'change:x', handler);
			obj.a = makeObject('b.c.x', 2);
			expect(handler).toHaveBeenCalled();
		});
	
		xit('fires when delegated target is reassigned (a.b.c.x, reassign b)', function () {
			var obj = {
				a: {
					b: {
						c: {
							x: 1
						}
					}
				}
			},
			    bool = false;
	
			magic._delegateListener(obj, 'a.b.c', 'change:x', function (evt) {
				return bool = true;
			});
			obj.a.b = {
				c: {
					x: 2
				}
			};
	
			expect(bool).toBe(true);
		});
	
		xit('fires when delegated target is reassigned (a.b.c.x, reassign c)', function () {
			var obj = {
				a: {
					b: {
						c: {
							x: 1
						}
					}
				}
			},
			    bool = false;
	
			magic._delegateListener(obj, 'a.b.c', 'change:x', function (evt) {
				return bool = true;
			});
			obj.a.b.c = {
				x: 2
			};
	
			expect(bool).toBe(true);
		});
	
		xit('avoids conflicts', function () {
			var obj = {
				a: {
					b: {
						c: {
							x: 1
						}
					}
				}
			},
			    i = 0;
	
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e11;
			});
			magic._delegateListener(obj, 'a.b', 'change:c', function (evt) {
				return i += 1e10;
			});
			magic._delegateListener(obj, 'a.b', 'change:c', function (evt) {
				return i += 1e9;
			});
			magic._delegateListener(obj, 'a.b', 'change:c', function (evt) {
				return i += 1e8;
			});
			magic._delegateListener(obj, 'a.b.c', 'change:x', function (evt) {
				return i += 1e7;
			});
			magic._delegateListener(obj, 'a.b.c', 'change:x', function (evt) {
				return i += 1e6;
			});
			magic._delegateListener(obj, 'a.b.c', 'change:x', function (evt) {
				return i += 1e5;
			});
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e4;
			});
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e3;
			});
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e2;
			});
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e1;
			});
			magic._delegateListener(obj, 'a', 'change:b', function (evt) {
				return i += 1e0;
			});
			obj.a = {
				b: {
					c: {
						x: 2
					}
				}
			};
			expect(i).toEqual(111111111111);
		});
	
		xit('accepts null target (a.b.c, reassign b)', function () {
			var obj = {
				a: {
					b: {
						c: {
							x: 1
						}
					}
				}
			},
			    bool = false;
	
			magic._delegateListener(obj, 'a.b.c', 'someevent', function (evt) {
				return bool = true;
			});
	
			obj.a.b = null;
	
			expect(bool).toBe(false);
		});
		/*eslint-enable */
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addListener = __webpack_require__(31);
	
	var removeListener = __webpack_require__(38);
	
	var triggerOne = __webpack_require__(34);
	
	describe('Events core: addListener, removeListener, triggerOne', function test() {
		var _this = this;
	
		var obj = void 0,
		    ctx = void 0,
		    handler = void 0;
	
		beforeEach(function () {
			obj = {};
			ctx = {};
			_this.handler = function () {};
			spyOn(_this, 'handler');
			handler = _this.handler;
		});
	
		it('fires', function () {
			addListener(obj, 'someevent', handler);
			triggerOne(obj, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('avoids conflicts', function () {
			var i = 0;
			addListener(obj, 'someevent', function () {
				return i += 1e0;
			});
			addListener(obj, 'someevent', function () {
				return i += 1e1;
			});
			addListener(obj, 'someevent', function () {
				return i += 1e2;
			});
			triggerOne(obj, 'someevent');
	
			expect(i).toEqual(111);
		});
	
		it('removes (no args)', function () {
			addListener(obj, 'someevent', handler);
			removeListener(obj);
			triggerOne(obj, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes by name', function () {
			addListener(obj, 'someevent', handler);
			removeListener(obj, 'someevent');
			triggerOne(obj, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes by callback', function () {
			addListener(obj, 'someevent', handler);
			removeListener(obj, 'someevent', handler);
			triggerOne(obj, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes by callback but keeps when callbacks are not same', function () {
			addListener(obj, 'someevent', handler);
			removeListener(obj, 'someevent', function () {});
			triggerOne(obj, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		it('removes by callback and context', function () {
			addListener(obj, 'someevent', handler, ctx);
			removeListener(obj, 'someevent', handler, ctx);
			triggerOne(obj, 'someevent');
			expect(handler).not.toHaveBeenCalled();
		});
	
		it('removes by callback but keeps when contexts are not same', function () {
			addListener(obj, 'someevent', handler, ctx);
			removeListener(obj, 'someevent', handler, {});
			triggerOne(obj, 'someevent');
			expect(handler).toHaveBeenCalled();
		});
	
		xit('removes by howToRemove (not documented core feature)', function () {
			/*eslint-disable */
			var obj = {},
			    bool = false,
			    f = function (evt) {
				return bool = true;
			},
			    onData = {
				howToRemove: function (onData, offData) {
					return offData.x === 42;
				}
			};
	
			magic._addListener(obj, 'someevent1', f, null, onData);
			magic._removeListener(obj, 'someevent1', null, null, {
				x: 42
			});
	
			magic.trigger(obj, 'someevent1');
	
			expect(bool).toBe(false);
	
			magic._addListener(obj, 'someevent2', f, null, onData);
			magic._removeListener(obj, 'someevent2', null, null, {
				x: 43
			});
	
			magic.trigger(obj, 'someevent2');
	
			expect(bool).toBe(true);
			/*eslint-enable */
		});
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	/*eslint-disable */
	
	xdescribe("Events core: _addDOMListener, _removeDOMListener", function () {
		var q = function (s, c) {
			var result = $(s, c)[0] || null;
			if (result) {
				result.click = result.click || function () {
					var ev = document.createEvent("MouseEvent");
					ev.initMouseEvent("click", true /* bubble */, true /* cancelable */
					, window, null, 0, 0, 0, 0, /* coordinates */
					false, false, false, false, /* modifier keys */
					0 /*left*/, null);
					result.dispatchEvent(ev);
				};
			}
			return result;
		};
	
		document.body.appendChild($.create({
			tagName: 'DIV',
			id: 'd-test',
			innerHTML: "\n\t\t\t<div id=\"d-test-1\">\n\t\t\t\t<div class=\"d-test-2\">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
		}));
	
		it('fires (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', null, function (evt) {
				return bool = true;
			});
	
			q('#d-test').click();
	
			expect(bool).toBe(true);
		});
	
		it('removes (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic._addDOMListener(obj, 'x', 'click', null, function (evt) {
				return bool = true;
			});
			magic._removeDOMListener(obj, 'x', 'click');
			magic.bindNode(obj, 'x', '#d-test');
	
			q('#d-test').click();
	
			expect(bool).toBe(false);
		});
	
		it('fires (use selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (evt) {
				return bool = true;
			});
	
			q('.d-test-2').click();
	
			expect(bool).toBe(true);
		});
	
		it('adds (use selector) and removes (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (evt) {
				return bool = true;
			});
			magic._removeDOMListener(obj, 'x', 'click');
	
			q('.d-test-2').click();
	
			expect(bool).toBe(false);
		});
	
		it('adds (use selector) then binds then removes (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (evt) {
				return bool = true;
			});
			magic._removeDOMListener(obj, 'x', 'click');
	
			q('.d-test-2').click();
	
			expect(bool).toBe(false);
		});
	
		it('triggers DOM event', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', null, function (d1, d2) {
				return bool = d1 === 1 && d2 === 2;
			});
			magic.trigger(obj, 'click::x', 1, 2);
	
			expect(bool).toBe(true);
		});
	
		it('triggers DOM event with specified selector', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (d1, d2) {
				return bool = d1 === 1 && d2 === 2;
			});
			magic.trigger(obj, 'click::x(.d-test-2)', 1, 2);
	
			expect(bool).toBe(true);
		});
	
		it('triggers DOM event with specified selector (bubbling test)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', null, function (d1, d2) {
				return bool = d1 === 1 && d2 === 2;
			});
			magic.trigger(obj, 'click::x(.d-test-2)', 1, 2);
	
			expect(bool).toBe(true);
		});
	
		it('removes delegated', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (evt) {
				return bool = true;
			});
			magic._removeDOMListener(obj, 'x', 'click', '.d-test-2');
	
			q('.d-test-2').click();
	
			expect(bool).toBe(false);
		});
	
		it('removes delegated and doesn\'t remove events from other nodes', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', '.d-test-2', function (evt) {
				return bool = true;
			});
			magic._removeDOMListener(obj, 'x', 'click', '.blah');
	
			q('.d-test-2').click();
	
			expect(bool).toBe(true);
		});
	
		it('triggers event via "trigger" method', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic._addDOMListener(obj, 'x', 'click', null, function (evt) {
				return bool = true;
			});
	
			magic.trigger(obj, 'click::x');
	
			expect(bool).toBe(true);
		});
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	/*eslint-disable */
	xdescribe('Events summary (on, off)', function () {
		var q = function (s, c) {
			var result = $(s, c)[0] || null;
			if (result) {
				result.click = result.click || function () {
					var ev = document.createEvent("MouseEvent");
					ev.initMouseEvent("click", true /* bubble */, true /* cancelable */
					, window, null, 0, 0, 0, 0, /* coordinates */
					false, false, false, false, /* modifier keys */
					0 /*left*/, null);
					result.dispatchEvent(ev);
				};
			}
			return result;
		};
	
		var node = document.body.appendChild($.create({
			tagName: 'DIV',
			id: 's-test',
			innerHTML: "\n\t\t\t<div id=\"s-test-1\">\n\t\t\t\t<div class=\"s-test-2\">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
		}));
	
		node.click = node.click || function () {
			this.dispatchEvent(new MouseEvent('click'));
		};
	
		it('fires', function () {
			var obj = {},
			    bool = false;
			magic.on(obj, 'someevent', function (evt) {
				return bool = true;
			});
			magic.trigger(obj, 'someevent');
			expect(bool).toBe(true);
		});
	
		it('fires on Matreshka instance', function () {
			var mk = new MK(),
			    bool = false;
			mk.on('someevent', function (evt) {
				return bool = true;
			});
			mk.trigger('someevent');
			expect(bool).toBe(true);
		});
	
		it('removes', function () {
			var obj = {},
			    bool = false,
			    f = function (evt) {
				return bool = true;
			};
	
			magic.on(obj, 'someevent', f);
			magic.off(obj, 'someevent');
			magic.trigger(obj, 'someevent');
	
			expect(bool).toBe(false);
		});
	
		it('removes on Matreshka instance', function () {
			var mk = new MK(),
			    bool = false,
			    f = function (evt) {
				return bool = true;
			};
	
			mk.on('someevent', f);
			mk.off('someevent');
			mk.trigger('someevent');
	
			expect(bool).toBe(false);
		});
	
		it('fires delegated', function () {
			var obj = {
				a: {
					b: {
						c: {}
					}
				}
			},
			    bool = false;
	
			magic.on(obj, 'a.b.c@someevent', function (evt) {
				return bool = true;
			});
			magic.trigger(obj.a.b.c, 'someevent');
			expect(bool).toBe(true);
		});
	
		it('removes delegated', function () {
			var obj = {
				a: {
					b: {
						c: {}
					}
				}
			},
			    bool = false;
	
			magic.on(obj, 'a.b.c@someevent', function (evt) {
				return bool = true;
			});
			magic.off(obj, 'a.b.c@someevent');
	
			magic.trigger(obj.a.b.c, 'someevent');
			expect(bool).toBe(false);
		});
	
		it('fires (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic.on(obj, 'click::x', function (evt) {
				return bool = true;
			});
	
			q('#d-test').click();
	
			expect(bool).toBe(true);
		});
	
		it('removes (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic.on(obj, 'click::x', function (evt) {
				return bool = true;
			});
			magic.off(obj, 'click::x');
	
			q('#d-test').click();
	
			expect(bool).toBe(false);
		});
	
		it('fires (use selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic.on(obj, 'click::x(.d-test-2)', function (evt) {
				return bool = true;
			});
	
			q('.d-test-2').click();
	
			expect(bool).toBe(true);
		});
	
		it('works with "*" events (MK.Array)', function () {
			var obj = new MK.Array(),
			    bool = false;
	
			magic.on(obj, '@someevent', function (evt) {
				return bool = true;
			});
	
			obj.push({});
	
			magic.trigger(obj[0], 'someevent');
	
			expect(bool).toBe(true);
		});
	
		it('fires (no selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic.on(obj, 'click::x', function (evt) {
				return bool = true;
			});
	
			q('#d-test').click();
	
			expect(bool).toBe(true);
		});
	
		it('fires (use selector)', function () {
			var obj = {},
			    bool = false;
	
			magic.bindNode(obj, 'x', '#d-test');
			magic.on(obj, 'click::x(.d-test-2)', function (evt) {
				return bool = true;
			});
	
			q('.d-test-2').click();
	
			expect(bool).toBe(true);
		});
	
		it('triggers once', function () {
			var obj = {},
			    i = 0,
			    f = function (evt) {
				return i++;
			};
	
			magic.once(obj, 'someevent', f);
			magic.trigger(obj, 'someevent');
			magic.trigger(obj, 'someevent');
			magic.trigger(obj, 'someevent');
	
			expect(i).toBe(1);
		});
	
		it('allows to pass name-handler object to "once"', function () {
			var obj = {},
			    i = 0,
			    j = 0,
			    f1 = function (evt) {
				return i++;
			},
			    f2 = function (evt) {
				return j++;
			};
	
			magic.once(obj, {
				foo: f1,
				bar: f2
			});
	
			magic.trigger(obj, 'foo');
			magic.trigger(obj, 'foo');
			magic.trigger(obj, 'foo');
	
			magic.trigger(obj, 'bar');
			magic.trigger(obj, 'bar');
			magic.trigger(obj, 'bar');
	
			expect(i).toBe(1);
			expect(j).toBe(1);
		});
	
		it('triggers once on Matreshka instance', function () {
			var mk = new MK(),
			    i = 0,
			    f = function (evt) {
				return i++;
			};
	
			mk.once('someevent', f);
			mk.trigger('someevent');
			mk.trigger('someevent');
			mk.trigger('someevent');
	
			expect(i).toBe(1);
		});
	
		it('onDebounce works', function (done) {
			var obj = {},
			    i = 0,
			    f = function (evt) {
				return i++;
			};
	
			setTimeout(function () {
				expect(i).toBe(1);
				done();
			}, 200);
	
			magic.onDebounce(obj, 'someevent', f);
			magic.trigger(obj, 'someevent');
			magic.trigger(obj, 'someevent');
			magic.trigger(obj, 'someevent');
		});
	
		it('allows to pass name-handler object to "onDebounce"', function (done) {
			var obj = {},
			    i = 0,
			    j = 0,
			    f1 = function (evt) {
				return i++;
			},
			    f2 = function (evt) {
				return j++;
			};
	
			setTimeout(function () {
				expect(i).toBe(1);
				expect(j).toBe(1);
				done();
			}, 200);
	
			magic.onDebounce(obj, {
				foo: f1,
				bar: f2
			});
	
			magic.trigger(obj, 'foo');
			magic.trigger(obj, 'foo');
			magic.trigger(obj, 'foo');
	
			magic.trigger(obj, 'bar');
			magic.trigger(obj, 'bar');
			magic.trigger(obj, 'bar');
		});
	
		it('onDebounce works on Matreshka instance', function (done) {
			var mk = new MK(),
			    i = 0,
			    f = function (evt) {
				return i++;
			};
	
			setTimeout(function () {
				expect(i).toBe(1);
				done();
			}, 800);
	
			mk.onDebounce('someevent', f);
			mk.trigger('someevent');
			mk.trigger('someevent');
			mk.trigger('someevent');
		});
	
		it('allows to pass name-handler object to "on" and "off"', function () {
			var obj = {},
			    bool = false,
			    i = 0,
			    handlers = {
				foo: function () {
					return i++;
				},
				bar: function () {
					return i++;
				}
			};
	
			MK.on(obj, handlers);
	
			MK.trigger(obj, 'foo');
			MK.trigger(obj, 'bar');
	
			expect(i).toBe(2);
	
			MK.off(obj, handlers);
	
			expect(i).toBe(2);
		});
	
		it('allows to flip context and triggerOnInit (on)', function () {
			var obj = {},
			    thisArg = {},
			    bool = false,
			    i = 0;
	
			MK.on(obj, 'foo', function () {
				expect(this).toEqual(thisArg);
				i++;
			}, true, thisArg);
	
			MK.on(obj, 'bar', function () {
				expect(this).toEqual(thisArg);
				i++;
			}, thisArg, true);
	
			expect(i).toBe(2);
		});
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_bindings/lib.js": 45,
		"./_core/defineprop.js": 35,
		"./_core/defs.js": 33,
		"./_core/init.js": 32,
		"./_dom/default-dollar.js": 46,
		"./_dom/index.js": 47,
		"./_events/addlistener.js": 31,
		"./_events/delegatelistener.js": 30,
		"./_events/removelistener.js": 38,
		"./_events/triggerone.js": 34,
		"./_events/undelegatelistener.js": 37,
		"./array.js": 48,
		"./binders.js": 49,
		"./bindnode.js": 50,
		"./bquery/_data.js": 11,
		"./bquery/_html2nodelist.js": 5,
		"./bquery/_init.js": 4,
		"./bquery/add.js": 14,
		"./bquery/create.js": 9,
		"./bquery/find.js": 16,
		"./bquery/index.js": 3,
		"./bquery/is.js": 13,
		"./bquery/not.js": 15,
		"./bquery/off.js": 12,
		"./bquery/on.js": 10,
		"./bquery/one.js": 8,
		"./bquery/parsehtml.js": 7,
		"./class.js": 27,
		"./extend.js": 6,
		"./get.js": 51,
		"./index.js": 52,
		"./magic.js": 55,
		"./matreshka/index.js": 53,
		"./object.js": 54,
		"./on.js": 56,
		"./set.js": 36
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 44;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bQuery = __webpack_require__(3);
	
	var neededMethods = 'on off is add not find'.split(/\s/); /*global $*/
	
	
	var globalDollar = typeof $ === 'function' ? $ : null;
	var useGlobalDollar = true;
	
	if (globalDollar) {
		var fn = globalDollar.fn || globalDollar.prototype;
		for (var i = 0; i < neededMethods.length; i++) {
			if (!fn[neededMethods[i]]) {
				useGlobalDollar = false;
				break;
			}
		}
	
		if (!globalDollar.parseHTML) {
			globalDollar.parseHTML = bQuery.parseHTML;
		}
	} else {
		useGlobalDollar = false;
	}
	
	module.exports = useGlobalDollar ? globalDollar : bQuery;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaultDollar = __webpack_require__(46);
	
	var dom = {
		$: defaultDollar
	};
	
	module.exports = dom;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = 1;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = 1;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	// Debounced!
	module.exports = bindNode;
	function bindNode() {}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = get;
	function get(object, key) {
		return object[key];
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Matreshka = __webpack_require__(53);
	
	var MatreshkaArray = __webpack_require__(48);
	
	var MatreshkaObject = __webpack_require__(54);
	
	var Class = __webpack_require__(27);
	
	var binders = __webpack_require__(49);
	
	Matreshka.Array = MatreshkaArray;
	Matreshka.Object = MatreshkaObject;
	Matreshka.Class = Class;
	Matreshka.binders = binders;
	
	module.exports = Matreshka;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var extend = __webpack_require__(6);
	
	var Class = __webpack_require__(27);
	
	module.exports = Class({
		// instance properies and methods
	
	}, {
		// static properties and methods
		extend: extend
	});

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = 1;

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = 1;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	// /^(([^@]+)@)?((.+?)(::([^\(\)]+)?(\((.*)\))?)?)?$/
	
	module.exports = on;
	function on() {}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2I4MDA0MzUxMTgyOTY4N2UxN2UiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMgLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zcGVjL2JxdWVyeS9hZGRfc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnF1ZXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvX2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JxdWVyeS9faHRtbDJub2RlbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvcGFyc2VodG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JxdWVyeS9fZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnF1ZXJ5L29mZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnF1ZXJ5L2lzLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvbm90LmpzIiwid2VicGFjazovLy8uL3NyYy9icXVlcnkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvYnF1ZXJ5L2NyZWF0ZV9zcGVjLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9icXVlcnkvZXZlbnRzX3NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9saWIvc2ltdWxhdGVjbGljay5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvYnF1ZXJ5L2ZpbmRfc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvYnF1ZXJ5L2luaXRfc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvYnF1ZXJ5L2lzX3NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zcGVjL2JxdWVyeS9ub3Rfc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvYnF1ZXJ5L29uZV9zcGVjLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9icXVlcnkvcGFyc2VodG1sX3NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zcGVjL2NsYXNzX3NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9ldmVudHMvZGVsZWdhdGVkX2NvbGxlY3Rpb25fc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvZXZlbnRzL2RlbGVnYXRlZF9zcGVjLmpzIiwid2VicGFjazovLy8uL3NyYy9fZXZlbnRzL2RlbGVnYXRlbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19ldmVudHMvYWRkbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19jb3JlL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19jb3JlL2RlZnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19ldmVudHMvdHJpZ2dlcm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2NvcmUvZGVmaW5lcHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9fZXZlbnRzL3VuZGVsZWdhdGVsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2V2ZW50cy9yZW1vdmVsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2xpYi9tYWtlb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9ldmVudHMvZXZlbnRzX2NoYW5nZV9zcGVjLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9ldmVudHMvZXZlbnRzX2NvcmVfc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvZXZlbnRzL2V2ZW50c19kb21fc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NwZWMvZXZlbnRzL2V2ZW50c19zdW1tYXJ5X3NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjIC4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9fYmluZGluZ3MvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9fZG9tL2RlZmF1bHQtZG9sbGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9fZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmluZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmluZG5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdHJlc2hrYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWdpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQ0EsS0FBTSwyQkFBMkIsRUFBM0I7Ozs7QUFJTixLQUFNLGVBQWUsc0JBQWY7O0FBRU4sVUFBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3pCLFNBQU8seUJBQXlCLE9BQXpCLENBQWlDLElBQWpDLEtBQTBDLENBQTFDLENBRGtCO0VBQTFCOztBQUlBLEtBQUksV0FBVyxhQUFhLElBQWIsR0FBb0IsTUFBcEIsQ0FBMkIsVUFBM0IsQ0FBWDs7O0FBR0osS0FBSSxDQUFDLFNBQVMsTUFBVCxFQUFpQjtBQUNyQixhQUFXLGFBQWEsSUFBYixF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Y0FBbEI7QUFDQSxXQUFVLE1BQVYsR0FBbUIsZUFBbkI7QUFDQSxXQUFVLEtBQVYsR0FBa0IsS0FBbEI7QUFDQSxXQUFVLE9BQVYsR0FBb0IsT0FBcEI7O2tCQUVlLFU7Ozs7Ozs7O2tDQ1hJOztpQ0FDRDs7a0JBRUgsTUFBTTs7O0VBQU4sRUFHWjs7QUFFRixnQkFGRTtFQUhZLEU7Ozs7Ozs7O2tCQ0hBLEU7Ozs7Ozs7O2tCQ0FBLEU7Ozs7Ozs7Ozs7a0JDR1M7QUFBVCxVQUFTLEVBQVQsR0FBYyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2I4MDA0MzUxMTgyOTY4N2UxN2VcbiAqKi8iLCIvLyBUaGlzIGdldHMgcmVwbGFjZWQgYnkga2FybWEgd2VicGFjayB3aXRoIHRoZSB1cGRhdGVkIGZpbGVzIG9uIHJlYnVpbGRcbmNvbnN0IF9fa2FybWFXZWJwYWNrTWFuaWZlc3RfXyA9IFtdO1xuXG4vLyByZXF1aXJlIGFsbCBtb2R1bGVzIGVuZGluZyBpbiBcIl90ZXN0XCIgZnJvbSB0aGVcbi8vIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBhbGwgc3ViZGlyZWN0b3JpZXNcbmNvbnN0IHRlc3RzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9zcGVjLycsIHRydWUsIC8uKlxcLmpzJC8pO1xuXG5mdW5jdGlvbiBpbk1hbmlmZXN0KHBhdGgpIHtcblx0cmV0dXJuIF9fa2FybWFXZWJwYWNrTWFuaWZlc3RfXy5pbmRleE9mKHBhdGgpID49IDA7XG59XG5cbmxldCBydW5uYWJsZSA9IHRlc3RzQ29udGV4dC5rZXlzKCkuZmlsdGVyKGluTWFuaWZlc3QpO1xuXG4vLyBSdW4gYWxsIHRlc3RzIGlmIHdlIGRpZG4ndCBmaW5kIGFueSBjaGFuZ2VzXG5pZiAoIXJ1bm5hYmxlLmxlbmd0aCkge1xuXHRydW5uYWJsZSA9IHRlc3RzQ29udGV4dC5rZXlzKCk7XG59XG5cbnJ1bm5hYmxlLmZvckVhY2godGVzdHNDb250ZXh0KTtcblxuXG5jb25zdCBjb21wb25lbnRzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vc3JjLycsIHRydWUsIC8uKlxcLmpzJC8pO1xuY29tcG9uZW50c0NvbnRleHQua2V5cygpLmZvckVhY2goY29tcG9uZW50c0NvbnRleHQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L2luZGV4LmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2JxdWVyeS9hZGRfc3BlYy5qc1wiOiAyLFxuXHRcIi4vYnF1ZXJ5L2NyZWF0ZV9zcGVjLmpzXCI6IDE3LFxuXHRcIi4vYnF1ZXJ5L2V2ZW50c19zcGVjLmpzXCI6IDE4LFxuXHRcIi4vYnF1ZXJ5L2ZpbmRfc3BlYy5qc1wiOiAyMCxcblx0XCIuL2JxdWVyeS9pbml0X3NwZWMuanNcIjogMjEsXG5cdFwiLi9icXVlcnkvaXNfc3BlYy5qc1wiOiAyMixcblx0XCIuL2JxdWVyeS9ub3Rfc3BlYy5qc1wiOiAyMyxcblx0XCIuL2JxdWVyeS9vbmVfc3BlYy5qc1wiOiAyNCxcblx0XCIuL2JxdWVyeS9wYXJzZWh0bWxfc3BlYy5qc1wiOiAyNSxcblx0XCIuL2NsYXNzX3NwZWMuanNcIjogMjYsXG5cdFwiLi9ldmVudHMvZGVsZWdhdGVkX2NvbGxlY3Rpb25fc3BlYy5qc1wiOiAyOCxcblx0XCIuL2V2ZW50cy9kZWxlZ2F0ZWRfc3BlYy5qc1wiOiAyOSxcblx0XCIuL2V2ZW50cy9ldmVudHNfY2hhbmdlX3NwZWMuanNcIjogNDAsXG5cdFwiLi9ldmVudHMvZXZlbnRzX2NvcmVfc3BlYy5qc1wiOiA0MSxcblx0XCIuL2V2ZW50cy9ldmVudHNfZG9tX3NwZWMuanNcIjogNDIsXG5cdFwiLi9ldmVudHMvZXZlbnRzX3N1bW1hcnlfc3BlYy5qc1wiOiA0M1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Rlc3Qvc3BlYyAuKlxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuXG5kZXNjcmliZSgnYlF1ZXJ5LmZuLmFkZCcsICgpID0+IHtcblx0aXQoJ2FkZHMgb25jZScsICgpID0+IHtcblx0XHRjb25zdCBlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdGVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0ZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0XHRlbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdGVsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0ZXhwZWN0KFtcblx0XHRcdC4uLiQoW2VsMSwgZWwyLCBlbDNdKS5hZGQoW2VsMiwgZWwzLCBlbDQsIGVsNV0pXG5cdFx0XSkudG9FcXVhbChbZWwxLCBlbDIsIGVsMywgZWw0LCBlbDVdKTtcblx0fSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zcGVjL2JxdWVyeS9hZGRfc3BlYy5qc1xuICoqLyIsImltcG9ydCBJbml0IGZyb20gJy4vX2luaXQnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuLi9leHRlbmQnO1xuaW1wb3J0IHBhcnNlSFRNTCBmcm9tICcuL3BhcnNlaHRtbCc7XG5pbXBvcnQgb25lIGZyb20gJy4vb25lJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IG9uIGZyb20gJy4vb24nO1xuaW1wb3J0IG9mZiBmcm9tICcuL29mZic7XG5pbXBvcnQgaXMgZnJvbSAnLi9pcyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vYWRkJztcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLy8gdGlueSBqUXVlcnkgcmVwbGFjZW1lbnQgZm9yIE1hdHJlc2hrYVxuLy8gYlF1ZXJ5IGlzIHJld3JpdHRlbiB2ZXJzaW9uIG9mIGJhbGFsYWlrYS5qc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYlF1ZXJ5KHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cdHJldHVybiBuZXcgSW5pdChzZWxlY3RvciwgY29udGV4dCk7XG59XG5cbm5vZm4uYXNzaWduKGJRdWVyeSwge1xuXHRmbjogSW5pdC5wcm90b3R5cGUsXG5cdGV4dGVuZCxcblx0cGFyc2VIVE1MLFxuXHRvbmUsXG5cdGNyZWF0ZVxufSk7XG5cbm5vZm4uYXNzaWduKGJRdWVyeS5mbiwge1xuXHRvbixcblx0b2ZmLFxuXHRpcyxcblx0YWRkLFxuXHRub3QsXG5cdGZpbmRcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGh0bWwybm9kZUxpc3QgZnJvbSAnLi9faHRtbDJub2RlbGlzdCc7XG5cbi8vIGZ1bmN0aW9uLWNvbnN0cnVjdG9yIG9mIGJRdWVyeSBsaWJyYXJ5XG4vLyBhY2NlcHRzIG1hbnkga2luZHMgb2YgYXJndW1lbnRzIChzZWxlY3RvciwgaHRtbCwgZnVuY3Rpb24pXG5mdW5jdGlvbiBCUXVlcnlJbml0KHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cdGxldCByZXN1bHQ7XG5cblx0aWYgKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHNlbGVjdG9yID09PSB3aW5kb3cpIHtcblx0XHRcdHJlc3VsdCA9IFtzZWxlY3Rvcl07XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoLzwvLnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGh0bWwybm9kZUxpc3Qoc2VsZWN0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRleHQpIHtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0gKG5ldyBCUXVlcnlJbml0KGNvbnRleHQpKVswXTtcblxuXHRcdFx0XHRcdGlmIChuZXdDb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikgeyAvLyB0eXBlb2Ygbm9kZUxpc3QgcmV0dXJucyBcImZ1bmN0aW9uXCIgaW4gb2xkIFdlYktpdFxuXHRcdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2VsZWN0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZWN0b3IoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gc2VsZWN0b3I7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgbGVuZ3RoID0gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChyZXN1bHRbaV0pO1xuXHRcdH1cblx0fVxufVxuXG5CUXVlcnlJbml0LnByb3RvdHlwZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBCUXVlcnlJbml0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L19pbml0LmpzXG4gKiovIiwiLy8gY29udmVydHMgSFRNTCBzdHJpbmcgdG8gTm9kZUxpc3QgaW5zdGFuY2VcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh0bWwybm9kZUxpc3QoaHRtbCkge1xuXHQvLyB3cmFwTWFwIGlzIHRha2VuIGZyb20galF1ZXJ5XG5cdGNvbnN0IHdyYXBNYXAgPSB7XG5cdFx0b3B0aW9uOiBbMSwgJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsICc8L3NlbGVjdD4nXSxcblx0XHRsZWdlbmQ6IFsxLCAnPGZpZWxkc2V0PicsICc8L2ZpZWxkc2V0PiddLFxuXHRcdHRoZWFkOiBbMSwgJzx0YWJsZT4nLCAnPC90YWJsZT4nXSxcblx0XHR0cjogWzIsICc8dGFibGU+PHRib2R5PicsICc8L3Rib2R5PjwvdGFibGU+J10sXG5cdFx0dGQ6IFszLCAnPHRhYmxlPjx0Ym9keT48dHI+JywgJzwvdHI+PC90Ym9keT48L3RhYmxlPiddLFxuXHRcdGNvbDogWzIsICc8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPicsICc8L2NvbGdyb3VwPjwvdGFibGU+J10sXG5cdFx0YXJlYTogWzEsICc8bWFwPicsICc8L21hcD4nXSxcblx0XHRfOiBbMCwgJycsICcnXVxuXHR9O1xuXG5cdGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0aTtcblxuXHRodG1sID0gaHRtbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG5cblx0d3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xuXHR3cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xuXHR3cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuXHRjb25zdCBleCA9IC88KFtcXHc6XSspLy5leGVjKGh0bWwpLFxuXHRcdHdyYXBwZXIgPSBleCAmJiB3cmFwTWFwW2V4WzFdXSB8fCB3cmFwTWFwLl87XG5cblx0bm9kZS5pbm5lckhUTUwgPSB3cmFwcGVyWzFdICsgaHRtbCArIHdyYXBwZXJbMl07XG5cblx0aSA9IHdyYXBwZXJbMF07XG5cblx0d2hpbGUgKGktLSkge1xuXHRcdG5vZGUgPSBub2RlLmNoaWxkcmVuWzBdO1xuXHR9XG5cblx0cmV0dXJuIG5vZGUuY2hpbGROb2Rlcztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JxdWVyeS9faHRtbDJub2RlbGlzdC5qc1xuICoqLyIsIi8vIE9iamVjdC5hc3NpZ24gcG9seWZ5bGwgaXMgdGFrZW4gdGhlcmU6XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduI1BvbHlmaWxsXG4vLyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZVxuXG5jb25zdCBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0aWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuXHR9XG5cblx0Y29uc3Qgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG5cdGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0Y29uc3Qgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcblx0XHRpZiAoc291cmNlICE9PSB1bmRlZmluZWQgJiYgc291cmNlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5leHRLZXkgaW4gc291cmNlKSB7XG5cdFx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcblx0XHRcdFx0XHRvdXRwdXRbbmV4dEtleV0gPSBzb3VyY2VbbmV4dEtleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3V0cHV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXNzaWduO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXh0ZW5kLmpzXG4gKiovIiwiaW1wb3J0IGh0bWwybm9kZUxpc3QgZnJvbSAnLi9faHRtbDJub2RlbGlzdCc7XG5pbXBvcnQgSW5pdCBmcm9tICcuL19pbml0JztcblxuLy8gcGFyc2VzIGdpdmVuIEhUTUwgYW5kIHJldHVybnMgYlF1ZXJ5IChCUXVlcnlJbml0KSBpbnN0YW5jZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWwpIHtcblx0cmV0dXJuIG5ldyBJbml0KGh0bWwybm9kZUxpc3QoaHRtbCkpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L3BhcnNlaHRtbC5qc1xuICoqLyIsImltcG9ydCBJbml0IGZyb20gJy4vX2luaXQnO1xuXG4vLyByZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIG1hdGNoZWQgc2V0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbmUocywgY29udGV4dCkge1xuXHRyZXR1cm4gbmV3IEluaXQocywgY29udGV4dClbMF07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9icXVlcnkvb25lLmpzXG4gKiovIiwiLy8gY3JlYXRlcyBIVE1MIGVsZW1lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZSh0YWdOYW1lLCBwcm9wcykge1xuXHRpZiAodHlwZW9mIHRhZ05hbWUgPT09ICdvYmplY3QnKSB7XG5cdFx0cHJvcHMgPSB0YWdOYW1lO1xuXHRcdHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lO1xuXHR9XG5cblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG5cdGlmIChwcm9wcykge1xuXHRcdG5vZm4uZm9yT3duKHByb3BzLCAodmFsdWUsIGtleSkgPT4ge1xuXHRcdFx0aWYgKGtleSA9PT0gJ2F0dHJpYnV0ZXMnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0bm9mbi5mb3JPd24odmFsdWUsIChhdHRyVmFsdWUsIGF0dHJOYW1lKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnY2hpbGRyZW4nICYmIHZhbHVlKSB7XG5cdFx0XHRcdG5vZm4uZm9yRWFjaCh2YWx1ZSwgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY3JlYXRlKGNoaWxkKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChlbFtrZXldICYmIHR5cGVvZiBlbFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdG5vZm4uYXNzaWduKGVsW2tleV0sIHZhbHVlKTtcblx0XHRcdH0gZWxzZSBpZiAoa2V5ICE9PSAndGFnTmFtZScpIHtcblx0XHRcdFx0ZWxba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L2NyZWF0ZS5qc1xuICoqLyIsImltcG9ydCBkYXRhIGZyb20gJy4vX2RhdGEnO1xuaW1wb3J0IGlzIGZyb20gJy4vaXMnO1xuXG4vLyB0aGUgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIGEgc2VsZWN0b3IgaXMgZ2l2ZW5cbmZ1bmN0aW9uIGRlbGVnYXRlSGFuZGxlcihldnQsIHNlbGVjdG9yLCBoYW5kbGVyKSB7XG5cdGNvbnN0IHJhbmRvbUlEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnJlcGxhY2UoJzAuJywgJ3gnKSxcblx0XHRzY29wZVNlbGVjdG9yID0gYFske3JhbmRvbUlEfT1cIiR7cmFuZG9tSUR9XCJdIGAsXG5cdFx0c3BsaXR0ZWRTZWxlY3RvciA9IHNlbGVjdG9yLnNwbGl0KCcsJyk7XG5cblx0bGV0IG1hdGNoaW5nID0gJyc7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdHRlZFNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgc2VsID0gc3BsaXR0ZWRTZWxlY3RvcltpXTtcblx0XHRtYXRjaGluZyArPSBgJHtpID09PSAwID8gJycgOiAnLCd9JHtzY29wZVNlbGVjdG9yfSR7c2VsfSwke3Njb3BlU2VsZWN0b3J9JHtzZWx9ICpgO1xuXHR9XG5cblxuXHR0aGlzLnNldEF0dHJpYnV0ZShyYW5kb21JRCwgcmFuZG9tSUQpO1xuXG5cdGlmIChpcy5jYWxsKFtldnQudGFyZ2V0XSwgbWF0Y2hpbmcpKSB7XG5cdFx0aGFuZGxlci5jYWxsKHRoaXMsIGV2dCk7XG5cdH1cblxuXHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShyYW5kb21JRCk7XG59XG5cbi8vIGFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gYSBzZXQgb2YgZWxlbW50c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb24obmFtZXMsIHNlbGVjdG9yLCBoYW5kbGVyKSB7XG5cdGxldCBkZWxlZ2F0ZTtcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aGFuZGxlciA9IHNlbGVjdG9yO1xuXHRcdHNlbGVjdG9yID0gbnVsbDtcblx0fVxuXG5cdGlmIChzZWxlY3Rvcikge1xuXHRcdGRlbGVnYXRlID0gZnVuY3Rpb24gdW5pcXVlRGVsZWdhdGVIYW5kbGVyKGV2dCkge1xuXHRcdFx0ZGVsZWdhdGVIYW5kbGVyLmNhbGwodGhpcywgZXZ0LCBzZWxlY3RvciwgaGFuZGxlcik7XG5cdFx0fTtcblx0fVxuXG5cdG5hbWVzID0gbmFtZXMuc3BsaXQoL1xccy8pO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbmFtZSA9IG5hbWVzW2ldLnNwbGl0KC9cXC4oLispLyk7XG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gbmFtZVsxXTtcblx0XHRuYW1lID0gbmFtZVswXTtcblxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXNbal0sXG5cdFx0XHRcdG5vZGVJRCA9IG5vZGUuYiQgPSBub2RlLmIkIHx8ICsrZGF0YS5ub2RlSW5kZXgsXG5cdFx0XHRcdGV2ZW50cyA9IGRhdGEuYWxsRXZlbnRzW25hbWUgKyBub2RlSURdID0gZGF0YS5hbGxFdmVudHNbbmFtZSArIG5vZGVJRF0gfHwgW107XG5cblx0XHRcdGxldCBleGlzdCA9IGZhbHNlO1xuXG5cblx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgZXZlbnRzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGNvbnN0IGV2ZW50ID0gZXZlbnRzW2tdO1xuXG5cdFx0XHRcdGlmIChoYW5kbGVyID09PSBldmVudC5oYW5kbGVyICYmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IGV2ZW50LnNlbGVjdG9yKSkge1xuXHRcdFx0XHRcdGV4aXN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWV4aXN0KSB7XG5cdFx0XHRcdGV2ZW50cy5wdXNoKHtcblx0XHRcdFx0XHRkZWxlZ2F0ZSxcblx0XHRcdFx0XHRoYW5kbGVyLFxuXHRcdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0XHRzZWxlY3RvclxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZGVsZWdhdGUgfHwgaGFuZGxlciwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L29uLmpzXG4gKiovIiwiLy8gc2hhcmUgZGF0YSBiZXR3ZWVuIGFzIGFuIG9iamVjdCBtb2R1bGVzIGJlY2F1c2Ugd2UgdXNlXG4vLyBzaW1wbGlmaWVkIGVzIG1vZHVsZXMgdGhlcmUgYW5kIGNhbm5vdCBpbXBvcnQgYW5kIHNoYXJlIGEgbnVtYmVyXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5vZGVJbmRleDogMCxcblx0YWxsRXZlbnRzOiB7fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JxdWVyeS9fZGF0YS5qc1xuICoqLyIsImltcG9ydCBkYXRhIGZyb20gJy4vX2RhdGEnO1xuXG4vLyByZW1vdmVzIGV2ZW50IGhhbmRsZXIgZnJvbSBhIHNldCBvZiBlbGVtZW50c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2ZmKG5hbWVzLCBzZWxlY3RvciwgaGFuZGxlcikge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aGFuZGxlciA9IHNlbGVjdG9yO1xuXHRcdHNlbGVjdG9yID0gbnVsbDtcblx0fVxuXG5cdG5hbWVzID0gbmFtZXMuc3BsaXQoL1xccy8pO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbmFtZSA9IG5hbWVzW2ldLnNwbGl0KC9cXC4oLispLyk7XG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gbmFtZVsxXTtcblx0XHRuYW1lID0gbmFtZVswXTtcblxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXNbal0sXG5cdFx0XHRcdGV2ZW50cyA9IGRhdGEuYWxsRXZlbnRzW25hbWUgKyBub2RlLmIkXTtcblxuXHRcdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0XHRmb3IgKGxldCBrID0gMDsgayA8IGV2ZW50cy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50ID0gZXZlbnRzW2tdO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdCghaGFuZGxlciB8fCBoYW5kbGVyID09PSBldmVudC5oYW5kbGVyIHx8IGhhbmRsZXIgPT09IGV2ZW50LmRlbGVnYXRlKVxuXHRcdFx0XHRcdFx0JiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSBldmVudC5uYW1lc3BhY2UpXG5cdFx0XHRcdFx0XHQmJiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBldmVudC5zZWxlY3Rvcilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudC5kZWxlZ2F0ZSB8fCBldmVudC5oYW5kbGVyKTtcblx0XHRcdFx0XHRcdGV2ZW50cy5zcGxpY2Uoay0tLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghbmFtZXNwYWNlICYmICFzZWxlY3Rvcikge1xuXHRcdFx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L29mZi5qc1xuICoqLyIsIi8vIGNoZWNrIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gZ2l2ZW4gc2V0IGFnYWluc3QgYSBzZWxlY3RvclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXMocykge1xuXHRjb25zdCBub2RlID0gdGhpc1swXTtcblx0cmV0dXJuIG5vZGVcblx0XHQ/IChub2RlLm1hdGNoZXNcblx0XHRcdHx8IG5vZGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG5cdFx0XHR8fCBub2RlLm1vek1hdGNoZXNTZWxlY3RvclxuXHRcdFx0fHwgbm9kZS5tc01hdGNoZXNTZWxlY3RvclxuXHRcdFx0fHwgbm9kZS5vTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKG5vZGUsIHMpIDogZmFsc2U7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9icXVlcnkvaXMuanNcbiAqKi8iLCJpbXBvcnQgSW5pdCBmcm9tICcuL19pbml0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vX2RhdGEnO1xuXG4vLyBhZGRzIHVuaXF1ZSBub2RlcyB0byBiUXVlcnkgY29sbGVjdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKHNlbGVjdG9yKSB7XG5cdGNvbnN0IGlkTWFwID0ge307XG5cblx0bGV0IHJlc3VsdCxcblx0XHRub2RlSUQsXG5cdFx0bm9kZSxcblx0XHRpO1xuXG5cdHNlbGVjdG9yID0gbmV3IEluaXQoc2VsZWN0b3IpO1xuXG5cdGlmICh0aGlzLmxlbmd0aCkge1xuXHRcdHJlc3VsdCA9IG5ldyBJbml0KHRoaXMpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vZGUgPSByZXN1bHRbaV07XG5cdFx0XHRub2RlSUQgPSBub2RlLmIkID0gbm9kZS5iJCB8fCArK2RhdGEubm9kZUluZGV4O1xuXHRcdFx0aWRNYXBbbm9kZUlEXSA9IDE7XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gc2VsZWN0b3JbaV07XG5cdFx0XHRub2RlSUQgPSBub2RlLmIkID0gbm9kZS5iJCB8fCArK2RhdGEubm9kZUluZGV4O1xuXHRcdFx0aWYgKCFpZE1hcFtub2RlSURdKSB7XG5cdFx0XHRcdGlkTWFwW25vZGVJRF0gPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gc2VsZWN0b3I7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnF1ZXJ5L2FkZC5qc1xuICoqLyIsImltcG9ydCBJbml0IGZyb20gJy4vX2luaXQnO1xuXG4vLyBleGNsdWRlcyBlbGVtZW50cyBmcm9tIGN1cnJlbnQgc2V0IGJ5IGdpdmVuIHNlbGVjdG9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3Qoc2VsZWN0b3IpIHtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEluaXQoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoIW5ldyBJbml0KHRoaXNbaV0pLmlzKHNlbGVjdG9yKSkge1xuXHRcdFx0cmVzdWx0LnB1c2godGhpc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JxdWVyeS9ub3QuanNcbiAqKi8iLCJpbXBvcnQgSW5pdCBmcm9tICcuL19pbml0JztcblxuLy8gZ2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMsXG4vLyBmaWx0ZXJlZCBieSBhIHNlbGVjdG9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgSW5pdCgpO1xuXG5cdG5vZm4uZm9yRWFjaCh0aGlzLCBlbCA9PiB7XG5cdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9icXVlcnkvZmluZC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuXG5kZXNjcmliZSgnYlF1ZXJ5LmNyZWF0ZScsICgpID0+IHtcblx0aXQoJ2NyZWF0ZXMgZWxlbWVudCcsICgpID0+IHtcblx0XHRleHBlY3QoXG5cdFx0XHQkLmNyZWF0ZSgnZGl2JykudGFnTmFtZVxuXHRcdCkudG9FcXVhbCgnRElWJyk7XG5cdH0pO1xuXG5cdGl0KCdhZGRzIGEgcHJvcGVydHknLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KFxuXHRcdFx0JC5jcmVhdGUoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZm9vYmFyJ1xuXHRcdFx0fSkuY2xhc3NOYW1lXG5cdFx0KS50b0VxdWFsKCdmb29iYXInKTtcblx0fSk7XG5cblx0aXQoJ2NyZWF0ZXMgY2hpbGRlbicsICgpID0+IHtcblx0XHRleHBlY3QoXG5cdFx0XHQkLmNyZWF0ZSgnZGl2Jywge1xuXHRcdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0XHR0YWdOYW1lOiAnc3Bhbidcblx0XHRcdFx0fV1cblx0XHRcdH0pLmNoaWxkcmVuWzBdLnRhZ05hbWVcblx0XHQpLnRvRXF1YWwoJ1NQQU4nKTtcblx0fSk7XG5cblx0aXQoJ2FkZHMgYXR0cmlidXRlJywgKCkgPT4ge1xuXHRcdGV4cGVjdChcblx0XHRcdCQuY3JlYXRlKCdkaXYnLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRmb286ICdiYXInXG5cdFx0XHRcdH1cblx0XHRcdH0pLmdldEF0dHJpYnV0ZSgnZm9vJylcblx0XHQpLnRvRXF1YWwoJ2JhcicpO1xuXHR9KTtcblxuXHRpdCgnYWxsb3dzIHRvIHBhc3Mgb2JqZWN0IHdpdGggdGFnTmFtZSBwcm9wZXJ0eScsICgpID0+IHtcblx0XHRleHBlY3QoXG5cdFx0XHQkLmNyZWF0ZSh7XG5cdFx0XHRcdHRhZ05hbWU6ICdkaXYnXG5cdFx0XHR9KS50YWdOYW1lXG5cdFx0KS50b0VxdWFsKCdESVYnKTtcblx0fSk7XG5cblx0eGl0KCdleHRlbmRzIGRhdGFzZXQgb2JqZWN0JywgKCkgPT4ge1xuXHRcdC8vIFRPRE9cblx0fSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zcGVjL2JxdWVyeS9jcmVhdGVfc3BlYy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuaW1wb3J0IHNpbXVsYXRlQ2xpY2sgZnJvbSAnLi4vLi4vbGliL3NpbXVsYXRlY2xpY2snO1xuXG5kZXNjcmliZSgnYlF1ZXJ5IGV2ZW50cycsICgpID0+IHtcblx0bGV0IHRlc3RTYW5kYm94LFxuXHRcdGNoaWxkMSxcblx0XHRjaGlsZDIsXG5cdFx0Z3JhbmRjaGlsZDEsXG5cdFx0aGFuZGxlcjtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR0ZXN0U2FuZGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0dGVzdFNhbmRib3guaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImNoaWxkMVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JhbmRjaGlsZDFcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNoaWxkMlwiPjwvZGl2PlxuXHRcdGA7XG5cblx0XHRjaGlsZDEgPSB0ZXN0U2FuZGJveC5xdWVyeVNlbGVjdG9yKCcuY2hpbGQxJyk7XG5cdFx0Y2hpbGQyID0gdGVzdFNhbmRib3gucXVlcnlTZWxlY3RvcignLmNoaWxkMicpO1xuXHRcdGdyYW5kY2hpbGQxID0gdGVzdFNhbmRib3gucXVlcnlTZWxlY3RvcignLmdyYW5kY2hpbGQxJyk7XG5cblx0XHR0aGlzLmhhbmRsZXIgPSAoKSA9PiB7fTtcblx0XHRzcHlPbih0aGlzLCAnaGFuZGxlcicpO1xuXHRcdGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cdH0pO1xuXG5cdGFmdGVyRWFjaCgoKSA9PiB7XG5cdFx0JChbdGVzdFNhbmRib3gsIGNoaWxkMSwgY2hpbGQyLCBncmFuZGNoaWxkMV0pLm9mZignY2xpY2snKTtcblx0fSk7XG5cblx0aXQoJ0FkZHMgZXZlbnQgbGlzdGVuZXInLCAoKSA9PiB7XG5cdFx0JCh0ZXN0U2FuZGJveCkub24oJ2NsaWNrJywgaGFuZGxlcik7XG5cdFx0c2ltdWxhdGVDbGljayh0ZXN0U2FuZGJveCk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ1JlbW92ZXMgZXZlbnQgbGlzdGVuZXIgKGxpc3RlbmVyIGlzIHNwZWNpZmllZCknLCAoKSA9PiB7XG5cdFx0JCh0ZXN0U2FuZGJveCkub24oJ2NsaWNrJywgaGFuZGxlcikub2ZmKCdjbGljaycsIGhhbmRsZXIpO1xuXHRcdHNpbXVsYXRlQ2xpY2sodGVzdFNhbmRib3gpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnUmVtb3ZlcyBldmVudCBsaXN0ZW5lciAobGlzdGVuZXIgaXMgbm90IHNwZWNpZmllZCknLCAoKSA9PiB7XG5cdFx0JCh0ZXN0U2FuZGJveCkub24oJ2NsaWNrJywgaGFuZGxlcikub2ZmKCdjbGljaycpO1xuXHRcdHNpbXVsYXRlQ2xpY2sodGVzdFNhbmRib3gpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnQWRkcyBuYW1lc3BhY2VkIGxpc3RlbmVyJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljay55bycsIGhhbmRsZXIpO1xuXHRcdHNpbXVsYXRlQ2xpY2sodGVzdFNhbmRib3gpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdSZW1vdmVzIG5hbWVzcGFjZWQgbGlzdGVuZXIgKGxpc3RlbmVyIGlzIHNwZWNpZmllZCknLCAoKSA9PiB7XG5cdFx0JCh0ZXN0U2FuZGJveCkub24oJ2NsaWNrLnlvJywgaGFuZGxlcikub2ZmKCdjbGljay55bycsIGhhbmRsZXIpO1xuXHRcdHNpbXVsYXRlQ2xpY2sodGVzdFNhbmRib3gpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnUmVtb3ZlcyBuYW1lc3BhY2VkIGxpc3RlbmVyIChsaXN0ZW5lciBpcyBub3Qgc3BlY2lmaWVkKScsICgpID0+IHtcblx0XHQkKHRlc3RTYW5kYm94KS5vbignY2xpY2sueW8nLCBoYW5kbGVyKS5vZmYoJ2NsaWNrLnlvJyk7XG5cdFx0c2ltdWxhdGVDbGljayh0ZXN0U2FuZGJveCk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdBZGRzIGJ1YmJsaW5nIGV2ZW50IGxpc3RlbmVyJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsIGhhbmRsZXIpO1xuXHRcdHNpbXVsYXRlQ2xpY2soZ3JhbmRjaGlsZDEpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdBZGRzIGRlbGVnYXRlZCBldmVudCBsaXN0ZW5lcicsICgpID0+IHtcblx0XHQkKHRlc3RTYW5kYm94KS5vbignY2xpY2snLCAnLmNoaWxkMScsIGhhbmRsZXIpO1xuXHRcdHNpbXVsYXRlQ2xpY2soY2hpbGQxKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnQWRkcyBkZWxlZ2F0ZWQgZXZlbnQgbGlzdGVuZXIgKGNsaWNrIG9uIGdyYW5kY2hpbGRyZW4pJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsICcuY2hpbGQxJywgaGFuZGxlcik7XG5cdFx0c2ltdWxhdGVDbGljayhncmFuZGNoaWxkMSk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ0RvZXNuXFx0IHRyaWdnZXIgd2hlbiBjbGlja2VkIG9uIHdyb25nIGNoaWxkJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsICcuY2hpbGQyJywgaGFuZGxlcik7XG5cdFx0c2ltdWxhdGVDbGljayhncmFuZGNoaWxkMSk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdSZW1vdmVzIGRlbGVnYXRlZCBldmVudCBsaXN0ZW5lciAoc2VsZWN0b3IgYW5kIGhhbmRsZXIgYXJlIHNwZWNpZmllZCknLCAoKSA9PiB7XG5cdFx0JCh0ZXN0U2FuZGJveCkub24oJ2NsaWNrJywgJy5jaGlsZDEnLCBoYW5kbGVyKS5vZmYoJ2NsaWNrJywgJy5jaGlsZDEnLCBoYW5kbGVyKTtcblx0XHRzaW11bGF0ZUNsaWNrKGNoaWxkMSk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdSZW1vdmVzIGRlbGVnYXRlZCBldmVudCBsaXN0ZW5lciAoc2VsZWN0b3IgaXMgc3BlY2lmaWVkLCBoYW5kbGVyIGlzIG5vdCBzcGVjaWZpZWQpJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsICcuY2hpbGQxJywgaGFuZGxlcikub2ZmKCdjbGljaycsICcuY2hpbGQxJyk7XG5cdFx0c2ltdWxhdGVDbGljayhjaGlsZDEpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnUmVtb3ZlcyBkZWxlZ2F0ZWQgZXZlbnQgbGlzdGVuZXIgKHNlbGVjdG9yIGlzIG5vdCBzcGVjaWZpZWQsIGhhbmRsZXIgaXMgc3BlY2lmaWVkKScsICgpID0+IHtcblx0XHQkKHRlc3RTYW5kYm94KS5vbignY2xpY2snLCAnLmNoaWxkMScsIGhhbmRsZXIpLm9mZignY2xpY2snLCBoYW5kbGVyKTtcblx0XHRzaW11bGF0ZUNsaWNrKGNoaWxkMSk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdSZW1vdmVzIGRlbGVnYXRlZCBldmVudCBsaXN0ZW5lciAoc2VsZWN0b3IgYW5kIGhhbmRsZXIgYXJlIG5vdCBzcGVjaWZpZWQpJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsICcuY2hpbGQxJywgaGFuZGxlcikub2ZmKCdjbGljaycpO1xuXHRcdHNpbXVsYXRlQ2xpY2soY2hpbGQxKTtcblx0XHRleHBlY3QoaGFuZGxlcikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ1N0b3BzIHByb3BhZ2F0aW9uJywgKCkgPT4ge1xuXHRcdCQodGVzdFNhbmRib3gpLm9uKCdjbGljaycsIGhhbmRsZXIpO1xuXHRcdCQoY2hpbGQxKS5vbignY2xpY2snLCBldnQgPT4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpKTtcblx0XHRzaW11bGF0ZUNsaWNrKGNoaWxkMSk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc3BlYy9icXVlcnkvZXZlbnRzX3NwZWMuanNcbiAqKi8iLCIvLyBzaW11bGF0ZXMgY2xpY2sgb24gYSBub2RlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW11bGF0ZUNsaWNrKG5vZGUpIHtcblx0Y29uc3QgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcblx0ZXZ0LmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUpO1xuXHRub2RlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9saWIvc2ltdWxhdGVjbGljay5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuXG5kZXNjcmliZSgnYlF1ZXJ5LmZuLmZpbmQnLCAoKSA9PiB7XG5cdGxldCB0ZXN0U2FuZGJveCxcblx0XHRncmFuZENoaWxkO1xuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdHRlc3RTYW5kYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHR0ZXN0U2FuZGJveC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImdyYW5kY2hpbGRcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHRncmFuZENoaWxkID0gdGVzdFNhbmRib3gucXVlcnlTZWxlY3RvcignLmdyYW5kY2hpbGQnKTtcblx0fSk7XG5cblx0aXQoJ2ZpbmRzJywgKCkgPT4ge1xuXHRcdGV4cGVjdChbXG5cdFx0XHQuLi4kKHRlc3RTYW5kYm94KS5maW5kKCcuZ3JhbmRjaGlsZCcpXG5cdFx0XSkudG9FcXVhbChbZ3JhbmRDaGlsZF0pO1xuXHR9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvYnF1ZXJ5L2ZpbmRfc3BlYy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuLy8g0LfQsNGB0YPQvdGD0YLRjCDQstGB0LUg0YHQvtC30LTQsNC90LjRjyDQvdC+0LLRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDQsiBiZWZvcmVFYWNoXG4vLyDRgNC10YTQsNC60YLQvtGA0LjRgtGMXG4vLyDQvdCw0L/QuNGB0LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LggKNCyINGC0L7QvCDRh9C40YHQu9C1INC4INC6INGD0LbQtSDRgNC10LDQu9C40LfQvtCy0LDQvdC90YvQvCDRhNGD0L3QutGG0LjRj9C8KVxuLy8g0L/QvtGB0LvQtSDQstGB0LXQs9C+INC90YPQttC90L4g0LLQutC70Y7Rh9C40YLRjCDQu9C40L3RgtC10YAg0Lgg0L/RgNC+0LLQtdGA0LjRgtGMINC60L7QstC10YDQsNC00LZcblxuZGVzY3JpYmUoJ2JRdWVyeSBpbml0aWFsaXphdGlvbicsICgpID0+IHtcblx0bGV0IHRlc3RTYW5kYm94O1xuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdHRlc3RTYW5kYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHR0ZXN0U2FuZGJveC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGVzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGVzdC0xXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXN0LTJcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRlc3QtM1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblx0fSk7XG5cblx0aXQoJ2FjY2VwdHMgd2luZG93JywgKCkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQod2luZG93KTtcblx0XHRleHBlY3QocmVzdWx0Lmxlbmd0aCkudG9FcXVhbCgxKTtcblx0XHRleHBlY3QocmVzdWx0WzBdKS50b0VxdWFsKHdpbmRvdyk7XG5cdH0pO1xuXG5cdGl0KCdhY2NlcHRzIGRvY3VtZW50JywgKCkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQoZG9jdW1lbnQpO1xuXHRcdGV4cGVjdChyZXN1bHQubGVuZ3RoKS50b0VxdWFsKDEpO1xuXHRcdGV4cGVjdChyZXN1bHRbMF0pLnRvRXF1YWwoZG9jdW1lbnQpO1xuXHR9KTtcblxuXHRpdCgncGFyc2VzIEhUTUwnLCAoKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJCgnPGRpdj48L2Rpdj48c3Bhbj48L3NwYW4+Jyk7XG5cblx0XHRleHBlY3QocmVzdWx0Lmxlbmd0aCkudG9FcXVhbCgyKTtcblx0XHRleHBlY3QocmVzdWx0WzBdLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuXHRcdGV4cGVjdChyZXN1bHRbMV0udGFnTmFtZSkudG9FcXVhbCgnU1BBTicpO1xuXHR9KTtcblxuXHRpdCgnY29udmVydHMgYXJyYXktbGlrZScsICgpID0+IHtcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRlc3RTYW5kYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSxcblx0XHRcdHJlc3VsdCA9ICQoY2hpbGRyZW4pO1xuXG5cdFx0ZXhwZWN0KGNoaWxkcmVuLmxlbmd0aCkudG9FcXVhbChyZXN1bHQubGVuZ3RoKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGV4cGVjdChjaGlsZHJlbltpXSkudG9FcXVhbChyZXN1bHRbaV0pO1xuXHRcdH1cblx0fSk7XG5cblx0aXQoJ0NvbnZlcnRzIG9uZSBlbGVtZW50JywgKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcqJyksXG5cdFx0XHRyZXN1bHQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0ZXhwZWN0KHJlc3VsdC5sZW5ndGgpLnRvRXF1YWwoMSk7XG5cdFx0ZXhwZWN0KGVsZW1lbnQpLnRvRXF1YWwocmVzdWx0WzBdKTtcblx0fSk7XG5cblx0aXQoJ1VzZXMgY29udGV4dCcsICgpID0+IHtcblx0XHRleHBlY3QoXG5cdFx0XHQkKCcudGVzdC0xJywgdGVzdFNhbmRib3gpLmxlbmd0aFxuXHRcdCkudG9FcXVhbCgxKTtcblx0fSk7XG5cblx0aXQoJ1VzZXMgY29udGV4dCcsICgpID0+IHtcblx0XHRleHBlY3QoXG5cdFx0XHQkKCcudGVzdC0xJywgJy53cm9uZy1jb250ZXh0JykubGVuZ3RoXG5cdFx0KS50b0VxdWFsKDApO1xuXHR9KTtcblxuXHRpdCgnQWxsb3dzIHRvIHVzZSBudWxsJywgKCkgPT4ge1xuXHRcdGV4cGVjdChcblx0XHRcdCQobnVsbCkubGVuZ3RoXG5cdFx0KS50b0VxdWFsKDApO1xuXHR9KTtcblxuXHRpdCgnQWxsb3dzIHRvIHVzZSB1bmRlZmluZWQnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KFxuXHRcdFx0JCgpLmxlbmd0aFxuXHRcdCkudG9FcXVhbCgwKTtcblx0fSk7XG5cblx0aXQoJ0FsbG93cyB0byBjcmVhdGUgcGx1Z2lucycsICgpID0+IHtcblx0XHQkLmZuLmJRdWVyeVBsdWdpbiA9IGZ1bmN0aW9uIGJRdWVyeVBsdWdpbigpIHtcblx0XHRcdGV4cGVjdChcblx0XHRcdFx0dGhpcy5sZW5ndGhcblx0XHRcdCkudG9FcXVhbChcblx0XHRcdFx0dGVzdFNhbmRib3gucXVlcnlTZWxlY3RvckFsbCgnKicpLmxlbmd0aFxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0c3B5T24oJC5mbiwgJ2JRdWVyeVBsdWdpbicpO1xuXG5cdFx0JCgnKicsIHRlc3RTYW5kYm94KS5iUXVlcnlQbHVnaW4oKTtcblxuXHRcdGV4cGVjdCgkLmZuLmJRdWVyeVBsdWdpbikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvYnF1ZXJ5L2luaXRfc3BlYy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuXG5kZXNjcmliZSgnYlF1ZXJ5LmZuLm5vdCcsICgpID0+IHtcblx0aXQoJ2NoZWNrcyBjbGFzc05hbWUnLCAoKSA9PiB7XG5cdFx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlbC5jbGFzc05hbWUgPSAnZWwnO1xuXG5cdFx0ZXhwZWN0KFxuXHRcdFx0JChlbCkuaXMoJy5lbCcpXG5cdFx0KS50b0VxdWFsKHRydWUpO1xuXG5cdFx0ZXhwZWN0KFxuXHRcdFx0JChlbCkuaXMoJy5lbDInKVxuXHRcdCkudG9FcXVhbChmYWxzZSk7XG5cdH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc3BlYy9icXVlcnkvaXNfc3BlYy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ3NyYy9icXVlcnknO1xuXG5kZXNjcmliZSgnYlF1ZXJ5LmZuLm5vdCcsICgpID0+IHtcblx0aXQoJ2V4Y2x1ZGVzIGJ5IHNlbGVjdG9yJywgKCkgPT4ge1xuXHRcdGNvbnN0IGVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0ZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0XHRlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRcdGVsMi5jbGFzc05hbWUgPSAnZWwyJztcblxuXHRcdGV4cGVjdChbXG5cdFx0XHQuLi4kKFtlbDEsIGVsMiwgZWwzXSkubm90KCcuZWwyJylcblx0XHRdKS50b0VxdWFsKFtlbDEsIGVsM10pO1xuXHR9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvYnF1ZXJ5L25vdF9zcGVjLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnc3JjL2JxdWVyeSc7XG5cbmRlc2NyaWJlKCdiUXVlcnkub25lJywgKCkgPT4ge1xuXHRpdCgnZmluZHMnLCAoKSA9PiB7XG5cdFx0Y29uc3QgdGVzdFNhbmRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRcdHRlc3RTYW5kYm94LmlubmVySFRNTCA9IGBcblx0XHQ8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJncmFuZGNoaWxkXCI+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNoaWxkMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImdyYW5kY2hpbGQyXCI+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0YDtcblxuXHRcdGNvbnN0IGNoaWxkID0gdGVzdFNhbmRib3gucXVlcnlTZWxlY3RvcignLmNoaWxkJyk7XG5cblx0XHRleHBlY3QoXG5cdFx0XHQkLm9uZSgnKicsIHRlc3RTYW5kYm94KVxuXHRcdCkudG9FcXVhbChjaGlsZCk7XG5cdH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc3BlYy9icXVlcnkvb25lX3NwZWMuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdzcmMvYnF1ZXJ5JztcblxuZGVzY3JpYmUoJ2JRdWVyeS5wYXJzZUhUTUwnLCAoKSA9PiB7XG5cdGl0KCdwYXJzZXMgSFRNTCcsICgpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkLnBhcnNlSFRNTCgnPGRpdj48L2Rpdj48c3Bhbj48L3NwYW4+Jyk7XG5cblx0XHRleHBlY3QocmVzdWx0Lmxlbmd0aCkudG9FcXVhbCgyKTtcblx0XHRleHBlY3QocmVzdWx0WzBdLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuXHRcdGV4cGVjdChyZXN1bHRbMV0udGFnTmFtZSkudG9FcXVhbCgnU1BBTicpO1xuXHR9KTtcblxuXHRpdCgncGFyc2VzIGNvbnRleHR1YWwgZWxlbWVudHMnLCAoKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJC5wYXJzZUhUTUwoJzx0ZD48L3RkPjx0ZD48L3RkPicpO1xuXG5cdFx0ZXhwZWN0KHJlc3VsdC5sZW5ndGgpLnRvRXF1YWwoMik7XG5cdFx0ZXhwZWN0KHJlc3VsdFswXS50YWdOYW1lKS50b0VxdWFsKCdURCcpO1xuXHRcdGV4cGVjdChyZXN1bHRbMV0udGFnTmFtZSkudG9FcXVhbCgnVEQnKTtcblx0fSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zcGVjL2JxdWVyeS9wYXJzZWh0bWxfc3BlYy5qc1xuICoqLyIsImltcG9ydCBDbGFzcyBmcm9tICdzcmMvY2xhc3MnO1xuXG5kZXNjcmliZSgnQ2xhc3MgZnVuY3Rpb24nLCAoKSA9PiB7XG5cdGl0KCdhbGxvd3MgdG8gaW5oZXJpdCcsICgpID0+IHtcblx0XHRjb25zdCBBID0gQ2xhc3MoeyBhOiB0cnVlIH0pLFxuXHRcdFx0QiA9IENsYXNzKHsgYjogdHJ1ZSwgZXh0ZW5kczogQSB9KSxcblx0XHRcdEMgPSBDbGFzcyh7IGM6IHRydWUsIGV4dGVuZHM6IEIgfSksXG5cdFx0XHRpbnN0ID0gbmV3IEM7XG5cblx0XHRleHBlY3QoaW5zdCBpbnN0YW5jZW9mIEEpLnRvQmVUcnV0aHkoKTtcblx0XHRleHBlY3QoaW5zdCBpbnN0YW5jZW9mIEIpLnRvQmVUcnV0aHkoKTtcblx0XHRleHBlY3QoaW5zdCBpbnN0YW5jZW9mIEMpLnRvQmVUcnV0aHkoKTtcblxuXHRcdGV4cGVjdChpbnN0LmEpLnRvQmVUcnV0aHkoKTtcblx0XHRleHBlY3QoaW5zdC5iKS50b0JlVHJ1dGh5KCk7XG5cdFx0ZXhwZWN0KGluc3QuYykudG9CZVRydXRoeSgpO1xuXHR9KTtcblxuXHRpdCgnYWxsb3dzIHRvIHBhc3Mgc3RhdGljIHByb3BzJywgKCkgPT4ge1xuXHRcdGNvbnN0IEEgPSBDbGFzcyh7fSwgeyBzdGF0aWNQcm9wOiB0cnVlIH0pO1xuXHRcdGV4cGVjdChBLnN0YXRpY1Byb3ApLnRvQmVUcnV0aHkoKTtcblx0fSk7XG5cblx0aXQoJ2lmIG5ldyBDbGFzcyh7fSkgaXMgY2FsbGVkIHJldHVybiBpdHMgaW5zdGFuY2UnLCAoKSA9PiB7XG5cdFx0Y29uc3QgaW5zdCA9IG5ldyBDbGFzcyh7IGE6IHRydWUgfSk7XG5cdFx0ZXhwZWN0KGluc3QuYSkudG9CZVRydXRoeSgpO1xuXHRcdGV4cGVjdChpbnN0IGluc3RhbmNlb2YgQ2xhc3MpLnRvQmVGYWxzeSgpO1xuXHR9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvY2xhc3Nfc3BlYy5qc1xuICoqLyIsImltcG9ydCBleHRlbmQgZnJvbSAnLi9leHRlbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGFzcyhwcm90b3R5cGUsIHN0YXRpY1Byb3BzKSB7XG5cdGNvbnN0IENvbnN0cnVjdG9yID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yICE9PSBPYmplY3Rcblx0XHRcdD8gcHJvdG90eXBlLmNvbnN0cnVjdG9yXG5cdFx0XHQ6IGZ1bmN0aW9uIEVtcHR5Q29uc3RydWN0b3IoKSB7fSxcblx0XHQvL2V4dGVuZHMgaXMga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXHRcdFBhcmVudCA9IHByb3RvdHlwZS5leHRlbmRzIHx8IHByb3RvdHlwZS5leHRlbmQsXG5cdFx0Ly9pbmhlcml0IHByb3RvIGZyb20gY2xhc3MgcGFyZW50IG9yIGVtcHR5IG9iamVjdFxuXHRcdHByb3RvID0gT2JqZWN0LmNyZWF0ZShQYXJlbnQgPyBQYXJlbnQucHJvdG90eXBlIDoge30pO1xuXG5cdGV4dGVuZChwcm90bywgcHJvdG90eXBlKTtcblxuXHRpZiAodHlwZW9mIHN0YXRpY1Byb3BzID09PSAnb2JqZWN0Jykge1xuXHRcdGV4dGVuZChDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuXHR9XG5cblx0Ly8gZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblx0cHJvdG8uaW5zdGFuY2VPZiA9IGZ1bmN0aW9uIGluc3RhbmNlT2YoKSB7XG5cdFx0cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcjtcblx0fTtcblxuXHRDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90bztcblxuXHQvLyBpZiBuZXcgQ2xhc3Moe30pIGlzIGNhbGxlZCByZXR1cm4gaXRzIGluc3RhbmNlXG5cdGlmICh0aGlzIGluc3RhbmNlb2YgQ2xhc3MpIHtcblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIENvbnN0cnVjdG9yO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzcy5qc1xuICoqLyIsIi8qZXNsaW50LWRpc2FibGUgKi9cbnhkZXNjcmliZSgnRGVsZWdhdGVkIGV2ZW50czogZGVsZWdhdGVMaXN0ZW5lciwgdW5kZWxlZ2F0ZUxpc3RlbmVyIChNYXRyZXNoa2EuT2JqZWN0IGFuZCBNYXRyZXNoa2EuQXJyYXkpJywgZnVuY3Rpb24oKSB7XG5cdGl0KCd3b3JrcyB3aXRoIFwiKlwiIGV2ZW50cyAoTUsuQXJyYXkpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSBuZXcgTUsuQXJyYXkoKSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJyonLCAnc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5wdXNoKHt9KTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqWzBdLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3dvcmtzIHdpdGggXCIqXCIgZXZlbnRzIChNSy5PYmplY3QpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSBuZXcgTUsuT2JqZWN0KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblx0XHRvYmouanNldCgneCcsIHt9KTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLngsICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBcIipcIiBldmVudHMgKE1LLkFycmF5KScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLkFycmF5KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblx0XHRvYmoucHVzaCh7fSk7XG5cblx0XHRtYWdpYy5fdW5kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJyonLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9ialswXSwgJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBcIipcIiBldmVudHMgKE1LLk9iamVjdCknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IG5ldyBNSy5PYmplY3QoKSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJyonLCAnc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5qc2V0KCd4Jywge30pO1xuXG5cdFx0bWFnaWMuX3VuZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcpO1xuXG5cdFx0bWFnaWMudHJpZ2dlcihvYmoueCwgJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBcIipcIiBldmVudHMgdXNpbmcgY2FsbGJhY2sgKE1LLkFycmF5KScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLkFycmF5KCksXG5cdFx0XHRib29sID0gZmFsc2UsXG5cdFx0XHRjYWxsYmFjayA9IGV2dCA9PiBib29sID0gdHJ1ZTtcblxuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJyonLCAnc29tZWV2ZW50JywgY2FsbGJhY2spO1xuXG5cdFx0b2JqLnB1c2goe30pO1xuXG5cdFx0bWFnaWMuX3VuZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcsIGNhbGxiYWNrKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqWzBdLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmVzIFwiKlwiIGV2ZW50cyB1c2luZyBjYWxsYmFjayAoTUsuT2JqZWN0KScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLk9iamVjdCgpLFxuXHRcdFx0Ym9vbCA9IGZhbHNlLFxuXHRcdFx0Y2FsbGJhY2sgPSBldnQgPT4gYm9vbCA9IHRydWU7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcsIGNhbGxiYWNrKTtcblxuXHRcdG9iai5qc2V0KCd4Jywge30pO1xuXG5cdFx0bWFnaWMuX3VuZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqJywgJ3NvbWVldmVudCcsIGNhbGxiYWNrKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLngsICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKGZhbHNlKTtcblx0fSk7XG5cblx0aXQoJ3dvcmtzIHdpdGggXCIqXCIgZXZlbnRzIChNSy5BcnJheSksIGdvIGRlZXBlciAoKi5hKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLkFycmF5KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqLmEnLCAnc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5wdXNoKHtcblx0XHRcdGE6IHt9XG5cdFx0fSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9ialswXS5hLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3dvcmtzIHdpdGggXCIqXCIgZXZlbnRzIChNSy5PYmplY3QpLCBnbyBkZWVwZXIgKCouYSknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IG5ldyBNSy5PYmplY3QoKSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJyouYScsICdzb21lZXZlbnQnLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXG5cdFx0b2JqLmpzZXQoJ3gnLCB7XG5cdFx0XHRhOiB7fVxuXHRcdH0pO1xuXG5cdFx0bWFnaWMudHJpZ2dlcihvYmoueC5hLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3dvcmtzIHdpdGggXCIqXCIgZXZlbnRzIChNSy5BcnJheSksIGdvIGRlZXBlciAoKi4qKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLkFycmF5KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqLionLCAnc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5wdXNoKG5ldyBNSy5BcnJheSh7fSkpO1xuXG5cdFx0bWFnaWMudHJpZ2dlcihvYmpbMF1bMF0sICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgnd29ya3Mgd2l0aCBcIipcIiBldmVudHMgKE1LLk9iamVjdCksIGdvIGRlZXBlciAoKi4qKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLk9iamVjdCgpLFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnKi4qJywgJ3NvbWVldmVudCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblx0XHRvYmouanNldCgneCcsIG5ldyBNSy5PYmplY3Qoe1xuXHRcdFx0YToge31cblx0XHR9KSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9iai54LmEsICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgnd29ya3Mgd2l0aCBcIipcIiBldmVudHMgKE1LLkFycmF5KSwgZ28gZGVlcGVyICgqLiouYSknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IG5ldyBNSy5BcnJheSgpLFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnKi4qLmEnLCAnc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5wdXNoKG5ldyBNSy5BcnJheSh7XG5cdFx0XHRhOiB7fVxuXHRcdH0pKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqWzBdWzBdLmEsICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgnd29ya3Mgd2l0aCBcIipcIiBldmVudHMgKE1LLk9iamVjdCksIGdvIGRlZXBlciAoKi4qLmEpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSBuZXcgTUsuT2JqZWN0KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICcqLiouYScsICdzb21lZXZlbnQnLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXG5cdFx0b2JqLmpzZXQoJ3gnLCBuZXcgTUsuT2JqZWN0KHtcblx0XHRcdHk6IG5ldyBNSy5PYmplY3Qoe1xuXHRcdFx0XHRhOiB7fVxuXHRcdFx0fSlcblx0XHR9KSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9iai54LnkuYSwgJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc3BlYy9ldmVudHMvZGVsZWdhdGVkX2NvbGxlY3Rpb25fc3BlYy5qc1xuICoqLyIsImltcG9ydCBkZWxlZ2F0ZUxpc3RlbmVyIGZyb20gJ3NyYy9fZXZlbnRzL2RlbGVnYXRlbGlzdGVuZXInO1xuaW1wb3J0IHVuZGVsZWdhdGVMaXN0ZW5lciBmcm9tICdzcmMvX2V2ZW50cy91bmRlbGVnYXRlbGlzdGVuZXInO1xuaW1wb3J0IHRyaWdnZXJPbmUgZnJvbSAnc3JjL19ldmVudHMvdHJpZ2dlcm9uZSc7XG5pbXBvcnQgbWFrZU9iamVjdCBmcm9tICcuLi8uLi9saWIvbWFrZW9iamVjdCc7XG5cbmRlc2NyaWJlKCdEZWxlZ2F0ZWQgZXZlbnRzOiBkZWxlZ2F0ZUxpc3RlbmVyLCB1bmRlbGVnYXRlTGlzdGVuZXIgKGJhc2ljKScsIGZ1bmN0aW9uIHRlc3QoKSB7XG5cdGxldCBjdHgsXG5cdFx0aGFuZGxlcjtcblxuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdGN0eCA9IHt9O1xuXHRcdHRoaXMuaGFuZGxlciA9ICgpID0+IHt9O1xuXHRcdHNweU9uKHRoaXMsICdoYW5kbGVyJyk7XG5cdFx0aGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblx0fSk7XG5cblxuXHRpdCgnZmlyZXMgKGEuYiknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR0cmlnZ2VyT25lKG9iai5hLmIsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgKGEuYi5jKScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIuYycpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR0cmlnZ2VyT25lKG9iai5hLmIuYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdmaXJlcyB3aGVuIHJlYXNzaWduZWQgKGEuYiwgcmVhc3NpZ24gYSknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHRvYmouYSA9IG1ha2VPYmplY3QoJ2InKTtcblx0XHR0cmlnZ2VyT25lKG9iai5hLmIsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgd2hlbiByZWFzc2lnbmVkIChhLmIsIHJlYXNzaWduIGIpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYicpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0b2JqLmEuYiA9IHt9O1xuXHRcdHRyaWdnZXJPbmUob2JqLmEuYiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdmaXJlcyB3aGVuIHJlYXNzaWduZWQgKGEuYi5jLCByZWFzc2lnbiBhKScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIuYycpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHRvYmouYSA9IG1ha2VPYmplY3QoJ2IuYycpO1xuXHRcdHRyaWdnZXJPbmUob2JqLmEuYi5jLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ2ZpcmVzIHdoZW4gcmVhc3NpZ25lZCAoYS5iLmMsIHJlYXNzaWduIGIpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYi5jJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdG9iai5hLmIgPSBtYWtlT2JqZWN0KCdjJyk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLmMsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgd2hlbiByZWFzc2lnbmVkIChhLmIuYywgcmVhc3NpZ24gYyknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0b2JqLmEuYi5jID0ge307XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLmMsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlIGV2ZW50IGZyb20gb2xkIHRhcmdldCB3aGVuIHJlYXNzaWduZWQgKGEuYiwgcmVhc3NpZ24gYSknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyksXG5cdFx0XHRhID0gb2JqLmE7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHRvYmouYSA9IG1ha2VPYmplY3QoJ2InKTtcblx0XHR0cmlnZ2VyT25lKGEuYiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlIGV2ZW50IGZyb20gb2xkIHRhcmdldCB3aGVuIHJlYXNzaWduZWQgKGEuYiwgcmVhc3NpZ24gYiknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyksXG5cdFx0XHRiID0gb2JqLmEuYjtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdG9iai5hLmIgPSB7fTtcblx0XHR0cmlnZ2VyT25lKGIsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZSBldmVudCBmcm9tIG9sZCB0YXJnZXQgd2hlbiByZWFzc2lnbmVkIChhLmIuYywgcmVhc3NpZ24gYSknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKSxcblx0XHRcdGEgPSBvYmouYTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0b2JqLmEgPSBtYWtlT2JqZWN0KCdiLmMnKTtcblx0XHR0cmlnZ2VyT25lKGEuYi5jLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmUgZXZlbnQgZnJvbSBvbGQgdGFyZ2V0IHdoZW4gcmVhc3NpZ25lZCAoYS5iLmMsIHJlYXNzaWduIGIpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYi5jJyksXG5cdFx0XHRiID0gb2JqLmEuYjtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0b2JqLmEuYiA9IG1ha2VPYmplY3QoJ2MnKTtcblx0XHR0cmlnZ2VyT25lKGIuYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlIGV2ZW50IGZyb20gb2xkIHRhcmdldCB3aGVuIHJlYXNzaWduZWQgKGEuYi5jLCByZWFzc2lnbiBjKScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIuYycpLFxuXHRcdFx0YyA9IG9iai5hLmM7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdG9iai5hLmIuYyA9IHt9O1xuXHRcdHRyaWdnZXJPbmUoYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgndW5kZWxlZ2F0ZSAoYS5iKScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmInKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnc29tZWV2ZW50Jyk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCd1bmRlbGVnYXRlIChhLmIuYyknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0dW5kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ3NvbWVldmVudCcpO1xuXHRcdHRyaWdnZXJPbmUob2JqLmEuYi5jLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdkb2VzblxcJ3QgcmVtb3ZlIGNoYW5nZSBldmVudCB3aGVuIHVuZGVsZWdhdGUgKGEuYi5jKScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIuYycpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCAoKSA9PiB7fSk7XG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnY2hhbmdlOmMnLCBoYW5kbGVyKTtcblx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50Jyk7XG5cdFx0b2JqLmEuYi5jID0gNTU7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3VuZGVsZWdhdGUgYnkgY2FsbGJhY2sgKGEuYiknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHRyaWdnZXJPbmUob2JqLmEuYiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgndW5kZWxlZ2F0ZSBieSBjYWxsYmFjayAoYS5iLmMpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYi5jJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR0cmlnZ2VyT25lKG9iai5hLmIuYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXG5cdGl0KCd1bmRlbGVnYXRlIGJ5IGNhbGxiYWNrIGFuZCBjb250ZXh0IChhLmIpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYicpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnc29tZWV2ZW50JywgaGFuZGxlciwgY3R4KTtcblx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iJywgJ3NvbWVldmVudCcsIGhhbmRsZXIsIGN0eCk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCd1bmRlbGVnYXRlIGJ5IGNhbGxiYWNrIGFuZCBjb250ZXh0IChhLmIuYyknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlciwgY3R4KTtcblx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlciwgY3R4KTtcblx0XHR0cmlnZ2VyT25lKG9iai5hLmIuYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgndW5kZWxlZ2F0ZSBieSBjYWxsYmFjayBidXQga2VlcHMgd2hlbiBjYWxsYmFja3MgYXJlIG5vdCBzYW1lIChhLmIpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYicpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnc29tZWV2ZW50JywgaGFuZGxlcik7XG5cdFx0dW5kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCAoKSA9PiB7fSk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3VuZGVsZWdhdGUgYnkgY2FsbGJhY2sgYnV0IGtlZXBzIHdoZW4gY2FsbGJhY2tzIGFyZSBub3Qgc2FtZSAoYS5iLmMpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYi5jJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCAoKSA9PiB7fSk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLmMsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgndW5kZWxlZ2F0ZSBieSBjYWxsYmFjayBidXQga2VlcHMgd2hlbiBjb250ZXh0cyBhcmUgbm90IHNhbWUgKGEuYiknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iJyk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyLCB7fSk7XG5cdFx0dW5kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdzb21lZXZlbnQnLCBoYW5kbGVyLCB7fSk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3VuZGVsZWdhdGUgYnkgY2FsbGJhY2sgYnV0IGtlZXBzIHdoZW4gY29udGV4dHMgYXJlIG5vdCBzYW1lIChhLmIuYyknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnc29tZWV2ZW50JywgaGFuZGxlciwge30pO1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBoYW5kbGVyLCB7fSk7XG5cdFx0dHJpZ2dlck9uZShvYmouYS5iLmMsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgndXNlcyBjb3JyZWN0IGNvbnRleHQgZm9yIGRlbGVnYXRlZCBldmVudHMnLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMnKTtcblx0XHRsZXQgYm9vbCA9IGZhbHNlO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBmdW5jdGlvbiBoYW5kbGUoKSB7XG5cdFx0XHRib29sID0gdGhpcyA9PT0gY3R4O1xuXHRcdH0sIGN0eCk7XG5cblx0XHR0cmlnZ2VyT25lKG9iai5hLmIuYywgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvZXZlbnRzL2RlbGVnYXRlZF9zcGVjLmpzXG4gKiovIiwiLyplc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgXCJmdW5jdGlvbnNcIjogZmFsc2UgfV0qL1xuaW1wb3J0IGFkZExpc3RlbmVyIGZyb20gJy4vYWRkbGlzdGVuZXInO1xuaW1wb3J0IHVuZGVsZWdhdGVMaXN0ZW5lciBmcm9tICcuL3VuZGVsZWdhdGVsaXN0ZW5lcic7XG5pbXBvcnQgdHJpZ2dlck9uZSBmcm9tICcuL3RyaWdnZXJvbmUnO1xuXG5mdW5jdGlvbiBjaGFuZ2VIYW5kbGVyKHtcblx0cHJldmlvdXNWYWx1ZSxcblx0dmFsdWVcbn0sIHtcblx0cGF0aCxcblx0bmFtZSxcblx0Y2FsbGJhY2ssXG5cdGNvbnRleHRcbn0gPSB0cmlnZ2VyT25lLmxhdGVzdEV2ZW50LmluZm8uZGVsZWdhdGVkRGF0YSkge1xuXHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGRlbGVnYXRlTGlzdGVuZXIodmFsdWUsIHBhdGgsIG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0fVxuXG5cdGlmIChwcmV2aW91c1ZhbHVlICYmIHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihwcmV2aW91c1ZhbHVlLCBwYXRoLCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZWdhdGVMaXN0ZW5lcihvYmplY3QsIHBhdGgsIG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdC8vIGlmIHR5cGVvZiBwYXRoIGlzIHN0cmluZyBhbmQgcGF0aCBpcyBub3QgZW1wdHkgc3RyaW5nIHRoZW4gc3BsaXQgaXRcblx0cGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyAmJiBwYXRoICE9PSAnJyA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cblx0aWYgKCFwYXRoIHx8ICFwYXRoLmxlbmd0aCkge1xuXHRcdC8vIGlmIG5vIHBhdGggdGhlbiBhZGQgc2ltcGxlIGxpc3RlbmVyXG5cdFx0YWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gZWxzZSBkbyBhbGwgbWFnaWNcblx0XHRjb25zdCBrZXkgPSBwYXRoWzBdO1xuXHRcdGxldCBwYXRoU3RyO1xuXG5cdFx0aWYgKHBhdGgubGVuZ3RoID4gMSkge1xuXHRcdFx0cGF0aCA9IG5vZm4uc2xpY2UocGF0aCwgMSk7XG5cdFx0XHRwYXRoU3RyID0gcGF0aC5qb2luKCcuJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhdGggPSBbXTtcblx0XHRcdHBhdGhTdHIgPSBwYXRoWzBdIHx8ICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlbGVnYXRlZERhdGEgPSB7XG5cdFx0XHRwYXRoLFxuXHRcdFx0bmFtZSxcblx0XHRcdGNhbGxiYWNrLFxuXHRcdFx0Y29udGV4dFxuXHRcdH07XG5cblx0XHRhZGRMaXN0ZW5lcihvYmplY3QsIGBfY2hhbmdlOmRlbGVnYXRlZDoke2tleX1gLCBjaGFuZ2VIYW5kbGVyLCBudWxsLCB7XG5cdFx0XHRkZWxlZ2F0ZWREYXRhLFxuXHRcdFx0cGF0aFN0clxuXHRcdH0pO1xuXG5cdFx0Y2hhbmdlSGFuZGxlcih7XG5cdFx0XHR2YWx1ZTogb2JqZWN0W2tleV1cblx0XHR9LCBkZWxlZ2F0ZWREYXRhKTtcblx0fVxufVxuXG4vKlxuZGVmaW5lKFtcblx0J21hdHJlc2hrYV9kaXIvY29yZS92YXIvY29yZScsXG5cdCdtYXRyZXNoa2FfZGlyL2NvcmUvaW5pdG1rJyxcblx0J21hdHJlc2hrYV9kaXIvY29yZS92YXIvbWFwJyxcblx0J21hdHJlc2hrYV9kaXIvY29yZS92YXIvc3BlY2lhbGV2dHJlZydcbl0sIGZ1bmN0aW9uKGNvcmUsIGluaXRNSywgbWFwLCBzcGVjaWFsRXZ0UmVnKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX2RlbGVnYXRlTGlzdGVuZXIgPSBjb3JlLl9kZWxlZ2F0ZUxpc3RlbmVyID0gZnVuY3Rpb24ob2JqZWN0LFxuXHQgcGF0aCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGV2dERhdGEpIHtcblx0XHRpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9ICdvYmplY3QnKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0aW5pdE1LKG9iamVjdCk7XG5cblx0XHR2YXIgb2JqZWN0RGF0YSA9IG1hcC5nZXQob2JqZWN0KSxcblx0XHRcdGV4ZWN1dGVkID0gLyhbXlxcLl0rKVxcLiguKikvLmV4ZWMocGF0aCksXG5cdFx0XHRmLFxuXHRcdFx0Zmlyc3RLZXkgPSBleGVjdXRlZCA/IGV4ZWN1dGVkWzFdIDogcGF0aCxcblx0XHRcdGNoYW5nZUtleSxcblx0XHRcdG9iajtcblxuXHRcdHBhdGggPSBleGVjdXRlZCA/IGV4ZWN1dGVkWzJdIDogJyc7XG5cblx0XHRldnREYXRhID0gZXZ0RGF0YSB8fCB7fTtcblxuXHRcdGlmIChmaXJzdEtleSkge1xuXHRcdFx0aWYgKGZpcnN0S2V5ID09ICcqJykge1xuXHRcdFx0XHRpZiAob2JqZWN0LmlzTUtBcnJheSkge1xuXHRcdFx0XHRcdGYgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRcdChldnQgJiYgZXZ0LmFkZGVkID8gZXZ0LmFkZGVkIDogb2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0aXRlbSAmJiBfZGVsZWdhdGVMaXN0ZW5lcihpdGVtLCBwYXRoLCBuYW1lLFxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Zi5fY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRcdFx0XHRjb3JlLl9hZGRMaXN0ZW5lcihvYmplY3QsICdhZGQnLCBmLCBjb250ZXh0LCBldnREYXRhKTtcblx0XHRcdFx0XHRmKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAob2JqZWN0LmlzTUtPYmplY3QpIHtcblx0XHRcdFx0XHRmID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gb2JqZWN0W2V2dC5rZXldO1xuXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0ICYmIGV2dCAmJiAoZXZ0LmtleSBpbiBvYmplY3REYXRhLmtleXMpKSB7XG5cdFx0XHRcdFx0XHRcdF9kZWxlZ2F0ZUxpc3RlbmVyKHRhcmdldCwgcGF0aCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGV2dERhdGEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRvYmplY3QuZWFjaChmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdFx0XHRfZGVsZWdhdGVMaXN0ZW5lcihpdGVtLCBwYXRoLCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdFx0XHRcdFx0Y29yZS5fYWRkTGlzdGVuZXIob2JqZWN0LCAnY2hhbmdlJywgZiwgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGYgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRpZiAoZXZ0ICYmIGV2dC5fc2lsZW50KSByZXR1cm47XG5cblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gb2JqZWN0W2ZpcnN0S2V5XSxcblx0XHRcdFx0XHRcdGNoYW5nZUtleSxcblx0XHRcdFx0XHRcdHRyaWdnZXJDaGFuZ2UgPSB0cnVlLFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdGNoYW5nZUV2ZW50cztcblxuXHRcdFx0XHRcdGV2dERhdGEucGF0aCA9IHBhdGg7XG5cblx0XHRcdFx0XHRldnREYXRhLnByZXZpb3VzVmFsdWUgPSBldnQgJiYgZXZ0LnByZXZpb3VzVmFsdWUgfHxcblx0XHRcdFx0XHRldnREYXRhLnByZXZpb3VzVmFsdWUgJiYgZXZ0RGF0YS5wcmV2aW91c1ZhbHVlW2ZpcnN0S2V5XTtcblxuXHRcdFx0XHRcdGlmIChldnQgJiYgZXZ0LnByZXZpb3VzVmFsdWUgJiYgbWFwLmhhcyhldnQucHJldmlvdXNWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdGNvcmUuX3VuZGVsZWdhdGVMaXN0ZW5lcihldnQucHJldmlvdXNWYWx1ZSwgcGF0aCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGV2dERhdGEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0ID09ICdvYmplY3QnICYmIHRhcmdldCkge1xuXHRcdFx0XHRcdFx0X2RlbGVnYXRlTGlzdGVuZXIodGFyZ2V0LCBwYXRoLCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHNwZWNpYWxFdnRSZWcudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdFx0Y2hhbmdlS2V5ID0gbmFtZS5yZXBsYWNlKHNwZWNpYWxFdnRSZWcsICcnKTtcblxuXHRcdFx0XHRcdFx0aWYgKCFwYXRoICYmIGV2dERhdGEucHJldmlvdXNWYWx1ZSAmJiBldnREYXRhLnByZXZpb3VzVmFsdWVbY2hhbmdlS2V5XVxuXHRcdFx0XHRcdFx0IT09IHRhcmdldFtjaGFuZ2VLZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZUV2ZW50cyA9IG1hcC5nZXQoZXZ0RGF0YS5wcmV2aW91c1ZhbHVlKS5ldmVudHNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdGlmIChjaGFuZ2VFdmVudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hhbmdlRXZlbnRzW2ldLnBhdGggPT09IHBhdGgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckNoYW5nZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmICh0cmlnZ2VyQ2hhbmdlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29yZS5zZXQodGFyZ2V0LCBjaGFuZ2VLZXksIHRhcmdldFtjaGFuZ2VLZXldLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JjZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHByZXZpb3VzVmFsdWU6IGV2dERhdGEucHJldmlvdXNWYWx1ZVtjaGFuZ2VLZXldLFxuXHRcdFx0XHRcdFx0XHRcdFx0cHJldmlvdXNPYmplY3Q6IGV2dERhdGEucHJldmlvdXNWYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdF9zaWxlbnQ6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRmLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdFx0XHRcdGNvcmUuX2FkZExpc3RlbmVyKG9iamVjdCwgJ2NoYW5nZTonICsgZmlyc3RLZXksIGYsIGNvbnRleHQsIGV2dERhdGEpO1xuXG5cdFx0XHRcdGYoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29yZS5fYWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0fVxuXHR9O1xufSk7XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX2V2ZW50cy9kZWxlZ2F0ZWxpc3RlbmVyLmpzXG4gKiovIiwiLyplc2xpbnQgbm8tc2hhZG93OiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiZXZ0XCJdIH1dKi9cblxuaW1wb3J0IGluaXRNSyBmcm9tICcuLi9fY29yZS9pbml0JztcbmltcG9ydCB0cmlnZ2VyT25lIGZyb20gJy4vdHJpZ2dlcm9uZSc7XG5pbXBvcnQgZGVmaW5lUHJvcCBmcm9tICcuLi9fY29yZS9kZWZpbmVwcm9wJztcblxuLy8gcHJvcGVydHkgbW9kaWZpZXIgZXZlbnQgcmVnZXhwXG5jb25zdCBwcm9wTW9kRXZlbnRSZWdcblx0PSAvXl9jaGFuZ2U6ZGVwczp8Xl9jaGFuZ2U6YmluZGluZ3M6fF5fY2hhbmdlOmRlbGVnYXRlZDp8XmNoYW5nZTp8XmJlZm9yZWNoYW5nZTovO1xuXG4vLyBhZGRzIHNpbXBsZSBldmVudCBsaXN0ZW5lclxuLy8gdXNlZCBhcyBjb3JlIG9mIGV2ZW50IGVuZ2luZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgaW5mbyA9IHt9KSB7XG5cdGNvbnN0IHsgZXZlbnRzOiBhbGxFdmVudHMgfSA9IGluaXRNSyhvYmplY3QpLFxuXHRcdGN0eCA9IGNvbnRleHQgfHwgb2JqZWN0LFxuXHRcdGV2ZW50cyA9IGFsbEV2ZW50c1tuYW1lXSxcblx0XHRldnQgPSB7IGNhbGxiYWNrLCBjb250ZXh0LCBjdHgsIG5hbWUsIGluZm8gfTtcblxuXG5cdC8vIGlmIHRoZXJlIGFyZSBldmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lXG5cdGlmIChldmVudHMpIHtcblx0XHQvLyBpZiB0aGVyZSBhcmUgZXZlbnRzIHdpdGggdGhlIHNhbWUgZGF0YSwgcmV0dXJuIGZhbHNlXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGV2dCA9IGV2ZW50c1tpXTtcblx0XHRcdGlmICgoZXZ0LmNhbGxiYWNrID09PSBjYWxsYmFjayB8fCBldnQuY2FsbGJhY2sgPT09IGNhbGxiYWNrLl9jYWxsYmFjaylcblx0XHRcdFx0XHQmJiBldnQuY29udGV4dCA9PT0gY29udGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gaWYgdGhlIGV2ZW50IGlzbid0IGZvdW5kIGFkZCBpdCB0byB0aGUgZXZlbnQgbGlzdFxuXHRcdGV2ZW50cy5wdXNoKGV2dCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyB3aXRoIHRoZSBzYW1lIG5hbWUsIGNyZWF0ZSBhcnJheSB3aXRoIG9ubHkgZWJlbnRcblx0XHRhbGxFdmVudHNbbmFtZV0gPSBbZXZ0XTtcblx0fVxuXG5cdGlmIChwcm9wTW9kRXZlbnRSZWcudGVzdChuYW1lKSkge1xuXHRcdC8vIGRlZmluZSBuZWVkZWQgYWNjZXNzb3JzIGZvciBLRVlcblx0XHRkZWZpbmVQcm9wKG9iamVjdCwgbmFtZS5yZXBsYWNlKHByb3BNb2RFdmVudFJlZywgJycpKTtcblx0fVxuXG5cdGlmIChuYW1lWzBdICE9PSAnXycpIHtcblx0XHR0cmlnZ2VyT25lKG9iamVjdCwgYGFkZGV2ZW50OiR7bmFtZX1gLCBldnQpO1xuXHRcdHRyaWdnZXJPbmUob2JqZWN0LCAnYWRkZXZlbnQnLCBldnQpO1xuXHR9XG5cblx0Ly8gaWYgZXZlbnQgaXMgYWRkZWQgcmV0dXJuIHRydWVcblx0cmV0dXJuIHRydWU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9fZXZlbnRzL2FkZGxpc3RlbmVyLmpzXG4gKiovIiwiaW1wb3J0IGRlZnMgZnJvbSAnLi9kZWZzJztcblxuLy8gdGhpcyBpcyBjb21tb24gZnVuY3Rpb24gd2hpY2ggYXNzb2NpYXRlcyBhbiBvYmplY3Qgd2l0aCBpdHMgTWF0cmVzaGthIGRlZmluaXRpb25cbmZ1bmN0aW9uIGNvbW1vbkluaXQob2JqZWN0KSB7XG5cdGxldCBkZWYgPSBkZWZzLmdldChvYmplY3QpO1xuXHRpZiAoIWRlZikge1xuXHRcdGRlZiA9IHtcblx0XHRcdC8vIGEgcHJvcGVydHkgbmFtZSBvZiBcImV2ZW50c1wiIG9iamVjdCBpcyBhbiBldmVudCBuYW1lXG5cdFx0XHQvLyBhbmQgYSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBldmVudCBoYW5kbGVyc1xuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdC8qZXhhbXBsZToge1xuXHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbixcblx0XHRcdFx0XHRjdHg6IG9iamVjdCxcblx0XHRcdFx0XHRjb250ZXh0OiBvYmplY3QyLFxuXHRcdFx0XHRcdG5hbWU6IFwiZXhhbXBsZVwiXG5cdFx0XHRcdH1cblx0XHRcdFx0Ki9cblx0XHRcdH0sXG5cdFx0XHQvLyBcInByb3BzXCIgY29udGFpbnMgc3BlY2lhbCBpbmZvcm1hdGlvbiBhYm91dCBwcm9wZXJ0aWVzIChnZXR0ZXJzLCBzZXR0ZXJzIGV0Yylcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdC8qZXhhbXBsZToge1xuXHRcdFx0XHRcdC8vP25vZGVzOiBjb3JlLiQoKSxcblx0XHRcdFx0XHR2YWx1ZTogb2JqZWN0W2tleV0sXG5cdFx0XHRcdFx0Z2V0dGVyOiBudWxsLFxuXHRcdFx0XHRcdHNldHRlcjogbnVsbCxcblx0XHRcdFx0XHRtZWRpYXRvcjogbnVsbCxcblx0XHRcdFx0XHQvLz9kZXN0cm95ZXJzOiBNYXAsXG5cdFx0XHRcdFx0YmluZGluZ3M6IFt7XG5cdFx0XHRcdFx0XHRub2RlLFxuXHRcdFx0XHRcdFx0YmluZGVyLFxuXHRcdFx0XHRcdFx0bm9kZUhhbmRsZXIsXG5cdFx0XHRcdFx0XHRvYmplY3RIYW5kbGVyXG5cdFx0XHRcdFx0fV1cblx0XHRcdFx0fSovXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGBtayR7TWF0aC5yYW5kb20oKX1gXG5cdFx0fTtcblxuXHRcdGRlZnMuc2V0KG9iamVjdCwgZGVmKTtcblx0fVxuXG5cdHJldHVybiBkZWY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNSyhvYmplY3QpIHtcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3Q7XG5cdGlmICghb2JqZWN0IHx8IHR5cGUgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0eXBlfSBjYW5ub3QgYmUgdXNlZCBpbiB0aGlzIG1ldGhvZGApO1xuXHR9XG5cblx0Ly8gaWYgb2JqZWN0IGhhcyBfaW5pdE1LIG1ldGhvZCwgcnVuIGl0XG5cdC8vIGVsc2UgcnVuIGNvbW1vbkluaXRcblx0Ly8gZXZlcnkgX2luaXRNSyBpbXBsZW1lbnRhdGlvbiBoYXZlIHRvIHJ1biBjb21tb25Jbml0IG9yIHBhcmVudCdzIF9pbml0TUtcblx0cmV0dXJuIG9iamVjdC5faW5pdE1LID8gb2JqZWN0Ll9pbml0TUsoKSA6IGNvbW1vbkluaXQob2JqZWN0KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19jb3JlL2luaXQuanNcbiAqKi8iLCJmdW5jdGlvbiBQc2V1ZG9NYXAoKSB7fVxuXG4vLyBQc2V1ZG9NYXAgc2ltdWxhdGVzIFdlYWtNYXAgYmVoYXZpb3Igd2l0aCBPKDEpIHNlYXJjaCBjb21wbGV4aXR5XG4vLyBpdCdzIG5lZWRlZCBmb3IgQElFOSBhbmQgQElFMTBcbm5vZm4uYXNzaWduKFBzZXVkb01hcC5wcm90b3R5cGUsIHtcblx0Z2V0KG9iaikge1xuXHRcdHJldHVybiBvYmoubWF0cmVzaGthRGF0YTtcblx0fSxcblx0c2V0KG9iaiwgZGF0YSkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdtYXRyZXNoa2FEYXRhJywge1xuXHRcdFx0dmFsdWU6IGRhdGEsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0aGFzKG9iaikge1xuXHRcdHJldHVybiAnbWF0cmVzaGthRGF0YScgaW4gb2JqO1xuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gbmV3IFBzZXVkb01hcCgpIDogbmV3IFdlYWtNYXAoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19jb3JlL2RlZnMuanNcbiAqKi8iLCJpbXBvcnQgZGVmcyBmcm9tICcuLi9fY29yZS9kZWZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJpZ2dlck9uZShvYmplY3QsIG5hbWUpIHtcblx0Y29uc3QgZGVmID0gZGVmcy5nZXQob2JqZWN0KTtcblxuXHRpZiAoIWRlZikgcmV0dXJuO1xuXG5cdGNvbnN0IGV2ZW50cyA9IGRlZi5ldmVudHNbbmFtZV07XG5cblx0aWYgKGV2ZW50cykge1xuXHRcdGNvbnN0IGFyZ3MgPSBub2ZuLnNsaWNlKGFyZ3VtZW50cywgMiksXG5cdFx0XHRsID0gZXZlbnRzLmxlbmd0aCxcblx0XHRcdFthMSwgYTIsIGEzXSA9IGFyZ3M7XG5cblx0XHRsZXQgaSA9IDAsXG5cdFx0XHRldjtcblxuXHRcdHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR3aGlsZSAoaSA8IGwpIHtcblx0XHRcdFx0KHRyaWdnZXJPbmUubGF0ZXN0RXZlbnQgPSBldiA9IGV2ZW50c1tpKytdKS5jYWxsYmFjay5jYWxsKGV2LmN0eCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0Y2FzZSAxOlxuXHRcdFx0d2hpbGUgKGkgPCBsKSB7XG5cdFx0XHRcdCh0cmlnZ2VyT25lLmxhdGVzdEV2ZW50ID0gZXYgPSBldmVudHNbaSsrXSkuY2FsbGJhY2suY2FsbChldi5jdHgsIGExKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHRjYXNlIDI6XG5cdFx0XHR3aGlsZSAoaSA8IGwpIHtcblx0XHRcdFx0KHRyaWdnZXJPbmUubGF0ZXN0RXZlbnQgPSBldiA9IGV2ZW50c1tpKytdKS5jYWxsYmFjay5jYWxsKGV2LmN0eCwgYTEsIGEyKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHRjYXNlIDM6XG5cdFx0XHR3aGlsZSAoaSA8IGwpIHtcblx0XHRcdFx0KHRyaWdnZXJPbmUubGF0ZXN0RXZlbnQgPSBldiA9IGV2ZW50c1tpKytdKS5jYWxsYmFjay5jYWxsKGV2LmN0eCwgYTEsIGEyLCBhMyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHdoaWxlIChpIDwgbCkge1xuXHRcdFx0XHQodHJpZ2dlck9uZS5sYXRlc3RFdmVudCA9IGV2ID0gZXZlbnRzW2krK10pLmNhbGxiYWNrLmFwcGx5KGV2LmN0eCwgYXJncyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59XG5cbnRyaWdnZXJPbmUubGF0ZXN0RXZlbnQgPSB7XG5cdGluZm86IHt9LFxuXHRuYW1lOiBudWxsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX2V2ZW50cy90cmlnZ2Vyb25lLmpzXG4gKiovIiwiaW1wb3J0IGRlZnMgZnJvbSAnLi9kZWZzJztcbmltcG9ydCBzZXQgZnJvbSAnLi4vc2V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVQcm9wKG9iamVjdCwga2V5KSB7XG5cdGNvbnN0IGRlZiA9IGRlZnMuZ2V0KG9iamVjdCk7XG5cblx0Ly8gaWYgbm8gb2JqZWN0IGRlZmluaXRpb24gZG8gbm90aGluZ1xuXHRpZiAoIWRlZikgcmV0dXJuO1xuXG5cblx0aWYgKCFkZWYucHJvcHNba2V5XSkge1xuXHRcdGNvbnN0IHByb3BEZWYgPSBkZWYucHJvcHNba2V5XSA9IHtcblx0XHRcdHZhbHVlOiBvYmplY3Rba2V5XSxcblx0XHRcdGdldHRlcjogbnVsbCxcblx0XHRcdHNldHRlcjogbnVsbCxcblx0XHRcdG1lZGlhdG9yOiBudWxsLFxuXHRcdFx0YmluZGluZ3M6IG51bGxcblx0XHR9O1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHByb3BEZWYuZ2V0dGVyID8gcHJvcERlZi5nZXR0ZXIuY2FsbChvYmplY3QpIDogcHJvcERlZi52YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQodikge1xuXHRcdFx0XHRyZXR1cm4gcHJvcERlZi5zZXR0ZXIgPyBwcm9wRGVmLnNldHRlci5jYWxsKG9iamVjdCwgdikgOiBzZXQob2JqZWN0LCBrZXksIHYsIHtcblx0XHRcdFx0XHRmcm9tU2V0dGVyOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cblxuLypkZWZpbmUoW1xuXHQnbWF0cmVzaGthX2Rpci9jb3JlL3Zhci9jb3JlJyxcblx0J21hdHJlc2hrYV9kaXIvY29yZS92YXIvbWFwJ1xuXSwgZnVuY3Rpb24oY29yZSwgbWFwKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRjb3JlLl9kZWZpbmVTcGVjaWFsID0gZnVuY3Rpb24ob2JqZWN0LCBrZXksIG5vQWNjZXNzb3JzKSB7XG5cdFx0aWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPSAnb2JqZWN0JyB8fCAhbWFwLmhhcyhvYmplY3QpKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0dmFyIG9iamVjdERhdGEgPSBtYXAuZ2V0KG9iamVjdCksXG5cdFx0XHRzcGVjaWFsUHJvcHMgPSBvYmplY3REYXRhLnNwZWNpYWxba2V5XTtcblxuXHRcdGlmICghc3BlY2lhbFByb3BzKSB7XG5cdFx0XHRzcGVjaWFsUHJvcHMgPSBvYmplY3REYXRhLnNwZWNpYWxba2V5XSA9IHtcblx0XHRcdFx0JG5vZGVzOiBjb3JlLiQoKSxcblx0XHRcdFx0dmFsdWU6IG9iamVjdFtrZXldLFxuXHRcdFx0XHRnZXR0ZXI6IG51bGwsXG5cdFx0XHRcdHNldHRlcjogbnVsbCxcblx0XHRcdFx0bWVkaWF0b3I6IG51bGxcblx0XHRcdH07XG5cblx0XHRcdGlmICghbm9BY2Nlc3NvcnMgJiYga2V5ICE9ICdzYW5kYm94Jykge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNwZWNpYWxQcm9wcy5nZXR0ZXIgPyBzcGVjaWFsUHJvcHMuZ2V0dGVyLmNhbGwob2JqZWN0KSA6IHNwZWNpYWxQcm9wcy52YWx1ZTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldDogZnVuY3Rpb24odikge1xuXHRcdFx0XHRcdFx0c3BlY2lhbFByb3BzLnNldHRlciA/IHNwZWNpYWxQcm9wcy5zZXR0ZXIuY2FsbChvYmplY3QsIHYpIDogY29yZS5zZXQob2JqZWN0LCBrZXksIHYsIHtcblx0XHRcdFx0XHRcdFx0ZnJvbVNldHRlcjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3BlY2lhbFByb3BzO1xuXHR9O1xufSk7XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX2NvcmUvZGVmaW5lcHJvcC5qc1xuICoqLyIsImltcG9ydCBkZWZzIGZyb20gJy4vX2NvcmUvZGVmcyc7XG5pbXBvcnQgdHJpZ2dlck9uZSBmcm9tICcuL19ldmVudHMvdHJpZ2dlcm9uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldChvYmplY3QsIGtleSwgdmFsdWUsIGV2dCA9IHt9KSB7XG5cdGNvbnN0IGRlZiA9IGRlZnMuZ2V0KG9iamVjdCk7XG5cdGlmICghZGVmKSByZXR1cm47XG5cblx0Y29uc3QgeyBwcm9wcywgZXZlbnRzIH0gPSBkZWYsXG5cdFx0cHJvcERlZiA9IHByb3BzW2tleV07XG5cblx0aWYgKCFwcm9wRGVmKSB7XG5cdFx0b2JqZWN0W2tleV0gPSB2YWx1ZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcmV2aW91c1ZhbHVlID0gcHJvcERlZi52YWx1ZTtcblxuXHQvLyBUT0RPIE5PVCBSRVFVSVJFRFxuXHRldnQgPSBub2ZuLmFzc2lnbihldnQsIHtcblx0XHR2YWx1ZSxcblx0XHRrZXksXG5cdFx0cHJldmlvdXNWYWx1ZVxuXHR9KTtcblxuXHRwcm9wRGVmLnZhbHVlID0gdmFsdWU7XG5cblx0aWYgKHByZXZpb3VzVmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0aWYgKGV2ZW50c1tgY2hhbmdlOiR7a2V5fWBdKSB7XG5cdFx0XHR0cmlnZ2VyT25lKG9iamVjdCwgYGNoYW5nZToke2tleX1gLCBldnQpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudHNbYF9jaGFuZ2U6ZGVsZWdhdGVkOiR7a2V5fWBdKSB7XG5cdFx0XHR0cmlnZ2VyT25lKG9iamVjdCwgYF9jaGFuZ2U6ZGVsZWdhdGVkOiR7a2V5fWAsIGV2dCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50cy5jaGFuZ2UpIHtcblx0XHRcdHRyaWdnZXJPbmUob2JqZWN0LCAnY2hhbmdlJywgZXZ0KTtcblx0XHR9XG5cdH1cbn1cblxuLypkZWZpbmUoW1xuXHQnbWF0cmVzaGthX2Rpci9jb3JlL3Zhci9jb3JlJyxcblx0J21hdHJlc2hrYV9kaXIvY29yZS92YXIvbWFwJ1xuXSwgZnVuY3Rpb24oY29yZSwgbWFwKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgc2V0O1xuXG5cdGNvcmUuZ2V0ID0gZnVuY3Rpb24ob2JqZWN0LCBrZXkpIHtcblx0XHRyZXR1cm4gb2JqZWN0ICYmIG9iamVjdFtrZXldO1xuXHR9O1xuXG5cdC8vIHNldCBtZXRob2QgaXMgdGhlIG1vc3Qgb2Z0ZW4gdXNlZCBtZXRob2Rcblx0Ly8gd2UgbmVlZCB0byBvcHRpbWl6ZSBpdCBhcyBnb29kIGFzIHBvc3NpYmxlXG5cdHNldCA9IGNvcmUuc2V0ID0gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHYsIGV2dCkge1xuXHRcdGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT0gJ29iamVjdCcpIHJldHVybiBvYmplY3Q7XG5cblx0XHR2YXIgdHlwZSA9IHR5cGVvZiBrZXksXG5cdFx0XHRfaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b2JqZWN0RGF0YSxcblx0XHRcdHNwZWNpYWwsXG5cdFx0XHRldmVudHMsXG5cdFx0XHRwcmV2VmFsLFxuXHRcdFx0bmV3Vixcblx0XHRcdGksXG5cdFx0XHRfZXZ0LFxuXHRcdFx0aXNDaGFuZ2VkLFxuXHRcdFx0dHJpZ2dlckNoYW5nZTtcblxuXHRcdGlmICh0eXBlID09ICd1bmRlZmluZWQnKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0aWYgKHR5cGUgPT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAoaSBpbiBrZXkpIHtcblx0XHRcdFx0aWYgKGtleS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdHNldChvYmplY3QsIGksIGtleVtpXSwgdik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHR9XG5cblx0XHRvYmplY3REYXRhID0gbWFwLmdldChvYmplY3QpO1xuXG5cdFx0aWYgKCFvYmplY3REYXRhIHx8ICFvYmplY3REYXRhLnNwZWNpYWxba2V5XSkge1xuXHRcdFx0b2JqZWN0W2tleV0gPSB2O1xuXHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHR9XG5cblx0XHRzcGVjaWFsID0gb2JqZWN0RGF0YS5zcGVjaWFsW2tleV07XG5cdFx0ZXZlbnRzID0gb2JqZWN0RGF0YS5ldmVudHM7XG5cblx0XHRwcmV2VmFsID0gc3BlY2lhbC52YWx1ZTtcblxuXHRcdGlmIChzcGVjaWFsLm1lZGlhdG9yICYmIHYgIT09IHByZXZWYWwgJiYgKCFldnQgfHwgIWV2dC5za2lwTWVkaWF0b3IgJiYgIWV2dC5mcm9tTWVkaWF0b3IpKSB7XG5cdFx0XHRuZXdWID0gc3BlY2lhbC5tZWRpYXRvcih2LCBwcmV2VmFsLCBrZXksIG9iamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1YgPSB2O1xuXHRcdH1cblxuXHRcdGlzQ2hhbmdlZCA9IG5ld1YgIT09IHByZXZWYWw7XG5cblx0XHRfZXZ0ID0ge1xuXHRcdFx0b3JpZ2luYWxFdmVudDogZXZ0LFxuXHRcdFx0dmFsdWU6IG5ld1YsXG5cdFx0XHRwcmV2aW91c1ZhbHVlOiBwcmV2VmFsLFxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRub2RlOiBzcGVjaWFsLiRub2Rlc1swXSB8fCBudWxsLFxuXHRcdFx0JG5vZGVzOiBzcGVjaWFsLiRub2Rlcyxcblx0XHRcdHNlbGY6IG9iamVjdCxcblx0XHRcdGlzQ2hhbmdlZDogaXNDaGFuZ2VkXG5cdFx0fTtcblxuXHRcdGlmIChldnQgJiYgdHlwZW9mIGV2dCA9PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChpIGluIGV2dCkge1xuXHRcdFx0XHRfZXZ0W2ldID0gX2V2dFtpXSB8fCBldnRbaV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dHJpZ2dlckNoYW5nZSA9IChpc0NoYW5nZWQgfHwgX2V2dC5mb3JjZSkgJiYgIV9ldnQuc2lsZW50O1xuXG5cdFx0aWYgKHRyaWdnZXJDaGFuZ2UpIHtcblx0XHRcdGV2ZW50c1snYmVmb3JlY2hhbmdlOicgKyBrZXldICYmIGNvcmUuX2Zhc3RUcmlnZ2VyKG9iamVjdCwgJ2JlZm9yZWNoYW5nZTonICsga2V5LCBfZXZ0KTtcblxuXHRcdFx0ZXZlbnRzLmJlZm9yZWNoYW5nZSAmJiBjb3JlLl9mYXN0VHJpZ2dlcihvYmplY3QsICdiZWZvcmVjaGFuZ2UnLCBfZXZ0KTtcblx0XHR9XG5cblx0XHRzcGVjaWFsLnZhbHVlID0gbmV3VjtcblxuXHRcdGlmIChpc0NoYW5nZWQgfHwgX2V2dC5mb3JjZSB8fCBfZXZ0LmZvcmNlSFRNTCB8fCBuZXdWICE9PSB2ICYmICFfaXNOYU4obmV3VikpIHtcblx0XHRcdGlmICghX2V2dC5zaWxlbnRIVE1MKSB7XG5cdFx0XHRcdGV2ZW50c1snX3J1bmJpbmRpbmdzOicgKyBrZXldICYmIGNvcmUuX2Zhc3RUcmlnZ2VyKG9iamVjdCwgJ19ydW5iaW5kaW5nczonICsga2V5LCBfZXZ0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodHJpZ2dlckNoYW5nZSkge1xuXHRcdFx0ZXZlbnRzWydjaGFuZ2U6JyArIGtleV0gJiYgY29yZS5fZmFzdFRyaWdnZXIob2JqZWN0LCAnY2hhbmdlOicgKyBrZXksIF9ldnQpO1xuXG5cdFx0XHRldmVudHMuY2hhbmdlICYmIGNvcmUuX2Zhc3RUcmlnZ2VyKG9iamVjdCwgJ2NoYW5nZScsIF9ldnQpO1xuXHRcdH1cblxuXHRcdGlmICgoaXNDaGFuZ2VkIHx8IF9ldnQuZm9yY2UpICYmICFfZXZ0LnNraXBMaW5rcykge1xuXHRcdFx0ZXZlbnRzWydfcnVuZGVwZW5kZW5jaWVzOicgKyBrZXldICYmXG5cdFx0XHRcdGNvcmUuX2Zhc3RUcmlnZ2VyKG9iamVjdCwgJ19ydW5kZXBlbmRlbmNpZXM6JyArIGtleSwgX2V2dCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fTtcbn0pO1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NldC5qc1xuICoqLyIsImltcG9ydCBkZWZzIGZyb20gJy4uL19jb3JlL2RlZnMnO1xuaW1wb3J0IHJlbW92ZUxpc3RlbmVyIGZyb20gJy4vcmVtb3ZlbGlzdGVuZXInO1xuLy8gUkVGQUNUT1IsIERPTlQgVFJJR0dFUiBBRERFVkVOVCwgUkVNT1ZFRVZFTlRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuZGVsZWdhdGVMaXN0ZW5lcihvYmplY3QsIHBhdGgsIG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0LCBpbmZvID0ge30pIHtcblx0Y29uc3QgZGVmID0gZGVmcy5nZXQob2JqZWN0KTtcblxuXHQvLyBpZiBubyBkZWZpbml0aW9uIGRvIG5vdGhpbmdcblx0aWYgKCFkZWYpIHJldHVybjtcblxuXHRjb25zdCB7IGV2ZW50czogYWxsRXZlbnRzIH0gPSBkZWY7XG5cblx0cGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyAmJiBwYXRoICE9PSAnJyA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cblx0aWYgKCFwYXRoIHx8ICFwYXRoLmxlbmd0aCkge1xuXHRcdC8vIGlmIG5vIHBhdGggdGhlbiByZW1vdmUgbGlzdGVuZXJcblx0XHRyZW1vdmVMaXN0ZW5lcihvYmplY3QsIG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0LCBpbmZvKTtcblx0fSBlbHNlIHtcblx0XHQvLyBlbHNlIGRvIGFsbCBtYWdpY1xuXHRcdGNvbnN0IGtleSA9IHBhdGhbMF0sXG5cdFx0XHRldmVudHMgPSBhbGxFdmVudHNbYF9jaGFuZ2U6ZGVsZWdhdGVkOiR7a2V5fWBdO1xuXHRcdGxldCBwYXRoU3RyO1xuXG5cdFx0aWYgKHBhdGgubGVuZ3RoID4gMSkge1xuXHRcdFx0cGF0aCA9IG5vZm4uc2xpY2UocGF0aCwgMSk7XG5cdFx0XHRwYXRoU3RyID0gcGF0aC5qb2luKCcuJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhdGggPSBbXTtcblx0XHRcdHBhdGhTdHIgPSBwYXRoWzBdIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmIChldmVudHMpIHtcblx0XHRcdGNvbnN0IHJldGFpbiA9IFtdO1xuXHRcdFx0bm9mbi5mb3JFYWNoKGV2ZW50cywgZXZlbnQgPT4ge1xuXHRcdFx0XHRpZiAoZXZlbnQuaW5mby5wYXRoU3RyICE9PSBwYXRoU3RyKSB7XG5cdFx0XHRcdFx0cmV0YWluLnB1c2goZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHJldGFpbi5sZW5ndGgpIHtcblx0XHRcdFx0YWxsRXZlbnRzW2BfY2hhbmdlOmRlbGVnYXRlZDoke2tleX1gXSA9IHJldGFpbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBhbGxFdmVudHNbYF9jaGFuZ2U6ZGVsZWdhdGVkOiR7a2V5fWBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqZWN0W2tleV0sIHBhdGgsIG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0LCBpbmZvKTtcblx0XHR9XG5cdH1cbn1cblxuLypcbmRlZmluZShbXG5cdCdtYXRyZXNoa2FfZGlyL2NvcmUvdmFyL2NvcmUnLFxuXHQnbWF0cmVzaGthX2Rpci9jb3JlL3Zhci9tYXAnXG5dLCBmdW5jdGlvbihjb3JlLCBtYXApIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfdW5kZWxlZ2F0ZUxpc3RlbmVyID0gY29yZS5fdW5kZWxlZ2F0ZUxpc3RlbmVyID1cblx0IGZ1bmN0aW9uKG9iamVjdCwgcGF0aCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGV2dERhdGEpIHtcblx0XHRpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9ICdvYmplY3QnKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0dmFyIGV4ZWN1dGVkID0gLyhbXlxcLl0rKVxcLiguKikvLmV4ZWMocGF0aCksXG5cdFx0XHRmaXJzdEtleSA9IGV4ZWN1dGVkID8gZXhlY3V0ZWRbMV0gOiBwYXRoLFxuXHRcdFx0cCA9IHBhdGgsXG5cdFx0XHRvYmplY3REYXRhID0gbWFwLmdldChvYmplY3QpLFxuXHRcdFx0ZXZlbnRzLFxuXHRcdFx0aTtcblxuXHRcdHBhdGggPSBleGVjdXRlZCA/IGV4ZWN1dGVkWzJdIDogJyc7XG5cblx0XHRpZiAoZmlyc3RLZXkpIHtcblx0XHRcdGlmIChmaXJzdEtleSA9PSAnKicpIHtcblx0XHRcdFx0aWYgKG9iamVjdC5pc01LQXJyYXkpIHtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdF91bmRlbGVnYXRlTGlzdGVuZXIob2JqZWN0LCBwYXRoLCAnYWRkJywgY2FsbGJhY2ssIGNvbnRleHQsIGV2dERhdGEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRldmVudHMgPSBvYmplY3REYXRhLmV2ZW50cy5hZGQgfHwgW107XG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChldmVudHNbaV0ucGF0aCA9PSBwKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRfdW5kZWxlZ2F0ZUxpc3RlbmVyKG9iamVjdCwgcGF0aCwgJ2FkZCcsIGV2ZW50c1tpXS5jYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvYmplY3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdFx0XHRpdGVtICYmIF91bmRlbGVnYXRlTGlzdGVuZXIoaXRlbSwgcGF0aCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9iamVjdC5pc01LT2JqZWN0KSB7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRfdW5kZWxlZ2F0ZUxpc3RlbmVyKG9iamVjdCwgcGF0aCwgJ2NoYW5nZScsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZXZlbnRzID0gb2JqZWN0RGF0YS5ldmVudHMuY2hhbmdlIHx8IFtdO1xuXHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXZlbnRzW2ldLnBhdGggPT0gcCkge1xuXHRcdFx0XHRcdFx0XHRcdF91bmRlbGVnYXRlTGlzdGVuZXIob2JqZWN0LCBwYXRoLCAnY2hhbmdlJywgZXZlbnRzW2ldLmNhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9iamVjdC5lYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0gJiYgX3VuZGVsZWdhdGVMaXN0ZW5lcihpdGVtLCBwYXRoLCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRcdGNvcmUuX3JlbW92ZUxpc3RlbmVyKG9iamVjdCwgJ2NoYW5nZTonICsgZmlyc3RLZXksIGNhbGxiYWNrLCBjb250ZXh0LCBldnREYXRhKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRldmVudHMgPSBvYmplY3REYXRhLmV2ZW50c1snY2hhbmdlOicgKyBmaXJzdEtleV0gfHwgW107XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGV2ZW50c1tpXS5wYXRoID09IHApIHtcblx0XHRcdFx0XHRcdFx0Y29yZS5fcmVtb3ZlTGlzdGVuZXIob2JqZWN0LCAnY2hhbmdlOicgKyBmaXJzdEtleSwgZXZlbnRzW2ldLmNhbGxiYWNrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiBvYmplY3RbZmlyc3RLZXldID09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0X3VuZGVsZWdhdGVMaXN0ZW5lcihvYmplY3RbZmlyc3RLZXldLCBwYXRoLCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29yZS5fcmVtb3ZlTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBjYWxsYmFjaywgY29udGV4dCwgZXZ0RGF0YSk7XG5cdFx0fVxuXHR9O1xufSk7XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9fZXZlbnRzL3VuZGVsZWdhdGVsaXN0ZW5lci5qc1xuICoqLyIsIi8qZXNsaW50IG5vLXNoYWRvdzogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIm5hbWVcIiwgXCJldmVudHNcIl0gfV0qL1xuaW1wb3J0IGRlZnMgZnJvbSAnLi4vX2NvcmUvZGVmcyc7XG5pbXBvcnQgdHJpZ2dlck9uZSBmcm9tICcuL3RyaWdnZXJvbmUnO1xuXG4vLyByZW1vdmVzIHNpbXBsZSBldmVudCBsaXN0ZW5lciB0byBhbiBvYmplY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG9iamVjdCwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGluZm8pIHtcblx0Y29uc3QgZGVmID0gZGVmcy5nZXQob2JqZWN0KTtcblxuXHQvLyBpZiBubyBkZWZpbml0aW9uIGRvIG5vdGhpbmdcblx0aWYgKCFkZWYpIHJldHVybjtcblxuXHRjb25zdCB7IGV2ZW50czogYWxsRXZlbnRzIH0gPSBkZWYsXG5cdFx0ZXZlbnRzID0gYWxsRXZlbnRzW25hbWVdLFxuXHRcdHJldGFpbiA9IFtdO1xuXG5cdC8vIGlmIGFsbCBldmVudHMgbmVlZCB0byBiZSByZW1vdmVkXG5cdGlmICh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWluZm8gfHwgIWluZm8ubm9UcmlnZ2VyKSB7XG5cdFx0XHRub2ZuLmZvck93bihhbGxFdmVudHMsIChldmVudHMsIG5hbWUpID0+IHtcblx0XHRcdFx0bm9mbi5mb3JFYWNoKGV2ZW50cywgZXZ0ID0+IHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVFdnREYXRhID0ge1xuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiBldnQuY2FsbGJhY2ssXG5cdFx0XHRcdFx0XHRjb250ZXh0OiBldnQuY29udGV4dFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHR0cmlnZ2VyT25lKG9iamVjdCwgYHJlbW92ZWV2ZW50OiR7bmFtZX1gLCByZW1vdmVFdnREYXRhKTtcblx0XHRcdFx0XHR0cmlnZ2VyT25lKG9iamVjdCwgJ3JlbW92ZWV2ZW50JywgcmVtb3ZlRXZ0RGF0YSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gcmVzdG9yZSBkZWZhdWx0IHZhbHVlIG9mIFwiZXZlbnRzXCJcblx0XHRkZWYuZXZlbnRzID0ge307XG5cdH0gZWxzZSBpZiAoZXZlbnRzKSB7IC8vIGlmIGV2ZW50cyB3aXRoIGdpdmVuIG5hbWUgaXMgZm91bmRcblx0XHRub2ZuLmZvckVhY2goZXZlbnRzLCBldnQgPT4ge1xuXHRcdFx0aWYgKGNhbGxiYWNrICYmIChjYWxsYmFjayAhPT0gZXZ0LmNhbGxiYWNrICYmIGNhbGxiYWNrLl9jYWxsYmFjayAhPT0gZXZ0LmNhbGxiYWNrKVxuXHRcdFx0XHR8fCAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBldnQuY29udGV4dCkpIHtcblx0XHRcdFx0Ly8ga2VlcCBldmVudFxuXHRcdFx0XHRyZXRhaW4ucHVzaChldnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVtb3ZlRXZ0RGF0YSA9IHtcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdGNhbGxiYWNrOiBldnQuY2FsbGJhY2ssXG5cdFx0XHRcdFx0Y29udGV4dDogZXZ0LmNvbnRleHRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRpZiAoIWluZm8gfHwgIWluZm8ubm9UcmlnZ2VyKSB7XG5cdFx0XHRcdFx0dHJpZ2dlck9uZShvYmplY3QsIGByZW1vdmVldmVudDoke25hbWV9YCwgcmVtb3ZlRXZ0RGF0YSk7XG5cdFx0XHRcdFx0dHJpZ2dlck9uZShvYmplY3QsICdyZW1vdmVldmVudCcsIHJlbW92ZUV2dERhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAocmV0YWluLmxlbmd0aCkge1xuXHRcdFx0YWxsRXZlbnRzW25hbWVdID0gcmV0YWluO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWxldGUgZGVmLmV2ZW50c1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm47XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9fZXZlbnRzL3JlbW92ZWxpc3RlbmVyLmpzXG4gKiovIiwiLy8gY3JlYXRlcyBuZXN0ZWQgb2JqZWN0IGJhc2VkIG9uIHBhdGggYW5kIGxhc3RWYWx1ZVxuLy8gZXhhbXBsZTogbWFrZU9iamVjdCgnYS5iLmMnLCA0MikgLT4ge2E6IHtiOiB7YzsgNDJ9fX1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VPYmplY3QocGF0aCA9ICcnLCBsYXN0VmFsdWUgPSB7fSkge1xuXHRwYXRoID0gcGF0aCA/IHBhdGguc3BsaXQoJy4nKSA6IFtdO1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0bGV0IG9iaiA9IHJlc3VsdCxcblx0XHRrZXk7XG5cblxuXHR3aGlsZSAocGF0aC5sZW5ndGggPiAxKSB7XG5cdFx0a2V5ID0gcGF0aC5zaGlmdCgpO1xuXHRcdG9iaiA9IG9ialtrZXldID0ge307XG5cdH1cblxuXHRvYmpbcGF0aC5zaGlmdCgpXSA9IGxhc3RWYWx1ZTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L2xpYi9tYWtlb2JqZWN0LmpzXG4gKiovIiwiaW1wb3J0IGFkZExpc3RlbmVyIGZyb20gJ3NyYy9fZXZlbnRzL2FkZGxpc3RlbmVyJztcbmltcG9ydCBkZWxlZ2F0ZUxpc3RlbmVyIGZyb20gJ3NyYy9fZXZlbnRzL2RlbGVnYXRlbGlzdGVuZXInO1xuaW1wb3J0IHVuZGVsZWdhdGVMaXN0ZW5lciBmcm9tICdzcmMvX2V2ZW50cy91bmRlbGVnYXRlbGlzdGVuZXInO1xuaW1wb3J0IHJlbW92ZUxpc3RlbmVyIGZyb20gJ3NyYy9fZXZlbnRzL3JlbW92ZWxpc3RlbmVyJztcbmltcG9ydCBtYWtlT2JqZWN0IGZyb20gJy4uLy4uL2xpYi9tYWtlb2JqZWN0JztcblxuZGVzY3JpYmUoJ0NoYW5nZSBldmVudCAoc2ltcGxlIGFuZCBkZWxlZ2F0ZWQpJywgZnVuY3Rpb24gdGVzdCgpIHtcblx0bGV0IGhhbmRsZXI7XG5cblx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0dGhpcy5oYW5kbGVyID0gKCkgPT4ge307XG5cdFx0c3B5T24odGhpcywgJ2hhbmRsZXInKTtcblx0XHRoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgc2ltcGxlJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IHsgeDogMSB9O1xuXG5cdFx0YWRkTGlzdGVuZXIob2JqLCAnY2hhbmdlOngnLCBoYW5kbGVyKTtcblx0XHRvYmoueCA9IDI7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ2ZpcmVzIChkZWxlZ2F0ZWQsIGEueCknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS54JywgMSk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EnLCAnY2hhbmdlOngnLCBoYW5kbGVyKTtcblx0XHRvYmouYS54ID0gMjtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgKGRlbGVnYXRlZCwgYS5iLngpJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IG1ha2VPYmplY3QoJ2EuYi54JywgMSk7XG5cblx0XHRkZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdjaGFuZ2U6eCcsIGhhbmRsZXIpO1xuXHRcdG9iai5hLmIueCA9IDI7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMgc2ltcGxlJywgKCkgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IHsgeDogMSB9O1xuXG5cdFx0YWRkTGlzdGVuZXIob2JqLCAnY2hhbmdlOngnLCBoYW5kbGVyKTtcblx0XHRyZW1vdmVMaXN0ZW5lcihvYmosICdjaGFuZ2U6eCcsIGhhbmRsZXIpO1xuXHRcdG9iai54ID0gMjtcblx0XHRleHBlY3QoaGFuZGxlcikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMgKGRlbGVnYXRlZCwgYS54KScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLngnLCAxKTtcblxuXHRcdGRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6eCcsIGhhbmRsZXIpO1xuXHRcdHVuZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhJywgJ2NoYW5nZTp4JywgaGFuZGxlcik7XG5cdFx0b2JqLmEueCA9IDI7XG5cdFx0ZXhwZWN0KGhhbmRsZXIpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmVzIChkZWxlZ2F0ZWQsIGEuYi54KScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIueCcsIDEpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnY2hhbmdlOngnLCBoYW5kbGVyKTtcblx0XHR1bmRlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iJywgJ2NoYW5nZTp4JywgaGFuZGxlcik7XG5cdFx0b2JqLmEuYi54ID0gMjtcblx0XHRleHBlY3QoaGFuZGxlcikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0Lyplc2xpbnQtZGlzYWJsZSAqL1xuXHR4aXQoJ2ZpcmVzIChkZWxlZ2F0ZWQsIGEuYi54KScsICgpID0+IHtcblx0XHRjb25zdCBvYmogPSBtYWtlT2JqZWN0KCdhLmIueCcsIDEpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnY2hhbmdlOngnLCBoYW5kbGVyKTtcblx0XHRvYmouYS5iLnggPSAyO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cblx0eGl0KCdmaXJlcyB3aGVuIGRlbGVnYXRlZCB0YXJnZXQgaXMgcmVhc3NpZ25lZCAoYS5iLmMueCwgcmVhc3NpZ24gYSknLCAoKSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gbWFrZU9iamVjdCgnYS5iLmMueCcsIDEpO1xuXG5cdFx0ZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdjaGFuZ2U6eCcsIGhhbmRsZXIpO1xuXHRcdG9iai5hID0gbWFrZU9iamVjdCgnYi5jLngnLCAyKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHR4aXQoJ2ZpcmVzIHdoZW4gZGVsZWdhdGVkIHRhcmdldCBpcyByZWFzc2lnbmVkIChhLmIuYy54LCByZWFzc2lnbiBiKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge1xuXHRcdFx0XHRhOiB7XG5cdFx0XHRcdFx0Yjoge1xuXHRcdFx0XHRcdFx0Yzoge1xuXHRcdFx0XHRcdFx0XHR4OiAxXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnY2hhbmdlOngnLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXHRcdG9iai5hLmIgPSB7XG5cdFx0XHRjOiB7XG5cdFx0XHRcdHg6IDJcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cdHhpdCgnZmlyZXMgd2hlbiBkZWxlZ2F0ZWQgdGFyZ2V0IGlzIHJlYXNzaWduZWQgKGEuYi5jLngsIHJlYXNzaWduIGMpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7XG5cdFx0XHRcdGE6IHtcblx0XHRcdFx0XHRiOiB7XG5cdFx0XHRcdFx0XHRjOiB7XG5cdFx0XHRcdFx0XHRcdHg6IDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdjaGFuZ2U6eCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cdFx0b2JqLmEuYi5jID0ge1xuXHRcdFx0eDogMlxuXHRcdH07XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0eGl0KCdhdm9pZHMgY29uZmxpY3RzJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7XG5cdFx0XHRcdGE6IHtcblx0XHRcdFx0XHRiOiB7XG5cdFx0XHRcdFx0XHRjOiB7XG5cdFx0XHRcdFx0XHRcdHg6IDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpID0gMDtcblxuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EnLCAnY2hhbmdlOmInLCBldnQgPT4gaSArPSAxZTExKTtcblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnY2hhbmdlOmMnLCBldnQgPT4gaSArPSAxZTEwKTtcblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmInLCAnY2hhbmdlOmMnLCBldnQgPT4gaSArPSAxZTkpO1xuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYicsICdjaGFuZ2U6YycsIGV2dCA9PiBpICs9IDFlOCk7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYS5iLmMnLCAnY2hhbmdlOngnLCBldnQgPT4gaSArPSAxZTcpO1xuXHRcdG1hZ2ljLl9kZWxlZ2F0ZUxpc3RlbmVyKG9iaiwgJ2EuYi5jJywgJ2NoYW5nZTp4JywgZXZ0ID0+IGkgKz0gMWU2KTtcblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdjaGFuZ2U6eCcsIGV2dCA9PiBpICs9IDFlNSk7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6YicsIGV2dCA9PiBpICs9IDFlNCk7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6YicsIGV2dCA9PiBpICs9IDFlMyk7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6YicsIGV2dCA9PiBpICs9IDFlMik7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6YicsIGV2dCA9PiBpICs9IDFlMSk7XG5cdFx0bWFnaWMuX2RlbGVnYXRlTGlzdGVuZXIob2JqLCAnYScsICdjaGFuZ2U6YicsIGV2dCA9PiBpICs9IDFlMCk7XG5cdFx0b2JqLmEgPSB7XG5cdFx0XHRiOiB7XG5cdFx0XHRcdGM6IHtcblx0XHRcdFx0XHR4OiAyXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGV4cGVjdChpKS50b0VxdWFsKDExMTExMTExMTExMSk7XG5cdH0pO1xuXG5cdHhpdCgnYWNjZXB0cyBudWxsIHRhcmdldCAoYS5iLmMsIHJlYXNzaWduIGIpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7XG5cdFx0XHRcdGE6IHtcblx0XHRcdFx0XHRiOiB7XG5cdFx0XHRcdFx0XHRjOiB7XG5cdFx0XHRcdFx0XHRcdHg6IDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5fZGVsZWdhdGVMaXN0ZW5lcihvYmosICdhLmIuYycsICdzb21lZXZlbnQnLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXG5cdFx0b2JqLmEuYiA9IG51bGw7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZShmYWxzZSk7XG5cdH0pO1xuXHQvKmVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvZXZlbnRzL2V2ZW50c19jaGFuZ2Vfc3BlYy5qc1xuICoqLyIsImltcG9ydCBhZGRMaXN0ZW5lciBmcm9tICdzcmMvX2V2ZW50cy9hZGRsaXN0ZW5lcic7XG5pbXBvcnQgcmVtb3ZlTGlzdGVuZXIgZnJvbSAnc3JjL19ldmVudHMvcmVtb3ZlbGlzdGVuZXInO1xuaW1wb3J0IHRyaWdnZXJPbmUgZnJvbSAnc3JjL19ldmVudHMvdHJpZ2dlcm9uZSc7XG5cbmRlc2NyaWJlKCdFdmVudHMgY29yZTogYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCB0cmlnZ2VyT25lJywgZnVuY3Rpb24gdGVzdCgpIHtcblx0bGV0IG9iaixcblx0XHRjdHgsXG5cdFx0aGFuZGxlcjtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRvYmogPSB7fTtcblx0XHRjdHggPSB7fTtcblx0XHR0aGlzLmhhbmRsZXIgPSAoKSA9PiB7fTtcblx0XHRzcHlPbih0aGlzLCAnaGFuZGxlcicpO1xuXHRcdGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cdH0pO1xuXG5cdGl0KCdmaXJlcycsICgpID0+IHtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdhdm9pZHMgY29uZmxpY3RzJywgKCkgPT4ge1xuXHRcdGxldCBpID0gMDtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCAoKSA9PiAoaSArPSAxZTApKTtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCAoKSA9PiAoaSArPSAxZTEpKTtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCAoKSA9PiAoaSArPSAxZTIpKTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGkpLnRvRXF1YWwoMTExKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMgKG5vIGFyZ3MpJywgKCkgPT4ge1xuXHRcdGFkZExpc3RlbmVyKG9iaiwgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHJlbW92ZUxpc3RlbmVyKG9iaik7XG5cdFx0dHJpZ2dlck9uZShvYmosICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMgYnkgbmFtZScsICgpID0+IHtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHRyZW1vdmVMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnKTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBieSBjYWxsYmFjaycsICgpID0+IHtcblx0XHRhZGRMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHRyZW1vdmVMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCBoYW5kbGVyKTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBieSBjYWxsYmFjayBidXQga2VlcHMgd2hlbiBjYWxsYmFja3MgYXJlIG5vdCBzYW1lJywgKCkgPT4ge1xuXHRcdGFkZExpc3RlbmVyKG9iaiwgJ3NvbWVldmVudCcsIGhhbmRsZXIpO1xuXHRcdHJlbW92ZUxpc3RlbmVyKG9iaiwgJ3NvbWVldmVudCcsICgpID0+IHt9KTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmVzIGJ5IGNhbGxiYWNrIGFuZCBjb250ZXh0JywgKCkgPT4ge1xuXHRcdGFkZExpc3RlbmVyKG9iaiwgJ3NvbWVldmVudCcsIGhhbmRsZXIsIGN0eCk7XG5cdFx0cmVtb3ZlTGlzdGVuZXIob2JqLCAnc29tZWV2ZW50JywgaGFuZGxlciwgY3R4KTtcblx0XHR0cmlnZ2VyT25lKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBieSBjYWxsYmFjayBidXQga2VlcHMgd2hlbiBjb250ZXh0cyBhcmUgbm90IHNhbWUnLCAoKSA9PiB7XG5cdFx0YWRkTGlzdGVuZXIob2JqLCAnc29tZWV2ZW50JywgaGFuZGxlciwgY3R4KTtcblx0XHRyZW1vdmVMaXN0ZW5lcihvYmosICdzb21lZXZlbnQnLCBoYW5kbGVyLCB7fSk7XG5cdFx0dHJpZ2dlck9uZShvYmosICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcblxuXHR4aXQoJ3JlbW92ZXMgYnkgaG93VG9SZW1vdmUgKG5vdCBkb2N1bWVudGVkIGNvcmUgZmVhdHVyZSknLCAoKSA9PiB7XG5cdFx0Lyplc2xpbnQtZGlzYWJsZSAqL1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZSxcblx0XHRcdGYgPSBldnQgPT4gYm9vbCA9IHRydWUsXG5cdFx0XHRvbkRhdGEgPSB7XG5cdFx0XHRcdGhvd1RvUmVtb3ZlKG9uRGF0YSwgb2ZmRGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBvZmZEYXRhLnggPT09IDQyO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0bWFnaWMuX2FkZExpc3RlbmVyKG9iaiwgJ3NvbWVldmVudDEnLCBmLCBudWxsLCBvbkRhdGEpO1xuXHRcdG1hZ2ljLl9yZW1vdmVMaXN0ZW5lcihvYmosICdzb21lZXZlbnQxJywgbnVsbCwgbnVsbCwge1xuXHRcdFx0eDogNDJcblx0XHR9KTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnc29tZWV2ZW50MScpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXG5cdFx0bWFnaWMuX2FkZExpc3RlbmVyKG9iaiwgJ3NvbWVldmVudDInLCBmLCBudWxsLCBvbkRhdGEpO1xuXHRcdG1hZ2ljLl9yZW1vdmVMaXN0ZW5lcihvYmosICdzb21lZXZlbnQyJywgbnVsbCwgbnVsbCwge1xuXHRcdFx0eDogNDNcblx0XHR9KTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnc29tZWV2ZW50MicpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdFx0Lyplc2xpbnQtZW5hYmxlICovXG5cdH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc3BlYy9ldmVudHMvZXZlbnRzX2NvcmVfc3BlYy5qc1xuICoqLyIsIi8qZXNsaW50LWRpc2FibGUgKi9cblxueGRlc2NyaWJlKFwiRXZlbnRzIGNvcmU6IF9hZGRET01MaXN0ZW5lciwgX3JlbW92ZURPTUxpc3RlbmVyXCIsICgpID0+IHtcblx0bGV0IHEgPSAocywgYykgPT4ge1xuXHRcdGxldCByZXN1bHQgPSAkKHMsIGMpWzBdIHx8IG51bGw7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0cmVzdWx0LmNsaWNrID0gcmVzdWx0LmNsaWNrIHx8ICgoKSA9PiB7XG5cdFx0XHRcdGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKTtcblx0XHRcdFx0ZXYuaW5pdE1vdXNlRXZlbnQoXG5cdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdHRydWUgLyogYnViYmxlICovICwgdHJ1ZSAvKiBjYW5jZWxhYmxlICovICxcblx0XHRcdFx0XHR3aW5kb3csIG51bGwsXG5cdFx0XHRcdFx0MCwgMCwgMCwgMCwgLyogY29vcmRpbmF0ZXMgKi9cblx0XHRcdFx0XHRmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgLyogbW9kaWZpZXIga2V5cyAqL1xuXHRcdFx0XHRcdDAgLypsZWZ0Ki8gLCBudWxsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlc3VsdC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHRcdH0pXG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCQuY3JlYXRlKHtcblx0XHR0YWdOYW1lOiAnRElWJyxcblx0XHRpZDogJ2QtdGVzdCcsXG5cdFx0aW5uZXJIVE1MOiBgXG5cdFx0XHQ8ZGl2IGlkPVwiZC10ZXN0LTFcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImQtdGVzdC0yXCI+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH0pKTtcblxuXG5cblx0aXQoJ2ZpcmVzIChubyBzZWxlY3RvciknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jylcblx0XHRtYWdpYy5fYWRkRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsIG51bGwsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblxuXHRcdHEoJyNkLXRlc3QnKS5jbGljaygpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmVzIChubyBzZWxlY3RvciknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuX2FkZERPTUxpc3RlbmVyKG9iaiwgJ3gnLCAnY2xpY2snLCBudWxsLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXHRcdG1hZ2ljLl9yZW1vdmVET01MaXN0ZW5lcihvYmosICd4JywgJ2NsaWNrJyk7XG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jyk7XG5cblx0XHRxKCcjZC10ZXN0JykuY2xpY2soKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKGZhbHNlKTtcblx0fSk7XG5cblx0aXQoJ2ZpcmVzICh1c2Ugc2VsZWN0b3IpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLmJpbmROb2RlKG9iaiwgJ3gnLCAnI2QtdGVzdCcpXG5cdFx0bWFnaWMuX2FkZERPTUxpc3RlbmVyKG9iaiwgJ3gnLCAnY2xpY2snLCAnLmQtdGVzdC0yJywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdHEoJy5kLXRlc3QtMicpLmNsaWNrKCk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXG5cdGl0KCdhZGRzICh1c2Ugc2VsZWN0b3IpIGFuZCByZW1vdmVzIChubyBzZWxlY3RvciknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jylcblx0XHRtYWdpYy5fYWRkRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsICcuZC10ZXN0LTInLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXHRcdG1hZ2ljLl9yZW1vdmVET01MaXN0ZW5lcihvYmosICd4JywgJ2NsaWNrJyk7XG5cblx0XHRxKCcuZC10ZXN0LTInKS5jbGljaygpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgnYWRkcyAodXNlIHNlbGVjdG9yKSB0aGVuIGJpbmRzIHRoZW4gcmVtb3ZlcyAobm8gc2VsZWN0b3IpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jyk7XG5cdFx0bWFnaWMuX2FkZERPTUxpc3RlbmVyKG9iaiwgJ3gnLCAnY2xpY2snLCAnLmQtdGVzdC0yJywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblx0XHRtYWdpYy5fcmVtb3ZlRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycpO1xuXG5cdFx0cSgnLmQtdGVzdC0yJykuY2xpY2soKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKGZhbHNlKTtcblx0fSk7XG5cblx0aXQoJ3RyaWdnZXJzIERPTSBldmVudCcsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblxuXHRcdG1hZ2ljLmJpbmROb2RlKG9iaiwgJ3gnLCAnI2QtdGVzdCcpO1xuXHRcdG1hZ2ljLl9hZGRET01MaXN0ZW5lcihvYmosICd4JywgJ2NsaWNrJywgbnVsbCwgKGQxLCBkMikgPT4gYm9vbCA9IGQxID09PSAxICYmIGQyID09PSAyKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2NsaWNrOjp4JywgMSwgMik7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3RyaWdnZXJzIERPTSBldmVudCB3aXRoIHNwZWNpZmllZCBzZWxlY3RvcicsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblxuXHRcdG1hZ2ljLmJpbmROb2RlKG9iaiwgJ3gnLCAnI2QtdGVzdCcpO1xuXHRcdG1hZ2ljLl9hZGRET01MaXN0ZW5lcihvYmosICd4JywgJ2NsaWNrJywgJy5kLXRlc3QtMicsIChkMSwgZDIpID0+IGJvb2wgPSBkMSA9PT0gMSAmJiBkMiA9PT0gMik7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdjbGljazo6eCguZC10ZXN0LTIpJywgMSwgMik7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3RyaWdnZXJzIERPTSBldmVudCB3aXRoIHNwZWNpZmllZCBzZWxlY3RvciAoYnViYmxpbmcgdGVzdCknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cblx0XHRtYWdpYy5iaW5kTm9kZShvYmosICd4JywgJyNkLXRlc3QnKTtcblx0XHRtYWdpYy5fYWRkRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsIG51bGwsIChkMSwgZDIpID0+IGJvb2wgPSBkMSA9PT0gMSAmJiBkMiA9PT0gMik7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdjbGljazo6eCguZC10ZXN0LTIpJywgMSwgMik7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXHRpdCgncmVtb3ZlcyBkZWxlZ2F0ZWQnLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jyk7XG5cdFx0bWFnaWMuX2FkZERPTUxpc3RlbmVyKG9iaiwgJ3gnLCAnY2xpY2snLCAnLmQtdGVzdC0yJywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblx0XHRtYWdpYy5fcmVtb3ZlRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsICcuZC10ZXN0LTInKTtcblxuXHRcdHEoJy5kLXRlc3QtMicpLmNsaWNrKCk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cdGl0KCdyZW1vdmVzIGRlbGVnYXRlZCBhbmQgZG9lc25cXCd0IHJlbW92ZSBldmVudHMgZnJvbSBvdGhlciBub2RlcycsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5iaW5kTm9kZShvYmosICd4JywgJyNkLXRlc3QnKTtcblx0XHRtYWdpYy5fYWRkRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsICcuZC10ZXN0LTInLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXHRcdG1hZ2ljLl9yZW1vdmVET01MaXN0ZW5lcihvYmosICd4JywgJ2NsaWNrJywgJy5ibGFoJyk7XG5cblx0XHRxKCcuZC10ZXN0LTInKS5jbGljaygpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cblx0aXQoJ3RyaWdnZXJzIGV2ZW50IHZpYSBcInRyaWdnZXJcIiBtZXRob2QnLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jylcblx0XHRtYWdpYy5fYWRkRE9NTGlzdGVuZXIob2JqLCAneCcsICdjbGljaycsIG51bGwsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2NsaWNrOjp4Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvZXZlbnRzL2V2ZW50c19kb21fc3BlYy5qc1xuICoqLyIsIi8qZXNsaW50LWRpc2FibGUgKi9cbnhkZXNjcmliZSgnRXZlbnRzIHN1bW1hcnkgKG9uLCBvZmYpJywgKCkgPT4ge1xuXHRsZXQgcSA9IChzLCBjKSA9PiB7XG5cdFx0bGV0IHJlc3VsdCA9ICQocywgYylbMF0gfHwgbnVsbDtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXN1bHQuY2xpY2sgPSByZXN1bHQuY2xpY2sgfHwgKCgpID0+IHtcblx0XHRcdFx0bGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpO1xuXHRcdFx0XHRldi5pbml0TW91c2VFdmVudChcblx0XHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdFx0dHJ1ZSAvKiBidWJibGUgKi8gLCB0cnVlIC8qIGNhbmNlbGFibGUgKi8gLFxuXHRcdFx0XHRcdHdpbmRvdywgbnVsbCxcblx0XHRcdFx0XHQwLCAwLCAwLCAwLCAvKiBjb29yZGluYXRlcyAqL1xuXHRcdFx0XHRcdGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAvKiBtb2RpZmllciBrZXlzICovXG5cdFx0XHRcdFx0MCAvKmxlZnQqLyAsIG51bGxcblx0XHRcdFx0KTtcblx0XHRcdFx0cmVzdWx0LmRpc3BhdGNoRXZlbnQoZXYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJC5jcmVhdGUoe1xuXHRcdHRhZ05hbWU6ICdESVYnLFxuXHRcdGlkOiAncy10ZXN0Jyxcblx0XHRpbm5lckhUTUw6IGBcblx0XHRcdDxkaXYgaWQ9XCJzLXRlc3QtMVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicy10ZXN0LTJcIj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGBcblx0fSkpO1xuXG5cdG5vZGUuY2xpY2sgPSBub2RlLmNsaWNrIHx8IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XG5cdH1cblxuXHRpdCgnZmlyZXMnLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXHRcdG1hZ2ljLm9uKG9iaiwgJ3NvbWVldmVudCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXHRpdCgnZmlyZXMgb24gTWF0cmVzaGthIGluc3RhbmNlJywgKCkgPT4ge1xuXHRcdGxldCBtayA9IG5ldyBNSyxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblx0XHRtay5vbignc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblx0XHRtay50cmlnZ2VyKCdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMnLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlLFxuXHRcdFx0ZiA9IGV2dCA9PiBib29sID0gdHJ1ZTtcblxuXHRcdG1hZ2ljLm9uKG9iaiwgJ3NvbWVldmVudCcsIGYpO1xuXHRcdG1hZ2ljLm9mZihvYmosICdzb21lZXZlbnQnKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgncmVtb3ZlcyBvbiBNYXRyZXNoa2EgaW5zdGFuY2UnLCAoKSA9PiB7XG5cdFx0bGV0IG1rID0gbmV3IE1LLFxuXHRcdFx0Ym9vbCA9IGZhbHNlLFxuXHRcdFx0ZiA9IGV2dCA9PiBib29sID0gdHJ1ZTtcblxuXHRcdG1rLm9uKCdzb21lZXZlbnQnLCBmKTtcblx0XHRtay5vZmYoJ3NvbWVldmVudCcpO1xuXHRcdG1rLnRyaWdnZXIoJ3NvbWVldmVudCcpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgZGVsZWdhdGVkJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7XG5cdFx0XHRcdGE6IHtcblx0XHRcdFx0XHRiOiB7XG5cdFx0XHRcdFx0XHRjOiB7fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLm9uKG9iaiwgJ2EuYi5jQHNvbWVldmVudCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmouYS5iLmMsICdzb21lZXZlbnQnKTtcblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXG5cdGl0KCdyZW1vdmVzIGRlbGVnYXRlZCcsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge1xuXHRcdFx0XHRhOiB7XG5cdFx0XHRcdFx0Yjoge1xuXHRcdFx0XHRcdFx0Yzoge31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5vbihvYmosICdhLmIuY0Bzb21lZXZlbnQnLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXHRcdG1hZ2ljLm9mZihvYmosICdhLmIuY0Bzb21lZXZlbnQnKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLmEuYi5jLCAnc29tZWV2ZW50Jyk7XG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgnZmlyZXMgKG5vIHNlbGVjdG9yKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5iaW5kTm9kZShvYmosICd4JywgJyNkLXRlc3QnKVxuXHRcdG1hZ2ljLm9uKG9iaiwgJ2NsaWNrOjp4JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXG5cdFx0cSgnI2QtdGVzdCcpLmNsaWNrKCk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ3JlbW92ZXMgKG5vIHNlbGVjdG9yKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5iaW5kTm9kZShvYmosICd4JywgJyNkLXRlc3QnKTtcblx0XHRtYWdpYy5vbihvYmosICdjbGljazo6eCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cdFx0bWFnaWMub2ZmKG9iaiwgJ2NsaWNrOjp4Jyk7XG5cblx0XHRxKCcjZC10ZXN0JykuY2xpY2soKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKGZhbHNlKTtcblx0fSk7XG5cblx0aXQoJ2ZpcmVzICh1c2Ugc2VsZWN0b3IpJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdG1hZ2ljLmJpbmROb2RlKG9iaiwgJ3gnLCAnI2QtdGVzdCcpO1xuXHRcdG1hZ2ljLm9uKG9iaiwgJ2NsaWNrOjp4KC5kLXRlc3QtMiknLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXG5cdFx0cSgnLmQtdGVzdC0yJykuY2xpY2soKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgnd29ya3Mgd2l0aCBcIipcIiBldmVudHMgKE1LLkFycmF5KScsICgpID0+IHtcblx0XHRsZXQgb2JqID0gbmV3IE1LLkFycmF5KCksXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5vbihvYmosICdAc29tZWV2ZW50JywgZXZ0ID0+IGJvb2wgPSB0cnVlKTtcblxuXHRcdG9iai5wdXNoKHt9KTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqWzBdLCAnc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoYm9vbCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblx0aXQoJ2ZpcmVzIChubyBzZWxlY3RvciknLCAoKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0Ym9vbCA9IGZhbHNlO1xuXG5cdFx0bWFnaWMuYmluZE5vZGUob2JqLCAneCcsICcjZC10ZXN0Jylcblx0XHRtYWdpYy5vbihvYmosICdjbGljazo6eCcsIGV2dCA9PiBib29sID0gdHJ1ZSk7XG5cblxuXHRcdHEoJyNkLXRlc3QnKS5jbGljaygpO1xuXG5cdFx0ZXhwZWN0KGJvb2wpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cdGl0KCdmaXJlcyAodXNlIHNlbGVjdG9yKScsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRtYWdpYy5iaW5kTm9kZShvYmosICd4JywgJyNkLXRlc3QnKVxuXHRcdG1hZ2ljLm9uKG9iaiwgJ2NsaWNrOjp4KC5kLXRlc3QtMiknLCBldnQgPT4gYm9vbCA9IHRydWUpO1xuXG5cdFx0cSgnLmQtdGVzdC0yJykuY2xpY2soKTtcblxuXHRcdGV4cGVjdChib29sKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXHRpdCgndHJpZ2dlcnMgb25jZScsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRpID0gMCxcblx0XHRcdGYgPSBldnQgPT4gaSsrO1xuXG5cdFx0bWFnaWMub25jZShvYmosICdzb21lZXZlbnQnLCBmKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ3NvbWVldmVudCcpO1xuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnc29tZWV2ZW50Jyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdzb21lZXZlbnQnKTtcblxuXHRcdGV4cGVjdChpKS50b0JlKDEpO1xuXHR9KTtcblxuXHRpdCgnYWxsb3dzIHRvIHBhc3MgbmFtZS1oYW5kbGVyIG9iamVjdCB0byBcIm9uY2VcIicsICgpID0+IHtcblx0XHRsZXQgb2JqID0ge30sXG5cdFx0XHRpID0gMCxcblx0XHRcdGogPSAwLFxuXHRcdFx0ZjEgPSBldnQgPT4gaSsrLFxuXHRcdFx0ZjIgPSBldnQgPT4gaisrO1xuXG5cdFx0bWFnaWMub25jZShvYmosIHtcblx0XHRcdGZvbzogZjEsXG5cdFx0XHRiYXI6IGYyXG5cdFx0fSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2ZvbycpO1xuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnZm9vJyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdmb28nKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnYmFyJyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdiYXInKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2JhcicpO1xuXG5cdFx0ZXhwZWN0KGkpLnRvQmUoMSk7XG5cdFx0ZXhwZWN0KGopLnRvQmUoMSk7XG5cdH0pO1xuXG5cdGl0KCd0cmlnZ2VycyBvbmNlIG9uIE1hdHJlc2hrYSBpbnN0YW5jZScsICgpID0+IHtcblx0XHRsZXQgbWsgPSBuZXcgTUssXG5cdFx0XHRpID0gMCxcblx0XHRcdGYgPSBldnQgPT4gaSsrO1xuXG5cdFx0bWsub25jZSgnc29tZWV2ZW50JywgZik7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cblx0XHRleHBlY3QoaSkudG9CZSgxKTtcblx0fSk7XG5cblxuXHRpdCgnb25EZWJvdW5jZSB3b3JrcycsIGRvbmUgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZiA9IGV2dCA9PiBpKys7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGV4cGVjdChpKS50b0JlKDEpO1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH0sIDIwMCk7XG5cblx0XHRtYWdpYy5vbkRlYm91bmNlKG9iaiwgJ3NvbWVldmVudCcsIGYpO1xuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnc29tZWV2ZW50Jyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdzb21lZXZlbnQnKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ3NvbWVldmVudCcpO1xuXHR9KTtcblxuXHRpdCgnYWxsb3dzIHRvIHBhc3MgbmFtZS1oYW5kbGVyIG9iamVjdCB0byBcIm9uRGVib3VuY2VcIicsIChkb25lKSA9PiB7XG5cdFx0bGV0IG9iaiA9IHt9LFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRqID0gMCxcblx0XHRcdGYxID0gZXZ0ID0+IGkrKyxcblx0XHRcdGYyID0gZXZ0ID0+IGorKztcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZXhwZWN0KGkpLnRvQmUoMSk7XG5cdFx0XHRleHBlY3QoaikudG9CZSgxKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9LCAyMDApO1xuXG5cdFx0bWFnaWMub25EZWJvdW5jZShvYmosIHtcblx0XHRcdGZvbzogZjEsXG5cdFx0XHRiYXI6IGYyXG5cdFx0fSk7XG5cblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2ZvbycpO1xuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnZm9vJyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdmb28nKTtcblxuXHRcdG1hZ2ljLnRyaWdnZXIob2JqLCAnYmFyJyk7XG5cdFx0bWFnaWMudHJpZ2dlcihvYmosICdiYXInKTtcblx0XHRtYWdpYy50cmlnZ2VyKG9iaiwgJ2JhcicpO1xuXHR9KTtcblxuXHRpdCgnb25EZWJvdW5jZSB3b3JrcyBvbiBNYXRyZXNoa2EgaW5zdGFuY2UnLCBkb25lID0+IHtcblx0XHRsZXQgbWsgPSBuZXcgTUssXG5cdFx0XHRpID0gMCxcblx0XHRcdGYgPSBldnQgPT4gaSsrO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRleHBlY3QoaSkudG9CZSgxKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9LCA4MDApO1xuXG5cdFx0bWsub25EZWJvdW5jZSgnc29tZWV2ZW50JywgZik7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cdFx0bWsudHJpZ2dlcignc29tZWV2ZW50Jyk7XG5cdH0pO1xuXG5cblx0aXQoJ2FsbG93cyB0byBwYXNzIG5hbWUtaGFuZGxlciBvYmplY3QgdG8gXCJvblwiIGFuZCBcIm9mZlwiJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0aGFuZGxlcnMgPSB7XG5cdFx0XHRcdGZvbzogKCkgPT4gaSsrLFxuXHRcdFx0XHRiYXI6ICgpID0+IGkrK1xuXHRcdFx0fTtcblxuXHRcdE1LLm9uKG9iaiwgaGFuZGxlcnMpO1xuXG5cdFx0TUsudHJpZ2dlcihvYmosICdmb28nKTtcblx0XHRNSy50cmlnZ2VyKG9iaiwgJ2JhcicpO1xuXG5cdFx0ZXhwZWN0KGkpLnRvQmUoMik7XG5cblx0XHRNSy5vZmYob2JqLCBoYW5kbGVycyk7XG5cblx0XHRleHBlY3QoaSkudG9CZSgyKTtcblx0fSk7XG5cblxuXHRpdCgnYWxsb3dzIHRvIGZsaXAgY29udGV4dCBhbmQgdHJpZ2dlck9uSW5pdCAob24pJywgKCkgPT4ge1xuXHRcdGxldCBvYmogPSB7fSxcblx0XHRcdHRoaXNBcmcgPSB7fSxcblx0XHRcdGJvb2wgPSBmYWxzZSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0TUsub24ob2JqLCAnZm9vJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRleHBlY3QodGhpcykudG9FcXVhbCh0aGlzQXJnKTtcblx0XHRcdGkrKztcblx0XHR9LCB0cnVlLCB0aGlzQXJnKTtcblxuXHRcdE1LLm9uKG9iaiwgJ2JhcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXhwZWN0KHRoaXMpLnRvRXF1YWwodGhpc0FyZyk7XG5cdFx0XHRpKys7XG5cdFx0fSwgdGhpc0FyZywgdHJ1ZSk7XG5cblx0XHRleHBlY3QoaSkudG9CZSgyKTtcblx0fSk7XG5cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NwZWMvZXZlbnRzL2V2ZW50c19zdW1tYXJ5X3NwZWMuanNcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vX2JpbmRpbmdzL2xpYi5qc1wiOiA0NSxcblx0XCIuL19jb3JlL2RlZmluZXByb3AuanNcIjogMzUsXG5cdFwiLi9fY29yZS9kZWZzLmpzXCI6IDMzLFxuXHRcIi4vX2NvcmUvaW5pdC5qc1wiOiAzMixcblx0XCIuL19kb20vZGVmYXVsdC1kb2xsYXIuanNcIjogNDYsXG5cdFwiLi9fZG9tL2luZGV4LmpzXCI6IDQ3LFxuXHRcIi4vX2V2ZW50cy9hZGRsaXN0ZW5lci5qc1wiOiAzMSxcblx0XCIuL19ldmVudHMvZGVsZWdhdGVsaXN0ZW5lci5qc1wiOiAzMCxcblx0XCIuL19ldmVudHMvcmVtb3ZlbGlzdGVuZXIuanNcIjogMzgsXG5cdFwiLi9fZXZlbnRzL3RyaWdnZXJvbmUuanNcIjogMzQsXG5cdFwiLi9fZXZlbnRzL3VuZGVsZWdhdGVsaXN0ZW5lci5qc1wiOiAzNyxcblx0XCIuL2FycmF5LmpzXCI6IDQ4LFxuXHRcIi4vYmluZGVycy5qc1wiOiA0OSxcblx0XCIuL2JpbmRub2RlLmpzXCI6IDUwLFxuXHRcIi4vYnF1ZXJ5L19kYXRhLmpzXCI6IDExLFxuXHRcIi4vYnF1ZXJ5L19odG1sMm5vZGVsaXN0LmpzXCI6IDUsXG5cdFwiLi9icXVlcnkvX2luaXQuanNcIjogNCxcblx0XCIuL2JxdWVyeS9hZGQuanNcIjogMTQsXG5cdFwiLi9icXVlcnkvY3JlYXRlLmpzXCI6IDksXG5cdFwiLi9icXVlcnkvZmluZC5qc1wiOiAxNixcblx0XCIuL2JxdWVyeS9pbmRleC5qc1wiOiAzLFxuXHRcIi4vYnF1ZXJ5L2lzLmpzXCI6IDEzLFxuXHRcIi4vYnF1ZXJ5L25vdC5qc1wiOiAxNSxcblx0XCIuL2JxdWVyeS9vZmYuanNcIjogMTIsXG5cdFwiLi9icXVlcnkvb24uanNcIjogMTAsXG5cdFwiLi9icXVlcnkvb25lLmpzXCI6IDgsXG5cdFwiLi9icXVlcnkvcGFyc2VodG1sLmpzXCI6IDcsXG5cdFwiLi9jbGFzcy5qc1wiOiAyNyxcblx0XCIuL2V4dGVuZC5qc1wiOiA2LFxuXHRcIi4vZ2V0LmpzXCI6IDUxLFxuXHRcIi4vaW5kZXguanNcIjogNTIsXG5cdFwiLi9tYWdpYy5qc1wiOiA1NSxcblx0XCIuL21hdHJlc2hrYS9pbmRleC5qc1wiOiA1Myxcblx0XCIuL29iamVjdC5qc1wiOiA1NCxcblx0XCIuL29uLmpzXCI6IDU2LFxuXHRcIi4vc2V0LmpzXCI6IDM2XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYyAuKlxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19iaW5kaW5ncy9saWIuanNcbiAqKi8iLCIvKmdsb2JhbCAkKi9cbmltcG9ydCBiUXVlcnkgZnJvbSAnLi4vYnF1ZXJ5JztcblxuY29uc3QgbmVlZGVkTWV0aG9kcyA9ICdvbiBvZmYgaXMgYWRkIG5vdCBmaW5kJy5zcGxpdCgvXFxzLyk7XG5cbmNvbnN0IGdsb2JhbERvbGxhciA9IHR5cGVvZiAkID09PSAnZnVuY3Rpb24nID8gJCA6IG51bGw7XG5sZXQgdXNlR2xvYmFsRG9sbGFyID0gdHJ1ZTtcblxuaWYgKGdsb2JhbERvbGxhcikge1xuXHRjb25zdCBmbiA9IGdsb2JhbERvbGxhci5mbiB8fCBnbG9iYWxEb2xsYXIucHJvdG90eXBlO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5lZWRlZE1ldGhvZHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoIWZuW25lZWRlZE1ldGhvZHNbaV1dKSB7XG5cdFx0XHR1c2VHbG9iYWxEb2xsYXIgPSBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICghZ2xvYmFsRG9sbGFyLnBhcnNlSFRNTCkge1xuXHRcdGdsb2JhbERvbGxhci5wYXJzZUhUTUwgPSBiUXVlcnkucGFyc2VIVE1MO1xuXHR9XG59IGVsc2Uge1xuXHR1c2VHbG9iYWxEb2xsYXIgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlR2xvYmFsRG9sbGFyID8gZ2xvYmFsRG9sbGFyIDogYlF1ZXJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX2RvbS9kZWZhdWx0LWRvbGxhci5qc1xuICoqLyIsImltcG9ydCBkZWZhdWx0RG9sbGFyIGZyb20gJy4vZGVmYXVsdC1kb2xsYXInO1xuXG5jb25zdCBkb20gPSB7XG5cdCQ6IGRlZmF1bHREb2xsYXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19kb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAxO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXkuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAxO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmluZGVycy5qc1xuICoqLyIsIi8vIERlYm91bmNlZCFcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmROb2RlKCkge1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iaW5kbm9kZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldChvYmplY3QsIGtleSkge1xuXHRyZXR1cm4gb2JqZWN0W2tleV07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZXQuanNcbiAqKi8iLCJpbXBvcnQgTWF0cmVzaGthIGZyb20gJy4vbWF0cmVzaGthJztcbmltcG9ydCBNYXRyZXNoa2FBcnJheSBmcm9tICcuL2FycmF5JztcbmltcG9ydCBNYXRyZXNoa2FPYmplY3QgZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IENsYXNzIGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IGJpbmRlcnMgZnJvbSAnLi9iaW5kZXJzJztcblxuTWF0cmVzaGthLkFycmF5ID0gTWF0cmVzaGthQXJyYXk7XG5NYXRyZXNoa2EuT2JqZWN0ID0gTWF0cmVzaGthT2JqZWN0O1xuTWF0cmVzaGthLkNsYXNzID0gQ2xhc3M7XG5NYXRyZXNoa2EuYmluZGVycyA9IGJpbmRlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJlc2hrYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGV4dGVuZCBmcm9tICcuLi9leHRlbmQnO1xuaW1wb3J0IENsYXNzIGZyb20gJy4uL2NsYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3Moe1xuXHQvLyBpbnN0YW5jZSBwcm9wZXJpZXMgYW5kIG1ldGhvZHNcblxufSwge1xuXHQvLyBzdGF0aWMgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuXHRleHRlbmRcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWF0cmVzaGthL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgMTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL29iamVjdC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IDE7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWdpYy5qc1xuICoqLyIsIlxuLy8gL14oKFteQF0rKUApPygoLis/KSg6OihbXlxcKFxcKV0rKT8oXFwoKC4qKVxcKSk/KT8pPyQvXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uKCkge1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9vbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=