// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ openModal }) => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">YourAgency</div>
      <div className="space-x-6 hidden md:flex">
        <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-indigo-500">Home</Link>
        <Link to="about" smooth duration={500} className="cursor-pointer hover:text-indigo-500">About</Link>
        <Link to="services" smooth duration={500} className="cursor-pointer hover:text-indigo-500">Services</Link>
        <button onClick={openModal} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Book a Call</button>
      </div>
    </nav>
  );
};

export default Navbar;
