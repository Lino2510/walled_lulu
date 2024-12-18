const Pool = require("pg").Pool;
// const APP_PORT=8081
// const DB_USER="postgres"
// const DB_HOST="localhost"
// const DB_NAME="walled_user"
// const DB_PASSWORD="ziyan2109"
// const DB_PORT=5432
const pool = new Pool({
  // user: DB_USER,
  // host: DB_HOST,
  // database: DB_NAME,
  // password: DB_PASSWORD,
  // port: DB_PORT,
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
