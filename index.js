'use strict';

var whichBoxedPrimitive = require('which-boxed-primitive');
var whichCollection = require('which-collection');
var whichTypedArray = require('which-typed-array');
var isArray = require('isarray');
var isDate = require('is-date-object');
var isRegex = require('is-regex');
var name = require('function.prototype.name');
var isGeneratorFunction = require('is-generator-function');
var isAsyncFunction = require('is-async-fn');

var $Object = Object;

module.exports = function whichBuiltinType(value) {
	if (value == null) {
		return value;
	}
	var which = whichBoxedPrimitive($Object(value)) || whichCollection(value) || whichTypedArray(value);
	if (which) {
		return which;
	}
	if (isArray(value)) {
		return 'Array';
	}
	if (isDate(value)) {
		return 'Date';
	}
	if (isRegex(value)) {
		return 'RegExp';
	}
	if (typeof value === 'function') {
		if (isGeneratorFunction(value)) {
			return 'GeneratorFunction';
		}
		if (isAsyncFunction(value)) {
			return 'AsyncFunction';
		}
		return 'Function';
	}
	if (typeof value.constructor === 'function') {
		return name(value.constructor);
	}
	return 'Object';
};
