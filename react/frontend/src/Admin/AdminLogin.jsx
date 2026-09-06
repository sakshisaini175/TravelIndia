import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css'; // Link to your CSS file

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", formData);
      const { success, token, message } = response.data;

      if (success) {
        localStorage.setItem("token", token);
        toast.success("Login successful");
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error(message || "Login failed");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Server error";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter admin email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminLogin;
