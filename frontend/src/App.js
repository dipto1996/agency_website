// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App font-sans">
      <Navbar openModal={openModal} />
      <main className="pt-20 space-y-32">
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="services"><ServicesSection /></section>
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
