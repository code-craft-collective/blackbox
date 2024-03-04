// we need the Router() method of the express module
// to create new route handlers
const express = require('express');

const router = express.Router();

// this is the model we get from the schema
// and this we will use it to fetch the data from the database
const Flight = require('../models/Flight.model');

// this is the mock data we are using
// const flightJson = require('../flights.json');

router.get('/all', async (req, res) => {
  try {
    // we are using the model to get the data from the database
    // uncomment 2 lines below if you want to fetch the data from the DB
    const flights = await Flight.find({});
    res.status(200).json(flights);

    // we are using the json file to get the mock data
    // res.status(200).json(flightJson);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/destination', async (req, res) => {
  try {
    const flights = await Flight.find({}).select('destination');

    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/airline', async (req, res) => {
  try {
    const flights = await Flight.find({}).select('airline');
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/price', async (req, res) => {
  try {
    const flights = await Flight.find({}).select('price');
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/departureTime', async (req, res) => {
  try {
    const flights = await Flight.find({}).select('departureTime');
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/arrivalTime', async (req, res) => {
  try {
    const flights = await Flight.find({}).select('arrivalTime');
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
