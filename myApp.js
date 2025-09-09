const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) return console.error(err);
  console.log(hash);

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) return console.error(err);
    console.log(res); // true

    bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
      if (err) return console.error(err);
      console.log(res); // false
    });
  });
});
//END_ASYNC

//START_SYNC
//END_SYNC

module.exports = app;
