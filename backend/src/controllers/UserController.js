const knex = require("../database");

module.exports = {
  async getUsers(request, response) {
    const results = await knex("users").orderBy("id");
    return response.json(results);
  },

  async getUsersId(request, response) {
    try {
      const { id } = request.params;

      const results = await knex("users").where({ id }).orderBy("id");

      return response.json(results);
    } catch (error) {
      console.log(error);
    }
  },
};
