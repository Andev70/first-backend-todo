const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must enter a name"],
    trim: true,
    maxlengh: [20, "can not be more than 20 char"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("task", taskSchema);
