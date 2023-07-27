import { Router } from "express";
import loginController from "../controllers/Login/login.controller";

const LoginRouter = Router()
LoginRouter.post("", loginController)
export {LoginRouter}