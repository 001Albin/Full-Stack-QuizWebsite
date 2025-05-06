import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) =>
    pathname === path ? 'bg-blue-500' : '';

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black text-white">
      <nav className="p-2 flex items-center justify-between">
        <div className="hidden md:block font-bold text-xl md:text-2xl text-blue-400">
          Quiz For Programmers
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" onClick={handleLinkClick}
            className={`p-2 rounded hover:bg-blue-800 ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}
            className={`p-2 rounded hover:bg-blue-800 ${isActive('/about')}`}>
            About Us
          </Link>
          <Link to="/contact" onClick={handleLinkClick}
            className={`p-2 rounded hover:bg-blue-800 ${isActive('/contact')}`}>
            Contact
          </Link>
          <Link to="/login" onClick={handleLinkClick}
            className={`p-2 rounded hover:bg-blue-800 ${isActive('/login')}`}>
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black p-8">
          <div className="flex flex-col space-y-2">
            <Link to="/" onClick={handleLinkClick}
              className={`p-2 rounded hover:bg-blue-800 ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick}
              className={`p-2 rounded hover:bg-blue-800 ${isActive('/about')}`}>
              About Us
            </Link>
            <Link to="/contact" onClick={handleLinkClick}
              className={`p-2 rounded hover:bg-blue-800 ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link to="/login" onClick={handleLinkClick}
              className={`p-2 rounded hover:bg-blue-800 ${isActive('/login')}`}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
