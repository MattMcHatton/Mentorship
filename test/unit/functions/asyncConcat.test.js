const expect = require('chai').expect;
const sinon = require('sinon');

const asyncConcatService = require("../../../lib/asyncConcatService");

let asyncConcat = require("../../../functions/asyncConcat");

describe('asyncConcat: ', function asyncConcatTest() {
  let concatStub;

  context('When input is ok', () => {
    let queryStringParameters = { a: "a string", b: "b string" , c: "false" };
    let result = "result stub";

    before(function beforeTest() {
      concatStub = sinon.stub(asyncConcatService, "concat");
      concatStub.callsFake((a, b) => {
        expect(a).to.eq(queryStringParameters.a);
        expect(b).to.eq(queryStringParameters.b);

        return Promise.resolve(result);
      });
    });

    it('returns a 200 response', async () => {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(200);
      expect(response.body).to.eq(`{"result":"${result}"}`);
    });

    //Add tests for checking 10 character constraints
    it('concats successfully if less than 10 characters', async () => {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(200);
      expect(response.body).to.eq(`{"result":"${result}"}`);
    });

    after(function afterTest() {
      concatStub.restore();
    });
  });

  context('When input is edgecase', () => {
    let queryStringParameters = { a: "equaltoten", b: "b string" };
    let result = "result stub";

    before(function beforeTest() {
      concatStub = sinon.stub(asyncConcatService, "concat");
      concatStub.callsFake((a, b) => {
        expect(a).to.eq(queryStringParameters.a);
        expect(b).to.eq(queryStringParameters.b);

        return Promise.resolve(result);
      });
    });

    it('concats successfully if equal to 10 characters', async () => {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(200);
      expect(response.body).to.eq(`{"result":"${result}"}`);
    });

    after(function afterTest() {
      concatStub.restore();
    });
  });

  //Add a test for c must be true or false
  /*
  {
    c is boolean
    ...
    c is not boolean
  }
  */

 context('When input is incorrect', () => {
 
  it('fails if c is not true or false', async () => {
    let queryStringParameters = { a: "a string" , b: "b string" , c: "c string"};
    let event = { queryStringParameters };
    let context = {};

    let response = await asyncConcat.handler(event, context);

    expect(response.statusCode).to.eq(400);
    expect(response.body).to.eq('{"message":"c must be true or false"}');
    });
  });
  
  it('fails if greater than 10 characters', async () => {
    let queryStringParameters = { a: "morethantenchars" , b: "b string" , c: "c string"};
    let event = { queryStringParameters };
    let context = {};

    let response = await asyncConcat.handler(event, context);

    expect(response.statusCode).to.eq(400);
    expect(response.body).to.eq('{"message":"Both inputs must be 10 characters or less"}');
    });

  context('When input is missing', () => {
    let queryStringParameters = { a: "a string" };

    it('sends correct failure message', async () => {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(400);
      expect(response.body).to.eq('{"message":"Please specify 2 strings a and b to concatenate"}');
    });
  });
});
