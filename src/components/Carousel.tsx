// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const images = ['./image1.jpg', './image2.jpg', './image3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <img src={images[currentIndex]} alt="Carousel" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Carousel;
