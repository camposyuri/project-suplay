exports.up = (knex) => {
  return knex.schema.createTable("store", (table) => {
    table.increments("id").primary();
    table.string("social_reason").notNull();
    table.string("fantasy").notNull();
    table.string("cpf_cnpj").notNull();
    table.string("cep").notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table
      .integer("user_id")
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("store");
};
