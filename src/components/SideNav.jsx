import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiChatsTeardropLight } from "react-icons/pi";

const SideNav = () => {
  return (
    <div  className=' flex-[0.2] bg-black h-screen'>
        <div className='my task'>
            <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
                <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><MdHomeFilled className='m-1'/>Home</li>
                <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><FaTasks className='m-1'/>My Tasks</li>
                <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><PiChatsTeardropLight className='m-1'/>Chats</li>

            </ul>

        </div>

    </div>
  )
}

export default SideNav