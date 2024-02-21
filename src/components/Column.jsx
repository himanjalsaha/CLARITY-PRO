import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column, tasks, index ,onColumnDragEnd }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="border rounded bg-neutral-900 p-2 h-screen m-2"
        >
          <div {...provided.dragHandleProps} className="font-bold text-lg p-5 flex flex-row items-center  mb-2">
          <span class="relative flex h-3 w-3 mx-2">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
            {column.title}
          </div>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 ${snapshot.isDraggingOver ? 'bg-neutral-700 h-[95%] rounded-2xl overflow-auto' : 'bg-neutral-800 h-[90%] rounded-2xl  overflow-auto'}`}
              >
                
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                  
                ))}
         
                {provided.placeholder}
              </div>
              
            )}
          </Droppable>
          
        </div>
      )}
    </Draggable>
  );
};

export default Column;
