import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 9,
};


const currencies = [
    {
      value: 'USD',
      label: 'High',
    },
    {
      value: 'EUR',
      label: 'Medium',
    },
    {
      value: 'BTC',
      label: 'Law',
    },
   
  ];

export default function TaskModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    handleClose(); // Close modal after submission
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the task
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="taskName"
              label="Task Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="dueDate"
              label="Due Date"
              type="date"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
           <TextField
          id="outlined-select-currency"
          select
          label="Priority"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
