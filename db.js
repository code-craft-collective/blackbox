const mongoose = require('mongoose');

const nameOfDatabase = 'Plane';

async function connect() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${nameOfDatabase}`, {});
    console.log(`Connected to Database: "${nameOfDatabase}"`);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log(`Disconnected from Database: "${nameOfDatabase}"`);
  } catch (error) {
    console.error('Error disconnecting from MongoDB', error);
  }
}

async function dropDatabase() {
  try {
    await mongoose.connection.dropDatabase();
    console.log(`Dropped Database: "${nameOfDatabase}"`);
  } catch (error) {
    console.error('Error dropping Database', error);
  }
}

module.exports = { connect, disconnect, dropDatabase };
