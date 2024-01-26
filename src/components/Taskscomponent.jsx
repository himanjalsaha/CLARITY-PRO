import React from 'react'
import TopNav from './TopNav'
const Taskscomponent = () => {
  return (
    <div className='bg-[#282828] w-full '>
        <TopNav/>

      <div className=' h-[calc(100vh-74px)] overflow-auto text-white'>
        <text className='text-white'>My Tasks</text>
     
        </div>
    </div>
  )
}

export default Taskscomponent