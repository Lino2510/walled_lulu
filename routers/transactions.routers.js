const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transaction.controller");
const authenticateToken = require("../middlewares/auth.middleware");

router.get("/transaction", authenticateToken, transactionController.gettransactionById);

module.exports = router;
