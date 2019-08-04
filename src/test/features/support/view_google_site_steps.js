const { Given, When, Then } = require("cucumber");
const should = require('chai').should()
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const screen = {
  width: 640,
  height: 480
};

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

Given("I navigate to {string}", function(url) {
  driver.get(url)
    .then(_ => driver.wait(until.elementLocated(By.id('hplogo')), 1000))
    .then(
      _ => driver.quit(),
      e => driver.quit().then(() => { throw e; })
      );
});

When("I search for {string}", function(searchTerm) {
    
});

Then("the result has multiple results", function() {
  
});