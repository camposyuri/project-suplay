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
      next(error);
    }
  },

  async createUser(request, response) {
    const { name, email, password, cpf } = request.body;

    try {
      await knex("users").insert({
        name,
        email,
        password,
        cpf,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async updateUser(request, response) {
    try {
      const { name, email, password, cpf } = request.body;
      const { id } = request.params;

      await knex("users")
        .update({
          name,
          email,
          password,
          cpf,
        })
        .where({ id });

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(request, response) {
    try {
      const { id } = request.params;

      await knex("users").where({ id }).del();

      return response.send();
    } catch (error) {
      next(error);
    }
  },
};
