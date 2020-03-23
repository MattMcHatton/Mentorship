const request = require('supertest');
const expect = require('chai').expect;
const getSlsOfflinePort = require('../support/getSlsOfflinePort');

describe('Integration/getAsyncConcat: ', function getAsyncConcatTest() {

  it('receives a call and gives correct response', function it(done) {
    request(`http://localhost:${getSlsOfflinePort()}`)
      .get(`/asyncConcat?a=it&b=works&c=false`)
      .expect(200)
      .end(function (error, result) {
        if (error) {
          return done(error);
        }

        expect(result.body.result).to.deep.eq("it works");
        done();
      });
  });

});