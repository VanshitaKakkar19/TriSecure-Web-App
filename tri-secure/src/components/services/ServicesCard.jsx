import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import './ServicesCard.css';

export const ServicesCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CCard className={`service-card ${isFlipped ? 'flipped' : ''}`}>
     
        {/* Front of the card */}
        
          {!isFlipped && (
            <div className="service-card-image-wrapper">
              <CCardImage src={service.image} />
            </div>
          )}

          <CCardBody className="service-card-body">
            <CCardTitle className="service-card-title">{service.name}</CCardTitle>
            <CCardText className="service-card-text">
              {isFlipped ? (
                <ul>
                  {service.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                service.description
              )}
            </CCardText>
            <CButton className="service-card-button" color="primary" onClick={handleFlip}>
              {isFlipped ? 'View Less' : 'View More'}
            </CButton>
          </CCardBody>
    
    </CCard>
  );
};
