import { Request, Response } from "express";
import updateClientService from "../../services/Client/uppdateClient.service";

const updateClientController = async (req: Request, res: Response) => {
    const updateClient = await updateClientService(
      req.body,
      Number(req.params.id)
    );
    return res.json(updateClient);
  };

  export default updateClientController