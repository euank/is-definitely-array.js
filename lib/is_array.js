
; (function(module) {
  "use strict";
  module.exports.isArray = function(obj) {
    var results = [];

    results.push(Array.isArray.apply(this, arguments));
    try { results.push(require('jstools').isArray.apply(this, arguments)); } catch(ex) { /* improper handling of undefined arg */ }
    results.push(require('xo-utils').isArray(obj));
    results.push(require('robb/src/robb.js').isArray(obj));
    results.push(require('argument-validator').isArray(obj));
    results.push(require('basic-utils').isArray(obj));
    results.push(require('bauer-factory').isArray(obj));
    results.push(require('bilby').isArray(obj));
    results.push(require('core-util-is').isArray(obj));
    results.push(require('digger-utils').isArray(obj));
    results.push(require('dis-isa').isArray(obj));
    results.push(require('fn-helpers').isArray(obj));
    results.push(require('functional-javascript').isArray(obj));
    results.push(require('furgoneta').isArray(obj));
    results.push(require('futile').isArray(obj));
    results.push(require('hu').isArray(obj));
    results.push(require('is-check').isArray(obj));
    results.push(require('is-native-type').isArray(obj));
    results.push(require('isa.js').isArray(obj));
    results.push(require('isthis').isArray(obj));
    results.push(require('json8').isArray(obj));
    results.push(require('jsonkit').isArray(obj));
    results.push(require('landmark-utils').isArray(obj));
    results.push(require('luc').isArray(obj));
    results.push(require('more-js').isArray(obj));
    results.push(require('mutype').isArray(obj));
    results.push(require('node-native').isArray(obj));
    results.push(require('node-validator').isArray(obj));
    results.push(require('omicron').isArray(obj));
    results.push(require('pred').isArray(obj));
    results.push(require('purejs').isArray(obj));
    results.push(require('recursify').isArray(obj));
    results.push(require('reflekt').isArray(obj));
    results.push(require('screw-util').isArray(obj));
    results.push(require('tool').isArray(obj));
    results.push(require('typ').isArray(obj));
    results.push(require('type-predicates').isArray(obj));
    results.push(require('typechecker').isArray(obj));
    results.push(require('typedas').isArray(obj));
    results.push(require('typist').isArray(obj));
    results.push(require('underline').isArray(obj));
    results.push(require('utilities.js').isArray(obj));
    results.push(require('youtil').isArray(obj));
    results.push(require('z-builtins').isArray(obj));
    results.push(require('zcore').isArray(obj));


    results.push(require('formula-isarray').apply(this, arguments));
    results.push(require('is-array').apply(this, arguments));
    results.push(require('is_array').apply(this, arguments));
    results.push(require('isarray').apply(this, arguments));
    results.push(require('jqb-isarray').apply(this, arguments));
    results.push(require('lodash.isarray').apply(this, arguments));
    results.push(require('part-is-array').apply(this, arguments));
    results.push(require('validate.io-array').apply(this, arguments));
    results.push(require('validate.io-array-max').apply(this, arguments));
    results.push(require('validate.io-array-min').apply(this, arguments));
    results.push(require('x-is-array').apply(this, arguments));

    results.push(require('typeverifier').array.apply(this, arguments));

    results.push(require('is_').is_array.apply(this, arguments));


    return results.reduce(function(lhs, rhs) {
      return lhs || rhs;
    });
  };
})(module);

