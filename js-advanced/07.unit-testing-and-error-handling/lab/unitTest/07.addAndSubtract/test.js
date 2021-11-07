const { expect } = require("chai");
const { beforeEach } = require("mocha");
const { createCalculator } = require("./calculator");

describe("Add or Subtract", () => {
  let instance = null;

  beforeEach(() => {
    instance = createCalculator();
  });
  it("starts empty", () => {
    expect(instance.get()).to.equal(0);
  });

  it("has all methods", () => {
    expect(instance).to.has.ownProperty("add");
    expect(instance).to.has.ownProperty("subtract");
    expect(instance).to.has.ownProperty("get");
  });

  it("add single number", () => {
    instance.add(1);
    expect(instance.get()).to.equal(1);
  });
  it("add multiple numbers", () => {
    instance.add(1);
    instance.add(2);
    expect(instance.get()).to.equal(3);
  });
  it("subtract single number", () => {
    instance.subtract(1);
    expect(instance.get()).to.equal(-1);
  });
  it("subtract single numbers", () => {
    instance.subtract(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-3);
  });
  it("adds and subtracts number", () => {
    instance.add(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-1);
  });
  it("add single string", () => {
    instance.add("1");
    expect(instance.get()).to.equal(1);
  });
  it("add multiple strings", () => {
    instance.add("1");
    instance.add("2");
    expect(instance.get()).to.equal(3);
  });
  it("subtract single string", () => {
    instance.subtract("1");
    expect(instance.get()).to.equal(-1);
  });
  it("subtract single strings", () => {
    instance.subtract("1");
    instance.subtract("2");
    expect(instance.get()).to.equal(-3);
  });
});
