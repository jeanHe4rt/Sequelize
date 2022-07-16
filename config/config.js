require('dotenv').config()

module.exports = {
  dialect: "postgres",
  host: 'localhost',
  username: 'postgres',
  password: process.env.PASSWORD_DB,
  database: "curso_sequelize",
  define: {
    timestamp: true,
  }
}