const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

require('dotenv').config();

describe('Test the /api/flights/all route', () => {
  test('It should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/all');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  test('GET /destination should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/destination');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  test('GET /airline should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/airline');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  test('GET /price should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/price');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  test('GET /departureTime should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/departureTime');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  test('GET /arrivalTime should respond with a 200 status and application/json content type', async () => {
    const response = await request(app).get('/api/flights/arrivalTime');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
});

// Close MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
