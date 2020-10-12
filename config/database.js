const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  production: {
      use_env_variable: 'postgres://tgtyydlrnkaxej:ae6d15b4a0290b76bded2c93f273f1c8ef0a581befd34e0e136d50e9df0fb137@ec2-34-231-56-78.compute-1.amazonaws.com:5432/d37gjsg50pv0hh',
      dialect: 'postgres',
      seederStorage: 'sequelize',
  }
};
