// const Joi = require("joi");
const userRepository = require("../repositories/users.repository");
const bcrypt = require('bcrypt');
const {generateAccessToken} = require('../utils/auth.util')

const createUser = async (userData) => {
  let user = await userRepository.findUserByEmail(userData.email);

  if (user) {
    throw new Error("user already exist");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  const newUser = {...userData, password: hashedPassword};

  console.log(newUser);

  user = await userRepository.createUser(newUser);
  return user;
}

const Login = async (userData) => {
  let user = await userRepository.findUserByEmail(userData.email);
  if (!user) {
    throw new Error(404);
  }

  const isPasswordMatched = await bcrypt.compare(
    userData.password,
    user.password
  );

  console.log('paassword '+isPasswordMatched)
  if (!isPasswordMatched) {
    throw new Error(401);
  }

  const token = generateAccessToken({ email: userData.email, id: user.id });

  return token;
};

const getUserById = async (id) => {
  let user = await userRepository.findUserById(id);
  console.log(user)
   if (!user) {
    throw new Error("user not found");
  }
  return user
};

module.exports = { createUser, getUserById, Login };
