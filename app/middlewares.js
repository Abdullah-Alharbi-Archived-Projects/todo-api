const { Router } = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const router = new Router();


// use any middleware here
router
  .use(morgan('dev'))
  .use(helmet())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));


module.exports = router;
