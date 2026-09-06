import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userId')
    alert("logout sucessfully")
    window.location.href= "/"


  }
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return (
    <>

      <nav
        className="navbar navbar-expand-lg"
        style={{
          fontFamily: 'Merriweather',
          zIndex: 1030,
          position: 'fixed',
          top: 0,
          width: '100%',
        }}
      >

        <div className="container-fluid">
          <a className="navbar-brand fs-2 text-white" href="#">
            TRAVEL INDIA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-1">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active text-white">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link active text-white">
                  GALLERY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/package"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  PACKAGES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mybooking"
                  className="nav-link active text-white"
                  aria-current="page"
                >
               BOOKINGS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Adminlogin"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Adminlogin
                </Link>
              </li>

            </ul>

            {
              isLoggedIn ? (<button onClick={handleLogout}
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
                onMouseOut={(e) => (e.target.style.backgroundColor = 'black')} >
                Logout
              </button>) : (
                <Link to="/login" className="btn btn-primary" aria-current="page">
                  Login
                </Link>
              )
            }



          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
