const dotenv = require('dotenv');
dotenv.config();

var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

exports.handler = async function (event, context, cb) {
  try {
    let products = [];
    await new Promise((resolve, reject) => {
      base('products')
        .select({
          maxRecords: 200,
          view: 'Grid view',
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

            products = records.map((product) => {
              const { id, fields } = product;
              const {
                name,
                featured,
                price,
                colors,
                company,
                description,
                category,
                shipping,
                images,
              } = fields;
              const { url } = images[0];
              return {
                id,
                featured,
                name,
                price,
                colors,
                company,
                description,
                category,
                shipping,
                image: url,
              };
            });
          },
          function done(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve();
          }
        );
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'There was an error',
    };
  }
};
