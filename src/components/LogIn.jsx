import React, { useState } from 'react';
import img from '../assets/clarityprotemp.jpg';
import gif from '../assets/program.gif';


export function LogIn() {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <div className='flex overflow-hidden gap-60 items-center'>
            {/* Login Form */}
            <div className={`border-1 my-20 p-10 border-orange-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f90,0_0_15px_#f90,0_0_30px_#f90] justify-center w-[600px] rounded-lg mx-10 transition-transform ease-in-out duration-500 ${showSignUp ? ' -translate-x-[200%]' : 'translate-x-0'}`}>
                <h1 className="flex justify-center text-2xl font-semibold ">Login</h1>
                <div className="py-1 flex justify-center">
                    <span className="text-sm text-gray-400">New to Clarity Pro ? <span onClick={() => setShowSignUp(true)} className="cursor-pointer hover:text-orange-300 ">Create an Account</span></span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="py-2 px-12">
                        <input type="text" placeholder="Enter your Email" className="w-96 outline-orange-400 rounded-lg  border-none p-2" />
                    </div>
                    <div className="py-2 px-12">
                        <input type="text" placeholder="Enter your password" className="w-96 outline-orange-400 rounded-lg  border-none p-2" />
                    </div>
                </div>
                <div className="flex justify-between mx-8">
                    <div className="flex gap-2">
                        <input type="checkbox" name="" id="" className='accent-orange-400' />
                        <h1>Remember Me</h1>
                    </div>
                    <div>
                        <a href="" className="hover:text-orange-300 text-sm text-gray-400">Forgot Password ? </a>
                    </div>
                </div>
                <div className="flex flex-col mx-10 my-4">
                    <button className="bg-orange-400 p-1 text-lg hover:bg-orange-600 rounded-lg ">Log In</button>
                    <button className="mt-2 bg-orange-400 p-1 text-lg hover:bg-orange-600 rounded-lg ">Login With Google</button>
                </div>
            </div>

            {/* Sign Up Form */}
            <div className={`border-1 my-20 p-10 border-orange-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f90,0_0_15px_#f90,0_0_30px_#f90] justify-center w-[600px] rounded-lg mx-10 transition-transform ease-in-out duration-500 ${showSignUp ? 'translate-x-[-200px]' : '-translate-x-[-200%]'}`}>
                <h1 className="flex justify-center text-2xl font-semibold ">Sign Up</h1>
                <div className="py-1 flex justify-center">
                    <span className="text-sm text-gray-400">Already have an account? <span onClick={() => setShowSignUp(false)} className="cursor-pointer hover:text-orange-300 ">Log In</span></span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="py-2 px-12">
                        <input type="text" placeholder="Enter your Email" className="w-96 rounded-lg  border-none p-2" />
                    </div>
                    <div className="py-2 px-12">
                        <input type="text" placeholder="Enter your password" className="w-96 rounded-lg  border-none p-2" />
                    </div>
                </div>
                <div className="flex justify-between mx-8">
                    <div className="flex gap-2">
                        <input type="checkbox" name="" id="" className=' accent-orange-400' />
                        <h1>Agree to Terms</h1>
                    </div>
                </div>
                <div className="flex flex-col mx-10 my-4">
                    <button className="bg-orange-400 p-1 text-lg hover:bg-orange-600 rounded-lg ">Sign Up</button>
                </div>
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
