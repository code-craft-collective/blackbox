const request = require('supertest');
const app = require('../app'); // adjust the path as needed

describe('Express application', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(0, done); // start server on a random free port
  });

  afterAll(async () => {
    await server.close(); // close server after all tests
  });

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
