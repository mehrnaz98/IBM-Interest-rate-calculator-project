const {
  calculateSimpleInterest,
  calculateTotalPayableAmount,
} = require("../script");

describe("Interest Rate Calculator Tests", () => {});

it("Calculate Simple Interest", () => {
  var actual = calculateSimpleInterest(1000, 5, 1);
  expect(actual).toBe(50);
});
