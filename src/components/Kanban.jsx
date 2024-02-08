// Kanban.js
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

const initialColumns = [
  { id: 'todo', title: 'To Do', taskIds: ['task-1', 'task-2', 'task-3'] },
  { id: 'inProgress', title: 'In Progress', taskIds: [] },
  { id: 'done', title: 'Done', taskIds: [] },
  // Add more columns as needed
];

const initialTasks = {
  'task-1': { id: 'task-1', content: 'Task 1' },
  'task-2': { id: 'task-2', content: 'Task 2' },
  'task-3': { id: 'task-3', content: 'Task 3' },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    // If there's no destination or the task is dropped back to its original position, do nothing
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
  
    const startColumn = columns.find((column) => column.id === source.droppableId);
    const finishColumn = columns.find((column) => column.id === destination.droppableId);
  
    const updatedColumns = Array.from(columns);
  
    // Remove the task from the start column
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    updatedColumns.find((column) => column.id === source.droppableId).taskIds = startTaskIds;
  
    // Add the task to the finish column
    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    updatedColumns.find((column) => column.id === destination.droppableId).taskIds = finishTaskIds;
  
    setColumns(updatedColumns);
  };
  
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="kanban" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-3 gap-4 p-4"
          >
            {columns.map((column, index) => (
              <Column
                key={column.id}
                column={column}
                tasks={column.taskIds.map((taskId) => tasks[taskId])}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
