import { useState } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './screens/LandingPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import { UserCredentials } from './screens/UserCredentials';

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
        <Route path="/land" element={<LandingPage />}/>
        <Route path="/signin" element={<UserCredentials />}/>


        
        
         
        
      </Routes>
    </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
