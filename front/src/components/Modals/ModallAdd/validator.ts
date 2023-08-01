import { z } from "zod";

export const schema = z.object({
  full_name: z.string().min(3, "Deve conter ao menos três caracteres"),
  email: z.string().email("Email obrigatório"),
  phone_number: z.string().min(10, "Telefone inválido").max(15, "Telefone inválido"),
});
export type ContactData = z.infer<typeof schema>;
