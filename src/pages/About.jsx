import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Users, Compass, Globe } from 'lucide-react';
import RiverDivider from '../components/RiverDivider';

export default function About() {
  return (
    <div className="bg-sand-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-xs font-bold text-lagoon-600 uppercase tracking-[0.2em]">Our Story</h1>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
            About Haritha Theeram Kayaking
          </h2>
          <RiverDivider className="text-gold-500" />
          <p className="text-ink-400 font-medium">
            Haritha Theeram Kayaking is a women-led responsible tourism initiative started in 2026 at Kulashekaramangalam, Vaikom. Managed by a passionate team of four local women, we create unique kayaking and village experiences through Arival Thoodu, a peaceful waterway connected with the Muvattupuzha River system.
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-sand-50 rounded-3xl p-8 lg:p-12 shadow-xl shadow-ink-900/5 border border-sand-300">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900 tracking-tight">
              A journey through nature and village life
            </h3>
            <p className="text-ink-500 text-sm leading-relaxed">
              Located along Arival Thoodu, a peaceful waterway connected with the Muvattupuzha River system, Haritha Theeram Kayaking was created to showcase the hidden beauty of Kulashekaramangalam.
              Started in 2026, this women-led initiative provides visitors an opportunity to experience kayaking, local traditions, and the natural lifestyle of Vaikom.
            </p>
            <p className="text-ink-500 text-sm leading-relaxed">
              Our four-member women team works towards creating a welcoming experience for families, travelers, and nature lovers. Our kayaking experiences range from 1.5-hour short rides to 3-hour extended journeys, allowing visitors to explore Arival Thoodu, village surroundings, and Kerala's traditional lifestyle at their own pace.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-lagoon-700 font-semibold text-sm">
                <Users className="h-5 w-5 text-lagoon-600" />
                <span>Community Owned</span>
              </div>
              <div className="flex items-center space-x-2 text-gold-600 font-semibold text-sm">
                <Globe className="h-5 w-5 text-gold-500" />
                <span>100% Eco-Friendly</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md">
            <img
              src="/images/morning_kayak.png"
              alt="Women paddling kayaks together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-xl shadow-ink-900/5 space-y-4">
            <div className="p-3 bg-lagoon-50 text-lagoon-700 rounded-2xl w-fit">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink-900">Our Mission</h3>
            <p className="text-ink-500 text-sm leading-relaxed">
              To create a sustainable village tourism experience that connects visitors with nature, local traditions, and the peaceful waterways of Arival Thoodu while creating opportunities for women in tourism.
            </p>
          </div>

          <div className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-xl shadow-ink-900/5 space-y-4">
            <div className="p-3 bg-gold-50 text-gold-600 rounded-2xl w-fit">
              <Anchor className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink-900">Our Vision</h3>
            <p className="text-ink-500 text-sm leading-relaxed">
              To develop Kulashekaramangalam as a recognized responsible tourism destination where kayaking, culture, and community experiences come together.
            </p>
          </div>
        </div>

        {/* Experiences Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-xs font-bold text-lagoon-600 uppercase tracking-[0.2em]">Experiences We Offer</h3>
            <h4 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900">
              Explore Arival Thoodu Beyond Kayaking
            </h4>
            <p className="text-ink-400 max-w-2xl mx-auto text-sm">
              Haritha Theeram offers visitors a chance to experience nature,
              traditional village activities, and the peaceful lifestyle of
              Kulashekaramangalam, Vaikom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-xl shadow-ink-900/5 space-y-4">
              <h5 className="font-serif text-xl font-semibold text-lagoon-700">🚣 Water Experiences</h5>
              <ul className="text-ink-500 text-sm space-y-2">
                <li>• Kayaking Experiences (1.5 Hour & 3 Hour Options)</li>
                <li>• Country Boat Ride</li>
                <li>• Kottavanchi Experience</li>
                <li>• Fishing Experience</li>
                <li>• Traditional Water Activities</li>
              </ul>
            </div>

            <div className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-xl shadow-ink-900/5 space-y-4">
              <h5 className="font-serif text-xl font-semibold text-clay-500">🌴 Village Experiences</h5>
              <ul className="text-ink-500 text-sm space-y-2">
                <li>• Coir Making Demonstration</li>
                <li>• Coir Product Experience</li>
                <li>• Palm Leaf Craft</li>
                <li>• Traditional Village Activities</li>
                <li>• Toddy Tapping Demonstration</li>
              </ul>
            </div>

            <div className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-xl shadow-ink-900/5 space-y-4">
              <h5 className="font-serif text-xl font-semibold text-gold-600">🌿 Relax & Explore</h5>
              <ul className="text-ink-500 text-sm space-y-2">
                <li>• Riverside Resting Area</li>
                <li>• Traditional Huts</li>
                <li>• Oonjal (Swing)</li>
                <li>• Nature View Points</li>
                <li>• Photography Spots</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Pillars Section */}
        <div className="bg-ink-900 text-sand-50 rounded-3xl p-8 md:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">Our Guiding Pillars</h3>
            <h4 className="font-serif text-2xl md:text-3xl font-semibold">How We Operate Day to Day</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="font-serif text-gold-400 font-semibold text-2xl">Rule One</div>
              <h5 className="font-bold text-lg text-sand-50">Women-Led Tourism</h5>
              <p className="text-sand-300 text-xs leading-relaxed">
                A four-member local women team manages the initiative, creating opportunities through responsible tourism and community participation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif text-gold-400 font-semibold text-2xl">Rule Two</div>
              <h5 className="font-bold text-lg text-sand-50">Eco Conservation</h5>
              <p className="text-sand-300 text-xs leading-relaxed">
                We focus on preserving local traditions, waterways, and village experiences while sharing them with visitors.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif text-gold-400 font-semibold text-2xl">Rule Three</div>
              <h5 className="font-bold text-lg text-sand-50">Safe Kayaking Experience</h5>
              <p className="text-sand-300 text-xs leading-relaxed">
                Visitors receive life jackets and basic instructions before kayaking. Our team focuses on providing a comfortable and enjoyable experience for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-sand-50 border border-sand-300 rounded-3xl p-8 md:p-12 shadow-xl shadow-ink-900/5 max-w-4xl mx-auto space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-ink-900">Ready to Explore Arival Thoodu?</h3>
          <p className="text-ink-400 text-sm max-w-xl mx-auto">
            Join us for a peaceful kayaking journey through Arival Thoodu and experience the nature, traditions, and village charm of Kulashekaramangalam, Vaikom.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 transition-all duration-300"
            >
              Book A Kayaking Tour
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-ink-700 bg-sand-200 hover:bg-sand-300 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
