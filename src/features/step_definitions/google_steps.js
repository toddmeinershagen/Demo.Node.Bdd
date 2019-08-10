const { Given, When, Then } = require("cucumber");
const {By, until, Key} = require('selenium-webdriver');
const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const should = require('chai').should();

let driver;

Given('I navigate to google search page', {timeout: 60 * 1000}, async function () {
  driver = await new seleniumWebdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  
  let url = "https://www.google.com/";
  await driver.get(url);
  await driver.wait(until.titleIs("Google"));
});

When('I search for {string}', async function (searchTerm) {
  await driver.findElement(By.name('q')).sendKeys(searchTerm, Key.RETURN);
  await driver.wait(until.titleIs(`${searchTerm} - Google Search`), 1000);
});

Then('the result has multiple results', async function () {
  var element = await driver.findElement(By.css('div.srg'));
  var elements = await element.findElements(By.css('div.g'));
  elements.length.should.be.greaterThan(0);
  await driver.quit();
});