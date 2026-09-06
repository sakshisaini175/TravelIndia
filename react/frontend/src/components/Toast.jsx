import React, { useEffect, useState } from 'react';
// import '../pages/toast.css'; // Import custom CSS

function Toast({ message, type = 'info', onClose, autoClose = true, duration = 5000, position = 'top-right' }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show toast with animation
    setTimeout(() => setIsVisible(true), 100);
    
    let timer;
    if (autoClose) {
      timer = setTimeout(() => {
        // Start exit animation
        setIsVisible(false);
        // Wait for animation to complete before removing
        setTimeout(() => {
          onClose();
        }, 300);
      }, duration);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoClose, duration, onClose]);

  // Get toast class based on type
  const getToastClass = () => {
    switch (type) {
      case 'success':
        return 'toast-success';
      case 'error':
        return 'toast-error';
      case 'warning':
        return 'toast-warning';
      case 'info':
      default:
        return 'toast-info';
    }
  };

  // Get toast icon based on type
  const getToastIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      case 'error':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case 'info':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  };

  return (
    <div className={`toast-container ${position} ${isVisible ? 'visible' : ''}`}>
      <div className={`toast ${getToastClass()}`}>
        <div className="toast-content">
          <div className="toast-icon">
            {getToastIcon()}
          </div>
          <div className="toast-message">
            {message}
          </div>
          <button className="toast-close" onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="toast-progress">
          <div className="toast-progress-bar" style={{ animationDuration: `${duration}ms` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Toast;