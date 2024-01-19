import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import { HomeScreen } from '../components/HomeScreen'

const Home = () => {
  return (
    <div >
        <TopNav/>
         <div className=' flex flex-row'>
        <SideNav/>
        <HomeScreen></HomeScreen>
        {/* {put homescreen here} */}
    </div>
    </div>
   
  )
}

export default Home