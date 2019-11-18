const assert = require('assert');
const sum = require('../src/sum').sum;

describe('sum',function(){
  it('should add two positive integers',function() {
    assert.strictEqual(sum(1,2),3);
  });

  it('should add two negative integers',function() {
    assert.strictEqual(sum(-1,-2),-3);
  });

  it('should add one positive integer one negative integer',function() {
    assert.strictEqual(sum(-3,5),2);
  });

});
