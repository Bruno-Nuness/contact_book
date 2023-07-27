import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Client } from "../../entities/client.entitie";

const createTokenService = async ({ email, password }: TLoginRequest) => {
  const userRepository = AppDataSource.getRepository(Client);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      userName: user.full_name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: String(user.id),
    }
  );

  return token;
};

export { createTokenService };
