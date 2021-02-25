const service = require("./service/primesService");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number, to get its prime numbers : ", (answer) => {
  try {
    let input = parseInt(answer);
    console.log(
      `The prime numbers for ${input} are ${service.getPrimes(input)}`
    );
  } catch (error) {
    console.log(error.message);
  }
  rl.close();
});
