import React from 'react'
import TopNav from './TopNav'
const Taskscomponent = () => {
  return (
    <div className='bg-[#282828] w-full '>
        <TopNav/>

      <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-2xl font-sans font-bold mx-5'>Manage your Tasks</text>
        <div className='m-5' >
          <ul className=' flex flex-row gap-5  text-lg'>
            <button className='hover:overline '>Board</button>
            <button className='hover:overline '>List</button>
            <button className='hover:overline '>Timeline</button>
            <button className='hover:overline '>Files</button>
          </ul>
        </div>
        <hr />

        </div>
    </div>
  )
}

export default Taskscomponent