const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => res.json({ status: 'UP' }));

describe('GET /health', () => {
  it('should return status UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('UP');
  });
});
