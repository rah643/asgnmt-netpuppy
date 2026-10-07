import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { StaggerContainer, StaggerItem, Reveal } from '../components/Reveal';
import { keyAchievements } from '../data/schoolData';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#FAF8F5] dark:bg-[#090D14] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Accreditation & Awards"
          title="Recognized Among India's Most Elite Boarding Schools"
          subtitle="Honored by Forbes Great Indian Schools, EducationToday, Times of India, and Indian School Awards."
          align="center"
        />

        {/* 5 Statistics Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {keyAchievements.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-2xl bg-white dark:bg-[#101726] border border-black/5 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-300 text-center space-y-2 group">
                <div className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text transition-transform group-hover:scale-110 duration-300">
                  {item.number}
                </div>
                <div className="font-sans font-bold text-sm sm:text-base text-[#0E1B2E] dark:text-white leading-snug">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-light">
                  {item.subtitle}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Accolades Banner */}
        <Reveal variant="fadeUp" delay={0.2} className="mt-16 p-8 rounded-2xl bg-[#F3EFEA] dark:bg-[#101726] border border-[#C5A059]/30 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-white flex items-center justify-center shrink-0 shadow-md">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase text-[#C5A059]">EducationToday Award</div>
              <div className="font-serif font-bold text-lg text-[#0E1B2E] dark:text-white">#1 Co-Ed Boarding School</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0E1B2E] text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase text-[#C5A059]">Forbes India Certification</div>
              <div className="font-serif font-bold text-lg text-[#0E1B2E] dark:text-white">Great Indian School</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <Medal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase text-emerald-500 dark:text-emerald-400">Indian School Awards</div>
              <div className="font-serif font-bold text-lg text-[#0E1B2E] dark:text-white">Best Residential Infrastructure</div>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
