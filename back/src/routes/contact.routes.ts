import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataValid.middleware";
import {
  ContactSchemaRequestValid,
  ContactSchemaUpdate,
} from "../schemas/contact.schema";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureOwner.middleware";
import { emailExists } from "../middlewares/EmailExists.middleware";
import { fullNameExists } from "../middlewares/fullNameExisits.middleware";
import createContactController from "../controllers/Contact/createContact.controller";
import deleteContactController from "../controllers/Contact/deleteContact.controller";
import listContactController from "../controllers/Contact/listContact.controller";
import updateContactController from "../controllers/Contact/updateContact.controller";
const ContactRouter = Router();
ContactRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(ContactSchemaRequestValid),
  fullNameExists,
  createContactController
);
ContactRouter.get("", ensureAuthMiddleware, listContactController);
ContactRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(ContactSchemaUpdate),
  updateContactController
);
ContactRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactController
);
export { ContactRouter };
