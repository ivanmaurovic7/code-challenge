const supertest = require("supertest");
const assert = require('assert');
const app = require("../app");

describe("POST /", function() {
  it("it should have status code 401 (unauthorized)", function(done) {
    supertest(app)
      .post("/encode")
      .expect(401)
      .end(function(err, res){
        done();
      });
  });

  it("it should have status code 422 (invalid input)", function(done) {
    supertest(app)
      .post("/encode")
      .set('authorization', 'xyz0987654321')
      .expect(422)
      .end(function(err, res){
        done();
      });
  });

  it("it should have status code 422 (invalid input)", function(done) {
    supertest(app)
      .post("/encode")
      .send({inputString: "123abc"})
      .set('authorization', 'xyz0987654321')
      .expect(422)
      .end(function(err, res){
        done();
      });
  });

  it("it should have status code 422 (invalid input)", function(done) {
    supertest(app)
      .post("/encode")
      .send({inputString: ""})
      .set('authorization', 'xyz0987654321')
      .expect(422)
      .end(function(err, res){
        done();
      });
  });

  it("it should have status code 422 (invalid input)", function(done) {
    supertest(app)
      .post("/encode")
      .send({inputString: "aabbcccd"})
      .set('authorization', 'xyz0987654321')
      .expect(200, {
        outputString: 'a2b2c3d1'
      }, done);
    });
  });