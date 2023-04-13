import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.decimal("price").notNullable();
    table.string("description").notNullable();
    table.string("category_id").notNullable();
    table.string("image").notNullable();
    table.decimal("rate").notNullable();
    table.integer("countRate").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products");
}
