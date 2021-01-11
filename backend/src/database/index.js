const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile.development);

moduele.exports = knex;
