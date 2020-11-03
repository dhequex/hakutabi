exports.up = function(knex) {
    return knex.schema.alterTable('activities', function(table){
        table.text('short_description');
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('activities', function(table){
        table.dropColumn('short_description');
    })
  };