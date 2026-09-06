import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './home.css';

function Home() {
  return (
    
    <div className='home'>
       <Navbar />
    
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="home-overlay-container">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="/NAV8.jpg" alt="Gallery Banner" className="d-block w-100 home-img-overlay"/>
        <div className="overlay-text1">
          <h1>Explore India with us</h1>
          <p>TRIPS WITH US</p>
        </div>
      </div>

   
      <div className="carousel-item" data-bs-interval="2000">
        <img src="/NAV12.jpg" alt="Gallery Banner" className="d-block w-100 home-img-overlay"/>
        <div className="overlay-text1">
          <h1>Explore India with us</h1>
          <p>TRIPS WITH US</p>
        </div>
      </div>

      <div className="carousel-item" data-bs-interval="2000">
        <img src="/NAV11.jpg" alt="Gallery Banner" className="d-block w-100 home-img-overlay"/>
        <div className="overlay-text1">
          <h1>Explore India with us</h1>
          <p>TRIPS WITH US</p>
        </div>
      </div>

      
      <div className="carousel-item" data-bs-interval="2000">
        <img src="/NAV18.jpg" alt="Gallery Banner" className="d-block w-100 home-img-overlay"/>
        <div className="overlay-text1">
          <h1>Explore India with us</h1>
          <p>TRIPS WITH US</p>
        </div>
      </div>
     

    </div>
  </div>

  {/* Carousel Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <section className="popular-destinations py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Popular Destinations</h2>
              <div className="title-underline mx-auto mb-4"></div>
              <p className="lead">Discover India's most beloved travel destinations that offer unforgettable experiences</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="destination-card position-relative rounded-3 overflow-hidden shadow">
                <img src="/Hawa-Mahal.jpg" className="img-fluid destination-img" alt="Rajasthan" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Rajasthan</h3>
                  <p className="text-white mb-3">Experience the royal heritage and desert landscapes</p>
                  <a href="./Gallery" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="destination-card position-relative rounded-3 overflow-hidden shadow">
                <img src="/GOA.jpg" className="img-fluid destination-img" alt="Goa" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Goa</h3>
                  <p className="text-white mb-3">Relax on beautiful beaches and enjoy vibrant nightlife</p>
                  <a href="./Gallery" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="destination-card position-relative rounded-3 overflow-hidden shadow">
                <img src="/KASHMIR.jpg" className="img-fluid destination-img" alt="Varanasi" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Varanasi</h3>
                  <p className="text-white mb-3">Discover spiritual heritage on the banks of Ganga</p>
                  <a href="./Gallery" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="special-offers py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Special Offers</h2>
              <div className="title-underline mx-auto mb-4"></div>
              <p className="lead">Take advantage of our limited-time deals on dream vacations</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="offer-card p-4 bg-white rounded-3 shadow-sm">
                <div className="row">
                  <div className="col-md-5 mb-3 mb-md-0">
                    <img src="/SHIMLA 2.jpg" className="img-fluid rounded-3" alt="Shimla-Manali Tour" />
                  </div>
                  <div className="col-md-7">
                    <div className="offer-badge mb-2">20% OFF</div>
                    <h4 className="fw-bold mb-2">Shimla-Manali Package</h4>
                    <p className="mb-3">7 days of adventure in the stunning Himalayas with luxury accommodations</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="price">
                        <span className="text-muted text-decoration-line-through me-2">₹32,999</span>
                        <span className="fw-bold text-primary fs-5">₹26,399</span>
                      </div>
                      {/* <a href="#" className="btn btn-primary">Book Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="offer-card p-4 bg-white rounded-3 shadow-sm">
                <div className="row">
                  <div className="col-md-5 mb-3 mb-md-0">
                    <img src="/NICOBAR.jpg" className="img-fluid rounded-3" alt="Andaman Tour" />
                  </div>
                  <div className="col-md-7">
                    <div className="offer-badge mb-2">15% OFF</div>
                    <h4 className="fw-bold mb-2">Andaman Island Escape</h4>
                    <p className="mb-3">5 days of beach paradise with water activities and seafood delights</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="price">
                        <span className="text-muted text-decoration-line-through me-2">₹28,499</span>
                        <span className="fw-bold text-primary fs-5">₹24,224</span>
                      </div>
                      {/* <a href="#" className="btn btn-primary">Book Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Travel Experience Section */}
      <section className="travel-experience py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Experience the Best of India</h2>
              <p className="lead mb-4">
                Our expertly curated travel experiences showcase the diversity and richness of Indian culture, landscapes, and cuisine.
              </p>
              <ul className="features-list">
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Personalized itineraries tailored to your interests
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Comfortable accommodations at the best locations
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Knowledgeable local guides who bring destinations to life
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Seamless transportation arrangements throughout your journey
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  24/7 support for a stress-free travel experience
                </li>
              </ul>
              <a href="./Package" className="btn btn-primary btn-lg mt-4">Plan Your Trip</a>
            </div>
            <div className="col-lg-6">
              <div className="image-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/r2.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
                  </div>
                  <div className="col-6">
                    <img src="/r7.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
                  </div>
                  <div className="col-12 mt-3">
                    <img src="/r9.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="testimonials py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">What Our Travelers Say</h2>
              <div className="title-underline mx-auto mb-4"></div>
              <p className="lead">Hear from those who have experienced our services firsthand</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="testimonial-rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="testimonial-text fst-italic mb-4">
                  "Our family trip to Rajasthan was absolutely incredible! The team took care of every detail, and our guide was exceptional. The heritage hotels were a highlight!"
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-avatar me-3">
                    <span className="fw-bold">RK</span>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Rahul Kumar</h5>
                    <p className="text-muted mb-0">Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="testimonial-rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="testimonial-text fst-italic mb-4">
                  "The Kerala backwater cruise was a dream come true. So peaceful and beautiful! The houseboat experience and the food were outstanding. Highly recommend!"
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-avatar me-3">
                    <span className="fw-bold">SP</span>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Shalini Patel</h5>
                    <p className="text-muted mb-0">Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="testimonial-rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-half text-warning"></i>
                </div>
                <p className="testimonial-text fst-italic mb-4">
                  "The Northeast tour was an adventure of a lifetime! Remote locations, but the team made everything comfortable. The monasteries and mountain views were breathtaking."
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-avatar me-3">
                    <span className="fw-bold">AC</span>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Amit Choudhury</h5>
                    <p className="text-muted mb-0">Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      <Footer />
    </div>
  );
};

export default Home;
