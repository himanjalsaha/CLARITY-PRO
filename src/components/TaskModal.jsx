import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../Firebase/firebase';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { HiUserRemove } from "react-icons/hi";
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import {  addDoc } from 'firebase/firestore';
;
const style = {
  width: 500,
  bgcolor: 'white',
  borderRight: '2px solid #000',
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
  const [users, setUsers] = useState({});
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [userexists , setuserexists]  = useState(false)
  const [assignedUsers, setAssignedUsers] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create a new project object with the form data
    const newProject = {
      projectName: event.target.taskName.value,
      dueDate: event.target.dueDate.value,
      subtasks: subtasks.map((subtask, index) => ({ name: subtask, assignedUsers: assignedUsers[`Subtask ${index + 1}`] || [] })),
    };
  
    try {
      // Add the new project to the "projects" collection
      const docRef = await addDoc(collection(db, 'projects'), newProject);
      console.log('Document written with ID: ', docRef.id);
  
      // Reset form fields and state after successful submission
      event.target.reset();
      setSubtasks([]);
      setAssignedUsers({});
      handleClose();
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle error if needed
    }
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
  
  const handleDeleteUser = (userIdToDelete) => {
    // Filter out the user with the given userIdToDelete
    const updatedUsers = { ...users };
    delete updatedUsers[userIdToDelete];
    setUsers(updatedUsers);
  };

  const searchUser = async () => {
    setLoading(true); 
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", newUser));
    const querySnapshot = await getDocs(q);
    try {
 
        const fetchedUsers = {}; 
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          fetchedUsers[doc.id] = userData; 
        });
        setUsers(prevUsers => ({ ...prevUsers, ...fetchedUsers })); 
        if (Object.keys(fetchedUsers).length > 0) {
          setuserexists(false); // Set userexists to false if users are found
        } else {
          setuserexists(true); // Set userexists to true if no users found
        }
        setLoading(false);

        console.log(users);

    
 
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  const handleAssignUser = (index, userId) => {
    setAssignedUsers({ ...assignedUsers, [index]: userId });
  };
  

  return (
    <div className=' overflow-auto'>
      <Button onClick={handleOpen}>Add Task</Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
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
                <MenuItem key={option.value}  value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* Users */}
           
            
            {Object.keys(users).length > 0 && (
              
  <>
   <Typography variant="subtitle1" gutterBottom>
              Users:
        
            </Typography>
    {Object.keys(users).map((userId) => (
            <div key={userId} className=' rounded-lg divide-x-2  flex items-center mb-4'>
        <Avatar className='m-1 divide-y-2 ' sx={{ bgcolor: deepOrange[500] }}>{users[userId].username.substring(0, 1)}</Avatar>
        <div className='m-1 rounded-2xl bg-violet-300  p-2'>{users[userId].username}</div>
        <div className='m-1 rounded-md bg-yellow-300 p-2'>{users[userId].email}</div>
        <Button
        
          onClick={() => handleDeleteUser(userId)}
     
        >
          <HiUserRemove className='w-5 h-5 '/>
          
        </Button>
       
      </div>
      


  
      
    ))}
  </>
)}
{userexists && <Chip label="No users found"/>}

      {loading &&    <LinearProgress />}

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
            required
              type="button"
              variant="contained"
              color="primary"
              onClick={searchUser}
            >
              Add User
            </Button>
            {/* Subtasks */}
            <Typography variant="subtitle1" gutterBottom>
              Subtasks:
            </Typography>
            {/* Render input fields for each subtask */}
            {subtasks.map((subtask, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                {/* Input field for subtask */}
                <TextField
                  label={`Subtask ${index + 1}`}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={subtask}
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                />
                {/* Dropdown menu to assign user to subtask */}
                <TextField
  select
  label="Assign User"
  variant="outlined"
  margin="normal"
  fullWidth
  value={assignedUsers[index] || ''}
  onChange={(e) => handleAssignUser(index, e.target.value)}
>

                  {/* Populate dropdown with usernames */}
                  {Object.keys(users).map((userId) => (
                    <MenuItem key={userId} value={userId}>
                      {users[userId].username}
                    </MenuItem>
                  ))}
                </TextField>
                {/* Button to delete subtask */}
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
      </Drawer>
    </div>
  );
}
