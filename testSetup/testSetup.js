const mongoose = require('mongoose');

// Clean up mongoose models and reset state after each test
async function cleanup() {
  await mongoose.connection.dropDatabase();
}

module.exports = {
  cleanup,
};
