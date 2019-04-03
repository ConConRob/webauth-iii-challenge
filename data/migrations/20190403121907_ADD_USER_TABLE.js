exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users
      .varchar("username", 50)
      .notNullable()
      .unique();
    users.varchar("password", 128).notNullable();
    users.varchar("department", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
