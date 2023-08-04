import { Request, Response } from "express-serve-static-core";
import { createContactService } from "../../services/Contact/createContact.service";
const createContactController = async (req: Request, res: Response) => {
  const clientId = res.locals.userId;
  const newContact = await createContactService(req.body, clientId);
  return res.json(newContact);
};
export default createContactController;
