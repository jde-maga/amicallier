import mongoose from "mongoose";
import UserCreate from "@customTypes/UserCreate.type";

const UserSchema = new mongoose.Schema<UserCreate>({
  username: {
    type: String,
    required: [true, "An username is required"],
    minlength: 3,
    maxlength: 16,
    validate: [
      {
        async validator(username: string) {
          const user = await this.constructor.findOne({ username }, "username");

          return (
            !user || user.username.toLowerCase() !== username.toLowerCase()
          );
        },
        message: "Username is already in use",
      },
      {
        validator: (username: string) => username.match(/^[a-z0-9]+$/i),
        message: "Username must be alphanumeric",
      },
    ],
  },
  gender: String,
  email: String,
  birthday: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
