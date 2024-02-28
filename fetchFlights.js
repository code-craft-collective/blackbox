// we need the Router() method of the express module
// to create new route handlers
const express = require('express');

const router = express.Router();

// this is the model we get from the schema
// and this we will use it to fetch the data from the database
const Flight = require('./models/Flight.model');

// this is the mock data we are using
const flightJson = require('./flights.json');

router.get('/flights', async (req, res) => {
  try {
    // we are using the model to get the data from the database
    // uncomment 2 lines below if you want to fetch the data from the DB
    const flights = await Flight.find({});
    res.status(200).json(flights);

    // we are using the json file to get the mock data
    // res.status(200).json(flightJson);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
