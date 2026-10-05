import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, CheckCircle2, ArrowDown, Calendar, Utensils, Music, Camera, Smile } from 'lucide-react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Button } from '../Button/Button';

interface FatherStorySectionProps {
  onOpenPlanner: () => void;
}

export const FatherStorySection: React.FC<FatherStorySectionProps> = ({ onOpenPlanner }) => {
  const timelineSteps = [
    {
      step: '01',
      title: 'Planning & Consultation',
      icon: Calendar,
      desc: 'The father meets with Eventrix. Selects Wedding package, customizes food & decor preferences in 15 minutes.'
    },
    {
      step: '02',
      title: 'Royal Mandap & Decor',
      icon: Sparkles,
      desc: 'Our floral architects transform the hall with royal marigold drapes, glass mandap, and entrance arches.'
    },
    {
      step: '03',
      title: 'Gourmet Banquet Catering',
      icon: Utensils,
      desc: 'Master chefs serve piping hot live tandoori kebabs, rich biryani, live chaat, and sweet rabri.'
    },
    {
      step: '04',
      title: 'Sangeet DJ & Lighting',
      icon: Music,
      desc: 'High-energy sound rigs and pro DJ keep the family dancing on an intelligent LED dance floor.'
    },
    {
      step: '05',
      title: 'Cinematic Media Capture',
      icon: Camera,
      desc: '4K cameras and aerial drones capture every tear, laugh, and emotion without disrupting moments.'
    },
    {
      step: '06',
      title: 'Flawless Celebration',
      icon: Smile,
      desc: 'The father sits proudly next to his daughter, sipping tea, without answering a single vendor phone call.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/60 via-purple-100/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="A Real Celebration Story"
          title="One Father. One Daughter."
          highlightText="One Unforgettable Day."
          subtitle="How Eventrix transforms wedding stress into cherished family memories."
        />

        {/* Narrative Card */}
        <div className="double-bezel p-2 max-w-5xl mx-auto bg-white/90 shadow-2xl mb-16">
          <div className="double-bezel-inner p-6 sm:p-12 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/30 border border-purple-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Story Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-purple-200">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Father & Daughter Wedding Moment"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/90 text-white text-xs font-bold mb-1">
                    <Heart className="w-3.5 h-3.5 fill-current" /> Rajesh & Ananya's Wedding
                  </div>
                  <p className="text-xs text-purple-100 italic">"I didn't answer a single vendor call on my daughter's wedding day."</p>
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  The Burden Resolved
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading leading-tight">
                  Imagine a father preparing for his daughter's wedding...
                </h3>

                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Normally, he would spend months stressed out — calling decorators for mandap changes, caterers for headcounts, photographers for timings, DJs for permits, and handling separate cash advances.
                  </p>
                  <p className="font-semibold text-purple-900">
                    Instead, he simply comes to Eventrix.
                  </p>
                  <p>
                    He selects <span className="font-bold text-slate-950">Wedding</span>, picks his catering, decoration, DJ, photography, and videography. Eventrix brings the entire synchronized team together under one dedicated manager.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-100/70 border border-purple-200 flex items-center justify-between text-purple-950 font-bold text-sm">
                  <span>From first setup to final photo, Eventrix manages everything.</span>
                  <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Timeline Progression */}
        <div className="max-w-4xl mx-auto mb-12">
          <h4 className="text-center text-xs font-extrabold uppercase tracking-widest text-purple-800 mb-8">
            How The Experience Unfolds
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="double-bezel p-1 bg-white"
                >
                  <div className="double-bezel-inner p-5 bg-purple-50/40 border border-purple-100 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-7 h-7 rounded-full bg-purple-900 text-white font-bold text-xs flex items-center justify-center">
                          {step.step}
                        </span>
                        <StepIcon className="w-5 h-5 text-purple-700" />
                      </div>
                      <h5 className="font-bold text-slate-950 text-base mb-1 font-heading">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Punchline Hero Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl">
            <h4 className="text-xl sm:text-2xl font-black font-heading font-serif italic text-purple-200">
              "You enjoy the moment. We handle the details."
            </h4>
          </div>
          <div>
            <Button variant="primary" size="lg" onClick={onOpenPlanner}>
              Create Your Family Event Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
