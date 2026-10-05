import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Leaf, Flame, Cake, GlassWater, Sparkles, CheckCircle2 } from 'lucide-react';
import { CATERING_ITEMS } from '../../data/catering';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Button } from '../Button/Button';
import { clsx } from 'clsx';

interface FoodCateringShowcaseProps {
  onOpenPlanner: () => void;
}

export const FoodCateringShowcase: React.FC<FoodCateringShowcaseProps> = ({ onOpenPlanner }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'veg' | 'nonveg' | 'dessert' | 'beverage'>('all');

  const filteredItems = activeCategory === 'all'
    ? CATERING_ITEMS
    : CATERING_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Gourmet Dining Experience"
          title="Good Events Deserve"
          highlightText="Great Food."
          subtitle="From 100% pure vegetarian royal feasts to sizzled non-veg grills, live chaat counters & craft mocktails."
        />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Menus', icon: Utensils },
            { id: 'veg', label: '100% Pure Veg', icon: Leaf },
            { id: 'nonveg', label: 'Non-Vegetarian Royal', icon: Flame },
            { id: 'dessert', label: 'Desserts & Sweets', icon: Cake },
            { id: 'beverage', label: 'Craft Beverages', icon: GlassWater }
          ].map((cat) => {
            const CatIcon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={clsx(
                  'px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'bg-purple-900 text-white shadow-lg shadow-purple-900/25 border border-purple-700'
                    : 'bg-purple-50 text-slate-700 hover:bg-purple-100 hover:text-purple-950 border border-purple-100'
                )}
              >
                <CatIcon className={clsx('w-4 h-4', isActive ? 'text-pink-300' : 'text-purple-600')} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Food Items Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="double-bezel h-full group"
              >
                <div className="double-bezel-inner p-4 bg-white flex flex-col justify-between h-full">
                  <div>
                    {/* Item Image */}
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={clsx(
                          'px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md shadow-md flex items-center gap-1',
                          item.category === 'veg' ? 'bg-emerald-600/90' :
                          item.category === 'nonveg' ? 'bg-rose-600/90' :
                          item.category === 'dessert' ? 'bg-pink-600/90' : 'bg-indigo-600/90'
                        )}>
                          {item.category === 'veg' && <Leaf className="w-3 h-3" />}
                          {item.category === 'nonveg' && <Flame className="w-3 h-3" />}
                          {item.category}
                        </span>
                      </div>

                      {item.popular && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3" /> Guest Favorite
                        </div>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-950 font-heading mb-1 group-hover:text-purple-700 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-purple-50 flex items-center justify-between text-xs text-purple-900 font-semibold">
                    <span className="flex items-center gap-1 text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" /> Prepared Fresh On-Site
                    </span>
                    <span className="text-purple-700 font-bold">Eventrix Certified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Catering Feature Highlights Box */}
        <div className="double-bezel p-2 bg-purple-950 text-white max-w-4xl mx-auto shadow-2xl">
          <div className="double-bezel-inner bg-slate-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-800/50">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                Tailored Catering Experience
              </span>
              <h4 className="text-xl font-extrabold text-white font-heading">
                Want a custom menu tasting session for your guests?
              </h4>
              <p className="text-xs text-slate-300">
                Choose pure veg, non-veg, or hybrid cuisine combinations in your event plan.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenPlanner}>
              Configure Catering Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
