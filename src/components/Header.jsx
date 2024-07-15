import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white dark:bg-darkprimaryColor">
      <div className="flex items-center">
        {/* <img src="/path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" /> */}
        <h1 className="ml-2 text-lg font-bold">Telegram</h1>
      </div>
      <nav className="flex items-center">
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </div>
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className="text-2xl cursor-pointer ml-4"
          onClick={toggleTheme}
        />
        <button
          className="md:hidden ml-4"
          onClick={handleMenuToggle}
        >
          ☰
        </button>
      </nav>
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-primary dark:bg-darkprimaryColor text-white w-full md:hidden">
          <div className="flex flex-col items-center p-4 space-y-4">
            <Link to="/" className="hover:underline" onClick={handleMenuToggle}>Home</Link>
            <Link to="/about" className="hover:underline" onClick={handleMenuToggle}>About</Link>
            <Link to="/profile" className="hover:underline" onClick={handleMenuToggle}>Profile</Link>
            <Link to="/settings" className="hover:underline" onClick={handleMenuToggle}>Settings</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
