import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Client } from "../entities/client.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";


const emailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
    const email: string = req.body.email;

    const emailExist = await clientRepository.exist({ where: { email: email } });

    if (emailExist) {
      throw new AppError("Email already exists", 409);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
export {emailExists}