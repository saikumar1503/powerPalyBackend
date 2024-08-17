const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12726589",
  password: "w9SPn3ZdQu",
  database: "jdbc:mysql://ql12.freesqldatabase.com:3306/sql12726589",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = db;
