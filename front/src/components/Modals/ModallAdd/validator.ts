import { z } from "zod";

export const schema = z.object({
  full_name: z.string().min(3, "Deve conter ao menos três caracteres"),
  email: z.string().email("Email obrigatório"),
  phone_number: z
    .string()
    .min(8, "Telefone inválido, deve conter 8 caracteres")
    .max(8, "Máximo 8 caracteres"),
});
export type ContactData = z.infer<typeof schema>;
