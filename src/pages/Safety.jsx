import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, HelpCircle } from 'lucide-react';
import RiverDivider from '../components/RiverDivider';

export default function Safety() {
  const rules = [
    {
      title: 'Always Wear Your Life Jacket',
      desc: 'Life jackets must be worn properly during the kayaking experience. Our team will help ensure a comfortable and secure fit before starting.',
    },
    {
      title: 'Follow Safety Instructions',
      desc: 'Listen carefully to the instructions provided before kayaking. Follow the suggested route and avoid unnecessary risks while on the water.',
    },
    {
      title: 'Protect Arival Thoodu',
      desc: 'Help us keep our waterway clean. Avoid throwing waste into the water and respect the plants, birds, and natural surroundings.',
    },
    {
      title: 'Beginners are Welcome',
      desc: 'Previous kayaking experience is not required. Beginners, families, and first-time visitors can enjoy kayaking with proper safety measures.',
    },
  ];

  const preparations = [
    { title: 'Recommended Dress Code', desc: 'Lightweight, quick-drying clothing (polyester or nylon) is ideal. Avoid heavy denim or cotton that holds water. Sandals or water shoes are best.' },
    { title: 'Sun & Moisture Protection', desc: 'A hat, sunglasses, sunscreen, and a spare set of clothes are recommended for a comfortable outdoor experience.' },
    { title: 'Valuables & Electronics', desc: 'Visitors are advised to safely keep personal belongings. Waterproof protection is recommended for phones and electronics near water.' },
  ];

  return (
    <div className="bg-sand-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-xs font-bold text-clay-500 uppercase tracking-[0.2em]">Safety Guidelines</h1>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
            Rules, Safety & Preparation
          </h2>
          <RiverDivider className="text-gold-500" />
          <p className="text-ink-400 font-medium">
            Your safety and comfort are our priority. Read these guidelines before exploring the peaceful waters of Arival Thoodu, Kulashekaramangalam, Vaikom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-sand-50 border border-sand-300 rounded-3xl p-8 lg:p-12 shadow-xl shadow-ink-900/5">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-clay-50 text-clay-500 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>Safety First Experience</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900 tracking-tight">
              Safety is Non-Negotiable
            </h3>

            <p className="text-ink-500 text-sm leading-relaxed">
              Before every kayaking experience, guests receive basic instructions and safety guidance. Life jackets are provided for all participants, and our local kayaking team helps visitors enjoy Arival Thoodu safely and comfortably.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-sm">
                <div className="p-1 bg-lagoon-50 text-lagoon-600 rounded-lg mt-0.5">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-ink-900">Quality Single/Double Sit-on-top Kayaks</h4>
                  <p className="text-ink-400 text-xs mt-0.5">Stable kayaks designed for beginners and visitors to enjoy a comfortable paddling experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <div className="p-1 bg-lagoon-50 text-lagoon-600 rounded-lg mt-0.5">
                  <HeartHandshake className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-ink-900">Local Kayaking Support Team</h4>
                  <p className="text-ink-400 text-xs mt-0.5">Our local team provides instructions, assistance, and support throughout the kayaking experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md">
            <img
              src="/images/evening_sunset.png"
              alt="Kayaking equipment and safety setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink-900/10" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-semibold text-ink-900 text-center">Golden Rules on the Water</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, idx) => (
              <div key={idx} className="bg-sand-50 rounded-3xl p-8 border border-sand-300 shadow-md shadow-ink-900/5 space-y-3 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-clay-500" />
                <h4 className="font-extrabold text-base text-ink-900">{rule.title}</h4>
                <p className="text-ink-500 text-sm leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ink-900 text-sand-50 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">How to Prepare</h3>
            <h4 className="font-serif text-2xl font-semibold">Pre-Departure Checklists</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparations.map((prep, idx) => (
              <div key={idx} className="space-y-3">
                <h5 className="font-bold text-base text-sand-50">{prep.title}</h5>
                <p className="text-sand-300 text-xs leading-relaxed">{prep.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-sand-50 border border-sand-300 rounded-3xl p-8 shadow-lg text-center space-y-4">
          <HelpCircle className="h-8 w-8 text-lagoon-600 mx-auto" />
          <h4 className="font-serif font-semibold text-lg text-ink-900">Still have safety concerns?</h4>
          <p className="text-ink-400 text-sm leading-relaxed">
            We are happy to answer questions about kayaking suitability, group visits, family experiences, and tour details.
          </p>
          <a
            href="mailto:safety@sthreeshakthikayaking.com"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-sand-200 hover:bg-sand-300 text-ink-700 font-bold rounded-full text-xs transition-colors"
          >
            Email Safety Team
          </a>
        </div>

      </div>
    </div>
  );
}
