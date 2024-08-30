const { isPrimeNumber } = require("../isPrime");

const number = 23;

const num2 = 12;

describe("isPrime" , () => {

  test("should return if the number is prime or not" , () => {

    expect(isPrimeNumber(number)).toBe(true);
  });
});

describe("isPrime" , () => {

  test("should return if the number is prime or not" , () => {

    expect(isPrimeNumber(num2)).toBe(false);
  });
});