const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Test the Movies App", () => {
    test("can add a movie", async () => {
      await driver.get("http://localhost:3000/");
  
      await driver
        .findElement(By.css('input[name="movieTitle"]'))
        .sendKeys("Titanic");
      await driver.findElement(By.css('button[type="submit"]')).click();
  
      const addedMovie = await driver.wait(
        until.elementLocated(By.css("#movies-list li label")),
        1000
      );
      expect(await addedMovie.getText()).toBe("Titanic");
    });
  });
  


//Create a test that crosses off a movie
test("can cross off a movie", async () => {
    await driver.get("http://localhost:3000/");
    // add "Star Wars" movie to the list
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Star Wars");
    // find the movie and cross it off
    await driver.findElement(By.css('li[text()="Star Wars"]')).click();
    // check that that the movie is crossed off  
    await driver.findElement(By.css('#movies-list li input[type="checkbox"]')).click();
    expect(await driver.wait(until.elementLocated(By.className('crossed-off')))).toBeTruthy();
  });
  
  /*
//Create a test that deletes a movie
test("can delete a movie", async () => {
    await driver.get("http://localhost:3000/");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Titanic");
    await driver.findElement(By.css('button[type="submit"]')).click();
  
    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li label")),
      1000
    );
    
    await driver.findElement(By.css('#movies-list li button')).click();
    expect(await driver.wait(until.stalenessOf(addedMovie))).toBeTruthy();
  });
  
//Create a test that checks that notifications are displayed
test("notifications are displayed", async () => {
    await driver.get("http://localhost:3000/");
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("Titanic");
    await driver.findElement(By.css('button[type="submit"]')).click();
  
    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li label")),
      1000
    );
  
    await driver.findElement(By.css('#movies-list li input[type="checkbox"]')).click();
    await driver.findElement(By.css('#movies-list li button')).click();
  
    const notificationElement = await driver.wait(until.elementLocated(By.id('notifications')));
    expect(await notificationElement.getText()).toBe("You have crossed off Titanic.\nYou have deleted Titanic.");
  });
*/