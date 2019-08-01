var { Given, When, Then } = require("cucumber");
var should = require('chai').should()
var Calculator = require('../../../calculator');

let calculator;

Given("an initial number of {int}", function(op1) {
  calculator = new Calculator(op1);
});

When("I add another number {int}", function(op2) {
  calculator.add(op2);
});

Then("the result is {int}", function(sum) {
  calculator.result.should.equal(sum);
});