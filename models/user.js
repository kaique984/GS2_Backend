const db = require('../db/database');
const bcrypt = require('bcryptjs');

const User = {
  create: (username, password, preferences, callback) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err);
      const sql = 'INSERT INTO users (username, password, preferences) VALUES (?, ?, ?)';
      db.run(sql, [username, hashedPassword, JSON.stringify(preferences)], callback);
    });
  },

  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, [username], callback);
  },
};

module.exports = User;
