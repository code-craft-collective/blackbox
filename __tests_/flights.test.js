const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('../app'); // import your Express app
const Flight = require('../models/Flight.model'); // import your Flight model

require('dotenv').config();

describe('GET /api/flights', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    console.log('MONGO URI', mongoUri);

    // Close existing Mongoose connections
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  test.skip('returns all flights', async () => {
    const flight1 = new Flight({
      /* flight1 data */
    });
    const flight2 = new Flight({
      /* flight2 data */
    });
    await flight1.save();
    await flight2.save();

    const response = await request(app).get('/api/flights');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ _id: flight1._id.toString() }),
        expect.objectContaining({ _id: flight2._id.toString() }),
      ])
    );
  });

  describe.only('GET /api/flights', () => {
    it('should return all flights', async () => {
      const res = await request(server).get('/api/flights');
      expect(res.status).toBe(200);
    });
  });
});
