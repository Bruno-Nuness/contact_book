import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors/AppError";

const DeleteClientService = async (clienttId: number): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id: clienttId });
  if (!client) {
    throw new AppError("Client not found.", 404);
  }
  await clientRepository.remove(client);
};
export default DeleteClientService;
