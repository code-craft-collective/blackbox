const mongoose = require('mongoose');

const { Schema } = mongoose;

// flight is suitable name than plane
const flightSchema = new Schema({
  flightNumber: Number,
  airline: String,
  departure: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  seatAvailability: Number,
  bookedSeats: [String],
  price: Number,
  rating: Number,
  personalBag: Number,
  checkedBag: Number,
});

// as you can see the third argument is the name of the collection
// is the DB, if it is not there it will create a collection with the
// name of the model in plural
const nameOfCollection = 'flights';
const Flight = mongoose.model('flights', flightSchema, nameOfCollection);

module.exports = Flight;
