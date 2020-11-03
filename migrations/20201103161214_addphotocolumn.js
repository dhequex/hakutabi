
exports.up = function(knex) {
  return knex.schema.alterTable('activities', function(table){
      table.text('photo');
      
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('activities', function(table){
      table.dropColumn('photo');
  })
};
