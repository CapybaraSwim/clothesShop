const express = require('express');
const path = require('path');
const app = express();

// Путь к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Основной маршрут для приложения
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для проверки изображения
app.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, 'public', 'images', imageName));
});

// Запуск сервера
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});