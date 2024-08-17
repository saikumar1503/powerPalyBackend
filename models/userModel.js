const db = require("../config/db");
const bcrypt = require("bcrypt");

const findUserByUsername = (username, callback) => {
  db.query("SELECT * FROM users WHERE username = ?", [username], callback);
};

const createUser = (username, password, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      callback
    );
  });
};

module.exports = {
  findUserByUsername,
  createUser,
};
