import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';
import { corePillars } from '../data/schoolData';
import { Compass, Sparkles, BookOpen, Trophy, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Trophy: Trophy
};

export function WhyTIS() {
  return (
    <section id="why-tis" className="py-24 bg-[#F3EFEA] dark:bg-[#070F1A] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Why Choose TIS"
          title="The Distinctive Edge of a World-Class Residential School"
          subtitle="Discover how Tula's International School integrates academic rigor, athletic mastery, and character development into a single transformative experience."
          align="center"
        />

        {/* 4 Core Pillars Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {corePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Sparkles;
            const isFeatured = idx === 0 || idx === 3;

            return (
              <StaggerItem key={pillar.id}>
                <div
                  className={`h-full p-8 sm:p-10 rounded-2xl transition-all duration-500 flex flex-col justify-between group border relative overflow-hidden ${
                    isFeatured
                      ? 'bg-gradient-to-br from-[#0E1B2E] to-[#172B47] text-white border-[#C5A059]/30 shadow-xl'
                      : 'bg-white dark:bg-[#101726] text-[#0E1B2E] dark:text-white border-black/5 dark:border-white/10 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Background Number watermark */}
                  <div className={`absolute -right-2 -top-6 font-serif font-bold text-8xl pointer-events-none select-none transition-opacity duration-300 ${
                    isFeatured ? 'text-white/5 group-hover:text-white/10' : 'text-black/5 dark:text-white/5 group-hover:text-[#C5A059]/10'
                  }`}>
                    {pillar.id}
                  </div>

                  <div className="space-y-6 relative z-10">
                    
                    {/* Header line */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isFeatured
                          ? 'bg-[#C5A059] text-white'
                          : 'bg-[#C5A059]/10 text-[#C5A059]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-white/10 text-amber-200 border border-white/10'
                          : 'bg-black/5 dark:bg-white/10 text-[#C5A059]'
                      }`}>
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <span className="text-xs font-semibold text-[#C5A059] tracking-widest uppercase block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      isFeatured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      {pillar.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="pt-4 border-t border-current/10 space-y-2">
                      {pillar.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${isFeatured ? 'text-[#C5A059]' : 'text-emerald-500'}`} />
                          <span className={isFeatured ? 'text-slate-200' : 'text-slate-700 dark:text-slate-200'}>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
