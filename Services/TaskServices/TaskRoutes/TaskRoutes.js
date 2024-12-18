const TaskServices = require("../TaskServices/taskservices");
const express = require("express");

const router = express.Router();

router.post("/task", async (req, res) => {
  const user_id = req.body.user_id;
  const task_name = req.body.task_name;
  const task_priority = req.body.task_priority;
  const task_status = req.body.task_status;

  try {
    if (user_id) {
      const newTask = await TaskServices.createTask({
        user_id,
        task_name,
        task_priority,
        task_status,
      });
      if (newTask) {
        res.status(201).json({ message: "Task created succesfully" });
      } else {
        res.status(402).json({ message: "user_id not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
    throw error;
  }
});
router.get("/tasks/:uid", async (req, res) => {
  const { uid } = req.params;

  try {
    const tasks = await TaskServices.getTasksByUserId(uid);
    if (tasks) {
      res.status(200).send(tasks);
    } else {
      res.status(404).json({ message: "User Does not Having any Task" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    throw error;
  }
}); 
router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await TaskServices.deleteTaskById(id);
    if (response) {
      console.log("Taske Deleted", id, " ", response);
      res.status(200).json({ message: "Task Deleted Sucessfully" });
    } else {
      res.status(404).json({ message: "This Task is not available" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
});
router.post("/status/:id", async (req, res) => {
  const status = req.body.status;
  const { id } = req.params;
  try {
    const update = await TaskServices.updateTaskStatus(id, status);
    if (!update) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Error updating status:", error.message);
    res.status(500).json({ error: "Failed to update status" });
  }
});
