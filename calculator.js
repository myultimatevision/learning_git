const sum = require('./src/sum').sum;
const subtract = require('./src/sum').subtract;

const main = function() {
  number1 = +process.argv[2];
  number2 = +process.argv[3];
  result =  subtract(number1,number2);
  console.log(result);
};

main();
