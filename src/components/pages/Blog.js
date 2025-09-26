import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Blog = () => {
  const articles = [
    {
      title: "Cómo mejorar tu score crediticio",
      summary: "Consejos prácticos para aumentar tu puntaje y acceder a mejores créditos.",
      date: "15 Nov 2024",
      readTime: "5 min"
    },
    {
      title: "Diferencias entre créditos personales e hipotecarios",
      summary: "Guía completa para elegir el tipo de crédito que mejor se adapte a tus necesidades.",
      date: "10 Nov 2024",
      readTime: "8 min"
    },
    {
      title: "Tasas de interés: Todo lo que necesitas saber",
      summary: "Entiende cómo funcionan las tasas y cómo pueden afectar tu crédito.",
      date: "5 Nov 2024",
      readTime: "6 min"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog Financiero</h1>
        <p>Consejos y noticias sobre finanzas personales y créditos</p>
      </div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <Card key={index} className="article-card">
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
              <span className="article-read-time">{article.readTime} lectura</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Button label="Leer más" icon="pi pi-arrow-right" className="p-button-text" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;