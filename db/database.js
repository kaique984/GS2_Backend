const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/chargingStations.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    
    // Criação de tabelas, se não existirem
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        preferences TEXT
      )
    `);
    
    db.run(`
      CREATE TABLE IF NOT EXISTS chargingStations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        energySource TEXT NOT NULL,
        status TEXT NOT NULL
      )
    `);
  }
});

module.exports = db;
