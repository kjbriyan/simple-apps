const request = require('supertest');
const mysql = require('mysql');
require('dotenv').config();

const connection = require('../middleware/db_connect');
const app = require('../app'); // Replace with the path to your application file

describe('Unit Test /', () => {
  it('should respond with index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Unit Test /app1', () => {
    it('should respond with "Hello App1!"', async () => {
      const response = await request(app).get('/app1');
      expect(response.status).toBe(200);
    });
  });

  describe('Unit Test /app2', () => {
    it('should respond with "Hello App2!"', async () => {
      const response = await request(app).get('/app2');
      expect(response.status).toBe(200);
    });
  });

  describe('Unit Test /about', () => {
    it('this web is for testing devops', async () => {
      const response = await request(app).get('/about');
      expect(response.status).toBe(200);
    });
  });

describe('Integration Test Connect Database', () => {
  beforeEach(() => {
    // Set the connection for the application to use
    app.set('connection', connection.connect);
  });

  afterEach(() => {
    // Close the connection pool after the tests are done
    connection.end();
  });

  describe('Unit Test /users', () => {
    it('[{"id":2,"name":"brian","email":"brian@gmail.com","no_telp":5551233},{"id":1,"name":"dominic","email":"dominic@gmail.com","no_telp":5551234}]', async () => {
      const response = await request(app).get('/users');
      expect(response.status).toBe(200);
    });
  });

});