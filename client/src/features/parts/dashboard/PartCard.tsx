import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useParts } from "../../../lib/hooks/useParts";

type Props = {
  part: Part;
};

export default function PartCard({ part }: Props) {
  const { deletePartMutation } = useParts();

  // حالة الـ Dialog
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = () => {
    setConfirmOpen(true);
  };

  const handleClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmDelete = async () => {
    await deletePartMutation.mutateAsync(part.partID);
    setConfirmOpen(false);
  };

  return (
    <>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5">{part.partID}</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            {part.partName}
          </Typography>
          <Typography variant="body2">{part.partNumber}</Typography>
          <Typography variant="subtitle1">{part.defaultUnitPrice}</Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
        >
          <Chip label={part.category} variant="outlined" />

          <Box display="flex" gap={3}>
            <Button
              onClick={() => {}}
              size="medium"
              variant="contained"
            >
              View
            </Button>

            <Button
              onClick={handleDelete}
              disabled={deletePartMutation.isPending}
              size="medium"
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>

      {/* CONFIRM DELETE DIALOG */}
      <Dialog open={confirmOpen} onClose={handleClose} dir="rtl">
        <DialogTitle>تأكيد الحذف</DialogTitle>

        <DialogContent>
          <Typography>
            هل أنت متأكد من حذف القطعة:
            <strong> {part.partName}</strong>؟
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            إلغاء
          </Button>

          <Button
            onClick={handleConfirmDelete}
            color="error"
            disabled={deletePartMutation.isPending}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
