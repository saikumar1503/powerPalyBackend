const assignmentModel = require("../models/assignmentModel");

const createAssignment = (req, res) => {
  const { title } = req.body;
  assignmentModel.createAssignment(title, (err, results) => {
    if (err) return res.sendStatus(500);
    res.status(201).json({ id: results.insertId, title });
  });
};

const getAllAssignments = (req, res) => {
  assignmentModel.getAllAssignments((err, results) => {
    if (err) return res.sendStatus(500);
    res.json(results);
  });
};

const updateAssignment = (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  assignmentModel.updateAssignment(id, title, (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.affectedRows === 0) return res.sendStatus(404);
    res.json({ id, title });
  });
};

const deleteAssignment = (req, res) => {
  const id = parseInt(req.params.id);
  assignmentModel.deleteAssignment(id, (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.affectedRows === 0) return res.sendStatus(404);
    res.status(204).end();
  });
};

module.exports = {
  createAssignment,
  getAllAssignments,
  updateAssignment,
  deleteAssignment,
};
