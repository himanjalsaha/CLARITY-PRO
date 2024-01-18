import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
const Home = () => {
  return (
    <div >
        <TopNav/>
         <div className=' flex flex-row'>
        <SideNav/>
        {/* {put homescreen here} */}
    </div>
    </div>
   
  )
}

export default Home