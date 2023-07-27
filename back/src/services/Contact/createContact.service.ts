import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { Contact } from "../../entities/contact.entitie"
import { AppError } from "../../errors/AppError"
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interfaces"
import { ContactSchema } from "../../schemas/contact.schema"

const createContactService = async( data:TContactRequest, clientId: number): Promise<TContactResponse>=>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)
    data.registration_date = new Date()
    const client = await clientRepository.findOne({
        where:{
            id: clientId,
        }
    })
    if(!client){
        throw new AppError("Client not found.", 404)
    }
    const contact = contactRepository.create({
        ...data,
        client
    });
    await contactRepository.save(contact)
    return ContactSchema.parse(contact)
    

}
export {createContactService}