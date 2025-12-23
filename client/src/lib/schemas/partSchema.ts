import { z } from "zod";
const requiredString = (fieldName: string) =>
  z.string().min(1, `${fieldName} is required`);

export const partSchema = z.object({
  partName: requiredString("PartName"),
  partNumber: requiredString("PartNumber"),
  category: requiredString("Category"),
  //defaultUnitPrice: requiredString("DefaultUnitPrice"),
  defaultUnitPrice: z.number().min(0, "Price must be 0 or more"),
  notes: requiredString("Notes"),
});

export type PartSchema = z.infer<typeof partSchema>;
