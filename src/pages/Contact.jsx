import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HeartHandshake, Clock } from 'lucide-react';
import RiverDivider from '../components/RiverDivider';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-sand-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-xs font-bold text-lagoon-600 uppercase tracking-[0.2em]">Connect With Us</h1>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
            Contact Haritha Theeram
          </h2>
          <RiverDivider className="text-gold-500" />
          <p className="text-ink-400 font-medium">
            Have questions about kayaking, village experiences, group visits, or Arival Thoodu tourism activities? Connect with our team for more information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-ink-900 text-sand-50 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

              <h3 className="font-serif font-semibold text-xl">Contact Information</h3>
              <p className="text-sand-300 text-sm leading-relaxed">
                Connect with Haritha Theeram Kayaking and experience the peaceful waters of Arival Thoodu at Kulashekaramangalam, Vaikom.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-sand-200">Haritha Theeram Kayaking, Kulashekaramangalam, Vaikom, Kottayam, Kerala - 686608</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-5 w-5 text-gold-400 shrink-0" />
                  <a href="tel:+919876543210" className="text-sand-200 hover:text-gold-300 transition-colors">+91 94000 93504</a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-gold-400 shrink-0" />
                  <a href="mailto:harithatheeramkayaking@gmail.com" className="text-sand-200 hover:text-gold-300 transition-colors">harithatheeramkayaking@gmail.com</a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Clock className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-sand-200">
                    <p className="font-semibold">Operating Hours</p>
                    <p className="text-xs text-sand-300 mt-1">Morning Experience: 6:00 AM - 10:00 AM</p>
                    <p className="text-xs text-sand-300">Afternoon Experience: 12:00 PM - 3:00 PM</p>
                    <p className="text-xs text-sand-300">Evening Experience: 4:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sand-50 border border-sand-300 rounded-3xl p-6 shadow-md flex items-start space-x-3">
              <HeartHandshake className="h-6 w-6 text-lagoon-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-ink-900 text-sm">Responsible Travel</h4>
                <p className="text-ink-400 text-xs mt-1 leading-relaxed">
                  We encourage responsible tourism by protecting Arival Thoodu, reducing plastic waste, and respecting the surrounding nature and local community.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-sand-50 border border-sand-300 rounded-3xl p-8 shadow-xl shadow-ink-900/5">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto bg-lagoon-50 text-lagoon-600 p-4 rounded-full w-fit">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-900">Message Sent Successfully!</h3>
                <p className="text-ink-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our team organizers will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-sand-200 hover:bg-sand-300 text-ink-700 font-bold rounded-full text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif font-semibold text-xl text-ink-900 tracking-tight">Send Us A Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-ink-700">Your Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={formData.name} onChange={handleChange}
                      placeholder="e.g. Maya Nair"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-lagoon-500 focus:border-lagoon-500 text-sm bg-sand-50 hover:bg-sand-100 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-ink-700">Email Address</label>
                    <input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-lagoon-500 focus:border-lagoon-500 text-sm bg-sand-50 hover:bg-sand-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-ink-700">Subject</label>
                  <input
                    id="subject" name="subject" type="text" required
                    value={formData.subject} onChange={handleChange}
                    placeholder="e.g. Kayaking or group visit enquiry"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-lagoon-500 focus:border-lagoon-500 text-sm bg-sand-50 hover:bg-sand-100 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-ink-700">Your Message</label>
                  <textarea
                    id="message" name="message" required
                    value={formData.message} onChange={handleChange}
                    rows="4"
                    placeholder="Type your message details here..."
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-lagoon-500 focus:border-lagoon-500 text-sm bg-sand-50 hover:bg-sand-100 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 disabled:opacity-50 transition-all duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="bg-sand-50 border border-sand-300 rounded-3xl p-8 shadow-xl shadow-ink-900/5 overflow-hidden space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-semibold text-lg text-ink-900">Visit Location</h3>
            <p className="text-ink-400 text-xs font-semibold uppercase tracking-widest flex items-center">
              <MapPin className="h-4 w-4 text-clay-500 mr-1" />
              <span>Arival Thoodu, Kulashekaramangalam, Vaikom</span>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-sand-300 shadow-inner">
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

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <div>
              <h4 className="font-serif font-semibold text-ink-900">Haritha Theeram Kayaking</h4>
              <p className="text-ink-400 text-sm mt-1">
                Located near Arival Thoodu, Kulashekaramangalam, Vaikom — the starting point of our kayaking experience.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Harith+Theeram+Kulashekaramangalam+Vaikom"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-ink-900 text-sand-50 text-sm font-bold hover:bg-lagoon-700 transition whitespace-nowrap"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
