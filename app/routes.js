/**
 * this file will be dictionary for all
 * the routes first it's create new router
 * then it's call the method that in the controller
 * and lastly export that router to be used in the server.js file
 */
const { Router } = require('express');

const router = new Router();

// all the controllers goes here
const mainController = require('./controllers/mainController');

// all the routes goes here
router.get('/', mainController.index);


module.exports = router;
