/**
 * this file basically is the entry point of
 * the app and it's create http server
 * and load the middlewares some middlewares
 * will be execute between the request and the response
 * after that will load the routes
 * lastly create the http server
 */
const express = require('express');
// eslint-disable-next-line no-unused-vars
const database = require('./app/database');
const { port, host } = require('./config.json');

const app = express();

app.use(require('./app/middlewares'));

app.use(require('./app/routes'));

app.use('/api/', require('./app/api'));

app.listen(port, host, () => console.log(`Listening to http://${host}:${port}`));
