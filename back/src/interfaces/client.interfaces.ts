import { z } from "zod";
import {
  ClientSchema,
  ClientSchemaRequest,
  ClientSchemaResponse,
} from "../schemas/client.schemas";

type TClient = z.infer<typeof ClientSchema>;
type TClientResponse = z.infer<typeof ClientSchemaResponse>;
type TClientRequest = z.infer<typeof ClientSchemaRequest>;

export { TClient, TClientRequest, TClientResponse };
