import React from 'react';
import img from '../assets/blob-haikei.svg';
import { Fade } from "react-awesome-reveal";
import img1 from '../assets/imga12.png';
import img2 from '../assets/imga2.png';
import img3 from '../assets/imga3.png';
import img4 from '../assets/imga5.png';

const TargetAudience = () => {
  return (
    <div className='h-full bg-black relative'>
      <img src={img} alt="" className='rotate-180 absolute bg-black' />
      <div className='flex  relative justify-center items-center flex-col'>
        <Fade>
          <text className='font-bold text-4xl flex flex-row mx-1 text-white m-8'>Who should use it? </text>
        </Fade>
        <div className="grid relative grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-6 mt-20 font-bold font-sans">
          {/* Card 1 */}
          <div className="card w-full h-full">
            <img src={img1} alt="Card 1" className="card-image w-full h-full object-cover bg-black rounded-t-lg shadow-2xl shadow-gray-600" />
            <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Manage tasks And Projects Efficiently</div>
          </div>
          {/* Card 2 */}
          <div className="card w-full h-full">
            <img src={img2} alt="Card 2" className="card-image w-full h-full object-cover bg-black rounded-t-lg p-5" />
            <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Stay in touch with your team</div>
          </div>
          {/* Card 3 */}
          <div className="card w-full h-full">
            <img src={img3} alt="Card 3" className="card-image w-full h-full object-cover bg-black rounded-t-lg p-5" />
            <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Small to Medium-Sized Businesses</div>
          </div>
          <div className="card w-full h-full">
            <img src={img4} alt="Card 4" className="card-image w-full h-full object-cover bg-black rounded-t-lg" />
            <div className="card-caption p-5 bg-white rounded-b-lg text-black shadow-lg shadow-gray-600">Your Productivity Partner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetAudience;
