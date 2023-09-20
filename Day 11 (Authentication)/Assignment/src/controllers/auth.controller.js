const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};
const register = async (req, res) => {
  try {
    //we will try to find the user with the email provided
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    //if the use is found then it is an error
    if (user)
      return res
        .status(400)
        .send({ messagge: "User already exists with this email address." });

    //if user is not found then we will create a new user with that email and password provided
    user = await User.create(req.body);

    //then we will create the token for the use to send to frontend
    const token = newToken(user);

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    //we will try to find the user with the email which he had provided in the request
    const user = await User.findOne({ email: req.body.email });
    //if user is not found then return error message
    if (!user)
      return res
        .status(404)
        .send({ message: "Please try another email or password" });
    //if user is found then we will match the password
    const match = user.checkPassword(req.body.password);
    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });
    //then we will the token for the that user and
    const token = newToken(user);
    //then return the user and the token
    res.send({ user, token });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Please try another email or password" });
  }
};

module.exports = { register, login };
