import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthcontextProvider } from './context/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthcontextProvider>
           <React.StrictMode>
    <App />
  </React.StrictMode>

    </AuthcontextProvider>
)
