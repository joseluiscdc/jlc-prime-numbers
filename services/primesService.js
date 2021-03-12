const validator = require("./parameterValidator");
const calculator = require("./calculatorService");

class PrimesService {
  getPrimes = ({ limit_number, order }) => {
    const numberToProcess = parseInt(limit_number);
    if (validator.validateParameter(numberToProcess)) {
      return calculator.getListPrimesTo(numberToProcess, order);
    } else {
      throw new Error(
        "The program does not accept numbers other than positive natives."
      );
    }
  };
}

module.exports = PrimesService;
