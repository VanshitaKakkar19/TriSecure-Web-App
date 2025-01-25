import React from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import './ServicesCard.css';

export const ServicesCard = ({ service }) => {
  return (
    <CCard className="service-card">
      <div className="service-card-image-wrapper">
        <CCardImage src={service.image} />
      </div>
      <CCardBody className="service-card-body">
        <CCardTitle className="service-card-title">{service.name}</CCardTitle>
        <CCardText className="service-card-text">{service.description}</CCardText>
        <CButton className="service-card-button" color="primary" href="#">
          View More
        </CButton>
      </CCardBody>
    </CCard>
  );
};

