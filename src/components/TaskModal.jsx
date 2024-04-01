import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from '../Firebase/firebase';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { HiUserRemove } from "react-icons/hi";
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import { addDoc } from 'firebase/firestore';
import { AiFillDelete } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const style = {
  width: 500,
  bgcolor: 'white',
  borderRight: '2px solid #000',
  p: 9,
};

const currencies = [
  {
    value: 'high',
    label: 'High',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'low',
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
  const [userexists, setuserexists] = useState(false);
  const [assignedUsers, setAssignedUsers] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new project object with the form data
    const newProject = {
      projectName: event.target.taskName.value,
      dueDate: event.target.dueDate.value,
      description  : event.target.description.value,
      priority: event.target.priority.value, // Access priority value
      subtasks: subtasks.map((subtask, index) => ({ name: subtask, assignedUsers: assignedUsers || [] })),
      createdtime : serverTimestamp()
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
  
    // Remove the assigned users for the deleted subtask
    const updatedAssignedUsers = { ...assignedUsers };
    delete updatedAssignedUsers[index];
    setAssignedUsers(updatedAssignedUsers);
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

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAssignUser = (subtaskIndex, userId) => {
    // Get the current assigned users for the subtask
    const currentAssignedUsers = assignedUsers[subtaskIndex] || [];
    const userObject = users[userId];
    // Update the assigned users for the subtask
    const updatedAssignedUsers = {
      ...assignedUsers,
      [subtaskIndex]: [...currentAssignedUsers, userObject],
    };

    setAssignedUsers(updatedAssignedUsers);
    console.log(assignedUsers);
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
              id="description"
              label="description"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
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
              id="priority"
              select
              label="Priority"
              defaultValue="high"
              helperText="Please select priority"
              fullWidth
              margin="normal"
              name="priority" // Add name attribute for form submission
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
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
                  <div key={userId} className='rounded-lg divide-x-2 flex items-center mb-4'>
                    <img src={users[userId].photourl} alt="" srcset="" className='w-10 h-10 rounded-full' />
                    <div className='m-1 rounded-2xl bg-violet-300 p-2'>{users[userId].username}</div>
                    <div className='m-1 rounded-md bg-yellow-300 p-2'>{users[userId].email}</div>
                    <Button
                      onClick={() => handleDeleteUser(userId)}
                    >
                      <HiUserRemove className='w-5 h-5' />
                    </Button>
                  </div>
                ))}
              </>
            )}
            {userexists && <Chip label="No users found" />}
            {loading && <LinearProgress />}
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
                  value={assignedUsers[index] ? assignedUsers[index].username : ''}
                  onChange={(e) => handleAssignUser(index, e.target.value)}
                >
                  {/* Populate dropdown with usernames, filtering out already assigned users */}
                  {Object.keys(users).map((userId) => (
                    // Check if the user is not already assigned to the current subtask
                    !assignedUsers[index] || !assignedUsers[index].includes(userId) ? (
                      <MenuItem key={userId} value={userId}  >
                        <img src={users[userId].photourl} className='w-8 h-8 rounded-full' alt="" srcset="" />
                        {users[userId].username + "|" + users[userId].email}
                      </MenuItem>
                    ) : null
                  ))}
                </TextField>
                {/* Display AvatarGroup if user is assigned */}
                {assignedUsers[index] && (
                  <AvatarGroup max={4}>
                    {assignedUsers[index].map((user, idx) => (
                      <Avatar key={idx} alt={user.username} src={user.photourl} />
                    ))}
                  </AvatarGroup>
                )}
                {/* Button to delete subtask */}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteSubtask(index)}
                  style={{ marginLeft: '4px' }}
                >
                  <AiFillDelete />
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
