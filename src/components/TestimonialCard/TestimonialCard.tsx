import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { Testimonial } from '../../types/event';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="double-bezel h-full flex flex-col justify-between"
    >
      <div className="double-bezel-inner p-6 sm:p-8 bg-white flex flex-col justify-between h-full">
        <div>
          {/* Header Quote Icon & Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
              <Quote className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <h4 className="text-base font-bold text-purple-950 font-heading mb-2">
            "{testimonial.eventTitle}"
          </h4>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
            "{testimonial.content}"
          </p>
        </div>

        {/* User Footer Profile */}
        <div className="pt-4 border-t border-purple-100 flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border border-purple-200"
          />
          <div className="text-left">
            <h5 className="font-bold text-slate-950 text-sm">{testimonial.name}</h5>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-medium text-purple-700">{testimonial.role}</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-purple-400" />
                {testimonial.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
