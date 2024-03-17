import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import sub from '../assets/subtask.png'


export function ListCard({ title, team, dueDate, daysLeft, handleSubTasks }) {


    return (
        <div className='relative '>
            <div className="bg-[#475852] border-2 text-white border-opacity-15  border-white text-start px-1 py-2 rounded-xl flex items-center gap-10">
                <div className="flex gap-24  items-center">

                    <span className="text-2xl w-60">{title}</span>

                    <div className='px-4 flex'>
                        <div className="h-14  w-14">
                            <CircularProgressbar
                                value={1 / 4 * 100}
                                text={`${(1 / 4) * 100}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(237, 254, 134, ${(1 / 4) * 100})`,
                                        strokeLinecap: 'round',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                    },
                                    trail: {
                                        stroke: '#394440',
                                        strokeLinecap: 'round',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    text: {
                                        fill: '#EDFF87',
                                        fontSize: '16px',
                                    },
                                    background: {
                                        fill: '#394440',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <span className='border-2 px-4 py-1 rounded-full text-[#394440] bg-[#EDFF87]'>{daysLeft} Days left</span>
                    </div>


                    <div onClick={handleSubTasks} >
                        <img src={sub} alt="" className='h-6 w-6 cursor-pointer' />
                    </div>

                </div>
                <div className="flex justify-between gap-4 items-center">
                    <div className="flex flex-col gap-1 text-gray-300">
                        <span className="text-xs">Due Date</span>
                        <span className="text-sm">{dueDate}</span>
                    </div>
                    <div class="flex -space-x-4 rtl:space-x-reverse m-2">
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc26OAQj4oUx7ms2bfiM9qn9mqexwEEfZkA&usqp=CAU" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc26OAQj4oUx7ms2bfiM9qn9mqexwEEfZkA&usqp=CAU" alt="" />
                        <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>

                    </div>
                </div>
            </div>

        </div>
    )
}