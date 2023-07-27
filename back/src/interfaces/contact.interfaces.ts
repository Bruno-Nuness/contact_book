import { z } from "zod";
import {
  ContactSchema,
  ContactSchemaRequest,
  ContactSchemaResponse,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof ContactSchema>;
type TContactRequest = z.infer<typeof ContactSchemaRequest>;
type TContactResponse = z.infer<typeof ContactSchema>;
type TContactList = z.infer<typeof ContactSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

export {
  TContact,
  TContactList,
  TContactRequest,
  TContactResponse,
  TContactUpdate,
};
