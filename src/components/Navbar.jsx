import React from 'react'
import { GiAbstract118 } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// COLOR PALETTE
// --primary-100:#FF4081;
// --primary-200:#ff79b0;
// --primary-300:#ffe4ff;
// --accent-100:#00E5FF;
// --accent-200:#00829b;
// --text-100:#FFFFFF;
// --text-200:#e0e0e0;
// --bg-100:#1A1A1A;
// --bg-200:#292929;
// --bg-300:#404040;
  

const Navbar = () => {
  const navigate = useNavigate();

  function handleSignIn(){
    navigate('/signin')

  }
  return (
    <nav  className='bg-black rounded-3xl w-[98%]   p-3 text-white flex flex-row justify-around    '>
      <div className='flex flex-row items-center'>
      <GiAbstract118 className=' w-10 h-10 mx-2' />
      <text className=' font-extrabold font-sans text-2xl'>ClarityPro</text>
      <ul className='flex flex-row items-center gap-4 font-semibold mx-5'>
          <li className='flex flex-row items-center hover:overline '>Features <FaChevronDown  className='mx-2 '/></li>

          <li className='flex flex-row items-center hover:overline'>Components <FaChevronDown  className='mx-2'/></li>
          <li className='flex flex-row items-center hover:overline'>Documentation <FaChevronDown className='mx-2' /></li>
        </ul>
      </div>

      <div className='flex items-center'>
      <ul className='flex flex-row items-center gap-4 font-semibold mx-5'>
          <li className='flex flex-row items-center cursor-pointer p-2 hover:bg-orange-200 hover:rounded-lg hover:p-2 hover:border-2 hover:border-orange-600 hover:bg-opacity-50' onClick={handleSignIn}>Sign in <LiaSignInAltSolid   className='mx-2 w-6 h-6'/></li>
          <Link to="/signin" className='flex flex-row items-center rounded-md bg-slate-50 text-black p-2 justify-center'><text>Quick Start</text> <FaChevronDown  className='mx-2'/></Link>
        </ul>
      </div>
        
    </nav>
  )
}

export default Navbar