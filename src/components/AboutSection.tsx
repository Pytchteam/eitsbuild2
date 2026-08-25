import React from 'react';
import { ShieldCheck, HardHat, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-16 lg:py-24 relative bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Image Collage with Glossy Badges (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[36px] overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1100&q=80"
                alt="E.I.T.S Construction & Finishing in Jamaica"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Claymorphic Badge Top Right */}
              <div className="absolute top-6 right-6 clay-card p-4 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Master Builders</span>
                  <span className="text-xs font-black text-white uppercase">Jamaican Standards</span>
                </div>
              </div>

              {/* Floating Gloss Banner Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 gloss-block p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl red-gloss flex items-center justify-center text-white font-black text-sm">
                    5.0
                  </div>
                  <div>
                    <span className="text-xs font-black text-white uppercase block">24 Verified Google Reviews</span>
                    <span className="text-[10px] text-gray-300">100% Client Satisfaction Record</span>
                  </div>
                </div>
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
              </div>
            </div>

            {/* Decorative background red accent */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-red-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          </div>

          {/* Right Column: About Narrative & Value Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-extrabold">
                About E.I.T.S
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              Committed to <span className="text-red-600">Quality Craftsmanship</span> &amp; Structural Integrity
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="text-white">E.I.T.S / Construction &amp; Finishing Company</strong> is a premier construction and interior-finishing contractor based in Jamaica. We specialize in taking projects from bare foundations to turnkey, magazine-quality finishes.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8">
              Whether building a custom luxury residence in Norbrook, remodeling a commercial office in Montego Bay, or executing laser-precise tiling and drop ceiling installations, our team prioritizes safety, structural durability, clear communication, and customer satisfaction.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="gloss-block p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">Quality Workmanship</span>
                </div>
                <p className="text-[11px] text-gray-400">Strict structural checks and premium material sourcing.</p>
              </div>

              <div className="gloss-block p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">Professional Service</span>
                </div>
                <p className="text-[11px] text-gray-400">Clear timelines, respectful crews, and organized sites.</p>
              </div>

              <div className="gloss-block p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">Customer Satisfaction</span>
                </div>
                <p className="text-[11px] text-gray-400">Backed by a 5.0 Google review rating across projects.</p>
              </div>

              <div className="gloss-block p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">Reliable Delivery</span>
                </div>
                <p className="text-[11px] text-gray-400">Milestone-driven project management you can trust.</p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenQuote}
                className="red-gloss px-8 py-4 rounded-2xl font-black uppercase text-xs sm:text-sm tracking-wider text-white inline-flex items-center gap-2.5 cursor-pointer shadow-lg shadow-red-600/30"
              >
                <span>Partner With E.I.T.S</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
