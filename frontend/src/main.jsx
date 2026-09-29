import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Screen/home_Screen'
import Login from './Screen/Auth/login'
import Signup from './Screen/Auth/signup'
import ProtectedRoute from './ProtectedRoute';
import UserForm from './Screen/Form/user_Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
       <ProtectedRoute>
       <Home/> 
       </ProtectedRoute>}/>
      <Route path='/Form/:id' element={<UserForm/>}/>
      <Route path='/Form' element={<UserForm/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
