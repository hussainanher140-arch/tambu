import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenEstimator,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: lang === 'en' ? 'Services' : 'সার্ভিসসমূহ' },
    { href: '#portfolio', label: lang === 'en' ? 'Portfolio' : 'পোর্টফোলিও' },
    { href: '#estimator', label: lang === 'en' ? 'Cost Estimator' : 'খরচ হিসাব' },
    { href: '#about', label: lang === 'en' ? 'About Salman' : 'সালমান সম্পর্কে' },
    { href: '#reviews', label: lang === 'en' ? 'Client Reviews' : 'রিভিউ' },
    { href: '#faq', label: lang === 'en' ? 'FAQ' : 'সাধারণ প্রশ্ন' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand with Salman's Photo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-500 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950">
                <img
                  src="/assets/aistudio/548214494_1486575622495883_7350552310870450538_n_cbb297e3.jpg"
                  alt="Salman Mohammad Tarek"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-950 shadow" title="Online & Available" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">
                  Salman M. Tarek
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  Shopify Pro
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <span>{lang === 'en' ? 'Shopify Dev & Logo Designer' : 'শপিফাই ও লোগো ডিজাইনার'}</span>
                <span className="text-neutral-600">•</span>
                <a
                  href="https://www.thevylor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-teal-400 hover:text-teal-300 font-semibold underline decoration-teal-500/40 hover:decoration-teal-300 transition-colors"
                  title="Visit Salman's agency website: www.thevylor.com"
                >
                  thevylor.com
                </a>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* The Vylor Business Site Link */}
            <a
              href="https://www.thevylor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-500/30 bg-teal-950/30 hover:bg-teal-900/40 text-teal-300 text-xs font-semibold transition-all"
              title="Official Agency: The Vylor"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>thevylor.com</span>
              <ArrowUpRight className="w-3 h-3 text-teal-400/80" />
            </a>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold transition-all hover:border-emerald-500/40"
              title="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Estimator Button */}
            <button
              onClick={onOpenEstimator}
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 text-xs font-semibold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'Cost Estimator' : 'খরচ হিসাব'}</span>
            </button>

            {/* Direct Hire CTA */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{lang === 'en' ? 'Hire Salman' : 'হায়ার করুন'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-medium text-emerald-400"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="https://www.thevylor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-teal-500/30 bg-teal-950/40 text-teal-300 text-sm font-medium"
            >
              <Globe className="w-4 h-4 text-teal-400" />
              <span>Agency Website: www.thevylor.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'en' ? 'Project Cost Calculator' : 'প্রজেক্ট খরচ হিসাব'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-neutral-950 text-sm font-bold shadow-md shadow-emerald-500/20"
            >
              <span>{lang === 'en' ? 'Hire Salman Mohammad Tarek' : 'যোগাযোগ করুন'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
