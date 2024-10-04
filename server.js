import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our chat app');
});
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
