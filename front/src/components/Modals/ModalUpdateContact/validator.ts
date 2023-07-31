import { z } from "zod";
export const schema = z.object({
  full_name: z
    .string()
    .min(4, "Nome deve conter no mínimo 4 caracteres")
    .optional(),
  phone: z.number().min(8, "Deve conter 8 caracteres").optional(),
  email: z.string().email("Deve ser um email valido "),
});
