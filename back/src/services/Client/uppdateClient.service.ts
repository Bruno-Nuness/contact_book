import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contact.interfaces";
import { ContactSchema } from "../../schemas/contact.schema";


const updateClientService = async (
  data: TContactUpdate,
  clientId: number
): Promise<TContactResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const oldClient = await clientRepository.findOneBy({ id: clientId });
  if (!oldClient) {
    throw new AppError("Client not found.", 404);
  }
  const newContact = clientRepository.create({
    ...oldClient,
    ...data,
  });
  await clientRepository.save(newContact);
  return ContactSchema.parse(newContact);
};
export default updateClientService