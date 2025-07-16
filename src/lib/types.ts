import type { z } from "zod/v4";
import { signatureSchema } from "./validations";

export type SignatureProps = z.infer<typeof signatureSchema>;
