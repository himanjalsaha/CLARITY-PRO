import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiChatsTeardropLight } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiAbstract118 } from 'react-icons/gi';
import { FaAngleRight } from "react-icons/fa";
import { BiCog , BiHelpCircle } from 'react-icons/bi';
import { GoSidebarCollapse } from "react-icons/go";
import { Link } from 'react-router-dom';
const SideNav = () => {
    const [open , setopen] = useState(true)

  return (
    <div  className={`  border-r-white border-r-2  bg-black  h-screen ${open? "w-80" : "w-20"} duration-300  relative `}>

         <div className='flex flex-row items-center justify-between text-white m-5  '>
            <div className='logo flex flex-row items-center'>
            <GiAbstract118 className={ `w-10 h-10  duration-500 ${open && "rotate-[360deg]"}`} />
      <text className={` font-extrabold mx-4 font-sans text-2xl ${!open && "scale-0"} duration-300`}>ClarityPro</text>
            </div>
      
           <button onClick={()=>setopen(!open)}><FaAngleRight className={`w-12 h-12 absolute ${open && "rotate-180"} bg-[#fa9b25] duration-500 rounded-full   -right-6 top-12 `}/></button>
      </div>

    <div className='my task'>
        <div className=' text-gray-200 text-lg flex  items-center flex-col m-2 p-2 '>
            <Link to='/' className='hover:bg-[#fa9b25] rounded-lg w-full p-2 items-center  flex flex-row'><MdHomeFilled className='m-1 text-2xl w-5 h-5 text-white absolute '/><text className={`${!open && "scale-0"} duration-300 mx-7`} >Home</text></Link>
           <Link to='/tasks' className='hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row'><FaTasks className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7 block`} > Tasks</text></Link>
            <li className='hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row'><PiChatsTeardropLight className='m-1 absolute'/> <text className={`${!open && "scale-0"} duration-300 mx-7`}>Chats</text></li>

        </div>

    </div>
    <hr/>
   
    <div className='insights'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
        <li className={` rounded-lg w-full p-2 flex flex-row ${!open && "scale-0"} duration-300  font-bold`}>Insights</li>
            <li className='hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row'><IoAnalytics className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7`}>Analytics</text></li>
            <li className='hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row'><GoGoal className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7`}>Goals</text></li>

        </ul>
        <hr/>
    </div>
    <div className='Teams'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
        <li className={` rounded-lg w-full p-2 flex flex-row ${!open && "scale-0"} duration-300  font-bold`}>Teams</li>
            <li className='hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row'><BsPersonWorkspace className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7`}>My Workspace</text></li>

        </ul>
    </div>
    <hr/>
    <div className='additional'>
        <ul className=' text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2 '>
       
            <li className='hover:bg-[#fa9b25]  items-center rounded-lg w-full p-2 flex flex-row'><BiCog  className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7`}>settings</text></li>
            <li className='hover:bg-[#fa9b25]  items-center rounded-lg w-full p-2 flex flex-row'><BiHelpCircle  className='m-1 absolute'/><text className={`${!open && "scale-0"} duration-300 mx-7`}>Help</text></li>


        </ul>
    </div>

</div>



  )
}

export default SideNav