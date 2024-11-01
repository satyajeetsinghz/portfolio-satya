import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      {/* Hamburger Button */}
      <button
        className="px-2 text-black text-xl font-bold rounded-md focus:outline-none lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            <div className='absolute h-screen w-4 bg-emerald-400 left-0'></div>
          <div className="flex flex-col items-center space-y-6 text-emerald-400">
            <a href="#" className="text-2xl">About</a>
            <a href="#" className="text-2xl">Resume</a>
            <a href="#" className="text-2xl">Projects</a>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-emerald-300 text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
