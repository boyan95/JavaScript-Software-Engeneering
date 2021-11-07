const { expect } = require("chai");
const isSymmetric = require("./check").isSymmetric;

describe("Test", () => {
  it("return true for symmetric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("return false for non-symmetric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it("return false for not array", () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it("return false for symmetric array but with different type of element", () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });

  //test overloading
  it("return false for symmetric array with odd number of elements", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });
  it("return false for non-symmetric array with strings", () => {
    expect(isSymmetric(["a", "b", "c"])).to.be.false;
  });
  it("return false for symmetric array with strings even number of elements", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });
  it("return false for symmetric array with strings odd number of elements", () => {
    expect(isSymmetric(["a", "b", "a"])).to.be.true;
  });
});
