// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      <HeroSection openModal={openModal} />
      <AboutSection />
      <ServicesSection />
      {isModalOpen && <ContactModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
