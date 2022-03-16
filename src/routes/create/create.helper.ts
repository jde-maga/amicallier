import { hash } from "bcrypt";

import UserCreate from "@customTypes/UserCreate.type";
import UserModel from "@models/User";

const SALT_ROUNDS = 10;

const userCreate = async ({
  username,
  email,
  password,
  gender,
  birthday,
}: UserCreate) => {
  const hashedPassword = await hash(password, SALT_ROUNDS);
  const user = new UserModel({
    username,
    password: hashedPassword,
    email,
    gender,
    birthday,
  });
  const newUser = await user.save();

  return newUser;
};

export default userCreate;
