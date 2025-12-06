import { Menu } from "@mui/icons-material";
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7ac 89%)'
        }}>
          <Container maxWidth="xl">
            <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
            </Container>
        
      </AppBar>
    </Box>
  )
}
