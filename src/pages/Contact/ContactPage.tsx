import React, { useState } from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Instagram, Facebook, Youtube, Linkedin, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'wedding',
    eventDate: '',
    location: '',
    guestCount: '150-300',
    services: ['decoration', 'catering'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-[#faf8ff] py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionTitle
            eyebrow="Connect With Eventrix"
            title="Let's Create Something"
            highlightText="Unforgettable."
            subtitle="Have questions about packages, menu tastings, or venue availability? Send us your inquiry or visit our Event Tech Lounge."
          />
        </div>
      </section>

      {/* Main Grid: Form + Info Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Container */}
          <div className="lg:col-span-7">
            <div className="double-bezel p-2 bg-white shadow-2xl">
              <div className="double-bezel-inner p-6 sm:p-10 bg-gradient-to-b from-white via-purple-50/30 to-white">
                <div className="flex items-center justify-between border-b border-purple-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Direct Event Inquiry</span>
                    <h3 className="text-2xl font-extrabold text-slate-950 font-heading">Tell Us What You're Celebrating</h3>
                  </div>
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-950">Inquiry Received!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you <strong className="text-slate-900">{formData.name}</strong>. Our senior event director will review your details and contact you shortly.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Event Type</label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                          <option value="wedding">Wedding & Marriage</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="corporate">Corporate Gala</option>
                          <option value="college">College Fest</option>
                          <option value="reception">Reception</option>
                          <option value="private">Private VIP Event</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Tentative Event Date</label>
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Location / Venue City</label>
                        <input
                          type="text"
                          placeholder="e.g. Udaipur / Mumbai"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase mb-1">Message / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your decor style, food preferences, or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button variant="primary" size="lg" fullWidth icon={Send} type="submit">
                        Submit Event Inquiry
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Info Side Panel + Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="double-bezel p-2 bg-slate-900 text-white shadow-2xl">
              <div className="double-bezel-inner p-6 sm:p-8 bg-slate-950 border border-purple-800/50 space-y-6">
                <div>
                  <span className="text-xs font-bold text-pink-300 uppercase tracking-widest">Global HQ & Contact</span>
                  <h3 className="text-2xl font-black font-heading text-white mt-1">EVENTRIX</h3>
                  <p className="text-xs text-purple-200">"Your Event. Our Everything."</p>
                </div>

                <div className="space-y-4 text-xs text-slate-300 border-t border-purple-900/60 pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Main Headquarters:</strong>
                      <span>Eventrix Global Tech Tower, MG Road, Financial District, Metro City, India</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <strong className="text-white block">Direct Helpline:</strong>
                      <a href="tel:+919876543210" className="text-purple-300 hover:underline">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <strong className="text-white block">Official Email:</strong>
                      <a href="mailto:hello@eventrix.com" className="text-purple-300 hover:underline">hello@eventrix.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <strong className="text-white block">Working Hours:</strong>
                      <span>Monday – Sunday: 9:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="pt-2 border-t border-purple-900/60">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Connect On Social</span>
                  <div className="flex items-center gap-3">
                    {[Instagram, Facebook, Youtube, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-8 h-8 rounded-full bg-purple-900/80 border border-purple-700 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-700 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="double-bezel p-1.5 bg-slate-900 shadow-xl overflow-hidden rounded-2xl h-64 relative">
              <div className="double-bezel-inner w-full h-full bg-slate-800 flex items-center justify-center text-center p-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Location Map Preview"
                  className="w-full h-full object-cover opacity-40 absolute inset-0"
                />
                <div className="relative z-10 space-y-2">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto animate-bounce" />
                  <h5 className="font-bold text-white text-sm">Eventrix Event Tech Center</h5>
                  <p className="text-[11px] text-purple-200">Interactive Location Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
