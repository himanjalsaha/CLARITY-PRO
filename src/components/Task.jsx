
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
          className={`bg-neurtal-800 border m-2 p-2 rounded ${snapshot.isDragging && 'opacity-50'}`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;