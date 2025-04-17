import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = ({ openModal }) => {
  return (
    <section id="hero" className="h-screen bg-gray-100 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Building AI-powered web experiences</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">We craft sleek, performant, and modern websites to elevate your brand.</p>
        <div className="space-x-4">
          <Link to="services" smooth duration={500} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 cursor-pointer">Our Services</Link>
          <button onClick={openModal} className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50">Book a Call</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
