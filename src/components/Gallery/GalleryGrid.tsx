import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../../data/gallery';
import { GalleryItem, EventType } from '../../types/event';
import { LightboxModal } from './LightboxModal';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { MapPin, Maximize2 } from 'lucide-react';
import { clsx } from 'clsx';

export const GalleryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: { label: string; value: string }[] = [
    { label: 'All Celebrations', value: 'all' },
    { label: 'Weddings', value: 'wedding' },
    { label: 'Birthdays', value: 'birthday' },
    { label: 'Corporate Galas', value: 'corporate' },
    { label: 'College Fests', value: 'college' },
    { label: 'Receptions', value: 'reception' },
    { label: 'Private VIP', value: 'private' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter as EventType);

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Visual Portfolio"
          title="Celebration Gallery &"
          highlightText="Memories."
          subtitle="Explore real event setups executed by Eventrix across royal weddings, milestone birthdays, and corporate galas."
          lightMode
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={clsx(
                'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer',
                activeFilter === cat.value
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="double-bezel p-1.5 bg-slate-900/80 border border-purple-500/20 group cursor-pointer"
              >
                <div className="double-bezel-inner relative h-72 sm:h-80 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Details Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-purple-600 text-white inline-block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-purple-200 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
};
