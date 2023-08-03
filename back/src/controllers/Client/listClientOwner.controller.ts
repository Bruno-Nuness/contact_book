import { Request, Response } from "express";
import listClientOwnerService from "../../services/Client/listClientOwner.service";

const listClienOwnerController = async (req: Request, res: Response) => {
  const client = await listClientOwnerService(Number(req.params.id));
  return res.json(client);
};
export default listClienOwnerController;
