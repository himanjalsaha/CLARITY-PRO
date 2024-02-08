export function ListCard({title,startDate,dueDate,priority}){
    return (
        <div>
               <div className=" m-1 p-1 flex flex-row gap-40 text-gray-300 border-b-[0.5px] border-gray-400">
                <h4>{title}</h4>
                <h4>{startDate}</h4>
                <h4>{dueDate}</h4>
                <h4>{priority}</h4>
            </div>
        </div>
    )
}