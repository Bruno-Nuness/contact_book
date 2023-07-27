import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactList,
  TContactResponse,
} from "../../interfaces/contact.interfaces";
import { ContactSchemaResponse } from "../../schemas/contact.schema";

const ListContactService = async (clientId: number): Promise<TContactList> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });
  if (!client) {
    throw new AppError("Client not found.", 404);
  }
  const contacts = await contactRepository.find({
    where: {
      client: client,
    },
  });
  return ContactSchemaResponse.parse(contacts);
};
export default ListContactService