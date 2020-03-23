const expect = require('chai').expect;
const Spongebobify = require('../../../lib/Spongebobify');

describe('Unit/Spongebobify: ', function () {

    it('spongebobifies inputs', async () => {
      let a = "Serverless";
  
      let result = Spongebobify.spongebobify(a);
  
      expect(result).to.eq("SeRvErLeSs");
  
    });
  
});
