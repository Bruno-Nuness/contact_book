import { Router } from "express";
import createClientController from "../controllers/Client/createClient.controller";
import { emailExists } from "../middlewares/EmailExists.middleware";
const ClientRoute = Router();
ClientRoute.post("", emailExists, createClientController);
export { ClientRoute };
