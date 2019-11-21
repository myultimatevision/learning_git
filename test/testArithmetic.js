const performOperation = require("../src.chooseArithmeticOperation")
  .performOperation;
const assert = require("assert");

describe("arithmeticOperation", function() {
  it("should call sum operation when operation as sum", function() {
    assert.strictEqual(("sum", 3, 4), 7);
    assert.strictEqual(("sum", -3, -4), -7);
    assert.strictEqual(("sum", 3, -4), -1);
    assert.strictEqual(("sum", 3, 0), 3);
  });

  it("should call subtract operation when operation as subtract", function() {
    assert.strictEqual(("subtract", 3, 4), -1);
    assert.strictEqual(("subtract", -3, -4), 1);
    assert.strictEqual(("subtract", 3, -4), 7);
    assert.strictEqual(("subtract", 3, 0), 3);
  });
});
