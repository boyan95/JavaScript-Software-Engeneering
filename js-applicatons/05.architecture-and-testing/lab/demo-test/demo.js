const { chromium } = require("playwright-chromium");
// asynchronous IIFE(функция, която се изпълнява веднага)
// all operation are async
(async () => {
  // създаваме инстанция на браузера
  // if we want to see how it works, we give a parameter in launch {headless:false, slowMo: 2000}  2sec between every action and in console node demo.js
  const browser = await chromium.launch({headless:false, slowMo: 2000});
  // browser gives a new page (like a new tab in browser == new page)
  const page = await browser.newPage();
  // page goes to certain web address
  await page.goto("https://google.com/");
  // page makes a screenshot of the new opened web page with the web address beyond
  // and as parameter we give the name of the screenshot
  await page.screenshot({ path: "example.png" });
  // and when the browser is finished, we say browser close
  await browser.close();
})();
