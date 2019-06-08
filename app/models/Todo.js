const { Schema, model } = require('mongoose');
const Joi = require('@hapi/joi');

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


function validateTodo(todo) {
  const schema = {
    name: Joi.string().required(),
    completed: Joi.boolean(),
  };

  return Joi.validate(todo, schema);
}

const Todo = model('Todo', todoSchema);

module.exports.Todo = Todo;
module.exports.validate = validateTodo;
