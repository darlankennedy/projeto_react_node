const knex = require('knex');

const configuration  = require('../../knexfile');
console.log(configuration)

const connection = knex(configuration.production);

module.exports = connection;