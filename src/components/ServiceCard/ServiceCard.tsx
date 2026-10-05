import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Utensils, Music, Camera, Video, Check, ChevronDown, Sparkles } from 'lucide-react';
import { ServiceDetail } from '../../types/event';
import { Button } from '../Button/Button';
import { clsx } from 'clsx';

const iconMap = {
  Palette,
  Utensils,
  Music,
  Camera,
  Video
};

interface ServiceCardProps {
  service: ServiceDetail;
  onSelectService: (serviceId: string) => void;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="double-bezel h-full flex flex-col justify-between"
    >
      <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full">
        <div>
          {/* Header Icon + Title */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/25">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
              Complete Solution
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-950 font-heading mb-1">
            {service.title}
          </h3>
          <p className="text-xs font-semibold text-purple-700 mb-3 italic">
            "{service.tagline}"
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {service.shortDesc}
          </p>

          {/* Service Image Banner */}
          <div className="relative h-44 rounded-xl overflow-hidden mb-6 group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
              <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                High-End Execution
              </span>
              <span className="bg-purple-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white font-semibold">
                Eventrix Managed
              </span>
            </div>
          </div>

          {/* Core Feature Bullet Points */}
          <div className="space-y-2 mb-6">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Expandable Options Preview */}
          <div className="mb-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100/70 border border-purple-200/60 text-xs font-semibold text-purple-900 flex items-center justify-between transition-colors"
            >
              <span>Explore Available Styles ({service.options.length})</span>
              <ChevronDown className={clsx('w-4 h-4 transition-transform duration-300', expanded ? 'rotate-180' : '')} />
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 space-y-2"
                >
                  {service.options.map((opt, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">{opt.title}</span>
                        {opt.badge && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-200 text-purple-900">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 text-[11px] leading-tight">{opt.description}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-purple-100">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={() => onSelectService(service.id)}
          >
            Add {service.title.split(' ')[0]} To Plan
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
