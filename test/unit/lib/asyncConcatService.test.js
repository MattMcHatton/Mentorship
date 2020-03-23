const expect = require('chai').expect;

const asyncConcatService = require('../../../lib/asyncConcatService');

describe('Unit/asyncConcatService: ', function () {
  it('concatenates inputs', async () => {
    let a = "Serverless";
    let b = "is awesome";

    let result = await asyncConcatService.concat(a, b);

    expect(result).to.eq("Serverless is awesome");

  });

});

