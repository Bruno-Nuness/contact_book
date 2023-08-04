import { Request, Response } from "express-serve-static-core";
import DeleteContactService from "../../services/Contact/deleteContact.service";
const deleteContactController = async (req: Request, res: Response) => {
  await DeleteContactService(Number(req.params.id));
  return res.status(204).send();
};
export default deleteContactController;
