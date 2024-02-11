
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
          <img src="https://cdn.dribbble.com/userupload/3941095/file/original-2d523f455fc5ec3abe5727100749d440.png?resize=1024x768" alt="" className=' rounded-lg' />
        </div>
      )}
    </Draggable>
  );
};

export default Task;