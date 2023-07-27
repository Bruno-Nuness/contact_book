import { z } from "zod";

const ClientSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  password: z.string(),
  registration_date: z.date(),
});
const ClientSchemaRequest = ClientSchema.omit({
  id: true
});
const ClientSchemaResponse = ClientSchema.omit({
  password: true,
});
export { ClientSchema, ClientSchemaRequest, ClientSchemaResponse };
