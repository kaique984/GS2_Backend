const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');  // Importa a conexão com o banco de dados
const authRoutes = require('./routes/auth');  // Supondo que você tenha rotas de autenticação

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defina as rotas
app.use('/auth', authRoutes);

// Exemplo de uma rota para listar estações de recarga
app.get('/chargingStations', (req, res) => {
  db.all("SELECT * FROM chargingStations", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ stations: rows });
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
