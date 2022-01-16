const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

let browser, page; // declare reusable variables

describe("E2E tests", async function () {
  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("initial load", async () => {
    await page.goto("http://localhost:5500/");
    //await page.screenshot({path: 'page.png'})

    // когато имаме забавяне в зареждането от сървара му даваме умишлено чакане, за да не изгърми
    await page.waitForSelector(".accordion"); // в случая е този селектор, зашото в него са данните

    // expect is an async operation
    // test if titles of accordions existing
    const content = await page.textContent("#main");
    expect(content).to.contains("Scalable Vector Graphics");
    expect(content).to.contains("Open standard");
    expect(content).to.contains("Unix");
    expect(content).to.contains("ALGOL");
  });

  //test if by click more, accordion works and give hidden text
  it("More button works", async () => {
    await page.goto("http://localhost:5500/");
    await page.waitForSelector(".accordion");
    // the text of button to be equal More
    await page.click("text=More");
    await page.waitForResponse(/articles\/details/i);
    await page.waitForSelector(".accordion p");
    const visible = await page.isVisible(".accordion p");
    expect(visible).to.be.true;
  });
  it("Less button works", async () => {
    await page.goto("http://localhost:5500/");
    await page.waitForSelector(".accordion");

    await page.click("text=More");
    await page.waitForResponse(/articles\/details/i);
    await page.waitForSelector(".accordion p", { state: "visible" });

    await page.click("text=Less");
    const visible = await page.isVisible(".accordion p");
    expect(visible).to.be.false;
  });
});
