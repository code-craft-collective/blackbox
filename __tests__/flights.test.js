/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const request = require('supertest');
const app = require('../app');
const Flight = require('../models/Flight.model');

require('dotenv').config();

jest.mock('../models/Flight.model');

jest.setTimeout(10000); // 10 seconds

const mockFlights = [
  {
    _id: '5f5f5f5f5f5f5f5f5f5f5f5f',
    destination: 'Paris',
    airline: 'Air France',
    price: 200,
    departureTime: '2020-09-15T12:00:00.000Z',
    arrivalTime: '2020-09-15T15:00:00.000Z',
  },
  {
    _id: '5f5f5f5f5f5f5f5f5f5f5f5f',
    destination: 'London',
    airline: 'British Airways',
    price: 150,
    departureTime: '2020-09-15T12:00:00.000Z',
    arrivalTime: '2020-09-15T15:00:00.000Z',
  },
  {
    _id: '5f5f5f5f5f5f5f5f5f5f5f5f',
    destination: 'New York',
    airline: 'Delta',
    price: 300,
    departureTime: '2020-09-15T12:00:00.000Z',
    arrivalTime: '2020-09-15T15:00:00.000Z',
  },
];

const mockDestination = [
  { destination: 'Paris' },
  { destination: 'London' },
  { destination: 'New York' },
  // add more mock flights as needed
];

const testCases = [
  {
    mockFlights,
    expectedStatus: 200,
    expectedContentType: 'json',
    expectedBody: mockFlights,
    endPoint: '/api/flights/all',
  },
  {
    mockFlights,
    expectedStatus: 200,
    expectedContentType: 'json',
    expectedBody: mockDestination,
    endPoint: '/api/flights/destination',
  },
];

describe('Test the /api/flights/all route', () => {
  test.each(testCases)(
    'it should respond with 200 status and application/json content type',
    async (testCase) => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockFlights),
        };
      });
      const response = await request(app).get(testCase.endPoint);
      expect(response.statusCode).toBe(testCase.expectedStatus);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining(testCase.expectedContentType)
      );
      // expect(response.body).toEqual(testCase.expectedBody);
    }
  );

  test('It should respond with a 200 status and application/json content type', async () => {
    Flight.find.mockResolvedValue(mockFlights);
    const response = await request(app).get('/api/flights/all');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
});
