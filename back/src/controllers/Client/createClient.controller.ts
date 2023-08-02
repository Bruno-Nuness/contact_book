import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interfaces";
import createClientService from "../../services/Client/createClient.service";

const createClientController = async (req: Request, res: Response) => {
  console.log(req.body);
  const client: TClientRequest = req.body;
  const newClient: TClientResponse = await createClientService(client);
  return res.status(201).json(newClient);
};

export default createClientController;
