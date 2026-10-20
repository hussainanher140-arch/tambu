import React from 'react';
import { ArrowUp, Heart, ShoppingBag, Palette, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-500 shadow-lg shadow-emerald-500/20 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950">
                  <img
                    src="/assets/aistudio/548214494_1486575622495883_7350552310870450538_n_cbb297e3.jpg"
                    alt="Salman Mohammad Tarek"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">Salman Mohammad Tarek</h3>
                <p className="text-xs text-neutral-400">Shopify Developer & Brand Logo Designer</p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Empowering e-commerce entrepreneurs worldwide with high-converting Shopify 2.0 storefronts and timeless brand identities.'
                : 'আধুনিক শপিফাই স্টোর ও প্রিমিয়াম ব্র্যান্ড লোগো তৈরির মাধ্যমে বৈশ্বিক ই-কমার্স ব্র্যান্ডকে শক্তিশালী করা।'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 flex items-center gap-2 text-xs font-semibold transition-colors"
                title="WhatsApp 01852430258"
              >
                <MessageCircle className="w-4 h-4" />
                <span>01852430258</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-white/10 hover:border-emerald-500/40 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.thevylor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-teal-500/30 hover:border-teal-500/60 text-teal-300 flex items-center gap-1.5 text-xs font-semibold transition-colors"
                title="Agency: www.thevylor.com"
              >
                <span>thevylor.com ↗</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Navigation' : 'ন্যাভিগেশন'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Services' : 'সার্ভিসসমূহ'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Selected Work' : 'পোর্টফোলিও'}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Project Estimator' : 'খরচ হিসাব'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'About Salman' : 'সালমান সম্পর্কে'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Client Testimonials' : 'ক্লায়েন্ট রিভিউ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Expertise' : 'দক্ষতা'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Shopify 2.0 & Liquid</li>
              <li>Custom Theme Architecture</li>
              <li>Vector Logo & Brand Identity</li>
              <li>Core Web Vitals & 90+ Speed</li>
              <li>Klaviyo Flows & CRO</li>
              <li>Shopify Plus Upgrades</li>
            </ul>
          </div>

          {/* Direct Inquiry */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Get In Touch' : 'যোগাযোগ'}
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 hover:underline font-mono">{PERSONAL_INFO.email}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono">01852430258</a></p>
              <p>Agency Website: <a href="https://www.thevylor.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline font-mono">www.thevylor.com ↗</a></p>
              <p>Availability: <span className="text-emerald-400 font-semibold">Available for Work</span></p>
              <p className="pt-2 text-[11px] text-neutral-500">
                Sylhet / Dhaka, Bangladesh • Global Remote
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Salman Mohammad Tarek</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" /> for high conversions
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-neutral-900 border border-white/10 hover:border-emerald-500/40 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
