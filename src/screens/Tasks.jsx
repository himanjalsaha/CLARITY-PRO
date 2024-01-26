import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import Taskscomponent from '../components/Taskscomponent'
const Tasks = () => {
  return (
    <div className='flex-[0.85] overflow-auto ' >
    <div className=' flex flex-row'>
   <SideNav/>
   <Taskscomponent/>
   {/* {put homescreen here} */}
</div>
</div>
  )
}

export default Tasks