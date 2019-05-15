const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
}, { versionKey: false });


module.exports = model('todo', todoSchema);
