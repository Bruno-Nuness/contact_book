import { Request, NextFunction, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entitie";

const isUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ClientRepository = AppDataSource.getRepository(Client);
  const clientId = req.params.id;

  const ClientOwner = await ClientRepository.findOne({
    where: {
      id: Number(clientId),
    },
  });

  if (!ClientOwner) {
    return res.status(404).json({
      message: "Client not found.",
    });
  }

  return next();
};

export { isUserMiddleware };
