import React, { useState, useEffect, useRef } from 'react';
import { ServicesCard } from './ServicesCard'; // Import your card component
import { servicesList } from './ServicesData'; // Import your data
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [flippedStates, setFlippedStates] = useState({}); // Object to track unique flipped states
  const servicesContainerRef = useRef(null); // Reference to the container

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Laptop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect click outside of the cards and reset flip states
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesContainerRef.current && !servicesContainerRef.current.contains(event.target)) {
        setFlippedStates({}); // Reset flip states when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Reset flip states on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setFlippedStates({}); // Reset flip states when scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const totalSlides = Math.ceil(servicesList.length / itemsPerPage);

  const handlePrev = () => {
    setFlippedStates({}); // Reset flip states on previous button click
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setFlippedStates({}); // Reset flip states on next button click
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalSlides - 1)
    );
  };

  const handleDotClick = (index) => {
    setFlippedStates({}); // Reset flip states on dot click
    setCurrentIndex(index);
  };

  const handleFlip = (index) => {
    setFlippedStates((prevStates) => {
      const newState = {};

      // Reset flip state for all cards
      Object.keys(prevStates).forEach((key) => {
        newState[key] = false;
      });

      // Toggle the flip state for the clicked card
      newState[index] = !prevStates[index];

      return newState;
    });
  };

  const getVisibleServices = () => {
    const startIndex = currentIndex * itemsPerPage;
    let visibleServices = servicesList.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    // If fewer than `itemsPerPage` remain, include cards from earlier
    if (visibleServices.length < itemsPerPage) {
      const remainingItems = itemsPerPage - visibleServices.length;
      visibleServices = servicesList.slice(
        Math.max(startIndex - remainingItems, 0),
        startIndex + itemsPerPage
      );
    }

    return visibleServices;
  };

  return (
    <div className="services-section">
      <h1 className="service-heading">Services</h1>
      <div className="services-container" ref={servicesContainerRef}>
        <div className="services-cards-wrapper">
          {getVisibleServices().map((service, index) => {
            const actualIndex = servicesList.indexOf(service); // Get the actual index of the service in the original list
            return (
              <ServicesCard
                key={actualIndex}
                service={service}
                isFlipped={!!flippedStates[actualIndex]} // Get flip state for the specific card
                onFlip={() => handleFlip(actualIndex)} // Update flip state for the specific card
              />
            );
          })}
        </div>

        {/* Navigation buttons and slider indicators */}
        <div className="slider-navigation">
          <button
            className="service-less-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <div className="slider-lines">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`line ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
          <button
            className="service-greater-btn"
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
