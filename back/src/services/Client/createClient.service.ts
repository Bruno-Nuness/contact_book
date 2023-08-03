import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interfaces";
import { ClientSchemaResponse } from "../../schemas/client.schemas";
import { hash } from "bcryptjs";
import { Repository } from "typeorm";

const createClientService = async (
  clientData: TClientRequest
): Promise<TClientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  console.log("antes", clientData);
  clientData.password = await hash(clientData.password, 10);
  clientData.registration_date = new Date();
  console.log("depois");

  const client: TClientResponse = clientRepository.create(clientData);
  await clientRepository.save(client);
  const clientParse = ClientSchemaResponse.parse(client);
  return clientParse;
};
export default createClientService;
