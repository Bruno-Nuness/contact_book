import { z } from "zod";

const ClientSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  phone_number: z.string(),
  email: z.string(),
  password: z.string(),
  avatar: z.string().optional(),
  registration_date: z.date(),
});
const ClientSchemaRequest = ClientSchema.omit({
  id: true
});
const ClientRegister = ClientSchema.omit({
  id: true,
  registration_date: true,
});
const ClientSchemaResponseList = ClientSchema.omit({
  password: true,
}).array();
const ClientSchemaResponse = ClientSchema.omit({
  password: true,
});
const LoginSchema = ClientSchema.omit({
  id: true,
  registration_date: true,
  phone_number: true,
  full_name: true,
});
export {
  ClientSchema,
  ClientSchemaRequest,
  ClientSchemaResponseList,
  LoginSchema,
  ClientRegister,
  ClientSchemaResponse,
};
