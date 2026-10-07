import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { academicPrograms } from '../data/schoolData';
import { BookOpen, GraduationCap, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { Button } from '../components/Button';

export function Academics({ onOpenInquiry }) {
  const [selectedTab, setSelectedTab] = useState(academicPrograms[0].id);

  const activeProgram = academicPrograms.find(p => p.id === selectedTab) || academicPrograms[0];

  return (
    <section id="academics" className="py-24 bg-[#0E1B2E] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Academic Rigor"
          title="Dual Curricular Pathways for Global Excellence"
          subtitle="Tula's International School offers comprehensive CBSE Board & Cambridge Assessment International Education (CAIE) tracks tailored for every developmental phase."
          light
        />

        {/* Interactive Tabs */}
        <div className="mt-12 flex flex-wrap gap-4 border-b border-white/10 pb-6">
          {academicPrograms.map((prog) => {
            const isActive = prog.id === selectedTab;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedTab(prog.id)}
                className={`relative py-3 px-6 rounded-xl font-serif text-lg font-bold transition-all duration-300 flex items-center gap-3 ${
                  isActive
                    ? 'bg-[#C5A059] text-white shadow-lg'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>{prog.level}</span>
                <span className="text-xs font-sans font-normal opacity-80 bg-black/20 px-2 py-0.5 rounded-full">
                  {prog.grades}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Program Display */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              
              {/* Left Column info */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 text-amber-200 text-xs font-semibold border border-[#C5A059]/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>{activeProgram.curriculum}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                  {activeProgram.headline}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                  {activeProgram.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {activeProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button onClick={onOpenInquiry} variant="primary">
                    Download {activeProgram.level} Syllabus & Prospectus
                  </Button>
                </div>

              </div>

              {/* Right Column Highlights Box */}
              <div className="lg:col-span-5 p-8 rounded-xl bg-gradient-to-br from-[#172B47] to-[#070F1A] border border-[#C5A059]/30 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Global University Prep</span>
                  <h4 className="font-serif text-2xl font-bold">University & Entrance Advisory</h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dedicated in-house coaching for JEE (Main & Advanced), NEET, CUET, SAT, ACT, and IELTS. 100% university placement record across Ivy Leagues, Russell Group, and premier IIT/DU colleges.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-semibold text-amber-200 uppercase tracking-wider">Targeted Streams (Grades XI–XII):</div>
                  <div className="flex flex-wrap gap-2">
                    {["PCM / PCB Science", "Commerce with Maths", "Humanities & Liberal Arts", "Cambridge A-Levels"].map((s, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md bg-white/10 text-xs text-white border border-white/10">
                        {s}
                      </span>
                    ))}
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
