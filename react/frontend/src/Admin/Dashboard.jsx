import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AdminLogin from '../Admin/AdminLogin';
import DashbordPage from '../Admin/DashbordPage';
import CreateProduct from '../Admin/CreateProduct';
import Bookings from '../Admin/Bookings'; 
import MyBooking from  '../Admin/MyBooking';
import Product from '../Admin/Product';


function Dashbord() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Sidebar with fixed width and full height */}
        <div style={{ width: '256px', position: 'fixed', top: '64px', left: 0, height: '100vh', zIndex: 999 }}>
          <Sidebar />
        </div>

        {/* Main Content with padding top (for navbar) and margin left (for sidebar) */}
        <main
          style={{
            flex: 1,
            paddingTop: '64px',
            marginLeft: '256px',
            minHeight: '100vh',
            backgroundColor: '#f4f4f4',
            padding: '24px',
          }}
        >
          <Routes>
            <Route path='/admin' element={<AdminLogin />} />
            <Route index element={<DashbordPage />} />
            <Route path='/add-product' element={<CreateProduct />} />
            <Route path='/Bookings' element={<Bookings />} />
            <Route path='/MyBooking' element={<MyBooking />} />
            <Route path='/Product' element={<Product />} />
          </Routes>
        </main>
      </div>
    </>
  );
}


export default Dashbord;
