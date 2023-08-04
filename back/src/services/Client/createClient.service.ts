import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { TClientRequest, TClientResponse } from "../../interfaces/client.interfaces";
import { ClientSchema, ClientSchemaResponse } from "../../schemas/client.schemas";
import { hash } from "bcryptjs";
import { Repository } from "typeorm";


type ClientData = Omit<Client, "id">;

const createClientService = async (clientData: TClientRequest): Promise<TClientResponse> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  clientData.password = await hash(clientData.password, 10);
  clientData.registration_date = new Date();

 
  const clientDataWithDefaultAvatar: ClientData = {
    ...clientData,
    avatar: clientData.avatar || "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
  };


  const client: Client = clientRepository.create(clientDataWithDefaultAvatar);


  await clientRepository.save(client);


  const clientParse = ClientSchemaResponse.parse(client);
  return clientParse;
};

export default createClientService;