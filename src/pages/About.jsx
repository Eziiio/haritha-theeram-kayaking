import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Users, Compass, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Our Story</h1>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            About Haritha Theeram Kayaking
          </h2>
          <p className="text-slate-500 font-medium">
            Haritha Theeram Kayaking is a women-led responsible tourism initiative started in 2026 at Kulashekaramangalam, Vaikom. Managed by a passionate team of four local women, we create unique kayaking and village experiences through Arival Thoodu, a peaceful waterway connected with the Muvattupuzha River system.
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-100 border border-slate-100">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              <h3>
                A Journey Through Nature and Village Life
              </h3>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <p className="text-slate-600 text-sm leading-relaxed">
                Located along Arival Thoodu, a peaceful waterway connected with the Muvattupuzha River system, Haritha Theeram Kayaking was created to showcase the hidden beauty of Kulashekaramangalam.

                Started in 2026, this women-led initiative provides visitors an opportunity to experience kayaking, local traditions, and the natural lifestyle of Vaikom.
              </p>
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <p className="text-slate-600 text-sm leading-relaxed">
                Our four-member women team works towards creating a welcoming experience for families, travelers, and nature lovers. Our kayaking experiences range from 1.5-hour short rides to 3-hour extended journeys, allowing visitors to explore Arival Thoodu, village surroundings, and Kerala's traditional lifestyle at their own pace.
              </p>
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-teal-700 font-semibold text-sm">
                <Users className="h-5 w-5 text-teal-600" />
                <span>Community Owned</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-sm">
                <Globe className="h-5 w-5 text-emerald-600" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
            <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl w-fit">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To create a sustainable village tourism experience that connects visitors with nature, local traditions, and the peaceful waterways of Arival Thoodu while creating opportunities for women in tourism.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
            <div className="p-3 bg-sunset-50 text-sunset-600 rounded-2xl w-fit">
              <Anchor className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To develop Kulashekaramangalam as a recognized responsible tourism destination where kayaking, culture, and community experiences come together.
            </p>
          </div>
        </div>
        {/* Experiences Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              Experiences We Offer
            </h3>

            <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Explore Arival Thoodu Beyond Kayaking
            </h4>

            <p className="text-slate-500 max-w-2xl mx-auto text-sm">
              Haritha Theeram offers visitors a chance to experience nature,
              traditional village activities, and the peaceful lifestyle of
              Kulashekaramangalam, Vaikom.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Water Activities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
              <h5 className="text-xl font-bold text-teal-700">
                🚣 Water Experiences
              </h5>

              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Kayaking Experiences (1.5 Hour & 3 Hour Options)</li>
                <li>• Country Boat Ride</li>
                <li>• Kottavanchi Experience</li>
                <li>• Fishing Experience</li>
                <li>• Traditional Water Activities</li>
                <li>• Traditional Village Activities</li>
              </ul>
            </div>


            {/* Village Activities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
              <h5 className="text-xl font-bold text-emerald-700">
                🌴 Village Experiences
              </h5>

              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Coir Making Demonstration</li>
                <li>• Coir Product Experience</li>
                <li>• Palm Leaf Craft</li>
                <li>• Traditional Village Activities</li>
                <li>• Toddy Tapping Demonstration</li>
              </ul>
            </div>


            {/* Relaxation */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
              <h5 className="text-xl font-bold text-orange-600">
                🌿 Relax & Explore
              </h5>

              <ul className="text-slate-600 text-sm space-y-2">
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
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Our Guiding Pillars</h3>
            <h4 className="text-2xl md:text-3xl font-extrabold">How We Operate Day to Day</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-teal-400 font-extrabold text-2xl">01.</div>
              <h5 className="font-bold text-lg text-white">Women-Led Tourism</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                A four-member local women team manages the initiative, creating opportunities through responsible tourism and community participation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-teal-400 font-extrabold text-2xl">02.</div>
              <h5 className="font-bold text-lg text-white">Eco Conservation</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                We focus on preserving local traditions, waterways, and village experiences while sharing them with visitors.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-teal-400 font-extrabold text-2xl">03.</div>
              <h5 className="font-bold text-lg text-white">Safe Kayaking Experience</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Visitors receive life jackets and basic instructions before kayaking. Our team focuses on providing a comfortable and enjoyable experience for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-extrabold text-slate-800">Ready to Explore Arival Thoodu?</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Join us for a peaceful kayaking journey through Arival Thoodu and experience the nature, traditions, and village charm of Kulashekaramangalam, Vaikom.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300"
            >
              Book A Kayaking Tour
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
