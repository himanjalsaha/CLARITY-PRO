import React, { useState } from 'react';
import TopNav from './TopNav';
import { IoIosAnalytics } from "react-icons/io";
import BasicSparkLine from './BasicSparkLine';
import ProgressBar from './ProgressBar';
import { yellow } from '@mui/material/colors';

const initialTasks = [
  { id: 1, title: 'Task 1', dueDate: '2024-02-20', productivity: 60, timeAtWork: 6, details: false },
  { id: 2, title: 'Task 2', dueDate: '2024-02-22', productivity: 70, timeAtWork: 7, details: false },
  { id: 3, title: 'Task 3', dueDate: '2024-02-25', productivity: 80, timeAtWork: 8, details: false },
  { id: 4, title: 'Task 4', dueDate: '2024-02-28', productivity: 50, timeAtWork: 5, details: false },
  { id: 5, title: 'Task 5', dueDate: '2024-03-05', productivity: 75, timeAtWork: 7.5, details: false },
  // Add more tasks as needed
];

const Analytics = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [shownTasks, setShownTasks] = useState(initialTasks.slice(0, 3)); // Changed to 3 tasks initially

  const toggleDayDetails = (index) => {
    const updatedTasks = [...shownTasks];
    updatedTasks[index].details = !updatedTasks[index].details;
    setShownTasks(updatedTasks);
  };

  const toggleShowMoreTasks = () => {
    setShowAllTasks(!showAllTasks);
    if (!showAllTasks) {
      setShownTasks(initialTasks);
    } else {
      setShownTasks(initialTasks.slice(0, 3)); // Changed to 3 tasks when showing less
    }
  };

  return (
    <div className='bg-[#282828] w-full '>
      <TopNav />
      <div className='h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-5xl font-sans font-bold mx-5 flex flex-row items-center '><IoIosAnalytics className='mx-2' />Analytics</text>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <BasicSparkLine />
          </div>
          <div className='flex flex-col items-center justify-center bg-neutral-900 rounded-2xl p-2'>
            <span className='font-sans text-green-500 text-xl'>Completed Tasks</span>
            <ProgressBar progress={21} color={"#34D399"} />
            <span className='font-sans text-white text-xl'>Total Tasks</span>
            <ProgressBar progress={65} color={"#6B7280"} />
            <span className='font-sans text-red-500 text-xl'>Working Hours</span>
            <ProgressBar progress={30} color={"#EF4444"} />
          </div>
          <div className="mt-4 bg-neutral-600  rounded-xl p-5">
            <span className='font-sans text-yellow-500 text-xl'>Upcoming</span>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Title</th>
                  <th className="text-left">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {shownTasks.map(task => (
                  <tr key={task.id}>
                    <td className="text-white">{task.title}</td>
                    <td className="text-white">{task.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {initialTasks.length > 3 && (
              <button className="text-white underline mt-2 duration-300" onClick={toggleShowMoreTasks}>
                {showAllTasks ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
          <div>
            <div className="mt-4 bg-neutral-600 rounded-lg p-5">
              <span className='font-sans text-yellow-500 text-xl'>Productivity Overview</span>
              {shownTasks.map((day, index) => (
                <div key={day.id} className="mb-4">
                  <span className='font-sans text-yellow-500 text-xl'>{day.date}</span>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-col items-center">
                      <span>Productivity</span>
                      <ProgressBar progress={day.productivity} color={"#6B7280"} />
                    </div>
                    <div className="flex flex-col items-center">
                      <span>Time at Work</span>
                      <div>{day.timeAtWork} hrs</div>
                    </div>
                  </div>
                  {day.details && (
                    <div className="mt-2">
                      {/* Additional details for the day */}
                      {/* Add your details here */}
                    </div>
                  )}
                  {day.details && (
                    <button className="text-white underline mt-2" onClick={() => toggleDayDetails(index)}>
                      {day.details ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
