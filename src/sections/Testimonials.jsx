import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { testimonials } from '../data/schoolData';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevTestimonial();
      if (e.key === 'ArrowRight') nextTestimonial();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F3EFEA] dark:bg-[#070F1A] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Voices of TIS"
          title="Stories of Growth, Trust & Achievement"
          subtitle="Read firsthand experiences from parents, students, and alumni who have walked the halls of Tula's International School."
          align="center"
        />

        {/* Testimonial Carousel Card */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#101726] border border-black/5 dark:border-white/10 shadow-2xl space-y-6 relative"
            >
              <Quote className="w-12 h-12 text-[#C5A059]/20 absolute top-6 right-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#0E1B2E] dark:text-slate-100">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A059]"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#0E1B2E] dark:text-white">
                    {activeTestimonial.author}
                  </h4>
                  <div className="text-xs text-[#C5A059] font-medium">{activeTestimonial.role}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{activeTestimonial.location}</div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#C5A059]'
                      : 'w-2.5 bg-black/20 dark:bg-white/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 text-slate-700 dark:text-white hover:bg-[#C5A059] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 text-slate-700 dark:text-white hover:bg-[#C5A059] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
