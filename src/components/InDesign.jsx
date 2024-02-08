import { ListCard } from "./ListCard";

export function InDesign() {
    return <div>
        <div>
            <div className="flex flex-row justify-between bg-purple-200 rounded-lg py-1 items-center mt-8">
                <div className="flex flex-row px-4 gap-4  items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span className="text-xl font-semibold text-purple-800">In Design</span>
                    <span className=" text-gray-500 p-1 rounded-full">2</span>

                </div>
                {/* <div className="px-4">
                    <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray " className=" w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg></button>

                </div> */}
            </div>

            <div className=" m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400">
                <span>Name</span>
                <span>Start Date</span>
                <span>Due Date</span>
                <span>Priority</span>
                <span>People</span>
            </div>
            <ListCard title={"title:1"} dueDate={"12/12/12"} startDate={"12/12/13"} priority={"Normal"}></ListCard>
            <ListCard title={"title:1"} dueDate={"12/12/12"} startDate={"12/12/13"} priority={"Normal"}></ListCard>

        </div>
    </div>

}
