import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, HeartHandshake, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Connect With Us</h1>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact Haritha Theeram
          </h2>
          <p className="text-slate-500 font-medium">
            Have questions about kayaking, village experiences, group visits, or Arival Thoodu tourism activities? Connect with our team for more information.
          </p>
        </div>

        {/* Main Grid: Details vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />

              <h3 className="font-extrabold text-xl">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect with Haritha Theeram Kayaking and experience the peaceful waters of Arival Thoodu at Kulashekaramangalam, Vaikom.
              </p>

              <div className="space-y-4 pt-2">

                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Haritha Theeram Kayaking,
                    Kulashekaramangalam,
                    Vaikom, Kottayam,
                    Kerala - 686608</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-5 w-5 text-teal-400 shrink-0" />
                  <a href="tel:+919876543210" className="text-slate-300 hover:text-teal-400 transition-colors">+91 94000 93504</a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-teal-400 shrink-0" />
                  <a href="mailto:harithatheeramkayaking@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors">harithatheeramkayaking@gmail.com</a>

                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Clock className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />

                  <div className="text-slate-300">
                    <p className="font-semibold">Operating Hours</p>

                    <p className="text-xs text-slate-400 mt-1">
                      Morning Experience: 6:00 AM - 10:00 AM
                    </p>

                    <p className="text-xs text-slate-400">
                      Afternoon Experience: 12:00 PM - 3:00 PM
                    </p>

                    <p className="text-xs text-slate-400">
                      Evening Experience: 4:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md flex items-start space-x-3">
              <HeartHandshake className="h-6 w-6 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Responsible Travel</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  We encourage responsible tourism by protecting Arival Thoodu, reducing plastic waste, and respecting the surrounding nature and local community.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form (8 Columns) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-scale-up">
                <div className="mx-auto bg-emerald-50 text-emerald-600 p-4 rounded-full w-fit">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Message Sent Successfully!</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our team organizers will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-extrabold text-xl text-slate-800 tracking-tight">Send Us A Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Nair"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Kayaking or group visit enquiry"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Type your message details here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-teal-600 disabled:opacity-50 transition-all duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Stylized Maps component mock */}
        {/* Google Map Location */}

        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100 overflow-hidden space-y-6">


          <div className="space-y-1">

            <h3 className="font-extrabold text-lg text-slate-800">

              Visit Location

            </h3>


            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest flex items-center">

              <MapPin className="h-4 w-4 text-rose-500 mr-1" />

              <span>
                Arival Thoodu, Kulashekaramangalam, Vaikom
              </span>

            </p>

          </div>



          {/* Google Map */}


          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner">


            <iframe

              title="Haritha Theeram Kayaking Location"

              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.752644100178!2d76.39989364239504!3d9.792974184119416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08790039166143%3A0xe9bd7b2b8b7431f7!2sHarith%20Theeram!5e0!3m2!1sen!2sin!4v1780587924732!5m2!1sen!2sin"

              width="100%"

              height="420"

              style={{ border: 0 }}

              allowFullScreen=""

              loading="lazy"

              referrerPolicy="no-referrer-when-downgrade"

            />


          </div>



          {/* Location Details */}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">


            <div>


              <h4 className="font-extrabold text-slate-900">

                Haritha Theeram Kayaking

              </h4>


              <p className="text-slate-500 text-sm mt-1">

                Located near Arival Thoodu, Kulashekaramangalam, Vaikom —
                the starting point of our kayaking experience.

              </p>


            </div>



            <a

              href="https://www.google.com/maps/search/?api=1&query=Harith+Theeram+Kulashekaramangalam+Vaikom"

              target="_blank"

              rel="noopener noreferrer"

              className="px-5 py-3 rounded-xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition whitespace-nowrap"

            >

              Get Directions


            </a>


          </div>


        </div>

        {/* Premium map mockup using beautiful SVGs and styles */}
        <div className="relative aspect-[21/9] bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center shadow-inner">
          {/* Minimalist Grid Pattern simulating roads */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] z-0" />

          {/* Visual Backwater curves simulating water */}
          <svg className="absolute inset-0 w-full h-full text-teal-300/40 z-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,100 C150,150 250,50 500,120 C750,190 850,20 1200,80 L1200,300 L-100,300 Z" fill="currentColor" />
            <path d="M-100,160 C200,200 450,110 700,210 C950,310 1000,130 1300,190 L1300,300 L-100,300 Z" fill="#0d9488" fillOpacity="0.1" />
          </svg>

          {/* Stylized Road Lines */}
          <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-200/60 -translate-y-1/2 rotate-[5deg] z-0" />
          <div className="absolute left-1/3 top-0 w-4 h-full bg-slate-200/60 -translate-x-1/2 -rotate-[15deg] z-0" />

          {/* Map Marker overlay card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 max-w-sm text-slate-800 space-y-3 flex items-start space-x-3.5 hover:scale-105 transition-transform duration-300">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
              <MapPin className="h-6 w-6 fill-teal-100 text-teal-600 animate-bounce" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-slate-900">Haritha Theeram Kayaking</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Located near Arival Thoodu, Kulashekaramangalam, Vaikom — the starting point of our kayaking experience.
              </p>
              <span className="inline-block text-[10px] bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded-full mt-1">
                Kayaking Starting Point
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
