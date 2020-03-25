
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function(table){

        table.increments();
        
        table.string('title',100).notNullable();
        table.string('description',100).notNullable();
        table.decimal('value',100).notNullable();
        table.string('ong_id').notNullable();


        table.foreign('ong_id').references('id').inTable('ongs'); 
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
