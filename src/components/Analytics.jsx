import React from 'react'
import TopNav from './TopNav'
import { IoIosAnalytics } from "react-icons/io";
import BasicSparkLine from './BasicSparkLine';
const Analytics = () => {
  return (
    <div className='bg-[#282828] w-full '>
        <TopNav/>
      <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-5xl font-sans font-bold mx-5 flex flex-row items-center '><IoIosAnalytics className='mx-2'/>Analytics</text>
        <BasicSparkLine/>
       
      
        
        </div>
    </div>
  )
}

export default Analytics