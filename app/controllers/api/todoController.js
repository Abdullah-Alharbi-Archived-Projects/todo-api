const { Todo, validate } = require('../../models/Todo');
const { destructTodo } = require('../../helpers/object');

module.exports = {
  async index(req, res) {
    const todos = await Todo
      .find()
      .sort({ date: -1 });

    res.status(200).json(todos);
  },
  async get(req, res) {
    res.status(200).json({ todo: {} });
  },
  async store(req, res) {
    const newTodo = new Todo({
      name: req.body.name,
    });

    const todo = await newTodo.save()
    res.status(201).json({ message: 'saved!', ...destructTodo(todo) })
  },
  async update(req, res) {
    let todo = await Todo.findById(req.params.id)

    const { name, completed } = req.body;

    if (name) todo.name = name;
    if (completed) todo.completed = completed;

    todo = await todo.save();

    res.status(200).json({ message: 'saved!', ...destructTodo(todo) })
  },
  async remove(req, res) {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'deleted!' });
  },
};
