const express = require("express");
const router = express.Router();
const {
  getAllItems,
  updateTask,
  createTask,
  deleteTasks,
  getTask,
} = require("../controllers/tasks.js");

router.route("/").get(getAllItems).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
