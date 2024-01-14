import React from 'react'
import img from '../assets/image.png.png'
import { PiTestTubeFill } from "react-icons/pi"; 
import { AiOutlineTeam } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { MdAppBlocking } from "react-icons/md";
import { GrAchievement, GrProductHunt } from "react-icons/gr";
import { BiLogoProductHunt } from "react-icons/bi";
const Header = () => {
  return (
    <div className='flex flex-row   rounded-lg p-5 gap-10'>
 
        
        <div className=' flex-[0.6] flex items-center justify-center'>
        <img src={img} alt="" className=' rounded-2xl  ' />
        </div>

        <div className="relative flex-[0.4] group">
  <div className="absolute card -inset-1 bg-gradient-to-r from-pink-600 to-violet-700 rounded-lg blur-xl  opacity-75 group-hover:opacity-100 transition duration-200 "></div>
  <div className="card relative border-2 bg-black rounded-xl text-white w-full h-full">
    <div className="flex justify-center items-center">
      <PiTestTubeFill className="w-10 h-10 text-pink-600 mx-2" />
      <text className="font-bold text-2xl m-3">Why Clarity-Pro</text>
    </div>
    <div className='flex justify-center text-2xl group-hover:text-gray-100 transition duration-200 p-2'>
    <ul className='gap-2'>
  <li className='m-1'><strong className='flex  items-center'> <AiOutlineTeam className="w-10 h-10 text-pink-600 mx-2"/>Seamless Task Management:</strong> Effortlessly organize and prioritize tasks to stay on top of your workload.</li>
  
  <li><strong className='flex  items-center'> <MdWorkspaces className="w-10 h-10 text-pink-600 mx-2" />Customizable Workspaces:</strong> Tailor your work environment to suit your unique needs and preferences.</li>
  
  <li><strong className='flex  items-center'><FcCollaboration className="w-10 h-10 text-pink-600 mx-2" />Efficient Collaboration:</strong> Collaborate effortlessly with team members, fostering a productive work environment.</li>
  
  <li><strong className='flex  items-center'><MdAppBlocking className="w-10 h-10 text-pink-600 mx-2" />Distraction Blocking:</strong> Stay focused by blocking distractions and optimizing your work environment.</li>
  
  <li><strong className='flex  items-center'><GrAchievement className="w-10 h-10 text-pink-600 mx-2"/>Achievement Celebration:</strong> Celebrate milestones and achievements, fostering a positive and motivating atmosphere.</li>
  
  <li><strong className='flex  items-center'><GrProductHunt className="w-10 h-10 text-pink-600 mx-2"/>Transformative Productivity:</strong> Clarity Pro is more than just a task manager; it's a transformative tool designed to elevate your overall productivity.</li>

</ul>

    </div>
  </div>
</div>

    </div>
  )
}

export default Header