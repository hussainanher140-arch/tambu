import React from 'react';
import { ShoppingBag, Palette, Zap, Code, Shield, Sparkles, Layers, Cpu, Radio, Bot, TrendingUp } from 'lucide-react';

export const TechStackTicker: React.FC = () => {
  const tools = [
    { name: 'Shopify 2.0', category: 'E-commerce', icon: ShoppingBag, color: 'text-emerald-400' },
    { name: 'Meta Pixel & CAPI', category: 'Pixel Connector', icon: Radio, color: 'text-blue-400' },
    { name: 'AI Store Integrations', category: 'AI Integrator', icon: Bot, color: 'text-emerald-300' },
    { name: 'Digital Marketing & Ads', category: 'Marketing', icon: TrendingUp, color: 'text-teal-400' },
    { name: 'Liquid Templating', category: 'Code', icon: Code, color: 'text-teal-400' },
    { name: 'GTM & GA4 Server-Side', category: 'Tracking', icon: Zap, color: 'text-amber-400' },
    { name: 'Adobe Illustrator', category: 'Vector Logo', icon: Palette, color: 'text-amber-400' },
    { name: 'Shopify Plus', category: 'Enterprise', icon: Sparkles, color: 'text-emerald-300' },
    { name: 'Figma UI/UX', category: 'Design', icon: Layers, color: 'text-purple-400' },
    { name: 'PageSpeed 90+', category: 'Optimization', icon: Zap, color: 'text-yellow-400' },
    { name: 'Klaviyo Automation', category: 'Retention', icon: Cpu, color: 'text-emerald-400' },
    { name: 'Conversion CRO', category: 'Strategy', icon: Shield, color: 'text-emerald-400' },
  ];

  return (
    <div className="py-8 bg-neutral-950/70 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
          Proven Tech Stack & Design Ecosystem
        </span>
      </div>

      <div className="flex w-full overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-6 py-2 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-emerald-500/30 transition-all cursor-default group"
              >
                <Icon className={`w-4 h-4 ${tool.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-semibold text-neutral-200 group-hover:text-white">
                  {tool.name}
                </span>
                <span className="text-[10px] text-neutral-400 font-medium px-1.5 py-0.5 rounded bg-neutral-800">
                  {tool.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
