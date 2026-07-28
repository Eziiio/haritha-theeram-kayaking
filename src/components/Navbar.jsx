import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Waves, Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Safety', path: '/safety' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/85 backdrop-blur-md border-b border-ink-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-ink-900 text-gold-400 p-2.5 rounded-full group-hover:bg-lagoon-700 transition-colors duration-300">
                <Waves className="h-5 w-5" />
              </div>
              <div>
                <span className="font-serif font-semibold text-xl tracking-tight text-ink-900">
                  Haritha Theeram
                </span>
                <span className="block text-[10px] font-bold text-lagoon-600 tracking-[0.2em] uppercase">
                  Women-Led River Tourism
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 ${isActive(link.path) ? 'text-ink-900 font-bold' : 'text-ink-400 hover:text-lagoon-600'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-4 w-4 text-gold-400" />
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-ink-600 hover:text-lagoon-600 hover:bg-sand-100 focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-sand-50 border-b border-ink-100`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActive(link.path) ? 'bg-lagoon-50 text-lagoon-700 font-bold' : 'text-ink-600 hover:bg-sand-100 hover:text-lagoon-600'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 px-4">
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-base font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 transition-all duration-300 shadow-md"
            >
              <Calendar className="mr-2 h-5 w-5 text-gold-400" />
              Book Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
