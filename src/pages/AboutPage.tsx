import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  ShieldCheck, Award, HardHat, CheckCircle2, Clock, 
  MapPin, Users, Building, Sparkles, ArrowRight, Phone, 
  Compass, Hammer, Target
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Dedicated Page Header */}
      <PageHeader
        badge="About E.I.T.S Company"
        title="Building With Quality."
        highlightedWord="Finishing With Excellence."
        description="Headquartered in Kingston, Jamaica, E.I.T.S Construction & Finishing Company stands as a trusted leader in residential, commercial, and luxury interior renovation."
        currentPage="About Us"
        onNavigate={onNavigate}
        ctaText="Book a Site Consultation"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Story & Brand Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-red-500 block mb-2">
                  Our Jamaican Heritage &amp; Mission
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                  Crafting Solid Foundations &amp; <span className="text-red-600">Luxury Finishes</span>
                </h2>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                <strong>E.I.T.S Construction &amp; Finishing Company</strong> was founded on a simple yet revolutionary commitment: to eliminate the unreliability, vague estimates, and poor finishing standards that all too often plague construction projects in Jamaica.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether constructing multi-level residential villas in Norbrook, remodeling corporate offices in Kingston and Montego Bay, or installing pristine Italian marble in St. Ann, our multidisciplinary team of licensed engineers, master masons, drywall artisans, and certified electricians deliver perfection at every milestone.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="clay-card p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-red-500 block">100%</span>
                  <span className="text-xs font-bold text-gray-300 uppercase mt-1 block">
                    Jamaican Building Code Compliance
                  </span>
                </div>

                <div className="clay-card p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-red-500 block">5.0 ★</span>
                  <span className="text-xs font-bold text-gray-300 uppercase mt-1 block">
                    Verified Google Rating (24 Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Mosaic Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="clay-card p-4 rounded-[36px] overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"
                  alt="E.I.T.S Construction Team in Jamaica"
                  className="w-full h-96 sm:h-[420px] object-cover rounded-[28px]"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 red-gloss p-4 sm:p-5 rounded-2xl flex items-center gap-4 text-white shadow-2xl">
                  <div className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center font-black text-xl shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block opacity-90">Company Motto</span>
                    <span className="text-sm sm:text-base font-black uppercase tracking-tight">
                      Strength • Quality • Reliability • Craftsmanship
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 block mb-2">
                Our Foundation
              </span>
              <h3 className="font-display text-3xl font-black uppercase text-white tracking-tight">
                The 4 Pillars of <span className="text-red-600">E.I.T.S</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Engineering Rigor',
                  desc: 'Adherence to structural steel calculations, reinforced concrete mix designs, and hurricane tie strapping built for the Caribbean climate.',
                  icon: <Building className="w-6 h-6 text-red-500" />,
                },
                {
                  title: 'Artisanal Finishing',
                  desc: 'Zero-lippage laser leveling for porcelain and marble tiles, seamless Level-5 skim coating, and bespoke architectural ceiling details.',
                  icon: <Sparkles className="w-6 h-6 text-red-500" />,
                },
                {
                  title: 'Transparent Contracts',
                  desc: 'Comprehensive, itemized Bills of Quantities (BOQ) with clear milestone-based disbursements and absolutely zero hidden costs.',
                  icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
                },
                {
                  title: 'Islandwide Readiness',
                  desc: 'Equipped to mobilize specialized equipment, materials, and skilled crews across all 14 Jamaican parishes on scheduled time.',
                  icon: <Compass className="w-6 h-6 text-red-500" />,
                },
              ].map((pillar, idx) => (
                <div key={idx} className="clay-card p-6 rounded-3xl flex flex-col justify-between hover:border-red-500/50 transition-all">
                  <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-black uppercase text-white tracking-tight mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Standards Breakdown */}
          <div className="clay-card p-8 sm:p-12 rounded-[36px] border border-white/10 bg-gradient-to-b from-[#131317] to-[#0A0A0C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-2">
                  Quality Standards &amp; Safety Compliance
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
                  Built to Withstand Jamaica’s Tropical Elements
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  Construction in the Caribbean requires specialized knowledge of high-humidity thermal cycles, intense UV radiation, seismic fault lines, and hurricane wind loads. Every E.I.T.S project integrates:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Hurricane-rated truss anchors and tie-downs',
                    'Anti-mildew and UV elastomeric exterior finishes',
                    'Dual-coat torch-on and liquid waterproofing',
                    'Laser-guided zero-lippage slab alignment',
                    'High-PSI rebar-reinforced concrete foundations',
                    'Licensed and insured site supervisory teams',
                  ].map((std, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="gloss-block p-6 rounded-3xl text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl red-gloss mx-auto flex items-center justify-center text-white shadow-xl shadow-red-600/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black uppercase text-white">
                    Speak with an E.I.T.S Engineer
                  </h4>
                  <p className="text-xs text-gray-400">
                    Need technical advice or a direct on-site consultation anywhere in Jamaica?
                  </p>
                  <a
                    href="tel:+18765550199"
                    className="red-gloss w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2"
                  >
                    <span>Call +1 (876) 555-0199</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
