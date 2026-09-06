
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    alert("logout successfully");
    navigate("/");
  };

  return (
    <div
      style={{
        position: 'fixed',          // 💥 FIXED NAVBAR
        top: 0,                     // 📌 Stick to top
        width: '100%',
        height: '64px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        zIndex: 1000,              // Ensure it's on top of sidebar/content
      }}
    >
      <div style={{ fontSize: '25px', fontWeight: '600', fontFamily: 'Merriweather' }}>ADMIN</div>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#111')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
