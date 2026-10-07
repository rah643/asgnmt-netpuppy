import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, GraduationCap, ChevronRight } from 'lucide-react';
import { navLinks, schoolInfo } from '../data/schoolData';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './Button';

export function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/85 dark:bg-[#070F1A]/85 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-lg shadow-black/5'
            : 'py-5 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white font-serif font-bold text-xl shadow-md transition-transform duration-300 group-hover:scale-105">
              TIS
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors ${
                scrolled ? 'text-[#0E1B2E] dark:text-white' : 'text-white'
              }`}>
                TULA'S
              </span>
              <span className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                scrolled ? 'text-[#C5A059]' : 'text-amber-300'
              }`}>
                International School
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 hover:text-[#C5A059] ${
                  scrolled 
                    ? 'text-slate-700 dark:text-slate-200' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              size="sm" 
              onClick={onOpenInquiry}
              variant="primary"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-[#0E1B2E] dark:text-white bg-slate-100 dark:bg-slate-800' 
                  : 'text-white bg-black/30 backdrop-blur-sm'
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#070F1A]/95 backdrop-blur-xl text-white flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C5A059] flex items-center justify-center font-serif font-bold text-white">
                  TIS
                </div>
                <span className="font-serif font-bold text-lg tracking-wider">TULA'S INTERNATIONAL</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-8 flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif font-semibold tracking-wide flex items-center justify-between hover:text-[#C5A059] border-b border-white/5 pb-3"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-[#C5A059]" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                <span>Admissions Helpline: {schoolInfo.phone}</span>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
              >
                Begin Your Journey - Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
