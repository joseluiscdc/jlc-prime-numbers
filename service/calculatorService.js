const getListPrimesTo = (nPrimes) => {
  let n,
    primes = [1];
  for (n = 1; n <= nPrimes; n++) {
    if (isPrime(n)) primes.push(n);
  }
  return primes.reverse();
};

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}

module.exports = { getListPrimesTo };
