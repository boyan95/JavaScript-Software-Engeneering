
const testNumbers = require("./testNumbers");
const { expect } = require("chai");

describe("Tests task Numbers", () => {
  describe("test sumNumber function", () => {
    it("works with valid numbers", () => {
      expect(testNumbers.sumNumbers(2, 3)).to.be.equal('5.00');
    });
    it("works with negative numbers", () => {
      expect(testNumbers.sumNumbers(-2, -3)).to.be.equal('-5.00');
      expect(testNumbers.sumNumbers(-2, 3)).to.be.equal('1.00');
      expect(testNumbers.sumNumbers(2, -3)).to.be.equal('-1.00');
    });
    it("works with floating point numbers", () => {
      expect(testNumbers.sumNumbers(1.55, 0.333)).to.be.equal('1.88');

    });
    it("check if parameters are not numbers", () => {
      expect(testNumbers.sumNumbers("boyan", 3)).to.be.undefined;
      expect(testNumbers.sumNumbers(-2, "a")).to.be.undefined;
      expect(testNumbers.sumNumbers({}, 2)).to.be.undefined;
      expect(testNumbers.sumNumbers([], 2)).to.be.undefined;
      expect(testNumbers.sumNumbers(undefined, 2)).to.be.undefined;
    });
    it("check if parameter return number fixed to the second char", () => {
      expect(testNumbers.sumNumbers(2, 3)).to.be.equal("5.00");
    });
  });
  describe("test numberChecker function", () => {
    it("check if the function parses the input to number, and validates it", () => {
      expect(testNumbers.numberChecker("3")).to.be.equal("The number is odd!");
    });
    it('if the input is a number, the function checks if it is even. If so the function returns the string: "The number is even!"', () => {
      expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!");
      expect(testNumbers.numberChecker(3)).to.be.equal("The number is odd!");
    });
    it('if the input is a number, the function checks if it is even. If so the function returns the string: "The number is odd!"', () => {
      expect(testNumbers.numberChecker(3)).to.be.equal("The number is odd!");
    });
    it("If the input is not a number the function throws an error", () => {
      expect(() => {
        testNumbers.numberChecker("a");
      }).to.throw();
    });
  });
  describe("test averageSumArray function", () => {
    it("the function iterates through each element in the array, calculates the sum, and returns the average sum", () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
    });
  });
});
