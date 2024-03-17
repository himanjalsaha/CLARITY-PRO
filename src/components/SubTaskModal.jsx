import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Authcontext } from '../context/AuthContext';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#4A5451',
    border: '2px solid #000',
    borderRadius : 10,
    boxShadow: 24,
    p: 4,
};

export default function SubTaskModal({ title, dueDate, priority , open, setOpen }) {
    const { currentuser } = useContext(Authcontext)
    // const [openmod, setOpenMod] = React.useState(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
          
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div onClick={handleClose} className='flex justify-end cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg></div>

                    <div className=' w-full p-6'>
                        <div className="flex h-96 gap-4 flex-col">
                            <div className="flex text-white text-3xl font-sans  ">
                                <span>{title}</span>
                            </div>


                            {/* Assignee */}
                            <div className="flex gap-6 items-center">
                                <span className='text-sm text-gray-300'>Assignee :</span>
                                <span>{currentuser && currentuser.displayName}</span>
                            </div>



                            {/* dueDate */}
                            <div className="flex gap-6 items-center">
                                <span className='text-sm text-gray-300'>Due Date :</span>
                                <span>{dueDate}</span>
                            </div>


                            {/* progress */}
                            <div className="flex gap-6 items-center">
                                <span className='text-sm text-gray-300'>Progress : </span>
                                <div className="h-16 w-16">
                                    <CircularProgressbar
                                        value={1 / 4 * 100} // Calculate the percentage of completion (4 out of 7)
                                        text={`${(1 / 4) * 100}%`} // Display the text "4/7"
                                        styles={{
                                            root: {},
                                            path: {
                                                stroke: `rgba(237, 254, 134, ${(1 / 4) * 100})`, // Set the stroke color based on completion percentage
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#394440',
                                                strokeLinecap: 'round',
                                                transform: 'rotate(0.25turn)',
                                                transformOrigin: 'center center',
                                            },
                                            text: {
                                                fill: '#EDFF87',
                                                fontSize: '28px',
                                            },
                                            background: {
                                                fill: '#394440',
                                            },
                                        }}
                                    />
                                </div>
                            </div>


                            {/* priority */}
                            <div className="flex gap-6 items-center">
                                <span className='text-sm text-gray-300'>Priority : </span>
                                <span>{priority}</span>
                            </div>
                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}