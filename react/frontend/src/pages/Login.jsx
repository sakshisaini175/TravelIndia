
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Auth.Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromRegister && location.state.success) {
      setToast({
        show: true,
        message: 'Registration successful! You can now log in.',
        type: 'success',
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data)
  
      if (!data.success) {
        setError(data.message || 'Login failed');
        setToast({ show: true, message: data.message || 'Login failed', type: 'danger' });
      } else {
        setToast({ show: true, message: 'Login successful! Redirecting...', type: 'success' });
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id); // Save user ID for bookings page
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  const redirectToRegister = () => navigate('/register');

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-3">Login to Your Account</h3>
              <p className="text-center text-muted mb-4">Welcome back! Please enter your details</p>

              {toast.show && (
                <div className={`alert alert-${toast.type}`} role="alert">
                  {toast.message}
                </div>
              )}

              <div className="alert alert-info text-center">
                New user?{' '}
                <button onClick={redirectToRegister} className="btn btn-link p-0">
                  Register Now
                </button>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <div className="text-center mt-4">
                <p>
                  Don’t have an account?{' '}
                  <button className="btn btn-link p-0" onClick={redirectToRegister}>
                    Register
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
