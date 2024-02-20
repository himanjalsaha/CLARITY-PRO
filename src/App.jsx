import { useState , useContext } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './screens/LandingPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Home from './screens/Home';
import { UserCredentials } from './screens/UserCredentials';
import { Authcontext } from './context/AuthContext';
function App() {
  const {currentuser} = useContext(Authcontext)
  console.log(currentuser);
  const ProtectedRoute = ({children}) =>{
    if(!currentuser){
      return <Navigate to="/signin"/>
    }
 
    return children
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element={<ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
          <Route path="/land" element={<LandingPage />} />
          <Route path="/signin" element={<UserCredentials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
