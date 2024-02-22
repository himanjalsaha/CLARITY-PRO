import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { PiChatsTeardropLight } from 'react-icons/pi';
import { IoAnalytics } from 'react-icons/io5';
import { GoGoal } from 'react-icons/go';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiAbstract118 } from 'react-icons/gi';
import { FaAngleRight } from 'react-icons/fa';
import { BiCog, BiHelpCircle } from 'react-icons/bi';
import { GoSidebarCollapse } from 'react-icons/go';

const SideNav = ({ onComponentChange }) => {
  const [open, setOpen] = useState(true);

  const handleComponentClick = (componentName) => {
    onComponentChange(componentName);
  };

  return (
    <div className={`border-r-white border-r-2 bg-black h-screen ${open ? 'w-80' : 'w-20'} duration-300 relative`}>
      <div className="flex flex-row items-center justify-between text-white m-5">
        <div className="logo flex flex-row items-center">
          <GiAbstract118 className={`w-10 h-10 duration-500 ${open ? 'rotate-[360deg]' : ''}`} />
          <text className={`font-extrabold mx-4 font-sans text-2xl ${!open ? 'scale-0' : ''} duration-300`}>ClarityPro</text>
        </div>
        <button onClick={() => setOpen(!open)}>
          <FaAngleRight className={`w-12 h-12 absolute ${open ? 'rotate-180' : ''} bg-[#fa9b25] duration-500 rounded-full -right-6 top-12`} />
        </button>
      </div>

      <div className="my task">
        <div className="text-gray-200 text-lg flex items-center flex-col m-2 p-2">
          <button onClick={() => handleComponentClick('HomeScreen')} className="hover:bg-[#fa9b25] rounded-lg w-full p-2 items-center flex flex-row">
            <MdHomeFilled className="m-1 text-2xl w-5 h-5 text-white absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Home</text>
          </button>
          <button onClick={() => handleComponentClick('TasksComponent')} className="hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row">
            <FaTasks className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7 block`}>Tasks</text>
          </button>
          <button onClick={() => handleComponentClick('Chat')} className="hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row">
            <PiChatsTeardropLight className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Chats</text>
          </button>
        </div>
      </div>
      <hr />

      <div className="insights">
        <ul className="text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2">
          <button onClick={() => handleComponentClick('Analytics')} className="hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row">
            <IoAnalytics className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Analytics</text>
          </button>
          <button className="hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row">
            <GoGoal className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Goals</text>
          </button>
        </ul>
        <hr />
      </div>
      <div className="Teams">
        <ul className="text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2">
          <button className="hover:bg-[#fa9b25] rounded-lg w-full p-2 flex flex-row">
            <BsPersonWorkspace className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Workspace</text>
          </button>
        </ul>
      </div>
      <hr />
      <div className="additional">
        <ul className="text-gray-200 text-lg flex justify-center items-center flex-col m-2 p-2">
          <button onClick={() => handleComponentClick('Settings')} className="hover:bg-[#fa9b25] items-center rounded-lg w-full p-2 flex flex-row">
            <BiCog className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Settings</text>
          </button>
          <button onClick={() => handleComponentClick('Help')} className="hover:bg-[#fa9b25] items-center rounded-lg w-full p-2 flex flex-row">
            <BiHelpCircle className="m-1 absolute" />
            <text className={`${!open ? 'scale-0' : ''} duration-300 mx-7`}>Help</text>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
