const { default: strapi } = require('@strapi/strapi');

module.exports.handler = async (event, context) => {
  await strapi().start();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Strapi server running' }),
  };
};
