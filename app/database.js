/**
 * this file will be responsible for connecting to the database
 * and export the connection to be used across the project
 */
const mongoose = require('mongoose');

mongoose
  // 1- try to connect to the database
  .connect('mongodb://localhost/todo', { useNewUrlParser: true, useFindAndModify: true })
  // 2- if the connect have been resolved print that the database connected successfully
  .then(() => console.log('Database Connected Successfully!'))
  // 3- otherwise if the connect have been rejected print the error
  .catch(err => console.log('Unable to connect', err));

// export the mongoose object to use in other files
module.exports = mongoose;
