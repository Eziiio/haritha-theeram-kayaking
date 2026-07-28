import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, ArrowRight, Star } from 'lucide-react';
import RiverDivider from '../components/RiverDivider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-100">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Arival Thoodu Kayaking Vaikom"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/55 to-ink-950/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-sand-50 space-y-7">
          <div className="inline-flex items-center space-x-2 bg-sand-50/10 backdrop-blur-md border border-gold-400/30 px-4 py-2 rounded-full text-gold-300 text-xs font-bold uppercase tracking-[0.2em]">
            <Heart className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            <span>100% Women-Led Eco-Tourism</span>
          </div>

          <h1 className="font-serif text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Discover Kerala's soul through
            <span className="italic text-gold-300"> gentle waters</span>
          </h1>

          <RiverDivider className="text-gold-400" />

          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the peaceful waters of Arival Thoodu in Kulashekaramangalam, Vaikom —
            a women-led community kayaking initiative welcoming families, travelers, and
            first-timers to explore nature, village life, and Kerala's quiet backwaters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-ink-900 bg-gold-400 hover:bg-gold-300 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-0.5"
            >
              Book Your Adventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-sand-50 bg-sand-50/10 hover:bg-sand-50/20 border border-sand-50/25 hover:border-sand-50/50 backdrop-blur-md transition-all duration-300"
            >
              Explore Packages
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3v12H0V0C26.9,8.75,57.05,18.3,90.13,26c98.58,23,203.87,41.23,321.39,30.44Z" fill="#FAF6EC"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-sand-50 border border-sand-300 rounded-3xl p-8 shadow-xl shadow-ink-900/5">
            <div className="text-center space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-semibold text-lagoon-600">100%</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-ink-400">Women Run</p>
            </div>
            <div className="text-center space-y-1 border-l border-sand-300">
              <p className="font-serif text-3xl md:text-5xl font-semibold text-lagoon-600">50+</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-ink-400">Happy Guests</p>
            </div>
            <div className="text-center space-y-1 border-l border-sand-300">
              <p className="font-serif text-3xl md:text-5xl font-semibold text-lagoon-600">5+</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-ink-400">Community Kayak Hosts</p>
            </div>
            <div className="text-center space-y-1 border-l border-sand-300">
              <p className="font-serif text-3xl md:text-5xl font-semibold text-gold-500">🌿</p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-ink-400">Eco Friendly Nature Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold text-lagoon-600 uppercase tracking-[0.2em]">Why Paddle With Us?</h2>
            <RiverDivider className="text-gold-500" />
            <h3 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
              An authentic eco-adventure, driven by empowerment
            </h3>
            <p className="text-ink-400 font-medium">
              We provide more than just a kayaking tour. We offer an opportunity to support rural women while preserving Kerala's unique river ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand-100 rounded-3xl p-8 hover:bg-lagoon-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-lagoon-100">
              <div className="p-4 bg-lagoon-100 text-lagoon-700 w-fit rounded-2xl">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-ink-900">Women Empowerment</h4>
              <p className="text-ink-500 text-sm leading-relaxed">
                Our kayaking initiative is organized by local women who share their connection with Arival Thoodu, nature, and village culture. Every booking supports women-led tourism and local livelihoods.
              </p>
            </div>

            <div className="bg-sand-100 rounded-3xl p-8 hover:bg-lagoon-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-lagoon-100">
              <div className="p-4 bg-lagoon-100 text-lagoon-700 w-fit rounded-2xl">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-ink-900">Safety First Always</h4>
              <p className="text-ink-500 text-sm leading-relaxed">
                Your safety is our priority. We provide life jackets, basic kayaking instructions, and proper guidance before every ride to create a safe and enjoyable experience.
              </p>
            </div>

            <div className="bg-sand-100 rounded-3xl p-8 hover:bg-lagoon-50 transition-colors duration-300 space-y-4 border border-transparent hover:border-lagoon-100">
              <div className="p-4 bg-gold-100 text-gold-600 w-fit rounded-2xl">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-ink-900">Sustainable Tourism</h4>
              <p className="text-ink-500 text-sm leading-relaxed">
                We respect our backwaters. Our paddles are non-motorized, quiet, and eco-friendly. We practice "Leave No Trace" and educate guests on wetland conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kerala Highlight/Banner */}
      <section className="relative py-24 overflow-hidden bg-ink-900 text-sand-50">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src="/images/morning_kayak.png"
            alt="Kayaking through Arival Thoodu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">The Experience</span>
            <h3 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Discover the calm river trails of Arival Thoodu.
            </h3>
            <p className="text-sand-200 text-base leading-relaxed">
              Kayaking through Arival Thoodu offers a peaceful journey through the natural waterways of Kulashekaramangalam, Vaikom. Paddle through calm waters, enjoy greenery, observe village life, and experience Kerala's river ecosystem.
            </p>
            <div className="pt-2">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-ink-900 bg-gold-400 hover:bg-gold-300 transition-all duration-300"
              >
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="border border-sand-50/10 bg-sand-50/5 backdrop-blur-md rounded-3xl p-8 space-y-6">
            <div className="flex space-x-1 text-gold-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="font-serif text-sand-50 text-lg italic leading-relaxed">
              Our mission is to create a unique river tourism experience through Arival Thoodu, connecting visitors with nature while supporting women-led community development.
            </p>
            <div>
              <p className="font-bold text-sand-50 text-sm">Women Kayaking Initiative</p>
              <p className="text-xs text-sand-300 font-medium">Kulashekaramangalam, Vaikom</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
