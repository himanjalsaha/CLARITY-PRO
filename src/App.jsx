import { useState } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './screens/LandingPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Tasks from './screens/Tasks';
function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/tasks" element={<Tasks/>}/>

        <Route path="/land" element={<LandingPage />}>
        
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
