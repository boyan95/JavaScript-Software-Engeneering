const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");

describe("Testing task mathEnforcer", () => {
  it("expect undefined on wrong input type for function addFive", () => {
    expect(mathEnforcer.addFive("7")).to.be.undefined;
    expect(mathEnforcer.addFive({})).to.be.undefined;
    expect(mathEnforcer.addFive([])).to.be.undefined;
    expect(mathEnforcer.addFive(undefined)).to.be.undefined;
  });
  it("expect correct output on correct input type for function addFive", () => {
    expect(mathEnforcer.addFive(5)).to.be.equal(10);
    expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
  });
  it("expect undefined on wrong input type for function subtractTen", () => {
    expect(mathEnforcer.subtractTen("7")).to.be.undefined;
    expect(mathEnforcer.subtractTen([])).to.be.undefined;
    expect(mathEnforcer.subtractTen({})).to.be.undefined;
    expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
  });
  it("expect correct output on correct input type for function subtractTen", () => {
    expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
    expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
    expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
  });
  it("expect undefined on wrong first parameter type for function sum", () => {
    expect(mathEnforcer.sum("7", 7)).to.be.undefined;
    expect(mathEnforcer.sum({}, 7)).to.be.undefined;
    expect(mathEnforcer.sum([], 7)).to.be.undefined;
    expect(mathEnforcer.sum(undefined, 7)).to.be.undefined;
  });
  it("expect undefined on wrong second parameter type for function sum", () => {
    expect(mathEnforcer.sum(5, "5")).to.be.undefined;
    expect(mathEnforcer.sum(5, {})).to.be.undefined;
    expect(mathEnforcer.sum(5, [])).to.be.undefined;
    expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
  });
  it("expect function sum works correct", () => {
    expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
    expect(mathEnforcer.sum(5, -2)).to.be.equal(3);
    expect(mathEnforcer.sum(5, 5.06)).to.be.closeTo(10.06, 0.01);
    expect(mathEnforcer.sum(-2, 5)).to.be.equal(3);
    expect(mathEnforcer.sum(5.06, 5)).to.be.closeTo(10.06, 0.01);
  });
});
