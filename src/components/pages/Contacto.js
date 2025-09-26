import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simular envío
    setTimeout(() => {
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="contact-container">
        <Card className="success-message">
          <div className="text-center">
            <i className="pi pi-check-circle" style={{ fontSize: '3rem', color: '#22c55e' }}></i>
            <h2>¡Mensaje Enviado!</h2>
            <p>Gracias por contactarnos. Te responderemos en las próximas 24 horas.</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <Card title="Información de Contacto">
            <div className="contact-item">
              <i className="pi pi-phone"></i>
              <div>
                <strong>Teléfono</strong>
                <p>0800-123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="pi pi-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>info@creditofacil.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="pi pi-map-marker"></i>
              <div>
                <strong>Dirección</strong>
                <p>Av. Corrientes 1234, CABA</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="pi pi-clock"></i>
              <div>
                <strong>Horarios</strong>
                <p>Lun-Vie: 9:00-18:00</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="contact-form">
          <Card title="Envíanos un Mensaje">
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
                <label htmlFor="telefono">Teléfono</label>
                <InputText
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              
              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <InputTextarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" label="Enviar Mensaje" icon="pi pi-send" />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacto;