import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
  FaUserFriends,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Manali', bookings: 25 },
  { name: 'Goa', bookings: 40 },
  { name: 'Jaipur', bookings: 30 },
  { name: 'Kashmir', bookings: 20 },
  { name: 'Shimla', bookings: 35 },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:5000/api/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          console.log("Dashboard Data:", data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchDashboardData();
  }, []);


  

  const styles = {
    wrapper: {
      width: '80vw',
      minHeight: '102vh',
      backgroundColor: '#e6f7ff',
      fontFamily: 'Poppins, Arial, sans-serif',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      paddingTop: '64px', // 👈 Fixes the hidden content under navbar
  
    
    },
    nav: {
      padding: '20px 30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',

    },
    header: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#0077b6',
      marginBottom: '20px',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      marginBottom: '40px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    cardTitle: {
      fontSize: '16px',
      color: '#444',
      marginBottom: '8px',
    },
    cardValue: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#00b4d8',
    },
    chartCard: {
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      width: '100%',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.nav}>
        <h1 style={styles.header}>🌍 Welcome Back, Travel Admin!</h1>
        <p style={{ color: '#555' }}>
          Here's an overview of your tour operations this week. </p>
      </div>
      <main style={{ padding: '30px' }}>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <p style={styles.cardTitle}><FaPlaneDeparture /> Total Bookings</p>
            <p style={styles.cardValue}>50</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}><FaMapMarkedAlt /> Popular Destination</p>
            <p style={styles.cardValue}>Shimla</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}><FaUserFriends /> New Users</p>
            <p style={styles.cardValue}>60</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}><FaSuitcaseRolling /> Active Packages</p>
            <p style={styles.cardValue}>25</p>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h4 style={{ marginBottom: '15px', color: '#0077b6' }}>
            📊 Destination-wise Bookings
          </h4>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bookings" fill="#00b4d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );

};


export default DashboardPage;
