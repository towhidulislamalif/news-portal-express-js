const express = require('express');

const categories = require('./news.json');

const app = express();

const cors = require('cors');

const port = process.env.Port || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
