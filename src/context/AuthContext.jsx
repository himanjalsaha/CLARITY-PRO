import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
    return (
    <Authcontext.Provider value={{currentuser }}>
        {children}
    </Authcontext.Provider>
    )
}