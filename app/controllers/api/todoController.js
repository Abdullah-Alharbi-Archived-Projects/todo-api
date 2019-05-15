const TodoModel = require('../../models/Todo');

module.exports = {
  index(req, res) {
    TodoModel
      .find()
      .sort()
      .then(todos => res.status(200).json(todos))
      .catch(err => console.log(err));
  },
};
