import React from 'react'
import { BiDotsVerticalRounded ,BiFlag } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import { useSortable } from '@dnd-kit/sortable'


const TodoBoard = ({id,tasks}) => {
   
 
  return (
    <div className='todo bg-neutral-600 rounded-lg  m-2 p-2 w-full  '>    
    <div className=' flex flex-row justify-between items-center'>
    <div className=' flex-row flex items-center'>
    <span class="relative flex h-3 w-3 mx-1">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
</span>
<text className='text-4xl font-thin '>Todo</text>
    </div>
    <BiDotsVerticalRounded className='w-6 h-6'/>
    </div>
    <hr />
    {tasks.map((task)=>{
      return(
        <div draggable key={task.id}  className=' bg-neutral-500 p-4 rounded-lg flex flex-col my-4 w-full'>
        <text className='font-sans font-bold text-2xl'>{task.title_task}</text>
        <text>{task.description} </text>
        <img src="https://cdn.dribbble.com/userupload/3941095/file/original-2d523f455fc5ec3abe5727100749d440.png?resize=1024x768" alt="" className=' rounded-lg' />
        <div className=' flex flex-row gap-1 items-center justify-between  my-4 '>
          <div className=' flex gap-1'>
          <text className='rounded-lg bg-red-300 p-2 text-xs'>High</text>
          <text className='rounded-lg bg-violet-300 p-2 text-xs'>App</text>
          </div>
          <div className=' flex flex-row items-center '><BiFlag className=''/><text>10 days left</text></div>       
      </div>
      </div>
      )})}
<button className='bg-neutral-500 rounded p-2 flex items-center justify-center w-full'><BiPlus className='m-1'/>Add a task</button>
</div>
  )
}

export default TodoBoard