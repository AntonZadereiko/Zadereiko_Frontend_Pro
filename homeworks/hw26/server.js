const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/api/message', (req, res) => {
  const message = { message: 'Це ваше повідомлення.' };
  res.json(message);
});

app.post('/api/showMessage', (req, res) => {
  const { message } = req.body;

  res.json({ result: 'success', message: 'Повідомлення успішно отримано.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

