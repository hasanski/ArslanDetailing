import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    axios.get<Part[]>('https://localhost:5001/api/parts')
      .then(response => setParts(response.data))
      
      return () => {}
  }, []);

  return (
    <Fragment>
      <Typography variant="h3">Parts</Typography>
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
