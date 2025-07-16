import z from "zod/v4";

export const signatureSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  position: z.string().min(1, { message: "Position is required" }).optional(),
  username: z.email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
});
