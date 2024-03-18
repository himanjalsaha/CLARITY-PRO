import React, { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
        onCreateTodo(taskData);
        onClose();
    }

    return (
        <div className="absolute z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="bg-[#6d7d78] p-20 rounded-md shadow-md">
                <span
                    className="absolute top-[25%] right-[38%] cursor-pointer text-white"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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
                        className="w-full border border-[#4A5451] bg-[#4A5451]  p-2 rounded-md"
                    />
                </label>
                <label className="mb-4 flex flex-col gap-1 ">
                    Due Date:
                    <input
                        type="text"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={handleChange}
                        className="w-full border border-[#4A5451] bg-[#4A5451] p-2 rounded-md"
                    />
                </label>
                <button
                    onClick={handleCreateTodo}
                    className="bg-[#4c5652] border-2 text-[#EDFF87] bg-opacity-75 border-opacity-15  border-white text-start px-4 py-2 rounded-xl"
                >
                    Create Task
                </button>
            </div>
        </div>
    );
};
