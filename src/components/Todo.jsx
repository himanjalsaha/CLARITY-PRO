import React, { useState } from 'react';
import { ListCard } from "./ListCard";
import CreateTaskModal from "./CreateTaskModal";
import SubTaskModal from './SubTaskModal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function Todo() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [todo, setTodo] = useState([
        { id: '1', title: "DBMS presentation", dueDate: "25-02-24" },
        { id: '2', title: "create ui", dueDate: "26-02-24" },
    ]);



    const [showSubtasks, setShowSubTasks] = useState(false);
  
    function handleSubTasks() {
        setShowSubTasks(!showSubtasks);
    }

   
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todo);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodo(items);
    };

    function numberOfDaysLeft(dueDate) {
        const today = new Date();

        // Check if the due date is in the past
        if (dueDate < today) {
            return 0; // Due date has passed, return 0 days left
        }

        // Calculate the difference in milliseconds
        const differenceMs = dueDate - today;

        // Convert milliseconds to days
        const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

        console.log(dueDate)
        console.log(days);
        return days;
    }


    function parseDate(dateString) {
        const [day, month, year] = dateString.split('-');
        // Ensure day, month, and year are converted to integers
        const dayInt = parseInt(day, 10);
        const monthInt = parseInt(month, 10) - 1; // Months in JavaScript are zero-based
        const yearInt = parseInt(year, 10) + 2000; // Assuming two-digit year represents 20th century
    
        return new Date(yearInt, monthInt, dayInt);
    }
    

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    let globalId = 3;
    function handleCreateTodo(newTodo) {
        newTodo.id = globalId.toString();
        globalId++;
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        console.log(newTodo);
        console.log(newTodo.id);
    }


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className='font-sans shadow-2xl rounded-xl bg-[#4A5451] bg-opacity-60'>
                <div className="bg-[#475852]  border-2 text-white border-opacity-15  border-white  text-start px-4 py-2 rounded-xl flex flex-row justify-between  items-center my-2">
                    <div className="flex flex-row px-4 gap-4  items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="text-xl font-semibold text-white">Todo</span>
                        <span className=" text-white-500 p-1 rounded-full">{todo.length}</span>
                    </div>
                    <div className="px-4">
                        <button onClick={handleOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray " className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div >

                    <Droppable droppableId="todo-list">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                                {todo.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <ListCard
                                                    key={task.id}
                                                    title={task.title}
                                                    dueDate={task.dueDate}
                                                    startDate={task.startDate}
                                                    priority={task.priority}
                                                    daysLeft={numberOfDaysLeft(parseDate(task.dueDate))}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <div>
                        {todo.map((task) => (
                            <div key={task.id} className='absolute w-1/2 right-5 bottom-0 z-10'>
                                {showSubtasks ? <SubTaskModal title={task.title} dueDate={task.dueDate} priority={"normal"} open={showSubtasks} setOpen={setShowSubTasks}/> : null}
                            </div>
                        ))}
                    </div>

                    {isModalOpen && (
                        <CreateTaskModal
                            onCreateTodo={handleCreateTodo}
                            className="transition-all transition-300 ease-in"
                            onClose={handleCloseModal}
                        />

                    )}
                </div>
            </div>
        </DragDropContext>
    );
}
