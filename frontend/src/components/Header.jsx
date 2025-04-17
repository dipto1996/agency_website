import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-50">
      <div className="text-2xl font-bold text-indigo-600">YourAgency</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
