import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import { HomeScreen } from '../components/HomeScreen'

const Home = () => {
  return (
    <div className='  ' >
         <div className=' flex flex-row'>
        <SideNav/>
        <HomeScreen className=" h-[calc(100vh-70px)]"/>
        {/* {put homescreen here} */}
    </div>
    </div>
   
  )
}

export default Home