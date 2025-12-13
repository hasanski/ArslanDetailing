import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useParts } from "../../../lib/hooks/useParts";



export default function PartForm() {
  const { updatePartMutation, createPartMutation } = useParts();
  const part = {} as Part; // لاحقاً سيتم جلب الجزء المراد تعديله
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const partToSubmit: Part = {
      partID: part?.partID ?? 0,
      partName: formData.get("partName")?.toString() || "",
      partNumber: formData.get("partNumber")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      defaultUnitPrice: parseFloat(
        formData.get("defaultUnitPrice")?.toString() || "0"
      ),
      notes: formData.get("notes")?.toString() || ""

    };

    if (part) {
      // حالة Edit
      partToSubmit.partID = part.partID; // نتأكد إنه نفس الـ ID
      await updatePartMutation.mutateAsync(partToSubmit);
    }else {
      // حالة Create
      await createPartMutation.mutateAsync(partToSubmit);
    }

  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {part ? "Edit Part" : "Create Part"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          name="partName"
          label="Part Name"
          defaultValue={part?.partName ?? ""}
        />
        <TextField
          name="partNumber"
          label="Part Number"
          defaultValue={part?.partNumber ?? ""}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={part?.category ?? ""}
        />
        <TextField
          name="defaultUnitPrice"
          label="Price"
          type="number"
          defaultValue={part?.defaultUnitPrice ?? ""}
        />
        <TextField
          name="notes"
          label="Notes"
          defaultValue={part?.notes ?? ""}
        />

        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={updatePartMutation.isPending || createPartMutation.isPending}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
