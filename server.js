const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.1.3.170';

app.use(express.json());

const filePath = './wishlist.json';
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/wishlist', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Помилка зчитування файлу:", err);
      return res.status(500).send("Помилка сервера");
    }
    res.json(JSON.parse(data || "[]"));
  });
});

app.post('/api/wishlist', (req, res) => {
  const newItem = { ...req.body, id: uuidv4() };

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Помилка зчитування файлу:", err);
      return res.status(500).send("Помилка сервера");
    }

    const items = JSON.parse(data || "[]");
    items.push(newItem);

    fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
      if (err) {
        console.error("Помилка запису в файл:", err);
        return res.status(500).send("Помилка сервера");
      }
      res.status(201).json(newItem);
    });
  });
});

app.put('/api/wishlist/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Помилка зчитування файлу:", err);
      return res.status(500).send("Помилка сервера");
    }

    let items = JSON.parse(data || "[]");
    items = items.map((item) => (item.id === id ? updatedItem : item));

    fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
      if (err) {
        console.error("Помилка запису в файл:", err);
        return res.status(500).send("Помилка сервера");
      }
      res.status(200).json(updatedItem);
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.createServer(app);
server.listen(PORT, HOST, () => {
  console.log(`Сервер запущено на http://${HOST}:${PORT}`);
});
