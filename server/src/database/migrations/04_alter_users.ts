import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.alterTable('users', table => {
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex) {
  //knex.schema.dropTable('connections');
}