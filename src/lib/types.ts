import type { z } from "zod/v4";
import type { signatureSchema } from "./validations";

export type SignatureProps = z.infer<typeof signatureSchema>;

export type BoardMember = {
  name: string;
  email: string;
};
