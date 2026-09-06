import React, { useEffect, useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyBooking() {
  const [bookings, setBookings] = useState([]);

  // Fetch booking data from server
  const fetchBooking = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/booking/alls");
      const data = await response.json();

      if (Array.isArray(data.bookings)) {
        setBookings(data.bookings);
      } else {
        toast.error("No bookings found!");
      }
    } catch (error) {
      toast.error("Fetch error: " + error.message);
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date) ? dateStr : date.toLocaleDateString();
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '40px' , paddingTop:'90px'}}>
          <h2 className="mb-4">All Bookings</h2>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings && bookings.length > 0 ? (
                bookings
                  .filter(booking => booking.guests > 0)
                  .map((booking, index) => (
                    <tr key={booking._id}>
                      <td>{index + 1}</td>
                      <td>{booking.name}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>{formatDate(booking.date)}</td>
                      <td>{booking.time}</td>
                      <td>{booking.guests}</td>
                      <td>
                        <Badge bg={booking.status === 'complete' ? 'success' : 'warning'}>
                          {booking.status ? booking.status : 'Confirm'}
                        </Badge>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </>
  );
}

export default MyBooking;
