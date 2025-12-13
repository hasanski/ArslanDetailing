import { Box, Typography } from "@mui/material";
import PartCard from "./PartCard";
import { useParts } from "../../../lib/hooks/useParts";

export default function PartList() {
  const { parts, isPending } = useParts();
  if (!parts || isPending) return <Typography>Loading...</Typography>;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {parts.map(part => (
        <PartCard
          key={part.partID}
          part={part}
        />
      ))}

    </Box>
  )
}
