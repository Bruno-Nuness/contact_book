import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { Contact } from "../entities/contact.entitie";

const fullNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const contactRepository: Repository<Contact> =
      AppDataSource.getRepository(Contact);
    const email: string = req.body.email;
    const name: string = req.body.full_name;

    const emailExist = await contactRepository.exist({
      where: { email: email },
    });
    const nameExists = await contactRepository.exist({
      where: { full_name: name },
    });

    if (emailExist) {
      throw new AppError("Email already exists", 409);
    }
    if (nameExists) {
      throw new AppError("Name already exists", 409);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
export { fullNameExists };
