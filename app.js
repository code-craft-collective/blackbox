const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const flightRoutes = require('./services/flights');
const userRoutes = require('./services/users');
const authRoutes = require('./routes/auth.routes');

const app = express();

// localhost:5173 because the React app is running on port 5173
// if the frontend server is not on port 5173 then cors have to be changed too
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.use('/api/flights', flightRoutes);
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
