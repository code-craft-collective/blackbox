/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app'); // adjust the path as needed

describe.skip('Express application', () => {
  test('GET / should respond with a greeting', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, this is your Express server!');
  });

  test('GET /nonexistentroute should respond with a 404 status', async () => {
    const response = await request(app).get('/nonexistentroute');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });
});
