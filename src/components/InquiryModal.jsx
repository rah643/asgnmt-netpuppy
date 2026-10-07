import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
import { Button } from './Button';

export function InquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    grade: 'Grade IV - V (Primary)',
    city: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#101726] text-[#0E1B2E] dark:text-white shadow-2xl border border-black/10 dark:border-white/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Admissions Inquiry 2025–26
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Begin Your Child's Journey
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Fill out the form below to receive the official prospectus and schedule a personalized campus tour.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Grade of Interest
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-[#FAF8F5] dark:bg-[#070F1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    >
                      <option>Grade IV - V (Primary)</option>
                      <option>Grade VI - VIII (Middle)</option>
                      <option>Grade IX - X (Secondary / Cambridge)</option>
                      <option>Grade XI - XII (Senior Secondary)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      City / Country
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi / Dubai"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full" size="lg">
                    Submit Admissions Inquiry
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold">Inquiry Received!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.parentName}</strong>. Our Admissions Counselor will reach out to you at <strong>{formData.phone}</strong> within 24 hours.
              </p>
              <Button onClick={handleReset} variant="outline" className="mt-4">
                Close & Return to Site
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
