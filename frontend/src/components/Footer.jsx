import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-sm py-6 border-t bg-white">
      © {new Date().getFullYear()} YourAgency. All rights reserved.
    </footer>
  );
};

export default Footer;
