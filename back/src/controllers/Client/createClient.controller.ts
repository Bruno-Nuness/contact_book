import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interfaces";
import createClientService from "../../services/Client/createClient.service";
import ListClientService from "../../services/Client/listClient.service";
import updateClientService from "../../services/Client/uppdateClient.service";
import DeleteClientService from "../../services/Client/deleteClient.service";
const createClientController = async (req: Request, res: Response) => {
  console.log(req.body);
  const client: TClientRequest = req.body;
  const newClient: TClientResponse = await createClientService(client);
  return res.status(201).json(newClient);
};
const listClientController = async (req: Request, res: Response) => {
  const client = await ListClientService(Number(req.params.id));
  return res.json(client);
};
const updateClientController = async (req: Request, res: Response) => {
  const updateClient = await updateClientService(
    req.body,
    Number(req.params.id)
  );
  return res.json(updateClient);
};

const deleteClientController = async (req: Request, res: Response) => {
  await DeleteClientService(Number(req.params.id));
  return res.status(204).send();
};
export {
  createClientController,
  listClientController,
  updateClientController,
  deleteClientController,
};
