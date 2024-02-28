const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planeSchema = new Schema({
  flightNumber: Number,
  airline: String,
  destination: String,
  departureTime: Date,
  arrivalTime: Date,
  seatAvailability: Boolean,
  bookedSeats: [],
  price: Number,
});

const plane = mongoose.model("Plane", planeSchema);

module.exports = plane;
