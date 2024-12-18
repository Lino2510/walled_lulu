const pool = require("../db/db");

const allTransactionById = async (transaction_id) => {
  try {
    const result = await pool.query("SELECT * FROM users where id = $1", [transaction_id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const findTransactionByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    console.log(result.rows, "RESULTS")
    return result.rows[0];
  } catch (error) {
    console.log(error,"error apa")
    throw new Error("Something went wrong");
  }
};

const createTransaction = async (user) => {
  const { date_time, type, from_to, description, amount, user_id } = transaction;

  try {
    const result = await pool.query(
      "INSERT INTO users (date_time, type, from_to, description, amount, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [date_time, type, from_to, description, amount, user_id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error occurred while creating the user.");
  }
};


module.exports = { createTransaction, findTransactionByEmail, allTransactionById };
