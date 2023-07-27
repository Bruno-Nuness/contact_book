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
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const email: string = req.body.email;

  const existingClient = await clientRepository.findOne({ where: { email } });
  if (existingClient) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
export {emailExists}