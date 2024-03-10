const mongoose = require('mongoose');

const { Schema } = mongoose;

const TicketSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  flightNumber: String,
  departure: String,
  arrival: String,
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
