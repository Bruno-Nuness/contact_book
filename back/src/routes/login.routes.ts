import { Router } from "express";
import loginController from "../controllers/Login/login.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataValid.middleware";
import { LoginSchema } from "../schemas/client.schemas";
import { LoginVerification } from "../middlewares/ensureDataLogin.middleware";

const LoginRouter = Router();
LoginRouter.post(
  "",
  ensureDataIsValid(LoginSchema),
  LoginVerification,
  loginController
);
export { LoginRouter };
