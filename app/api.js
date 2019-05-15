const { Router } = require('express');

const router = new Router();

const mainController = require('./controllers/api/mainController');

router.get('/', mainController.index); // /api/


// todo routes here


module.exports = router;
