import { Box } from "@mui/material";
import PartCard from "./PartCard";
type Props = {
  parts: Part[]
  selectPart: (partID: number) => void
  selectedPart: Part | undefined
  cancelSelectPart: () => void
}
export default function PartList({ parts, selectPart}: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {parts.map(part => (
        <PartCard 
        key={part.partID} 
        part={part} 
        selectPart={selectPart}
        />
      ))}
      
      </Box>
  )
}
