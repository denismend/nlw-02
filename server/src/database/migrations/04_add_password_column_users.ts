import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.alterTable('users', table => {
      table.string('password').notNullable().defaultTo('');
  });
}

export async function down(knex: Knex) {
  knex.schema.table('users', table => {
    table.dropColumn('password');
  })
}