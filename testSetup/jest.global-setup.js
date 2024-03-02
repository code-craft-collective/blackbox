/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

global.server;
global.mongoServer;

async function setup() {
  try {
    console.log('mongoServer about to start');
    global.mongoServer = new MongoMemoryServer();
    await global.mongoServer.start();
    const mongoUri = await global.mongoServer.getUri();
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global.server = app.listen(0); // start server on a random free port
  } catch (error) {
    console.error('Error during setup:', error);
  }
}

module.exports = setup;
