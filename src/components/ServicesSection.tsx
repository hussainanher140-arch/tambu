import React from 'react';
import { ShoppingBag, Palette, Zap, Layers, Cpu, Sparkles, Check, ArrowRight, Clock, Tag, Radio, Bot, TrendingUp } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Language, Service } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: Service) => void;
  onOpenEstimator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onOpenEstimator,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Palette':
        return Palette;
      case 'Zap':
        return Zap;
      case 'Layers':
        return Layers;
      case 'Cpu':
        return Cpu;
      case 'Radio':
        return Radio;
      case 'Bot':
        return Bot;
      case 'TrendingUp':
        return TrendingUp;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-neutral-950">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Core Capabilities' : 'আমার বিশেষ সেবাগুলো'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered For Sales.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Designed For Distinction.
                </span>
              </>
            ) : (
              <span className="font-bangla">
                বিক্রি বাড়াতে প্রিমিয়াম কোড, আকর্ষণ বাড়াতে নিখুঁত ডিজাইন।
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Whether you need a brand new Shopify flagship store, a lightning-fast speed overhaul, or a memorable vector logo identity, I deliver tailored results built to perform.'
              : 'নতুন শপিফাই স্টোর তৈরি, সাইটের স্পিড বাড়ানো কিংবা নজরকাড়া ভেক্টর লোগো — আপনার বিজনেসের জন্য রয়েছে পরিপূর্ণ ডিজিটাল সল্যুশন।'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-6 sm:p-7 glass-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/30 flex items-center justify-center text-emerald-400 transition-all mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {lang === 'en' ? service.title : service.titleBn}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'en' ? service.shortDesc : service.shortDescBn}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                    {(lang === 'en' ? service.deliverables : service.deliverablesBn).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer specs & CTA */}
                <div className="pt-5 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      <span>{service.turnaround}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400 text-sm">
                      <Tag className="w-3.5 h-3.5" />
                      <span>From {service.startingPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-emerald-500 hover:text-neutral-950 border border-white/10 hover:border-emerald-400 text-neutral-200 text-xs sm:text-sm font-semibold transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Configure & Get Quote' : 'কোটেশন নিন'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Estimator banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-teal-950/40 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white font-bold text-lg sm:text-xl">
              {lang === 'en' ? 'Need a Custom Scope or Combination?' : 'কাস্টম রিকোয়ারমেন্ট বা স্পেশাল বাজেট আছে?'}
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              {lang === 'en'
                ? 'Use my interactive Project Estimator to combine services and calculate exact cost and delivery timeline.'
                : 'আমাদের ইন্টারেক্টিভ ক্যালকুলেটর দিয়ে আপনার প্রয়োজনীয় ফিচার সিলেক্ট করে সরাসরি প্রাক্কলিত খরচ দেখে নিন।'}
            </p>
          </div>
          <button
            onClick={onOpenEstimator}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'en' ? 'Launch Cost Estimator' : 'খরচ হিসাব ওপেন করুন'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
