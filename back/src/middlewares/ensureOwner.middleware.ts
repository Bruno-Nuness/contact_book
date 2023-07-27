import { Request, NextFunction, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ContactRepository = AppDataSource.getRepository(Contact);
  const ContactId = req.params.id;
  const clientId = res.locals.userId;
  const Contacts = await ContactRepository.findOne({
    where: {
      id: Number(ContactId),
    },
    relations: {
      client: true,
    },
  });
  if (!Contacts) {
    return res.status(404).json({
      message: "Contact not found.",
    });
  }
  if (Contacts.client.id != clientId) {
    return res.status(403).json({
      message: "You dont't have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
