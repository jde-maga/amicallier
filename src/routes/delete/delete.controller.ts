import errorFormatter from "@utils/errorFormatter";
import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import userDelete from "./delete.helper";

const userDeleteController = [
  param("id").exists().isMongoId(),
  async (req: Request, res: Response) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const formattedErrors = validationErrors
        .formatWith(errorFormatter)
        .array();

      res.status(400).send(formattedErrors);
    }

    try {
      await userDelete({ id: req.params.id });
      res.status(200).send();
    } catch (e) {
      res.status(400).send();
    }
  },
];

export default userDeleteController;
