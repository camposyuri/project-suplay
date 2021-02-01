const knex = require("../database");

module.exports = {
  // Select com InnerJoin que vai trazer só as interções que estão na tabela
  async getStoreJoin(request, response, next) {
    try {
      const results = await knex("store")
        .innerJoin("users", "users.id", "=", "store.user_id")
        // Esse select pega todas os registros da store e trás o nome da tabela users
        .select("store.*", "users.name", "users.email")
        .orderBy("id");

      return response.json(results);
    } catch (error) {
      next(error);
    }
  },

  async createStore(request, response, next) {
    try {
      const { social_reason, fantasy, cpf_cnpj, cep, user_id } = request.body;

      await knex("store").insert({
        social_reason,
        fantasy,
        cpf_cnpj,
        cep,
        user_id,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async updateStore(request, response, next) {
    try {
      const { social_reason, fantasy, cpf_cnpj, cep, user_id } = request.body;
      const { id } = request.params;

      await knex("store")
        .update({
          social_reason,
          fantasy,
          cpf_cnpj,
          cep,
          user_id,
        })
        .where({ id });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async removeStore(request, response, next) {
    try {
      const { id } = request.params;

      await knex("store").where({ id }).del();

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
