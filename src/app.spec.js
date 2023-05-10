const {it, expect, describe} = require(`@jest/globals`)
const app = require('./app');
const request = require('supertest');

describe("GET /restaurants", () => {
it("returns an array", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("location");
    expect(response.body[0]).toHaveProperty("cuisine");
  });
});