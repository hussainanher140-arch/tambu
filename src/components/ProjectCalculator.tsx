import React, { useState } from 'react';
import { Calculator, Check, Clock, Sparkles, MessageCircle, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface ProjectCalculatorProps {
  lang: Language;
  onSendToContact: (scopeDetails: { packageTitle: string; addOns: string[]; totalCost: number; timeline: string }) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({
  lang,
  onSendToContact,
}) => {
  const packages = [
    {
      id: 'full-store',
      title: 'Turnkey Shopify Store (Liquid 2.0)',
      titleBn: 'টার্নকি শপিফাই স্টোর ডেভেলপমেন্ট',
      price: 350,
      days: 6,
      desc: 'Complete high-converting store with responsive layout, products, payment gateways & cart drawer.',
      descBn: 'সম্পূর্ণ নতুন শপিফাই স্টোর তৈরি, পেমেন্ট সেটআপ ও হাই-কনভার্টিং কার্ট।'
    },
    {
      id: 'theme-redesign',
      title: 'Theme Redesign & Custom Sections',
      titleBn: 'থিম রিডিজাইন ও কাস্টম সেকশন',
      price: 250,
      days: 4,
      desc: 'Modernize existing Shopify store, build custom sections, and optimize mobile UX.',
      descBn: 'বিদ্যমান স্টোর আধুনিকীকরণ এবং নতুন কাস্টম সেকশন যোগ।'
    },
    {
      id: 'logo-brand',
      title: 'Logo & Brand Identity Pack',
      titleBn: 'লোগো ও ব্র্যান্ড আইডেন্টিটি প্যাকেজ',
      price: 150,
      days: 3,
      desc: '3-4 unique vector logo concepts, brand guidelines, color book, and 100% master source files.',
      descBn: '৩-৪টি ইউনিক ভেক্টর লোগো, কালার বুক এবং মাস্টার সোর্স ফাইল।'
    },
    {
      id: 'speed-overhaul',
      title: '90+ PageSpeed & Bug Triage',
      titleBn: '৯০+ স্পিড অপটিমাইজেশন ও বাগ ফিক্স',
      price: 120,
      days: 2,
      desc: 'Eliminate render-blocking JS, clean orphan app code, lossless image compression.',
      descBn: 'স্লো লোডিং ও অ্যাপ স্ক্রিপ্ট ক্লিন করে ৯০+ স্পিড স্কোর।'
    },
    {
      id: 'flagship-combo',
      title: 'The Flagship: Logo + Shopify Store',
      titleBn: 'মেগা কম্বো: লোগো ডিজাইন + শপিফাই স্টোর',
      price: 480,
      days: 8,
      desc: 'Complete all-in-one package for launching an elite e-commerce brand from zero to hero.',
      descBn: 'ব্র্যান্ড লোগো এবং ফুল শপিফাই স্টোর একসাথে সাশ্রয়ী প্যাকেজে।'
    }
  ];

  const addOnsList = [
    { id: 'pixel-capi', title: 'Meta Pixel CAPI & Server-Side GA4 Tracking (100% Accuracy)', price: 150, extraDays: 2 },
    { id: 'ai-assistant', title: '24/7 AI Sales Chatbot & Smart Recommender Integration', price: 160, extraDays: 2 },
    { id: 'digital-ads', title: 'Meta & Google Ads Campaign Setup & Audience Funnel', price: 180, extraDays: 2 },
    { id: 'klaviyo', title: 'Klaviyo Email Flows (Welcome, Cart Abandonment)', price: 120, extraDays: 2 },
    { id: 'recharge', title: 'Recharge Subscriptions Setup', price: 130, extraDays: 2 },
    { id: 'custom-liquid', title: 'Custom Interactive Liquid Section / Swatch Drawer', price: 90, extraDays: 1 },
    { id: 'multicurrency', title: 'Multi-Currency & Geolocation Routing', price: 70, extraDays: 1 },
    { id: 'social-kit', title: 'Social Media Kit & Stationery Mockups', price: 60, extraDays: 1 },
    { id: 'express', title: 'Express Rush Delivery (Priority Queue)', price: 100, extraDays: -2 }
  ];

  const [selectedPackageId, setSelectedPackageId] = useState<string>('full-store');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['klaviyo']);

  const activePackage = packages.find((p) => p.id === selectedPackageId) || packages[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal =
    activePackage.price +
    selectedAddOns.reduce((sum, id) => {
      const addon = addOnsList.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

  const calculatedDays = Math.max(
    2,
    activePackage.days +
      selectedAddOns.reduce((sum, id) => {
        const addon = addOnsList.find((a) => a.id === id);
        return sum + (addon ? addon.extraDays : 0);
      }, 0)
  );

  const handleBookNow = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const addOnTitles = selectedAddOns
      .map((id) => addOnsList.find((a) => a.id === id)?.title)
      .filter(Boolean) as string[];

    onSendToContact({
      packageTitle: activePackage.title,
      addOns: addOnTitles,
      totalCost: calculatedTotal,
      timeline: `${calculatedDays} Business Days`
    });
  };

  const generateWhatsAppLink = () => {
    const addOnTitles = selectedAddOns
      .map((id) => addOnsList.find((a) => a.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Salman! I configured a project estimate on your portfolio:
- Package: ${activePackage.title}
- Add-ons: ${addOnTitles || 'None'}
- Estimated Total: $${calculatedTotal}
- Estimated Timeline: ~${calculatedDays} Days
Can we discuss starting this project?`;

    return `https://wa.me/8801852430258?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-24 relative bg-neutral-950">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'en' ? 'Transparent Pricing' : 'স্বচ্ছ ও সরাসরি খরচের হিসাব'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Interactive Project{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Cost & Timeline Estimator
                </span>
              </>
            ) : (
              <span className="font-bangla">
                আপনার প্রজেক্টের সম্ভাব্য খরচ ও সময় নির্ধারণ করুন
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Select your core package and optional upgrades to instantly calculate a transparent scope estimate with zero hidden fees.'
              : 'আপনার প্রয়োজন অনুযায়ী প্যাকেজ এবং অতিরিক্ত ফিচার সিলেক্ট করে আনুমানিক বাজেট ও ডেলিভারি সময় যাচাই করুন।'}
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Package & Add-ons selection (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base Package */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-300">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">1</span>
                <span>{lang === 'en' ? 'Choose Core Package' : 'মূল প্যাকেজ বেছে নিন'}</span>
              </div>

              <div className="space-y-3">
                {packages.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-950/30 shadow-lg shadow-emerald-500/10'
                          : 'border-white/5 bg-neutral-900/60 hover:bg-neutral-900 hover:border-white/15'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-neutral-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                          </div>
                          <h4 className="text-base font-bold text-white">
                            {lang === 'en' ? pkg.title : pkg.titleBn}
                          </h4>
                        </div>
                        <p className="text-xs text-neutral-400 pl-6.5">
                          {lang === 'en' ? pkg.desc : pkg.descBn}
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 pl-6.5 sm:pl-0 flex-shrink-0">
                        <div className="flex items-center gap-1 text-xs text-neutral-400">
                          <Clock className="w-3.5 h-3.5 text-teal-400" />
                          <span>~{pkg.days} Days</span>
                        </div>
                        <div className="text-lg font-display font-extrabold text-emerald-400">
                          ${pkg.price}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-300">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">2</span>
                <span>{lang === 'en' ? 'Select Optional Add-ons & Upgrades' : 'ঐচ্ছিক অতিরিক্ত ফিচারসমূহ'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnsList.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                          : 'border-white/5 bg-neutral-900/40 text-neutral-300 hover:bg-neutral-900'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex-shrink-0 border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-emerald-500 border-emerald-500 text-neutral-950' : 'border-neutral-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1 text-xs space-y-1">
                        <div className="font-semibold">{addon.title}</div>
                        <div className="flex items-center justify-between text-[11px] text-neutral-400">
                          <span className="text-emerald-400 font-bold">+${addon.price}</span>
                          <span>{addon.extraDays > 0 ? `+${addon.extraDays}d` : `${addon.extraDays}d rush`}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Instant Live Quote Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl p-6 sm:p-7 glass-panel border border-emerald-500/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-emerald-400 font-bold">
                    ESTIMATED QUOTE
                  </span>
                  <h3 className="text-xl font-bold text-white">Project Scope Summary</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="font-medium text-white">{activePackage.title}</span>
                  <span className="font-mono font-bold">${activePackage.price}</span>
                </div>

                {selectedAddOns.map((id) => {
                  const addon = addOnsList.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-neutral-400 pl-2 border-l border-emerald-500/30">
                      <span className="line-clamp-1">{addon.title}</span>
                      <span className="font-mono text-emerald-400 font-semibold">+${addon.price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Totals Box */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-white/10 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-neutral-400">Estimated Total:</span>
                  <div className="text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    ${calculatedTotal}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-neutral-400 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>Estimated Turnaround:</span>
                  </div>
                  <strong className="text-white font-bold">~{calculatedDays} Business Days</strong>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited revisions until 100% satisfied</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Safe milestone payment (Upwork, Fiverr, Wise)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleBookNow}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Book This Scope via Form' : 'এই বাজেটে শুরু করুন'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-xs transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'en' ? 'Send Scope Directly to WhatsApp' : 'সরাসরি হোয়াটসঅ্যাপে কোট পাঠান'}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
