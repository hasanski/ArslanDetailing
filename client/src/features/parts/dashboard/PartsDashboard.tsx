
import Grid from "@mui/material/Grid";
import PartList from "./PartList";



export default function PartsDashboard() {


  return (
    <Grid container spacing={3}>
      <Grid size={7} >
        <PartList />
      </Grid>
      <Grid size={5}>
        Part filters and details go here
      </Grid>
    </Grid>
  )
}
