import { Router } from "express";
import { emailExists } from "../middlewares/EmailExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { isUserMiddleware } from "../middlewares/isUser.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataValid.middleware";
import { ClientRegister } from "../schemas/client.schemas";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureOwner.middleware";
import { ContactSchemaUpdate } from "../schemas/contact.schema";
import createClientController from "../controllers/Client/createClient.controller";
import deleteClientController from "../controllers/Client/deleteClient.controller";
import listClientController from "../controllers/Client/listClient.controller";
import updateClientController from "../controllers/Client/updateClient.controller";

const ClientRoute = Router();
ClientRoute.post(
  "",
  emailExists,
  ensureDataIsValid(ClientRegister),
  createClientController
);
ClientRoute.get(
  "",

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
