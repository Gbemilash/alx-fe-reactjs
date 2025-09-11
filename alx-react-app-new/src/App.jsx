import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      maxWidth: '900px',
      margin: '20px auto',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
    }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
