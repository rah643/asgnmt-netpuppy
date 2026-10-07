import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';
import { Sun, Heart, Brain, Feather } from 'lucide-react';

export function Introduction() {
  const pillars = [
    {
      title: "Mind",
      desc: "Critical reasoning, scientific inquiry, Cambridge & CBSE academic brilliance.",
      icon: Brain,
      color: "text-amber-500 bg-amber-500/10"
    },
    {
      title: "Body",
      desc: "16+ Olympic sports, equestrian riding, shooting, swimming & physical resilience.",
      icon: Heart,
      color: "text-emerald-500 bg-emerald-500/10"
    },
    {
      title: "Soul",
      desc: "Gurukul values, mindfulness, ethics, environmental stewardship & inner peace.",
      icon: Feather,
      color: "text-indigo-500 bg-indigo-500/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] dark:bg-[#090D14] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <SectionHeading
          badge="The Modern Gurukul"
          title="Where Ancient Indian Values Meet World-Class Modern Education."
          subtitle="Founded under Rishabh Educational Trust, Tula's International School reimagines residential learning in Dehradun—cultivating compassionate leaders equipped for top global universities."
        />

        {/* Content Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-6 relative">
            <Reveal variant="scaleUp">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
                <img
                  src="/assets/images/gurukul-learning.png"
                  alt="Modern Gurukul learning environment at Tula's International School"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">Guru-Shishya Mentor Tradition</span>
                  <h3 className="font-serif text-2xl font-bold">1:8 Faculty-to-Student Ratio</h3>
                  <p className="text-sm text-slate-200">Personalized mentorship ensuring no student is left behind in academics or life.</p>
                </div>
              </div>
            </Reveal>

            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="fadeUp" delay={0.1}>
              <div className="prose dark:prose-invert">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] dark:text-white leading-snug">
                  "Education is not merely about accumulating information, but transforming human character."
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-3">
                  At TIS, we believe a true school nurtures every dimension of a student. Situated in the pristine foothills of the Himalayas, our 22-acre campus shields students from urban pollution while expanding their horizons through international curriculum and athletic grit.
                </p>
              </div>
            </Reveal>

            {/* Three Tri-Fold Pillars */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <StaggerItem key={pillar.title}>
                    <div className="p-5 rounded-xl bg-white dark:bg-[#101726] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 space-y-3 group">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pillar.color} transition-transform group-hover:scale-110`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-[#0E1B2E] dark:text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

          </div>

        </div>

      </div>
    </section>
  );
}
