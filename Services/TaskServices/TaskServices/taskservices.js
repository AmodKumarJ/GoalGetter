const Tasks = require("../Model/Tasks");



exports.createTask = async ({ userId, task_name, task_priority }) => {
  try {
    const newTask = new Tasks({ userId, task_name, task_priority });
    console.log("Task saved succesfully",newTask);
    await newTask.save();
  } catch (error) {
    console.log(error);
    throw error
  }
};

exports.getTasksByUserId = async (userId) => {
    try{
        const userTask = Tasks.find({userId})
        return userTask
    }
    catch(err){
        console.log(err)
        throw err
    }
};
exports.deleteTaskById=async(task_id)=>{
    try {
        const result = await Tasks.deleteOne({task_id})
        if (result.deletedCount === 1) {
            console.log("Task deleted successfully");
          } else {
            console.log("No task found with the given ID");
          }
        
    } catch (error) {
        throw error
    }

}
exports.updateTaskStatus = async (task_id, status) => {
    try {
        const updatedTask = await Tasks.findOneAndUpdate(
            { task_id: task_id }, 
            { task_status: status }, 
            { new: true } 
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