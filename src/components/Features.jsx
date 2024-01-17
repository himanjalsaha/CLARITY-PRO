import React from 'react'
import { GiAbstract118 } from "react-icons/gi";
import bg from '../assets/qqquad.svg'
import card1Image from '../assets/hi.gif'
import card2Image from '../assets/img2.gif'
import card3Image from '../assets/communicate.gif'
import card4Image from '../assets/img3.gif'
import card5Image from '../assets/img4.gif'
import { Slide } from "react-awesome-reveal";
const Features = () => {
  return (
<div className="h-screen flex bg-black">
  <div className="text-white flex items-center justify-center flex-col w-full ">
    <img src={bg} alt="" className="absolute h-full w-full object-cover" />
    <Slide>
    <text className=' font-bold text-4xl flex flex-row mx-1'>Whats Different about <GiAbstract118 className='m-1'/>ClarityPro?</text>
    </Slide>
<div className="    grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 m-6 mt-20 font-bold font-sans  relative">
      {/* Card 1 */}
      <div className="card w-[98%] h-[50%] ">
        <img src={card2Image} alt="Card 1" className="card-image bg-black rounded-t-lg shadow-2xl shadow-gray-600" />
        <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Manage tasks And Projects Efficiently</div>
      </div>
      {/* Card 2 */}
      <div className="card w-[98%] h-[100%]">
        <img src={card3Image} alt="Card 1" className="card-image bg-black rounded-t-lg " />
        <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Stay in touch with your team</div>
      </div>
      {/* Card 3 */}
      <div className="card w-[98%] h-[50%]">
        <img src={card4Image} alt="Card 1" className="card-image bg-black rounded-t-lg " />
        <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Visualize and brainstorm</div>
      </div>
      <div className="card w-[98%] h-[50%]">
        <img src={card5Image} alt="Card 1" className="card-image bg-black rounded-t-lg " />
        <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Your Productivity Partner</div>
      </div> 
    </div>
    <h1 className="text-white font-bold text-3xl text-nowrap mt-4">What's Different about ClarityPro</h1>
  </div>
</div>

  )
}

export default Features