import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, Button } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7ac 89%)'
      }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h6" fontWeight='bold'>
                  Arslan Detailing
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Parts
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                About
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Content
              </MenuItem>
            </Box>
            <Button size="large" variant="contained" color="warning" onClick={() => {}}>
              Create Part
              </Button>
          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  )
}
