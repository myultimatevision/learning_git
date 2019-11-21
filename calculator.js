const chooseArithmeticOperation = require('./src/chooseArithmeticOperation');
const performOperation = chooseArithmeticOperation.performOperation;

const main = function() {
  operation = process.argv[2];
  number1 = +process.argv[3];
  number2 = +process.argv[4];
  result =  performOperation(operation,number1,number2);
  console.log(result);
};

main();
