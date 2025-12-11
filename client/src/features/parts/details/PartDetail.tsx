import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useParts } from "../../../lib/hooks/useParts"

type Props = {
    selectedPart: Part
    cancelSelectPart: () => void
    openForm: (id: number) => void

}
export default function PartDetail({ selectedPart, cancelSelectPart, openForm }: Props) {
    const {parts} = useParts();
    const part = parts?.find(p => p.partID === selectedPart.partID);
    if (!part) {
        return <Typography variant="h6">Part not found</Typography>
    }
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component='img' src={`/images/categoryImages/${part.partID}.jpg`} />
            <CardContent>
                <Typography variant="h5">{part.partName}</Typography>
                <Typography variant="subtitle1" fontWeight={'light'}>{part.notes}</Typography>
                <Typography variant="body1">{part.defaultUnitPrice}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(part.partID)} color="primary" size="small">Edit</Button>
                <Button onClick={cancelSelectPart} color="inherit" size="small">Cancel</Button>

            </CardActions>
        </Card>
    )
}
