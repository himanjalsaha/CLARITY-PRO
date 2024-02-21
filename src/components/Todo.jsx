import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListCard } from "./ListCard";
import CreateTaskModal from "./CreateTaskModal";

export function Todo() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [todo, setTodo] = useState([
        { id: '1', title: "DBMS presentation", dueDate: "25-02-24" },
        { id: '2', title: "create ui", dueDate: "26-02-24" },
    ]);

    function numberOfDaysLeft(dueDate) {
        const today = new Date();

        // Calculate the difference in milliseconds
        const differenceMs = dueDate - today;

        // Convert milliseconds to days
        const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

        console.log(dueDate)
        console.log(days);
        return days;
    }

    // // Usage example:
    // const dueDate = ;
    // const days = numberOfDaysLeft(dueDate);
    // console.log("Days left until due date:", days);

    function parseDate(dateString) {
        const [day, month, year] = dateString.split('-');
        return new Date(`20${year}-${month}-${day}`);
    }

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };



    return (

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

            {/* <div className="m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400">
                <span>Name</span>
                <span>Start Date</span>
                <span>Due Date</span>
                <span>Priority</span>
                <span>People</span>
            </div> */}
            <div >
                {/* {todo.map((task, index) => (

                    <div >
                        <ListCard
                            key={task.id}
                            title={task.title}
                            dueDate={task.dueDate}
                            startDate={task.startDate}
                            priority={task.priority}
                        />
                    </div>
                ))} */}


              <div className='flex flex-col gap-4'>
              <ListCard title={todo[0].title} dueDate={todo[0].dueDate} daysLeft={numberOfDaysLeft(parseDate(todo[0].dueDate))} />
                <ListCard title={todo[1].title} dueDate={todo[1].dueDate} daysLeft={numberOfDaysLeft(parseDate(todo[1].dueDate))} />
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
    );
}
