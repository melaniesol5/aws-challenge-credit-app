import React, { useState, useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Divider } from 'primereact/divider';

const DocumentValidation = ({ formData, offer }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');
  const fileUploadRef = useRef(null);

  const validateDocument = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(true), 2000);
    });
  };

  const sendSMSNotification = async () => {
    console.log(`SMS enviado a ${formData.telefono}: Crédito de $${offer.amount} aprobado`);
  };

  const onSelect = (e) => {
    const selectedFile = e.files[0];
    setFile(selectedFile);
    setError('');
  };

  const onRemove = () => {
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Por favor seleccione un archivo');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const isValidDocument = await validateDocument();
      
      if (!isValidDocument) {
        setError('El archivo no parece ser un documento válido. Por favor intente nuevamente.');
        setLoading(false);
        return;
      }

      await sendSMSNotification();
      setCompleted(true);
      setLoading(false);
    } catch (error) {
      setError('Error al procesar el documento. Intente nuevamente.');
      setLoading(false);
    }
  };

  const customUpload = () => {
    return (
      <div className="custom-upload-area">
        <i className="pi pi-cloud-upload" style={{ fontSize: '3rem', color: '#6366f1' }}></i>
        <h4>Arrastra tu documento aquí o haz clic para seleccionar</h4>
        <p>Formatos aceptados: JPG, PNG, PDF (máx. 10MB)</p>
      </div>
    );
  };

  if (completed) {
    return (
      <Card className="completion-card">
        <div className="text-center">
          <i className="pi pi-check-circle" style={{ fontSize: '4rem', color: '#22c55e' }}></i>
          <h2>¡Transacción Aprobada!</h2>
          <p>Su crédito de <strong>${offer.amount}</strong> ha sido aprobado y transferido exitosamente.</p>
          <p>SMS enviado a: {formData.telefono}</p>
          
          <Card title="Resumen de su crédito" className="mt-4">
            <div className="offer-summary">
              <p><strong>Monto:</strong> ${offer.amount}</p>
              <p><strong>Cuotas:</strong> {offer.installments}</p>
              <p><strong>Cuota mensual:</strong> ${offer.monthlyPayment}</p>
              <p><strong>Tasa de interés:</strong> {(offer.interestRate * 100)}%</p>
            </div>
          </Card>
        </div>
      </Card>
    );
  }

  return (
    <div className="document-validation">
      <Card title="Validación de Documento" className="document-card">
        <div className="recommendations-section">
          <h4><i className="pi pi-info-circle"></i> Recomendaciones para la foto</h4>
          <div className="recommendations-grid">
            <div className="recommendation-item">
              <i className="pi pi-sun recommendation-icon"></i>
              <div>
                <strong>Buena iluminación</strong>
                <p>Usa luz natural o una lámpara brillante</p>
              </div>
            </div>
            <div className="recommendation-item">
              <i className="pi pi-eye recommendation-icon"></i>
              <div>
                <strong>Enfoque nítido</strong>
                <p>Asegúrate de que el texto sea legible</p>
              </div>
            </div>
            <div className="recommendation-item">
              <i className="pi pi-tablet recommendation-icon"></i>
              <div>
                <strong>Superficie plana</strong>
                <p>Coloca el documento sobre una mesa</p>
              </div>
            </div>
            <div className="recommendation-item">
              <i className="pi pi-camera recommendation-icon"></i>
              <div>
                <strong>Foto completa</strong>
                <p>Incluye todo el documento en la imagen</p>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div className="upload-section">
          <FileUpload
            ref={fileUploadRef}
            mode="basic"
            name="document"
            accept="image/*,.pdf"
            maxFileSize={10000000}
            onSelect={onSelect}
            onRemove={onRemove}
            customUpload={true}
            uploadHandler={() => {}}
            chooseLabel="Seleccionar Documento"
            className="custom-file-upload"
          />

          {file && (
            <Card className="file-preview mt-3">
              <div className="preview-content">
                <i className="pi pi-file preview-icon"></i>
                <div className="file-info">
                  <p><strong>Archivo seleccionado:</strong> {file.name}</p>
                  <p><strong>Tamaño:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                {file.type.startsWith('image/') && (
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt="Preview" 
                    className="document-preview"
                  />
                )}
              </div>
            </Card>
          )}

          {error && <Message severity="error" text={error} className="mt-3" />}

          <div className="submit-section mt-4">
            {loading ? (
              <div className="loading-section">
                <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                <p>Validando documento...</p>
              </div>
            ) : (
              <Button 
                label="Validar Documento" 
                icon="pi pi-check" 
                onClick={handleSubmit}
                disabled={!file}
                className="validate-button"
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DocumentValidation;