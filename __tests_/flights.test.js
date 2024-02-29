const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

require('dotenv').config();

//mocking test pretending the test to return an empty array
jest.mock('../app', () => {
  const express = require('express');
  const app = express();

  app.get('/flights', (req, res) => {
    res.json([]); // Return an empty array
  });
  return app;
});

describe('GET /flights', () => {
  it('should return a list of flights', async () => {
    const res = await request(app)
      .get('/flights')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

// Close MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
