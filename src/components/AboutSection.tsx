import React, { useState } from 'react';
import { User, Award, CheckCircle, Code, Palette, Zap, Sparkles, MessageSquare, Coffee } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'story' | 'process' | 'skills'>('story');

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Creative Blueprint',
      titleBn: 'ডিসকভারি ও পরিকল্পনা',
      desc: 'We analyze your target market, competitors, product catalog, and aesthetic vision to establish high-converting requirements.',
      descBn: 'টার্গেট অডিয়েন্স, প্রতিদ্বন্দ্বী ব্র্যান্ড এবং পণ্যের ধরন যাচাই করে নিখুঁত প্রজেক্ট প্ল্যান তৈরি।'
    },
    {
      num: '02',
      title: 'Logo & UI/UX Crafting',
      titleBn: 'লোগো ও ইউআই/ইউএক্স ডিজাইন',
      desc: 'Developing unique vector marks, color psychology systems, and responsive store layout wireframes in Adobe Illustrator & Figma.',
      descBn: 'ইউনিক ভেক্টর লোগো কনসেপ্ট এবং আধুনিক রেসপনসিভ স্টোর লেআউট ডিজাইন।'
    },
    {
      num: '03',
      title: 'Shopify 2.0 Liquid Engineering',
      titleBn: 'শপিফাই ২.০ লিকুইড কোডিং',
      desc: 'Writing clean, bloat-free Shopify Liquid sections with dynamic variant pickers, fast checkout funnels, and app integrations.',
      descBn: 'ক্লিন লিকুইড কোড, ডায়নামিক সোয়াচ, দ্রুত চেকআউট এবং প্রয়োজনীয় অ্যাপ কনফিগারেশন।'
    },
    {
      num: '04',
      title: '90+ Speed Audit & Worldwide Launch',
      titleBn: '৯০+ স্পিড নিশ্চিতকরণ ও স্টোর লাইভ',
      desc: 'Auditing Core Web Vitals, verifying payment gateway integrations across mobile devices, and seamless live store handoff.',
      descBn: 'কোর ওয়েব ভাইটালস অপটিমাইজ করে ৯০+ স্পিড নিশ্চিতকরণ এবং ফাইনাল লাইভ হস্তান্তর।'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-neutral-950/90 overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'en' ? 'Get To Know Me' : 'পরিচিতি ও কাজের ধরন'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Meet{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Salman Mohammad Tarek
                </span>
              </>
            ) : (
              <span className="font-bangla">
                সালমান মোহাম্মদ তারেক — পরিচিতি ও দর্শন
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'A passionate Shopify Developer and Brand Identity Designer dedicated to helping e-commerce founders build sustainable, highly profitable digital storefronts.'
              : 'ই-কমার্স ব্র্যান্ডগুলোর ডিজিটাল পথচলাকে সহজ ও লাভজনক করতে কোডিং ও ক্রিয়েটিভ ডিজাইনের এক অনন্য মেলবন্ধন।'}
          </p>
        </div>

        {/* Grid: Photos + Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Photo Gallery Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 1: Nature / Tea Garden Portrait */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
                <img
                  src={PERSONAL_INFO.images.aboutWarm}
                  alt="Salman Mohammad Tarek in nature"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-emerald-300">
                    {lang === 'en' ? 'Creative Mindset' : 'ক্রিয়েটিভ মাইন্ডসেট'}
                  </span>
                </div>
              </div>

              {/* Photo 2: Speaking Event / Leadership */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
                <img
                  src={PERSONAL_INFO.images.speakingEvent}
                  alt="Salman Mohammad Tarek speaking at conference"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-teal-300">
                    {lang === 'en' ? 'Community & Speaking' : 'স্পিকিং ও কমিউনিটি'}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo 3 & Stats Card Banner */}
            <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-emerald-500/40">
                  <img
                    src={PERSONAL_INFO.images.casualSmiling}
                    alt="Salman smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Salman M. Tarek</h4>
                  <p className="text-[11px] text-emerald-400">Available for Freelance & Contract</p>
                </div>
              </div>
              <button
                onClick={onOpenContact}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs cursor-pointer"
              >
                Let’s Talk
              </button>
            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab navigation: Story / Process / Skills */}
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'story'
                    ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'My Background & Philosophy' : 'আমার গল্প ও দর্শন'}
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'process'
                    ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                {lang === 'en' ? '4-Step Process' : 'কাজের ৪টি ধাপ'}
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'skills'
                    ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Core Skills & Stack' : 'দক্ষতা ও টেক স্ট্যাক'}
              </button>
            </div>

            {/* Tab: Story */}
            {activeTab === 'story' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-2xl font-bold text-white">
                  {lang === 'en'
                    ? 'Where Aesthetic Design Meets High-Performance Code'
                    : 'সৌন্দর্য ও শক্তিশালী কোডিংয়ের নিখুঁত সমাহার'}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {lang === 'en' ? (
                    <>
                      Most businesses struggle with an agonizing compromise: they hire a graphic designer who creates 
                      a gorgeous logo but has no clue how Shopify Liquid templates render, or they hire a backend developer 
                      whose store works fine but looks bland and fails to evoke trust.
                    </>
                  ) : (
                    <span className="font-bangla">
                      অধিকাংশ ই-কমার্স উদ্যোক্তা একটি বড় সমস্যার মুখোমুখি হন: হয় গ্রাফিক ডিজাইনারের কাজে কোডিংয়ের জ্ঞান থাকে না, 
                      অথবা সাধারণ ডেভেলপারের তৈরি স্টোর দেখতে আকর্ষণীয় হয় না।
                    </span>
                  )}
                </p>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {lang === 'en' ? (
                    <>
                      I eliminate this friction. As both an <strong className="text-emerald-400">expert Shopify developer</strong> and an <strong className="text-teal-300">intuitive brand identity designer</strong>, 
                      I craft the entire journey — from the vector logo that defines your brand prestige to the custom 
                      Shopify 2.0 sections that maximize your Average Order Value (AOV) and conversion rate.
                    </>
                  ) : (
                    <span className="font-bangla">
                      আমি এই সমস্যার চূড়ান্ত সমাধান প্রদান করি। ব্র্যান্ডের লোগো ডিজাইন থেকে শুরু করে উচ্চগতির শপিফাই স্টোর ডেভেলপমেন্ট — 
                      সবকিছু এক প্ল্যাটফর্মে নিখুঁতভাবে করে দেওয়া আমার বৈশিষ্ট্য।
                    </span>
                  )}
                </p>

                {/* Highlights pill grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1">
                    <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      Clean Liquid Engineering
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      No unnecessary app subscriptions; lightweight, pure code.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1">
                    <div className="text-teal-300 font-bold text-xs uppercase tracking-wider">
                      Timeless Vector Identity
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Print-ready, memorable logos tailored for global scaling.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Process */}
            {activeTab === 'process' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                {processSteps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="text-xl font-display font-extrabold text-emerald-400">
                      {step.num}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white">
                        {lang === 'en' ? step.title : step.titleBn}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {lang === 'en' ? step.desc : step.descBn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Skills */}
            {activeTab === 'skills' && (
              <div className="space-y-3.5 animate-in fade-in duration-200">
                {PERSONAL_INFO.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-neutral-200">{skill.name}</span>
                      <span className="text-emerald-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
