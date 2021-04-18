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
var hasSymbols = require('has-symbols')();
var toStringTag = hasSymbols && Symbol.toStringTag;

var $Object = Object;

var isKnownBuiltin = function isKnownBuiltinName(builtinName) {
	return builtinName
		// primitives
		&& builtinName !== 'BigInt'
		&& builtinName !== 'Boolean'
		&& builtinName !== 'Null'
		&& builtinName !== 'Number'
		&& builtinName !== 'String'
		&& builtinName !== 'Symbol'
		&& builtinName !== 'Undefined'
		// namespaces
		&& builtinName !== 'Math'
		&& builtinName !== 'JSON'
		&& builtinName !== 'Reflect'
		&& builtinName !== 'Atomics'
		// collections
		&& builtinName !== 'Map'
		&& builtinName !== 'Set'
		&& builtinName !== 'WeakMap'
		&& builtinName !== 'WeakSet'
		// typed arrays
		&& builtinName !== 'BigInt64Array'
		&& builtinName !== 'BigUint64Array'
		&& builtinName !== 'Float32Array'
		&& builtinName !== 'Float64Array'
		&& builtinName !== 'Int16Array'
		&& builtinName !== 'Int32Array'
		&& builtinName !== 'Int8Array'
		&& builtinName !== 'Uint16Array'
		&& builtinName !== 'Uint32Array'
		&& builtinName !== 'Uint8Array'
		&& builtinName !== 'Uint8ClampedArray'

		// checked explicitly above
		&& builtinName !== 'Array'
		&& builtinName !== 'Date'
		&& builtinName !== 'RegExp'
		// functions
		&& builtinName !== 'Function'
		&& builtinName !== 'GeneratorFunction'
		&& builtinName !== 'AsyncFunction';
};

module.exports = function whichBuiltinType(value) {
	if (value == null) {
		return value;
	}
	// covers: primitives, {,Weak}Map/Set, typed arrays
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
	if (toStringTag && toStringTag in value) {
		var tag = value[toStringTag];
		if (isKnownBuiltin(tag)) {
			return tag;
		}
	}
	if (typeof value.constructor === 'function') {
		var constructorName = name(value.constructor);
		if (isKnownBuiltin(constructorName)) {
			return constructorName;
		}
	}
	return 'Object';
};
