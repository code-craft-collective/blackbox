const mongoose = require('mongoose');

async function teardown() {
  try {
    await mongoose.disconnect();
    await global.mongoServer.stop();
    if (global.server) {
      global.server.close();
    }
  } catch (error) {
    console.error('Error during teardown:', error);
  }
}

module.exports = async () => {
  await teardown();
};
