import React from 'react';

const Hero = () => {
  return (
    <section className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Empower Your Business with AI-Powered Solutions</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">From data to impact — let us build your next-generation product using custom AI models and beautiful user experiences.</p>
        <a href="#contact">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-2xl text-lg font-medium shadow-md transition">Book a Call</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
