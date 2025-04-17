import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6 text-center text-gray-600 text-sm">
      <p>&copy; {new Date().getFullYear()} YourAgency. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
