/**
 * this file basically is the entry point of
 * the app and it's create http server
 * and load the middlewares some middlewares
 * will be execute between the request and the response
 * after that will load the routes
 * lastly create the http server
 */
const express = require('express');
const { port, host } = require('./config.json');

const app = express();

app.use(require('./app/middlewares'));

app.use(require('./app/routes'));

app.listen(port, host, () => console.log(`Listening to http://${host}:${port}`));
