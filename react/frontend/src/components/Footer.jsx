import React from 'react'

function Footer() {
  return (
    <>
      <footer className=" text-light pt-4" style={{ backgroundColor: '#40089b', fontFamily: 'meeriweather' }}>
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4 mb-3">
              <h5>Explore India with Us!</h5>
              <p>Your trusted partner in unforgettable journeys.</p>
            </div>
            {/* Quick Links Section */}
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="./TRAVEL.HTML" className="text-light">Home</a></li>
                <li><a href="./Tabout.HTML" className="text-light">About</a></li>
                <li><a href="./tgallery.html" className="text-light">Gallery</a></li>
                <li><a href="./tpackage.html" className="text-light">Packages</a></li>
                <li><a href="./tcontact.html" className="text-light">Contact us</a></li>
              </ul>
            </div>
            {/* Contact Section */}
            <div className="col-md-4 mb-3">
              <h5>Get in Touch</h5>
              <p>📍 Address: Street No.3, Guru Teg Bahadur Nagar,Chandigarh </p>
              <p>📞 Phone: 8567056803</p>
              <p>✉️ Email: travelindia1138@gmail.com</p>
              <h6>Follow Us:</h6>
              <a href="https://www.facebook.com/" className="text-light me-2">Facebook</a>
              <a href="https://twitter.com/" className="text-light me-2">Twitter</a>
              <a href="https://www.instagram.com/" className="text-light">Instagram</a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row">
            <div className="col-md-12 text-center mt-4">
              <p>© 2025 TRAVEL INDIA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer