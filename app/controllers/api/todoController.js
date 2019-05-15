const TodoModel = require('../../models/Todo');
const { destructTodo } = require('../../helpers/object');

module.exports = {
  index(req, res) {
    TodoModel
      .find()
      .sort({ date: -1 })
      .then(todos => res.status(200).json(todos))
      .catch(err => console.log(err));
  },
  store(req, res) {
    const newTodo = new TodoModel({
      name: req.body.name,
    });

    newTodo
      .save()
      .then(todo => res.status(201).json({ message: 'saved!', ...destructTodo(todo) }))
      .catch(err => console.log(err));
  },
  update(req, res) {
    TodoModel
      .findById(req.params.id)
      .then((todo) => {
        todo.name = req.body.name;
        todo.completed = req.body.completed ? req.body.completed : todo.completed;
        return todo.save();
      })
      .then(todo => res.status(200).json({ message: 'saved!', ...destructTodo(todo) }))
      .catch(err => console.log(err));
  },
  remove(req, res) {
    TodoModel
      .findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({ message: 'deleted!' }))
      .catch(err => console.log(err));
  },
};
