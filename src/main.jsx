import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router.jsx'
import AuthProvider from './Pages/AuthProvider/AuthProvider.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos'; 

// Initialize AOS
AOS.init();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
