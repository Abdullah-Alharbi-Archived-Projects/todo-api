module.exports = {
  destructTodo(obj) {
    return {
      _id: obj.id,
      name: obj.name,
      completed: obj.completed,
      date: obj.date,
    };
  },
};
