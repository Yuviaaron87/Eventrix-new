import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronLeft, ChevronRight, Sparkles, Calendar, MapPin, Users, DollarSign, Utensils, Palette, Music, Camera, ShieldCheck, Heart } from 'lucide-react';
import { EventType, ServiceType, EventPlanState } from '../../types/event';
import { Button } from '../Button/Button';
import { clsx } from 'clsx';

interface InteractivePlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: EventType | '';
}

export const InteractivePlannerModal: React.FC<InteractivePlannerModalProps> = ({
  isOpen,
  onClose,
  initialEventType = ''
}) => {
  const [plannerState, setPlannerState] = useState<EventPlanState>({
    step: 1,
    eventType: initialEventType || 'wedding',
    eventName: '',
    eventDate: '',
    location: '',
    expectedGuests: '150-300 Guests',
    budgetRange: '$5,000 - $15,000',
    selectedServices: ['decoration', 'catering', 'dj_music', 'photography', 'videography'],
    foodPreference: 'both',
    foodCuisines: ['North Indian', 'Live Chaat', 'International Desserts'],
    decorationStyle: 'Modern Floral Luxury',
    musicPreference: 'Pro DJ & Sound Rigs',
    mediaPreference: 'Both (Cinematic Film + Aerial Drone)',
    specialNotes: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCity: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const eventTypes: { id: EventType; name: string; icon: string; desc: string }[] = [
    { id: 'wedding', name: 'Wedding & Marriage', icon: '💍', desc: 'Mandap decor, royal buffet, Sangeet DJ & video' },
    { id: 'birthday', name: 'Birthday Party', icon: '🎉', desc: 'Theme backdrops, cake & snack bar, live DJ' },
    { id: 'corporate', name: 'Corporate Event', icon: '🏢', desc: 'Stage truss, gourmet dining & executive recording' },
    { id: 'college', name: 'College Fest', icon: '🎓', desc: 'Massive concert rigs, pro DJ, food stalls & video' },
    { id: 'reception', name: 'Wedding Reception', icon: '👑', desc: 'Glass backdrops, grand entry pyros & live bar' },
    { id: 'private', name: 'Private VIP Party', icon: '🍸', desc: 'Intimate lounge decor, private chef & live band' }
  ];

  const allServices: { id: ServiceType; name: string; desc: string; icon: any }[] = [
    { id: 'decoration', name: 'Decoration & Theme', desc: 'Stage design, floral arches, entrance pathways & lighting', icon: Palette },
    { id: 'catering', name: 'Gourmet Catering', desc: 'Hygienic Veg/Non-Veg multi-cuisine buffets & live counters', icon: Utensils },
    { id: 'dj_music', name: 'DJ & Sound Rigs', desc: 'Concert sound systems, party DJs & live acoustic artists', icon: Music },
    { id: 'photography', name: 'Candid Photography', desc: 'High-res portraiture, candid emotions & luxury albums', icon: Camera },
    { id: 'videography', name: 'Cinematic Videography', desc: '4K cinema cameras, aerial drone films & 24h teasers', icon: Camera }
  ];

  const handleServiceToggle = (id: ServiceType) => {
    setPlannerState(prev => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter(s => s !== id) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const handleNext = () => {
    if (plannerState.step < 8) {
      setPlannerState(prev => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const handleBack = () => {
    if (plannerState.step > 1) {
      setPlannerState(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetPlanner = () => {
    setSubmitted(false);
    setPlannerState(prev => ({ ...prev, step: 1 }));
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="double-bezel max-w-4xl w-full bg-white shadow-2xl my-auto"
        >
          <div className="double-bezel-inner p-5 sm:p-8 bg-gradient-to-b from-white via-purple-50/20 to-white relative">
            {/* Header Close & Step Counter */}
            <div className="flex items-center justify-between border-b border-purple-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-sm">
                  {plannerState.step}/8
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 font-heading">
                    Eventrix Event Configurator
                  </h3>
                  <p className="text-xs text-purple-700 font-medium">
                    {plannerState.step === 1 && 'Step 1: Select Your Event Type'}
                    {plannerState.step === 2 && 'Step 2: Basic Event Details'}
                    {plannerState.step === 3 && 'Step 3: Choose Required Services'}
                    {plannerState.step === 4 && 'Step 4: Catering & Food Preferences'}
                    {plannerState.step === 5 && 'Step 5: Decoration & Stage Themes'}
                    {plannerState.step === 6 && 'Step 6: DJ Rigs & Music Entertainment'}
                    {plannerState.step === 7 && 'Step 7: Photography & Video Coverage'}
                    {plannerState.step === 8 && 'Step 8: Review & Complete Request'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-purple-100/80 text-purple-900 flex items-center justify-center hover:bg-purple-200 focus:outline-none transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full bg-purple-100 h-1.5 rounded-full overflow-hidden mb-8">
              <div
                className="bg-gradient-to-r from-purple-700 to-indigo-600 h-full transition-all duration-500"
                style={{ width: `${(plannerState.step / 8) * 100}%` }}
              />
            </div>

            {/* Submission Confirmation Screen */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xl">
                  <ShieldCheck className="w-10 h-10" />
                </div>

                <div className="max-w-lg mx-auto space-y-2">
                  <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
                    Plan Received Successfully 🎉
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-950 font-heading">
                    Your Event Plan is Ready!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you <span className="font-bold text-slate-900">{plannerState.contactName || 'Valued Customer'}</span>! Our senior Eventrix coordinator will review your <span className="font-bold text-purple-900">{plannerState.eventType}</span> plan and call you at <span className="font-bold text-slate-900">{plannerState.contactPhone || 'your phone'}</span> within 2 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-purple-100 pb-2 font-bold text-slate-900">
                    <span>Summary Reference</span>
                    <span className="text-purple-700">#EVX-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div><span className="text-slate-500">Event Type:</span> <strong className="capitalize">{plannerState.eventType}</strong></div>
                  <div><span className="text-slate-500">Guest Count:</span> <strong>{plannerState.expectedGuests}</strong></div>
                  <div><span className="text-slate-500">Selected Services ({plannerState.selectedServices.length}):</span> <strong>{plannerState.selectedServices.join(', ')}</strong></div>
                </div>

                <div>
                  <Button variant="primary" size="md" onClick={resetPlanner}>
                    Back to Website
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* STEP 1: Select Event */}
                {plannerState.step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      What event are you celebrating?
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {eventTypes.map((evt) => {
                        const isSelected = plannerState.eventType === evt.id;
                        return (
                          <div
                            key={evt.id}
                            onClick={() => setPlannerState(prev => ({ ...prev, eventType: evt.id }))}
                            className={clsx(
                              'p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3',
                              isSelected
                                ? 'bg-purple-50 border-purple-600 shadow-md'
                                : 'bg-white border-slate-200 hover:border-purple-300 hover:bg-purple-50/40'
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-3xl">{evt.icon}</span>
                              {isSelected && (
                                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-950 text-base">{evt.name}</h5>
                              <p className="text-xs text-slate-500 mt-1">{evt.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Event Details */}
                {plannerState.step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Tell us about your event details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Event Name / Host Title
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ananya & Rohan's Wedding"
                          value={plannerState.eventName}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, eventName: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Tentative Event Date
                        </label>
                        <input
                          type="date"
                          value={plannerState.eventDate}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, eventDate: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Event Location / City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Udaipur / Mumbai / Resort Venue"
                          value={plannerState.location}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, location: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Expected Guest Count
                        </label>
                        <select
                          value={plannerState.expectedGuests}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, expectedGuests: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 text-sm outline-none"
                        >
                          <option value="50-150 Guests">50 – 150 Guests (Intimate)</option>
                          <option value="150-300 Guests">150 – 300 Guests (Medium)</option>
                          <option value="300-600 Guests">300 – 600 Guests (Large)</option>
                          <option value="600-1200+ Guests">600 – 1,200+ Guests (Grand)</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Target Budget Preference Range
                        </label>
                        <select
                          value={plannerState.budgetRange}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, budgetRange: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 text-sm outline-none"
                        >
                          <option value="$2,000 - $5,000">Flexible Entry Budget</option>
                          <option value="$5,000 - $15,000">Standard Deluxe Package</option>
                          <option value="$15,000 - $35,000">Luxury Premium Royale</option>
                          <option value="$35,000+">Opulent Signature Custom Build</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Select Services */}
                {plannerState.step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Select required Eventrix services (Multiple allowed)
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {allServices.map((srv) => {
                        const isSelected = plannerState.selectedServices.includes(srv.id);
                        const ServiceIcon = srv.icon;

                        return (
                          <div
                            key={srv.id}
                            onClick={() => handleServiceToggle(srv.id)}
                            className={clsx(
                              'p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4',
                              isSelected
                                ? 'bg-purple-50 border-purple-600 shadow-md'
                                : 'bg-white border-slate-200 hover:border-purple-300'
                            )}
                          >
                            <div className={clsx(
                              'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                              isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                            )}>
                              <ServiceIcon className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h5 className="font-bold text-slate-950 text-sm">{srv.name}</h5>
                                <div className={clsx(
                                  'w-5 h-5 rounded-md flex items-center justify-center border',
                                  isSelected ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300'
                                )}>
                                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 mt-1">{srv.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Catering */}
                {plannerState.step === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Food & Catering Preferences
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                          Food Category Preference
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'veg', label: '100% Pure Veg', icon: '🥗' },
                            { id: 'nonveg', label: 'Non-Vegetarian', icon: '🍗' },
                            { id: 'both', label: 'Both (Veg + Non-Veg)', icon: '🍱' }
                          ].map(pref => (
                            <button
                              key={pref.id}
                              type="button"
                              onClick={() => setPlannerState(prev => ({ ...prev, foodPreference: pref.id as any }))}
                              className={clsx(
                                'p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all',
                                plannerState.foodPreference === pref.id
                                  ? 'bg-purple-900 text-white border-purple-700 shadow-md'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
                              )}
                            >
                              <span className="text-xl">{pref.icon}</span>
                              <span>{pref.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Preferred Cuisine Specialties (e.g. North Indian, Live Chaat, Italian, Mocktails)
                        </label>
                        <input
                          type="text"
                          value={plannerState.foodCuisines.join(', ')}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, foodCuisines: e.target.value.split(',') }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 text-sm outline-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Decoration */}
                {plannerState.step === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Decoration & Stage Theme Style
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        'Traditional Royal Marigold',
                        'Modern Minimalist Pastel',
                        'Heavy Floral Extravaganza',
                        'Glass & Crystal Luxury',
                        'Futuristic Tech & LED Rigs',
                        'Custom Themes'
                      ].map(style => (
                        <div
                          key={style}
                          onClick={() => setPlannerState(prev => ({ ...prev, decorationStyle: style }))}
                          className={clsx(
                            'p-4 rounded-xl border-2 text-xs font-bold cursor-pointer transition-all flex flex-col justify-between h-24',
                            plannerState.decorationStyle === style
                              ? 'bg-purple-50 border-purple-600 text-purple-950 shadow-md'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                          )}
                        >
                          <span>{style}</span>
                          {plannerState.decorationStyle === style && (
                            <Check className="w-4 h-4 text-purple-600 self-end" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 6: Music */}
                {plannerState.step === 6 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      DJ & Music Requirements
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Pro Party DJ & Concert Sound Rigs',
                        'Live Unplugged Acoustic Band',
                        'Traditional Baraat Dhol & Shehnai',
                        'Background Lounge Jazz Music',
                        'Combined DJ + Live Artists'
                      ].map(music => (
                        <div
                          key={music}
                          onClick={() => setPlannerState(prev => ({ ...prev, musicPreference: music }))}
                          className={clsx(
                            'p-4 rounded-xl border-2 text-xs font-bold cursor-pointer transition-all flex items-center justify-between',
                            plannerState.musicPreference === music
                              ? 'bg-purple-50 border-purple-600 text-purple-950 shadow-md'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                          )}
                        >
                          <span>{music}</span>
                          {plannerState.musicPreference === music && (
                            <Check className="w-4 h-4 text-purple-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 7: Photography */}
                {plannerState.step === 7 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Photography & Videography Options
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Candid & Traditional Photography Only',
                        '4K Cinematic Film & Teaser Video Only',
                        'Both (Cinematic Film + Aerial Drone)',
                        'Complete Package + Live Instant Print Booth'
                      ].map(media => (
                        <div
                          key={media}
                          onClick={() => setPlannerState(prev => ({ ...prev, mediaPreference: media }))}
                          className={clsx(
                            'p-4 rounded-xl border-2 text-xs font-bold cursor-pointer transition-all flex items-center justify-between',
                            plannerState.mediaPreference === media
                              ? 'bg-purple-50 border-purple-600 text-purple-950 shadow-md'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                          )}
                        >
                          <span>{media}</span>
                          {plannerState.mediaPreference === media && (
                            <Check className="w-4 h-4 text-purple-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 8: Review & Submit */}
                {plannerState.step === 8 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <h4 className="text-xl font-extrabold text-slate-950 font-heading">
                      Review Your Event Plan & Contact Info
                    </h4>

                    {/* Summary Card */}
                    <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-slate-500 block">Event Type</span><strong className="capitalize text-slate-950">{plannerState.eventType}</strong></div>
                      <div><span className="text-slate-500 block">Location</span><strong className="text-slate-950">{plannerState.location || 'TBD'}</strong></div>
                      <div><span className="text-slate-500 block">Guests</span><strong className="text-slate-950">{plannerState.expectedGuests}</strong></div>
                      <div><span className="text-slate-500 block">Services</span><strong className="text-purple-700 font-bold">{plannerState.selectedServices.length} Selected</strong></div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={plannerState.contactName}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={plannerState.contactPhone}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, contactPhone: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@example.com"
                          value={plannerState.contactEmail}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Jaipur"
                          value={plannerState.contactCity}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, contactCity: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Special Requirements / Notes</label>
                        <textarea
                          rows={2}
                          placeholder="Tell us any specific mandates or requests..."
                          value={plannerState.specialNotes}
                          onChange={(e) => setPlannerState(prev => ({ ...prev, specialNotes: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2 pt-2">
                        <Button variant="primary" size="lg" fullWidth type="submit">
                          Request Eventrix Team Now
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Nav Actions Footer */}
                {plannerState.step < 8 && (
                  <div className="flex items-center justify-between border-t border-purple-100 pt-6 mt-8">
                    <button
                      onClick={handleBack}
                      disabled={plannerState.step === 1}
                      className={clsx(
                        'px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1 transition-all',
                        plannerState.step === 1 ? 'opacity-40 cursor-not-allowed' : 'text-slate-700 hover:bg-purple-100'
                      )}
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>

                    <Button variant="primary" size="md" onClick={handleNext}>
                      Next Step <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
