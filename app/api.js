const { Router } = require('express');
const validateObjectId = require('./middleware/validateObjectId');
const mainController = require('./controllers/api/mainController');
const todoController = require('./controllers/api/todoController');

const router = new Router();

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
   * @route  GET /api/todos/
   * @desc   get all the todos
   * @access Public
   */
  .get('/todos/', todoController.index)
  /**
   * @route  GET /api/todos/:id
   * @desc   get todos
   * @access Public
   */
  .get('/todos/:id', validateObjectId, todoController.get)

  /**
   * @route  POST /api/todos/
   * @desc   create new todo
   * @access Public
   */
  .post('/todos/', todoController.store)

  /**
   * @route  PUT /api/todos/:id
   * @desc   update todo
   * @access Public
   */
  .put('/todos/:id', validateObjectId, todoController.update)

  /**
   * @route  DELETE /api/todos/:id
   * @desc   delete todo
   * @access Public
   */
  .delete('/todos/:id', validateObjectId, todoController.remove);


module.exports = router;
