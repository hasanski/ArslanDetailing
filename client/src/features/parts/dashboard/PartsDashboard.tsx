
import Grid from "@mui/material/Grid";
import PartList from "./PartList";
import PartDetail from "../details/PartDetail";
import PartForm from "../form/PartForm";
type Props = {
  parts: Part[]
  selectPart: (partID: number) => void
  cancelSelectPart: () => void
  selectedPart: Part | undefined
  openForm: (id: number) => void
  closeForm: () => void
  editMode: boolean
  submitForm: (part: Part) => void
  deletePart: (partID: number) => void
}


export default function PartsDashboard({ parts, selectPart, selectedPart, cancelSelectPart,
   openForm, closeForm, editMode, submitForm, deletePart }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7} >
        <PartList
          parts={parts}
          selectPart={selectPart}
          selectedPart={selectedPart}
          cancelSelectPart={cancelSelectPart}
          deletePart={deletePart}
          
        />
        {/* <List>
          {parts.map((part) => (
            <ListItem key={part.partID}>
              <ListItemText>{part.partName}</ListItemText>
            </ListItem>
          ))}
        </List> */}
      </Grid>
      <Grid size={5}>
        {selectedPart && !editMode && <PartDetail
          part={selectedPart}
          cancelSelectPart={cancelSelectPart}
          openForm={openForm}


        />
        }
        {editMode && <PartForm 
        closeForm={closeForm} 
        part={selectedPart}
        submitForm={submitForm}
        />}
       
      </Grid>
    </Grid>
  )
}
