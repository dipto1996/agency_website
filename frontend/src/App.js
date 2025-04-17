import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <ContactModal />
      <Footer />
    </div>
  );
}

export default App;
