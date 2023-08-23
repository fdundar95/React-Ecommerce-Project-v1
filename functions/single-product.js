const dotenv = require('dotenv');
dotenv.config();

var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

exports.handler = async function (event, context, cb) {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      let product = await new Promise((resolve, reject) => {
        base('products').find(id, function (err, record) {
          if (err) {
            reject(err);
            return;
          }
          resolve(record);
        });
      });

      product = { id: product.id, ...product.fields };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 404,
        body: `No product with the ID:${id}`,
      };
    }
  }

  return {
    statusCode: 500,
    body: 'Product ID missing or server error',
  };
};
