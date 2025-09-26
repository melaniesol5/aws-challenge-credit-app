import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const Header = ({ currentPage, setCurrentPage }) => {
  const items = [
    {
      label: 'Cliente',
      icon: 'pi pi-user',
      command: () => setCurrentPage('cliente')
    },
    {
      label: 'Blog',
      icon: 'pi pi-book',
      command: () => setCurrentPage('blog')
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      command: () => setCurrentPage('contacto')
    }
  ];

  const start = (
    <div className="logo-section" onClick={() => setCurrentPage('cliente')}>
      <i className="pi pi-credit-card logo-icon"></i>
      <span className="logo-text">CréditoFácil</span>
    </div>
  );

  const end = (
    <Button 
      label="Solicitar Crédito" 
      icon="pi pi-plus" 
      className="p-button-success"
      onClick={() => setCurrentPage('cliente')}
    />
  );

  return (
    <div className="header-container">
      <Menubar model={items} start={start} end={end} className="custom-menubar" />
    </div>
  );
};

export default Header;