const Joi = require("joi");
const transactionService = require("../services/transaction.service");
const { transactionResponse } = require("../dto/transaction.Response");

const transactionSchema = Joi.object({
  date_time: Joi.string().required(),
  type: Joi.string().required(),
  from_to: Joi.string().required(),
  description: Joi.string().required(),
  amount: Joi.string().required(),
  user_id: Joi.string().required(),
});


const createTransaction = async (req, res) => {
    try {
      const { error, value } = registerSchema.validate(req.body);
  
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      const transaction = await transactionService.createTransaction(value);
      res.status(201).json({ data: new transactionResponse(transaction) });
    } catch (error) {
      console.log(error)
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  };
  
  const getTransactionById = async (req, res) => {
      try {
          const { id: user_id } = req.transaction;
          const transaction = await transactionService.getTransactionById(Number(user_id));
          res.status(200).json({data: new transactionResponse(transaction) });
      } catch (error) {
        if (error.messsage === "transaction not found") {
          return res.status(404).json({ error: error.message});
        }
          res.status(error.statusCode || 500).json({ error: error.message });
      }
  
  };
  
  module.exports = { createTransaction, getTransactionById };