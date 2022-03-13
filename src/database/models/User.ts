import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  gender: String,
  email: String,
  birthday: String,
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
