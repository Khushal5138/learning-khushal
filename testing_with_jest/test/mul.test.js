const {mul} = require('../mul');
describe("testing mul" , () => {

  test("should be multiplying 2 numbers" , () => {

    expect(mul(4,5)).toEqual(20);
  });
  test("should be multiplying negative 2 numbers" , () => {

    expect(mul(-4,-5)).toEqual(20);
  });
})