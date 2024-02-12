import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListCard } from "./ListCard";
import CreateTaskModal from "./CreateTaskModal";

export function Todo() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [todo, setTodo] = useState([
        { id: '1', title: "title:1", dueDate: "12/12/12", startDate: "12/12/13", priority: "Normal" },
        { id: '2', title: "title:2", dueDate: "12/12/12", startDate: "12/12/13", priority: "High" },
    ]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    let globalId = 3;
    const handleCreateTodo = (newTodo) => {
        newTodo.id = globalId.toString();
        globalId++;
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        console.log(newTodo)
        console.log(newTodo.id)
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todo);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodo(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div>
                <div className="flex flex-row justify-between bg-orange-200 rounded-lg py-1 items-center my-2">
                    <div className="flex flex-row px-4 gap-4  items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="text-xl font-semibold text-black">Todo</span>
                        <span className=" text-gray-500 p-1 rounded-full">{todo.length}</span>
                    </div>
                    <div className="px-4">
                        <button onClick={handleOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray " className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400">
                    <span>Name</span>
                    <span>Start Date</span>
                    <span>Due Date</span>
                    <span>Priority</span>
                    <span>People</span>
                </div>

                <Droppable droppableId="todo-list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
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
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                {isModalOpen && (
                    <CreateTaskModal
                        onCreateTodo={handleCreateTodo}
                        className="transition-all transition-300 ease-in"
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </DragDropContext>
    );
}
