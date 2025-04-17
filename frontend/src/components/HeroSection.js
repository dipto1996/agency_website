import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center text-center px-4" id="hero">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          We Help You Build Modern <span className="text-indigo-600">AI-Driven</span> Solutions
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Empower your business with cutting-edge technology, crafted by a team of experts.
        </p>
        <div className="mt-8 space-x-4">
          <Link to="services" smooth duration={500} className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500 cursor-pointer">
            Explore Services
          </Link>
          <Link to="about" smooth duration={500} className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded hover:bg-gray-300 cursor-pointer">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
