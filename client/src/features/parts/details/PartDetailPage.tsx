import { Grid, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useParts } from "../../../lib/hooks/useParts";
import PartDetailsHeader from "./PartDetailsHeader";
import PartDetailsInfo from "./PartDetailsInfo";
import PartDetailsChat from "./PartDetailsChat";
import PartDetailsSidebar from "./PartDetailsSidebar";


export default function PartDetailPage() {
    const { id } = useParams();
    const { part, isPartLoading } = useParts(id ? parseInt(id) : undefined);
    if (isPartLoading) {
        return <Typography variant="h6">Loading...</Typography>
    }
    if (!part) {
        return <Typography variant="h6">Part not found</Typography>
    }
    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <PartDetailsHeader part={part} />
                <PartDetailsInfo part={part} />
                <PartDetailsChat />
            </Grid>
            <Grid size={4}>
                <PartDetailsSidebar />
            </Grid>
        </Grid>
    )
}
