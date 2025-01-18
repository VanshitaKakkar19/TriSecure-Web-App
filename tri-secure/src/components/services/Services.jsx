import React, { useState, useEffect } from 'react';
import { ServicesCard } from './ServicesCard';
import { servicesList } from './ServicesData';
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // For mobile
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2); // For tablets
      } else {
        setItemsPerPage(3); // For laptops
      }
    };

    handleResize(); // Set the initial items per page based on screen size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesList.length - itemsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= servicesList.length - itemsPerPage + 1 ? 0 : prevIndex + 1
    );
  };

  // Disable conditions
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + itemsPerPage >= servicesList.length;

  return (
  <>
  <h1 className='service-heading'>Services</h1>
   <div className="services-container">
    
    <button
      className="service-less-btn"
      onClick={handlePrev}
      disabled={isPrevDisabled}
    >
      &lt;
    </button>
    <div className="services-cards-wrapper">
      {servicesList
        .slice(currentIndex, currentIndex + itemsPerPage)
        .map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
    </div>
    <button
      className="service-greater-btn"
      onClick={handleNext}
      disabled={isNextDisabled}
    >
      &gt;
    </button>
  </div>
  </>
   
  );
};

export default Services;
