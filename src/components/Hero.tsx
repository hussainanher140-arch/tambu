import React from 'react';
import { ArrowRight, CheckCircle2, ShoppingBag, Palette, Zap, Star, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onExploreWork: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreWork,
  onOpenEstimator,
  onOpenContact,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 -right-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  {lang === 'en'
                    ? 'Available for Shopify & Logo Projects'
                    : 'নতুন শপিফাই ও লোগো প্রজেক্টের জন্য উন্মুক্ত'}
                </span>
              </div>

              <a
                href="https://www.thevylor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/30 hover:bg-teal-900/50 text-teal-300 text-xs font-semibold tracking-wide backdrop-blur-md transition-all group"
                title="Agency: The Vylor"
              >
                <span>Lead at The Vylor</span>
                <span className="text-teal-400 group-hover:underline">www.thevylor.com</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
              {lang === 'en' ? (
                <>
                  Turning Visitors Into Buyers With{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                    High-Converting Shopify Stores
                  </span>{' '}
                  & Iconic Logos.
                </>
              ) : (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 font-bangla">
                    আকর্ষণীয় শপিফাই স্টোর
                  </span>{' '}
                  <span className="font-bangla">এবং আইকনিক লোগো ডিজাইনে আপনার ই-কমার্স ব্যবসাকে দিন অনন্য মাত্রা।</span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {lang === 'en' ? (
                <>
                  Hi, I’m <strong className="text-white font-semibold">Salman Mohammad Tarek</strong>.
                  I bridge the gap between aesthetic brand identity and rock-solid Shopify Liquid engineering. 
                  Get a store that loads in under 1 second, looks unforgettable, and scales your sales.
                </>
              ) : (
                <span className="font-bangla">
                  আমি <strong className="text-white font-semibold">সালমান মোহাম্মদ তারেক</strong> — একজন প্রফেশনাল শপিফাই ডেভেলপার এবং ব্র্যান্ড লোগো ডিজাইনার। 
                  আপনার ব্যবসার জন্য দ্রুতগতির, আধুনিক এবং সেলস বৃদ্ধিকারী শপিফাই স্টোর এবং প্রিমিয়াম লোগো তৈরিতে আমি সাহায্য করি।
                </span>
              )}
            </p>

            {/* Quick Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Shopify 2.0 & Liquid</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Pixel Connector & CAPI</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>AI Store Integrator</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Digital Marketing Ads</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Logo & Brand Identity</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>90+ PageSpeed Score</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Start Your Project' : 'প্রজেক্ট শুরু করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-sm sm:text-base transition-all hover:border-emerald-500/50 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Get Instant Quote' : 'খরচ হিসাব করুন'}</span>
              </button>

              <a
                href="https://wa.me/8801852430258?text=Hello%20Salman%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20Shopify%2FLogo%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-300 font-medium text-sm transition-all"
                title="Direct WhatsApp: 01852430258"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 01852430258</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                <strong className="text-white font-semibold">5.0 / 5.0</strong> rating across 110+ client reviews
              </span>
            </div>
          </div>

          {/* Right Column: Salman's Portrait & Interactive Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src={PERSONAL_INFO.images.heroAvatar}
                    alt="Salman Mohammad Tarek - Shopify Developer & Logo Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Verified Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 backdrop-blur-md text-xs font-semibold text-white shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Shopify Expert</span>
                  </div>

                  {/* Dual Superpower Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-neutral-900/90 border border-teal-500/40 backdrop-blur-md text-[11px] font-semibold text-teal-300 shadow-lg">
                    <Palette className="w-3.5 h-3.5 text-teal-400" />
                    <span>Brand Designer</span>
                  </div>

                  {/* Bottom identity tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-neutral-950/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Salman Mohammad Tarek</p>
                      <p className="text-xs text-emerald-400 font-medium">Shopify Developer & Logo Designer</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] text-neutral-300 font-medium bg-neutral-800/80 px-2 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Top Rated
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Stores Launched */}
              <div className="absolute -left-4 sm:-left-8 top-1/4 p-3 rounded-2xl glass-panel shadow-xl shadow-black/50 border border-emerald-500/30 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">180+ Stores</div>
                  <div className="text-[11px] text-neutral-400">Custom Liquid Built</div>
                </div>
              </div>

              {/* Floating Badge 2: Logos Crafted */}
              <div className="absolute -right-4 sm:-right-8 bottom-1/4 p-3 rounded-2xl glass-panel shadow-xl shadow-black/50 border border-teal-500/30 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">250+ Logos</div>
                  <div className="text-[11px] text-neutral-400">Iconic Identities</div>
                </div>
              </div>

              {/* Floating Badge 3: Speed Promise */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-panel border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>90+ PageSpeed Score Guarantee</span>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400">5+</div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {lang === 'en' ? 'Years of Experience' : 'বছরের অভিজ্ঞতা'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-teal-300">180+</div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {lang === 'en' ? 'Shopify Stores Built' : 'শপিফাই স্টোর তৈরি'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400">250+</div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {lang === 'en' ? 'Brand Logos Crafted' : 'ব্র্যান্ড লোগো ডিজাইন'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-teal-300">99.8%</div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {lang === 'en' ? 'Positive Client Rating' : 'ক্লায়েন্ট সন্তুষ্টি'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
