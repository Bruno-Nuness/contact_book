import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import {  TClientResponse } from "../../interfaces/client.interfaces";
import {ClientSchemaResponse } from "../../schemas/client.schemas";


const ListClientService = async (clientId: number): Promise<TClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });
  if (!client) {
    throw new AppError("Client not found.", 404);
  }

  return ClientSchemaResponse.parse(client);
};
export default ListClientService;
