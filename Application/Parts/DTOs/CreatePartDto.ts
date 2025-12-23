export type Part = {
  partID: number;
  partName: string;
  partNumber: string;
  category: string;
  defaultUnitPrice: number;
  notes: string;
};

export type CreatePartDto = Omit<Part, "partID">;
export type UpdatePartDto = Part; // أو خليها Part مباشرة
