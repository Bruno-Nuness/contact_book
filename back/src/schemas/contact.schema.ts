import { z } from "zod";

const ContactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  phone_number: z.string(),
  avatar: z.string().optional(),
  registration_date: z.date(),
});

const ContactSchemaRequest = ContactSchema.omit({
  id: true,
});
const ContactSchemaRequestValid = ContactSchema.omit({
  id: true,
  registration_date: true,
});
const ContactSchemaResponse = z.array(ContactSchema);
const ContactSchemaUpdate = ContactSchema.omit({
  id: true,
}).partial();

export {
  ContactSchema,
  ContactSchemaRequest,
  ContactSchemaResponse,
  ContactSchemaUpdate,
  ContactSchemaRequestValid,
};
