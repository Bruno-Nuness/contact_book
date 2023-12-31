import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";

import { AppError } from "../../errors/AppError";
import { TClientResponse } from "../../interfaces/client.interfaces";
import {
  ClientSchemaResponse,
  ClientSchemaResponseList,
} from "../../schemas/client.schemas";

const ListClientService = async (): Promise<TClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.find();
  if (!client) {
    throw new AppError("Client not found.", 404);
  }

  return ClientSchemaResponseList.parse(client);
};
export default ListClientService;
