import React from 'react';
import { Sunrise, Sun, Sunset, Navigation } from 'lucide-react';
import PackageCard from '../components/PackageCard';

export default function Packages() {

  const packagesList = [
    {
      title: 'Morning Experience',

      description:
        'Begin your day with a peaceful kayaking journey through Arival Thoodu. Enjoy the fresh morning atmosphere, calm waters, greenery, and a traditional breakfast experience.',

      icon: Sunrise,

      tag: 'Morning Ride',

      tagColor:
        'bg-emerald-50 text-emerald-700 border border-emerald-200',

      inclusions: [
        '1.5 Hour Kayaking Experience',
        'Arival Thoodu Nature Trail',
        'Traditional Breakfast Experience',
        'Beginner Friendly Guidance',
        'Life Jackets & Safety Support',
      ],
    },


    {
      title: 'Village Explorer Experience',

      description:
        'A complete responsible tourism experience combining kayaking, local food, village activities, and the traditional lifestyle of Kulashekaramangalam, Vaikom.',

      icon: Sun,

      tag: 'Complete Experience',

      tagColor:
        'bg-orange-50 text-orange-700 border border-orange-200',

      inclusions: [
        '3 Hour Extended Experience',
        'Kayaking Through Arival Thoodu',
        'Traditional Kerala Meals',
        'Country Boat & Local Experiences',
        'Coir Making, Crafts & Village Activities',
      ],
    },


    {
      title: 'Evening Experience',

      description:
        'Experience the peaceful evening atmosphere of Arival Thoodu. Enjoy kayaking through calm waters surrounded by nature and village scenery.',

      icon: Sunset,

      tag: 'Nature Experience',

      tagColor:
        'bg-purple-50 text-purple-700 border border-purple-200',

      inclusions: [
        '1.5 Hour Evening Kayaking',
        'Tea & Traditional Snacks',
        'Nature Viewing Experience',
        'Photography Moments',
        'Safety Equipment Provided',
      ],
    },


    {
      title: 'Kayaking Experience',

      description:
        'Perfect for visitors who want to experience only kayaking and explore the peaceful waterways of Arival Thoodu.',

      icon: Navigation,

      tag: 'Kayak Only',

      tagColor:
        'bg-slate-100 text-slate-700 border border-slate-200',

      inclusions: [
        '1.5 Hour Kayaking Experience',
        'Kayak and Paddle Provided',
        'Basic Instructions Before Ride',
        'Life Jackets Included',
        'Suitable for Beginners and Families',
      ],
    },
  ];


  return (

    <div className="bg-slate-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">


        {/* Header */}

        <div className="text-center space-y-4 max-w-3xl mx-auto">

          <h1 className="text-xs font-bold text-teal-600 uppercase tracking-widest">

            Our Experiences

          </h1>


          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">

            Kayaking & Village Experience Packages

          </h2>


          <p className="text-slate-500 font-medium">

            Discover Arival Thoodu through kayaking, traditional activities,
            local food experiences, and the peaceful village lifestyle of
            Kulashekaramangalam, Vaikom.

          </p>

        </div>



        {/* Packages Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

          {packagesList.map((pkg, index) => (

            <PackageCard

              key={index}

              title={pkg.title}

              description={pkg.description}

              icon={pkg.icon}

              tag={pkg.tag}

              tagColor={pkg.tagColor}

              inclusions={pkg.inclusions}

            />

          ))}

        </div>



        {/* Information Box */}

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md max-w-3xl mx-auto text-center space-y-3">

          <h4 className="font-extrabold text-slate-800 text-sm">

            Looking for a customized experience?

          </h4>


          <p className="text-slate-500 text-xs font-medium">

            Family groups, students, travelers, and organizations can contact
            Haritha Theeram Kayaking for customized responsible tourism experiences.

          </p>


        </div>


      </div>

    </div>

  );
}