import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WORK_PROCESS_STEPS } from '../data/mockData';
import { 
  ShieldCheck, Award, HardHat, Clock, Sparkles, CheckCircle2, 
  XCircle, FileSpreadsheet, ArrowRight, Check, Compass, Hammer
} from 'lucide-react';

interface WhyUsPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onOpenQuote, onNavigate }) => {
  const strengths = [
    {
      title: 'Quality Work',
      subtitle: 'Engineered for Longevity',
      description: 'We never cut corners on rebar gauge, cement-to-aggregate ratios, or waterproofing membranes. Every structure is built to endure Jamaican tropical conditions for decades.',
      icon: <Award className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Reliable Service',
      subtitle: 'Punctual & Disciplined',
      description: 'We respect your time and capital. Our project managers maintain tight daily logs, organized material staging, and timely milestone progress updates.',
      icon: <Clock className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Attention to Detail',
      subtitle: 'Laser-Leveled Excellence',
      description: 'From 1/16-inch grout joints to seamless drywall butt-joints and crisp paint cut-ins, our master finishers obsess over the details that define true luxury.',
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Professional Team',
      subtitle: 'Vetted & Experienced Craftsmen',
      description: 'Our crews consist of seasoned Jamaican masons, certified electricians, master carpenters, and insured site supervisors who uphold high workplace standards.',
      icon: <HardHat className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Customer Focus',
      subtitle: 'Transparent Milestone Communication',
      description: 'You are never left in the dark. We provide photo logs, WhatsApp weekly video walkthroughs, and clear milestone sign-offs before disbursements.',
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Complete Solutions',
      subtitle: 'Turnkey Design & Build',
      description: 'From initial foundation trenching to the final coat of satin paint and chandelier mounting, we handle every discipline under one accountable contract.',
      icon: <FileSpreadsheet className="w-6 h-6 text-red-500" />,
    },
  ];

  const comparisons = [
    {
      feature: 'Detailed Itemized Bill of Quantities (BOQ)',
      eits: true,
      others: false,
      detail: 'Clear itemized breakdown of materials & labor with fixed rates.',
    },
    {
      feature: 'Milestone-Based Payment Staging',
      eits: true,
      others: false,
      detail: 'Funds released only after client inspects and approves each stage.',
    },
    {
      feature: 'Laser-Level Zero-Lippage Tile Installation',
      eits: true,
      others: false,
      detail: 'Optical laser level leveling system for large-format slabs.',
    },
    {
      feature: 'Jamaican Building Code & Engineering Adherence',
      eits: true,
      others: false,
      detail: 'Full adherence to structural seismic and hurricane standards.',
    },
    {
      feature: 'Daily Site Cleanup & Professional Conduct',
      eits: true,
      others: false,
      detail: 'Clean, safe, and respectful job sites every evening.',
    },
    {
      feature: 'Islandwide Parish Mobilization',
      eits: true,
      others: 'Limited',
      detail: 'Fast mobilization across all 14 Jamaican parishes.',
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="The E.I.T.S Advantage"
        title="Why Choose"
        highlightedWord="E.I.T.S"
        description="Discover why homeowners, commercial developers, and property investors across Jamaica trust E.I.T.S for unmatched quality, reliability, and precision."
        currentPage="Why Choose Us"
        onNavigate={onNavigate}
        ctaText="Get a Guaranteed Quote"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 6 Core Strengths */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 block mb-2">
                Our 6 Pillars of Excellence
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Setting the Gold Standard for <span className="text-red-600">Jamaican Construction</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className="clay-card p-8 rounded-[32px] flex flex-col justify-between group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl stat-icon-3d flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <div>
                    <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-red-400 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Guaranteed on every project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process Roadmap */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 block mb-2">
                Predictable &amp; Stress-Free
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Our 4-Step Build <span className="text-red-600">Roadmap</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {WORK_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="clay-card p-6 sm:p-8 rounded-[32px] flex flex-col justify-between relative group hover:border-red-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl sm:text-4xl font-black text-red-500/80 group-hover:text-red-500 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                      {idx === 0 && <Compass className="w-5 h-5" />}
                      {idx === 1 && <FileSpreadsheet className="w-5 h-5" />}
                      {idx === 2 && <Hammer className="w-5 h-5" />}
                      {idx === 3 && <Sparkles className="w-5 h-5" />}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-red-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Milestone Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table: E.I.T.S vs. Unregulated Contractors */}
          <div className="clay-card p-6 sm:p-10 rounded-[36px] border border-white/10 overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 block mb-1">
                Transparency First
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                How E.I.T.S Compares
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-4 font-black">Standard / Deliverable</th>
                    <th className="py-4 px-4 font-black text-red-400 text-center bg-red-950/20 rounded-t-xl">
                      E.I.T.S Company
                    </th>
                    <th className="py-4 px-4 font-black text-gray-400 text-center">
                      Typical Contractors
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisons.map((comp, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 font-bold text-white">
                        <div>{comp.feature}</div>
                        <div className="text-[11px] text-gray-400 font-normal mt-0.5">{comp.detail}</div>
                      </td>
                      <td className="py-4 px-4 text-center bg-red-950/10">
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-black px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Included
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof comp.others === 'boolean' ? (
                          <span className="inline-flex items-center gap-1 text-red-400 font-bold px-2.5 py-1 rounded-full bg-red-950/30 border border-red-500/20">
                            <XCircle className="w-3.5 h-3.5" /> Rare / Inconsistent
                          </span>
                        ) : (
                          <span className="text-gray-400 font-medium">{comp.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <button
                onClick={() => onOpenQuote()}
                className="red-gloss px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:scale-105 transition-transform cursor-pointer"
              >
                Experience the E.I.T.S Standard on Your Project
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
