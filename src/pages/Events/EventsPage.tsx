import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { EventCard } from '../../components/EventCard/EventCard';
import { EVENT_CATEGORIES } from '../../data/events';
import { Button } from '../../components/Button/Button';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { handleOpenPlanner } = useOutletContext<{ handleOpenPlanner: (eventType?: string) => void }>();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-[#faf8ff] py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionTitle
            eyebrow="Events Managed By Eventrix"
            title="Whatever You're Celebrating,"
            highlightText="We Manage Everything."
            subtitle="From royal weddings to intimate rooftop galas, explore how Eventrix brings decoration, food, sound, and media under one roof."
          />
        </div>
      </section>

      {/* Grid of Event Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_CATEGORIES.map((event, idx) => (
            <EventCard
              key={event.id}
              event={event}
              index={idx}
              onSelect={(id) => handleOpenPlanner(id)}
            />
          ))}
        </div>
      </section>

      {/* Custom Event CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="double-bezel p-2 bg-gradient-to-r from-purple-950 to-indigo-950 text-white shadow-2xl">
          <div className="double-bezel-inner p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/30">
            <div className="space-y-2">
              <span className="text-xs font-bold text-pink-300 uppercase tracking-widest">Planning a unique celebration?</span>
              <h3 className="text-2xl font-extrabold text-white font-heading">Have a custom theme or hybrid event in mind?</h3>
              <p className="text-xs text-slate-300">Our senior event directors work directly with you to craft bespoke packages.</p>
            </div>
            <Button variant="primary" size="lg" icon={Calendar} onClick={() => handleOpenPlanner()}>
              Configure Custom Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
