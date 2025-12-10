import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import PartsDashboard from "../../features/parts/dashboard/PartsDashboard.tsx";

function App() {
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedPart, setSelectedPart] = useState<Part | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios.get<Part[]>('https://localhost:5001/api/parts')
      .then(response => setParts(response.data))

    return () => { }
  }, []);

  const handleSelectPart = (partID: number) => {
    const part = parts.find(p => p.partID === partID);
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



  const handleSubmitForm = (part: Part) => {
    if (part.partID) {
      // setParts([...parts.filter(p => p.partID !== part.partID), part]);
      setParts(parts.map(p => p.partID === part.partID ? part : p))
      //setSelectedPart(part);
    } else {
      part.partID = Math.max(...parts.map(p => p.partID)) + 1;
      setParts([...parts, {...part, partID: parts.length + 1}]);
      setSelectedPart(part);
    }
    setEditMode(false);
  }

  const handleDeletePart = (partID: number) => {
    setParts(parts.filter(p => p.partID !== partID));
    //setSelectedPart(undefined);
  }
  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <PartsDashboard
          parts={parts}
          selectPart={handleSelectPart}
          cancelSelectPart={handleCancelSelectPart}
          selectedPart={selectedPart}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deletePart={handleDeletePart}
        />
      </Container>

    </Box>
  );
}

export default App;
