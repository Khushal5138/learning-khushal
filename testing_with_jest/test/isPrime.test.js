const { isPrime } = require("../isPrime");

const number = 23;

const num2 = 12;

describe("isPrime" , (number) => {

  test("should return if the number is prime or not" , () => {

    expect(isPrime(number)).toBe(true);
  });
});

describe("isPrime" , (num2) => {

  test("should return if the number is prime or not" , () => {

    expect(isPrime(num2)).toBe(false);
  });
});