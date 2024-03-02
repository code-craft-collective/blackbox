const mongoose = require('mongoose');

async function teardown() {
  try {
    console.log('disconnect aboout to start');
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
