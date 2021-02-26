const validator = require("./parameterValidator");
const calculator = require("./calculatorService");

const getPrimes = (parameter) => {
  if (validator.validateParameter(parameter)) {
    return calculator.getListPrimesTo(parameter);
  } else {
    throw new Error(
      "The program does not accept numbers other than positive natives."
    );
  }
};

module.exports = { getPrimes };
