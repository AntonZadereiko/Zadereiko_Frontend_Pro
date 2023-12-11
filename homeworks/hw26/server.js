const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Встановлюємо middleware для обробки JSON
app.use(bodyParser.json());

// Статичні файли (наприклад, HTML)
app.use(express.static('public'));

// Головна сторінка
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Сторінка "Про нас"
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// API для отримання повідомлення
app.get('/api/message', (req, res) => {
    const message = { message: 'Це ваше повідомлення.' };
    res.json(message);
});

// Обробка запиту на отримання повідомлення через window.fetch
app.post('/api/showMessage', (req, res) => {
    const { message } = req.body;

    // Логіка обробки повідомлення тут

    // Приклад: повертаємо повідомлення як JSON
    res.json({ result: 'success', message: 'Повідомлення успішно отримано.' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

