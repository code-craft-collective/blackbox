const app = require('./app');

// moved db and server connection because of testing

// all the db related code is moved to db.js
const db = require('./db');

const PORT = process.env.PORT || 5005;

const production = process.env.PRODUCTION;

// Connect to the database
db.connect();

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(production, () => {
  console.log(`Server is running on url: ${production}`);
});
