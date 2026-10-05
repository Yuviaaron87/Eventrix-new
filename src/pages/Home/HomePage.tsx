import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall, Layers, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { EventCard } from '../../components/EventCard/EventCard';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { DifferentiatorSection } from '../../components/Differentiator/DifferentiatorSection';
import { FatherStorySection } from '../../components/StorySection/FatherStorySection';
import { FoodCateringShowcase } from '../../components/FoodCatering/FoodCateringShowcase';
import { TestimonialCard } from '../../components/TestimonialCard/TestimonialCard';
import { EVENT_CATEGORIES } from '../../data/events';
import { EVENT_SERVICES } from '../../data/services';
import { TESTIMONIALS } from '../../data/testimonials';
import { EVENT_PACKAGES } from '../../data/packages';
import { ROUTES } from '../../constants/route';

export const HomePage: React.FC = () => {
  const { handleOpenPlanner } = useOutletContext<{ handleOpenPlanner: (eventType?: string) => void }>();

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 overflow-hidden bg-gradient-to-b from-purple-100/60 via-purple-50/40 to-[#faf8ff]">
        {/* Animated Background Mesh Blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-300/30 via-pink-300/20 to-indigo-300/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
                <span>All-In-One Luxury Event Tech Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 font-heading tracking-tight leading-[1.1]"
              >
                Your Event.{' '}
                <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-900 bg-clip-text text-transparent font-serif italic block mt-1">
                  Our Everything.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                From royal weddings and birthdays to corporate galas and college events, Eventrix brings every detail together — from decoration and gourmet catering to music, photography, and videography.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Button variant="primary" size="lg" icon={Calendar} onClick={() => handleOpenPlanner()}>
                  Plan My Event
                </Button>
                <Link to={ROUTES.SERVICES}>
                  <Button variant="outline" size="lg" showTrailingIcon={false}>
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Floating Checkmark Micro-badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-700"
              >
                {['Decoration', 'Catering', 'DJ & Music', 'Photography', 'Videography'].map((srv, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-purple-100 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    {srv}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Visual Hero Collage */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="double-bezel p-2 bg-white/70 shadow-2xl relative"
              >
                <div className="double-bezel-inner overflow-hidden relative rounded-2xl">
                  {/* Main Featured Image */}
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Eventrix Luxury Event Production"
                    className="w-full h-[400px] sm:h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Right Floating Badge */}
                  <div className="absolute top-4 right-4 glass-pill px-4 py-2 rounded-full text-xs font-extrabold text-purple-950 flex items-center gap-2 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-purple-700" />
                    <span>One Platform • 100% Coordinated</span>
                  </div>

                  {/* Bottom Left Floating Card overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-dark p-4 rounded-2xl text-white space-y-2 border border-purple-400/30 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">EVENTRIX GUARANTEE</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <h4 className="font-bold text-sm text-white font-heading">
                      Single Dedicated Manager
                    </h4>
                    <p className="text-[11px] text-purple-200 leading-tight">
                      Zero vendor phone calls on your event day. We coordinate food, decor, audio, & media in real time.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Particle elements */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block double-bezel p-1.5 bg-white shadow-xl animate-float">
                <div className="double-bezel-inner px-4 py-3 bg-purple-900 text-white flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-pink-200">500+ Celebrations</span>
                    <span className="text-[10px] text-purple-300">Managed with 4.9★ rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / VALUE STRIP SECTION */}
      <section className="py-12 bg-white border-y border-purple-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '500+', label: 'Events Managed', icon: Calendar, sub: 'Weddings, Galas & Parties' },
              { num: '7+', label: 'Event Services', icon: Layers, sub: 'Decor, Catering, DJ, Media' },
              { num: '100%', label: 'End-to-End Coordination', icon: ShieldCheck, sub: 'Zero Vendor Stress' },
              { num: '1', label: 'Dedicated Event Team', icon: Users, sub: 'Single Point Accountable' }
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/80 hover:border-purple-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-2">
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-purple-950 font-heading">
                    {stat.num}
                  </div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {stat.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENT TYPES SECTION */}
      <section className="py-24 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Whatever You're Celebrating"
            title="We Handle It"
            highlightText="End-To-End."
            subtitle="Select your event type to configure decorations, catering menus, DJ rigs, and cinematic media."
          />

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
        </div>
      </section>

      {/* MAIN DIFFERENTIATOR SECTION */}
      <DifferentiatorSection onOpenPlanner={() => handleOpenPlanner()} />

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Complete Service Catalog"
            title="Everything Your Event Needs"
            highlightText="Under One Roof."
            subtitle="No separate contracts, no conflicting timelines. Five core event services synchronized by Eventrix."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_SERVICES.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                onSelectService={() => handleOpenPlanner()}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOD & CATERING SHOWCASE */}
      <FoodCateringShowcase onOpenPlanner={() => handleOpenPlanner()} />

      {/* FATHER STORY SECTION */}
      <FatherStorySection onOpenPlanner={() => handleOpenPlanner()} />

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            eyebrow="4-Step Seamless Execution"
            title="How Eventrix Works"
            highlightText="Step By Step."
            subtitle="From your first click to the final dance, here is how we guarantee 100% stress-free events."
            lightMode
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Tell Us About Your Event',
                desc: 'Select Wedding, Birthday, Corporate, or Fest. Specify your date, location & guest count in 2 minutes.'
              },
              {
                num: '02',
                title: 'Choose Your Services',
                desc: 'Select required services: Decor, Catering (Veg/Non-Veg), DJ Sound, Photography, & Drone Videography.'
              },
              {
                num: '03',
                title: 'Customize Experience',
                desc: 'Personalize food cuisines, floral mandap themes, music genres, and album formats.'
              },
              {
                num: '04',
                title: 'Eventrix Handles Rest',
                desc: 'Our on-site team manages logistics, setups, food quality, and timings. You simply enjoy the event!'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="double-bezel p-1 bg-slate-900/90 border border-purple-500/20"
              >
                <div className="double-bezel-inner p-6 bg-slate-950/80 border border-purple-500/20 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <span className="text-4xl font-black text-purple-400/80 font-heading block mb-2">
                      {step.num}
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-purple-900/40 text-[10px] text-pink-300 font-bold uppercase tracking-wider">
                    Phase {idx + 1} Managed
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Customizable Event Bundles"
            title="Curated Event Packages"
            highlightText="For Every Scale."
            subtitle="Whether an intimate anniversary gathering or a 2,000-guest royal wedding, build your package effortlessly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`double-bezel p-1 h-full flex flex-col justify-between ${
                  pkg.isPopular ? 'border-2 border-purple-600 shadow-xl' : ''
                }`}
              >
                <div className="double-bezel-inner p-6 bg-white flex flex-col justify-between h-full">
                  <div>
                    {pkg.isPopular && (
                      <span className="px-3 py-1 rounded-full bg-purple-900 text-white text-[10px] font-extrabold uppercase tracking-wider inline-block mb-3">
                        ★ Most Popular Choice
                      </span>
                    )}

                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-purple-700 font-semibold mt-1 mb-3">
                      {pkg.priceNote}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {pkg.tagline}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold text-slate-950 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      {pkg.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-purple-100">
                    <Button
                      variant={pkg.isPopular ? 'primary' : 'outline'}
                      size="sm"
                      fullWidth
                      onClick={() => handleOpenPlanner()}
                    >
                      Customize Package
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Verified Client Experiences"
            title="What Families & Brands Say"
            highlightText="About Eventrix."
            subtitle="Read real stories from fathers, corporate leads, and hosts who trusted Eventrix with their special day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL DRAMATIC CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/80 border border-purple-700 text-purple-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            Your Celebration Partner
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-heading leading-tight text-white">
            Your Celebration Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us what you're planning. We will take care of the rest — from first setup to final photograph.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" icon={Calendar} onClick={() => handleOpenPlanner()}>
              Plan My Event Now
            </Button>
            <Link to={ROUTES.CONTACT}>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white/40 hover:bg-white/10" showTrailingIcon={false}>
                Talk to Eventrix Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
