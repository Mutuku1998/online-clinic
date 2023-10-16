import React from 'react'
import Home from '../assets/pages/Home';
import Login from '../assets/pages/Login';
import SignUp from "../assets/pages/SignUp"
import Contact from '../assets/pages/Contact';
import Doctors from "../assets/pages/Doctors"
import DoctorDetails from '../assets/pages/DoctorDetails';
import {Routes , Route} from 'react-router-dom'
import Services from '../assets/pages/Services';
const Routers = () => {
  return (
    <Routes>
   <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorDetails/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
  )
}

export default Routers