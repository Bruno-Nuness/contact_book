import { Request, Response } from "express-serve-static-core";
import { createContactService } from "../../services/Contact/createContact.service";
import ListContactService from "../../services/Contact/listContact.service";
import updateContactService from "../../services/Contact/updateContact.service";
import DeleteContactService from "../../services/Contact/deleteContact.service";
const createContactController = async (req: Request, res: Response) => {
  const clientId = res.locals.userId;
  const newContact = await createContactService(req.body, clientId);
  return res.json(newContact);
};
const listContactController = async (req: Request, res: Response) => {
  const clientId = res.locals.userId;
  const contacts = await ListContactService(clientId);
  return res.json(contacts);
};
const updateContactController = async (req: Request, res: Response) => {
  const updateContact = await updateContactService(
    req.body,
    Number(req.params.id)
  );
  return res.json(updateContact);
};
const deleteContactController = async (req: Request, res: Response) => {
  await DeleteContactService(Number(req.params.id));
  return res.status(204).send();
};
export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
