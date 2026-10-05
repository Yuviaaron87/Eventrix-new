import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, DollarSign, AlertCircle, CheckCircle, Sparkles, ShieldCheck, HeartHandshake, Layers, ArrowRight, UserCheck } from 'lucide-react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Button } from '../Button/Button';

interface DifferentiatorSectionProps {
  onOpenPlanner: () => void;
}

export const DifferentiatorSection: React.FC<DifferentiatorSectionProps> = ({ onOpenPlanner }) => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'eventrix'>('eventrix');

  return (
    <section id="why-eventrix" className="py-24 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="The Eventrix Difference"
          title="Stop Managing Vendors."
          highlightText="Start Enjoying Your Event."
          subtitle="Why call 7 different vendors and handle 7 payments when Eventrix brings your entire event under one dedicated roof?"
          lightMode
        />

        {/* Interactive Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full bg-slate-800/80 border border-purple-500/30 flex items-center gap-2 shadow-inner">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'traditional'
                  ? 'bg-rose-950 text-rose-200 border border-rose-700/50 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Traditional Multi-Vendor Chaos ❌
            </button>
            <button
              onClick={() => setActiveTab('eventrix')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'eventrix'
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white border border-purple-400/40 shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              The Eventrix Way ✨
            </button>
          </div>
        </div>

        {/* Comparison Graphic Card */}
        <div className="double-bezel p-2 bg-slate-900/90 border border-purple-500/30 shadow-2xl max-w-5xl mx-auto">
          <div className="double-bezel-inner bg-slate-950/80 p-6 sm:p-10 border border-purple-500/20">
            {activeTab === 'traditional' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 text-rose-300">
                  <AlertCircle className="w-6 h-6 text-rose-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-rose-200">Traditional Multi-Vendor Approach</h4>
                    <p className="text-xs text-rose-300/80">High stress, coordination headaches, blame-shifting, and 50+ phone calls on event day.</p>
                  </div>
                </div>

                {/* Vendor Flow Tree */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
                    <UserCheck className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-xs font-bold text-slate-200">You (Host)</span>
                  </div>

                  <div className="hidden md:flex items-center justify-center text-rose-500 font-extrabold text-xl">→</div>

                  {[
                    { label: 'Decorator', text: 'Separate Deposit' },
                    { label: 'Caterer', text: 'Separate Menu' },
                    { label: 'DJ & Sound', text: 'Separate Power Rigs' },
                    { label: 'Photographer', text: 'Separate Timing' },
                    { label: 'Videographer', text: 'Separate Deliveries' }
                  ].map((v, i) => (
                    <div key={i} className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs">
                      <span className="font-bold text-rose-300 block mb-0.5">{v.label}</span>
                      <span className="text-[10px] text-rose-400/80">{v.text}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <PhoneCall className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-200">Endless Phone Calls</h5>
                      <p className="text-xs text-slate-400 mt-1">Calling decorators for delays, caterers for food warmers, DJs for sound permits.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-200">Fragmented Payments</h5>
                      <p className="text-xs text-slate-400 mt-1">Managing 7 cash advances, hidden charges, and zero price transparency.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-200">Zero Single Accountability</h5>
                      <p className="text-xs text-slate-400 mt-1">If electricity fails or food is cold, vendors blame each other while you suffer.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-purple-900/50 border border-purple-500/40 text-purple-200">
                  <Sparkles className="w-6 h-6 text-pink-300 shrink-0 animate-spin-slow" />
                  <div>
                    <h4 className="font-bold text-base text-white">The Eventrix Centralized Solution</h4>
                    <p className="text-xs text-purple-200/90">One dedicated team, one contract, one single point of contact, complete peace of mind.</p>
                  </div>
                </div>

                {/* Eventrix Single Hub Graphic */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30">
                  <div className="text-center md:text-left space-y-1">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">You (Customer)</span>
                    <h4 className="text-2xl font-black text-white font-heading">Single Event Booking</h4>
                    <p className="text-xs text-slate-300">Select services & customize requirements</p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-600/50 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-900/80 border border-purple-400/50 text-center space-y-2 shadow-xl shrink-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" /> EVENTRIX PLATFORM
                    </div>
                    <h5 className="font-extrabold text-white text-lg">One Dedicated Event Manager</h5>
                    <p className="text-[11px] text-purple-200">Coordinates All 5 Services Flawlessly</p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-600/50 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  <div className="text-center md:text-right space-y-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Result</span>
                    <h4 className="text-2xl font-black text-white font-heading">100% Stress-Free Event</h4>
                    <p className="text-xs text-slate-300">You host & enjoy with your guests!</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-900/60">
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Single Contact Person</h5>
                      <p className="text-xs text-slate-300 mt-1">One dedicated Eventrix manager handles venue setup, menu timelines, and music artist schedules.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-start gap-3">
                    <Layers className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Transparent Unified Pricing</h5>
                      <p className="text-xs text-slate-300 mt-1">One bundled transparent estimate. No hidden vendor surcharges or last-minute price gouging.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">100% Guarantee & Quality</h5>
                      <p className="text-xs text-slate-300 mt-1">If any component needs adjustments, Eventrix takes full ownership immediately.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bottom Tagline Banner */}
            <div className="mt-8 pt-6 border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-xl font-extrabold text-white font-heading">
                  One Event. One Team. Everything Covered.
                </h4>
                <p className="text-xs text-purple-300">
                  Experience true peace of mind for your next wedding, birthday, or corporate gala.
                </p>
              </div>
              <Button variant="primary" size="md" onClick={onOpenPlanner}>
                Plan With Eventrix Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
