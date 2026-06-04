import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Heart, Shield, Award, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Arival Thoodu Kayaking Vaikom"
            className="w-full h-full object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white space-y-6">
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 px-4 py-2 rounded-full text-teal-300 text-xs font-bold uppercase tracking-widest">
            <Heart className="h-3.5 w-3.5 fill-teal-400 text-teal-400 animate-pulse" />
            <span>100% Women-Led Eco-Tourism</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none text-white max-w-4xl mx-auto">
            Discover Kerala's Soul through{' '}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-sunset-300 bg-clip-text text-transparent">
              Gentle Waters
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the peaceful waters of Arival Thoodu in Kulashekaramangalam, Vaikom.
            A women-led community kayaking initiative welcoming everyone — families,
            travelers, beginners, men and women — to explore nature, village life,
            and the calm waterways connected to the Muvattupuzha River.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-slate-950 bg-white hover:bg-teal-400 hover:text-slate-950 transition-all duration-300 shadow-xl shadow-black/20 hover:scale-105"
            >
              Book Your Adventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-white bg-slate-900/40 hover:bg-slate-900/80 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Waves bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3v12H0V0C26.9,8.75,57.05,18.3,90.13,26c98.58,23,203.87,41.23,321.39,30.44Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100">
            <div className="text-center space-y-1">
              <p className="text-3xl md:text-5xl font-black text-teal-600">100%</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Women Run</p>
            </div>
            <div className="text-center space-y-1 border-l border-slate-100">
              <p className="text-3xl md:text-5xl font-black text-emerald-600">50+</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Happy Guests</p>
            </div>
            <div className="text-center space-y-1 border-l border-slate-100">
              <p className="text-3xl md:text-5xl font-black text-teal-600">5+</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Community Kayak Hosts</p>
            </div>
            <div className="text-center space-y-1 border-l border-slate-100">
              <p className="text-3xl md:text-5xl font-black text-sunset-500">🌿</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Eco Friendly
                Nature Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Why Paddle With Us?</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              An Authentic Eco-Adventure, Driven by Empowerment
            </h3>
            <p className="text-slate-500 font-medium">
              We provide more than just a kayaking tour. We offer an opportunity to support rural women while preserving Kerala's unique river ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 hover:bg-teal-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-teal-100">
              <div className="p-4 bg-teal-100 text-teal-700 w-fit rounded-2xl">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Women Empowerment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our kayaking initiative is organized by local women who share their connection with Arival Thoodu, nature, and village culture. Every booking supports women-led tourism and local livelihoods.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 hover:bg-teal-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-teal-100">
              <div className="p-4 bg-emerald-100 text-emerald-700 w-fit rounded-2xl">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Safety First Always</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your safety is our priority. We provide life jackets, basic kayaking instructions, and proper guidance before every ride to create a safe and enjoyable experience.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 hover:bg-teal-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-teal-100">
              <div className="p-4 bg-sunset-100 text-sunset-600 w-fit rounded-2xl">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Sustainable Tourism</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We respect our backwaters. Our paddles are non-motorized, quiet, and eco-friendly. We practice "Leave No Trace" and educate guests on wetland conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kerala Highlight/Banner */}
      <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 z-0">
          <img
            src="/images/morning_kayak.png"
            alt="Kayaking through Arival Thoodu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">The Experience</span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Discover the calm river trails of Arival Thoodu.
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Kayaking through Arival Thoodu offers a peaceful journey through the natural waterways of Kulashekaramangalam, Vaikom. Paddle through calm waters, enjoy greenery, observe village life, and experience Kerala's river ecosystem.
            </p>
            <div className="pt-2">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all duration-300"
              >
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-8 space-y-6">
            <div className="flex space-x-1 text-sunset-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-slate-100 text-lg italic leading-relaxed">
              Our mission is to create a unique river tourism experience through Arival Thoodu, connecting visitors with nature while supporting women-led community development.
            </p>
            <div>
              <p className="font-bold text-white text-sm">Women Kayaking Initiative</p>
              <p className="text-xs text-slate-400 font-medium">Kulashekaramangalam, Vaikom</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
