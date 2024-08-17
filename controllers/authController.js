const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const SECRET_KEY = "dgknldfgnldfnlg";

const register = (req, res) => {
  const { username, password } = req.body;

  userModel.findUserByUsername(username, (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.length > 0)
      return res.status(400).json({ message: "User already exists" });

    userModel.createUser(username, password, (err) => {
      if (err) return res.sendStatus(500);
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  userModel.findUserByUsername(username, (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.length === 0) return res.sendStatus(401);

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.sendStatus(500);
      if (!isMatch) return res.sendStatus(401);

      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    });
  });
};

module.exports = {
  register,
  login,
};
