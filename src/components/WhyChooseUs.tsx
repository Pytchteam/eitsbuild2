import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Eye, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Compass, 
  FileSpreadsheet, 
  Hammer, 
  CheckCircle,
  Award,
  ArrowRight
} from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/mockData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const whyCards = [
    {
      icon: ShieldCheck,
      title: 'Quality Work',
      description: 'We focus on delivering professional workmanship, structural integrity, and premium quality results that endure Jamaica’s tropical climate.',
      badge: 'Uncompromising Standard',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'We communicate clearly, respect your schedule, and execute professionally with regular milestone check-ins throughout each project.',
      badge: 'On-Time Delivery',
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      description: 'From concrete foundation depths to laser-leveled tiling and seamless crown molding, every single millimeter of your project matters.',
      badge: 'Precision Finish',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'A dependable crew of vetted Jamaican craftsmen, certified electricians, master masons, and attentive site supervisors committed to excellence.',
      badge: 'Licensed & Skilled',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      description: 'Your vision, budget, and peace of mind are the central focus of our process, backed by honest transparent communication.',
      badge: 'Client Priority',
    },
    {
      icon: Sparkles,
      title: 'Complete Solutions',
      description: 'Enjoy the convenience of handling both heavy structural construction and high-end interior finishing through one single trusted contractor.',
      badge: 'Turnkey Simplicity',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 relative bg-[#080809] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The E.I.T.S Difference</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Why Choose <span className="text-red-600">E.I.T.S?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            We bridge the gap between heavy structural engineering and delicate interior artistry, giving Jamaican property owners a dependable partner for life.
          </p>
        </div>

        {/* 6 Core Value Cards (Claymorphic / Glossy hybrid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="clay-card gloss-block-interactive p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-red-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step 3D Animated Step Roadmap */}
        <div className="gloss-block rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 relative overflow-hidden border border-red-500/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-500 block mb-1">
              Seamless Project Execution
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Our 4-Step Proven Build Process
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="clay-card p-6 flex flex-col justify-between group relative">
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl stat-icon-3d flex items-center justify-center font-black text-red-500 text-sm">
                    {step.step}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Phase {idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-black uppercase text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-semibold text-gray-400">
                  <span>Standard Protocol</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Commitment Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-black uppercase text-white">
                Ready to Experience Seamless Contracting?
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Contact our Kingston project coordination team for an on-site evaluation.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="red-gloss px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
