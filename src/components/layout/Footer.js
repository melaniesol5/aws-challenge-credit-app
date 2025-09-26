import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Información Legal</h4>
          <div className="qr-afip">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMzMzMyIvPgogIDx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UVIgQUZJUDwvdGV4dD4KICA8L3N2Zz4K" 
              alt="QR AFIP" 
              className="qr-code"
            />
            <p>Código QR AFIP</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><Button link onClick={() => setCurrentPage('cliente')}>Solicitar Crédito</Button></li>
            <li><Button link onClick={() => setCurrentPage('blog')}>Blog</Button></li>
            <li><Button link onClick={() => setCurrentPage('contacto')}>Contacto</Button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Productos</h4>
          <ul className="footer-links">
            <li><Button link onClick={() => window.open('#', '_blank')}>Créditos Personales</Button></li>
            <li><Button link onClick={() => window.open('#', '_blank')}>Créditos Hipotecarios</Button></li>
            <li><Button link onClick={() => window.open('#', '_blank')}>Créditos Prendarios</Button></li>
            <li><Button link onClick={() => window.open('#', '_blank')}>Tarjetas de Crédito</Button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <Button icon="pi pi-facebook" className="p-button-rounded p-button-text" />
            <Button icon="pi pi-twitter" className="p-button-rounded p-button-text" />
            <Button icon="pi pi-instagram" className="p-button-rounded p-button-text" />
            <Button icon="pi pi-linkedin" className="p-button-rounded p-button-text" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CréditoFácil. Todos los derechos reservados.</p>
        <p>Entidad financiera regulada por el Banco Central de la República Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;