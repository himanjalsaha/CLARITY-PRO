import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiChatsTeardropLight } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";

const SideNav = () => {
  return (
    <div  className=' flex-[0.15] bg-black h-screen'>
    <div className='my task'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><MdHomeFilled className='m-1'/>Home</li>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><FaTasks className='m-1'/>My Tasks</li>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><PiChatsTeardropLight className='m-1'/>Chats</li>

        </ul>

    </div>
    <hr/>
   
    <div className='insights'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
        <li className=' rounded-lg w-full p-2 flex flex-row  font-bold'>Insights</li>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><IoAnalytics className='m-1'/>Analytics</li>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><GoGoal className='m-1'/>Goals</li>

        </ul>
        <hr/>
    </div>
    <div className='Teams'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
        <li className=' rounded-lg w-full p-2 flex flex-row  font-bold'>Teams</li>
            <li className='hover:bg-slate-600 rounded-lg w-full p-2 flex flex-row'><BsPersonWorkspace className='m-1'/>My Workspace</li>

        </ul>

    </div>

</div>



  )
}

export default SideNav