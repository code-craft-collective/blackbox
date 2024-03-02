const app = require('./app');

// all the db related code is moved to db.js
const db = require('./db');

const PORT = process.env.PORT || 5005;

// Connect to the database
db.connect();

// let server;
// // port where server is running
// if (process.env.NODE_ENV !== 'test') {
//   server = server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
