const jsonResponse = require("../lib/jsonResponse");
const asyncConcatService = require("../lib/asyncConcatService");
const Spongebobify = require("../lib/Spongebobify");

module.exports.handler = async (event, context) => {
  let { a, b} = event.queryStringParameters;

  //Must have 2 inputs
  if (!a || !b) {
    return jsonResponse.error({
      message: "Please specify 2 strings a and b to concatenate"
    });
  }

  //Inputs must be less than 10 characters
  if (a.length > 10 || b.length > 10) {
    return jsonResponse.error({
      message: "Both inputs must be 10 characters or less"
    });
  }
  let result = await asyncConcatService.concat(Spongebobify.spongebobify(a), Spongebobify.spongebobify(b));

  // Spongebobify 
  /*
  if (c) {
    let result = await asyncConcatService.concat(Spongebobify.spongebobify(a), Spongebobify.spongebobify(b));
  } else {
    let result = await asyncConcatService.concat(a, b);
  }
  */

  return jsonResponse.ok({ result });
};

