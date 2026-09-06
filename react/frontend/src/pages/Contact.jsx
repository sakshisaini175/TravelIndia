import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ef7db4b-79f0-40c1-8ffb-a60b80d64bbf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setSubmitted(data.message);
    }
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    <Navbar/>

<div className="image-overlay-container">
    <img src="c2.jpg" alt="CONTACT US" className="about-img-overlay" />
    <div className="overlay-text">
      <h1>CONTACT US</h1>
    </div>
  </div>


    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
      <form onSubmit={onSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"

        />
        <textarea
          name="message"
          placeholder="Your Message *"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;
