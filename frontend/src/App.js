// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal'; // Make sure this component is already created

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="font-sans antialiased">
      <Navbar openModal={openModal} />
      <HeroSection openModal={openModal} />
      <AboutSection />
      <ServicesSection />
      
      {/* Contact Modal */}
      {modalOpen && <ContactModal closeModal={closeModal} />}

      <Footer />
    </div>
  );
}

export default App;
