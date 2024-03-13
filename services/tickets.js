const express = require('express');

const router = express.Router();

const Ticket = require('../models/Ticket.model');

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/purchase', async (req, res, next) => {
  const { tickets, userId } = req.body;
  console.log('REQ', req.body);
  const ticketsWithUser = tickets.map((ticket) => ({
    ...ticket,
    user: userId,
  }));

  // console.log(ticketsWithUser);

  try {
    const newTickets = await Ticket.insertMany(ticketsWithUser);
    res.status(201).json({ newTickets });
  } catch (err) {
    console.log('error new tickets', err);
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
