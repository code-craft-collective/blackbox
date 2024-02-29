const Flight = require('../models/Flight.model');

async function getFlights() {
  try {
    const flights = await Flight.find({});
    return flights;
  } catch (error) {
    console.error('Error fetching flights:', error);

    // return error to be caught by the caller
    return { error: 'Internal Server Error' };
  }
}

module.exports = { getFlights };
