var expect = require('chai').expect;

var isArray = require('./..').isArray;

describe('isArray', function() {
  it('should work', function() {
    var arrays = [[], [1], [2], [1,2,3], ["foo"], [[[]]], [[[[[[[[[[]]]]]]]]]]];
    arrays.forEach(function(array) {
      expect(isArray(array)).to.be.true;
    });

    var notArrays = [null, '', 1, {}, arguments, Array, function(){}, isArray, require, 'asdf'];
    notArrays.forEach(function(notArray) {
      expect(isArray(notArray)).not.to.be.true;
    });
  });
});
