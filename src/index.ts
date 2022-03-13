import express from "express";

import "./database/init";

import signupRouter from "./server/controller/signup";

const app = express();
const PORT = 8100;

app.use(express.json());

app.listen(PORT, () => {
  console.info(`App running on port ${PORT}`);
});

app.use(signupRouter);
