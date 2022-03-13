import express from "express";
import mongoose from "mongoose";

import UserModel from "../../database/models/User";

const signupRouter = express.Router();

signupRouter.get("/signup", (req, res) => {
  console.log("hello !", req.body);
  res.send("Bjr lole");

  const user = new UserModel(req.body);

  user.save();
});

signupRouter.post("/signup", (req, res) => {
  console.log("hello !", req.body);
  res.send("Bjr lole");

  const user = new UserModel(req.body);

  user.save();
});

export default signupRouter;
