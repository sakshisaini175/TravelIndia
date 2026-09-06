import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Package() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  // Fetch products from server
  const fetchDataFromServer = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();

      if (data.success === true) {
        setProducts(data.data);
      } else {
        toast.error("Failed to fetch products!");
      }
    } catch (error) {
      toast.error("Fetch error: " + error.message);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  // Open modal
  const handleBookNow = (product) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(!isLoggedIn){
      toast.warn('You need to login first');
      setTimeout(()=>{
        navigate('/login')

      },1000)
      return;
    }

    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close modal and reset form
  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
    });
  };
  // Form input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    const bookingData = {
      ...formData,
      productId: selectedProduct?._id,
      productName: selectedProduct?.name,
    };
    const id = localStorage.getItem('userId')

    try {
      const response = await fetch(`http://localhost:3000/api/booking/create/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  console.log("data crete", response)
      const result = await response.json();

      if (response.ok) {
        toast.success("Booking created successfully!");
        handleModalClose();
      } else {
        toast.error(result.message || "Failed to create booking");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    
    <div>
      <Navbar />
          
{/* Category Filter Buttons */}
<div className="row g-4 px-3" style={{padding:'50px'}}>
  {products
    .filter(product => selectedCategory === "All" || product.category === selectedCategory)
    .map((product, index) => (
      <div key={index} className="col-md-3 d-flex">
        <div className="card shadow-sm w-100 d-flex flex-column">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{product.name}</h5>
              <p
                className="card-text"
                style={{
                  fontSize: '14px',
                  color: '#555',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  minHeight: '60px',
  
                }}
                title={product.description} >
                {product.description}
              </p>
              <p className='fs-6'>Category : <span className='fw-bold'>{product.category}</span></p>
            </div>
            <div>
              <h6 className="text-success">₹{product.price}</h6>
              <button className="btn btn-primary w-100 mt-2" onClick={() => handleBookNow(product)}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>
      {/* Booking Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
  <Form.Label>Phone</Form.Label>
  <Form.Control type="text" name="phone" value={formData.phone} maxLength="10" required onChange={(e) => {
      const value = e.target.value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, phone: value }));
  }}/>      </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" required value={formData.date} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formTime" className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" required value={formData.time} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formGuests" className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control type="number" name="guests" required value={formData.guests} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Confirm Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick />
      
      <Footer/>
      </div>
  
  );
}

export default Package;
