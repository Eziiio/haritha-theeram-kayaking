import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-300 border-t border-ink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & About */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-sand-50/10 text-gold-400 p-2 rounded-full">
                <Waves className="h-6 w-6" />
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight text-sand-50">
                Haritha Theeram
              </span>
            </Link>
            <p className="text-sm text-sand-400 leading-relaxed">
              Empowering local women in Kerala through sustainable eco-tourism. Explore the pristine backwaters and experience authentic local culture with our certified guides.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-ink-800 text-sand-400 hover:text-sand-50 hover:bg-lagoon-700 transition-all duration-300" aria-label="Instagram">
                <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-ink-800 text-sand-400 hover:text-sand-50 hover:bg-lagoon-700 transition-all duration-300" aria-label="Facebook">
                <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sand-50 font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/packages" className="hover:text-gold-400 transition-colors duration-300">Our Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors duration-300">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Utility Links */}
          <div>
            <h3 className="text-sand-50 font-bold text-sm uppercase tracking-wider mb-4">Support & Rules</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/safety" className="hover:text-gold-400 transition-colors duration-300">Rules & Safety</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/admin" className="hover:text-gold-400 transition-colors duration-300">Admin Login</Link></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sand-50 font-bold text-sm uppercase tracking-wider mb-4">Get In Touch</h3>
            <div className="flex items-start text-sm space-x-3">
              <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
              <span>Haritha Theeram Kayaking, Kulashekaramangalam, Vaikom, Kottayam, Kerala - 686608</span>
            </div>
            <div className="flex items-center text-sm space-x-3">
              <Phone className="h-5 w-5 text-gold-400 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors duration-300">+91 94000 93504, +91 94463 91830</a>
            </div>
            <div className="flex items-center text-sm space-x-3">
              <Mail className="h-5 w-5 text-gold-400 shrink-0" />
              <a href="mailto:harithatheeramkayaking@gmail.com" className="hover:text-gold-400 transition-colors duration-300">harithatheeramkayaking@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sand-500">
          <p>© {new Date().getFullYear()} Haritha Theeram Women's Kayaking Association. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-3 w-3 text-clay-400 mx-1 fill-clay-400" /> in Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
