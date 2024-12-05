import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../components/HamburgerButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-accent shadow-lg fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center mx-auto md:mx-0" 
          >
            <img
              src="/images/Favicon.png" 
              alt="Logo"
              className="h-14 w-14 object-contain" 
            /><h1 style={{ fontFamily: 'Philosopher , sans-serif' }}>
            <span
  className="text-[34px]"
  style={{
    background: 'linear-gradient(to right, #f8f8ff, #757575)', 
    WebkitBackgroundClip: 'text', 
    color: 'transparent', 
  }}
>
  JetSet
</span>
          </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-light hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="text-light hover:text-primary font-medium transition-colors"
            >
              Destinations
            </Link>
            <Link
              to="/blog"
              className="text-light hover:text-primary font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-light hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-dark-accent text-light shadow-lg rounded-b-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4 text-center">
            <Link
              to="/"
              className="block text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/blog"
              className="block text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
