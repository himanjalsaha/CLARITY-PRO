import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, query, where } from "firebase/firestore";
import { db } from '../Firebase/firebase';
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
    label: 'Low',
  },
];

export default function TaskModal() {
  const [open, setOpen] = useState(false);
  const [subtasks, setSubtasks] = useState([]);
  const [newSubtask, setNewSubtask] = useState('');
  const [users, setUsers] = useState([]); // State for storing users
  const [newUser, setNewUser] = useState(''); // State for input value for new user

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    handleClose(); // Close modal after submission
  };

  const handleAddSubtask = () => {
    if (newSubtask.trim() !== '') {
      setSubtasks([...subtasks, newSubtask]);
      setNewSubtask('');
    }
  };

  const handleSubtaskChange = (index, value) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleAddUser = () => {
    const usersRef = collection(db, "users");

// Create a query against the collection.
const q = query(usersRef, where("username", "==", users));
console.log(q);
  };

  return (
    <div className=' overflow-auto'>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a project
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="taskName"
              label="Project Name"
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
              fullWidth
              margin="normal"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* Users */}
            <Typography variant="subtitle1" gutterBottom>
              Users:
            </Typography>
            {users.map((user, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Typography>{user}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteUser(index)}
                  style={{ marginLeft: '8px' }}
                >
                  Delete
                </Button>
              </div>
            ))}
            <TextField
              id="userInput"
              label="Add User"
              variant="outlined"
              margin="normal"
              fullWidth
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleAddUser}
            >
              Add User
            </Button>
            {/* Subtasks */}
            <Typography variant="subtitle1" gutterBottom>
              Subtasks:
            </Typography>
            {subtasks.map((subtask, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <TextField
                  label={`Subtask ${index + 1}`}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={subtask}
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteSubtask(index)}
                  style={{ marginLeft: '8px' }}
                >
                  Delete
                </Button>
              </div>
            ))}
            <TextField
              id="subtaskInput"
              label="Add Subtask"
              variant="outlined"
              margin="normal"
              fullWidth
              value={newSubtask}
              onChange={(e) => setNewSubtask(e.target.value)}
            />
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleAddSubtask}
            >
              Add Subtask
            </Button>
            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
