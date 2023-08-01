import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Client } from "../entities/client.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const LoginVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const clientRepository: Repository<Client> =
      AppDataSource.getRepository(Client);
    const email: string = req.body.email;
    const password: string = req.body.password;

    const emailExist = await clientRepository.exist({
      where: { email: email },
    });
    const passwordExist = await clientRepository.exist({
      where: { password: password },
    });

    if (!emailExist || passwordExist) {
      throw new AppError("Invalid email or password.", 409);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
export { LoginVerification };
