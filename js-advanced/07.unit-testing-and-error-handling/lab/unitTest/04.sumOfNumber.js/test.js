const { expect } = require("chai");
const sum = require("./sumOfNumber").sum;

describe("Demo Test", () => {
  let arr = [1, 2, 3, 4, 5];
  it("works with arr", () => {
    expect(sum(arr)).to.equal(15);
  });
});
