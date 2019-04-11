const express = require('express');
const { port, host } = require('./config.json');

const app = express();

// this will load all the routes
app.use(require('./app/routes'));
// this will load all the middlewares
app.use(require('./app/middlewares'));

// eslint-disable-next-line no-console
app.listen(port, host, () => console.log(`Listening to http://${host}:${port}`));
