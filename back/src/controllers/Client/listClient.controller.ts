import ListClientService from "../../services/Client/listClient.service";
import { Request, Response } from "express";

const listClientController = async (req: Request, res: Response) => {
  const client = await ListClientService();
  return res.json(client);
};

export default listClientController;
