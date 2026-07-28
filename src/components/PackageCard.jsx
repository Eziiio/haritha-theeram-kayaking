import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function PackageCard({ title, price, description, inclusions, icon: Icon, tag, tagColor }) {
  return (
    <div className="bg-sand-50 rounded-3xl border border-sand-300 p-8 shadow-xl shadow-ink-900/5 hover:shadow-2xl hover:shadow-lagoon-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">

      <div className="absolute top-0 left-0 w-full h-1.5 bg-gold-500" />

      {tag && (
        <span className={`absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${tagColor || 'bg-lagoon-50 text-lagoon-700'}`}>
          {tag}
        </span>
      )}

      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-lagoon-50 text-lagoon-700 rounded-2xl group-hover:bg-ink-900 group-hover:text-gold-400 transition-colors duration-300">
            {Icon && <Icon className="h-6 w-6" />}
          </div>
          <div>
            <h3 className="font-serif font-semibold text-xl text-ink-900 tracking-tight">{title}</h3>
            <p className="text-sm text-ink-400 font-medium">Kerala Adventure</p>
          </div>
        </div>

        {price && (
          <div className="mb-6 flex items-baseline">
            <span className="font-serif text-4xl font-semibold text-ink-900 tracking-tight">₹{price}</span>
            <span className="text-ink-400 text-sm font-semibold ml-2">/ person</span>
          </div>
        )}

        <p className="text-ink-500 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="border-t border-sand-200 pt-6 mb-8">
          <h4 className="text-xs font-bold text-ink-400 uppercase tracking-widest mb-4">What's Included</h4>
          <ul className="space-y-3">
            {inclusions.map((inclusion, idx) => (
              <li key={idx} className="flex items-center text-sm text-ink-600">
                <div className="p-0.5 bg-lagoon-50 text-lagoon-600 rounded-full mr-3 shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{inclusion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to={`/booking?package=${encodeURIComponent(title)}`}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:translate-x-0.5"
      >
        Book This Package
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
