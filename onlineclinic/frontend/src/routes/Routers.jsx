import React from 'react'
import Home from '../assets/pages/Home';
import Login from '../assets/pages/Login';
import SignUp from "../assets/pages/SignUp"
import Contact from '../assets/pages/Contact';
import Doctors from "../assets/pages/Doctors"
import DoctorDetails from '../assets/pages/DoctorDetails';
import {Routes , Route} from 'react-router-dom'
import Services from '../assets/pages/Services';
import Maccount from '../dashboard/user-account/Maccount';
import Dashboard from '../dashboard/doctor-account/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/services" element={<Services />} />

    <Route path="/users/profile/me" element={<ProtectedRoutes allowedRoles={['patient']}><Maccount /></ProtectedRoutes>} />
    <Route path="/doctors/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']}><Dashboard /></ProtectedRoutes>} />
  </Routes>
  )
}

export default Routers