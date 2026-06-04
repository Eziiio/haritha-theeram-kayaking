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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-teal-600 text-white p-2 rounded-xl group-hover:bg-teal-700 transition-colors duration-300 shadow-md shadow-teal-100">
                <Waves className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-teal-700 to-primary-700 bg-clip-text text-transparent">
                  Haritha Theeram
                </span>
                <span className="block text-[10px] font-bold text-teal-600 tracking-widest uppercase">
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
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 ${isActive(link.path)
                  ? 'text-teal-700 font-bold'
                  : 'text-slate-600 hover:text-teal-600'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-primary-500 rounded-full" />
                )}
              </Link>
            ))}



            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-primary-600 hover:from-teal-700 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 shadow-lg shadow-teal-100 hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-teal-600 hover:bg-slate-50 focus:outline-none transition-colors duration-300"
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
          } overflow-hidden bg-white border-b border-slate-100`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActive(link.path)
                ? 'bg-teal-50 text-teal-700 font-bold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'
                }`}
            >
              {link.name}
            </Link>
          ))}



          <div className="pt-4 px-4">
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-teal-600 to-primary-600 hover:from-teal-700 hover:to-primary-700 transition-all duration-300 shadow-md"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
