const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  flightNumber: String,
  departure: String,
  arrival: String,
});

const Ticket = mongoose.model('tickets', ticketSchema);

module.exports = Ticket;
