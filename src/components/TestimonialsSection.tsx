import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Language } from '../types';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section id="reviews" className="py-24 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{lang === 'en' ? 'Client Endorsements' : 'ক্লায়েন্টদের প্রতিক্রিয়া'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Trusted by E-commerce Founders{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Across The Globe
                </span>
              </>
            ) : (
              <span className="font-bangla">
                বিশ্বজুড়ে সফল উদ্যোক্তাদের আস্থা ও সন্তুষ্টি
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Read unedited reviews from entrepreneurs, marketing directors, and brand creators who scaled with Salman’s custom code and identity designs.'
              : 'যেসব ব্র্যান্ড সালমানের তৈরি শপিফাই স্টোর ও লোগো ব্যবহার করে তাদের ব্যবসা প্রসারিত করেছে তাদের মূল্যবান মতামত।'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-emerald-500/10 transition-colors" />

              <div className="space-y-4">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Project
                  </span>
                </div>

                {/* Review body */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">
                  "{lang === 'en' ? t.content : t.contentBn}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <span title={t.country}>{t.countryFlag}</span>
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {t.role}, <span className="text-emerald-400">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-neutral-500 font-medium block">
                    {t.date}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded">
                    {t.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white">100%</strong> Job Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white">Shopify Partner</strong> Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white">Adobe Certified</strong> Vector Specialist</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white">&lt; 1 Hour</strong> Response Time</span>
          </div>
        </div>

      </div>
    </section>
  );
};
