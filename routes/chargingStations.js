const express = require('express');
const ChargingStation = require('../models/chargingStation');

const router = express.Router();

// Consulta todas as estações de recarga
router.get('/', (req, res) => {
  ChargingStation.getAll((err, stations) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching stations' });
    }
    res.json(stations);
  });
});

// Atualiza o status de uma estação de recarga
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  ChargingStation.update(id, status, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating station status' });
    }
    res.json({ message: 'Station status updated successfully' });
  });
});

module.exports = router;
