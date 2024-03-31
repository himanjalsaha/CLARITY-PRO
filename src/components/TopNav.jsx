import React from 'react'
import { FaSearch } from "react-icons/fa";
import { UserAuth } from '../context/AuthContext';

const TopNav = () => {
  const {currentuser} = UserAuth()
 

  return (
    <div className=' bg-black h-[74px]  w-full  p-5 border-b-2 items-center flex justify-between border-b-white text-white'>

        <div className="searchbar flex  items-center relative">
          <FaSearch className=' absolute text-gray-400 left-4'/>
            <input type="search" placeholder='Search' className=' pr-2 pl-10 p-2 mx-1 rounded-2xl w-80 bg-[#282828] outline-1 outline-orange-500' />
        </div>
        <div className="profilepicimg mx-2">
            <img src={currentuser.photoURL} alt=""  className=' rounded-full h-16 w-16'/>
        </div>
    </div>
  )
}

export default TopNav