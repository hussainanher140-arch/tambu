import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/portfolioData';
import { Language } from '../types';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-neutral-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-300 text-xs font-semibold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Got Questions?' : 'সাধারণ প্রশ্নোত্তর'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Questions
                </span>
              </>
            ) : (
              <span className="font-bangla">
                কাজের নিয়ম ও সাধারণ প্রশ্নের উত্তর
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            {lang === 'en'
              ? 'Everything you need to know about starting a project, deliverables, and communication.'
              : 'প্রজেক্ট শুরু করার পূর্বপ্রস্তুতি, ফাইল ফরম্যাট এবং সাপোর্ট সংক্রান্ত তথ্যাবলী।'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-neutral-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-neutral-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {lang === 'en' ? faq.question : faq.questionBn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400 bg-emerald-950/50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {lang === 'en' ? faq.answer : faq.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
