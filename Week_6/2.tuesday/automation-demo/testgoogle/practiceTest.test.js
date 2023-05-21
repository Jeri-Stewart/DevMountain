const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});
/*
describe("Test the Google homepage", () => {
  test("can search Google for 'Selenium'", async () => {
    // Navigate to google.com
    await driver.get("https://www.google.com/");

    // Locate the search bar and send the search term to it
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
    // Wait until the title of the page changes to include the search term
    await driver.wait(until.titleIs("selenium - Google Search"), 1000);
  });
});
*/
// secdon test

test("can search google for puppies and click on the images tab and make sure we get redirected to te correct page", async () => {
  // navidate to google.com
  await driver.get("https://www.google.com");

  //locate the search bar and send the search term to it
  await driver.findElement(By.name("q")).sendKeys("puppies", Key.RETURN);
  // wait until the title for the page changes to include the puppies
  await driver.wait(until.titleIs("puppies - Google Search"), 1000);
  // click the images link
  await driver.findElement(By.linkText("Images")).click();
  // wait untile we can select the element that shows that tab
  const currentPage = await driver.wait(
    until.elementLocated(By.css('span[aria-current = "page"]')),
    1000
  );
  // check that the page is images
  expect(await currentPage.getText()).toBe("Images");
});

// npm test -> to run test
