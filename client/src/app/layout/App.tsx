import { Box, Container, CssBaseline, Typography } from "@mui/material";

import { useState } from "react";
import NavBar from "./NavBar";
import PartsDashboard from "../../features/parts/dashboard/PartsDashboard.tsx";
import { useParts } from "../../lib/hooks/useParts.ts";

function App() {
  const [selectedPart, setSelectedPart] = useState<Part | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { parts, isPending } = useParts();

  const handleSelectPart = (partID: number) => {
    const part = parts!.find(p => p.partID === partID);
    setSelectedPart(part);
  }

  const handleCancelSelectPart = () => {
    setSelectedPart(undefined);
  }

  const handleOpenForm = (id?: number) => {
    if (id) handleSelectPart(id);
    else handleCancelSelectPart();
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!parts || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <PartsDashboard
            parts={parts}
            selectPart={handleSelectPart}
            cancelSelectPart={handleCancelSelectPart}
            selectedPart={selectedPart}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
