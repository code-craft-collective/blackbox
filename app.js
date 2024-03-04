const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const flightRoutes = require('./services/flights');
const userRoutes = require('./services/users');
const authRoutes = require('./routes/auth.routes');

const PORT = process.env.PORT || 5005;

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

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
