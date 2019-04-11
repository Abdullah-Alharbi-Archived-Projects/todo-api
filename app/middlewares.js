const { Router } = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = new Router();


// use any middleware here
router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


module.exports = router;
