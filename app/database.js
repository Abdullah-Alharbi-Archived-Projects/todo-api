const mongoose = require('mongoose');
const { mongoURI } = require('../config.json'); // this is the mongodb string

try {
  mongoose
    // 1- try to connect to the database
    .connect(mongoURI)
    // 2- if the connect have been resolved print that the database connected successfully
    .then(() => console.log('Database Connected Successfully!'))
    // 3- otherwise if the connect have been rejected print the error
    .catch(err => console.log('Unable to connect', err));
} catch (O_O) {
  console.log(O_O);
}

// export the mongoose object to use in other files
module.exports = mongoose;
