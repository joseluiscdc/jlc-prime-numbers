const primes = require("../service/calculatorService");

describe("get prime numbers including the number 1", () => {
  const expectedWithSevenNumber = [7, 5, 3, 2, 1];
  const expectedWithElevenNumber = [11, 7, 5, 3, 2, 1];
  const expectedWithFifteenNumber = [13, 11, 7, 5, 3, 2, 1];

  it("matches the primes for the number 7", () => {
    expect(primes.getListPrimesTo(7)).toEqual(
      expect.arrayContaining(expectedWithSevenNumber)
    );
  });

  it("matches the primes for the number 11", () => {
    expect(primes.getListPrimesTo(11)).toEqual(
      expect.arrayContaining(expectedWithElevenNumber)
    );
  });

  it("matches the primes for the number 15", () => {
    expect(primes.getListPrimesTo(15)).toEqual(
      expect.arrayContaining(expectedWithFifteenNumber)
    );
  });

  it("does not matches the primes for the number 5", () => {
    expect(primes.getListPrimesTo(5)).not.toEqual(
      expect.arrayContaining(expectedWithSevenNumber)
    );
  });
});
