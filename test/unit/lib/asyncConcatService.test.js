const expect = require('chai').expect;

const asyncConcatService = require('../../../lib/asyncConcatService');

describe('asyncConcatService', function () {
  it('concats', async () => {
    let a = "Serverless";
    let b = "is awesome";

    let result = await asyncConcatService.concat(a, b);

    expect(result).to.eq("Serverless is awesome");

  });
  
  /*
  it('does not spongebobify', async () => {
    let a = "abc";
    let b = "def";
    let c = 0

    let result = await asyncConcatService.concat(a, b, c);

    expect(result).to.eq("AbCdEf");
  });
  */

  /*
  it('spongebobifies', async () => {
    let a = "abc";
    let b = "def";
    let c = 1

    let result = await asyncConcatService.concat(a, b, c);

    expect(result).to.eq("AbCdEf");
  });
  */

});

