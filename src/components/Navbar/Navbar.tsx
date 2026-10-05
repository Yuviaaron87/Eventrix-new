import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '../../constants/route';
import { Button } from '../Button/Button';
import { clsx } from 'clsx';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-8',
          scrolled ? 'top-2 sm:top-3' : 'top-0'
        )}
      >
        <div
          className={clsx(
            'max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 rounded-full',
            scrolled
              ? 'glass-pill shadow-xl shadow-purple-950/5 border border-purple-200/80 bg-white/80'
              : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-sm'
          )}
        >
          {/* Logo Treatment */}
          <Link to={ROUTES.HOME} className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-purple-800 via-purple-600 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-white text-lg tracking-wider">E</span>
              <Sparkles className="w-3.5 h-3.5 text-pink-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-purple-950 via-purple-800 to-indigo-900 bg-clip-text text-transparent font-heading">
                EVENTRIX
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-purple-600/90 -mt-1 uppercase">
                Events Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith('/#');
              const isActive = !isAnchor && location.pathname === link.href;

              return isAnchor ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-700 rounded-full hover:bg-purple-50/80 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={clsx(
                    'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 relative',
                    isActive
                      ? 'text-purple-950 font-bold bg-purple-100/90 shadow-xs'
                      : 'text-slate-700 hover:text-purple-800 hover:bg-purple-50/80'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-purple-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={Calendar}
              onClick={onOpenPlanner}
              className="hidden sm:inline-flex"
            >
              Plan My Event
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-purple-100/80 text-purple-950 hover:bg-purple-200/80 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="double-bezel shadow-2xl p-2 bg-white/95 backdrop-blur-2xl">
              <div className="double-bezel-inner p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-widest">
                    Navigation Menu
                  </span>
                  <span className="text-[10px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded-full">
                    One Team • All Events
                  </span>
                </div>

                <div className="flex flex-col gap-1 py-1">
                  {NAV_LINKS.map((link, idx) => {
                    const isAnchor = link.href.startsWith('/#');
                    const isActive = !isAnchor && location.pathname === link.href;

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        {isAnchor ? (
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              handleNavClick(link.href);
                            }}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-900 flex items-center justify-between"
                          >
                            <span>{link.label}</span>
                            <ChevronRight className="w-4 h-4 text-purple-400" />
                          </button>
                        ) : (
                          <Link
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={clsx(
                              'px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors',
                              isActive
                                ? 'bg-purple-100 text-purple-950 font-bold'
                                : 'text-slate-700 hover:bg-purple-50 hover:text-purple-900'
                            )}
                          >
                            <span>{link.label}</span>
                            <ChevronRight className="w-4 h-4 text-purple-400" />
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-purple-100">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={Calendar}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPlanner();
                    }}
                  >
                    Plan My Event Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
