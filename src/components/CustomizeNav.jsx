import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function CustomizeNav({ isOpen, onClose }) {
    const [bgColor, setBgColor] = useState('bg-[#292929]');

    const click = (gradient) => {
        setBgColor(gradient);
    };

    useEffect(() => {
        document.body.classList = bgColor;
    }, [bgColor]);


    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <div className="flex justify-between mt-2">
                <p className="text-xl font-medium ">Customize Home</p>
                <button className="text-white" >
                    <AiOutlineClose onClick={onClose} size={15} />
                </button>
            </div>

            <div className="my-4">
                <p className="flex justify-start text-lg font-medium ">Background</p>
                <div className="flex flex-row justify-evenly my-4">
                    <button className=" border-2 border-red-700 rounded-full w-10 h-10 bg-red-700 cursor-pointer " onClick={() => click('bg-gradient-to-tr from-black via-black to-red-900')
                    }></button>
                    <button className=" border-2 border-green-700 rounded-full w-10 h-10 bg-green-700 cursor-pointer" onClick={() => click('bg-gradient-to-tr from-black via-black to-green-900')
                    }></button>
                    <button className=" border-2 border-orange-600 rounded-full w-10 h-10 bg-orange-600 cursor-pointer" onClick={() => click('bg-gradient-to-tr from-black via-black to-orange-900')
                    }></button>
                    <button className=" border-2 border-blue-800 rounded-full w-10 h-10 bg-blue-800 cursor-pointer" onClick={() => click('bg-gradient-to-tr from-black via-black to-blue-900')
                    }></button>
                    <button className=" border-2 border-purple-700 rounded-full w-10 h-10 bg-purple-700 cursor-pointer" onClick={() => click('bg-gradient-to-tr from-black via-black to-purple-900')
                    }></button>
                </div>
            </div>

        </div>
    );
    
};