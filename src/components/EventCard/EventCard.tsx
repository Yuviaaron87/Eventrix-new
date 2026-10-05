import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Building2, GraduationCap, Crown, GlassWater, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EventCategoryInfo } from '../../types/event';
import { Button } from '../Button/Button';

const iconMap = {
  Sparkles,
  PartyPopper,
  Building2,
  GraduationCap,
  Crown,
  GlassWater
};

interface EventCardProps {
  event: EventCategoryInfo;
  onSelect: (eventId: string) => void;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect, index = 0 }) => {
  const IconComponent = iconMap[event.icon as keyof typeof iconMap] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="double-bezel h-full group cursor-pointer"
      onClick={() => onSelect(event.id)}
    >
      <div className="double-bezel-inner h-full p-5 flex flex-col justify-between overflow-hidden relative">
        {/* Top Image Preview Container */}
        <div>
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-5">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
              loading="lazy"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Badge pill */}
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 text-purple-950 backdrop-blur-md shadow-md">
              {event.badge}
            </div>

            {/* Icon Floating Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-purple-900/80 backdrop-blur-md border border-purple-400/40 flex items-center justify-center text-pink-300 shadow-lg">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-purple-100 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                {event.typicalGuestCount}
              </span>
            </div>
          </div>

          {/* Title and Short Description */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-purple-700 transition-colors font-heading mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {event.shortDesc}
          </p>

          {/* Highlights bullets */}
          <div className="space-y-1.5 mb-6">
            {event.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-3 border-t border-purple-100">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onSelect(event.id);
            }}
            className="group-hover:bg-purple-900 group-hover:text-white group-hover:border-purple-800 transition-all"
          >
            Plan This Event
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
