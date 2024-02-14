import { useNavigate } from "react-router-dom";
import { LogIn } from "../components/LogIn";

export function UserCredentials() {
    const navigate = useNavigate();

        function handleClick(){
          navigate('/land');
        }


    return (
        
        <div>

            <div className="bg-black p-10 font-sans text-white  w-full ">
                <div className="h-screen">
                    <text className='font-extrabold font-sans text-4xl cursor-pointer' onClick={handleClick}>ClarityPro</text>
                    <LogIn/>
                </div>
            </div>
        </div>
    )
}