import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import RejectionScreen from './RejectionScreen';

const BANKS = [
  'Banco BBVA',
  'Banco Santander', 
  'Banco Galicia',
  'Banco Nacion',
  'Banco Macro',
  'Banco Comafi',
  'Banco ICBC'
];

const ENABLED_BANKS = [
  'Banco BBVA',
  'Banco Santander',
  'Banco Galicia', 
  'Banco Nacion'
];

const CreditForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    email: '',
    banco: ''
  });
  const [showRejection, setShowRejection] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!ENABLED_BANKS.includes(formData.banco)) {
      setShowRejection(true);
      return;
    }

    onSubmit(formData);
  };

  const handleRetry = () => {
    setShowRejection(false);
    setFormData({
      nombre: '',
      apellido: '',
      dni: '',
      telefono: '',
      email: '',
      banco: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const bankOptions = BANKS.map(bank => ({ label: bank, value: bank }));

  if (showRejection) {
    return <RejectionScreen onRetry={handleRetry} />;
  }

  return (
    <Card title="Datos Personales" className="credit-form-card">
      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <InputText
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="field">
          <label htmlFor="apellido">Apellido</label>
          <InputText
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="field">
          <label htmlFor="dni">DNI</label>
          <InputText
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="field">
          <label htmlFor="telefono">Teléfono</label>
          <InputText
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="field">
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="field">
          <label htmlFor="banco">Banco</label>
          <Dropdown
            id="banco"
            name="banco"
            value={formData.banco}
            options={bankOptions}
            onChange={(e) => setFormData({...formData, banco: e.value})}
            placeholder="Seleccione su banco"
            required
          />
        </div>
        
        <Button type="submit" label="Continuar" icon="pi pi-arrow-right" />
      </form>
    </Card>
  );
};

export default CreditForm;