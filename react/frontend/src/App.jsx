import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Package from './pages/Package';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashbord from './Admin/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReservationForm from './pages/popup';
import Booking from './Admin/Bookings';
import Product from './Admin/Product';
import AdminLogin from './Admin/AdminLogin';
import MyBooking from './pages/MyBookings';

function App() {
  return (
    <>
    
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashbord/>} /> 
        <Route path="/about" element={<About />} />
        <Route path="/mybooking" element={<MyBooking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/package" element={<Package />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Adminlogin" element={<AdminLogin />} /> 
        <Route path="/dashboard/booking" element={<Booking />} />
        <Route path="/dashboard/product" element={<Product />} /> 
        <Route path="/admin" element={<AdminLogin />} /> 
      </Routes> 
    </>  
  );
}
export default App;
