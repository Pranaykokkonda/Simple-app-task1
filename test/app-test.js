const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with Hello from Node.js demo app!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js demo app!');
  });
});
