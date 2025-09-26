import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cliente from './components/pages/Cliente';
import Blog from './components/pages/Blog';
import Contacto from './components/pages/Contacto';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('cliente');

  const renderPage = () => {
    switch(currentPage) {
      case 'blog':
        return <Blog />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Cliente />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;