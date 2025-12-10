import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  part?: Part;
  closeForm: () => void;
  submitForm: (part: Part) => void;
};

export default function PartForm({ part, closeForm, submitForm }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
      notes: formData.get("notes")?.toString() || "",
    };

    submitForm(partToSubmit);
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
          <Button onClick={closeForm} color="inherit">
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
