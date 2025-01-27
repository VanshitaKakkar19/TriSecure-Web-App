import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import './ServicesCard.css';
import ReactCardFlip from 'react-card-flip';

export const ServicesCard = ({ service, isFlipped, onFlip }) => {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <CCard className="service-card" key="front">
        <div className="service-card-image-wrapper">
          <CCardImage src={service.image} className='service-card-image'/>
        </div>
        <CCardBody className="service-card-body">
          <CCardTitle className="service-card-title">{service.name}</CCardTitle>
          <CCardText className="service-card-text">{service.description}</CCardText>
          <CButton
            className="service-card-button"
            color="primary"
            onClick={onFlip} // Flip the card
          >
            View More
          </CButton>
        </CCardBody>
      </CCard>

      {/* Back of the card */}
      <CCard className="service-card" key="back">
        <CCardBody className="service-card-body">
          <CCardTitle className="service-card-title">{service.name}</CCardTitle>
          <div className="service-card-text">
            <ul>
              {service.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <CButton
            className="service-card-button"
            color="primary"
            onClick={onFlip} // Flip the card back
          >
            View Less
          </CButton>
        </CCardBody>
      </CCard>
    </ReactCardFlip>
  );
};
