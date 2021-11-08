const { expect } = require("chai");

const { lookupChar } = require("./charLookup");

describe("Testing the char lookup task", () => {
  it("expect undefined on wrong input type", () => {
    expect(lookupChar("Boyan", "7")).to.be.undefined;
    expect(lookupChar("Boyan", [])).to.be.undefined;
    expect(lookupChar("Boyan", {})).to.be.undefined;
    expect(lookupChar("Boyan", undefined)).to.be.undefined;
    expect(lookupChar(7, 7)).to.be.undefined;
    expect(lookupChar({}, 7)).to.be.undefined;
    expect(lookupChar([], 7)).to.be.undefined;
    expect(lookupChar(undefined, 7)).to.be.undefined;
  });
  it("testing parameter are correct type but index out of range", () => {
    expect(lookupChar("Boyan", "Boyan".length)).to.equal("Incorrect index");
    expect(lookupChar("Boyan", 6)).to.equal("Incorrect index");
    expect(lookupChar("Boyan", -1)).to.equal("Incorrect index");
  });
  it("testing works correct", () => {
    expect(lookupChar("Boyan", 2)).to.equal("y");
  });
});
