import { Card, Badge, CardMedia, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";

type Props ={
  part: Part
}

export default function PartDetailsHeader({part}: Props) {
  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const loading = false;

  return (
    <Card sx={{ position: 'relative', mb: 2, backgroundColor: 'transparent', overflow: 'hidden' }}>
      {isCancelled && (
        <Badge
          sx={{ position: 'absolute', left: 40, top: 20, zIndex: 1000 }}
          color="error"
          badgeContent="Cancelled"
        />
      )}
      <CardMedia
        component="img"
        height="300"
        image={`/images/categoryImages/${part.partID}.jpg`}
        alt={`${part.partID} image`}
      />
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color: 'white',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 1.0), transparent)',
        boxSizing: 'border-box',
      }}>
        {/* Text Section */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{part.partName}</Typography>
          <Typography variant="subtitle1">1 Jan 2025 at 1:40pm</Typography>
          <Typography variant="subtitle2">
            Hosted by <Link to={`/profiles/username`} style={{ color: 'white', fontWeight: 'bold' }}>Bob</Link>
          </Typography>
        </Box>

        {/* Buttons aligned to the right */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant='contained'
                color={isCancelled ? 'success' : 'error'}
                onClick={() => { }}
              >
                {isCancelled ? 'Re-activate Part' : 'Cancel Part'}
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/manage/partId`}
                disabled={isCancelled}
              >
                Manage Event
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color={isGoing ? 'primary' : 'info'}
              onClick={() => { }}
              disabled={isCancelled || loading}
            >
              {isGoing ? 'Cancel Attendance' : 'Join Part'}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  )
}