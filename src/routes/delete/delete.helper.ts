import UserModel from "@models/User";

const userDelete = async ({ id }) => {
  const deletedUser = await UserModel.findByIdAndDelete(id);

  if (!deletedUser) {
    throw new Error("Error: User Not Found");
  }
};

export default userDelete;
