import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Sparkles } from 'lucide-react';
import { GalleryItem } from '../../types/event';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full bg-slate-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-purple-700 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Image Preview */}
            <div className="lg:col-span-8 bg-black flex items-center justify-center relative min-h-[350px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Content Details Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-900 text-purple-200 border border-purple-700 mb-4">
                  <Sparkles className="w-3 h-3 text-pink-300" />
                  {item.category} Event
                </span>
                <h3 className="text-2xl font-bold font-heading mb-3">
                  {item.title}
                </h3>
                
                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/60 text-xs text-purple-200">
                <p className="font-semibold text-white mb-1">Managed By Eventrix</p>
                <p className="text-[11px] text-slate-300">
                  Full end-to-end execution including theme decor, multi-cuisine catering, audio-visual stage tech, and candid media coverage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
