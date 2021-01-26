const knex = require("../database");

module.exports = {
  async getStore(request, response) {
    const results = await knex("store").orderBy("id");
    return response.json(results);
  },
};
