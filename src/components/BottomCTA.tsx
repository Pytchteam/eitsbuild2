import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface BottomCTAProps {
  onOpenQuote: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 lg:py-20 relative bg-[#070709] overflow-hidden border-t border-white/5">
      {/* Background Deep Red Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="clay-card p-8 sm:p-14 lg:p-16 rounded-[36px] sm:rounded-[48px] border border-red-500/30 text-center relative overflow-hidden bg-gradient-to-b from-[#16161A] to-[#0D0D10]">
          
          {/* Top subtle shine */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 text-xs font-black tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Jamaican Contractor</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6">
            Ready to Start Your <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">Project?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed mb-10">
            Tell us what you need and let <strong>E.I.T.S Construction &amp; Finishing Company</strong> help bring your project to life with premium materials, master craftsmanship, and transparent billing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="red-gloss px-10 py-5 rounded-[24px] font-black text-sm sm:text-base uppercase tracking-widest text-white flex items-center gap-3 cursor-pointer shadow-2xl shadow-red-600/40 hover:scale-105 transition-transform"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+18765550199"
              className="gloss-block px-8 py-5 rounded-[24px] font-bold text-sm sm:text-base text-white hover:border-red-500/50 transition-all flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call +1 (876) 555-0199</span>
            </a>
          </div>

          {/* Verification Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" /> Free Site Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" /> Detailed Bill of Quantities
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" /> Guaranteed Quality Handover
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
