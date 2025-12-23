type Part = {
  partID: number;
  partName: string;
  partNumber: string;
  category: string;
  defaultUnitPrice: number;
  notes: string;
};
type CreatePartDto = Omit<Part, "partID">;
