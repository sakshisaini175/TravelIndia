import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaBoxOpen,
  FaShoppingCart,
  FaArrowCircleLeft,
  FaObjectGroup,
} from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  return (
    <div
      style={{
        height: '100vh',
        minWidth: '256px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', // Gradient bg
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
      }}
    >
      <nav style={{ flex: 1 }}>
        <SidebarLink
          to="/dashboard"
          icon={<FaTachometerAlt size={20} />}
          label="Dashboard"
          isActive={location.pathname === '/dashboard'}
        />
        <SidebarLink
          to="/dashboard/Bookings"
          icon={<FaCalendarCheck size={20} />}
          label="Manage Booking"
          isActive={location.pathname === '/dashboard/Bookings'}
        />
        <SidebarLink
          to="/dashboard/product"
          icon={<FaBoxOpen size={20} />}
          label="Packages"
          isActive={location.pathname === '/dashboard/product'}
        />
        <SidebarLink
          to="/dashboard/add-product"
          icon={<FaShoppingCart size={20} />}
          label="Add Packages"
          isActive={location.pathname === '/dashboard/add'}
        />
        <SidebarLink
          to="/dashboard/MyBooking"
          icon={<FaObjectGroup size={20} />}
          label="Booking"
          isActive={location.pathname === '/dashboard/MyBooking'}
        />
        <SidebarLink
          to="/"  
          icon={<FaArrowCircleLeft size={20} />}
          label="GO BACK"
        />
      </nav>
    </div>
  );
}

function SidebarLink({ to, icon, label, isActive }) {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    textDecoration: 'none',
    color: isActive ? '#ffcc00' : 'white', // Active link color
    backgroundColor: isActive ? '#2a5298' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
  };

  return (
    <Link to={to} style={linkStyle}>
      <span>{icon}</span>
      <span style={{ fontSize: '16px' }}>{label}</span>
    </Link>
  );
}

export default Sidebar;