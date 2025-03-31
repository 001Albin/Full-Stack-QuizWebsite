import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 p-4 w-full text-center absolute">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Quiz For Programmers. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;