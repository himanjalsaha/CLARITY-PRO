import React, { useState } from "react";

export default function CreateTaskModal({ onCreateTodo, onClose }) {
    const [taskData, setTaskData] = useState({
        title: "",
        startDate: "",
        dueDate: "",
        priority: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleCreateTodo() {
        onCreateTodo(taskData)
        // Close the modal after creating the task
        onClose();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-orange-700">
            <div className="bg-orange-200 p-20 rounded-md shadow-md">
                <span
                    className="absolute top-[25%] right-[38%] cursor-pointer text-white"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </span>
                <h2 className="text-2xl font-bold mb-4">Create Todo</h2>
                <label className="block mb-4">
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        className="w-full border border-orange-500 bg-orange-50 p-2 rounded-md"
                    />
                </label>
                {/* <label className="block mb-4">
                    Start Date:
                    <input
                        type="text"
                        name="startDate"
                        value={taskData.startDate}
                        onChange={handleChange}
                        className="w-full border border-orange-500 bg-orange-50 p-2 rounded-md"
                    />
                </label> */}
                <label className="block mb-4">
                    Due Date:
                    <input
                        type="text"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={handleChange}
                        className="w-full border border-orange-500 bg-orange-50 p-2 rounded-md"
                    />
                </label>
                {/* <label className="block mb-4">
                    Priority:
                    <input
                        type="text"
                        name="priority"
                        value={taskData.priority}
                        onChange={handleChange}
                        className="w-full border border-orange-500 bg-orange-50 p-2 rounded-md"
                    />
                </label> */}

                <button
                    onClick={handleCreateTodo}
                    className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700"
                >
                    Create Task
                </button>
            </div>
        </div>
    );
};

