# which-builtin-type <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

What is the type of this builtin JavaScript value? Works cross-realm, without `instanceof`, and can not be fooled by a `constructor` property.

## Example

```js
var whichBuiltinType = require('which-builtin-type');
var assert = require('assert');

assert.equal(undefined, whichBuiltinType(undefined));
assert.equal(null, whichBuiltinType(null));
assert.equal('Boolean', whichBuiltinType(false));
assert.equal('Boolean', whichBuiltinType(true));
assert.equal('Array', whichBuiltinType([]));
assert.equal('Object', whichBuiltinType({}));
assert.equal('RegExp', whichBuiltinType(/a/g));
assert.equal('RegExp', whichBuiltinType(new RegExp('a', 'g')));
assert.equal('Date', whichBuiltinType(new Date()));
assert.equal('Number', whichBuiltinType(42));
assert.equal('Number', whichBuiltinType(NaN));
assert.equal('Number', whichBuiltinType(Infinity));
assert.equal('Number', whichBuiltinType(new Number(42)));
assert.equal('String', whichBuiltinType('foo'));
assert.equal('String', whichBuiltinType(Object('foo')));
assert.equal('Function', whichBuiltinType(function () {}));
assert.equal('GeneratorFunction', whichBuiltinType(function* () {}));
assert.equal('Function', whichBuiltinType(x => x * x));
assert.equal('Array', whichBuiltinType([]));
assert.equal('Int8Array', whichBuiltinType(new Int8Array()));
assert.equal('Uint8Array', whichBuiltinType(new Uint8Array()));
assert.equal('Uint8ClampedArray', whichBuiltinType(new Uint8ClampedArray()));
assert.equal('Int16Array', whichBuiltinType(new Int16Array()));
assert.equal('Uint16Array', whichBuiltinType(new Uint16Array()));
assert.equal('Int32Array', whichBuiltinType(new Int32Array()));
assert.equal('Uint32Array', whichBuiltinType(new Uint32Array()));
assert.equal('Float32Array', whichBuiltinType(new Float32Array()));
assert.equal('Float64Array', whichBuiltinType(new Float64Array()));
assert.equal('BigInt64Array', whichBuiltinType(new BigInt64Array()));
assert.equal('BigUint64Array', whichBuiltinType(new BigUint64Array()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/which-builtin-type
[2]: http://versionbadg.es/inspect-js/which-builtin-type.svg
[3]: https://travis-ci.org/inspect-js/which-builtin-type.svg
[4]: https://travis-ci.org/inspect-js/which-builtin-type
[5]: https://david-dm.org/inspect-js/which-builtin-type.svg
[6]: https://david-dm.org/inspect-js/which-builtin-type
[7]: https://david-dm.org/inspect-js/which-builtin-type/dev-status.svg
[8]: https://david-dm.org/inspect-js/which-builtin-type#info=devDependencies
[11]: https://nodei.co/npm/which-builtin-type.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/which-builtin-type.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/which-builtin-type.svg
[downloads-url]: http://npm-stat.com/charts.html?package=which-builtin-type
