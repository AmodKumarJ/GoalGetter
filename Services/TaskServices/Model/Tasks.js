const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Task Schema
const TaskSchema = new mongoose.Schema({
  user_id: { type: String, required: true }, 
  task_name: { type: String, required: true},
  task_description: { type: String, required: true},
  task_priority: { type: String, required: true },
  task_status: { type: String, required: true, default: "pending" },
  task_type: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  due_date: { type: Date },
  due_time: {
    type: String,
    match: /^(0?[1-9]|1[0-2]):[0-5][0-9](am|pm|AM|PM)$/, // Validates HH:MM AM/PM format
    required: true
  }
}, {
  timestamps: true 
});

TaskSchema.plugin(AutoIncrement, { inc_field: 'task_id' });


const TaskModel = mongoose.model("taskModel", TaskSchema); 

module.exports = TaskModel;
