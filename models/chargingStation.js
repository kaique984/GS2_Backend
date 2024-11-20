const db = require('../db/database');

const ChargingStation = {
  create: (name, energySource, status, callback) => {
    const sql = 'INSERT INTO chargingStations (name, energySource, status) VALUES (?, ?, ?)';
    db.run(sql, [name, energySource, status], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM chargingStations';
    db.all(sql, callback);
  },

  update: (id, status, callback) => {
    const sql = 'UPDATE chargingStations SET status = ? WHERE id = ?';
    db.run(sql, [status, id], callback);
  },
};

module.exports = ChargingStation;
