import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { admissionsSteps, schoolInfo } from '../data/schoolData';
import { Calendar, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function AdmissionsCTA({ onOpenInquiry }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#070F1A] via-[#0E1B2E] to-[#172B47] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left CTA Text & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C5A059]/20 text-amber-200 text-xs font-semibold uppercase tracking-widest border border-[#C5A059]/30">
              Admissions Open 2025–26 (Grades IV to XII)
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
              READY TO BEGIN <br />
              YOUR CHILD'S <span className="gold-gradient-text italic font-normal">JOURNEY?</span>
            </h2>

            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Give your child the gift of a Modern Gurukul education—where leadership, character, and academic mastery flourish on a 22-acre pristine Himalayan campus.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" onClick={onOpenInquiry} variant="primary">
                Apply for Admission Now
              </Button>
              <Button
                size="lg"
                href={`tel:${schoolInfo.phone}`}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Call Admissions Desk
              </Button>
            </div>

            {/* Quick Contact info */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{schoolInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>{schoolInfo.admissionsEmail}</span>
              </div>
            </div>

          </div>

          {/* Right 3 Step Process Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-white/10 pb-4">
              3 Simple Admission Steps
            </h3>

            <div className="space-y-6">
              {admissionsSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 text-xs text-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Scholarships & Financial Aid available for meritorious sports and academic achievers.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
