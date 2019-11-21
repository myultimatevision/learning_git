const assert = require('assert');
const sum = require('../src/arithmetic').sum;

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

  it('should add when either one or two numbers are zero',function() {
    assert.strictEqual(sum(0,5),5);
    assert.strictEqual(sum(-5,0),-5);
    assert.strictEqual(sum(0,0),0);
  });
});
