import React from 'react'
import img from '../assets/image.png.png'
import { PiTestTubeFill } from "react-icons/pi"; 
import { AiOutlineTeam } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { MdAppBlocking } from "react-icons/md";
import { GrAchievement, GrProductHunt } from "react-icons/gr";
import { BiLogoProductHunt } from "react-icons/bi";
import { FaConnectdevelop } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import blob from '../assets/blob.svg'
const Header = () => {
  return (
    <div className='  h-screen flex flex-row  p-5 gap-10'>
 
        
        <div className=' flex-[0.49] flex items-center justify-center'>
          <img src={blob} alt=""  className=' absolute'/>
        <img src={img} alt="" className=' relative rounded-2xl  h-[56%] w-[56%]'  />
        </div>
        <div className=' flex-[0.6] flex justify-center items-center flex-col'>
        <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to Clarity Pro: Your Path to Productivity Excellence',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to Clarity Pro: Your Path to Team Collaboration',
        1000,
        'Welcome to Clarity Pro: Your Path to Creativity',
        1000,
        'Welcome to Clarity Pro: Your Path to streamlined workflows',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:'white' , fontWeight:"bold"   }}
      repeat={Infinity}
    />
    <text className='text-white  text-xl m-8'>
    ~Elevate productivity with intelligent task management, collaboration, and AI-driven insights. Your path to streamlined workflows and success.
    </text>

        </div>


        
    </div>
    
  )
}

export default Header



