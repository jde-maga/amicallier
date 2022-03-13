import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost/amicallier";

mongoose.connect(MONGO_URI, () => {
  console.log("Mongoose succesfully connected");
});
