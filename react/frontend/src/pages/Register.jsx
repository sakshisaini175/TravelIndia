import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

     if(phone.length !== 10 || !/^\d{10}$/.test(phone))
     {
      alert('Enter a valid phone number');
      return;
     }
    if (!name || !phone || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name,email,phone, password }),
        });
    
        const data = await response.json();
        console.log('Sign up res: ',data)
    } catch (error) {
      console.log(error)
    }

    navigate('/login', { state: { fromRegister: true, success: true } });
  };

  return (
    <>
    <Navbar/>
    <div className="form-container py-5"
    style={{marginTop:'50px'}}>
  <h3 className="mb-4 text-center" >Register</h3>
  {error && <div className="alert alert-danger">{error}</div>}

  <div className="form-box mx-auto">
    <form onSubmit={handleRegister}>
   
    <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>

    </form>
  </div>
</div>
    <Footer/>
   </>
  );
}

export default Register;
