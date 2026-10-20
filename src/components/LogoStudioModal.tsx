import React, { useState } from 'react';
import { X, Eye, Sparkles, Layers, Palette, Check } from 'lucide-react';
import { Language } from '../types';

interface LogoStudioModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onBookLogo: () => void;
}

export const LogoStudioModal: React.FC<LogoStudioModalProps> = ({
  isOpen,
  lang,
  onClose,
  onBookLogo,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<'lumina' | 'apex' | 'smt' | 'verdant'>('lumina');
  const [activeSurface, setActiveSurface] = useState<'card' | 'dark' | 'packaging' | 'icon'>('card');
  const [colorFilter, setColorFilter] = useState<'original' | 'monochrome' | 'gold' | 'neon'>('original');

  if (!isOpen) return null;

  const brands = {
    lumina: {
      name: 'Lumina Botanicals',
      tagline: 'Clean Holistic Skincare & Organic Serums',
      symbol: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 15 C52 35 70 48 85 50 C65 52 52 70 50 85 C48 65 30 52 15 50 C35 48 48 30 50 15 Z" />
          <circle cx="50" cy="50" r="6" />
        </svg>
      ),
      colors: {
        original: 'text-emerald-700',
        monochrome: 'text-neutral-900',
        gold: 'text-amber-500',
        neon: 'text-emerald-400',
      },
    },
    apex: {
      name: 'Apex Shield Infosec',
      tagline: 'Enterprise Cyber Defense & Cloud Infrastructure',
      symbol: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 10 L82 25 L82 55 C82 75 50 92 50 92 C50 92 18 75 18 55 L18 25 Z" fillOpacity="0.2" />
          <path d="M50 18 L74 30 L74 54 C74 70 50 84 50 84 C50 84 26 70 26 54 L26 30 Z" />
          <polygon points="50,32 62,56 38,56" fill="white" />
        </svg>
      ),
      colors: {
        original: 'text-cyan-500',
        monochrome: 'text-neutral-800',
        gold: 'text-amber-400',
        neon: 'text-cyan-400',
      },
    },
    smt: {
      name: 'Salman Mohammad Tarek',
      tagline: 'Shopify Developer & Brand Architecture',
      symbol: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <rect x="20" y="20" width="60" height="60" rx="14" fillOpacity="0.1" stroke="currentColor" strokeWidth="4" />
          <path d="M35 38 C35 32 45 32 50 38 C55 44 65 44 65 52 C65 60 55 60 50 56" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M50 45 L50 72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
      colors: {
        original: 'text-emerald-500',
        monochrome: 'text-neutral-900',
        gold: 'text-amber-500',
        neon: 'text-teal-400',
      },
    },
    verdant: {
      name: 'Verdant Oasis',
      tagline: 'Urban Botanical Nursery & Flora DTC',
      symbol: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 20 C65 20 80 40 75 65 C70 85 50 85 50 85 C50 85 30 85 25 65 C20 40 35 20 50 20 Z" />
          <line x1="50" y1="30" x2="50" y2="78" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="45" x2="65" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="58" x2="35" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      colors: {
        original: 'text-emerald-600',
        monochrome: 'text-neutral-900',
        gold: 'text-amber-600',
        neon: 'text-lime-400',
      },
    },
  };

  const currentBrand = brands[selectedBrand];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Palette className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Interactive Logo Mockup Sandbox' : 'লোগো মকআপ ইন্টারঅ্যাকটিভ স্যান্ডবক্স'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {lang === 'en' ? 'Test Logos Across Real-World Surfaces' : 'বাস্তব সারফেসে লোগোর লুক টেস্ট করুন'}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            {lang === 'en'
              ? 'Select any of Salman’s crafted logo designs below and preview how the identity renders on premium stationery, packaging, app icons, and dark interfaces.'
              : 'সালমানের ডিজাইন করা লোগোগুলো নির্বাচন করে প্রিমিয়াম বিজনেস কার্ড, প্যাকেজিং ও অ্যাপ আইকনে কেমন দেখাবে তা পরীক্ষা করুন।'}
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
          {(Object.keys(brands) as (keyof typeof brands)[]).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedBrand(key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedBrand === key
                  ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {brands[key].name}
            </button>
          ))}
        </div>

        {/* Controls: Surfaces & Color Finishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Surface view */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'Application Surface' : 'মকআপ সারফেস'}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setActiveSurface('card')}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  activeSurface === 'card'
                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Business Card
              </button>
              <button
                onClick={() => setActiveSurface('dark')}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  activeSurface === 'dark'
                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                OLED Obsidian
              </button>
              <button
                onClick={() => setActiveSurface('packaging')}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  activeSurface === 'packaging'
                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Retail Box
              </button>
              <button
                onClick={() => setActiveSurface('icon')}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  activeSurface === 'icon'
                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                App Icon
              </button>
            </div>
          </div>

          {/* Color theme finish */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-teal-400" />
              <span>{lang === 'en' ? 'Color Finish' : 'কালার ফিনিশ'}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setColorFilter('original')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  colorFilter === 'original'
                    ? 'border-teal-500 bg-teal-950/40 text-teal-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Original
              </button>
              <button
                onClick={() => setColorFilter('gold')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  colorFilter === 'gold'
                    ? 'border-amber-500 bg-amber-950/40 text-amber-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Gold Foil
              </button>
              <button
                onClick={() => setColorFilter('monochrome')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  colorFilter === 'monochrome'
                    ? 'border-neutral-500 bg-neutral-800 text-white'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Monochrome
              </button>
              <button
                onClick={() => setColorFilter('neon')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                  colorFilter === 'neon'
                    ? 'border-emerald-400 bg-emerald-950/50 text-emerald-300'
                    : 'border-white/5 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                Neon Glow
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Rendering Canvas */}
        <div className="relative min-h-[340px] sm:min-h-[380px] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8 transition-all">
          
          {/* Surface: Business Card */}
          {activeSurface === 'card' && (
            <div className="relative w-full max-w-md aspect-[1.75/1] rounded-2xl bg-neutral-100 text-neutral-900 shadow-2xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-300">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14">
                  <div className={currentBrand.colors[colorFilter]}>
                    {currentBrand.symbol}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    Premium Identity
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-neutral-900">
                  {currentBrand.name}
                </h4>
                <p className="text-[11px] text-neutral-600 font-medium">
                  {currentBrand.tagline}
                </p>
                <div className="pt-3 mt-2 border-t border-neutral-300 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <span>hello@{selectedBrand}brand.com</span>
                  <span>www.{selectedBrand}store.com</span>
                </div>
              </div>
            </div>
          )}

          {/* Surface: OLED Obsidian Dark Interface */}
          {activeSurface === 'dark' && (
            <div className="relative w-full max-w-lg aspect-[1.8/1] rounded-2xl bg-neutral-950 text-white shadow-2xl p-8 flex flex-col items-center justify-center border border-white/10 text-center">
              <div className="w-20 h-20 mb-4 transition-transform hover:scale-110">
                <div className={`${currentBrand.colors[colorFilter]} drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]`}>
                  {currentBrand.symbol}
                </div>
              </div>
              <h4 className="text-2xl font-display font-bold tracking-tight text-white mb-1">
                {currentBrand.name}
              </h4>
              <p className="text-xs text-neutral-400 max-w-xs font-medium">
                {currentBrand.tagline}
              </p>
            </div>
          )}

          {/* Surface: Retail Product Packaging */}
          {activeSurface === 'packaging' && (
            <div className="relative w-full max-w-xs aspect-[1/1.2] rounded-3xl bg-neutral-800 text-white shadow-2xl p-6 flex flex-col justify-between border border-white/10">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span>NET WT. 100ml / 3.4 FL. OZ</span>
                <span>GRADE A</span>
              </div>
              <div className="my-auto text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <div className={currentBrand.colors[colorFilter]}>
                    {currentBrand.symbol}
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold tracking-wider uppercase">
                  {currentBrand.name}
                </h4>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Bespoke E-commerce Collection
                </p>
              </div>
              <div className="text-center text-[9px] text-neutral-500 font-mono tracking-widest uppercase">
                Art Direction by Salman Mohammad Tarek
              </div>
            </div>
          )}

          {/* Surface: iOS App Icon */}
          {activeSurface === 'icon' && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[32px] bg-neutral-950 border border-white/15 shadow-2xl flex items-center justify-center p-6 group hover:scale-105 transition-transform">
                <div className={`w-full h-full ${currentBrand.colors[colorFilter]}`}>
                  {currentBrand.symbol}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white">{currentBrand.name}</p>
                <p className="text-[11px] text-neutral-400">iOS Retina App Icon (1024x1024 SVG)</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400">
            {lang === 'en'
              ? 'Includes: 100% Vector Source (.AI, .SVG, .EPS), Social Media Kit, and Commercial Rights.'
              : 'অন্তর্ভুক্ত: ফুল ভেক্টর সোর্স ফাইল (.AI, .SVG, .EPS), সোশ্যাল কিট এবং ১০০% কমার্শিয়াল রাইটস।'}
          </div>
          <button
            onClick={() => {
              onClose();
              onBookLogo();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            {lang === 'en' ? 'Get Your Custom Logo ($150+)' : 'লোগো ডিজাইন অর্ডার করুন ($১৫০+)'}
          </button>
        </div>

      </div>
    </div>
  );
};
