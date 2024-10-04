const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to our chat app');
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});

module.exports = app;
