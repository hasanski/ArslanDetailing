import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router";


export default function PartDetail() {
    const navigate = useNavigate();
    const part = {} as Part; // لاحقاً سيتم جلب الجزء المراد عرضه
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
                <Button component={Link} to={`/parts/${part.partID}`} color="primary" size="small">Edit</Button>
                <Button onClick={()=>navigate('/parts')} color="inherit" size="small">Cancel</Button>
            </CardActions>
        </Card>
    )
}
