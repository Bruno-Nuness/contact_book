import { z } from "zod";

export const schema = z.object({
  full_name: z.string().min(3, "Deve conter ao menos três caracteres"),
  email: z.string().email("Email obrigatório"),
  phone_number: z.string().length(8, "Deve conter 8 caracteres"),
  password: z.string(),
  avatar: z.string().optional(),
});
export type ClientData = z.infer<typeof schema>;
