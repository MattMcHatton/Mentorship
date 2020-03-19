const jsonResponse = require("../lib/jsonResponse");
const asyncConcatService = require("../lib/asyncConcatService");

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

  /* 
    Spongebobify 
    Function to make spongebob case 
    Pass in both a and b to get spongebobA and spongebobB
    and then concat in function below
    
    () => {

    }
  */

  let result = await asyncConcatService.concat(a, b);
  //let result = await asyncConcatService.concat(spongebobA, spongebobB);

  //change 

  return jsonResponse.ok({ result });
};

