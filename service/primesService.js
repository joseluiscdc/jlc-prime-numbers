const validator = require("./parameterValidator");
const primes = require("./calculatorService");

const getPrimes = (parameter) => {
  if (validator.validateParameter(parameter)) {
    return primes.getListPrimesTo(parameter);
  } else {
    throw new Error(
      "The program does not accept numbers other than positive natives."
    );
  }
};

module.exports = { getPrimes };
