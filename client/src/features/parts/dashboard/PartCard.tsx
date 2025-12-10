import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material"

type Props = {
  part: Part
  selectPart: (partID: number) => void
  deletePart: (partID: number) => void
}

export default function PartCard({part,selectPart, deletePart}: Props) {
  return (
    <Card sx={{borderRadius:3}}>
        <CardContent>
            <Typography variant="h5">{part.partID}</Typography>
            <Typography sx={{color:'text.secondary', mb:1}}>{part.partName}</Typography>
            <Typography variant="body2">{part.partNumber}</Typography>
            <Typography variant="subtitle1">{part.defaultUnitPrice}</Typography>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent: 'space-between', pb:2}}>
            <Chip label={part.category} variant="outlined"/>
            <Box display='flex' gap={3}>
              <Button onClick={()=> selectPart(part.partID)} size="medium" variant="contained">View</Button>
              <Button onClick={()=> deletePart(part.partID)} size="medium" color="error" variant="contained">Delete</Button>
            </Box>
        </CardActions>
    </Card>
  )
}
