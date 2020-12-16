import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const formInitialValue = {
  id:"",
  title:"",
  url:"",
  state:"",
  created:"",
  update:""
}
export default function FormDialog({open, handleClose, mode, handleSubmit}) {

  const [formdata, setformdata] = useState(formInitialValue)

  const handleChange=(field, value) => {
    setformdata({
      ...formdata,
      [field]:value
    })
  }

  const onSubmit = ()=>{
    handleSubmit(formdata);
    setformdata(formInitialValue);
  }

  return (

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Isuue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            color="secondary"
            margin="dense"
            id="id"
            label="Id"
            type="text"
            fullWidth
            value={formdata.id}
            onChange={ e => handleChange("id", e.target.value)}
          />
          <TextField
            required
            color="secondary"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={formdata.title}
            onChange={ e => handleChange("title", e.target.value)}
          />
          <TextField
            required
            color="secondary"
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
            value={formdata.state}
            onChange={ e => handleChange("state", e.target.value)}
          />
          <TextField
            color="secondary"
            margin="dense"
            id="url"
            label="Url"
            type="text"
            fullWidth
            value={formdata.url}
            onChange={ e => handleChange("url", e.target.value)}
          />
          <TextField
            color="secondary"
            margin="dense"
            id="created"
            label="Created at"
            type="text"
            fullWidth
            value={formdata.created}
            onChange={ e => handleChange("created", e.target.value)}
          />
          <TextField
            color="secondary"
            margin="dense"
            id="updated"
            label="Updated at"
            type="text"
            fullWidth
            value={formdata.updated}
            onChange={ e => handleChange("updated", e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}