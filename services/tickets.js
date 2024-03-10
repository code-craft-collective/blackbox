const express = require('express');

const router = express.Router();

const Ticket = require('../models/Ticket.model');

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/purchase', async (req, res, next) => {
  const { flightNumber, departure, arrival, user } = req.body;
  // const user = req.user._id;

  try {
    const ticket = await Ticket.create({
      user,
      flightNumber,
      departure,
      arrival,
    });
    res.status(201).json({ ticket });
  } catch (err) {
    res.status(500).json({ message: 'Error creating ticket' });
  }
});

router.get('/history-tickets', async (req, res, next) => {
  try {
    const allTickets = await Ticket.find({});
    res.status(201).json(allTickets);
  } catch (err) {
    res.status(500).json({ message: 'Error getting all tickets' });
  }
});

module.exports = router;
