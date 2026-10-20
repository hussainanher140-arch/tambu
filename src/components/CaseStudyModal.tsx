import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, CheckCheck, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';
import { Project, Language } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  lang,
  onClose,
  onInquireSimilar,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!project) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image header */}
        <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-neutral-950">
                {project.category.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 text-neutral-300 border border-white/10">
                {project.client}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {lang === 'en' ? project.title : project.titleBn}
            </h2>
          </div>
        </div>

        {/* Key Metrics Strip if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-950/60 border border-emerald-500/20">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{metric.label}</span>
                </div>
                <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400">
              {lang === 'en' ? 'The Challenge' : 'মূল সমস্যা'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {lang === 'en'
                ? project.challenge || project.description
                : project.challengeBn || project.descriptionBn}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {lang === 'en' ? 'Salman’s Solution' : 'সালমানের সমাধান'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {lang === 'en'
                ? project.solution || 'Engineered custom Shopify solution and tailored visual identity for maximum conversion.'
                : project.solutionBn || 'কাস্টম কোডিং ও আকর্ষণীয় লোগো দিয়ে সর্বোচ্চ সেলস ও ইউজার এক্সপেরিয়েন্স নিশ্চিত করা হয়েছে।'}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        {project.deliverables && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
              {lang === 'en' ? 'Scope & Key Deliverables' : 'প্রজেক্টের আওতাভুক্ত কাজ'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Color Palette if brand project */}
        {project.colorPalette && (
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
              {lang === 'en' ? 'Brand Color Palette (Click to Copy)' : 'ব্র্যান্ড কালার প্যালেট (কপি করতে ক্লিক করুন)'}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {project.colorPalette.map((hex, idx) => (
                <button
                  key={idx}
                  onClick={() => copyHex(hex)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-neutral-950 hover:border-emerald-400 transition-all text-xs text-neutral-200 cursor-pointer"
                  title="Click to copy color hex"
                >
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="font-mono">{hex}</span>
                  {copiedHex === hex ? (
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-xs bg-neutral-800 text-neutral-300 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Live Staging Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onInquireSimilar(project.title);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'en' ? 'Request Similar Project' : 'অনুরূপ প্রজেক্টের কোটেশন'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
