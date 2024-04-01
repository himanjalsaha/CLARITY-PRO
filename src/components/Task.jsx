import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {CiMenuBurger} from 'react-icons/ci'
const Task = ({ task, index }) => {
  useEffect(() => {
    console.log(task);
    console.log(task);
  }, [task]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${monthName} ${day} ${hours}:${minutes}`;
  };
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-gray-500 m-2 p-2 rounded ${snapshot.isDragging && 'opacity-50'}`}
        >
          <div className='flex flex-row justify-between items-center'>
          <div className='text-sm bg-yellow-300 rounded-xl p-1 text-black'>{task.duedate}</div>
          <div className="mb-2 font-bold text-center p-1  ">{task.content}</div>

          <div><CiMenuBurger className='w-5 h-5'/></div>
          </div>
       
          <div>{task.description}</div>
          {task.subtasks && task.subtasks.length > 0 && (
            <div className="flex flex-col space-y-2">
              {task.subtasks.map((subtask, subtaskIndex) => (
                <div key={subtask.id} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 accent-pink-500 w-5 h-5" checked={subtask.completed} readOnly />
                  <span className={`text-sm ${subtask.completed ? 'line-through' : ''}`}>{subtask.name}</span>
                  <div className="flex -space-x-4 rtl:space-x-reverse m-2">
                    {Array.isArray(subtask.assignedUsers) ? ( // Check if assignedUsers is an array
                      subtask.assignedUsers.map((user, userIndex) => (
                        <img
                          key={userIndex}
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={user.photourl}
                          alt=""
                        />
                      ))
                    ) : (

                      // If assignedUsers is not an array, render a single image (or handle as needed)
                      <img
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={subtask.assignedUsers ? subtask.assignedUsers[0][0].photourl : ''}
                        
                        alt=""
                      />
                    )}
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href="#"
                    >
                      +99
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          <hr/>
          <div className='flex items-center justify-between m-2'>
          <div className='bg-red-400 rounded-xl  p-1 ' >{task.priority}</div>
          <div className='bg-gray-600 rounded-xl  p-1 '>{formatTime(task.createdat* 1000)}</div>


          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
