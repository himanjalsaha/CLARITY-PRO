import React, { useState } from 'react';
import img from '../assets/clarityprotemp.jpg';
import gif from '../assets/program.gif';
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword , updateProfile  } from 'firebase/auth'
import { setDoc ,doc } from 'firebase/firestore';
import {auth} from '../Firebase/firebase'
import { UserCredentials } from '../screens/UserCredentials';
import { useNavigate } from 'react-router-dom';
import SigninModal from './SigninModal';
import { db } from '../Firebase/firebase';
import {getStorage,ref,uploadBytes,getDownloadURL,uploadBytesResumable } from 'firebase/storage'
import LinearProgress from '@mui/material/LinearProgress';
export function LogIn() {
    const navigate = useNavigate()
    const [showSignUp, setShowSignUp] = useState(false);
    const [err , setErr] = useState(false);
    const [load,setload] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const HandleSignin= async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
    
        console.log(email,password);
        try {
            // Create user with email and password
           const {user} =  await signInWithEmailAndPassword(auth, email, password);
            console.log(user);

            // Listen for authentication state changes
            navigate('/')
        } catch(error) {
            setErr(true);
            console.error('Signin error:', error.message);
        }

    }

    const handleSignup = async (e) =>{
        e.preventDefault()
        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const pfp = e.target[3].files[0]

        try {
            setload(true)
            // Create user with email and password
           const {user} =  await createUserWithEmailAndPassword(auth, email, password);
     
           const filename = `image_${Date.now()}`
           const storage = getStorage()
           const storageref = ref(storage,`profilepic/${filename}`)
           await uploadBytesResumable(storageref, pfp);
           const downloadURL = await getDownloadURL(storageref);

        
// Update user profile with display name and photo URL
await updateProfile(user, {
    displayName: username,
    photoURL: downloadURL // Add photoURL field to update profile with the photo URL
});

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                username,
                email,
                photourl:downloadURL
              });

              setload(false)
  
            // Listen for authentication state changes
           navigate('/')
          
        } catch(err) {
            setErr(true);
            console.error('Signup error:', err);
        }
    }

    return (
        <div className='grid grid-cols-2 overflow-hidden gap-1 justify-center items-center'>
            {/* Login Form */}
            <div className={`border-1 my-20 p-10 border-orange-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f90,0_0_15px_#f90,0_0_30px_#f90] justify-center w-[600px] rounded-lg mx-10 transition-transform ease-in-out duration-500 ${showSignUp ? ' -translate-x-[200%]' : 'translate-x-0'}`}>
                <h1 className="flex justify-center text-2xl font-semibold ">Login</h1>
                <div className="py-1 flex justify-center">
                    <span className="text-sm text-gray-400">New to Clarity Pro ? <span onClick={() => setShowSignUp(true)} className="cursor-pointer hover:text-orange-300 ">Create an Account</span></span>
                </div>
                <form onSubmit={HandleSignin} className='flex flex-col items-center justify-center gap-2'>
          
                        <input type="text" placeholder="Enter your Email" className="w-96 outline-orange-400 rounded-lg text-black  border-none p-2" />
                  
               
                        <input type="text" placeholder="Enter your password" className="w-96 outline-orange-400 rounded-lg text-black border-none p-2" />
          
                    <button type='submit' className="bg-orange-400 p-1  w-96 text-lg hover:bg-orange-600 rounded-lg ">Log In</button>
                    {err && "something went wrong"}

                </form>
                <div className="flex justify-between mx-8">
                    <div className="flex gap-2">
                        <input type="checkbox" name="" id="" className='accent-orange-400' />
                        <h1>Remember Me</h1>
                    </div>
                    <div>
                        <a  className="hover:text-orange-300 text-sm text-gray-400"><SigninModal/> </a>
                    </div>

                </div>
                <div className="flex flex-col mx-10 my-4">
                    <button className="mt-2 bg-orange-400 p-1 text-lg hover:bg-orange-600 rounded-lg ">Login With Google</button>
                </div>
            </div>

            {/* Sign Up Form */}
            <div className={`border-1 my-20 p-10 border-orange-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f90,0_0_15px_#f90,0_0_30px_#f90] justify-center w-[600px] rounded-lg mx-10 transition-transform ease-in-out duration-500 ${showSignUp ? 'translate-x-[-200px]' : '-translate-x-[-200%]'}`}>
                <h1 className="flex justify-center text-2xl font-semibold ">Sign Up</h1>
                {load && <LinearProgress className='m-2'/>}

                {selectedImage && (
                    <div className='flex justify-center items-center'>
                            <img
        src={URL.createObjectURL(selectedImage)}
        alt="Selected"
        className=" h-32 w-32 rounded-full"
    />
                        </div>

)}

                <div className="py-1 flex justify-center">
                    <span className="text-sm text-gray-400">Already have an account? <span onClick={() => setShowSignUp(false)} className="cursor-pointer hover:text-orange-300 ">Log In</span></span>
                </div>
                <form onSubmit={handleSignup} className='flex flex-col items-center justify-center gap-2'>
                <input type="text" required placeholder="Enter your Username" className="w-96 text-black rounded-lg  border-none p-2" />

                  
                        <input type="email" required placeholder="Enter your Email" className="w-96 rounded-lg text-black border-none p-2" />
                  
                    
                        <input type="password" required placeholder="Enter your password" className="w-96 rounded-lg text-black  border-none p-2" />
                        
                        <div className="relative bg-orange-400 w-96 p-2 rounded-lg">
    <input
        type="file"
        onChange={(e) => setSelectedImage(e.target.files[0])}
        accept="image/*"
        className="hidden"
        id="file-upload"
    />
    <label htmlFor="file-upload" className="cursor-pointer">
        <svg
            xmlns="https://icons8.com/icon/121303/add-image"
            className="h-6 w-6 mr-2 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
        Choose File
    </label>
</div>








                        <div className="flex gap-2">
                        <input type="checkbox" name="" id="" className=' accent-orange-400' />
                        <h1>Agree to Terms</h1>
                    </div>
                  
                    <button className="bg-orange-400 p-1 w-96 text-lg hover:bg-orange-600 rounded-lg ">Sign Up</button>
                    {err && "something went wrong"}
                </form>
             
               
            </div>

            <div className={`absolute top-1/2 transform -translate-y-1/2 transition-transform ease-in-out duration-500 ${showSignUp ? 'translate-x-[100px]' : 'translate-x-[850px]'}`}>
                <img src={gif} alt="" className='h-96' />
            </div>


            {/* Image */}
            {/*<div className='relative w-96 h-96'>
                <div className='absolute h-80 rounded-xl inset-0 bg-gradient-to-br from-red-500 to-yellow-500'></div>
                <img src={img} alt="" className='absolute bottom-28  right-14 rounded-xl w-96 h-80 transform translate-x-1/4 translate-y-1/4' />
            </div> */}
        </div>
    );
}
