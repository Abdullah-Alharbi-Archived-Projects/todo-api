const { Router } = require('express');

const router = new Router();

const mainController = require('./controllers/api/mainController');
const todoController = require('./controllers/api/todoController');


router
  /**
   * @route  GET /api/
   * @desc   welcome message
   * @access Public
   */
  .get('/', mainController.index);


// todo routes here
router
  /**
   * @route  GET /api/todo/
   * @desc   get all the todos
   * @access Public
   */
  .get('/todo/', todoController.index)

  /**
   * @route  POST /api/todo/
   * @desc   create new todo
   * @access Public
   */
  .post('/todo/', todoController.store)

  /**
   * @route  PATCH /api/todo/:id
   * @desc   update todo
   * @access Public
   */
  .patch('/todo/:id', todoController.update);


module.exports = router;
