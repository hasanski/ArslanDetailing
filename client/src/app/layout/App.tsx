import { CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    axios.get<Part[]>('https://localhost:5001/api/parts')
      .then(response => setParts(response.data))
      
      return () => {}
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <List>
        {parts.map((part) => (
          <ListItem key={part.partID}>
            <ListItemText>{part.partName}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default App;
