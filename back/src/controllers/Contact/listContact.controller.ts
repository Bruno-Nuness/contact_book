import { Request, Response } from "express-serve-static-core";
import ListContactService from "../../services/Contact/listContact.service";
const listContactController = async (req: Request, res: Response) => {
  const clientId = res.locals.userId;
  const contacts = await ListContactService(clientId);
  return res.json(contacts);
};
export default listContactController;
