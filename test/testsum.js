const assert = require('assert');
const sum = require('../src/sum').sum;

describe('sum',function(){
it('should add two positive integers',function() {
assert.strictEqual(sum(1,2),3);
})
})