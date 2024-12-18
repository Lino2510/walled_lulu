// const Joi = require("joi");
const transactionRepository = require("../repositories/transaction.repository");
const bcrypt = require('bcrypt');
// const {generateAccessToken} = require('../utils/auth.util');
// const { createTransaction } = require("../controllers/transactions.controller");

const createtransaction = async (transactionData) => {
  let transaction = await transactionRepository.alltransactionByEmail(transactionData.email);

  if (transaction) {
    throw new Error("user already exist");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(transactionData.password, salt);
  const newTransaction = {...transactionData, password: hashedPassword};

  console.log(newTransaction);

  transaction = await transactionRepository.createtransaction(newtransaction);
  return transaction;
}

// const Login = async (transactionData) => {
//   let transaction = await transactionRepository.findTransactionByEmail(transactionData.id);
//   if (!transaction) {
//     throw new Error(404);
//   }

//   const isPasswordMatched = await bcrypt.compare(
//     transactionData.password,
//     transaction.password
//   );

//   console.log('password '+isPasswordMatched)
//   if (!isPasswordMatched) {
//     throw new Error(401);
//   }

//   const token = generateAccessToken({ id: transaction.id });

//   return token;
// };

const getTransactionById = async (user_id) => {
  let transaction = await transactionRepository.findTransactionById(user_id);
  console.log(transaction)
   if (!transaction) {
    throw new Error("transaction not found");
  }
  return transaction
};

module.exports = { createtransaction, getTransactionById };
