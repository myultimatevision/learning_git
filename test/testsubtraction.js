const subtract = require('../src/sum').subtract;
const assert = require('assert');

describe('subtract',function() {
  it('should subtract one positive integer from another positive integer',function() {
    assert.strictEqual(subtract(4,2),2)
  });

  it('should subtract one negative integer from another negative integer',function() {
    assert.strictEqual(subtract(-4,-2),-2)
  });

  it('should subtract one negative integer from positive integer',function() {
    assert.strictEqual(subtract(4,-2),6)
  });

  it('should subtract one positive integer from negative integer',function() {
    assert.strictEqual(subtract(-4,2),-6)
  });

  it('should subtract zero from zero',function() {
    assert.strictEqual(subtract(0,0),0)
  });

});
