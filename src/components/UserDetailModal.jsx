import img from '../assets/green-gradient.jpg'
export function UserDetailModal({ username, email, login }) {


    return (

        <div className="bg-[#4A5451] absolute left-52 top-28 w-64 h-80 border-2 border-black rounded-xl shadow-xl ">
            <img src={img} alt="" className='rounded-t-xl ' />
            <div className='flex flex-col flex-wrap gap-4 p-2'>
                <div className='text-white font-sans flex gap-2 text-md'>
                    <span className='text-gray-300'>Username : </span>
                    <span>{username}</span>
                </div>
                <div className='text-white font-sans flex flex-wrap gap-1  text-md'>
                    <span className='text-gray-300'>Email:</span>
                    <span className=''>{email}</span>
                </div>
                <div className='text-white font-sans flex gap-2 text-xs'>
                <span className='text-gray-300'>Last Login : </span>
                <span className='w-28'>{login}</span>
                </div>

              

            </div>
        </div>
    )
}