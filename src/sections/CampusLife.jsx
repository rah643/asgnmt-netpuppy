import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { campusLifeCategories } from '../data/schoolData';
import { ShieldCheck, Sparkles, Tag } from 'lucide-react';

export function CampusLife() {
  const [activeCategory, setActiveCategory] = useState(campusLifeCategories[0].id);

  const currentItem = campusLifeCategories.find(c => c.id === activeCategory) || campusLifeCategories[0];

  return (
    <section id="campus-life" className="py-24 bg-[#FAF8F5] dark:bg-[#090D14] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Life at Tula's"
          title="A Vibrant 22-Acre Campus Designed for Discovery"
          subtitle="Explore our world-class infrastructure where academic classrooms blend seamlessly into Olympic sports arenas, music studios, and tranquil mountain gardens."
        />

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 border-b border-black/10 dark:border-white/10 pb-4">
          {campusLifeCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0E1B2E] text-white dark:bg-[#C5A059] dark:text-white shadow-lg'
                    : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Asymmetric Composition */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Asymmetric Photo Grid */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/15 group cursor-image-hover">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlapping Floating Tag */}
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-300/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentItem.stats}</span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="text-xs font-medium text-amber-300 uppercase tracking-widest">{currentItem.tagline}</span>
                    <h3 className="font-serif text-3xl font-bold">{currentItem.title}</h3>
                  </div>
                </div>
              </div>

              {/* Right Content Card & Tags */}
              <div className="lg:col-span-5 space-y-6 bg-white dark:bg-[#101726] p-8 sm:p-10 rounded-2xl border border-black/5 dark:border-white/10 shadow-xl">
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                    {currentItem.tagline}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#0E1B2E] dark:text-white">
                    {currentItem.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Key Facility Highlights */}
                <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</div>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] dark:bg-[#070F1A] text-xs font-medium text-[#0E1B2E] dark:text-slate-200 border border-black/5 dark:border-white/10"
                      >
                        <Tag className="w-3 h-3 text-[#C5A059]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Guaranteed 24/7 CCTV surveillance, medical infirmatory care & resident mentor supervision.
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
