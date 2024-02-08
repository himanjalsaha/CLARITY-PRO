import React from 'react'
import TopNav from './TopNav'
import { Todo } from './Todo'
import { InDesign } from './InDesign'
import { InReview } from './InReview'
const Taskscomponent = () => {
  return (
    <div className='bg-[#282828] w-full '>
      <TopNav />

      <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-2xl font-sans font-bold mx-5'>Manage your Tasks</text>
        <div className='m-4' >
          <ul className=' flex flex-row gap-5  text-lg'>
            <button className='hover:border-b-2 border-transparent hover:border-white transition-all duration-300'>Board</button>
            <button className='hover:border-b-2 border-transparent hover:border-white transition-all duration-300'>List</button>
            <button className='hover:border-b-2 border-transparent hover:border-white transition-all duration-300'>Timeline</button>
            <button className='hover:border-b-2 border-transparent hover:border-white transition-all duration-300'>Files</button>
          </ul>
        </div>
        <hr />

       <Todo></Todo>
       <InDesign></InDesign>
       <InReview></InReview>
      </div>

    </div>
  )
}

export default Taskscomponent