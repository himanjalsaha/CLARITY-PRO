import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState ,useContext} from "react";
import { auth } from "../Firebase/firebase";

export const Authcontext = createContext()

export const AuthcontextProvider = ({children})=>{
    const [currentuser,setcurrentuser] = useState({})
    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth,(user)=>{
            setcurrentuser(user)
            console.log(user);
            
        })
        return () =>{
            unsub()
        }
    },[]);

    




    const value = {
        currentuser
    }



    
    return (
    <Authcontext.Provider value={value}>
        {children}
    </Authcontext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(Authcontext);
}