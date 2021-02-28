import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database'

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  })
  
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/Users")
    .send({
      email: "user@example.comm",
      name: "userr"
    });
    expect(response.status).toBe(201);
  })

  // it("Should not be able to create a new user", async () => {
  //   const response = await request(app).post("/Users")
  //   .send({
  //     email: "user@example.com",
  //     name: "user"
  //   });
  //   expect(response.status).toBe(400);
  // })
})