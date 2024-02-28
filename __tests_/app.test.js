const request = require('supertest');

// const { describe, it, expect } = require('jest');

const app = require('../app'); // import your app

describe('GET /', () => {
  it('responds with a 200 status and text format', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello, this is your Express server!');
  });
});

describe('GET /api/flights', () => {
  it('responds with a 200 status and JSON format', async () => {
    const response = await request(app).get('/api/flights');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
});

// Add more tests as needed
