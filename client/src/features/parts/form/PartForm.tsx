import { Box, Button, Paper, Typography } from "@mui/material";
import { useParts } from "../../../lib/hooks/useParts";
import { useNavigate, useParams } from "react-router";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { partSchema, type PartSchema } from "../../../lib/schemas/partSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./categoryOptions";


export default function PartForm() {
  const { control, reset, handleSubmit } = useForm<PartSchema>({
    mode: 'onTouched',
    resolver: zodResolver(partSchema),
    defaultValues: {
      partName: "",
      partNumber: "",
      category: "",
      defaultUnitPrice: 0,
      notes: "",
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { updatePartMutation, createPartMutation, part, isPartLoading } = useParts(id ? parseInt(id) : undefined);

  useEffect(() => {
    if (part) reset({
      ...part,

    });
  }, [part, reset]);

  //   useEffect(() => {
  //   if (part) {
  //     reset({
  //       ...part,
  //       defaultUnitPrice: part.defaultUnitPrice ?? 0,
  //     });
  //   }
  // }, [part, reset]);
  const onSubmit = async (data: PartSchema) => {
    const { ...rest } = data;
    const flattenedData = { ...rest };
    try {
      if (part) {
        await updatePartMutation.mutateAsync({ ...part, ...flattenedData }, {
          onSuccess: () => navigate(`/parts/${part.partID}`)
        });
      } else {
        createPartMutation.mutate(flattenedData, {
          onSuccess: (createdPartID) => navigate(`/parts/${createdPartID}`)
        })
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);

    // if (part) {
    //   // حالة Edit
    //   partToSubmit.partID = part.partID; // نتأكد إنه نفس الـ ID
    //   await updatePartMutation.mutateAsync(partToSubmit);
    //   navigate(`/parts/${part.partID}`);
    // } else {
    //   // حالة Create

    //   createPartMutation.mutate(partToSubmit, {
    //     onSuccess: (createdPartID) => {
    //       navigate(`/parts/${createdPartID}`);
    //     }
    //   });
    // }

  }

  if (isPartLoading) return <Typography variant="h6">Loading...</Typography>;

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {part ? "Edit Part" : "Create Part"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        {/* <TextField
          {...register('partName')}
          label="Part Name"
          defaultValue={part?.partName ?? ""}
          error={!!errors.partName}
          helperText={errors.partName?.message}
        /> */}
        <TextInput label='Part Name' control={control} name='partName' />
        <TextInput label='Part Number' control={control} name='partNumber' />
        {/* <TextInput label='Category' control={control} name='category' /> */}
        <Box display={'flex'} gap={3}>
          <SelectInput items={categoryOptions} label='Category' control={control} name='category' />
          <TextInput<PartSchema>
            name="defaultUnitPrice"
            control={control}
            label="Default Unit Price"
            type="number"
          />
        </Box>


        <TextInput label='Notes' control={control} name='notes' />

        {/* <TextField
          {...register('partNumber')}
          label="Part Number"
          defaultValue={part?.partNumber ?? ""}
          error={!!errors.partNumber}
          helperText={errors.partNumber?.message}
        />
        <TextField
          {...register('category')}
          label="Category"
          defaultValue={part?.category ?? ""}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
        <TextField
          {...register("defaultUnitPrice", {
            valueAsNumber: true,
            // لو تركها فاضية: خليها undefined بدل NaN
            setValueAs: (v) => (v === "" || v === null ? undefined : Number(v)),
          })}
          label="Price"
          type="number"
          defaultValue={part?.defaultUnitPrice ?? ""}
          error={!!errors.defaultUnitPrice}
          helperText={errors.defaultUnitPrice?.message}
        />
        <TextField
          {...register('notes')}
          label="Notes"
          defaultValue={part?.notes ?? ""}
          error={!!errors.notes}
          helperText={errors.notes?.message}
        /> */}

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
