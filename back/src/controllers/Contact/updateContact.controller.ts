import { Request, Response } from "express-serve-static-core";
import updateContactService from "../../services/Contact/updateContact.service";
const updateContactController = async (req: Request, res: Response) => {
  const updateContact = await updateContactService(
    req.body,
    Number(req.params.id)
  );
  return res.json(updateContact);
};
export default updateContactController;
