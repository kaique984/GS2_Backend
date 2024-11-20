const express = require('express');
const db = require('../db/database'); // Importa a conexão com o banco de dados

const router = express.Router();

// Exemplo de rota para registrar um usuário
router.post('/register', (req, res) => {
  const { username, password, preferences } = req.body;

  // Insere um novo usuário no banco de dados
  const stmt = db.prepare("INSERT INTO users (username, password, preferences) VALUES (?, ?, ?)");
  stmt.run([username, password, preferences], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

module.exports = router;
    