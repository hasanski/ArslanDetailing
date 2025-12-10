import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    part: Part
    cancelSelectPart: () => void
    openForm: (id: number) => void

}
export default function PartDetail({ part, cancelSelectPart, openForm }: Props) {
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
