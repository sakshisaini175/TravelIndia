import React, { useEffect, useState } from 'react';
import './MyBookings.css';
import Navbar from '../components/Navbar'

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const id = localStorage.getItem('userId');
      if(!id){
        setLoading(false)
        return;
      }
      try {
        const response = await fetch(`http://localhost:3000/api/booking/${id}`);
        const data = await response.json();
        console.log('Booking data :',data)
        setBookings(data.bookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="loading">Loading your bookings...</div>;

  return (
    <>
      <Navbar />

      <div className="my-bookings">
        <h2>Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div key={booking._id} className="booking-card">
                <h3>{booking.productName || 'N/A'}</h3>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                {booking.time && <p><strong>Time:</strong> {booking.time}</p>}
                <p><strong>Guests:</strong> {booking.guests}</p>
                {/* <p><strong>Status:</strong> <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyBookings;
