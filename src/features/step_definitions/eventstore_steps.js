const {Given, Then, When} = require('cucumber');
const chai = require('chai')
    , assert = chai.assert
    , expect = chai.expect
    , should = chai.should()
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

let subscriptionKey;
let baseUrl;
let response;

Given('a valid subscription key', function () {
    baseUrl = process.env.BASE_URL;
    subscriptionKey = process.env.SUBSCRIPTION_KEY;
  });

Given('event types exist', function () {
    //in the future, start with an empty store and publish
});

When('I get a list of event types', function (done) {
    chai
        .request(baseUrl)
        .get('/EventStore/eventtypes')
        .set('Ocp-Apim-Subscription-Key', subscriptionKey)
        .set('Ocp-Apim-Trace', 'true')
        .set('Cache-Control', 'no-cache')
        .end(function(err, res) {
            response = res;
            response.error.should.be.false;
            response.should.have.status(200);
            done();
        });
});

Then('the result has multiple event types', function () {
    response.body.length.should.be.greaterThan(0);
});