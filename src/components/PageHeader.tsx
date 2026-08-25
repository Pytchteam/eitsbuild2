import React from 'react';
import { ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  currentPage: string;
  onNavigate: (page: string) => void;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  currentPage,
  onNavigate,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#111115] via-[#0D0D10] to-[#08080A] border-b border-white/10">
      {/* Background Red Atmospheric Flare */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer text-gray-300"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-red-400 font-bold">{currentPage}</span>
          </nav>

          <button
            onClick={() => onNavigate('home')}
            className="gloss-block px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-300 hover:text-white hover:border-red-500/50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-500" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Title Container */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05] mb-4">
            {title}{' '}
            {highlightedWord && (
              <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                {highlightedWord}
              </span>
            )}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base sm:leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          {ctaText && onCtaClick && (
            <div className="mt-8">
              <button
                onClick={onCtaClick}
                className="red-gloss px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/30 hover:scale-105 transition-transform cursor-pointer"
              >
                {ctaText}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
