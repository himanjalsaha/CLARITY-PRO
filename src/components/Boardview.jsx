import React, { useState } from 'react'
import TodoBoard from './TodoBoard'
import { BiPlus } from 'react-icons/bi'
import { DndContext,closestCorners } from '@dnd-kit/core'
const Boardview = () => {
  const [tasks, settasks ] = useState([
    {id:1,title_task:"mobile app" ,description:"Redesign the whole webpage for an interactive vision and make it brighter Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati enim similique officia doloribus laborum omnis esse accusamus, eveniet blanditiis sapiente repudiandae eligendi tempora debitis fugiat culpa, ab autem sunt?"},
    {id:2,title_task:"mobile app" ,description:"Redesign the whole webpage for an interactive vision and make it brighter Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati enim similique officia doloribus laborum omnis esse accusamus, eveniet blanditiis sapiente repudiandae eligendi tempora debitis fugiat culpa, ab autem sunt?"}
  ])

  return (
<div className='text-white  flex-row grid grid-cols-4 gap-4 '>
        <div className=' flex flex-col'>
          <DndContext collisionDetection={closestCorners}>
          <TodoBoard tasks={tasks}/>

          </DndContext>
       
        </div>
        <div className=' flex flex-col'>
          <DndContext collisionDetection={closestCorners}>
          <TodoBoard tasks={tasks}/>
          </DndContext>
       
        </div>
        <div className=' flex flex-col'>
          <DndContext collisionDetection={closestCorners}>
          <TodoBoard tasks={tasks}/>

          </DndContext>
       
        </div>

        
      
        <div className='m-2 bg-neutral-700 rounded-lg border-2 border-white border-dashed border-spacing-2 '>
            <div className=' '>
            <button className='bg-neutral-500 rounded p-2 flex items-center justify-center w-full'><BiPlus className='m-1'/>Add a Section</button>
            </div>
            <div className='flex justify-center items-center h-full '>
                <BiPlus className='w-20 h-20'/>
            </div>

        </div>
        
      
    </div>
  )
}

export default Boardview