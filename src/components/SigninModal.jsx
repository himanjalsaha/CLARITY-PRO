import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../Firebase/firebase';
const style = {
  position: 'absolute',
  
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color:"black",
  bgcolor: 'white',
  border: '2px solid white',
  borderRadius: 4, // Border radius
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  
  p: 4,
};

export default function KeepMountedModal() 

{
    const [err , seterr] = React.useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [success , setsuccess]  = React.useState(false)
  const handleforgotpassword = (e)=>{

    e.preventDefault()
    const email = e.target[0].value
    console.log(email);
    try{
        sendPasswordResetEmail(auth , email)
        setsuccess(true)
    }
    catch(err){
        seterr(true)
    }
}


  return (
    <div>
      <Button onClick={handleOpen}>Forgot Password?</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           Forgot password?
          </Typography>
         
          <form action="" onSubmit={handleforgotpassword} className='my-5 flex flex-col'>
          <TextField id="standard-basic" label="Enter Email" variant="standard" type='email'    />
          <button className=' bg-orange-300 my-2 rounded-lg p-2'>Submit</button>
          {success && (
  <div className='text-blue-600'>
    Password Reset mail sent successfully<br />
    check your inbox
  </div>
)}
          {err && "something went wrong"}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
