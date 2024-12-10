const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TaskSchema = mongoose.Schema({
  task_id: { type: String, required: true, unique: true ,primaryKey: true},
  userId: { type: String, required: true, unique: true },
  task_name: { type: String, required: true, unique: true },
  task_priority: { type: String, required: true, unique: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
  due_date: {
    type: Date,
  },
},{ 
    timestamps: true ,
    _id: false 
}
);

TaskSchema.plugin(AutoIncrement, {inc_field: 'task_id'});

const TaskModel = mongoose.model("taskModel",TaskSchema)

module.exports = TaskModel
