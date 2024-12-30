const Tasks = require("../Model/Tasks");

const { ObjectId } = require('mongodb');

exports.createTask = async ({
  user_id,
  task_name,
  task_priority,
  task_status,
  task_type,
  due_date,
  due_time,
}) => {
  try {
    console.log(user_id);
    const newTask = new Tasks({
      user_id,
      task_name,
      task_priority,
      task_status,
      task_type,
      due_date,
      due_time,
    });
    console.log("Task saved succesfully", newTask);
    return await newTask.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.getTasksByUserId = async (userId) => {
  try {
    console.log(typeof userId);
    const userTask = await Tasks.find({ user_id: userId });
    console.log(userTask);
    return userTask;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
exports.deleteTaskById = async (task_id) => {
  try {
    const result = await Tasks.deleteOne({ task_id });
    if (result.deletedCount === 1) {
      console.log("Task deleted successfully");
    } else {
      console.log("No task found with the given ID");
    }
  } catch (error) {
    throw error;
  }
};
exports.updateTaskStatus = async (task_id, status) => {
  try {
    const updatedTask = await Tasks.updateOne(
      { _id: new ObjectId(task_id) },
      { $set: { task_status: status } }
    );

    if (!updatedTask) {
      console.log("No task found with the given task_id");
      throw new Error("Task not found");
    }

    console.log("Task status updated successfully", updatedTask);
    return updatedTask;
  } catch (error) {
    console.log("Error updating task status:", error);
    throw error;
  }
};
exports.updateTask = async (task_id, task) => {
  try {
    const updatedTask = await Tasks.findOneAndUpdate(
      { _id: new ObjectId(task_id)},
      { $set: task },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      console.log("task not found")
    }
    return updatedTask;
  } catch (error) {
    console.error("Error updating task:", error);
   
  }
};
