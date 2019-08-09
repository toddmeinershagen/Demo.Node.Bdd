const {Given, Then, When} = require('cucumber');
var chai = require('chai')
    , assert = chai.assert
    , expect = chai.expect
    , should = chai.should()
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);

let postId;
let response;

Given('an existing post with id of {int}', function (id) {
    postId = id;
});

When('getting the post', function (done) {
    chai
        .request('https://my-json-server.typicode.com')
        .get('/typicode/demo/posts/' + postId)
        .send()
        .end(function(err, res) {
            response = res;
            response.error.should.be.false;
            response.should.have.status(200);
            done();
        });
});

Then('the post should have a title of {string}', function (title) {
    response.body.should.eql({"id": postId, "title": title});
});