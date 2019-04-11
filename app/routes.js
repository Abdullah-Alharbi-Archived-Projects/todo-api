const { Router } = require('express');

const router = new Router();

// require the controllers here
const mainController = require('./controllers/mainController');

// all the routes goes here
router.get('/', mainController.main);


module.exports = router;
