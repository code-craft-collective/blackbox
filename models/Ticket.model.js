const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  flightNumber: String,
  airline: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  seatAvailability: Number,
  bookedSeats: [String],
  price: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Ticket = mongoose.model('tickets', ticketSchema);

module.exports = Ticket;
