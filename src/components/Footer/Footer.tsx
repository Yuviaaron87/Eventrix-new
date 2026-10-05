import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import { ROUTES } from '../../constants/route';
import { Button } from '../Button/Button';

interface FooterProps {
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlanner }) => {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-purple-900/40 relative overflow-hidden pt-16 pb-12">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner CTA card inside footer */}
        <div className="double-bezel p-2 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-800/40 shadow-2xl mb-16">
          <div className="double-bezel-inner bg-slate-900/90 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-purple-500/20">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-700/50 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                End-To-End Event Management
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Ready to turn event stress into an unforgettable experience?
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                Why manage 7 vendors when Eventrix can manage everything?
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="primary" size="lg" onClick={onOpenPlanner}>
                Plan My Event Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/40">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
                <span className="font-extrabold text-white text-xl">E</span>
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight text-white font-heading">
                  EVENTRIX
                </span>
                <p className="text-xs font-medium text-purple-400">
                  Your Event. Our Everything.
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Eventrix is a complete luxury event-tech management company. We bring decoration, gourmet catering, pro DJ sound, candid photography, and video under one seamless roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800 hover:border-purple-600 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: ROUTES.HOME },
                { label: 'Events', href: ROUTES.EVENTS },
                { label: 'Services', href: ROUTES.SERVICES },
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Why Eventrix', href: '/#why-eventrix' },
                { label: 'Gallery Showcase', href: ROUTES.GALLERY }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Event Types */}
          <div>
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
              Events We Manage
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Weddings & Marriages</li>
              <li>Birthday Extravaganzas</li>
              <li>Corporate Galas & Summits</li>
              <li>College Festivals</li>
              <li>Grand Receptions</li>
              <li>Intimate Private Parties</li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-slate-400">
                  Eventrix Global HQ, Event Tech Tower, MG Road, Metro City, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-purple-300 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:hello@eventrix.com" className="hover:text-purple-300 transition-colors">
                  hello@eventrix.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs text-slate-400">Mon - Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} EVENTRIX Platform Ltd. All rights reserved. "Your Event. Our Everything."</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security & Licensing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
