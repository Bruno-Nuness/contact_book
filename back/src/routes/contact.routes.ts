import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/Contact/contact.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataValid.middleware";
import { ContactSchema, ContactSchemaRequestValid, ContactSchemaUpdate } from "../schemas/contact.schema";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureOwner.middleware";
import { emailExists } from "../middlewares/EmailExists.middleware";
import { fullNameExists } from "../middlewares/fullNameExisits.middleware";
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
