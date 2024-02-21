import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export function ListCard({ title, team, dueDate, daysLeft }) {
    return (
        <div>
            {/* <div className="m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400"> */}
            <div className="flex   border-2 p-3 gap-4 w-3/5 rounded-xl bg-black">
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl">{title}</span>
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
                    <div className=''>
                        <div className="h-20 w-20">
                            <CircularProgressbar
                                value={1 / 4 * 100} // Calculate the percentage of completion (4 out of 7)
                                text={`${(1 / 4) * 100}%`} // Display the text "4/7"
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(237, 254, 134, ${(1 / 4) * 100})`, // Set the stroke color based on completion percentage
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
                                        fontSize: '28px',
                                    },
                                    background: {
                                        fill: '#394440',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className=''>
                        <span className='border-2 px-4 py-1 rounded-full text-[#394440] bg-[#EDFF87]'>{daysLeft} Days left</span>
                    </div>
                </div>

            </div>
        </div>
    )
}