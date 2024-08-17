const db = require("../config/db");

const createAssignment = (title, callback) => {
  db.query("INSERT INTO assignments (title) VALUES (?)", [title], callback);
};

const getAllAssignments = (callback) => {
  db.query("SELECT * FROM assignments", callback);
};

const updateAssignment = (id, title, callback) => {
  db.query(
    "UPDATE assignments SET title = ? WHERE id = ?",
    [title, id],
    callback
  );
};

const deleteAssignment = (id, callback) => {
  db.query("DELETE FROM assignments WHERE id = ?", [id], callback);
};

module.exports = {
  createAssignment,
  getAllAssignments,
  updateAssignment,
  deleteAssignment,
};
