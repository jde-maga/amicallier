import { Request, Response } from "express";
import { validationResult, body } from "express-validator";

import errorFormatter from "@utils/errorFormatter";
import userCreate from "./create.helper";

const userCreateController = [
  body("username").exists().isAlphanumeric().isLength({ min: 3, max: 16 }),
  body("email").exists().isEmail(),
  body("password").exists().isString().isLength({ min: 8 }),
  body("gender").exists().isIn(["male", "female"]),
  body("birthday").exists().isDate(),
  async (req: Request, res: Response) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const formattedErrors = validationErrors
        .formatWith(errorFormatter)
        .array();

      res.status(400).send(formattedErrors);
      return;
    }

    try {
      const user = await userCreate({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        birthday: req.body.birthday,
      });
      res.status(200).send(user);
    } catch (e) {
      res.status(409).send(e.message);
    }
  },
];

export default userCreateController;
