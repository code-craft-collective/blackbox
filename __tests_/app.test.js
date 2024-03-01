const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

require('dotenv').config();

let server;

beforeAll((done) => {
  server = app.listen(0, done); // start server on a random free port
});

describe.skip('Placeholder Test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

afterAll((done) => {
  mongoose.connection.close(() => {
    server.close(done); // close server after database connection is closed
  });
});
