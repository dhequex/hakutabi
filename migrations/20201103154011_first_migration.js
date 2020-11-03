const { table } = require("console");

exports.up = function(knex) {
 return knex.schema.createTable("activities", function(table){
     table.increments();
     table.text('title').notNullable();
     table.text('description').notNullable();
     table.text('location').notNullable();
     table.text('price').notNullable();


 }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable("activities");
};
