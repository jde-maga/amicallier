import request from "supertest";
import express from "express";
import router from "@routes/router";

const app = express();

app.use(router);

describe("User Create Controller", () => {
  it("should validate username", (done) => {
    request(app).post("/create").send({}).expect(200, done);
  });
});
