import { ListCard } from "./ListCard";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from "react";


export function InDesign() {
    const [designList, setDesignList] = useState([
        { id: '1', title: "title:1", dueDate: "12/12/12", startDate: "12/12/13", priority: "Normal", urgency: 3, importance: 5, effort: 2 },
        { id: '2', title: "title:2", dueDate: "12/12/12", startDate: "12/12/13", priority: "High", urgency: 8, importance: 7, effort: 3 },
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(designList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setDesignList(items);
    };


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div>
                <div>
                    <div className="flex flex-row justify-between bg-purple-200 rounded-lg py-1 items-center mt-8">
                        <div className="flex flex-row px-4 gap-4  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="text-xl font-semibold text-purple-800">In Design</span>
                            <span className=" text-gray-500 p-1 rounded-full">2</span>

                        </div>
                    </div>

                    <div className=" m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400">
                        <span>Name</span>
                        <span>Start Date</span>
                        <span>Due Date</span>
                        <span>Priority</span>
                        <span>People</span>
                    </div>
                      <Droppable droppableId="design-list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {designList.map((task, index) => (
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

                </div>
            </div>
        </DragDropContext>
    );


}