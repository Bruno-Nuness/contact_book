import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/Client/createClient.controller";
import { emailExists } from "../middlewares/EmailExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { isUserMiddleware } from "../middlewares/isUser.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataValid.middleware";
import { ClientRegister } from "../schemas/client.schemas";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureOwner.middleware";
import { ContactSchemaUpdate } from "../schemas/contact.schema";

const ClientRoute = Router();
ClientRoute.post(
  "",
  emailExists,
  ensureDataIsValid(ClientRegister),
  createClientController
);
ClientRoute.get(
  "/:id",
  ensureAuthMiddleware,
  isUserMiddleware,
  listClientController
);
ClientRoute.patch(
  "/:id",
  ensureAuthMiddleware,
  isUserMiddleware,
  ensureDataIsValid(ContactSchemaUpdate),
  updateClientController
);
ClientRoute.delete(
  "/:id",
  ensureAuthMiddleware,
  isUserMiddleware,
  deleteClientController
);
export { ClientRoute };
