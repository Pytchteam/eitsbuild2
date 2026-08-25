import React, { useState } from 'react';
import { ArrowRight, Star, CheckCircle2, Shield, Hammer, Sparkles, Building, PhoneCall, ChevronRight } from 'lucide-react';
import { PARISHES_JAMAICA } from '../data/mockData';

interface HeroProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigate }) => {
  const [quickService, setQuickService] = useState('Interior Finishing & Drywall');
  const [quickParish, setQuickParish] = useState('Kingston');
  const [quickSqFt, setQuickSqFt] = useState('1200');

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('quote');
    }
    onOpenQuote(quickService);
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <section id="home" className="relative pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-red-800/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hero Copy & Main Presentation Card (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            
            {/* Primary Gloss Banner Card with Breathing Animation */}
            <div className="gloss-block animate-breathing rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative min-h-[480px] sm:min-h-[520px]">
              
              {/* Background Architectural Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none rounded-[inherit]" 
                style={{
                  backgroundImage: 'radial-gradient(#FF1F1F 1.2px, transparent 1.2px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Top Tagline Badges */}
              <div className="flex flex-wrap items-center gap-2.5 z-10 mb-6">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Jamaican Excellence in Finishing</span>
                </div>
                <button
                  onClick={() => handleNav('reviews')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:border-red-500/50 transition-colors cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-red-400" />
                  <span>5.0 Rating • 24 Google Reviews</span>
                </button>
              </div>

              {/* Bold Typography Headline */}
              <div className="z-10 my-auto">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[66px] font-extrabold uppercase leading-[0.95] tracking-tight text-white mb-6">
                  Building With <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">Quality</span>.<br />
                  Finishing With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Excellence</span>.
                </h1>

                <p className="max-w-2xl text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
                  <strong className="text-white font-semibold">E.I.T.S / Construction &amp; Finishing Company</strong> delivers 
                  reliable construction, structural renovation, and precision interior finishing solutions with certified Jamaican craftsmanship and uncompromising attention to detail.
                </p>

                {/* Main Hero CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('quote');
                      else onOpenQuote();
                    }}
                    className="red-gloss px-8 sm:px-10 py-4 sm:py-5 rounded-[22px] font-extrabold text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-3 cursor-pointer shadow-xl shadow-red-600/30 hover:scale-105 transition-transform"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleNav('services')}
                    className="gloss-block px-7 sm:px-8 py-4 sm:py-5 rounded-[22px] font-bold text-sm sm:text-base text-gray-200 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Our Services</span>
                    <ChevronRight className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                <button
                  onClick={() => handleNav('about')}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Licensed Builders &amp; Engineers</span>
                </button>
                <button
                  onClick={() => handleNav('why-us')}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Transparent Fixed Billing</span>
                </button>
                <button
                  onClick={() => handleNav('location')}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Islandwide Service Coverage</span>
                </button>
              </div>

            </div>

            {/* 4 Claymorphic 3D Feature Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <button
                onClick={() => handleNav('services')}
                className="gloss-block gloss-block-interactive rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 mb-1 group-hover:scale-110 transition-transform">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">General</span>
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">Construction</span>
              </button>

              <button
                onClick={() => handleNav('services')}
                className="gloss-block gloss-block-interactive rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 mb-1 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Interior</span>
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">Finishing</span>
              </button>

              <button
                onClick={() => handleNav('services')}
                className="gloss-block gloss-block-interactive rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 mb-1 group-hover:scale-110 transition-transform">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Custom</span>
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">Tiling &amp; Slabs</span>
              </button>

              <button
                onClick={() => handleNav('services')}
                className="gloss-block gloss-block-interactive rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 mb-1 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Concrete</span>
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">Artistry</span>
              </button>
            </div>

          </div>

          {/* Right Column: Instant Project Estimator Card & Trust Badge (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            
            {/* Quick Quote Interactive Mini-Widget */}
            <div className="clay-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-red-500/20">
              {/* Gloss highlight top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest text-red-500 font-extrabold">Instant Estimator</span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                      Start Your Project
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500">
                    <Hammer className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  Select your Jamaican parish and requested service to initiate an itemized quotation.
                </p>

                <form onSubmit={handleQuickEstimate} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="neomorph-input w-full text-xs sm:text-sm text-gray-200 py-3 px-4 outline-none appearance-none cursor-pointer"
                    >
                      <option value="General Construction">General Construction</option>
                      <option value="Building Construction">Building Construction</option>
                      <option value="Renovations & Remodeling">Renovations & Remodeling</option>
                      <option value="Interior Finishing & Drywall">Interior Finishing & Drywall</option>
                      <option value="Painting & Texturing">Painting & Texturing</option>
                      <option value="Custom Tiling & Slab Work">Custom Tiling & Slab Work</option>
                      <option value="Flooring Systems">Flooring Systems</option>
                      <option value="Concrete Work & Driveways">Concrete Work & Driveways</option>
                      <option value="Roofing & Waterproofing">Roofing & Waterproofing</option>
                      <option value="Electrical Installation">Electrical Installation</option>
                      <option value="Plumbing & Drainage">Plumbing & Drainage</option>
                      <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Parish / Area
                      </label>
                      <select
                        value={quickParish}
                        onChange={(e) => setQuickParish(e.target.value)}
                        className="neomorph-input w-full text-xs text-gray-200 py-3 px-3 outline-none appearance-none cursor-pointer"
                      >
                        {PARISHES_JAMAICA.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Est. Sq Ft / Scope
                      </label>
                      <input
                        type="text"
                        value={quickSqFt}
                        onChange={(e) => setQuickSqFt(e.target.value)}
                        placeholder="e.g. 1,500 sq ft"
                        className="neomorph-input w-full text-xs text-gray-200 py-3 px-3 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="red-gloss w-full py-4 rounded-2xl font-black uppercase text-xs sm:text-sm tracking-widest text-white mt-2 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    <span>Proceed to Full Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* 5.0 Google Reviews Highlight Pill inside Estimator Card */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleNav('reviews')}
                  className="flex items-center gap-3 text-left cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-2xl stat-icon-3d flex items-center justify-center font-black text-amber-400 text-sm group-hover:scale-105 transition-transform">
                    5.0
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 group-hover:text-red-400 transition-colors">
                      24 Verified Google Reviews
                    </span>
                  </div>
                </button>

                <a 
                  href="tel:+18765550199" 
                  className="w-10 h-10 rounded-2xl gloss-block flex items-center justify-center text-red-400 hover:text-white hover:border-red-500/50 transition-colors"
                  title="Direct Phone Line"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Quick Contact & Working Hours Pill */}
            <div className="gloss-block rounded-2xl p-4 flex items-center justify-between text-xs">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Kingston Office</span>
                <span className="font-extrabold text-white text-sm">+1 (876) 555-0199</span>
              </div>
              <button
                onClick={() => handleNav('location')}
                className="px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-bold text-[11px] flex items-center gap-1.5 cursor-pointer hover:bg-emerald-950/80 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Estimates</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
