import React, { useState } from "react";
import './img.css';

interface Image {
  src: string;
  alt?: string;
}

interface CarouselProps {
  images: Image[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[index];

  return (
    <div style={{ border: '2px solid black', width: '600px', height: '400px' }}>
      <div className="main">
        <img src={currentImage.src} alt={currentImage.alt || 'carousel image'} />
        <button onClick={handleNext} className="btn-left" aria-label="Next image">➡️</button>
        <button onClick={handlePrev} className="btn-right" aria-label="Previous image">⬅️</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
