import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import router from "@routes/router";

const app = express();
const PORT = 8100;
const MONGO_URI = "mongodb://localhost/amicallier";

mongoose.connect(MONGO_URI, () => {
  console.log("Mongoose succesfully connected");
});

app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.info(`App running on port ${PORT}`);
});

app.use(router);
