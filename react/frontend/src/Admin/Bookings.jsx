import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaCalendarAlt, FaEdit, FaSave } from 'react-icons/fa';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  const styles = {
    page: {
      width: '80vw',
      margin: '0 auto',
      padding: '30px',
      paddingTop:'90px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f6f9',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: '30px',
      marginBottom: '20px',
      color: '#222',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    gridContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'flex-start',
    },
    bookingCard: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '280px',
      minHeight: '320px',
    },
    cardText: {
      lineHeight: '1.6',
      color: '#444',
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: 'auto',
    },
    deleteBtn: {
      backgroundColor: '#ff4d4d',
      border: 'none',
      padding: '10px',
      color: '#fff',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flex: 1,
      justifyContent: 'center',
    },
    editBtn: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '10px',
      color: '#fff',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flex: 1,
      justifyContent: 'center',
    },
    deleteAllBtn: {
      backgroundColor: '#dc3545',
      border: 'none',
      padding: '12px 20px',
      color: '#fff',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '30px',
      fontWeight: 'bold',
    },
  };

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/booking/alls');
      console.log('Response : ',res)
      setBookings(res.data.bookings);
    } catch (err) {
      console.error("Error fetching bookings:", err.message);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/booking/${id}`);
      fetchBookings();
    } catch (err) {
      console.error("Error deleting booking:", err.message);
    }
  };

  const deleteAllBookings = async () => {
    try {
      await axios.delete('http://localhost:3000/api/booking/all');
      setBookings([]);
    } catch (err) {
      console.error("Error deleting all bookings:", err.message);
    }
  };

  const startEditing = (booking) => {
    setEditingId(booking._id);
    setEditedBooking({ ...booking });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedBooking({});
  };

  const handleInputChange = (e) => {
    setEditedBooking({ ...editedBooking, [e.target.name]: e.target.value });
  };

  const saveEditedBooking = async () => {
    if (!editingId) return;

    try {
      console.log("Saving booking:", editedBooking);
      await axios.put(`http://localhost:3000/api/booking/${editingId}`, editedBooking);
      fetchBookings();
      setEditingId(null);
      setEditedBooking({});
    } catch (err) {
      console.error("Error updating booking:", err.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}><FaCalendarAlt /> My Bookings</h2>

      {bookings.length > 0 && (
        <button style={styles.deleteAllBtn} onClick={deleteAllBookings}>
          Delete All Bookings
        </button>
      )}

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div style={styles.gridContainer}>
          {bookings.map((booking) => (
            <div key={booking._id} style={styles.bookingCard}>
              {editingId === booking._id ? (
                <div style={styles.cardText}>
                  <input style={styles.input} name="name" value={editedBooking.name} onChange={handleInputChange} />
                  <input style={styles.input} name="email" value={editedBooking.email} onChange={handleInputChange} />
                  <input style={styles.input} name="phone" value={editedBooking.phone} onChange={handleInputChange} />
                  <input style={styles.input} name="date" value={editedBooking.date} onChange={handleInputChange} />
                  <input style={styles.input} name="time" value={editedBooking.time} onChange={handleInputChange} />
                  <input style={styles.input} name="guests" value={editedBooking.guests} onChange={handleInputChange} />
                </div>
              ) : (
                <div style={styles.cardText}>
                  <div><strong>Name:</strong> {booking.name}</div>
                  <div><strong>Email:</strong> {booking.email}</div>
                  <div><strong>Phone:</strong> {booking.phone}</div>
                  <div><strong>Date:</strong> {booking.date}</div>
                  <div><strong>Time:</strong> {booking.time}</div>
                  <div><strong>Guests:</strong> {booking.guests}</div>
                </div>
              )}

              <div style={styles.buttonGroup}>
                {editingId === booking._id ? (
                  <>
                    <button style={styles.editBtn} onClick={saveEditedBooking}>
                      <FaSave /> Save
                    </button>
                    <button style={styles.deleteBtn} onClick={cancelEditing}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button style={styles.editBtn} onClick={() => startEditing(booking)}>
                      <FaEdit /> Edit
                    </button>
                    <button style={styles.deleteBtn} onClick={() => deleteBooking(booking._id)}>
                      <FaTrash /> Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;
