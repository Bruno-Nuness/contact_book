import DeleteClientService from "../../services/Client/deleteClient.service";
import { Request, Response } from "express";

const deleteClientController = async (req: Request, res: Response) => {
  await DeleteClientService(Number(req.params.id));
  return res.status(204).send();
};

export default deleteClientController;
