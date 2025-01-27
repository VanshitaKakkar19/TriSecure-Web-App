import React, { useState, useEffect } from "react";
import { ServicesCard } from "./ServicesCard"; // Replace with your card component
import { servicesList } from "./ServicesData"; // Replace with your data
import "./Services.css";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(servicesList.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Math.max(prevIndex - 1, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalSlides - 1)
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="services-section">
      <h1 className="service-heading">Services</h1>
      <div className="services-container">
        <div className="services-cards-wrapper">
          {servicesList
            .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
            .map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
        </div>
        {/* Navigation buttons and slider lines */}
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
                className={`line ${currentIndex === index ? "active" : ""}`}
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
}

export default Services;
