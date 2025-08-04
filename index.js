// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('You Have Successfully Deployed The Node.js Application');
});

module.exports = app;
