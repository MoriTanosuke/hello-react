'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('<html><body><p>Hello world</p><p>' + new Date() + '</p></body></html>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

