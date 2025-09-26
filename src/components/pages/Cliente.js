import React, { useState } from 'react';
import CreditForm from '../CreditForm';
import OfferApproval from '../OfferApproval';
import DocumentValidation from '../DocumentValidation';

const Cliente = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [offer, setOffer] = useState({});

  const nextStep = () => setStep(step + 1);

  const resetProcess = () => {
    setStep(1);
    setFormData({});
    setOffer({});
  };

  return (
    <div className="cliente-container">
      <div className="process-header">
        <h1>Solicitud de Crédito</h1>
        <div className="process-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span>1</span>
            <p>Datos Personales</p>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span>2</span>
            <p>Oferta</p>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span>3</span>
            <p>Documentación</p>
          </div>
        </div>
      </div>

      {step === 1 && (
        <CreditForm 
          onSubmit={(data) => {
            setFormData(data);
            nextStep();
          }}
        />
      )}
      
      {step === 2 && (
        <OfferApproval 
          formData={formData}
          onAccept={(offerData) => {
            setOffer(offerData);
            nextStep();
          }}
        />
      )}
      
      {step === 3 && (
        <DocumentValidation 
          formData={formData}
          offer={offer}
          onComplete={resetProcess}
        />
      )}
    </div>
  );
};

export default Cliente;