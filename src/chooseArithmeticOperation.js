const arithmetic = require('./arithmetic');

const chooseArithmeticOperation = function(operation,operand1,operand2) {
  operations = {sum:arithmetic.sum,subtract:arithmetic.subtract,};
  arithmeticOperation = operations[operation];
  return arithmeticOperation(operand1,operand2);
};

exports.performOperation = chooseArithmeticOperation;
