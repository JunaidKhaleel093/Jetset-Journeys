import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative group p-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative w-7 h-5 transform transition-all duration-300">
        {/* Top line */}
        <span
          className={`absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}
        />
        {/* Middle lines */}
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? 'w-0 opacity-0 translate-x-3' : 'w-5 opacity-100 translate-y-2 translate-x-2'}`}
        />
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? 'w-0 opacity-0 -translate-x-3' : 'w-3 opacity-100 translate-y-2'}`}
        />
        {/* Bottom line */}
        <span
          className={`absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
