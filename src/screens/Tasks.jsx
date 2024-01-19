import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import Taskscomponent from '../components/Taskscomponent'
const Tasks = () => {
  return (
    <div >
        <TopNav/>
         <div className=' flex flex-row'>
        <SideNav/>
        <Taskscomponent/>
    </div>
    </div>
  )
}

export default Tasks