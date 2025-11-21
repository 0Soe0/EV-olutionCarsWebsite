import './Carousel.css';
import { useState, useEffect } from 'react';

export const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Array.isArray(children) ? children : [children];
  const totalSlides = childrenArray.length;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  if (totalSlides === 0) return null;

  return (
    <div className='carousel'>
      <div className='carousel-container'>
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {child}
          </div>
        ))}
      </div>
      
      {totalSlides > 1 && (
        <>
          <button className='carousel-button carousel-button-prev' onClick={goToPrevious}>
            ‹
          </button>
          <button className='carousel-button carousel-button-next' onClick={goToNext}>
            ›
          </button>
          
          <div className='carousel-indicators'>
            {childrenArray.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}