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
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'NOT FOUND' });

    res.status(200).json(todo);
  },
  async store(req, res) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newTodo = new Todo({
      name: req.body.name,
    });

    const todo = await newTodo.save()
    res.status(201).json({ message: 'saved!', ...destructTodo(todo) })
  },
  async update(req, res) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ message: 'NOT FOUND' });

    const { name, completed } = req.body;

    if (name) todo.name = name;
    if (completed) todo.completed = completed;

    todo = await todo.save();

    res.status(200).json({ message: 'saved!', ...destructTodo(todo) })
  },
  async remove(req, res) {
    const result = await Todo.findByIdAndRemove(req.params.id);
    if (!result) res.status(404).json({ message: 'This todo is already deleted!' });

    res.status(200).json({ message: 'deleted!', ...destructTodo(result) });
  },
};
