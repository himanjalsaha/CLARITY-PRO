
// Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-gray-500   m-2 p-2 rounded ${snapshot.isDragging && 'opacity-50'}`}
        >
          {task.content}
          <img src="https://cdn.dribbble.com/userupload/3941095/file/original-2d523f455fc5ec3abe5727100749d440.png?resize=1024x768" alt="" className=' rounded-lg ' />
          <div class="flex -space-x-4 rtl:space-x-reverse m-2">
    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc26OAQj4oUx7ms2bfiM9qn9mqexwEEfZkA&usqp=CAU" alt=""/>
    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc26OAQj4oUx7ms2bfiM9qn9mqexwEEfZkA&usqp=CAU" alt=""/>
    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
    
</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;