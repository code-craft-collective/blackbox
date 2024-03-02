const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let server;
let mongoServer;

let isMongooseConnected = false;

// async function setup() {
//   try {
//     mongoServer = new MongoMemoryServer();
//     await mongoServer.start();
//     const mongoUri = await mongoServer.getUri();
//     await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isMongooseConnected = true;
//     server = app.listen(0); // start server on a random free port
//   } catch (error) {
//     console.error('Error during setup:', error);
//   }
// }

// async function teardown() {
//   try {
//     await mongoose.disconnect();
//     await mongoServer.stop();
//     if (server) {
//       server.close();
//     }
//   } catch (error) {
//     console.error('Error during teardown:', error);
//   }
// }

// Clean up mongoose models and reset state after each test
async function cleanup() {
  await mongoose.connection.dropDatabase();
}

module.exports = {
  cleanup,
};
