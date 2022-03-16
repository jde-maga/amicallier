import { Router } from "express";

import userCreateController from "./create/create.controller";
import userDeleteController from "./delete/delete.controller";

const UserRouter = Router();

UserRouter.post("/create", userCreateController);
UserRouter.delete("/delete/:id", userDeleteController);

export default UserRouter;
