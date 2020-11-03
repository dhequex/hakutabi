require("dotenv").config();

module.exports = {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/hakutabi`,
    searchPath: "public",
    migrations: "./migrations"
  };

  