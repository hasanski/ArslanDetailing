
import { AccessTime, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography

} from "@mui/material";
import { Link } from "react-router";

type Props = {
  part: Part;
};

export default function PartCard({ part }: Props) {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? 'You are hosting' : 'You are going';
  const isCanceled = false;
  const color = isHost ? 'secondary' : isGoing ? 'warning' : 'default';
  // حالة الـ Dialog



  return (
    <>
      <Card elevation={3} sx={{ borderRadius: 3 }}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <CardHeader avatar={<Avatar sx={{ height: 80, width: 80 }}></Avatar>}
            title={part.partName}
            titleTypographyProps={{
              fontWeight: 'bold', fontSize: 20
            }}
            subheader={
              <>
                Hosted By {''} <Link to={`/profiles/bob`}>Bob</Link>
              </>
            } />
          <Box display='flex' flexDirection='column' gap={2} mr={2}>
            {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
            {isCanceled && <Chip label='Canceled' color='error' sx={{ borderRadius: 2 }} />}
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <CardContent sx={{ p: 0 }}>
          <Box display="flex" alignItems='center' mb={2} px={2}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2">{part.partNumber}</Typography>
            <Place sx={{ ml: 3, mr: 1 }} />
            <Typography variant="body2">{part.defaultUnitPrice}</Typography>
          </Box>
          <Divider />
          <Box display="flex" gap={2} sx={{ backgroundColor: 'gray.200', py: 3, pl: 3 }} >
            Attendees go here
          </Box>
        </CardContent>

        <CardContent
          sx={{ pb: 2 }}
        >
          <Typography variant="body2">{part.notes}</Typography>
          <Button
            component={Link} to={`/parts/${part.partID}`}
            size="medium"
            variant="contained"
            sx={{ display: 'flex', justifySelf: 'self-end', borderRadius: 3 }}
          >
            View
          </Button>
        </CardContent>
      </Card >


    </>
  );
}
