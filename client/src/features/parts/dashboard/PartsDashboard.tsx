
import Grid from "@mui/material/Grid";
import PartList from "./PartList";
import PartFilter from "./PartFilter";



export default function PartsDashboard() {


  return (
    <Grid container spacing={3}>
      <Grid size={8} >
        <PartList />
      </Grid>
      <Grid size={4}>
        <PartFilter />
      </Grid>
    </Grid>
  )
}
