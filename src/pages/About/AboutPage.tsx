import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { handleOpenPlanner } = useOutletContext<{ handleOpenPlanner: () => void }>();

  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-[#faf8ff] py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionTitle
            eyebrow="About Eventrix"
            title="Reinventing The Way"
            highlightText="Celebrations Are Built."
            subtitle="Eventrix is a full-service event management platform created to eradicate vendor coordination stress and bring luxury event tech under one single roof."
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              "Why manage 7 vendors when Eventrix can manage everything?"
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We realized that event hosts — whether a father preparing for his daughter’s wedding or a corporate communications head organizing an annual gala — were spending their most important days answering 50+ stressed phone calls instead of enjoying the celebration.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Eventrix solves this by building dedicated internal teams across <strong className="text-purple-950">Decoration, Catering, DJ Rigs, Photography, and Videography</strong>. You get a single dedicated manager, a unified transparent estimate, and 100% single-point accountability.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <ShieldCheck className="w-6 h-6 text-purple-700 mb-2" />
                <h4 className="font-bold text-slate-950 text-sm">100% Quality Assurance</h4>
                <p className="text-xs text-slate-500 mt-1">In-house culinary chefs & pro audiovisual hardware.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <HeartHandshake className="w-6 h-6 text-purple-700 mb-2" />
                <h4 className="font-bold text-slate-950 text-sm">Zero Vendor Blame</h4>
                <p className="text-xs text-slate-500 mt-1">Single point of contact from setup to teardown.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="double-bezel p-2 bg-white shadow-2xl">
              <div className="double-bezel-inner overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                  alt="Eventrix Leadership & Team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Commitments"
            title="The Principles That Guide"
            highlightText="Every Eventrix Execution."
            lightMode
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Uncompromising Quality',
                desc: 'From 100% pure veg hygiene standards to Sony FX3 cinema rigs, we never compromise on execution specs.'
              },
              {
                title: 'Absolute Transparency',
                desc: 'Detailed itemized proposals with zero hidden vendor markups or last-minute surprise fees.'
              },
              {
                title: 'Emotional Respect',
                desc: 'We treat every wedding, birthday, and celebration with the reverence and personal care it deserves.'
              }
            ].map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/50 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-800 text-pink-300 flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-xl text-white font-heading">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="double-bezel p-2 bg-white shadow-xl">
          <div className="double-bezel-inner p-8 bg-purple-50/50 space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-950 font-heading">
              Experience the Eventrix difference for your next celebration
            </h3>
            <p className="text-sm text-slate-600">
              Let our team handle decoration, food, music, photography, and videography.
            </p>
            <div>
              <Button variant="primary" size="lg" onClick={handleOpenPlanner}>
                Plan Your Event Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
