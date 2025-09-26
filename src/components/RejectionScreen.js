import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const RejectionScreen = ({ onRetry }) => {
  return (
    <div className="rejection-container">
      <Card className="rejection-card">
        <div className="rejection-content">
          <div className="sad-customer-image">
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
              <circle cx="75" cy="85" r="8" fill="#374151"/>
              <circle cx="125" cy="85" r="8" fill="#374151"/>
              <path d="M 70 130 Q 100 110 130 130" stroke="#ef4444" strokeWidth="3" fill="none"/>
              <path d="M 85 140 Q 100 150 115 140" stroke="#6b7280" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <h2 className="rejection-title">¡Ups! Lo sentimos</h2>
          
          <p className="rejection-message">
            En este momento no podemos otorgarte el crédito solicitado.
          </p>
          
          <p className="rejection-submessage">
            Te invitamos a volver a intentar en otro momento.
          </p>
          
          <div className="rejection-actions">
            <Button 
              label="Volver a Intentar" 
              icon="pi pi-refresh" 
              onClick={onRetry}
              className="p-button-outlined"
            />
            <Button 
              label="Ir al Inicio" 
              icon="pi pi-home" 
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RejectionScreen;