import React from 'react'
import TopNav from './TopNav'
import { IoIosAnalytics } from "react-icons/io";
import BasicSparkLine from './BasicSparkLine';
import ProgressBar from './ProgressBar';
import { yellow } from '@mui/material/colors';
const Analytics = () => {
  return (
    <div className='bg-[#282828] w-full '>
        <TopNav/>
      <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-5xl font-sans font-bold mx-5 flex flex-row items-center '><IoIosAnalytics className='mx-2'/>Analytics</text>
        <div className=' flex flex-row'>
          <div  className='flex-[0.5]' >
          <BasicSparkLine/>

          </div>
          <div className='flex-[0.5] flex flex-col items-center justify-center bg-neutral-900 rounded-2xl p-2'>
 
    <span className='font-sans text-green-500 text-xl'>Completed Tasks</span>
    <ProgressBar progress={21} color={"#34D399"} />
    <span className='font-sans text-white text-xl'>Total Tasks</span>
    <ProgressBar progress={65} color={"#6B7280"} />
    <span className='font-sans text-yellow-500 text-xl'>Upcoming</span>
    <ProgressBar progress={25} color={"#FBBF24"} />
    <span className='font-sans text-red-500 text-xl'>Working Hours</span>
    <ProgressBar progress={30} color={"#EF4444"} />
  
</div>

        </div>
        </div>
    </div>
  )
}

export default Analytics