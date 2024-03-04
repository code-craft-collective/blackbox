const request = require('superset');
const mongoose = require('mongoose');
const app = require('../app');

require('dotenv').config();

let server;

beforeAll((done) => {
  server = app.listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

afterAll((done) => {
  mongoose.connection.close(() => {
    server.close(done);
  });
});

test('GET /username should respond with a 200 status and application/json content type', async () => {
  const response = await request(app).get('/api/users/username');
  expect(response.statusCode).toBe(200);
  expect(response.headers)['content-type'].toEqual(
    expect.stringContaining('json')
  );
});

test('GET /email should respond with a 200 status and application/json content type', async () => {
  const response = await request(app).get('/api/users/email');
  expect(response.statusCode).toBe(200);
  expect(response.headers)['content-type'].toEqual(
    expect.stringContaining('json')
  );
});

test('GET /bio should respond with a 200 status and apllication/json content type', async () => {
  const response = await request(app).get('/api/users/bio');
  expect(response.statusCode).toBe(200);
  expect(response.headers)['content-type'].toEqual(
    expect.stringContaining('json')
  );
});

test('GET /image should respond with a 200 status and application/json content type', async () => {
  await request(app).get('/api/users/image');
  expect(response.statusCode).toBe(200);
  expect(response.headers)['content-type'].toEqual(
    expect.stringContaining('json')
  );
});
