import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contact.interfaces";
import { ContactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  data: TContactUpdate,
  clientId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const oldContact = await contactRepository.findOneBy({ id: clientId });
  if (!oldContact) {
    throw new AppError("Contact not found.", 404);
  }
  const newContact = contactRepository.create({
    ...oldContact,
    ...data,
  });
  await contactRepository.save(newContact);
  return ContactSchema.parse(newContact);
};
export default updateContactService