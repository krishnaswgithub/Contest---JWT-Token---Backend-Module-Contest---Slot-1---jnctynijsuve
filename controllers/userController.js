//Implement loginUser Function Below 

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey='newtonSchoolContest'

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// TODO: Implement user login logic
const loginUser = async (req, res) => {
  const { username, password } = req.body;

try {
  //Write a code here for login of a usename and generate a JWT token and send that as a json response
  //Remember to check a password that has been hashed using bcrypt
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
};

module.exports = { registerUser, loginUser };
