import { CalendarToday, Info, Place } from "@mui/icons-material";
import { Divider, Grid, Paper, Typography } from "@mui/material";
type Props ={
  part: Part
}
export default function PartDetailsInfo({part}: Props) {
    return (
        <Paper sx={{ mb: 2 }}>

            <Grid container alignItems="center" pl={2} py={1}>
                <Grid size={1}>
                    <Info color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>{part.notes}</Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center" pl={2} py={1}>
                <Grid size={1}>
                    <CalendarToday color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>1 Jan 2025 at 1:40pm</Typography>
                </Grid>
            </Grid>
            <Divider />

            <Grid container alignItems="center" pl={2} py={1}>
                <Grid size={1}>
                    <Place color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>
                        {part.defaultUnitPrice}, Price
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
