const express = require("express");
const assignmentController = require("../controllers/assignmentController");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

router.post(
  "/assignments",
  authenticateToken,
  assignmentController.createAssignment
);
router.get(
  "/assignments",
  authenticateToken,
  assignmentController.getAllAssignments
);
router.put(
  "/assignments/:id",
  authenticateToken,
  assignmentController.updateAssignment
);
router.delete(
  "/assignments/:id",
  authenticateToken,
  assignmentController.deleteAssignment
);

module.exports = router;
