import React, { useEffect, useState } from 'react';
import './Slideshow.css';

const images = [
  '/boxing1.jpg',
  '/boxing2.jpg',
  '/boxing3.jpg'
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Slideshow;
