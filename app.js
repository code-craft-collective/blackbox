const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const fetchFlightsRoutes = require('./fetchFlights');

const PORT = 5005;

const app = express();

const nameOfDatabase = 'flights-api';
mongoose
  .connect(`mongodb://localhost:27017/${nameOfDatabase}`, {})
  .then((x) => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// using prefix routes, that is imported from fetchFlights.js
// end point will be /api/flights --> to get all flights
app.use('/api', fetchFlightsRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// port where server is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
