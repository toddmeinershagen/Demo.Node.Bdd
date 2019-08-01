var { Given, When, Then } = require("cucumber");
var should = require('chai').should()
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver

Given("I navigate to {string}", function(url) {
  driver = new Builder().forBrowser('chrome').build();
  try {
    driver.get(url);
  } finally {
      driver.quit();
  }
});

When("I search for {string}", function(searchTerm) {
    try {
        
    }
    finally {

    }
});

Then("the result has multiple results", function() {
  ;
});