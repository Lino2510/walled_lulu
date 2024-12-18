const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const authenticateToken = require("../middlewares/auth.middleware");

router.post("/auth/register", userController.createUser);
router.get("/profile", authenticateToken, userController.getUserById);
router.post("/auth/login", userController.Login);

module.exports = router;
