const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// to use .env file
require('dotenv').config();

// all the db related code is moved to db.js
const db = require('./db');

// services for flights and user
const flightRoutes = require('./services/flights');
const userRoutes = require('./services/users');
const authRoutes = require('./routes/auth.routes');

const PORT = process.env.PORT || 5005;

const app = express();

// Connect to the database
db.connect();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// just a dummy sample route that will be deleted later
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// using prefix routes, that is imported from fetchFlights.js
// end point will be /api/flights --> to get all flights
app.use('/api/flights', flightRoutes);

// create a new entry route for user below
app.use('/api/users', userRoutes);

app.use('/auth', authRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// port where server is running
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
