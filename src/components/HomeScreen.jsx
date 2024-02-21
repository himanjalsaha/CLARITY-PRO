import img from '../assets/face.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import noProjects from '../assets/project.png'
import { MdAdd } from "react-icons/md";
import face1 from '../assets/face-1.png'
import face2 from '../assets/face-2.png'
import face3 from '../assets/face-3.png'
import { useState } from 'react';
import { CustomizeNav } from './CustomizeNav';
import TopNav from './TopNav';
import { useContext } from 'react';
import { Authcontext } from '../context/AuthContext';
export function HomeScreen() {
    const {currentuser} = useContext(Authcontext)
    console.log(currentuser);

    const [isSideNav,setIsSideNav] = useState(false)

    const handleToggleSideNav = () => {
        setIsSideNav(!isSideNav);
      };

    function getCurrentDate() {
        const currentDateTime = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
        return currentDateTime.toLocaleDateString(undefined, options);
    }

    function greetUser() {
        const currentDateTime = new Date();
        const currentHour = currentDateTime.getHours();


        let greeting = '';
        if (currentHour < 12) {
            greeting = 'Good morning';
        } else if (currentHour < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }

        return greeting

    }


    // --bg-100:#1A1A1A;
    // --bg-200:#292929;
    // --bg-300:#404040;
    return (

        <div className='flex  flex-col w-full   '>
            <TopNav/>
            < div className="   h-[calc(100vh-74px)] overflow-auto" >
                <div className="text-white text-center my-4   ">
                    <p className="font-normal text-2xl">{getCurrentDate()}</p>
                    <p className="font-medium text-4xl pt-2">{greetUser()},{currentuser.displayName.toUpperCase()  } </p>

                    <div className="flex flex-wrap gap-10 flex-cols my-4 justify-center">
                        <div className="bg-[#404040] p-4 rounded-lg h-96 shadow-lg mt-4 w-[40%]  hover:border-2 hover:border-white hover:shadow-2xl">
                            <div className='flex flex-row justify-start'>
                                <img src={img} alt="justLogo" className=' h-14 border-2 rounded-full p-2 m-2 border-gray-500 ' />
                                <p className='text-xl mx-2 mt-6 font-normal hover:underline cursor-pointer'>My Tasks</p>
                            </div>

                            <div className='flex flex-row mx-8 border-b border-gray-500'>
                                <p className='mx-2'>Upcoming</p>
                                <p className='mx-2'>Overdue</p>
                                <p className='mx-2'>Completed</p>
                            </div>


                        </div>

                        <div className="bg-[#404040] p-4 rounded-lg h-96 shadow-lg mt-4 w-[40%]  hover:border-2 hover:border-white hover:shadow-2xl">
                            <div className='flex justify-start'>
                                <p className=' text-2xl font-medium text-gray-200 cursor-default'>Projects</p>
                                <p className='text-sm mt-2 
                                px-4 mx-4 text-gray-300 hover:bg-gray-500
                                hover:rounded-xl  cursor-pointer'>Recents</p>
                            </div>


                            <div className='flex flex-col justify-center items-center cursor-pointer'>
                                <img src={noProjects} alt="justProjects" className='h-60 mt-2' />
                                <div className='flex flex-row my-4'>
                                    <p className='border-2 mx-2 border-dotted rounded-xl p-2'>
                                        <MdAdd size={30} />
                                    </p>
                                    <p className='text-xl font-medium my-2'>Create Project</p>


                                </div>

                            </div>
                        </div>

                        <div className="bg-[#404040] p-4 rounded-lg h-96 shadow-lg mt-4 w-[40%]  hover:border-2 hover:border-white hover:shadow-2xl">
                        <div className='flex justify-start p-2'>
                                <p className=' text-2xl font-medium text-gray-200 cursor-default'>People</p>
                                <p className='text-sm mt-2 
                                px-4 mx-4 text-gray-300 hover:bg-gray-500
                                hover:rounded-xl  cursor-pointer'>Frequent Members</p>
                            </div>
                            <div className='flex flex-row justify-start'>
                                <img src={face1} alt="justLogo" className=' h-14 border-2 rounded-full p-2 m-2 border-gray-500 ' />
                                <p className='text-xl mx-2 mt-6 font-normal hover:underline cursor-pointer'>Member</p>
                            </div>
                            <div className='flex flex-row justify-start'>
                                <img src={face2} alt="justLogo" className=' h-14 border-2 rounded-full p-2 m-2 border-gray-500 ' />
                                <p className='text-xl mx-2 mt-6 font-normal hover:underline cursor-pointer'>Member</p>
                            </div>
                            <div className='flex flex-row justify-start'>
                                <img src={face3} alt="justLogo" className=' h-14 border-2 rounded-full p-2 m-2 border-gray-500 ' />
                                <p className='text-xl mx-2 mt-6 font-normal hover:underline cursor-pointer'>Member</p>
                            </div>
                            <div className='flex flex-col justify-center items-center '>
                                <p className=' text-sm  text-gray-200 cursor-default m-2'>Invite to collaborate together</p>
                                <button className='border-2 w-40 p-2 rounded-lg border-gray-600 hover:bg-slate-600'>Frequent Members</button>
                            </div>
                        </div>

                        <div className="bg-[#404040] p-4 rounded-lg h-96 shadow-lg mt-4 w-[40%]  hover:border-2 hover:border-white hover:shadow-2xl flex  justify-center items-center">
                            
                        <button className=' border-2 w-40 p-2 rounded-lg border-gray-600 hover:bg-slate-600' onClick={ handleToggleSideNav }>Customize</button>
                        <CustomizeNav isOpen={isSideNav} onClose={handleToggleSideNav}></CustomizeNav>
                        </div> 

                    </div>
                </div>



            </div >

        </div>




    )
}