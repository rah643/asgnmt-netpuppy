import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { heroStats } from '../data/schoolData';

export function Hero({ onOpenInquiry }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#070F1A] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#172B47]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/30 text-xs sm:text-sm text-amber-200 font-medium"
            >
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>Ranked #1 Co-Ed Boarding School in Uttarakhand</span>
            </motion.div>

            {/* Editorial Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]"
              >
                TULA'S <br />
                <span className="italic font-normal gold-gradient-text">INTERNATIONAL</span> <br />
                SCHOOL
              </motion.h1>
            </div>

            {/* Subtitle / Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              The <strong className="text-white font-semibold">Modern Gurukul</strong> of Dehradun. 
              Blending ancient Indian wisdom with global Cambridge & CBSE education across a 22-acre Himalayan eco-campus.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button size="lg" onClick={onOpenInquiry} variant="primary">
                Explore TIS Admissions
              </Button>

              <Button size="lg" href="#about" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Begin Your Journey
              </Button>
            </motion.div>

            {/* Micro Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {heroStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059]">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Editorial Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group"
            >
              <img
                src="/assets/images/hero-campus.png"
                alt="Tulas International School Dehradun 22 Acre Himalayan Campus"
                className="w-full h-[450px] sm:h-[550px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-transparent to-transparent opacity-80" />

              {/* Floating Information Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E1B2E]/90 backdrop-blur-md border border-[#C5A059]/40 text-white space-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
                  <span>Mind • Body • Soul</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="font-serif text-lg font-bold">22-Acre Eco-Lush Campus</div>
                <p className="text-xs text-slate-300">Pollution-free mountain greenery, 16+ sports & organic vegetarian lifestyle.</p>
              </motion.div>
            </motion.div>

            {/* Floating Information Card 2 (Top Left Overlay) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="hidden sm:flex absolute -top-6 -left-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-amber-200 uppercase font-semibold">Affiliation</div>
                <div className="text-sm font-bold">CBSE & Cambridge CAIE</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
