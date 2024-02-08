import React from 'react'
import { FaSearch } from "react-icons/fa";
const TopNav = () => {
 

  return (
    <div className=' bg-black h-[74px]  p-5 border-b-2 items-center flex justify-between border-b-white text-white'>

        <div className="searchbar flex  items-center relative">
          <FaSearch className=' absolute text-gray-400 left-4'/>
            <input type="search" placeholder='Search' className=' pr-2 pl-10 p-2 mx-1 rounded-2xl w-80 bg-[#282828] outline-1 outline-orange-500' />
        </div>
        <div className="profilepicimg mx-2">
            <img src="data:image/jpeg;base64,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" alt=""  className=' rounded-full h-8 w-8'/>
        </div>
    </div>
  )
}

export default TopNav