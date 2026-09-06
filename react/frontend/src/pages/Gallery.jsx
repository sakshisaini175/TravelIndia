import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function GalleryCard({ title, images }) {
  return (
    <div className="col">
      <div className="card shadow-sm border-0">
        <div className="carousel-rtl-wrapper">
          <Carousel
            interval={1000}
            fade={false}
            controls={false}
            indicators={false}
            slide={true}
          >
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`${title} slide ${index + 1}`}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px'
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="card-body text-center" style={{ backgroundColor: '#f4f4f4' }}>
          <h5 className="card-title" style={{ fontFamily: 'Merriweather' }}>{title}</h5>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <>
      <Navbar/>

      {/* Hero Section */}
       <div className="image-overlay-container" style={{ position: 'relative',height:'54vh' }}>
        <img
          src="/tr12.jpg"
          alt="Gallery Banner"
          className="gallery-img-overlay"
          style={{ width: '100%', height: '350px', objectFit: 'cover',objectPosition:'top' }}
        />
        <div className="overlay-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <h1 style={{ fontSize: '3rem' }}>GALLERY</h1>
          <p>TRIPS WITH US</p>
        </div>
      </div>

       <div style={{ backgroundColor: 'rgb(244, 244, 244)', padding: '50px 20px', marginTop:'0px'}}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <GalleryCard title="HILL STATION" images={["/SHIMLA 2.jpg", "/SHIMLA.jpg","DAR.jpg","t.jpg"]} />
            <GalleryCard title="PILGRIMAGE" images={["/panchkula.jpg", "/NAV17.jpg", "/K.jpg","r13.jpg"]} />
            <GalleryCard title="BEACHES" images={["/GOA.jpg", "/C5.jpg", "/nav4.jpg","about5.jpg"]} />
            <GalleryCard title="HERITAGE & CULTURAL" images={["/agra.jpg", "/AMRITSAR.jpg", "/jaipurr.jpg","NAV11.jpg"]} />
            <GalleryCard title="ADVENTURE" images={["/rishik.jpg", "/e.jpg", "/r15.jpg","b.jpg"]} />
            <GalleryCard title="GROUP" images={["/r2.jpg", "/r5.jpg", "/r6.jpg","r7.jpg","LD2.jpg"]} />
           
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gallery; 
