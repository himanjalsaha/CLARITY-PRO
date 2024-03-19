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
                                        stroke: `rgb(165 ,221 ,155, ${(1 / 4) * 100})`,
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
                                        fill: '#A5DD9B',
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
                        <span className='border-2 px-4 py-1 rounded-full text-[#394440] bg-[#A5DD9B]'>{daysLeft} Days left</span>
                    </div>


                    <div onClick={handleSubTasks} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A5DD9B" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"  className='cursor-pointer'/>
                        </svg>

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