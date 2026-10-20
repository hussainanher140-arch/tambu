import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, TrendingUp, Sparkles, Filter, Palette } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, Language } from '../types';

interface PortfolioSectionProps {
  lang: Language;
  onOpenCaseStudy: (project: Project) => void;
  onOpenLogoStudio: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  lang,
  onOpenCaseStudy,
  onOpenLogoStudio,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shopify' | 'logo' | 'speed'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'All Selected Work' : 'সকল প্রজেক্ট', count: PROJECTS.length },
    { id: 'shopify', label: lang === 'en' ? 'Shopify Stores' : 'শপিফাই স্টোর', count: PROJECTS.filter(p => p.category === 'shopify').length },
    { id: 'logo', label: lang === 'en' ? 'Logo & Branding' : 'লোগো ও ব্র্যান্ড', count: PROJECTS.filter(p => p.category === 'logo').length },
    { id: 'speed', label: lang === 'en' ? 'Speed & CRO' : 'স্পিড ও সিআরও', count: PROJECTS.filter(p => p.category === 'speed').length },
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Featured Case Studies' : 'বাস্তবায়িত কাজসমূহ'}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {lang === 'en' ? (
                <>
                  Proven Results.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    Built to Perform.
                  </span>
                </>
              ) : (
                <span className="font-bangla">
                  প্রমাণিত ফলাফল ও উচ্চমানের বাস্তব কাজ।
                </span>
              )}
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              {lang === 'en'
                ? 'Browse custom Shopify storefronts, minimalist vector logos, and performance overhauls crafted for clients worldwide.'
                : 'বিশ্বব্যাপী বিভিন্ন ক্লায়েন্টের জন্য তৈরি করা প্রিমিয়াম শপিফাই স্টোর ও ব্র্যান্ড লোগো ডিজাইন ঘুরে দেখুন।'}
            </p>
          </div>

          {/* Interactive Logo Sandbox CTA button */}
          <button
            onClick={onOpenLogoStudio}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-teal-500/40 bg-teal-950/40 hover:bg-teal-900/50 text-teal-300 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-teal-500/10 cursor-pointer self-start md:self-auto"
          >
            <Palette className="w-4 h-4 text-teal-400" />
            <span>{lang === 'en' ? 'Try Interactive Logo Sandbox' : 'ইন্টারেক্টিভ লোগো স্যান্ডবক্স'}</span>
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/5">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeFilter === tab.id
                  ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                  : 'bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 border border-white/5'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  activeFilter === tab.id ? 'bg-neutral-950/20 text-neutral-900' : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenCaseStudy(project)}
              className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail image with zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-neutral-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-xs shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'View Case Study' : 'কেস স্টাডি দেখুন'}</span>
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6">
                  <div className="text-[11px] font-medium text-neutral-400 mb-1">
                    {project.client} • {project.industry}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {lang === 'en' ? project.title : project.titleBn}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {lang === 'en' ? project.description : project.descriptionBn}
                  </p>

                  {/* Metric Pill if present */}
                  {project.metrics && project.metrics[0] && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.metrics[0].label}:</span>
                      <strong className="text-white">{project.metrics[0].value}</strong>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-emerald-400 transition-colors">
                <span>{lang === 'en' ? 'Explore Details & Specs' : 'বিস্তারিত দেখুন'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
