import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Authcontext } from '../context/AuthContext';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BackgroundLetterAvatar from './BackgroundLetterAvatar';
import { useState, useEffect } from 'react';
import { UserDetailModal } from './UserDetailModal';
import { collection, getDocs, query, where, } from 'firebase/firestore';
import { db } from '../Firebase/firebase';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#4A5451',
    border: '2px solid #000',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
};

export default function SubTaskModal({ title, dueDate, priority }) {
    const { currentuser } = useContext(Authcontext)
    const [open, setOpen] = useState(true);
    const [hidden, setHidden] = useState(true);
    const [hideSearch, setHideSearch] = useState(false);
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(() => {
        if (value.length > 1) {
            async function fetchUsernames(name) {
                try {
                    const q = query(collection(db, "users"), where("username", "==", name));
                    const querySnapshot = await getDocs(q);
                    const usernames = [];
                    querySnapshot.forEach((doc) => {
                        const username = doc.data().username;
                        if (username) {
                            usernames.push(username);
                        }
                    });
                    setResult(usernames);
                } catch (error) {
                    console.error("Error fetching usernames:", error);
                    setResult([]);
                }
            }
            fetchUsernames(value);
        }
    }, [value]);




    function handleClose() {
        setOpen(!open);
    }


    function handleClick() {
        setHideSearch(!hideSearch);
        setValue('');
    }

    function handleSelectedUsername(username) {
        setSelectedUser(prev => [...prev, username]);
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div onClick={handleClose} className='flex justify-end cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg></div>

                    <div className=' w-full p-6'>
                        <div className="flex h-96 gap-4 flex-col">
                            <div className="flex text-white text-3xl font-sans  ">
                                <span>{title}</span>
                            </div>


                            {/* Assignee */}
                            <div className="flex gap-6 items-center">
                                <span className=' text-white'>Assignee :</span>
                                <div className='flex gap-2 items-center cursor-pointer'
                                    onMouseEnter={() => setHidden(false)}
                                    onMouseLeave={() => setHidden(true)}>
                                    <BackgroundLetterAvatar user={currentuser.displayName} />
                                    <span className='text-white '>{currentuser && currentuser.displayName}</span>
                                    {hidden ? null : <UserDetailModal username={currentuser.displayName} email={currentuser.email}
                                        login={currentuser.metadata.lastSignInTime} />}
                                </div>
                            </div>



                            {/* dueDate */}
                            <div className="flex gap-6 items-center">
                                <span className=' text-white'>Due Date :</span>
                                <span className='text-white'>{dueDate}</span>
                            </div>


                            {/* progress */}
                            <div className="flex gap-6 items-center">
                                <span className=' text-white'>Progress : </span>
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
                                <span className=' text-white'>Priority : </span>
                                <span className='text-white'>{priority}</span>
                            </div>


                            {/* Team */}
                            <div className="flex gap-6 items-center">
                                <span className=' text-white'>Team :</span>
                                <div className='flex -space-x-4 rtl:space-x-reverse m-2'>
                                    <BackgroundLetterAvatar user={currentuser.displayName} />

                                    {selectedUser.map((username, index) => (
                                        <BackgroundLetterAvatar key={index} user={username} />
                                    ))}


                                    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>

                                </div>
                            </div>

                            <div>
                                <button className='px-4 py-2 rounded-xl bg-[#A5DD9B] text-green-800' onClick={handleClick}>Invite Members</button>
                            </div>

                            {hideSearch ? <div className='absolute top-10 left-56 flex flex-col gap-1'>
                                <div className='bg-[#A5DD9B] px-2 py-1 rounded-lg flex gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 cursor-pointer h-6" onClick={handleClick}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='w-60 bg-[#A5DD9B] outline-none text-green-800' />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-[#A5DD9B] text-green-800 flex flex-col cursor-pointer  items-center px-2 py-1 rounded-lg' >
                                    {result.map((username, index) => (
                                        <div key={index} onClick={() => handleSelectedUsername(username)}>{username}</div>
                                    ))}
                                </div>
                            </div> : null}

                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}