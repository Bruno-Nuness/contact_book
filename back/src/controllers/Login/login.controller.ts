import { Request, Response } from "express";
import { createTokenService } from "../../services/Login/login.service";
const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await createTokenService({ email, password });
  return res.json({ token });
};
export default loginController;
