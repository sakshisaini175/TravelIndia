import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    // Initialize Bootstrap carousel if you're using Bootstrap JS
    if (typeof window !== 'undefined' && window.bootstrap) {
      const carouselElement = document.querySelector('#reviewCarousel');
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 1000,
        wrap: true
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="about-image-overlay-container position-relative">
        <img src="/public/about5.jpg" alt="About Us" className="about-img-overlay w-100" />
        <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold">ABOUT US</h1>
          <p className="lead">We are your trusted partner for unforgettable journeys across India.</p>
        </div>
      </div>
      
      {/* Core Values Cards */}
      <div className="container py-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm bg-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">OUR VISION</h5>
                <p className="card-text">
                  Tourism which is ethical, fair and a positive experience for both travellers and the people, and places they visit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm bg-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">OUR MISSION</h5>
                <p className="card-text">
                  Tourism which is ethical, fair and a positive experience for both travellers and the people, and places they visit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm bg-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">SAFETY INFORMATION</h5>
                <p className="card-text">
                  Vacation is a time to relax in safe surroundings. For emergency aid of any kind, call 911 from any phone... in your hotel, dial 9-911.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Services Section */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold"><u>OUR SERVICES</u></h2>
          <p className="text-center mb-5">
            We are providing services throughout India. If you are looking for any kind of travel related services throughout India feel free to email us. 
            We don't claim our packages or services as cheapest because quality services will never be cheap anywhere. 
            However, the prices will still be good compared to the quality of services due to our strong network. 
            We are not selling readymade packages because we want to create customized tours for each guest so we can personally 
            look after every small detail in that tour.
          </p>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 bg-light">
                <div className="card-body">
                  <h4 className="card-title">For our Customers</h4>
                  <p className="card-text">
                    We arrange all travel-related requirements in India like complete tour packages, hotel / camp / resort / home stay and other 
                    type of accommodation bookings, taxi / car booking, train and flight bookings. We provide all kind of tours like pilgrimage tours, 
                    adventure tours, leisure tours, honeymoon tours, trekking tours, cultural tours, yoga and meditation tours, wildlife tours &amp; village tours. 
                    We also arrange chartered helicopter services in pilgrimage places in selected destinations like Uttarakhand. 
                    Apart from that we can also arrange customized tours according to guest requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card h-100 bg-light">
                <div className="card-body">
                  <h4 className="card-title">For Travel Agents</h4>
                  <p className="card-text">
                    We are a B2B service provider in North India for all travel related requirements. We are also well known ground 
                    handling agent in Uttarakhand for tour packages, guided tours and car / taxi, chardham as well as all other travel 
                    related management of your clients in Uttarakhand.
                  </p>
                  <h4 className="card-title mt-4">For Hotels</h4>
                  <p className="card-text">
                    We provide marketing and sales support to selected hotels in each destination. Kindly get in touch with us for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Reviews Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold"><u>CLIENT REVIEWS</u></h2>
          
          <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="position-relative">
                      <img src="/public/about5.jpg" alt="Scenic view" className="img-fluid rounded-3" style={{ height: '60vh', width: '100%', objectFit: 'cover' }} />
                      <div className="row position-absolute bottom-0 w-100 mb-4 px-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <div className="card bg-beige shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">DEEPAK KUMAR</h5>
                              <p className="card-text">I had booked for a 3-day tour of Haridwar and Rishikesh from Delhi for my parents. The hotel they provided in Haridwar was excellent. Overall, they had an awesome experience. I would highly recommend this travel company.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-light-pink shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">SUMAN SHARMA</h5>
                              <p className="card-text">One of the best trip experiences I had. Everything was perfectly managed and all the arrangements were up to the mark. Team had great knowledge about the tourist places and their recommendations were also excellent.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="position-relative">
                      <img src="/public/about4.jpg" alt="Scenic view" className="img-fluid rounded-3" style={{ height: '60vh', width: '100%', objectFit: 'cover' }} />
                      <div className="row position-absolute bottom-0 w-100 mb-4 px-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <div className="card bg-beige shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">AJAY SHARMA</h5>
                              <p className="card-text">Fantastic service and great attention to detail. The trip to Jaipur was unforgettable, and the accommodations were perfect for our family!</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-light-pink shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">NEHA VERMA</h5>
                              <p className="card-text">Very professional travel agency! They made sure every little detail was perfect. Our family trip to Kerala was relaxing and memorable!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="position-relative">
                      <img src="/public/about3.jpg" alt="Scenic view" className="img-fluid rounded-3" style={{ height: '60vh', width: '100%', objectFit: 'cover' }} />
                      <div className="row position-absolute bottom-0 w-100 mb-4 px-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <div className="card bg-beige shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">SUJJAN</h5>
                              <p className="card-text">We very much enjoyed the trip organized by the team. The vehicle provided was nice, and the driver was excellent with safe driving skills. The guide in Agra was very knowledgeable and made the experience memorable.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-light-pink shadow">
                            <div className="card-body text-center p-4">
                              <h5 className="card-title fw-bold">VIKAS KUMAR</h5>
                              <p className="card-text">Our trip to Manali and Shimla was a dream come true. The snow-capped mountains and adventure activities like paragliding were thrilling. The travel agency ensured everything went smoothly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default About;

