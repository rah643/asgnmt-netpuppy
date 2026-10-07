import React from 'react';
import { Reveal } from './Reveal';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <Reveal variant="fadeUp" delay={0.05}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            {badge}
          </span>
        </Reveal>
      )}

      {title && (
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${
            light 
              ? 'text-white' 
              : 'text-[#0E1B2E] dark:text-white'
          }`}>
            {title}
          </h2>
        </Reveal>
      )}

      {subtitle && (
        <Reveal variant="fadeUp" delay={0.15}>
          <p className={`text-base sm:text-lg leading-relaxed font-sans ${
            light 
              ? 'text-slate-300' 
              : 'text-slate-600 dark:text-slate-300'
          }`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
