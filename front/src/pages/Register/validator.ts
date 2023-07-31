import { z } from "zod";

export const schema = z.object({
  full_name: z.string().min(3, "Deve conter ao menos três caracteres"),
  email: z.string().email("Email obrigatório"),
  password: z.string(),
});
export type ClientData = z.infer<typeof schema>;
