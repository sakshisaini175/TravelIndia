import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './home.css';
function Home() {
  // useEffect(() => {
  //   // Initialize carousel with auto-play and improved timing
  //   if (typeof window !== 'undefined' && window.bootstrap) {
  //     const carouselElement = document.querySelector('#heroCarousel');
  //     const carousel = new window.bootstrap.Carousel(carouselElement, {
  //       interval: 5000,
  //       pause: 'hover'
  //     });
  //   }
  // }, []);

  return (
    <div className="home-wrapper">
      <Navbar />
      
      {/* Hero Carousel with Overlay Text */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay-dark"></div>
            <img src="/tr9.jpg" className="d-block w-100 carousel-image" alt="Arunachal Pradesh" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Explore Arunachal Pradesh</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Discover the untouched beauty of India's northeastern paradise</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/himachal.jpg" className="d-block w-100 carousel-image" alt="Himachal" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Majestic Himachal</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Experience the breathtaking landscapes of the Himalayan wonderland</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/kashmi.webp" className="d-block w-100 carousel-image" alt="Kashmir" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Enchanting Kashmir</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Visit the paradise on Earth with its stunning valleys and lakes</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/kerala-holiday-banner.webp" className="d-block w-100 carousel-image" alt="Kerala" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Serene Kerala</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Relax in the backwaters of God's Own Country</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/ooty.jpg" className="d-block w-100 carousel-image" alt="Ooty" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Charming Ooty</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Experience the queen of hill stations in Tamil Nadu</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/Best-Place-to-Visit-in-Punjab.jpg" className="d-block w-100 carousel-image" alt="Punjab" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Vibrant Punjab</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Discover the rich culture and heritage of the land of five rivers</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="overlay-dark"></div>
            <img src="/DAR.jpg" className="d-block w-100 carousel-image" alt="Darjeeling" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-3 fw-bold text-white mb-4 animated fadeInDown">Peaceful Darjeeling</h1>
              <p className="lead fs-4 mb-4 animated fadeInUp">Enjoy the scenic beauty of tea gardens and mountain vistas</p>
              <div className="mt-3 animated fadeInUp delay-1">
                <button className="btn btn-primary btn-lg px-5 py-3 me-3">Explore Tours</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Popular Destinations Section */}
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
                <img src="/rajasthan.jpg" className="img-fluid destination-img" alt="Rajasthan" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Rajasthan</h3>
                  <p className="text-white mb-3">Experience the royal heritage and desert landscapes</p>
                  <a href="#" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="destination-card position-relative rounded-3 overflow-hidden shadow">
                <img src="/goa.jpg" className="img-fluid destination-img" alt="Goa" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Goa</h3>
                  <p className="text-white mb-3">Relax on beautiful beaches and enjoy vibrant nightlife</p>
                  <a href="#" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="destination-card position-relative rounded-3 overflow-hidden shadow">
                <img src="/varanasi.jpg" className="img-fluid destination-img" alt="Varanasi" />
                <div className="destination-overlay"></div>
                <div className="destination-content p-4">
                  <h3 className="text-white mb-2">Varanasi</h3>
                  <p className="text-white mb-3">Discover spiritual heritage on the banks of Ganga</p>
                  <a href="#" className="btn btn-sm btn-light">Explore <i className="bi bi-arrow-right ms-2"></i></a>
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
                    <img src="/shimla.jpg" className="img-fluid rounded-3" alt="Shimla-Manali Tour" />
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
                      <a href="#" className="btn btn-primary">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="offer-card p-4 bg-white rounded-3 shadow-sm">
                <div className="row">
                  <div className="col-md-5 mb-3 mb-md-0">
                    <img src="/andaman.jpg" className="img-fluid rounded-3" alt="Andaman Tour" />
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
                      <a href="#" className="btn btn-primary">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a href="#" className="btn btn-outline-primary btn-lg px-5">View All Offers</a>
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
              <a href="#" className="btn btn-primary btn-lg mt-4">Plan Your Trip</a>
            </div>
            <div className="col-lg-6">
              <div className="image-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/experience1.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
                  </div>
                  <div className="col-6">
                    <img src="/experience2.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
                  </div>
                  <div className="col-12 mt-3">
                    <img src="/experience3.jpg" className="img-fluid rounded-3 shadow" alt="Travel Experience" />
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
}



export default Home;