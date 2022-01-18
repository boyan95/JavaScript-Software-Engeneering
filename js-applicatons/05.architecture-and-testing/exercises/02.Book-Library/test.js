const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};

function json(data) {
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

describe("Tests", async function () {
  this.timeout("60000");

  let page, browser;

  before(async () => {
    //browser = await chromium.launch({ headless: false, slowMo: 500 });
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
  // this is a mock witch interpret the server
  // ** means every host
  it("loads and displays all books", async () => {
    page.route("**/jsonstore/collections/books*", (route) => {
      route.fulfill(json(mockData));
    });
    // goes to the project
    await page.goto("http://localhost:5500");
    // by click find if there is something with the name Load All Books
    await page.click("text=Load All Books");
    // when it loads the page if there ist something with the name Harry Potter and C#
    await page.waitForSelector("text=Harry Potter");
    await page.waitForSelector("text=C#");
    // it does the function direct in browser's terminal and gives back an Array with all from this selector => works like querySelectorAll()
    const rows = await page.$$eval("tr", (rows) =>
      rows.map((r) => r.textContent.trim())
    );
    expect(rows[1]).to.contains("Harry Potter");
    expect(rows[1]).to.contains("Rowling");
    expect(rows[2]).to.contains("C#");
    expect(rows[2]).to.contains("Nakov");
  });

  it("can create book", async () => {
    await page.goto("http://localhost:5500");
    await page.fill("form#createForm >> input[name=title]", "My Book");
    await page.fill("form#createForm >> input[name=author]", "Boyan");
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click("form#createForm >> text=Submit"),
    ]);
    const data = JSON.parse(request.postData());
    expect(data.title).to.be.equal("My Book");
    expect(data.author).to.be.equal("Boyan");
  });
});
