import { useState } from 'react';

export function SubTasks() {
    const [subtasks, setSubtasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddSubtask = () => {
        if (inputValue.trim() !== '') {
            setSubtasks([...subtasks, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div >
            <div >
            <ul>
                {subtasks.map((subtask, index) => (
                    <li key={index}>{subtask}</li>
                ))}
            </ul>
            <div className='flex flex-col gap-4'>
                <input type="text" className='bg-slate-900 text-white w-80' value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddSubtask} className='w-32 text-md border-2 px-2 py-1 hover:text-black hover:bg-slate-500 outline-none rounded-lg'>Add Subtask</button>
            </div>
            </div>
           
        </div>
    );
}


