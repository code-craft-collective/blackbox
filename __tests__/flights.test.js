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

const mockReturnDataFromSingleEndpoint = [
  { someKey: 'someValue' },
  { someKey: 'someValue' },
  { someKey: 'someValue' },
];

describe('Test the /api/flights route', () => {
  describe('GET /api/flights/all', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockResolvedValue(mockFlights);
      const response = await request(app).get('/api/flights/all');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('GET /api/flights/destination', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockReturnDataFromSingleEndpoint),
        };
      });
      const response = await request(app).get('/api/flights/destination');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('GET /api/flights/airline', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockReturnDataFromSingleEndpoint),
        };
      });
      const response = await request(app).get('/api/flights/airline');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('GET /api/flights/price', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockReturnDataFromSingleEndpoint),
        };
      });
      const response = await request(app).get('/api/flights/price');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('GET /api/flights/departureTime', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockReturnDataFromSingleEndpoint),
        };
      });
      const response = await request(app).get('/api/flights/departureTime');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('GET /api/flights/arrivalTime', () => {
    test('It should respond with a 200 status and application/json content type', async () => {
      Flight.find.mockImplementation(() => {
        return {
          select: jest.fn().mockResolvedValue(mockReturnDataFromSingleEndpoint),
        };
      });
      const response = await request(app).get('/api/flights/arrivalTime');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });
});
