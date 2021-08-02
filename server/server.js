const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const index = path.join(__dirname, '../client/index.html');
const PORT = 3000;
const { User, Event } = require('./userModels');
const userController = require('./userController');
const apiRouter = require('./api');

app.use(cors());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));

app.use(express.json());

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(index);
// });

// userController.getUser
app.get('/main', (req, res) => {
  return res.status(200).sendFile(index);
});

app.get('/signup', (req, res) => {
  return res.status(200).sendFile(index);
});

app.use('/api', apiRouter);

app.get('/create', (req, res) => {
  return res.status(200).sendFile(index);
});

app.post('/create', userController.createEvent, (req, res) => {
  return res.status(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
