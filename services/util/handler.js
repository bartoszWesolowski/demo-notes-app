export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;
  
      try {
        // Run the Lambda
        console.log("event and context")
        console.log(JSON.stringify(event, null, 4));
        console.log(JSON.stringify(context, null, 4));
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
        console.error(e);
        body = { error: e.message };
        statusCode = 500;
      }
  
      // Return HTTP response
      return {
        statusCode,
        body: JSON.stringify(body),
      };
    };
  }