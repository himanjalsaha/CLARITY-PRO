import { ListCard } from "./ListCard";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from "react";

export function InReview() {
    const [review, setReview] = useState([
        { id: '1', title: "title:1", dueDate: "26-04-24", startDate: "12/12/13", priority: "Normal", urgency: 3, importance: 5, effort: 2 },
        { id: '2', title: "title:2", dueDate: "26-02-24", startDate: "12/12/13", priority: "High", urgency: 8, importance: 7, effort: 3 },
    ]);

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
        return new Date(`20${year}-${month}-${day}`);
    }

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(review);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setReview(items);
    };
   
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className='font-sans flex flex-col shadow-2xl  rounded-xl bg-[#4A5451] bg-opacity-60'>
                <div className="bg-[#475852]  border-2 text-white border-opacity-15  border-white  text-start px-4 py-2 rounded-xl flex flex-row justify-between  items-center my-2">
                    <div className="flex flex-row px-4 gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="text-xl font-semibold text-white">In Review</span>
                        <span className=" text-white-500 p-1 rounded-full">{review.length}</span>
                    </div>

                </div>
                <div>

                    <Droppable droppableId="review">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                                {review.map((task, index) => (
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

                </div>
            </div>

        </DragDropContext>
    );

}
