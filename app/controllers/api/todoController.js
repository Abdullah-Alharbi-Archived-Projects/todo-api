const TodoModel = require('../../models/Todo');

module.exports = {
  index(req, res) {
    TodoModel
      .find()
      .then(todos => res.status(200).json(todos))
      .catch(err => console.log(err));
  },
};
